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
  'footer-twitter': 'https://twitter.com/quanvely'
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
      <h4>Servicio ${i + 1}</h4>
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
      <h4>Proyecto ${i + 1}</h4>
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
      <h4>Testimonio ${i + 1}</h4>
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
    'footer-github', 'footer-linkedin', 'footer-twitter'
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
    'footer-github', 'footer-linkedin', 'footer-twitter'
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
  if (token) localStorage.setItem('quanvely-github-token', token);
  showToast('Cambios guardados correctamente');
}

async function publishToGitHub() {
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
    showToast('Publicado en GitHub!');
  } catch(e) {
    showToast('Error al publicar: ' + e.message);
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
    footer: 'Footer'
  };
  document.getElementById('tab-title').textContent = titles[tabId] || tabId;
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
});
