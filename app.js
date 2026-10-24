/* Механика сайта. Для обычных обновлений редактируй только content.js. */
(() => {
  'use strict';
  const data = window.PORTFOLIO;
  if (!data) return;
  const home = document.getElementById('home');
  const grid = document.getElementById('projects');
  const pages = document.getElementById('project-pages');
  const projects = data.projects.filter(project => project.visible !== false);
  const categoryNames = new Map(data.categories.map(category => [category.id, category.label]));
  const count = value => String(value).padStart(2, '0');
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function safeUrl(value) {
    if (!value) return '';
    const raw = String(value).trim();
    if (/^[a-z][a-z0-9+.-]*:/i.test(raw) && !/^(https?:|mailto:)/i.test(raw)) return '';
    if (raw.startsWith('//')) return '';
    return raw;
  }
  function link(text, url, className) {
    const node = el('a', className, text);
    node.href = safeUrl(url) || '#works';
    if (/^https?:/i.test(node.getAttribute('href'))) {
      node.target = '_blank'; node.rel = 'noopener noreferrer';
    }
    return node;
  }
  function picture(src, alt, onLoad) {
    const img = el('img');
    img.alt = alt || ''; img.loading = 'lazy'; img.decoding = 'async';
    img.addEventListener('error', () => { img.hidden = true; });
    if (onLoad) img.addEventListener('load', onLoad);
    const url = safeUrl(src);
    if (url) img.src = url;
    return img;
  }
  const viewer = el('dialog', 'image-viewer');
  viewer.setAttribute('aria-label', 'Просмотр изображения');
  const viewerBar = el('div', 'image-viewer-bar');
  const viewerTitle = el('p');
  viewerTitle.id = 'image-viewer-title';
  viewer.setAttribute('aria-labelledby', viewerTitle.id);
  const original = link('Открыть оригинал', '', 'image-original');
  const closeViewer = el('button', 'viewer-close', 'Закрыть');
  closeViewer.type = 'button';
  closeViewer.addEventListener('click', () => viewer.close());
  viewerBar.append(viewerTitle, original, closeViewer);
  const viewerImage = el('img');
  viewer.append(viewerBar, viewerImage);
  viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
  viewer.addEventListener('close', () => { document.body.classList.remove('viewing-image'); });
  document.body.append(viewer);
  function openImage(src, title) {
    const url = safeUrl(src);
    if (!url) return;
    viewerImage.src = url;
    viewerImage.alt = title || '';
    viewerTitle.textContent = title || 'Изображение проекта';
    original.href = url;
    original.target = '_blank';
    original.rel = 'noopener noreferrer';
    viewer.showModal();
    document.body.classList.add('viewing-image');
  }
  function figure(item) {
    const node = el('figure', 'project-image');
    const button = el('button', 'image-open');
    button.type = 'button';
    button.setAttribute('aria-label', 'Увеличить: ' + (item.alt || item.caption || 'изображение проекта'));
    button.append(picture(item.src, item.alt));
    button.addEventListener('click', () => openImage(item.src, item.alt || item.caption));
    node.append(button);
    if (item.caption) node.append(el('figcaption', '', item.caption));
    return node;
  }
  function comparison(block) {
    const section = el('section', 'world-switcher');
    const heading = el('div', 'world-heading');
    heading.append(el('h2', '', block.title || 'Два мира'));
    const controls = el('div', 'world-controls');
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', block.title || 'Выбрать мир');
    const box = el('div', 'world-frame');
    if (block.aspectRatio) box.style.aspectRatio = block.aspectRatio;
    const buttons = [];
    const layers = [];
    function select(index) {
      buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
      layers.forEach((layer, i) => { layer.hidden = i !== index; });
    }
    [['before', block.before, block.beforeLabel || 'Мир 1'], ['after', block.after, block.afterLabel || 'Мир 2']].forEach(([side, src, label], index) => {
      const button = el('button', 'world-button', label);
      button.type = 'button';
      button.setAttribute('aria-pressed', String(index === 0));
      button.addEventListener('click', () => select(index));
      controls.append(button); buttons.push(button);
      const layer = el('button', 'image-open world-image');
      layer.type = 'button'; layer.hidden = index !== 0;
      layer.setAttribute('aria-label', 'Увеличить: ' + block.title + ', ' + label);
      const img = picture(src, block.title + ' — ' + label);
      layer.append(img);
      layer.addEventListener('click', () => openImage(src, block.title + ' — ' + label));
      box.append(layer); layers.push(layer);
    });
    // Второй мир загружается заранее, когда первый уже появился на экране.
    layers[0].querySelector('img').addEventListener('load', () => {
      layers[1].querySelector('img').loading = 'eager';
    });
    controls.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const index = event.key === 'ArrowLeft' ? 0 : 1;
      select(index); buttons[index].focus();
    });
    heading.append(controls); section.append(heading, box);
    if (block.caption) section.append(el('p', 'media-note', block.caption));
    if (block.legend) {
      const legend = el('ul', 'scheme-legend');
      block.legend.forEach(item => {
        const entry = el('li');
        const swatch = el('span', 'legend-swatch ' + (item.kind || ''));
        swatch.setAttribute('aria-hidden', 'true');
        entry.append(swatch, document.createTextNode(item.label)); legend.append(entry);
      });
      section.append(legend);
    }
    return section;
  }
  function renderBlock(block) {
    if (block.type === 'comparison') return comparison(block);
    if (block.type === 'image') return figure(block);
    if (block.type === 'gallery') {
      const gallery = el('div', 'gallery');
      (block.images || []).forEach(item => gallery.append(figure(item)));
      return gallery;
    }
    if (block.type === 'collage') {
      const section = el('section', 'process-section');
      section.append(el('h2', '', block.title || 'Рабочие материалы'));
      const collage = el('div', 'process-collage');
      (block.images || []).forEach(item => collage.append(figure(item)));
      section.append(collage);
      if (block.caption) section.append(el('p', 'media-note', block.caption));
      return section;
    }
    if (block.type === 'video') {
      const video = el('video', 'project-video'); video.controls = true; video.preload = 'metadata'; video.playsInline = true;
      const source = safeUrl(block.src); if (source) video.src = source;
      if (block.poster) video.poster = safeUrl(block.poster);
      return video;
    }
    const section = el('section', 'project-section');
    section.append(el('h2', '', block.title || ''));
    const body = el('div');
    (block.paragraphs || []).forEach(text => body.append(el('p', 'text-paragraph', text)));
    if (block.bullets?.length) {
      const list = el('ul'); block.bullets.forEach(text => list.append(el('li', '', text))); body.append(list);
    }
    if (block.placeholder) body.append(el('div', 'placeholder text-paragraph', block.placeholder));
    (block.notes || []).forEach(text => body.append(el('p', 'aside text-paragraph', text)));
    (block.links || []).forEach(item => { const p = el('p'); p.append(link(item.label, item.url)); body.append(p); });
    section.append(body); return section;
  }
  document.querySelector('.brand').lastChild.textContent = data.site.name;
  document.querySelector('.footer span').textContent = data.site.name;
  document.querySelector('meta[name="description"]').content = data.site.description || '';
  document.querySelector('.hero .eyebrow').textContent = data.home.eyebrow;
  const title = document.getElementById('intro-title'); title.replaceChildren();
  data.home.titleLines.forEach((line, i) => { if (i) title.append(document.createElement('br')); title.append(document.createTextNode(line)); });
  document.querySelector('.intro').textContent = data.home.intro;
  document.querySelector('.index-note').textContent = data.home.note;
  document.querySelector('.about-copy').textContent = data.home.about;
  document.querySelector('.about-small').textContent = data.home.aboutSmall;
  // Фото присутствует в HTML, чтобы оно не зависело от динамической сборки.
  const photo = document.getElementById('about-photo');
  if (photo) {
    photo.hidden = data.home.photo === false;
    photo.alt = data.home.photoAlt || data.site.name;
    if (data.home.photo && safeUrl(data.home.photo)) photo.src = safeUrl(data.home.photo);
  }
  let keyboardNavigation = false;
  document.addEventListener('keydown', event => {
    if (event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') keyboardNavigation = true;
  }, true);
  document.addEventListener('pointerdown', () => { keyboardNavigation = false; }, true);
  document.addEventListener('touchstart', () => { keyboardNavigation = false; }, {capture:true, passive:true});
  const cards = [];
  const articles = new Map();
  projects.forEach((project, index) => {
    const card = link('', '#' + project.id, 'card');
    const cover = el('div', 'cover' + (project.id === 'rcd' ? ' cover-rcd' : ''));
    const settings = project.cover || {};
    cover.style.background = settings.background || '#e1dfd5'; cover.style.color = settings.color || '#232624';
    const category = (project.categories || []).map(id => categoryNames.get(id) || id).join(' / ');
    cover.append(el('span', 'cover-count', count(index + 1) + ' / ' + category.toUpperCase()), el('span', 'cover-word', project.coverTitle || project.title), el('span', 'cover-caption', 'Место для обложки проекта'));
    if (settings.src) {
      const img = picture(settings.src, settings.alt, () => cover.classList.add('has-image'));
      img.className = 'cover-image'; img.style.objectPosition = settings.position || '50% 50%'; img.style.objectFit = settings.fit || 'cover';
      cover.prepend(img);
    }
    const meta = el('div', 'card-meta'); const copy = el('div');
    copy.append(el('h3', '', project.title), el('p', '', project.summary || ''));
    meta.append(copy, el('span', 'card-tag', project.tag || ''));
    card.append(cover, meta); grid.append(card); cards.push({card, project});
    const article = el('article', 'project'); article.id = project.id; article.hidden = true;
    article.setAttribute('aria-labelledby', project.id + '-title');
    article.append(link('Все работы', '#works', 'back'));
    const head = el('div', 'project-head'); const h1 = el('h1', '', project.title);
    h1.id = project.id + '-title'; h1.tabIndex = -1;
    head.append(el('p', 'eyebrow muted', count(index + 1) + ' / ' + (project.eyebrow || category)), h1, el('p', 'project-lead', project.lead || project.summary || ''));
    article.append(head);
    if (project.links?.length) {
      const stores = el('nav', 'project-links');
      stores.setAttribute('aria-label', 'Страницы игры в магазинах');
      project.links.forEach(item => stores.append(link(item.label, item.url, 'store-link')));
      article.append(stores);
    }
    if (project.facts?.length) {
      const facts = el('dl', 'facts');
      project.facts.forEach(item => { const fact = el('div', 'fact'); fact.append(el('dt', '', item.label), el('dd', '', item.value)); facts.append(fact); });
      article.append(facts);
    }
    (project.blocks || []).forEach(block => article.append(renderBlock(block)));
    const end = el('div', 'project-end'); const next = projects[index + 1];
    end.append(link(next ? 'Следующий проект — ' + next.title : 'Вернуться ко всем работам', next ? '#' + next.id : '#works'));
    article.append(end); pages.append(article); articles.set(project.id, {article, h1, project});
  });
  const filters = document.querySelector('.filters'); filters.replaceChildren();
  const options = [{id:'all', label:'Все'}, ...data.categories];
  options.forEach(option => {
    const button = el('button', 'filter', option.label); button.type = 'button'; button.dataset.filter = option.id;
    button.setAttribute('aria-pressed', String(option.id === 'all'));
    button.append(el('span', '', count(projects.filter(project => option.id === 'all' || (project.categories || []).includes(option.id)).length)));
    button.addEventListener('click', () => {
      filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      let visible = 0;
      cards.forEach(({card, project}) => { card.hidden = option.id !== 'all' && !(project.categories || []).includes(option.id); if (!card.hidden) visible++; });
      const empty = document.getElementById('empty'); empty.hidden = visible > 0;
      empty.textContent = 'Проекты этой категории пока не добавлены.';
    });
    filters.append(button);
  });
  function route() {
    if (viewer.open) viewer.close();
    const id = location.hash.slice(1); const match = articles.get(id);
    home.hidden = Boolean(match);
    articles.forEach(({article}, key) => { article.hidden = key !== id; });
    document.title = match ? match.project.title + ' — ' + data.site.name : data.site.title;
    if (match) { window.scrollTo(0, 0); if (keyboardNavigation) match.h1.focus({preventScroll:true}); }
    else if (id === 'works' || id === 'about') requestAnimationFrame(() => document.getElementById(id).scrollIntoView());
    else window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route); route();
})();
