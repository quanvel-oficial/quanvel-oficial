const ADMIN_PASSWORD = 'admin123';
const STORAGE_KEY = 'quanvely-content';

const DEFAULT_CONTENT = {
  'site-title': 'Quanvely - Software que impulsa tu negocio',
  'site-logo-text': 'Quanvely',

  'hero-btn1': 'Comenzar proyecto &rarr;',
  'hero-btn2': 'Ver servicios',
  'stat-label-projects': 'Proyectos entregados',
  'stat-label-clients': 'Clientes satisfechos',
  'stat-label-years': 'A\u00f1os de experiencia',

  'hero-badge': 'Software de nueva generacion',
  'hero-title': 'Construimos el <span class="gradient-text">futuro digital</span> de tu empresa',
  'hero-desc': 'En Quanvely creamos soluciones de software a medida, plataformas escalables y productos digitales que transforman negocios.',
  'hero-projects': '50',
  'hero-clients': '30',
  'hero-years': '5',

  'services-tag': 'Nuestros servicios',
  'services-title': 'Soluciones completas para <span class="gradient-text">cada desafio</span>',
  services: [
    { title: 'Desarrollo Web', desc: 'Aplicaciones web modernas, rapidas y responsivas con las ultimas tecnologias del mercado.', tags: 'React,Next.js,Node.js' },
    { title: 'Apps Moviles', desc: 'Aplicaciones nativas e hibridas para iOS y Android que ofrecen la mejor experiencia de usuario.', tags: 'React Native,Flutter,Swift' },
    { title: 'Cloud & DevOps', desc: 'Infraestructura en la nube, CI/CD y automatizacion para escalar tu producto sin limites.', tags: 'AWS,Docker,Kubernetes' },
    { title: 'IA & Machine Learning', desc: 'Soluciones inteligentes con inteligencia artificial para optimizar procesos y tomar mejores decisiones.', tags: 'Python,TensorFlow,GPT' },
    { title: 'Ciberseguridad', desc: 'Proteccion avanzada de datos, auditorias de seguridad y cumplimiento normativo.', tags: 'Auditoria,Pentesting,OWASP' },
    { title: 'Consultoria Tech', desc: 'Asesoria estrategica para transformacion digital, arquitectura de software y optimitacion de procesos.', tags: 'Estrategia,Agile,Scrum' }
  ],

  'about-tag': 'Sobre nosotros',
  'about-title': 'Un equipo apasionado por el <span class="gradient-text">codigo limpio</span>',
  'about-text': 'Somos un equipo de ingenieros, disenadores y estrategas que creen en el poder del software para transformar negocios. En Quanvely no solo escribimos codigo: construimos productos que marcan la diferencia.',
  'about-f1-title': 'Metodologia Agile',
  'about-f1-desc': 'Entregas iterativas y feedback constante para asegurar que el producto cumpla tus expectativas.',
  'about-f2-title': 'Codigo de calidad',
  'about-f2-desc': 'Testing automatizado, revision de codigo y mejores practicas en cada linea que escribimos.',
  'about-f3-title': 'Soporte continuo',
  'about-f3-desc': 'No te dejamos despues del lanzamiento. Ofrecemos mantenimiento y evolucion continua.',

  'portfolio-tag': 'Portfolio',
  'portfolio-title': 'Proyectos que <span class="gradient-text">hablan por si solos</span>',
  portfolio: [
    { title: 'Marketplace Digital', desc: 'Plataforma de comercio electronico con mas de 10,000 productos y pagos integrados.', type: 'E-commerce' },
    { title: 'Dashboard Analytics', desc: 'Sistema de analisis de datos en tiempo real para empresas de retail.', type: 'SaaS' },
    { title: 'App de Fitness', desc: 'Aplicacion movil con 50k+ descargas y planes personalizados con IA.', type: 'Mobile App' }
  ],

  'testimonials-tag': 'Testimonios',
  'testimonials-title': 'Lo que dicen <span class="gradient-text">nuestros clientes</span>',
  testimonials: [
    { name: 'Carlos Mendoza', role: 'CEO, TechStore', text: 'Quanvely transformo por completo nuestra plataforma. El equipo entendio nuestras necesidades desde el primer dia y el resultado supero nuestras expectativas.' },
    { name: 'Ana Lucia Perez', role: 'CTO, FinSecure', text: 'Trabajar con Quanvely fue una experiencia increible. Su metodologia agile y su atencion al detalle hicieron que el desarrollo fuera fluido y transparente.' },
    { name: 'Miguel Rojas', role: 'Fundador, FitNow', text: 'La app que desarrollaron para nosotros tiene mas de 50k descargas y las reseñas son espectaculares. Sin duda, los mejores en desarrollo movil.' }
  ],

  'cta-tag': 'Trabajemos juntos',
  'cta-title': 'Listo para <span class="gradient-text">impulsar tu negocio</span>?',
  'cta-desc': 'Cuentanos sobre tu proyecto y te enviaremos una propuesta personalizada en menos de 24 horas.',
  'cta-btn': 'Solicitar cotizacion &rarr;',

  'contact-tag': 'Contacto',
  'contact-title': 'Hablemos de tu <span class="gradient-text">proximo proyecto</span>',
  'contact-email': 'hola@quanvely.com',
  'contact-location': 'Trabajamos remoto en todo el mundo',
  'contact-response': 'En menos de 24 horas',
  'contact-submit': 'Enviar mensaje',

  'footer-text': 'Construyendo el futuro digital, una linea de codigo a la vez.',
  'footer-copyright': '&copy; 2026 Quanvely. Todos los derechos reservados.',
  'footer-col1-title': 'Servicios',
  'footer-col2-title': 'Empresa',
  'footer-col3-title': 'Siguenos',
  'footer-github': 'https://github.com/quanvely',
  'footer-linkedin': 'https://linkedin.com/company/quanvely',
  'footer-twitter': 'https://twitter.com/quanvely',

  'style-bg-primary': '#2a1a40',
  'style-bg-secondary': '#332152',
  'style-bg-card': '#3d2a63',
  'style-text-primary': '#f5f3fb',
  'style-text-secondary': '#b8adcf',
  'style-accent': '#8b5cf6',
  'style-font': 'Inter',
  'style-font-size-hero': '77',
  'style-font-size-title': '38',
  'style-font-size-text': '16',
  'style-hero-align': 'left',
  'style-logo-pos': 'left',
  'page-sections': ['hero', 'services', 'about', 'portfolio', 'testimonials', 'cta', 'contact', 'footer'],
  'block-order': {
    hero: ['hero-badge', 'hero-title', 'hero-desc', 'hero-buttons', 'hero-stats'],
    about: ['about-text', 'about-visual'],
    contact: ['contact-form', 'contact-info'],
    footer: ['footer-brand', 'footer-links-1', 'footer-links-2', 'footer-links-3', 'footer-links-4']
  },
  'custom-css': ''
};

function loadContent() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...DEFAULT_CONTENT, ...parsed };
    }
  } catch (e) {}
  return { ...DEFAULT_CONTENT };
}

function saveContent(content) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

let content = loadContent();

function renderServices() {
  const container = document.getElementById('services-list');
  container.innerHTML = '';
  content.services.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'service-item';
    div.innerHTML = `
      <div class="item-header">
        <h4>Servicio ${i + 1}</h4>
        <div class="item-actions">
          <button type="button" class="order-btn" onclick="moveService(${i},-1)" ${i === 0 ? 'disabled' : ''} title="Mover arriba">&#9650;</button>
          <button type="button" class="order-btn" onclick="moveService(${i},1)" ${i === content.services.length - 1 ? 'disabled' : ''} title="Mover abajo">&#9660;</button>
          <button type="button" class="delete-btn" onclick="deleteService(${i})" title="Eliminar servicio">&times;</button>
        </div>
      </div>
      <div class="field">
        <label>Titulo</label>
        <input type="text" class="s-title" value="${escHtml(s.title)}">
      </div>
      <div class="field">
        <label>Descripcion</label>
        <textarea class="s-desc" rows="2">${escHtml(s.desc)}</textarea>
      </div>
      <div class="field">
        <label>Tags (separados por coma)</label>
        <input type="text" class="s-tags" value="${escHtml(s.tags)}">
      </div>
    `;
    container.appendChild(div);
  });
}

function renderPortfolio() {
  const container = document.getElementById('portfolio-list');
  container.innerHTML = '';
  content.portfolio.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'portfolio-item';
    div.innerHTML = `
      <div class="item-header">
        <h4>Proyecto ${i + 1}</h4>
        <div class="item-actions">
          <button type="button" class="order-btn" onclick="movePortfolio(${i},-1)" ${i === 0 ? 'disabled' : ''} title="Mover arriba">&#9650;</button>
          <button type="button" class="order-btn" onclick="movePortfolio(${i},1)" ${i === content.portfolio.length - 1 ? 'disabled' : ''} title="Mover abajo">&#9660;</button>
          <button type="button" class="delete-btn" onclick="deletePortfolio(${i})" title="Eliminar proyecto">&times;</button>
        </div>
      </div>
      <div class="field">
        <label>Titulo</label>
        <input type="text" class="p-title" value="${escHtml(p.title)}">
      </div>
      <div class="field">
        <label>Tipo (E-commerce, SaaS, etc.)</label>
        <input type="text" class="p-type" value="${escHtml(p.type)}">
      </div>
      <div class="field">
        <label>Descripcion</label>
        <textarea class="p-desc" rows="2">${escHtml(p.desc)}</textarea>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-list');
  container.innerHTML = '';
  content.testimonials.forEach((t, i) => {
    const div = document.createElement('div');
    div.className = 'testimonial-item';
    div.innerHTML = `
      <div class="item-header">
        <h4>Testimonio ${i + 1}</h4>
        <div class="item-actions">
          <button type="button" class="order-btn" onclick="moveTestimonial(${i},-1)" ${i === 0 ? 'disabled' : ''} title="Mover arriba">&#9650;</button>
          <button type="button" class="order-btn" onclick="moveTestimonial(${i},1)" ${i === content.testimonials.length - 1 ? 'disabled' : ''} title="Mover abajo">&#9660;</button>
          <button type="button" class="delete-btn" onclick="deleteTestimonial(${i})" title="Eliminar testimonio">&times;</button>
        </div>
      </div>
      <div class="field">
        <label>Nombre</label>
        <input type="text" class="t-name" value="${escHtml(t.name)}">
      </div>
      <div class="field">
        <label>Cargo</label>
        <input type="text" class="t-role" value="${escHtml(t.role)}">
      </div>
      <div class="field">
        <label>Texto</label>
        <textarea class="t-text" rows="3">${escHtml(t.text)}</textarea>
      </div>
    `;
    container.appendChild(div);
  });
}

function addService() {
  content.services.push({ title: 'Nuevo servicio', desc: 'Describe tu servicio aqui.', tags: 'Tag1,Tag2' });
  renderServices();
}

function moveService(i, dir) {
  const j = i + dir;
  if (j < 0 || j >= content.services.length) return;
  [content.services[i], content.services[j]] = [content.services[j], content.services[i]];
  renderServices();
}

function deleteService(i) {
  content.services.splice(i, 1);
  renderServices();
}

function addPortfolio() {
  content.portfolio.push({ title: 'Nuevo proyecto', type: 'SaaS', desc: 'Describe el proyecto aqui.' });
  renderPortfolio();
}

function movePortfolio(i, dir) {
  const j = i + dir;
  if (j < 0 || j >= content.portfolio.length) return;
  [content.portfolio[i], content.portfolio[j]] = [content.portfolio[j], content.portfolio[i]];
  renderPortfolio();
}

function deletePortfolio(i) {
  content.portfolio.splice(i, 1);
  renderPortfolio();
}

function addTestimonial() {
  content.testimonials.push({ name: 'Nuevo cliente', role: 'Cargo', text: 'Escribe el testimonio aqui.' });
  renderTestimonials();
}

function moveTestimonial(i, dir) {
  const j = i + dir;
  if (j < 0 || j >= content.testimonials.length) return;
  [content.testimonials[i], content.testimonials[j]] = [content.testimonials[j], content.testimonials[i]];
  renderTestimonials();
}

function deleteTestimonial(i) {
  content.testimonials.splice(i, 1);
  renderTestimonials();
}

function renderSections() {
  const container = document.getElementById('sections-list');
  if (!container) return;
  const names = {
    hero: 'Inicio (hero)',
    services: 'Servicios',
    about: 'Sobre nosotros',
    portfolio: 'Portfolio',
    testimonials: 'Testimonios',
    cta: 'CTA (trabajemos juntos)',
    contact: 'Contacto',
    footer: 'Footer'
  };
  container.innerHTML = '';
  const order = content['page-sections'];
  if (!order || !order.length) return;
  order.forEach((id, i) => {
    const div = document.createElement('div');
    div.className = 'section-order-item';
    div.innerHTML = `
      <span>${i + 1}. ${names[id] || id}</span>
      <div class="item-actions">
        <button type="button" class="order-btn" onclick="moveSection(${i},-1)" ${i === 0 ? 'disabled' : ''} title="Mover arriba">&#9650;</button>
        <button type="button" class="order-btn" onclick="moveSection(${i},1)" ${i === order.length - 1 ? 'disabled' : ''} title="Mover abajo">&#9660;</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function moveSection(i, dir) {
  const order = content['page-sections'];
  const j = i + dir;
  if (j < 0 || j >= order.length) return;
  [order[i], order[j]] = [order[j], order[i]];
  renderSections();
}

const BLOCK_NAMES = {
  hero: {
    'hero-badge': 'Badge (texto con punto verde)',
    'hero-title': 'Titulo principal',
    'hero-desc': 'Parrafo de descripcion',
    'hero-buttons': 'Botones',
    'hero-stats': 'Estadisticas (numeros)'
  },
  about: {
    'about-text': 'Texto e informacion',
    'about-visual': 'Grafico (bloque de codigo)'
  },
  contact: {
    'contact-form': 'Formulario',
    'contact-info': 'Informacion de contacto'
  },
  footer: {
    'footer-brand': 'Marca y descripcion',
    'footer-links-1': 'Columna Servicios',
    'footer-links-2': 'Columna Empresa',
    'footer-links-3': 'Columna Siguenos',
    'footer-links-4': 'Columna Acceso'
  }
};

function renderBlocks() {
  const container = document.getElementById('blocks-manager');
  if (!container) return;
  const containers = [
    { id: 'hero', title: 'Inicio (hero)' },
    { id: 'about', title: 'Sobre nosotros' },
    { id: 'contact', title: 'Contacto' },
    { id: 'footer', title: 'Footer' }
  ];
  container.innerHTML = '';
  containers.forEach(c => {
    const wrap = document.createElement('div');
    wrap.className = 'block-group';
    const title = document.createElement('h4');
    title.textContent = c.title;
    wrap.appendChild(title);
    const list = document.createElement('div');
    list.className = 'block-list';
    list.setAttribute('data-block-container', c.id);
    const blocks = (content['block-order'] && content['block-order'][c.id]) || [];
    blocks.forEach(b => {
      const item = document.createElement('div');
      item.className = 'block-chip';
      item.setAttribute('draggable', 'true');
      item.setAttribute('data-block-id', b);
      item.innerHTML = '<span class="block-grip">&#9776;</span><span>' + ((BLOCK_NAMES[c.id] && BLOCK_NAMES[c.id][b]) || b) + '</span>';
      list.appendChild(item);
    });
    wrap.appendChild(list);
    container.appendChild(wrap);
  });
}

function escHtml(str) {
  if (typeof str !== 'string') return '';
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function loadFields() {
  const allKeys = [
    'site-title', 'site-logo-text',
    'hero-btn1', 'hero-btn2', 'stat-label-projects', 'stat-label-clients', 'stat-label-years',
    'hero-badge', 'hero-title', 'hero-desc', 'hero-projects', 'hero-clients', 'hero-years',
    'services-tag', 'services-title',
    'about-tag', 'about-title', 'about-text', 'about-f1-title', 'about-f1-desc', 'about-f2-title', 'about-f2-desc', 'about-f3-title', 'about-f3-desc',
    'portfolio-tag', 'portfolio-title',
    'testimonials-tag', 'testimonials-title',
    'cta-tag', 'cta-title', 'cta-desc', 'cta-btn',
    'contact-tag', 'contact-title', 'contact-email', 'contact-location', 'contact-response', 'contact-submit',
    'footer-text', 'footer-copyright', 'footer-col1-title', 'footer-col2-title', 'footer-col3-title',
    'footer-github', 'footer-linkedin', 'footer-twitter',
    'style-bg-primary', 'style-bg-secondary', 'style-bg-card', 'style-text-primary', 'style-text-secondary', 'style-accent',
    'style-font', 'style-font-size-hero', 'style-font-size-title', 'style-font-size-text', 'style-hero-align', 'style-logo-pos',
    'custom-css'
  ];

  allKeys.forEach(key => {
    const el = document.getElementById(key);
    if (el) el.value = content[key] || '';
  });

  const savedToken = localStorage.getItem('quanvely-github-token');
  if (savedToken) {
    document.getElementById('github-token').value = savedToken;
  }

  renderServices();
  renderPortfolio();
  renderTestimonials();
  renderSections();
  renderBlocks();
}

function collectFields() {
  const allKeys = [
    'site-title', 'site-logo-text',
    'hero-btn1', 'hero-btn2', 'stat-label-projects', 'stat-label-clients', 'stat-label-years',
    'hero-badge', 'hero-title', 'hero-desc', 'hero-projects', 'hero-clients', 'hero-years',
    'services-tag', 'services-title',
    'about-tag', 'about-title', 'about-text', 'about-f1-title', 'about-f1-desc', 'about-f2-title', 'about-f2-desc', 'about-f3-title', 'about-f3-desc',
    'portfolio-tag', 'portfolio-title',
    'testimonials-tag', 'testimonials-title',
    'cta-tag', 'cta-title', 'cta-desc', 'cta-btn',
    'contact-tag', 'contact-title', 'contact-email', 'contact-location', 'contact-response', 'contact-submit',
    'footer-text', 'footer-copyright', 'footer-col1-title', 'footer-col2-title', 'footer-col3-title',
    'footer-github', 'footer-linkedin', 'footer-twitter',
    'style-bg-primary', 'style-bg-secondary', 'style-bg-card', 'style-text-primary', 'style-text-secondary', 'style-accent',
    'style-font', 'style-font-size-hero', 'style-font-size-title', 'style-font-size-text', 'style-hero-align', 'style-logo-pos',
    'custom-css'
  ];

  const newContent = { ...content };
  allKeys.forEach(key => {
    const el = document.getElementById(key);
    if (el) newContent[key] = el.value;
  });

  const services = [];
  document.querySelectorAll('#services-list .service-item').forEach(item => {
    services.push({
      title: item.querySelector('.s-title').value,
      desc: item.querySelector('.s-desc').value,
      tags: item.querySelector('.s-tags').value
    });
  });
  newContent.services = services;

  const portfolio = [];
  document.querySelectorAll('#portfolio-list .portfolio-item').forEach(item => {
    portfolio.push({
      title: item.querySelector('.p-title').value,
      type: item.querySelector('.p-type').value,
      desc: item.querySelector('.p-desc').value
    });
  });
  newContent.portfolio = portfolio;

  const testimonials = [];
  document.querySelectorAll('#testimonials-list .testimonial-item').forEach(item => {
    testimonials.push({
      name: item.querySelector('.t-name').value,
      role: item.querySelector('.t-role').value,
      text: item.querySelector('.t-text').value
    });
  });
  newContent.testimonials = testimonials;

  return newContent;
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function handleSave() {
  content = collectFields();
  saveContent(content);
  const token = document.getElementById('github-token').value;
  if (token) {
    localStorage.setItem('quanvely-github-token', token);
    publishToGitHub(true);
  } else {
    showToast('Cambios guardados localmente. Ingresa un token en General para publicar en GitHub');
  }
}

async function publishToGitHub(silent) {
  const token = document.getElementById('github-token').value;
  if (!token) {
    showToast('Primero ingresa tu token de GitHub en General');
    switchTab('general');
    return;
  }

  const repo = 'quanvel-oficial';
  const owner = 'quanvel-oficial';
  const api = `https://api.github.com/repos/${owner}/${repo}/contents`;

  const data = collectFields();
  const jsonContent = JSON.stringify(data, null, 2);
  const encoded = btoa(unescape(encodeURIComponent(jsonContent)));

  let sha = null;
  try {
    sha = (await (await fetch(`${api}/content.json`, {
      headers: { Authorization: `Bearer ${token}` }
    })).json()).sha;
  } catch(e) {}

  const body = {
    message: 'Actualizar contenido desde admin',
    content: encoded,
    branch: 'main'
  };
  if (sha) body.sha = sha;

  try {
    await fetch(`${api}/content.json`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (!silent) showToast('Publicado en GitHub!');
    else showToast('Guardado y publicado en GitHub');
  } catch(e) {
    if (!silent) showToast('Error al publicar: ' + e.message);
  }
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const tab = document.getElementById('tab-' + tabId);
  if (tab) tab.classList.add('active');

  const btn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
  if (btn) btn.classList.add('active');

  const titles = {
    general: 'General',
    hero: 'Inicio',
    services: 'Servicios',
    about: 'Sobre nosotros',
    portfolio: 'Portfolio',
    testimonials: 'Testimonios',
    cta: 'CTA',
    contact: 'Contacto',
    footer: 'Footer',
    styles: 'Estilos',
    blocks: 'Bloques',
    preview: 'Vista previa'
  };
  document.getElementById('tab-title').textContent = titles[tabId] || tabId;

  if (tabId === 'preview') {
    const frame = document.getElementById('preview-frame');
    if (frame) frame.src = '../index.html?edit=1&_=' + Date.now();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('quanvely-session') === 'true') {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('dashboard').style.display = 'flex';
    loadFields();
  }

  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const pw = document.getElementById('password-input').value;
    if (pw === ADMIN_PASSWORD) {
      localStorage.setItem('quanvely-session', 'true');
      document.getElementById('login-screen').style.display = 'none';
      document.getElementById('dashboard').style.display = 'flex';
      loadFields();
    } else {
      document.getElementById('login-error').textContent = 'Contrasena incorrecta';
    }
  });

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  document.getElementById('save-all-btn').addEventListener('click', handleSave);
  document.getElementById('publish-btn').addEventListener('click', publishToGitHub);

  document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('quanvely-session');
    location.reload();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      handleSave();
    }
  });

  let dragBlock = null;
  document.addEventListener('dragstart', (e) => {
    const chip = e.target.closest('.block-chip');
    if (chip) {
      dragBlock = chip;
      chip.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    }
  });

  document.addEventListener('dragend', () => {
    if (dragBlock) {
      dragBlock.classList.remove('dragging');
      dragBlock = null;
    }
  });

  document.addEventListener('dragover', (e) => {
    const chip = e.target.closest('.block-chip');
    if (chip) e.preventDefault();
  });

  document.addEventListener('drop', (e) => {
    e.preventDefault();
    const chip = e.target.closest('.block-chip');
    if (!chip || !dragBlock || chip === dragBlock) return;
    if (chip.parentElement !== dragBlock.parentElement) return;
    const rect = chip.getBoundingClientRect();
    if (e.clientY > rect.top + rect.height / 2) chip.after(dragBlock);
    else chip.before(dragBlock);
    const list = chip.parentElement;
    const containerId = list.getAttribute('data-block-container');
    const newOrder = [];
    list.querySelectorAll('.block-chip').forEach(c => newOrder.push(c.getAttribute('data-block-id')));
    if (content['block-order']) content['block-order'][containerId] = newOrder;
    renderBlocks();
    showToast('Orden actualizado. Recuerda guardar para publicar');
  });
});
