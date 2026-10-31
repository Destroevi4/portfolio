(() => {
  'use strict';
  const data = window.PORTFOLIO;
  if (!data) return;
  const home = document.getElementById('home');
  const grid = document.getElementById('projects');
  const pages = document.getElementById('project-pages');
  const projects = data.projects.filter(project => project.visible !== false);
  const caseStudies = (data.caseStudies || []).filter(project => project.visible !== false);
  const blogPlayers = new Map();
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
  const planViewer = el('dialog', 'plan-viewer');
  planViewer.setAttribute('aria-label', 'Просмотр плана');
  const planBar = el('div', 'plan-viewer-bar');
  const planTitle = el('p', '', 'План'); planTitle.id = 'plan-viewer-title';
  planViewer.setAttribute('aria-labelledby', planTitle.id);
  const planVersions = el('div', 'plan-versions');
  planVersions.setAttribute('role', 'group'); planVersions.setAttribute('aria-label', 'Версия большого плана');
  const zoomOut = el('button', '', '−'), zoomIn = el('button', '', '+');
  zoomOut.setAttribute('aria-label', 'Уменьшить план'); zoomIn.setAttribute('aria-label', 'Увеличить план');
  const resetPlan = el('button', '', 'Целиком');
  const planScale = el('span', 'plan-scale', '×1'); planScale.setAttribute('aria-live', 'polite');
  const closePlan = el('button', 'viewer-close', 'Закрыть план');
  [zoomOut, zoomIn, resetPlan, closePlan].forEach(button => { button.type = 'button'; });
  closePlan.addEventListener('click', () => planViewer.close());
  planBar.append(planTitle, planVersions, zoomOut, planScale, zoomIn, resetPlan, closePlan);
  const planViewport = el('div', 'plan-viewport'); planViewport.tabIndex = 0;
  planViewport.setAttribute('aria-label', 'План: перетаскивайте для перемещения; плюс и минус меняют масштаб');
  const largePlan = el('img'); largePlan.draggable = false;
  planViewport.append(largePlan);
  planViewer.append(planBar, planViewport, el('p', 'plan-help', 'Масштаб: + / −, колесо мыши или два пальца. Перетаскивание — перемещение.'));
  document.body.append(planViewer);
  let planZoom = 1, planX = 0, planY = 0, basePlanWidth = 0, basePlanHeight = 0;
  let planRatio = 0;
  const planPointers = new Map();
  function paintPlan() {
    if (!basePlanWidth) return;
    const w = planViewport.clientWidth, h = planViewport.clientHeight;
    const sw = basePlanWidth * planZoom, sh = basePlanHeight * planZoom;
    planX = sw <= w ? (w - sw) / 2 : Math.max(w - sw, Math.min(0, planX));
    planY = sh <= h ? (h - sh) / 2 : Math.max(h - sh, Math.min(0, planY));
    largePlan.style.width = basePlanWidth + 'px';
    largePlan.style.transform = `translate(${planX}px,${planY}px) scale(${planZoom})`;
    planScale.textContent = '×' + planZoom.toFixed(1);
    zoomOut.disabled = planZoom <= 1;
    zoomIn.disabled = planZoom >= maxPlanZoom() - .01;
  }
  function maxPlanZoom() { return Math.max(8, Math.min(32, largePlan.naturalWidth / (basePlanWidth || 1))); }
  function fitPlan(reset = true) {
    if (!largePlan.naturalWidth || !planViewport.clientWidth) return;
    const scale = Math.min(planViewport.clientWidth / largePlan.naturalWidth, planViewport.clientHeight / largePlan.naturalHeight, 1);
    basePlanWidth = largePlan.naturalWidth * scale; basePlanHeight = largePlan.naturalHeight * scale;
    if (reset) { planZoom = 1; planX = 0; planY = 0; }
    paintPlan();
  }
  function zoomPlan(value, x = planViewport.clientWidth / 2, y = planViewport.clientHeight / 2) {
    if (!basePlanWidth) return;
    const next = Math.max(1, Math.min(maxPlanZoom(), value)), factor = next / planZoom;
    planX = x - (x - planX) * factor; planY = y - (y - planY) * factor;
    planZoom = next; paintPlan();
  }
  largePlan.addEventListener('load', () => {
    const ratio = largePlan.naturalWidth / largePlan.naturalHeight;
    fitPlan(!planRatio || Math.abs(ratio - planRatio) > .001); planRatio = ratio;
  });
  zoomIn.addEventListener('click', () => zoomPlan(planZoom * 1.5));
  zoomOut.addEventListener('click', () => zoomPlan(planZoom / 1.5));
  resetPlan.addEventListener('click', () => fitPlan());
  planViewport.addEventListener('wheel', event => {
    event.preventDefault(); const bounds = planViewport.getBoundingClientRect();
    zoomPlan(planZoom * Math.exp(-event.deltaY * .002), event.clientX - bounds.left, event.clientY - bounds.top);
  }, {passive:false});
  planViewport.addEventListener('keydown', event => {
    if (['+', '=', '-', '0', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) event.preventDefault();
    if (event.key === '+' || event.key === '=') zoomPlan(planZoom * 1.5);
    if (event.key === '-') zoomPlan(planZoom / 1.5);
    if (event.key === '0') fitPlan();
    if (event.key === 'ArrowLeft') planX += 60;
    if (event.key === 'ArrowRight') planX -= 60;
    if (event.key === 'ArrowUp') planY += 60;
    if (event.key === 'ArrowDown') planY -= 60;
    paintPlan();
  });
  function planGesture() {
    const points = [...planPointers.values()].slice(0, 2);
    if (!points.length) return null;
    if (points.length === 1) return {...points[0], distance:0};
    return {x:(points[0].x + points[1].x) / 2, y:(points[0].y + points[1].y) / 2, distance:Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y)};
  }
  planViewport.addEventListener('pointerdown', event => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    event.preventDefault(); planViewport.setPointerCapture(event.pointerId);
    planPointers.set(event.pointerId, {x:event.clientX, y:event.clientY});
  });
  planViewport.addEventListener('pointermove', event => {
    if (!planPointers.has(event.pointerId)) return;
    const old = planGesture();
    planPointers.set(event.pointerId, {x:event.clientX, y:event.clientY}); const next = planGesture();
    if (old.distance > 0 && next.distance > 0) {
      const bounds = planViewport.getBoundingClientRect();
      zoomPlan(planZoom * next.distance / old.distance, old.x - bounds.left, old.y - bounds.top);
    }
    planX += next.x - old.x; planY += next.y - old.y; paintPlan();
  });
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => planViewport.addEventListener(type, event => { planPointers.delete(event.pointerId); }));
  planViewer.addEventListener('click', event => { if (event.target === planViewer) planViewer.close(); });
  planViewer.addEventListener('close', () => { planPointers.clear(); document.body.classList.remove('viewing-image'); });
  window.addEventListener('resize', () => { if (planViewer.open) fitPlan(); });
  function versionButtons(parent, labels, select) {
    const buttons = labels.map((label, index) => {
      const button = el('button', 'plan-version', label); button.type = 'button';
      button.addEventListener('click', () => select(index)); parent.append(button); return button;
    });
    return index => buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  }
  function openPlan(block, initial, onSelect) {
    if (viewer.open) viewer.close();
    const labels = [block.beforeLabel || 'До', block.afterLabel || 'Проект'];
    planVersions.replaceChildren(); planTitle.textContent = block.title || 'План';
    planRatio = 0; basePlanWidth = 0; planZoom = 1; planPointers.clear();
    const paintVersions = versionButtons(planVersions, labels, select);
    function select(index) {
      paintVersions(index); onSelect(index);
      largePlan.alt = (block.title || 'План') + ' — ' + labels[index];
      largePlan.src = safeUrl(index ? block.after : block.before);
    }
    planViewer.showModal(); document.body.classList.add('viewing-image'); select(initial);
  }
  function streetPlan(block, heading = 'h2') {
    const section = el('section', 'street-plan'); section.append(el(heading, '', block.title || 'План'));
    const toolbar = el('div', 'plan-toolbar'), versions = el('div', 'plan-versions');
    versions.setAttribute('role', 'group'); versions.setAttribute('aria-label', 'Версия плана');
    const open = el('button', 'image-open plan-open'); open.type = 'button'; open.setAttribute('aria-label', 'Открыть план крупно');
    const img = picture('', ''); open.append(img);
    const enlarge = el('button', 'comparison-enlarge', 'Увеличить план'); enlarge.type = 'button';
    enlarge.setAttribute('aria-label', 'Увеличить: ' + (block.title || 'План'));
    let selected = 1;
    const paint = versionButtons(versions, [block.beforeLabel || 'До', block.afterLabel || 'Проект'], select);
    function select(index) { selected = index; paint(index); img.alt = (block.title || 'План') + ' — ' + (index ? block.afterLabel || 'Проект' : block.beforeLabel || 'До'); img.src = safeUrl(index ? block.after : block.before); }
    const show = () => openPlan(block, selected, select);
    open.addEventListener('click', show); enlarge.addEventListener('click', show);
    toolbar.append(versions, enlarge); select(selected); section.append(toolbar, open);
    section.append(el('p', 'media-note', 'В большом просмотре доступны обе версии, увеличение и перемещение плана.'));
    return section;
  }
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
    const image = picture(item.src, item.alt);
    if (item.width && item.height) { image.width = item.width; image.height = item.height; }
    button.append(image);
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
  function channelCover(settings) {
    const cover = el('div', 'channel-cover');
    const identity = picture(settings.logo, ''); identity.className = 'channel-identity';
    const badge = el('div', 'channel-badge');
    const mark = el('span', 'youtube-mark');
    mark.append(picture(settings.youtubeLogo, 'YouTube'));
    badge.append(mark, el('span', '', settings.handle || '@vlSurin'));
    cover.append(identity, badge);
    return cover;
  }
  function renderBlock(block) {
    if (block.type === 'comparison-plan') {
      const section = el('section', 'comparison-plan');
      section.append(comparison(block.comparison));
      const plan = el('div', 'comparison-plan-aside');
      plan.append(el('h3', '', block.planTitle || 'Эскиз планировки'), figure(block.plan));
      section.append(plan); return section;
    }
    if (block.type === 'brand-overview') {
      const section = el('section', 'channel-overview brand-overview');
      const logo = picture(block.logo, block.logoAlt || '');
      logo.className = 'brand-overview-logo';
      const copy = el('div', 'channel-overview-copy');
      copy.append(el('p', 'eyebrow', block.label), el('p', 'brand-overview-title', block.title));
      section.append(logo, copy); return section;
    }
    if (block.type === 'channel-overview') {
      const section = el('section', 'channel-overview');
      const identity = picture(block.logo, 'Логотип Владислава Сурина');
      identity.className = 'channel-overview-logo';
      const copy = el('div', 'channel-overview-copy');
      const name = el('div', 'channel-overview-name');
      const mark = el('span', 'youtube-mark'); mark.append(picture(block.youtubeLogo, 'YouTube'));
      name.append(mark, el('span', '', block.handle));
      copy.append(name, link('Смотреть канал', block.url, 'channel-visit'));
      section.append(identity, copy); return section;
    }
    if (block.type === 'link-collection') {
      const section = el('section', 'link-collection');
      section.append(el('h2', '', block.title));
      const list = el('div', 'rubric-list');
      (block.items || []).forEach(item => {
        const entry = link('', item.url, 'rubric-link');
        const copy = el('div');
        copy.append(el('p', 'eyebrow muted', item.kind), el('h3', '', item.title));
        if (item.description) copy.append(el('p', 'rubric-description', item.description));
        entry.append(copy, el('span', 'rubric-action', item.action || 'Открыть плейлист'));
        list.append(entry);
      });
      section.append(list); return section;
    }
    if (block.type === 'related-projects') {
      const section = el('section', 'related-projects');
      section.append(el('h2', '', block.title));
      const list = el('div', 'related-projects-grid');
      (block.projects || []).forEach(id => {
        const project = projects.find(item => item.id === id); if (!project) return;
        const card = link('', '#' + id, 'related-project');
        card.append(picture(project.cover?.src, project.cover?.alt));
        const copy = el('div'); copy.append(el('h3', '', project.title), el('p', '', project.summary));
        card.append(copy); list.append(card);
      });
      section.append(list); return section;
    }
    if (block.type === 'design-notes') {
      const section = el('section', 'design-notes');
      section.append(el('p', 'eyebrow muted', block.eyebrow || 'Геймдизайн'), el('h2', '', block.title));
      if (block.intro) section.append(el('p', 'design-intro', block.intro));
      const list = el('div', 'design-notes-grid');
      (block.items || []).forEach((item, index) => {
        const entry = el('div', 'design-note');
        entry.append(el('span', 'eyebrow muted', count(index + 1)), el('h3', '', item.title), el('p', '', item.text));
        list.append(entry);
      });
      section.append(list); return section;
    }
    if (block.type === 'chapter') {
      const section = el('section', 'project-chapter');
      if (block.eyebrow) section.append(el('p', 'eyebrow muted', block.eyebrow));
      section.append(el('h2', '', block.title));
      if (block.text) section.append(el('p', '', block.text));
      return section;
    }
    if (block.type === 'channel-cover') return channelCover(block);
    if (block.type === 'youtube') {
      const grouped = block.grouped === true;
      const section = el('section', grouped ? 'blog-video' : 'blog-band');
      const body = grouped ? section : el('div', 'blog-band-content');
      const title = block.title || 'Выпуск блога';
      if (grouped) {
        if (block.kind) body.append(el('p', 'eyebrow blog-eyebrow', block.kind));
        body.append(el('h3', '', title));
      }
      else {
        body.append(el('p', 'eyebrow blog-eyebrow', 'Видеоблог · ПРПР'));
        body.append(el('h2', '', 'Разбор проекта в блоге'));
        body.append(el('p', 'blog-intro', block.description || 'Видео с объяснением предложенных изменений.'));
      }
      const videoId = String(block.videoId || '');
      const playlistId = String(block.playlistId || '');
      const playlist = /^PL[a-zA-Z0-9_-]{16,}$/.test(playlistId);
      if (!playlist && !/^[a-zA-Z0-9_-]{11}$/.test(videoId)) return section;
      const frame = el('div', 'blog-frame');
      const mount = () => {
        if (frame.querySelector('iframe')) return;
        const iframe = el('iframe');
        iframe.title = title;
        iframe.src = playlist
          ? 'https://www.youtube-nocookie.com/embed/videoseries?listType=playlist&list=' + encodeURIComponent(playlistId)
          : 'https://www.youtube-nocookie.com/embed/' + videoId;
        iframe.loading = 'lazy';
        iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        frame.replaceChildren(iframe);
      };
      const unmount = () => { if (frame.firstChild) frame.replaceChildren(); };
      blogPlayers.set(frame, {mount, unmount});
      body.append(frame);
      if (grouped && block.description) body.append(el('p', 'episode-description', block.description));
      body.append(link(playlist ? 'Открыть плейлист на YouTube' : 'Открыть на YouTube', playlist
        ? 'https://www.youtube.com/playlist?list=' + encodeURIComponent(playlistId)
        : 'https://www.youtube.com/watch?v=' + videoId, 'blog-external'));
      if (!grouped) section.append(body);
      return section;
    }
    if (block.type === 'youtube-group') {
      const section = el('section', 'blog-band blog-band-group');
      const body = el('div', 'blog-band-content');
      body.append(el('p', 'eyebrow blog-eyebrow', block.eyebrow || 'Видеоблог · ПРПР'));
      body.append(el('h2', '', block.title || 'Разбор проекта в блоге'));
      body.append(el('p', 'blog-intro', block.description || 'Отдельные выпуски о площади и примыкающей улице.'));
      const row = el('div', 'blog-grid');
      (block.videos || []).forEach(item => row.append(renderBlock({...item, type:'youtube', grouped:true})));
      body.append(row); section.append(body); return section;
    }
    if (block.type === 'plan-group') {
      const section = el('section', 'plan-group');
      if (block.title) section.append(el('h2', '', block.title));
      const row = el('div', 'plan-group-grid');
      (block.plans || []).forEach(item => row.append(streetPlan(item, 'h3')));
      section.append(row); return section;
    }
    if (block.type === 'street-plan') return streetPlan(block);
    if (block.type === 'project-list') {
      const section = el('section', 'case-section');
      if (block.title) section.append(el('h2', '', block.title));
      const row = el('div', 'case-grid');
      (block.projects || []).forEach(id => {
        const project = caseStudies.find(item => item.id === id); if (!project) return;
        const card = link('', '#' + id, 'case-card');
        card.append(picture(project.cover?.src, project.cover?.alt), el('h3', '', project.title), el('p', '', project.summary || ''));
        row.append(card);
      });
      section.append(row); return section;
    }
    if (block.type === 'comparison-cards') {
      const section = el('section', 'comparison-cards'); section.append(el('h2', '', block.title || 'Другие ракурсы'));
      const row = el('div', 'comparison-cards-grid');
      (block.comparisons || []).forEach(item => {
        const button = el('button', 'comparison-card'); button.type = 'button';
        button.setAttribute('aria-label', 'Сравнить: ' + item.title);
        button.append(picture(item.after, item.title + ' — проект'), el('span', '', item.title + ' · До / Проект'));
        button.addEventListener('click', () => openComparison(item)); row.append(button);
      });
      section.append(row); return section;
    }
    if (block.type === 'media-intro') {
      const section = el('section', 'media-intro');
      const media = el('div', 'media-intro-media');
      if (block.title) media.append(el('h2', '', block.title));
      media.append(mediaFigure(block.media));
      const copy = el('div', 'media-intro-copy');
      if (block.aside?.title) copy.append(el('h2', '', block.aside.title));
      (block.aside?.paragraphs || []).forEach(text => copy.append(el('p', 'text-paragraph', text)));
      (block.aside?.notes || []).forEach(text => copy.append(el('p', 'media-intro-note', text)));
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
      if (block.layout === 'sketch-pair') row.classList.add('media-row-sketch-pair');
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
      if (['board', 'landscape-portrait', 'pair', 'compact', 'panorama-posters', 'bresh-ui', 'bresh-identity', 'bresh-level', 'bresh-sketches'].includes(block.layout)) collage.classList.add('process-' + block.layout);
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
  const footerLinks = el('nav', 'footer-links'); footerLinks.setAttribute('aria-label', 'Контакты');
  (data.site.footerLinks || []).forEach(item => footerLinks.append(link(item.label, item.url)));
  document.querySelector('.footer').lastElementChild.replaceWith(footerLinks);
  document.querySelector('meta[name="description"]').content = data.site.description || '';
  document.querySelector('.hero .eyebrow').textContent = data.home.eyebrow;
  const title = document.getElementById('intro-title'); title.replaceChildren();
  data.home.titleLines.forEach((line, i) => { if (i) title.append(document.createElement('br')); title.append(document.createTextNode(line)); });
  document.querySelector('.intro').textContent = data.home.intro;
  document.querySelector('.about-copy').textContent = data.home.about;
  document.querySelector('.about-small').textContent = data.home.aboutSmall;
  if (data.home.aboutLinks?.length) {
    const actions = el('div', 'about-actions');
    data.home.aboutLinks.forEach(item => actions.append(link(item.label, item.url)));
    document.querySelector('.about-text').append(actions);
  }
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
  [...projects, ...caseStudies].forEach((project, index) => {
    const category = (project.categories || []).map(id => categoryNames.get(id) || id).join(' / ');
    if (!project.parent) {
    const card = link('', '#' + project.id, 'card');
    const cover = el('div', 'cover' + (project.id === 'rcd' ? ' cover-rcd' : ''));
    const settings = project.cover || {};
    if (settings.aspectRatio) cover.style.aspectRatio = settings.aspectRatio;
    cover.style.background = settings.background || '#e1dfd5'; cover.style.color = settings.color || '#232624';
    cover.append(el('span', 'cover-count', count(index + 1) + ' / ' + category.toUpperCase()), el('span', 'cover-word', project.coverTitle || project.title), el('span', 'cover-caption', 'Место для обложки проекта'));
    if (settings.src) {
      const img = picture(settings.src, settings.alt, () => cover.classList.add('has-image'));
      img.className = 'cover-image'; img.style.objectPosition = settings.position || '50% 50%'; img.style.objectFit = settings.fit || 'cover';
      cover.prepend(img);
    }
    if (settings.type === 'channel') {
      cover.classList.add('has-image', 'cover-channel');
      cover.append(channelCover(settings));
    }
    if (settings.brandLogo) {
      const logo = picture(settings.brandLogo, settings.brandLogoAlt || '');
      logo.className = 'cover-brand-logo';
      cover.append(logo);
    }
    const meta = el('div', 'card-meta'); const copy = el('div');
    copy.append(el('h3', '', project.title), el('p', '', project.summary || ''));
    meta.append(copy, el('span', 'card-tag', project.tag || ''));
    card.append(cover, meta); cards.push({card, project, index});
    }
    const article = el('article', 'project'); article.id = project.id; article.hidden = true;
    if (project.presentation === 'channel') article.classList.add('project-channel');
    if (project.logo?.wide) article.classList.add('project-wide-logo');
    article.setAttribute('aria-labelledby', project.id + '-title');
    article.append(link(project.parent ? 'К проектам ПРПР' : 'К работам', project.parent ? '#' + project.parent : '#works', 'back'));
    const head = el('div', 'project-head'); const h1 = el('h1', '', project.title);
    if (project.hero?.src) {
      article.classList.add('project-with-hero');
      head.classList.add('project-art-hero');
      const artwork = picture(project.hero.src, project.hero.alt || '');
      artwork.className = 'project-hero-art'; artwork.loading = 'eager';
      if (project.hero.position) artwork.style.objectPosition = project.hero.position;
      const shade = el('div', 'project-hero-shade'); shade.setAttribute('aria-hidden', 'true');
      head.append(artwork, shade);
      head.append(article.querySelector('.back'));
    }
    h1.id = project.id + '-title'; h1.tabIndex = -1;
    const title = project.logo ? el('div', 'project-title-row') : h1;
    if (project.logo) {
      const icon = picture(project.logo.src, project.logo.alt || '');
      icon.className = 'project-icon'; icon.width = 80; icon.height = 80;
      title.append(icon, h1);
    }
    head.append(el('p', 'eyebrow muted', (project.parent ? 'ПРПР' : count(index + 1)) + ' / ' + (project.eyebrow || category)), title, el('p', 'project-lead', project.lead || project.summary || ''));
    article.append(head);
    if (project.links?.length) {
      const stores = el('nav', 'project-links');
      stores.setAttribute('aria-label', project.linksLabel || 'Страницы игры в магазинах');
      project.links.forEach(item => stores.append(link(item.label, item.url, 'store-link')));
      if (project.hero?.src) {
        stores.classList.add('hero-store-links');
        const storesLabel = el('p', 'eyebrow', project.hero.linksTitle || 'Играть');
        const storesRow = el('div', 'hero-store-row');
        storesRow.append(...Array.from(stores.children));
        stores.append(storesLabel, storesRow); head.append(stores);
      } else article.append(stores);
    }
    if (project.facts?.length) {
      const facts = el('dl', 'facts');
      project.facts.forEach(item => { const fact = el('div', 'fact'); fact.append(el('dt', '', item.label), el('dd', '', item.value)); facts.append(fact); });
      article.append(facts);
    }
    if (project.navigation?.length) {
      const navigation = el('nav', 'project-jump-nav'); navigation.setAttribute('aria-label', 'Разделы проекта');
      project.navigation.forEach(item => navigation.append(link(item.label, '#' + item.target)));
      article.append(navigation);
    }
    (project.blocks || []).forEach(block => {
      const section = renderBlock(block);
      if (block.id) { section.id = block.id; section.tabIndex = -1; }
      article.append(section);
    });
    const end = el('div', 'project-end'); const next = projects[index + 1];
    end.append(project.parent ? link('К проектам ПРПР', '#' + project.parent) : link(next ? 'Следующий проект — ' + next.title : 'Вернуться ко всем работам', next ? '#' + next.id : '#works'));
    article.append(end); pages.append(article); articles.set(project.id, {article, h1, project});
  });
  if (data.resume?.versions?.length) {
    const resume = data.resume;
    const localeUI = {
      ru: {back:'К работам', profile:'Профиль', download:'Скачать PDF', versions:'Версия резюме', languages:'Язык резюме', portfolio:'Портфолио', title:'Резюме', pages:'стр.'},
      en: {back:'Back to projects', profile:'Profile', download:'Download PDF', versions:'Resume version', languages:'Resume language', portfolio:'Portfolio', title:'Resume', pages:'pages'}
    };
    const languages = ['ru', ...Object.keys(resume.translations || {})];
    const requestedLanguage = new URLSearchParams(location.search).get('cvlang');
    let activeLanguage = languages.includes(requestedLanguage) ? requestedLanguage : (resume.defaultLanguage || 'ru');
    let activeVersion = resume.default || resume.versions[0].id;
    let manifest;
    const article = el('article', 'project resume-page'); article.id = 'cv'; article.hidden = true;
    article.setAttribute('aria-labelledby', 'cv-title');
    const back = link('', '#works', 'back'); article.append(back);
    const profile = el('div', 'resume-profile');
    const portrait = picture(resume.contact.photo, resume.contact.name); portrait.className = 'resume-photo'; portrait.width = 136; portrait.height = 136;
    const intro = el('div', 'resume-profile-copy');
    const h1 = el('h1', 'resume-name'); h1.id = 'cv-title'; h1.tabIndex = -1;
    const role = el('p', 'resume-role');
    const contacts = el('div', 'resume-contacts');
    intro.append(h1, role, contacts); profile.append(portrait, intro); article.append(profile);
    const toolbar = el('div', 'resume-toolbar');
    const tabs = el('div', 'resume-tabs'); tabs.setAttribute('role', 'tablist');
    const languagePicker = el('div', 'resume-languages'); languagePicker.setAttribute('role', 'group');
    const download = el('a', 'resume-download');
    const size = el('span', 'resume-file-note');
    const action = el('div', 'resume-download-group'); action.append(download, size);
    toolbar.append(tabs, languagePicker, action); article.append(toolbar);
    const content = el('div', 'resume-content'); article.append(content);
    function currentLocale() {
      return activeLanguage === 'ru' ? resume : resume.translations[activeLanguage];
    }
    function updateDownload() {
      const version = currentLocale().versions.find(entry => entry.id === activeVersion);
      const ui = localeUI[activeLanguage];
      const metadata = manifest?.files?.[version.pdf];
      download.href = safeUrl(version.pdf) + (manifest?.revision ? '?v=' + encodeURIComponent(manifest.revision) : '');
      download.download = version.pdf.split('/').pop();
      download.textContent = ui.download;
      download.setAttribute('aria-label', ui.download + ': ' + version.label + ' · ' + activeLanguage.toUpperCase());
      size.textContent = (metadata ? metadata.pages + ' ' + ui.pages + ' · ' : '') + activeLanguage.toUpperCase();
    }
    languages.forEach(code => {
      const button = el('button', 'resume-language', code.toUpperCase()); button.type = 'button';
      button.lang = code;
      button.setAttribute('aria-label', code === 'ru' ? 'Резюме на русском' : 'Resume in English');
      button.dataset.language = code;
      button.addEventListener('click', () => {
        activeLanguage = code; renderResume();
        const url = new URL(location.href); url.searchParams.set('cvlang', code);
        history.replaceState(null, '', url);
      });
      languagePicker.append(button);
    });
    function renderResume() {
      const locale = currentLocale();
      const person = locale.contact;
      const ui = localeUI[activeLanguage];
      article.lang = activeLanguage;
      back.textContent = ui.back; h1.textContent = person.name; portrait.alt = person.name;
      tabs.setAttribute('aria-label', ui.versions); languagePicker.setAttribute('aria-label', ui.languages);
      languagePicker.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === activeLanguage)));
      contacts.replaceChildren(el('span', '', person.city), link(person.email, 'mailto:' + person.email), link(person.telegram, 'https://t.me/' + person.telegram.replace(/^@/, '')), link(ui.portfolio, person.portfolio));
      tabs.replaceChildren(); content.replaceChildren();
      const panels = [], buttons = [];
      locale.versions.forEach((version, index) => {
        const button = el('button', 'resume-tab', version.label); button.type = 'button';
        button.id = 'cv-tab-' + version.id; button.setAttribute('role', 'tab'); button.setAttribute('aria-controls', 'cv-panel-' + version.id);
        const panel = el('section', 'resume-panel'); panel.id = 'cv-panel-' + version.id;
        panel.setAttribute('role', 'tabpanel'); panel.setAttribute('aria-labelledby', button.id);
        const summary = el('div', 'resume-summary-row');
        summary.append(el('h2', '', ui.profile), el('p', 'resume-summary', version.summary)); panel.append(summary);
        version.sections.forEach((part, sectionIndex) => {
          const section = el('section', 'resume-section');
          const title = el('h2', '', part.title); title.id = 'cv-' + version.id + '-' + sectionIndex;
          section.setAttribute('aria-labelledby', title.id);
          const body = el('div', 'resume-section-body');
          if (part.groups?.length) {
            const list = el('dl', 'resume-skill-groups');
            part.groups.forEach(group => {
              const row = el('div'); row.append(el('dt', '', group.label), el('dd', '', group.text)); list.append(row);
            });
            body.append(list);
          }
          (part.items || []).forEach(item => {
            const job = el('div', 'resume-job' + (item.compact ? ' resume-job-compact' : ''));
            const name = el('h3');
            if (item.url) name.append(link(item.title, item.url)); else name.textContent = item.title;
            const meta = el('div', 'resume-job-meta');
            meta.append(el('p', 'resume-job-role', item.role), el('p', 'resume-date', item.date));
            job.append(name, meta);
            if (item.bullets?.length) {
              const list = el('ul', 'resume-bullets'); item.bullets.forEach(text => list.append(el('li', '', text))); job.append(list);
            }
            (item.paragraphs || []).forEach(text => job.append(el('p', 'resume-paragraph', text)));
            body.append(job);
          });
          (part.paragraphs || []).forEach(text => body.append(el('p', 'resume-paragraph', text)));
          section.append(title, body); panel.append(section);
        });
        buttons.push(button); panels.push(panel); tabs.append(button); content.append(panel);
        button.addEventListener('click', () => selectResume(index));
        button.addEventListener('keydown', event => {
          let next;
          if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
          if (event.key === 'ArrowLeft') next = (index + buttons.length - 1) % buttons.length;
          if (event.key === 'Home') next = 0;
          if (event.key === 'End') next = buttons.length - 1;
          if (next === undefined) return;
          event.preventDefault(); selectResume(next); buttons[next].focus();
        });
      });
      function selectResume(index) {
        const version = locale.versions[index]; activeVersion = version.id; role.textContent = version.title;
        buttons.forEach((button, i) => { button.setAttribute('aria-selected', String(i === index)); button.tabIndex = i === index ? 0 : -1; panels[i].hidden = i !== index; });
        updateDownload();
      }
      selectResume(Math.max(0, locale.versions.findIndex(version => version.id === activeVersion)));
    }
    renderResume();
    fetch('assets/cv/manifest.json', {cache:'no-cache'}).then(response => response.ok ? response.json() : null).then(value => {
      if (value) { manifest = value; updateDownload(); }
    }).catch(() => {});
    pages.append(article); articles.set('cv', {article, h1, project:{title:'Резюме / Resume'}});
  }
  const desktopColumns = window.matchMedia('(min-width:721px)');
  let activeFilter = 'all';
  const leftColumn = el('div', 'portfolio-column');
  const rightColumn = el('div', 'portfolio-column');
  leftColumn.dataset.column = 'left'; rightColumn.dataset.column = 'right';
  function arrangeCards() {
    if (!desktopColumns.matches) {
      grid.replaceChildren(...cards.map(item => item.card)); return;
    }
    grid.replaceChildren(leftColumn, rightColumn);
    if (activeFilter !== 'all') {
      const selected = cards.filter(item => !item.card.hidden);
      leftColumn.replaceChildren(...selected.filter((_, index) => index % 2 === 0).map(item => item.card));
      rightColumn.replaceChildren(...selected.filter((_, index) => index % 2 === 1).map(item => item.card));
      return;
    }
    ['left', 'right'].forEach((side, sideIndex) => {
      const column = sideIndex ? rightColumn : leftColumn;
      const selected = cards.filter(({project, index}) => (project.column || (index % 2 ? 'right' : 'left')) === side);
      selected.sort((a, b) => (a.project.columnOrder ?? a.index) - (b.project.columnOrder ?? b.index) || a.index - b.index);
      column.replaceChildren(...selected.map(item => item.card));
    });
  }
  desktopColumns.addEventListener('change', arrangeCards); arrangeCards();
  const filters = document.querySelector('.filters'); filters.replaceChildren();
  const options = [{id:'all', label:'Все'}, ...data.categories];
  options.forEach(option => {
    const button = el('button', 'filter', option.label); button.type = 'button'; button.dataset.filter = option.id;
    button.setAttribute('aria-pressed', String(option.id === 'all'));
    button.append(el('span', '', count(projects.filter(project => option.id === 'all' || (project.categories || []).includes(option.id)).length)));
    button.addEventListener('click', () => {
      activeFilter = option.id;
      filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      let visible = 0;
      cards.forEach(({card, project}) => { card.hidden = option.id !== 'all' && !(project.categories || []).includes(option.id); if (!card.hidden) visible++; });
      arrangeCards();
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
    if (planViewer.open) planViewer.close();
    const id = location.hash.slice(1);
    const target = document.getElementById(id);
    const owner = target?.closest('article.project');
    const match = articles.get(id) || (owner ? articles.get(owner.id) : undefined);
    home.hidden = Boolean(match);
    articles.forEach(({article}, key) => {
      article.hidden = article !== match?.article;
      if (article.hidden) article.querySelectorAll('.video-grid video').forEach(video => video.pause());
    });
    blogPlayers.forEach((player, frame) => {
      if (frame.getClientRects().length) player.mount(); else player.unmount();
    });
    loops.forEach((_, video) => syncLoop(video));
    document.title = match ? match.project.title + ' — ' + data.site.name : data.site.title;
    if (match) {
      if (target && target !== match.article) {
        target.scrollIntoView({block:'start'});
        if (keyboardNavigation) target.focus({preventScroll:true});
      } else { window.scrollTo(0, 0); if (keyboardNavigation) match.h1.focus({preventScroll:true}); }
    }
    else if (id === 'works' || id === 'about') requestAnimationFrame(() => document.getElementById(id).scrollIntoView());
    else window.scrollTo(0, 0);
    updateToTop();
  }
  const mainWrap = pages.closest('main.wrap');
  function updatePageGutter() {
    if (!mainWrap) return;
    const left = mainWrap.getBoundingClientRect().left + parseFloat(getComputedStyle(mainWrap).paddingLeft);
    const value = Math.max(0, left) + 'px';
    if (mainWrap.style.getPropertyValue('--page-gutter') !== value) mainWrap.style.setProperty('--page-gutter', value);
  }
  updatePageGutter();
  new ResizeObserver(updatePageGutter).observe(document.documentElement);
  window.addEventListener('hashchange', route); route();
})();
