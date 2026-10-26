/* Redbelly Explained: showcase site behaviour. Needs content.js, icons.js and board.js. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var S = RB.site = {};

  S.byId = function (id) {
    return RB.items.filter(function (x) { return x.id === id || x.slug === id; })[0];
  };
  S.file = function (item, f) {
    var fm = RB.formats[f];
    return 'downloads/' + f + '/' + item.id + '-' + item.slug + '-' + f + '-' + fm.w + 'x' + fm.h + '.png';
  };
  S.cls = { landscape: 'l', portrait: 'p', square: 's' };

  /* Put a live artboard in a container and keep it scaled to the container width. */
  S.stage = function (host, item, f, opts) {
    opts = opts || {};
    host.innerHTML = '';
    var st = document.createElement('div');
    st.className = 'stage ' + S.cls[f];
    st.innerHTML = RB.renderBoard(item, f);
    host.appendChild(st);
    var board = st.firstChild;
    if (opts.animate && !reduce) board.classList.add('anim');
    var fit = function () { board.style.transform = 'scale(' + (st.clientWidth / RB.formats[f].w) + ')'; };
    fit();
    if (window.ResizeObserver) new ResizeObserver(fit).observe(st); else window.addEventListener('resize', fit);
    var api = {
      el: st, board: board,
      play: function () {
        if (reduce) return;
        board.classList.add('anim');
        board.classList.remove('play'); void board.offsetWidth; board.classList.add('play');
      }
    };
    return api;
  };

  /* Play once when scrolled into view. */
  S.playOnView = function (api) {
    if (reduce) return;
    if (!('IntersectionObserver' in window)) { api.play(); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { api.play(); io.disconnect(); } });
    }, { threshold: 0.35 });
    io.observe(api.el);
  };

  S.reveal = function (root) {
    var els = (root || document).querySelectorAll('.reveal');
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (e) { io.observe(e); });
  };

  S.toast = function (msg) {
    var t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('on');
    clearTimeout(S._tt); S._tt = setTimeout(function () { t.classList.remove('on'); }, 1800);
  };

  S.refsHtml = function (item) {
    return '<ul class="refs">' + item.refs.map(function (r) {
      var s = RB.sources[r.src];
      return '<li><a href="' + s.url + '" target="_blank" rel="noopener">' + RB.esc(s.title) + '</a><p>' + RB.esc(r.facts) + '</p></li>';
    }).join('') + '</ul>';
  };

  /* ---------- pages ---------- */
  S.home = function () {
    var hero = document.getElementById('hero-stage');
    if (hero) {
      var h = S.stage(hero, RB.items[0], 'landscape', { animate: true });
      setTimeout(h.play, 250);
      hero.addEventListener('click', function () { h.play(); });
    }
    var grid = document.getElementById('grid');
    if (grid) {
      RB.items.forEach(function (item, i) {
        var a = document.createElement('a');
        a.className = 'card reveal';
        a.href = 'view.html?id=' + item.id;
        a.style.transitionDelay = (i % 3) * 70 + 'ms';
        a.setAttribute('aria-label', item.id + ' ' + item.short + ': open, animate and download');
        a.innerHTML = '<div class="thumb"></div><div class="meta"><span class="num">' + item.id + '</span><span class="t">' + RB.esc(item.short) + '</span><span class="go">Open</span></div>';
        grid.appendChild(a);
        var api = S.stage(a.querySelector('.thumb'), item, 'landscape', { animate: true });
        api.board.setAttribute('aria-hidden', 'true');
        S.playOnView(api);
      });
      var all = document.createElement('a');
      all.className = 'card all reveal';
      all.href = 'downloads/redbelly-explained-all-png.zip';
      all.setAttribute('download', '');
      all.innerHTML = '<div><span class="eyebrow">Download</span><h3>All 11 topics, all 3 formats</h3><p>33 PNG files in one zip, ready to post, pin and link.</p></div>' +
        '<span class="btn primary">Download the zip</span>';
      grid.appendChild(all);
    }
    S.reveal();
  };

  S.viewer = function () {
    var q = new URLSearchParams(location.search);
    var item = S.byId(q.get('id') || '01') || RB.items[0];
    var f = RB.formats[q.get('f')] ? q.get('f') : 'landscape';
    var idx = RB.items.indexOf(item);
    document.title = RB.plain(item.title) + ' | Redbelly Explained';
    document.getElementById('crumb-title').textContent = item.id + ' / ' + RB.series.total + '  ' + item.short;
    var host = document.getElementById('vstage');
    var api;
    function show(fmt, animate) {
      f = fmt;
      api = S.stage(host, item, f, { animate: true });
      if (animate) requestAnimationFrame(api.play);
      document.querySelectorAll('.tabs button').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.f === f ? 'true' : 'false'); });
      var u = new URL(location.href); u.searchParams.set('id', item.id); u.searchParams.set('f', f); history.replaceState(null, '', u);
    }
    document.querySelectorAll('.tabs button').forEach(function (b) {
      b.addEventListener('click', function () { show(b.dataset.f, true); });
    });
    document.getElementById('replay').addEventListener('click', function () { api.play(); });
    show(f, true);

    document.getElementById('downloads').innerHTML = Object.keys(RB.formats).map(function (k) {
      var fm = RB.formats[k];
      return '<a href="' + S.file(item, k) + '" download><span>' + fm.label + '</span><span>' + fm.size + ' PNG</span></a>';
    }).join('');
    document.getElementById('alt').textContent = item.alt;
    document.getElementById('copy-alt').addEventListener('click', function () {
      (navigator.clipboard ? navigator.clipboard.writeText(item.alt) : Promise.reject()).then(function () { S.toast('Alt text copied'); }, function () { S.toast('Select the text to copy it'); });
    });
    document.getElementById('refs').innerHTML = S.refsHtml(item) +
      '<p class="alt" style="margin-top:14px">Last verified ' + RB.esc(RB.series.verified) + '. Full list on the <a href="sources.html">sources page</a>.</p>';

    var prev = RB.items[(idx + RB.items.length - 1) % RB.items.length];
    var next = RB.items[(idx + 1) % RB.items.length];
    document.getElementById('pager').innerHTML =
      '<a class="prev" href="view.html?id=' + prev.id + '&f=' + f + '"><small>Previous</small><b>' + prev.id + ' ' + RB.esc(prev.short) + '</b></a>' +
      '<a class="next" href="view.html?id=' + next.id + '&f=' + f + '"><small>Next</small><b>' + next.id + ' ' + RB.esc(next.short) + '</b></a>';
    document.querySelectorAll('#pager a').forEach(function (a) {
      a.addEventListener('click', function () { a.href = a.href.replace(/f=\w+/, 'f=' + f); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.target.closest && e.target.closest('input, textarea')) return;
      if (e.key === 'ArrowRight') location.href = 'view.html?id=' + next.id + '&f=' + f;
      if (e.key === 'ArrowLeft') location.href = 'view.html?id=' + prev.id + '&f=' + f;
    });
  };

  S.sources = function () {
    var host = document.getElementById('src-list');
    host.innerHTML = RB.items.map(function (item) {
      return '<article class="src-item reveal" id="s' + item.id + '"><h3><span>' + item.id + '</span>' + RB.esc(item.short) + '</h3>' + S.refsHtml(item) + '</article>';
    }).join('');
    S.reveal();
  };
})();
