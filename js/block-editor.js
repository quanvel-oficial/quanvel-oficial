(function() {
  var BLOCK_ORDER_KEY = 'quanvely-block-order';
  var editMode = false;
  var btn = document.getElementById('edit-blocks-btn');

  function showToast(msg) {
    var t = document.getElementById('blocks-toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(function() { t.classList.remove('show'); }, 2200);
  }

  function setEditMode(on) {
    editMode = on;
    document.body.classList.toggle('edit-mode', on);
    btn.classList.toggle('active', on);
    btn.innerHTML = on ? '&#10005;' : '&#9776;';
    document.querySelectorAll('[data-block]').forEach(function(el) {
      el.setAttribute('draggable', on ? 'true' : 'false');
    });
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

  document.addEventListener('dragstart', function(e) {
    if (!editMode) return;
    var el = e.target.closest('[data-block]');
    if (!el) return;
    el.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    try { e.dataTransfer.setData('text/plain', el.getAttribute('data-block')); } catch (err) {}
  });

  document.addEventListener('dragend', function(e) {
    var el = document.querySelector('.dragging');
    if (el) el.classList.remove('dragging');
  });

  document.addEventListener('dragover', function(e) {
    if (!editMode) return;
    var el = e.target.closest('[data-block]');
    if (el) e.preventDefault();
  });

  document.addEventListener('drop', function(e) {
    if (!editMode) return;
    e.preventDefault();
    var target = e.target.closest('[data-block]');
    var dragged = document.querySelector('.dragging');
    if (!target || !dragged) return;
    if (target.parentElement !== dragged.parentElement) return;
    var rect = target.getBoundingClientRect();
    var after = e.clientY > rect.top + rect.height / 2;
    if (after) target.after(dragged);
    else target.before(dragged);
    saveBlockOrder();
  });

  btn.addEventListener('click', function() {
    setEditMode(!editMode);
  });
})();
