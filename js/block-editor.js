(function() {
  var BLOCK_ORDER_KEY = 'quanvely-block-order';
  var BLOCK_POS_KEY = 'quanvely-block-pos';
  var editMode = false;
  var btn = document.getElementById('edit-blocks-btn');
  var hint = document.createElement('div');
  hint.className = 'blocks-hint';
  hint.innerHTML = 'Arrastra cada bloque en cualquier direccion. Doble clic quita la posicion.';
  document.body.appendChild(hint);

  var ghost = null;
  var draggedEl = null;
  var startX = 0;
  var startY = 0;
  var grabDX = 0;
  var grabDY = 0;
  var baseX = 0;
  var baseY = 0;
  var dragging = false;

  function showToast(msg) {
    var t = document.getElementById('blocks-toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(function() { t.classList.remove('show'); }, 2200);
  }

  function setEditMode(on) {
    editMode = on;
    document.body.classList.toggle('edit-mode', on);
    if (hint) hint.style.display = on ? 'block' : 'none';
    if (btn) {
      btn.classList.toggle('active', on);
      btn.innerHTML = on ? '&#10005;' : '&#9776;';
    }
  }

  function parseTransform(el) {
    var t = el.style.transform || '';
    var m = t.match(/translate\(\s*(-?[\d.]+)px\s*,\s*(-?[\d.]+)px\s*\)/);
    if (m) return { x: parseFloat(m[1]), y: parseFloat(m[2]) };
    return { x: 0, y: 0 };
  }

  function collectOrder() {
    var order = {};
    document.querySelectorAll('[data-block-container]').forEach(function(container) {
      var id = container.getAttribute('data-block-container');
      order[id] = [];
      container.querySelectorAll(':scope > [data-block]').forEach(function(el) {
        order[id].push(el.getAttribute('data-block'));
      });
    });
    return order;
  }

  function collectPos() {
    var pos = {};
    document.querySelectorAll('[data-block]').forEach(function(el) {
      var t = parseTransform(el);
      if (t.x !== 0 || t.y !== 0) {
        pos[el.getAttribute('data-block')] = t;
      }
    });
    return pos;
  }

  function fetchContent() {
    return fetch('https://api.github.com/repos/quanvel-oficial/quanvel-oficial/contents/content.json?_=' + Date.now())
      .then(function(r) {
        if (!r.ok) throw new Error('fetch');
        return r.json();
      });
  }

  function publishField(field, value, msg, okMsg) {
    var token = localStorage.getItem('quanvely-github-token');
    if (!token) {
      showToast('Guardado local. Falta el token para publicar');
      return;
    }
    fetchContent()
      .then(function(data) {
        var content;
        try {
          content = JSON.parse(decodeURIComponent(escape(atob(data.content))));
        } catch (e) {
          content = {};
        }
        content[field] = value;
        var encoded = btoa(unescape(encodeURIComponent(JSON.stringify(content, null, 2))));
        var body = { message: msg, content: encoded, sha: data.sha, branch: 'main' };
        return fetch('https://api.github.com/repos/quanvel-oficial/quanvel-oficial/contents/content.json', {
          method: 'PUT',
          headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
      })
      .then(function(r) {
        if (!r || !r.ok) throw new Error('publicar');
        showToast(okMsg || 'Publicado');
      })
      .catch(function() {
        showToast('Guardado localmente');
      });
  }

  function saveBlockOrder() {
    var order = collectOrder();
    localStorage.setItem(BLOCK_ORDER_KEY, JSON.stringify(order));
    publishField('block-order', order, 'Actualizar orden de bloques', 'Orden guardado y publicado');
  }

  function saveBlockPos() {
    var pos = collectPos();
    localStorage.setItem(BLOCK_POS_KEY, JSON.stringify(pos));
    publishField('block-pos', pos, 'Actualizar posicion de bloques', 'Posicion guardada y publicada');
  }

  document.addEventListener('mousedown', function(e) {
    if (!editMode || e.button !== 0) return;
    if (e.target.closest('#edit-blocks-btn') || e.target.closest('.floating-edit')) return;
    var el = e.target.closest('[data-block]');
    if (!el) return;
    e.preventDefault();
    draggedEl = el;
    startX = e.clientX;
    startY = e.clientY;
    var rect = el.getBoundingClientRect();
    grabDX = e.clientX - rect.left;
    grabDY = e.clientY - rect.top;
    var base = parseTransform(el);
    baseX = base.x;
    baseY = base.y;
    dragging = false;
  });

  document.addEventListener('mousemove', function(e) {
    if (!draggedEl) return;
    if (!dragging) {
      if (Math.abs(e.clientX - startX) < 6 && Math.abs(e.clientY - startY) < 6) return;
      dragging = true;
      ghost = draggedEl.cloneNode(true);
      ghost.classList.add('block-ghost');
      var rect = draggedEl.getBoundingClientRect();
      ghost.style.width = rect.width + 'px';
      ghost.style.height = rect.height + 'px';
      document.body.appendChild(ghost);
      draggedEl.classList.add('dragging');
      draggedEl.classList.add('moved');
    }
    var newLeft = e.clientX - grabDX;
    var newTop = e.clientY - grabDY;
    ghost.style.left = newLeft + 'px';
    ghost.style.top = newTop + 'px';
  });

  document.addEventListener('mouseup', function(e) {
    if (!draggedEl) return;
    if (dragging && ghost) {
      var newLeft = e.clientX - grabDX;
      var newTop = e.clientY - grabDY;
      var rect = draggedEl.getBoundingClientRect();
      var dx = baseX + (newLeft - rect.left);
      var dy = baseY + (newTop - rect.top);
      draggedEl.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
      ghost.parentNode.removeChild(ghost);
      ghost = null;
      draggedEl.classList.remove('dragging');
      saveBlockPos();
    }
    draggedEl = null;
    dragging = false;
  });

  document.addEventListener('dblclick', function(e) {
    if (!editMode) return;
    var el = e.target.closest('[data-block]');
    if (!el) return;
    el.style.transform = '';
    el.classList.remove('moved');
    saveBlockPos();
    showToast('Posicion restablecida');
  });

  if (btn) {
    btn.addEventListener('click', function() {
      setEditMode(!editMode);
    });
  }

  var params = new URLSearchParams(window.location.search);
  if (params.get('edit') === '1' || params.get('edit') === 'true') {
    setEditMode(true);
  } else if (hint) {
    hint.style.display = 'none';
  }
})();
