(function() {
  var STORAGE_KEY = 'quanvely-content';

  function applyContent(saved) {
    if (!saved) return;

    var css = ':root{';
    var colorKeys = ['style-bg-primary', 'style-bg-secondary', 'style-bg-card', 'style-text-primary', 'style-text-secondary', 'style-accent'];
    var cssVars = {
      'style-bg-primary': '--bg-primary',
      'style-bg-secondary': '--bg-secondary',
      'style-bg-card': '--bg-card',
      'style-text-primary': '--text-primary',
      'style-text-secondary': '--text-secondary',
      'style-accent': '--accent'
    };
    colorKeys.forEach(function(k) {
      if (saved[k]) css += cssVars[k] + ':' + saved[k] + ';';
    });
    if (saved['style-font-size-hero']) css += '--font-size-hero:' + saved['style-font-size-hero'] + 'px;';
    if (saved['style-font-size-title']) css += '--font-size-title:' + saved['style-font-size-title'] + 'px;';
    if (saved['style-font-size-text']) css += '--font-size-text:' + saved['style-font-size-text'] + 'px;';
    css += '}';

    var font = saved['style-font'] || 'Inter';
    var fonts = {
      'Inter': 'Inter',
      'Poppins': 'Poppins',
      'Montserrat': 'Montserrat',
      'Roboto': 'Roboto',
      'Space Grotesk': 'Space+Grotesk',
      'Source Sans 3': 'Source+Sans+3',
      'Lora': 'Lora',
      'Playfair Display': 'Playfair+Display'
    };
    var gf = fonts[font] || 'Inter';
    var fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=' + gf + ':wght@300;400;500;600;700;800&display=swap';
    document.head.appendChild(fontLink);
    css += "body{font-family:'" + font + "',-apple-system,BlinkMacSystemFont,sans-serif;}";
    css += 'h1,h2,h3,h4,h5,h6{font-family:' + "'" + font + "'" + ',-apple-system,BlinkMacSystemFont,sans-serif;}';

    if (saved['custom-css']) css += saved['custom-css'];
    var styleEl = document.createElement('style');
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    if (saved['style-hero-align'] === 'center') document.body.classList.add('hero-center');
    if (saved['style-logo-pos'] && saved['style-logo-pos'] !== 'left') document.body.classList.add('logo-' + saved['style-logo-pos']);

    document.querySelectorAll('[data-key]').forEach(function(el) {
      var key = el.getAttribute('data-key');
      if (saved[key] !== undefined) {
        if (key.indexOf('hero-projects') > -1 || key.indexOf('hero-clients') > -1 || key.indexOf('hero-years') > -1) {
          el.textContent = saved[key];
          el.setAttribute('data-target', saved[key]);
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
          var bg = gradients[i] || gradients[i % gradients.length];
          var delay = i === 0 ? '' : i === 1 ? ' delay-100' : i === 2 ? ' delay-200' : ' delay-' + (i % 3 * 100);
          return '<div class="portfolio-card fade-in' + delay + '"><div class="portfolio-preview" style="background: ' + bg + ';"><span class="portfolio-type">' + esc(p.type) + '</span></div><div class="portfolio-info"><h3>' + esc(p.title) + '</h3><p>' + esc(p.desc) + '</p></div></div>';
        }).join('');
      }
    }

    if (saved.testimonials && saved.testimonials.length) {
      var testimonialsGrid = document.querySelector('[data-key="testimonials"]');
      if (testimonialsGrid) {
        var avatars = ['background:linear-gradient(135deg,#6366f1,#8b5cf6)', 'background:linear-gradient(135deg,#06b6d4,#3b82f6)', 'background:linear-gradient(135deg,#f59e0b,#ef4444)'];
        testimonialsGrid.innerHTML = saved.testimonials.map(function(t, i) {
          var av = avatars[i] || avatars[i % avatars.length];
          var delay = i === 0 ? '' : i === 1 ? ' delay-100' : i === 2 ? ' delay-200' : ' delay-' + (i % 3 * 100);
          var initial = t.name ? t.name.charAt(0).toUpperCase() : '?';
          return '<div class="testimonial-card fade-in-scale' + delay + '"><div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>"' + esc(t.text) + '"</p><div class="testimonial-author"><div class="testimonial-avatar" style="' + av + '">' + initial + '</div><div><h4>' + esc(t.name) + '</h4><p>' + esc(t.role) + '</p></div></div></div>';
        }).join('');
      }
    }

    if (saved['page-sections'] && saved['page-sections'].length) {
      saved['page-sections'].forEach(function(id) {
        var el = document.querySelector('[data-section="' + id + '"]');
        if (el) document.body.appendChild(el);
      });
    }
  }

  function esc(str) {
    if (!str) return '';
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  try {
    var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) applyContent(saved);
  } catch(e) {}

  fetch('https://api.github.com/repos/quanvel-oficial/quanvel-oficial/contents/content.json?_=' + Date.now())
    .then(function(r) {
      if (!r.ok) throw new Error('No disponible');
      return r.json();
    })
    .then(function(data) {
      var json = decodeURIComponent(escape(atob(data.content)));
      applyContent(JSON.parse(json));
    })
    .catch(function() {});
})();
