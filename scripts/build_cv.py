import argparse
import hashlib
import io
import json
import re
import tempfile
from pathlib import Path
from xml.sax.saxutils import escape

from fontTools.ttLib import TTFont as WebFont
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfdoc import PDFString
from reportlab.platypus import (
    BaseDocTemplate, Frame, KeepTogether, PageBreak, PageTemplate,
    Paragraph, Spacer,
)

ROOT = Path(__file__).resolve().parents[1]
INK = colors.HexColor('#252925')
MUTED = colors.HexColor('#5b635c')
LINE = colors.HexColor('#d9ddd7')


def load_data(path):
    match = re.fullmatch(r'\s*window\.PORTFOLIO\s*=\s*(\{.*\})\s*;?\s*', path.read_text(encoding='utf-8'), re.S)
    if not match:
        raise ValueError('content.js must contain a JSON object assigned to window.PORTFOLIO')
    return json.loads(match[1])['resume']


def register_fonts(directory):
    for name, filename in [('Ubuntu', 'Ubuntu-Regular'), ('Ubuntu-Bold', 'Ubuntu-Bold')]:
        font = WebFont(ROOT / 'assets/fonts' / (filename + '.woff'))
        font.flavor = None
        target = directory / (filename + '.ttf')
        font.save(target)
        pdfmetrics.registerFont(TTFont(name, str(target)))
    pdfmetrics.registerFontFamily('Ubuntu', normal='Ubuntu', bold='Ubuntu-Bold', italic='Ubuntu', boldItalic='Ubuntu-Bold')


def styles():
    body = ParagraphStyle('Body', fontName='Ubuntu', fontSize=10.8, leading=14.8, textColor=INK, spaceAfter=4, alignment=TA_LEFT)
    return {
        'body': body,
        'summary': ParagraphStyle('Summary', parent=body, fontSize=11, leading=15, spaceAfter=9),
        'section': ParagraphStyle('Section', parent=body, fontName='Ubuntu-Bold', fontSize=12.5, leading=16, spaceBefore=12, spaceAfter=9, keepWithNext=True),
        'job': ParagraphStyle('Job', parent=body, fontName='Ubuntu-Bold', fontSize=11.3, leading=14.5, spaceAfter=2, keepWithNext=True),
        'meta': ParagraphStyle('Meta', parent=body, fontSize=9.4, leading=12.8, textColor=MUTED, spaceAfter=4, keepWithNext=True),
        'bullet': ParagraphStyle('Bullet', parent=body, leftIndent=10, firstLineIndent=-9, spaceAfter=3),
        'compact': ParagraphStyle('Compact', parent=body, fontSize=10.3, leading=14, leftIndent=10, firstLineIndent=-9, spaceAfter=2),
        'group': ParagraphStyle('Group', parent=body, fontSize=10.5, leading=14.5, spaceAfter=4),
    }


def text(value):
    return escape(str(value))


def target_url(url, person):
    if url.startswith('#'):
        return person['portfolio'].rstrip('/') + '/' + url
    return url


def render_pdf(person, version, language, destination, sheet):
    doc = BaseDocTemplate(str(destination), pagesize=A4, leftMargin=46, rightMargin=46, topMargin=45, bottomMargin=43,
                          title=person['name'] + ' — ' + version['title'], author=person['name'])
    page_count = [0]
    portrait = ImageReader(str(ROOT / person['photo']))
    def page(canvas, document):
        page_count[0] = max(page_count[0], document.page)
        canvas._doc.Catalog.Lang = PDFString('ru-RU' if language == 'ru' else 'en-US')
        canvas.saveState()
        canvas.setStrokeColor(LINE)
        canvas.line(46, 32, A4[0] - 46, 32)
        canvas.setFont('Ubuntu', 8)
        canvas.setFillColor(MUTED)
        canvas.drawString(46, 20, person['name'] + ' · ' + version['title'])
        canvas.drawRightString(A4[0] - 46, 20, str(document.page))
        canvas.restoreState()
    doc.addPageTemplates(PageTemplate(id='CV', frames=[Frame(46, 43, A4[0]-92, A4[1]-88, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)], onPage=page))
    from reportlab.platypus import Flowable
    class Header(Flowable):
        def __init__(self):
            super().__init__()
            self.width = A4[0] - 92
            self.height = 101

        def draw(self):
            canvas = self.canv
            canvas.setFillColor(INK)
            canvas.setFont('Ubuntu-Bold', 26)
            canvas.drawString(0, 76, person['name'])
            canvas.setFont('Ubuntu', 13.5)
            canvas.drawString(0, 54, version['title'])
            canvas.setFont('Ubuntu', 9.5)
            canvas.setFillColor(MUTED)
            canvas.drawString(0, 34, person['city'] + ' · ' + person['email'])
            canvas.linkURL('mailto:' + person['email'], (0, 31, 315, 44), relative=1, thickness=0)
            handle = person['telegram']
            canvas.drawString(0, 19, 'Telegram: ' + handle)
            canvas.linkURL('https://t.me/' + handle.lstrip('@'), (0, 16, 180, 29), relative=1, thickness=0)
            url = person['portfolio']
            label = url.removeprefix('https://').rstrip('/')
            canvas.drawString(0, 4, label)
            canvas.linkURL(url, (0, 1, 330, 14), relative=1, thickness=0)
            side = 68
            x, y = self.width - side, 23
            canvas.saveState()
            clip = canvas.beginPath(); clip.circle(x + side/2, y + side/2, side/2)
            canvas.clipPath(clip, stroke=0, fill=0)
            iw, ih = portrait.getSize(); scale = max(side/iw, side/ih)
            canvas.drawImage(portrait, x+(side-iw*scale)/2, y+(side-ih*scale)/2, iw*scale, ih*scale, mask='auto')
            canvas.restoreState()
    story = [Header(), Spacer(1, 8), Paragraph(text(version['summary']), sheet['summary'])]
    for part in version['sections']:
        if part.get('pageBreakBefore'):
            story.append(PageBreak())
        story.append(Paragraph(text(part['title']), sheet['section']))
        for group in part.get('groups', []):
            story.append(Paragraph('<b>' + text(group['label']) + ':</b> ' + text(group['text']), sheet['group']))
        for job in part.get('items', []):
            name = text(job['title'])
            if job.get('url'):
                name = '<link href="' + text(target_url(job['url'], person)) + '">' + name + '</link>'
            chunks = [Paragraph(name, sheet['job']), Paragraph(text(job['role']) + ' · ' + text(job['date']), sheet['meta'])]
            bullet_style = sheet['compact'] if job.get('compact') else sheet['bullet']
            for entry in job.get('bullets', []):
                chunks.append(Paragraph('• ' + text(entry), bullet_style))
            for entry in job.get('paragraphs', []):
                chunks.append(Paragraph(text(entry), sheet['body']))
            chunks.append(Spacer(1, 6 if job.get('compact') else 8))
            story.append(KeepTogether(chunks))
        for entry in part.get('paragraphs', []):
            story.append(Paragraph(text(entry), sheet['body']))
    doc.build(story)
    return page_count[0]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--content', type=Path, default=ROOT / 'content.js')
    parser.add_argument('--output', type=Path, default=ROOT / 'assets/cv')
    args = parser.parse_args()
    resume = load_data(args.content)
    args.output.mkdir(parents=True, exist_ok=True)
    fingerprint = hashlib.sha256(json.dumps(resume, ensure_ascii=False, sort_keys=True).encode())
    for filename in [resume['contact']['photo'], 'assets/fonts/Ubuntu-Regular.woff', 'assets/fonts/Ubuntu-Bold.woff']:
        fingerprint.update((ROOT / filename).read_bytes())
    fingerprint.update(Path(__file__).read_bytes())
    revision = fingerprint.hexdigest()[:16]
    locales = {'ru': {'contact': resume['contact'], 'versions': resume['versions']}, **resume.get('translations', {})}
    base_ids = {v['id'] for v in resume['versions']}
    manifest = {'revision': revision, 'files': {}}
    with tempfile.TemporaryDirectory(prefix='cv-fonts-') as temp:
        register_fonts(Path(temp))
        sheet = styles()
        for language, locale in locales.items():
            if {v['id'] for v in locale['versions']} != base_ids:
                raise ValueError('Resume versions do not match for language: ' + language)
            for version in locale['versions']:
                name = Path(version['pdf']).name
                if not name.endswith('.pdf'):
                    raise ValueError('Expected PDF output: ' + name)
                output = args.output / name
                count = render_pdf(locale['contact'], version, language, output, sheet)
                manifest['files'][version['pdf']] = {'language': language, 'version': version['id'], 'pages': count}
                print(f'{language}/{version["id"]}: {output.name} ({count} pages)')
    (args.output / 'manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()
