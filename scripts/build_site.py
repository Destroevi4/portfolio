import argparse
import hashlib
import re
import shutil
from pathlib import Path

from build_cv import ROOT, main as build_cv


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--output', type=Path, default=ROOT / 'dist')
    args = parser.parse_args()
    output = args.output.resolve()
    if output == ROOT or ROOT not in output.parents:
        raise ValueError('Output must be a subdirectory of the project')
    output.mkdir(parents=True, exist_ok=True)
    for filename in ['index.html', 'style.css', 'app.js', 'content.js']:
        shutil.copy2(ROOT / filename, output / filename)
    revision = hashlib.sha256(b''.join((ROOT / name).read_bytes() for name in ['content.js', 'app.js', 'style.css'])).hexdigest()[:16]
    html = (output / 'index.html').read_text(encoding='utf-8')
    html = re.sub(r'((?:style\.css|content\.js|app\.js)\?v=)[^\"\s]+', lambda match: match[1] + revision, html)
    (output / 'index.html').write_text(html, encoding='utf-8')
    shutil.copytree(ROOT / 'assets', output / 'assets', dirs_exist_ok=True)
    for filename in ['CNAME', 'robots.txt', 'sitemap.xml', 'favicon.ico']:
        if (ROOT / filename).exists():
            shutil.copy2(ROOT / filename, output / filename)
    (output / '.nojekyll').touch()
    import sys
    sys.argv = [sys.argv[0], '--output', str(output / 'assets/cv')]
    build_cv()


if __name__ == '__main__':
    main()
