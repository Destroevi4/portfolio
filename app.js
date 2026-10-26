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
  const loops = new Map();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion:reduce)');
  function loopIsVisible(video, state) {
    return state.visible && video.getClientRects().length > 0 && !document.hidden;
  }
  function syncLoop(video) {
    const state = loops.get(video);
    if (!state) return;
    const active = loopIsVisible(video, state);
    if (!active || state.userPaused || (reducedMotion.matches && !state.userStarted)) {
      video.pause(); return;
    }
    if (state.pending || state.blocked || !video.paused) return;
    if (!video.getAttribute('src')) video.src = state.src;
    state.pending = true;
    video.play().then(() => {
      state.blocked = false;
      if (!loopIsVisible(video, state) || state.userPaused) video.pause();
    }).catch(() => {
      state.blocked = true;
    }).finally(() => { state.pending = false; state.paint(); });
  }
  const loopObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const state = loops.get(entry.target);
      if (!state) return;
      state.visible = entry.isIntersecting && entry.intersectionRatio >= .15;
      if (state.visible) state.blocked = false;
      syncLoop(entry.target);
    });
  }, {threshold:[0,.15]});
  function manageLoop(video, control, label, src, badge) {
    video.controls = false; video.loop = true; video.muted = true; video.defaultMuted = true;
    video.playsInline = true; video.preload = 'none';
    video.setAttribute('muted', ''); video.setAttribute('playsinline', '');
    video.setAttribute('aria-hidden', 'true');
    const state = {src:safeUrl(src), visible:false, userPaused:false, userStarted:false, pending:false, blocked:false};
    state.paint = () => {
      const playing = !video.paused;
      control.dataset.state = playing ? 'playing' : 'paused';
      control.setAttribute('aria-label', (playing ? 'Приостановить: ' : 'Запустить: ') + label);
      if (badge) badge.textContent = playing ? 'Пауза' : 'Воспроизвести';
    };
    control.addEventListener('click', () => {
      if (!video.paused) { state.userPaused = true; video.pause(); }
      else {
        state.userPaused = false; state.userStarted = true; state.blocked = false;
        state.visible = true; syncLoop(video);
      }
      state.paint();
    });
    video.addEventListener('play', state.paint);
    video.addEventListener('pause', state.paint);
    loops.set(video, state); state.paint(); loopObserver.observe(video);
  }
  document.addEventListener('visibilitychange', () => loops.forEach((_, video) => syncLoop(video)));
  reducedMotion.addEventListener('change', () => loops.forEach((_, video) => syncLoop(video)));
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
  const viewerComparison = el('div', 'viewer-comparison');
  viewerComparison.hidden = true;
  viewer.append(viewerBar, viewerImage, viewerComparison);
  viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
  viewer.addEventListener('close', () => { document.body.classList.remove('viewing-image'); });
  document.body.append(viewer);
  function openImage(src, title) {
    const url = safeUrl(src);
    if (!url) return;
    viewerComparison.hidden = true;
    viewerComparison.replaceChildren();
    viewerImage.hidden = false;
    original.hidden = false;
    viewerImage.src = url;
    viewerImage.alt = title || '';
    viewerTitle.textContent = title || 'Изображение проекта';
    original.href = url;
    original.target = '_blank';
    original.rel = 'noopener noreferrer';
    viewer.showModal();
    document.body.classList.add('viewing-image');
  }
  function openComparison(block) {
    viewerImage.hidden = true;
    original.hidden = true;
    viewerTitle.textContent = block.title || 'Сравнение изображений';
    viewerComparison.replaceChildren(comparisonFrame(block, true));
    viewerComparison.hidden = false;
    viewer.showModal();
    document.body.classList.add('viewing-image');
  }
  function figure(item) {
    const node = el('figure', 'project-image');
    if (item.span === 2) node.classList.add('image-span-2');
    const button = el('button', 'image-open');
    button.type = 'button';
    button.setAttribute('aria-label', 'Увеличить: ' + (item.alt || item.caption || 'изображение проекта'));
    button.append(picture(item.src, item.alt));
    button.addEventListener('click', () => openImage(item.src, item.alt || item.caption));
    if (item.animation) {
      const frame = el('div', 'artwork-media');
      const clip = renderBlock({type:'video', motion:true, src:item.animation, poster:item.src, label:'Анимированная версия: ' + (item.caption || item.alt || 'концепт')});
      clip.hidden = true;
      const toggle = el('button', 'artwork-toggle', 'Анимация'); toggle.type = 'button';
      toggle.setAttribute('aria-label', 'Включить анимацию: ' + (item.caption || item.alt || 'концепт'));
      toggle.setAttribute('aria-pressed', 'false');
      toggle.addEventListener('click', () => {
        const animated = clip.hidden;
        clip.hidden = !animated; button.hidden = animated;
        toggle.textContent = animated ? 'Картинка' : 'Анимация';
        toggle.setAttribute('aria-pressed', String(animated));
        toggle.setAttribute('aria-label', (animated ? 'Показать рисунок: ' : 'Включить анимацию: ') + (item.caption || item.alt || 'концепт'));
        if (!animated) clip.querySelector('video').pause();
      });
      frame.append(button, clip, toggle); node.append(frame);
    } else node.append(button);
    if (item.caption) node.append(el('figcaption', '', item.caption));
    return node;
  }
  function mediaFigure(item) {
    if (item.type !== 'video') return figure(item);
    const node = el('figure', 'project-video-figure');
    node.append(renderBlock({...item, caption:undefined}));
    if (item.caption) node.append(el('figcaption', '', item.caption));
    return node;
  }
  function comparisonFrame(block, enlarged = false) {
    const box = el('div', 'slider-comparison');
    const ratio = block.aspectRatio || '16 / 9';
    box.style.aspectRatio = ratio;
    const parts = ratio.split('/').map(Number);
    box.style.setProperty('--media-ratio', String(parts[1] ? parts[0] / parts[1] : parts[0]));
    const images = [];
    [['before', block.before, block.beforeLabel || 'Мир 1'], ['after', block.after, block.afterLabel || 'Мир 2']].forEach(([side, src, label]) => {
      const layer = el('div', 'slider-layer slider-' + side);
      const img = picture(src, (block.title || 'Сравнение') + ' — ' + label);
      if (enlarged) img.loading = 'eager';
      layer.append(img); box.append(layer); images.push(img);
      const tag = el('span', 'slider-label slider-label-' + side, label);
      box.append(tag);
    });
    images[0].addEventListener('load', () => { images[1].loading = 'eager'; });
    const line = el('div', 'slider-divider');
    line.setAttribute('aria-hidden', 'true');
    const handle = el('span', 'slider-grip');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '24'); svg.setAttribute('height', '24');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M8 7 3 12l5 5M16 7l5 5-5 5');
    path.setAttribute('fill', 'none'); path.setAttribute('stroke', 'currentColor');
    path.setAttribute('stroke-width', '1.5'); path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    svg.append(path); handle.append(svg); line.append(handle); box.append(line);
    const range = el('input', 'comparison-range');
    range.type = 'range'; range.min = '0'; range.max = '100'; range.step = '1'; range.value = '50';
    range.setAttribute('aria-label', 'Сравнить: ' + (block.title || 'изображения'));
    function update() {
      box.style.setProperty('--split', range.value + '%');
      range.setAttribute('aria-valuetext', range.value + '% — ' + (block.beforeLabel || 'Мир 1') + ', ' + (100 - Number(range.value)) + '% — ' + (block.afterLabel || 'Мир 2'));
    }
    range.addEventListener('input', update); update();
    let activePointer = null;
    function movePointer(event) {
      const bounds = range.getBoundingClientRect();
      if (!bounds.width) return;
      range.value = String(Math.round(Math.max(0, Math.min(100, (event.clientX - bounds.left) / bounds.width * 100))));
      update();
    }
    const dragZone = el('div', 'comparison-drag-zone');
    dragZone.setAttribute('aria-hidden', 'true');
    dragZone.addEventListener('pointerdown', event => {
      if (!event.isPrimary || event.button !== 0) return;
      event.preventDefault();
      activePointer = event.pointerId;
      range.focus({preventScroll:true});
      dragZone.setPointerCapture(event.pointerId);
      movePointer(event);
    });
    dragZone.addEventListener('pointermove', event => {
      if (event.pointerId === activePointer) movePointer(event);
    });
    dragZone.addEventListener('pointerup', event => {
      if (event.pointerId !== activePointer) return;
      movePointer(event); activePointer = null;
      if (dragZone.hasPointerCapture(event.pointerId)) dragZone.releasePointerCapture(event.pointerId);
    });
    dragZone.addEventListener('pointercancel', () => { activePointer = null; });
    dragZone.addEventListener('lostpointercapture', () => { activePointer = null; });
    box.append(range, dragZone);
    return box;
  }
  function comparison(block, hideTitle = false) {
    const section = el('section', 'world-switcher');
    const heading = el('div', 'world-heading');
    if (!hideTitle) heading.append(el('h2', '', block.title || 'Два мира'));
    const enlarge = el('button', 'comparison-enlarge', 'На весь экран');
    enlarge.type = 'button';
    enlarge.setAttribute('aria-label', 'Увеличить сравнение: ' + (block.title || 'Два мира'));
    enlarge.addEventListener('click', () => openComparison(block));
    heading.append(enlarge);
    const frame = comparisonFrame(block);
    section.append(heading);
    const details = el('div', 'comparison-details');
    if (block.legend) {
      const legend = el('ul', 'scheme-legend');
      block.legend.forEach(item => {
        const entry = el('li');
        const swatch = el('span', 'legend-swatch ' + (item.kind || ''));
        swatch.setAttribute('aria-hidden', 'true');
        entry.append(swatch, document.createTextNode(item.label)); legend.append(entry);
      });
      details.append(legend);
    }
    if (block.caption) details.append(el('p', 'media-note', block.caption));
    if (block.layout === 'sidebar') {
      section.classList.add('scheme-sidebar');
      const body = el('div', 'scheme-body');
      body.append(frame, details); section.append(body);
    } else {
      section.append(frame, details);
    }
    return section;
  }
  let schemeIndex = 0;
  function schemeTabs(block) {
    const section = el('section', 'scheme-tabs-section');
    const prefix = 'scheme-' + (++schemeIndex);
    const heading = el('h2', '', block.title || 'Схемы');
    heading.id = prefix + '-title';
    const layout = el('div', 'scheme-tabs-layout');
    const media = el('div', 'scheme-tabs-media');
    const sidebar = el('div', 'scheme-tabs-sidebar');
    const tabs = el('div', 'scheme-tabs');
    tabs.setAttribute('role', 'tablist');
    tabs.setAttribute('aria-labelledby', heading.id);
    tabs.setAttribute('aria-orientation', 'vertical');
    const description = el('p', 'scheme-description');
    description.id = prefix + '-description';
    const panels = [];
    const buttons = [];
    const views = block.views || [];
    function select(index) {
      buttons.forEach((button, i) => {
        button.setAttribute('aria-selected', String(i === index));
        button.tabIndex = i === index ? 0 : -1;
        panels[i].hidden = i !== index;
      });
      description.textContent = views[index].description || '';
    }
    views.forEach((view, index) => {
      const button = el('button', 'scheme-tab', view.label);
      button.type = 'button'; button.id = prefix + '-tab-' + index;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-controls', prefix + '-panel-' + index);
      const panel = el('div', 'scheme-panel');
      panel.id = prefix + '-panel-' + index;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', button.id);
      panel.setAttribute('aria-describedby', description.id);
      panel.append(figure({src:view.src, alt:view.alt || view.label}));
      button.addEventListener('click', () => select(index));
      button.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % views.length;
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index + views.length - 1) % views.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = views.length - 1;
        if (next === undefined) return;
        event.preventDefault(); select(next); buttons[next].focus();
      });
      buttons.push(button); panels.push(panel); tabs.append(button); media.append(panel);
    });
    const mobile = window.matchMedia('(max-width:720px)');
    function orientation() { tabs.setAttribute('aria-orientation', mobile.matches ? 'horizontal' : 'vertical'); }
    mobile.addEventListener('change', orientation); orientation();
    if (views.length) select(0);
    sidebar.append(tabs, description, el('p', 'media-note', 'Нажмите на схему, чтобы увеличить.'));
    layout.append(media, sidebar); section.append(heading, layout);
    return section;
  }
  function renderBlock(block) {
    if (block.type === 'media-intro') {
      const section = el('section', 'media-intro');
      const media = el('div', 'media-intro-media');
      if (block.title) media.append(el('h2', '', block.title));
      media.append(mediaFigure(block.media));
      const copy = el('div', 'media-intro-copy');
      if (block.aside?.title) copy.append(el('h2', '', block.aside.title));
      (block.aside?.paragraphs || []).forEach(text => copy.append(el('p', 'text-paragraph', text)));
      section.append(media, copy); return section;
    }
    if (block.type === 'video-feature') {
      const section = el('section', 'video-feature');
      if (block.title) section.append(el('h2', '', block.title));
      section.append(mediaFigure({...block, type:'video', label:block.label || block.title}));
      return section;
    }
    if (block.type === 'media-row') {
      const section = el('section', 'media-row-section');
      if (block.title) section.append(el('h2', '', block.title));
      const row = el('div', 'media-row');
      (block.items || []).forEach(item => row.append(mediaFigure(item)));
      section.append(row); return section;
    }
    if (block.type === 'artwork-group') {
      const section = el('section', 'artwork-group');
      if (block.title) section.append(el('h2', '', block.title));
      const row = el('div', 'artwork-group-row');
      row.append(figure(block.main));
      const related = el('div', 'artwork-related');
      (block.related || []).forEach(item => related.append(figure(item)));
      row.append(related); section.append(row); return section;
    }
    if (block.type === 'scheme-tabs') return schemeTabs(block);
    if (block.type === 'comparison') return comparison(block);
    if (block.type === 'comparison-group') {
      const section = el('section', 'comparison-grid-section');
      section.append(el('h2', '', block.title || 'Сравнение миров'));
      const row = el('div', 'comparison-grid');
      (block.comparisons || []).forEach(item => row.append(comparison(item, true)));
      section.append(row);
      return section;
    }
    if (block.type === 'image') return figure(block);
    if (block.type === 'gallery') {
      const gallery = el('div', 'gallery');
      if (block.columns === 3) gallery.classList.add('gallery-three');
      if (block.columns === 4) gallery.classList.add('gallery-four');
      if (block.shape === 'square') gallery.classList.add('gallery-square');
      (block.images || []).forEach(item => gallery.append(figure(item)));
      if (block.title) {
        const section = el('section', 'gallery-section');
        section.append(el('h2', '', block.title), gallery);
        return section;
      }
      return gallery;
    }
    if (block.type === 'collage') {
      const section = el('section', 'process-section');
      section.append(el('h2', '', block.title || 'Рабочие материалы'));
      const collage = el('div', 'process-collage');
      if (['board', 'landscape-portrait', 'pair', 'compact', 'panorama-posters'].includes(block.layout)) collage.classList.add('process-' + block.layout);
      (block.images || []).forEach(item => collage.append(figure(item)));
      section.append(collage);
      if (block.caption) section.append(el('p', 'media-note', block.caption));
      return section;
    }
    if (block.type === 'video-grid') {
      const section = el('section', 'video-grid-section');
      section.append(el('h2', '', block.title || 'Видео'));
      const gallery = el('div', 'video-grid');
      (block.videos || []).forEach(item => {
        const itemFigure = el('figure', 'video-item');
        const video = renderBlock({...item, type:'video'});
        if (!item.motion) video.addEventListener('play', () => {
          section.closest('article')?.querySelectorAll('video').forEach(other => { if (other !== video && !loops.has(other)) other.pause(); });
        });
        itemFigure.append(video);
        if (item.caption) itemFigure.append(el('figcaption', '', item.caption));
        gallery.append(itemFigure);
      });
      section.append(gallery);
      return section;
    }
    if (block.type === 'video') {
      if (block.motion) {
        const control = el('button', 'motion-clip'); control.type = 'button';
        if (block.aspectRatio) control.style.aspectRatio = block.aspectRatio;
        const video = el('video', 'project-video');
        if (block.poster) video.poster = safeUrl(block.poster);
        const badge = el('span', 'motion-state'); badge.setAttribute('aria-hidden', 'true');
        control.append(video, badge);
        manageLoop(video, control, block.label || block.caption || 'Анимация проекта', block.src, badge);
        return control;
      }
      const video = el('video', 'project-video'); video.controls = true; video.preload = 'metadata'; video.playsInline = true;
      if (block.preload) video.preload = block.preload;
      video.loop = block.loop === true;
      video.muted = block.muted === true;
      if (block.label || block.caption) video.setAttribute('aria-label', block.label || block.caption);
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
  if (data.home.video?.src) {
    const hero = document.querySelector('.hero');
    hero.classList.add('hero-video');
    const video = el('video', 'hero-film');
    const shade = el('div', 'hero-shade'); shade.setAttribute('aria-hidden', 'true');
    const pause = el('button', 'hero-motion-toggle'); pause.type = 'button';
    const label = el('span'); pause.append(label);
    hero.prepend(video, shade); hero.append(pause);
    manageLoop(video, pause, 'Видео на главной', data.home.video.src, label);
  }
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
    if (settings.aspectRatio) cover.style.aspectRatio = settings.aspectRatio;
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
    article.append(link('К работам', '#works', 'back'));
    const head = el('div', 'project-head'); const h1 = el('h1', '', project.title);
    h1.id = project.id + '-title'; h1.tabIndex = -1;
    const title = project.logo ? el('div', 'project-title-row') : h1;
    if (project.logo) {
      const icon = picture(project.logo.src, project.logo.alt || '');
      icon.className = 'project-icon'; icon.width = 80; icon.height = 80;
      title.append(icon, h1);
    }
    head.append(el('p', 'eyebrow muted', count(index + 1) + ' / ' + (project.eyebrow || category)), title, el('p', 'project-lead', project.lead || project.summary || ''));
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
  const toTop = el('button', 'to-top', 'Наверх'); toTop.type = 'button'; toTop.hidden = true;
  toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:reducedMotion.matches ? 'auto' : 'smooth'}));
  document.body.append(toTop);
  function updateToTop() { toTop.hidden = window.scrollY < 500; }
  window.addEventListener('scroll', updateToTop, {passive:true});
  function route() {
    if (viewer.open) viewer.close();
    const id = location.hash.slice(1); const match = articles.get(id);
    home.hidden = Boolean(match);
    articles.forEach(({article}, key) => {
      article.hidden = key !== id;
      if (article.hidden) article.querySelectorAll('.video-grid video').forEach(video => video.pause());
    });
    loops.forEach((_, video) => syncLoop(video));
    document.title = match ? match.project.title + ' — ' + data.site.name : data.site.title;
    if (match) { window.scrollTo(0, 0); if (keyboardNavigation) match.h1.focus({preventScroll:true}); }
    else if (id === 'works' || id === 'about') requestAnimationFrame(() => document.getElementById(id).scrollIntoView());
    else window.scrollTo(0, 0);
    updateToTop();
  }
  window.addEventListener('hashchange', route); route();
})();
