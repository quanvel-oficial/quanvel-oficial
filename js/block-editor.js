(function() {
  var BLOCK_ORDER_KEY = 'quanvely-block-order';
  var editMode = false;
  var btn = document.getElementById('edit-blocks-btn');
  var hint = document.createElement('div');
  hint.className = 'blocks-hint';
  hint.innerHTML = 'Arrastra cada bloque con el cursor para moverlo. Los cambios se publican automaticamente.';
  document.body.appendChild(hint);

  var dropLine = document.createElement('div');
  dropLine.className = 'block-drop-line';
  document.body.appendChild(dropLine);

  var ghost = null;
  var draggedEl = null;
  var startY = 0;
  var startX = 0;
  var offsetY = 0;
  var dragging = false;

  function showToast(msg) {
    var t = document.getElementById('blocks-toast');
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

  function publishOrder(order) {
    var token = localStorage.getItem('quanvely-github-token');
    if (!token) {
      showToast('Orden guardado. Falta el token para publicar (agregalo en el admin)');
      return;
    }
    fetch('https://api.github.com/repos/quanvel-oficial/quanvel-oficial/contents/content.json')
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var content;
        try {
          content = JSON.parse(decodeURIComponent(escape(atob(data.content))));
        } catch (e) {
          content = {};
        }
        content['block-order'] = order;
        var jsonContent = JSON.stringify(content, null, 2);
        var encoded = btoa(unescape(encodeURIComponent(jsonContent)));
        var body = {
          message: 'Actualizar orden de bloques',
          content: encoded,
          sha: data.sha,
          branch: 'main'
        };
        return fetch('https://api.github.com/repos/quanvel-oficial/quanvel-oficial/contents/content.json', {
          method: 'PUT',
          headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
      })
      .then(function(r) {
        if (!r || !r.ok) throw new Error('publicar');
        localStorage.setItem(BLOCK_ORDER_KEY, JSON.stringify(order));
        showToast('Orden guardado y publicado');
      })
      .catch(function() {
        localStorage.setItem(BLOCK_ORDER_KEY, JSON.stringify(order));
        showToast('Orden guardado localmente');
      });
  }

  function saveBlockOrder() {
    var order = collectOrder();
    localStorage.setItem(BLOCK_ORDER_KEY, JSON.stringify(order));
    publishOrder(order);
  }

  function getInsertionPoint(container, clientY) {
    var children = Array.prototype.slice.call(container.querySelectorAll(':scope > [data-block]')).filter(function(c) { return c !== draggedEl; });
    var before = null;
    children.forEach(function(child) {
      var r = child.getBoundingClientRect();
      if (clientY < r.top + r.height / 2 && !before) before = child;
    });
    return before;
  }

  function updateDropLine(container, clientY) {
    var before = getInsertionPoint(container, clientY);
    var children = Array.prototype.slice.call(container.querySelectorAll(':scope > [data-block]')).filter(function(c) { return c !== draggedEl; });
    if (before) {
      dropLine.classList.add('show');
      dropLine.style.top = (before.getBoundingClientRect().top - 4) + 'px';
    } else if (children.length) {
      dropLine.classList.add('show');
      dropLine.style.top = (children[children.length - 1].getBoundingClientRect().bottom + 4) + 'px';
    } else {
      dropLine.classList.remove('show');
    }
  }

  document.addEventListener('mousedown', function(e) {
    if (!editMode || e.button !== 0) return;
    if (e.target.closest('#edit-blocks-btn')) return;
    var el = e.target.closest('[data-block]');
    if (!el) return;
    draggedEl = el;
    startY = e.clientY;
    startX = e.clientX;
    dragging = false;
  });

  document.addEventListener('mousemove', function(e) {
    if (!draggedEl) return;
    if (!dragging) {
      if (Math.abs(e.clientY - startY) < 6 && Math.abs(e.clientX - startX) < 6) return;
      dragging = true;
      ghost = draggedEl.cloneNode(true);
      ghost.classList.add('block-ghost');
      var rect = draggedEl.getBoundingClientRect();
      offsetY = e.clientY - rect.top;
      ghost.style.width = rect.width + 'px';
      document.body.appendChild(ghost);
      draggedEl.classList.add('dragging');
    }
    ghost.style.left = (e.clientX - ghost.getBoundingClientRect().width / 2) + 'px';
    ghost.style.top = (e.clientY - offsetY) + 'px';
    var elUnder = document.elementFromPoint(e.clientX, e.clientY);
    var container = elUnder ? elUnder.closest('[data-block-container]') : null;
    if (container && container.contains(draggedEl)) {
      dropLine.classList.add('active');
      updateDropLine(container, e.clientY);
    } else {
      dropLine.classList.remove('show');
    }
  });

  document.addEventListener('mouseup', function(e) {
    if (!draggedEl) return;
    var elUnder = document.elementFromPoint(e.clientX, e.clientY);
    var container = elUnder ? elUnder.closest('[data-block-container]') : null;
    var moved = false;
    if (container && container.contains(draggedEl)) {
      var before = getInsertionPoint(container, e.clientY);
      if (before) container.insertBefore(draggedEl, before);
      else container.appendChild(draggedEl);
      moved = true;
    }
    if (ghost) {
      ghost.parentNode.removeChild(ghost);
      ghost = null;
    }
    draggedEl.classList.remove('dragging');
    dropLine.classList.remove('show');
    if (moved) saveBlockOrder();
    draggedEl = null;
    dragging = false;
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
