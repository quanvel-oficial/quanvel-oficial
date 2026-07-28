const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const contactForm = document.getElementById('contact-form');

let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  navbar.classList.toggle('scrolled', currentScroll > 50);
  lastScroll = currentScroll;
});

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
  document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  });
});

const animateCounters = () => {
  document.querySelectorAll('.stat-number').forEach(counter => {
    const target = +counter.dataset.target;
    const duration = 2200;
    const step = Math.max(1, target / (duration / 16));
    let current = 0;

    const update = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    };
    update();
  });
};

const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const animateObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const classes = ['fade-in', 'fade-in-left', 'fade-in-right', 'fade-in-scale'];
      classes.forEach(c => {
        if (el.classList.contains(c)) {
          el.classList.add('visible');
        }
      });
      animateObserver.unobserve(el);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale').forEach(el => {
  animateObserver.observe(el);
});

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button');
  const originalText = btn.innerHTML;
  btn.innerHTML = '&#10003; Mensaje enviado';
  btn.style.background = '#22c55e';
  btn.style.boxShadow = '0 4px 20px rgba(34, 197, 94, 0.3)';

  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.background = '';
    btn.style.boxShadow = '';
    contactForm.reset();
  }, 2500);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('.service-card, .portfolio-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    const icon = this.querySelector('.service-icon');
    if (icon) {
      icon.style.transform = 'scale(1.1) rotate(-3deg)';
    }
  });
  card.addEventListener('mouseleave', function() {
    const icon = this.querySelector('.service-icon');
    if (icon) {
      icon.style.transform = '';
    }
  });
});
