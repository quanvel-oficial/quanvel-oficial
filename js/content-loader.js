(function() {
  var STORAGE_KEY = 'quanvely-content';
  var saved;
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (raw) saved = JSON.parse(raw);
  } catch(e) {}

  if (!saved) return;

  document.querySelectorAll('[data-key]').forEach(function(el) {
    var key = el.getAttribute('data-key');
    if (saved[key] !== undefined) {
      if (key.indexOf('hero-projects') > -1 || key.indexOf('hero-clients') > -1 || key.indexOf('hero-years') > -1) {
        el.textContent = saved[key];
      } else if (key === 'site-title') {
        document.title = saved[key];
      } else if (key === 'footer-github' || key === 'footer-linkedin' || key === 'footer-twitter') {
        el.setAttribute('href', saved[key]);
      } else {
        el.innerHTML = saved[key];
      }
    }
  });

  if (saved.services && saved.services.length) {
    var servicesGrid = document.querySelector('[data-key="services"]');
    if (servicesGrid) {
      var icons = ['&#128187;', '&#128241;', '&#9729;&#65039;', '&#129302;', '&#128274;', '&#128200;'];
      servicesGrid.innerHTML = saved.services.map(function(s, i) {
        var tags = (typeof s.tags === 'string' ? s.tags : '').split(',').map(function(t) { return '<span>' + t.trim() + '</span>'; }).join('');
        var delay = i === 0 ? '' : i === 1 ? ' delay-100' : i === 2 ? ' delay-200' : i === 3 ? ' delay-100' : i === 4 ? ' delay-200' : ' delay-300';
        return '<div class="service-card fade-in' + delay + '"><div class="service-icon">' + (icons[i] || '') + '</div><h3>' + esc(s.title) + '</h3><p>' + esc(s.desc) + '</p><ul class="service-tags">' + tags + '</ul></div>';
      }).join('');
    }
  }

  if (saved.portfolio && saved.portfolio.length) {
    var portfolioGrid = document.querySelector('[data-key="portfolio"]');
    if (portfolioGrid) {
      var gradients = ['linear-gradient(135deg, #6366f1, #8b5cf6)', 'linear-gradient(135deg, #06b6d4, #3b82f6)', 'linear-gradient(135deg, #f43f5e, #ec4899)'];
      portfolioGrid.innerHTML = saved.portfolio.map(function(p, i) {
        var delay = i === 0 ? '' : i === 1 ? ' delay-100' : ' delay-200';
        return '<div class="portfolio-card fade-in' + delay + '"><div class="portfolio-preview" style="background: ' + gradients[i] + ';"><span class="portfolio-type">' + esc(p.type) + '</span></div><div class="portfolio-info"><h3>' + esc(p.title) + '</h3><p>' + esc(p.desc) + '</p></div></div>';
      }).join('');
    }
  }

  if (saved.testimonials && saved.testimonials.length) {
    var testimonialsGrid = document.querySelector('[data-key="testimonials"]');
    if (testimonialsGrid) {
      var avatars = ['background:linear-gradient(135deg,#6366f1,#8b5cf6)', 'background:linear-gradient(135deg,#06b6d4,#3b82f6)', 'background:linear-gradient(135deg,#f59e0b,#ef4444)'];
      testimonialsGrid.innerHTML = saved.testimonials.map(function(t, i) {
        var delay = i === 0 ? '' : i === 1 ? ' delay-100' : ' delay-200';
        var initial = t.name ? t.name.charAt(0).toUpperCase() : '?';
        return '<div class="testimonial-card fade-in-scale' + delay + '"><div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>"' + esc(t.text) + '"</p><div class="testimonial-author"><div class="testimonial-avatar" style="' + avatars[i] + '">' + initial + '</div><div><h4>' + esc(t.name) + '</h4><p>' + esc(t.role) + '</p></div></div></div>';
      }).join('');
    }
  }

  function esc(str) {
    if (!str) return '';
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }
})();
