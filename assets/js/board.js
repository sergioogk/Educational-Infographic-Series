/*
  Redbelly Explained: artboard renderer.
  RB.renderBoard(item, format) returns the HTML for one infographic in one format.
  Formats: 'landscape' (1920x1080), 'portrait' (1080x1350), 'square' (1080x1080).
*/
window.RB = window.RB || {};

RB.formats = {
  landscape: { w: 1920, h: 1080, label: 'Landscape 16:9', size: '1920 x 1080' },
  portrait:  { w: 1080, h: 1350, label: 'Portrait 4:5',  size: '1080 x 1350' },
  square:    { w: 1080, h: 1080, label: 'Square 1:1',    size: '1080 x 1080' }
};

RB.esc = function (s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
};
RB.hl = function (s) {
  return RB.esc(s).replace(/\[(.+?)\]/g, '<em>$1</em>');
};
RB.plain = function (s) { return String(s).replace(/\[|\]/g, ''); };

/* stagger helper: class "a" fades up when the board is animated */
RB.a = function (i, extra) { return ' class="a ' + (extra || '') + '" style="--i:' + i + '"'; };

RB.hx = function (icon, solid) {
  var fill = solid ? '#FF5050' : 'rgba(20,37,48,0.9)';
  var stroke = solid ? '#FF5050' : 'rgba(255,80,80,0.85)';
  return '<span class="hx' + (solid ? ' solid' : '') + '"><svg class="hxs" viewBox="0 0 100 110" aria-hidden="true">' +
    '<path d="M50 4 95 30v50L50 106 5 80V30Z" fill="' + fill + '" stroke="' + stroke + '" stroke-width="3" vector-effect="non-scaling-stroke"/></svg>' +
    RB.icon(icon) + '</span>';
};

RB.arrowSvg = function (dir) {
  var d = { r: 'M4 24h36M30 14l10 10-10 10', d: 'M24 4v36M14 30l10 10 10-10', l: 'M44 24H8M18 14 8 24l10 10' }[dir || 'r'];
  return '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="flow" d="' + d + '"/></svg>';
};

RB.glyph = function (ok) {
  var p = ok ? 'M5 12.5l4.5 4.5L19 7.5' : 'M7 7l10 10M17 7 7 17';
  return '<span class="' + (ok ? 'glyph-ok' : 'glyph-no') + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + p + '"/></svg></span>';
};

RB.renderBoard = function (item, format, opts) {
  opts = opts || {};
  var hasPts = item.points && item.points.length > 0;
  var layout = format === 'landscape' ? (hasPts ? 'split' : 'stack') : 'stack';
  var logo = (opts.base || '') + 'assets/brand/redbelly-horizontal-negative.svg';
  var h = '';
  h += '<div class="board ' + format + ' ' + layout + (hasPts ? '' : ' nopts') + ' d-' + item.diagram + '" data-id="' + item.id + '" role="img" aria-label="' + RB.esc(item.alt) + '">';
  h += '<div class="tex"></div><div class="bar"></div><div class="frame">';

  h += '<header class="head">';
  h += '<div' + RB.a(0, 'label') + '><span class="rule"></span><span>' + RB.esc(RB.series.name) + '</span><span class="sep"></span><span class="num">' + item.id + ' / ' + RB.series.total + '</span></div>';
  h += '<h1' + RB.a(1, 'title') + '>' + RB.hl(item.title) + '</h1>';
  h += '<p' + RB.a(2, 'answer') + '>' + RB.esc(item.answer) + '</p>';
  h += '</header>';

  h += '<section class="vis">' + RB.diagrams[item.diagram](item.data, format, item) + '</section>';

  if (hasPts) {
    h += '<section class="pts"><ul>';
    item.points.forEach(function (p, i) {
      h += '<li' + RB.a(10 + i, 'pt') + '>' + RB.hx(p.icon) + '<div><div class="lead">' + RB.esc(p.lead) + '</div><div class="txt">' + RB.esc(p.text) + '</div></div></li>';
    });
    h += '</ul></section>';
  }

  h += '<footer' + RB.a(14, 'foot') + '><div class="src"><b>Sources:</b> ' + RB.esc(item.footer) +
    (item.footerNoVerified ? '' : '<span class="ver">Last verified ' + RB.esc(RB.series.verified) + '</span>') +
    '</div><img class="logo" src="' + logo + '" alt="Redbelly"></footer>';

  h += '</div></div>';
  return h;
};

/* ---------------- diagrams ---------------- */
RB.diagrams = {};

/* 01: FAST properties around the network */
RB.diagrams.fast = function (d, f) {
  var t = d.tiles;
  function tile(x, i, pos) {
    return '<div' + RB.a(4 + i, 'panel tile ' + pos) + '><span class="k">' + x.k + '</span><div><div class="dh">' + RB.esc(x.name) + '</div><div class="cap">' + RB.esc(x.text) + '</div></div></div>';
  }
  var core = '<div' + RB.a(3, 'core pop') + '><svg class="corehex" viewBox="0 0 200 220" aria-hidden="true">' +
    '<defs><linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2d4351"/><stop offset="1" stop-color="#142530"/></linearGradient></defs>' +
    '<path class="ring" d="M100 6 190 58v104l-90 52-90-52V58Z" fill="none" stroke="rgba(255,80,80,0.35)" stroke-width="2" vector-effect="non-scaling-stroke" transform="translate(100 110) scale(1.0) translate(-100 -110)"/>' +
    '<path d="M100 22 176 66v88l-76 44-76-44V66Z" fill="url(#cg)" stroke="#FF5050" stroke-width="4" vector-effect="non-scaling-stroke"/></svg>' +
    '<div class="coretxt"><div class="dh">' + RB.esc(d.core) + '</div><div class="cap">' + RB.esc(d.coreSub) + '</div></div></div>';
  var cap = d.caption ? '<div' + RB.a(8, 'cap fastcap') + '>' + RB.esc(d.caption) + '</div>' : '';
  return '<div class="fast">' + core + tile(t[0], 0, 'p1') + tile(t[1], 1, 'p2') + tile(t[2], 2, 'p3') + tile(t[3], 3, 'p4') + '</div>' + cap;
};

/* 02: before and after */
RB.diagrams.compare = function (d, f) {
  var h = '<div class="cmp">';
  h += '<div' + RB.a(3, 'cmp-h') + '><span class="c-lab"></span><span class="c-bef">' + RB.esc(d.left) + '</span><span class="c-arr"></span><span class="c-aft">' + RB.esc(d.right) + '</span></div>';
  d.rows.forEach(function (r, i) {
    h += '<div' + RB.a(4 + i, 'cmp-r') + '>' +
      '<div class="c-lab">' + RB.icon(r.icon) + '<span>' + RB.esc(r.label) + '</span></div>' +
      '<div class="c-bef">' + RB.esc(r.before) + '</div>' +
      '<div class="c-arr arrow">' + RB.arrowSvg('r') + '</div>' +
      '<div class="c-aft">' + RB.esc(r.after) + '</div></div>';
  });
  return h + '</div>';
};

/* 03: compete vs combine */
RB.diagrams.dbft = function (d, f) {
  var xs = [52, 148, 252, 348];
  var compete = '<svg class="ill" viewBox="0 0 400 300" aria-hidden="true">';
  compete += '<g class="chain">' + [0, 1, 2].map(function (i) { return '<rect x="' + (128 + i * 52) + '" y="14" width="40" height="30" rx="5" fill="none" stroke="#ECEBEC" stroke-opacity=".7" stroke-width="2.5"/>'; }).join('') +
    '<path d="M168 29h12M220 29h12" stroke="#ECEBEC" stroke-opacity=".7" stroke-width="2.5"/></g>';
  xs.forEach(function (x, i) {
    var win = i === 1;
    compete += '<rect class="' + (win ? 'win' : 'lose') + '" x="' + (x - 26) + '" y="128" width="52" height="40" rx="6" fill="' + (win ? '#FF5050' : 'none') + '" stroke="' + (win ? '#FF5050' : '#848B91') + '" stroke-width="2.5" stroke-dasharray="' + (win ? '0' : '5 5') + '"/>';
    if (!win) compete += '<path class="x" d="M' + (x - 9) + ' 139l18 18M' + (x + 9) + ' 139l-18 18" stroke="#FF5050" stroke-width="3" stroke-linecap="round"/>';
    compete += '<line x1="' + x + '" y1="174" x2="' + x + '" y2="222" stroke="#848B91" stroke-width="2.5"/>';
    compete += '<circle class="node" cx="' + x + '" cy="248" r="24" fill="#142530" stroke="#ECEBEC" stroke-width="2.5"/>';
  });
  compete += '<path class="flowline" d="M148 122 V 98 Q148 72 170 60 L 180 50" fill="none" stroke="#FF5050" stroke-width="3" stroke-linecap="round"/>';
  compete += '</svg>';

  var combine = '<svg class="ill" viewBox="0 0 400 300" aria-hidden="true">';
  combine += '<g class="chain">' + [0, 1, 2].map(function (i) { return '<rect x="' + (128 + i * 52) + '" y="14" width="40" height="30" rx="5" fill="none" stroke="#ECEBEC" stroke-opacity=".7" stroke-width="2.5"/>'; }).join('') +
    '<path d="M168 29h12M220 29h12" stroke="#ECEBEC" stroke-opacity=".7" stroke-width="2.5"/></g>';
  combine += '<rect class="super" x="96" y="78" width="208" height="58" rx="8" fill="rgba(255,80,80,0.14)" stroke="#FF5050" stroke-width="3"/>';
  [0, 1, 2, 3].forEach(function (i) {
    combine += '<rect class="seg" style="--s:' + i + '" x="' + (106 + i * 48) + '" y="90" width="42" height="34" rx="4" fill="#FF5050" fill-opacity="' + (0.55 + i * 0.13) + '"/>';
  });
  combine += '<path d="M200 74 V 50" stroke="#FF5050" stroke-width="3" stroke-linecap="round"/>';
  xs.forEach(function (x, i) {
    var tx = 127 + i * 48;
    combine += '<path class="flowline" d="M' + x + ' 222 C ' + x + ' 182, ' + tx + ' 182, ' + tx + ' 142" fill="none" stroke="#FF5050" stroke-opacity=".85" stroke-width="2.5" stroke-linecap="round"/>';
    combine += '<circle class="node" cx="' + x + '" cy="248" r="24" fill="#142530" stroke="#ECEBEC" stroke-width="2.5"/>';
  });
  combine += '</svg>';

  return '<div class="dbft">' +
    '<div' + RB.a(3, 'panel side') + '>' + compete + '<div class="dh">' + RB.esc(d.leftTitle) + '</div><div class="cap">' + RB.esc(d.leftText) + '</div></div>' +
    '<div' + RB.a(4, 'panel hot side') + '>' + combine + '<div class="dh">' + RB.esc(d.rightTitle) + '</div><div class="cap">' + RB.esc(d.rightText) + '</div></div>' +
    '</div>';
};

/* 04: Receptor flow with two gates */
RB.diagrams.receptor = function (d, f) {
  var vert = f === 'portrait';
  var h = '<div class="rcp ' + (vert ? 'vert' : 'horiz') + '">';
  d.steps.forEach(function (s, i) {
    if (i > 0 && !vert) h += '<div' + RB.a(3 + i * 2 - 1, 'rcp-arr arrow') + '>' + RB.arrowSvg('r') + '</div>';
    h += '<div' + RB.a(3 + i * 2, 'rcp-s ' + s.kind) + '>' + RB.hx(s.icon, s.kind === 'gate') +
      '<div class="dh">' + RB.esc(s.name) + '</div><div class="cap">' + RB.esc(s.text) + '</div></div>';
  });
  h += '</div>';
  h += '<div' + RB.a(13, 'rcp-mod') + '><span class="kick">Modules</span>' + d.modules.map(function (m) { return '<span class="chip">' + RB.esc(m) + '</span>'; }).join('') +
    '<span class="std cap">' + RB.esc(d.standard) + '</span></div>';
  return h;
};

/* 05: issuer, holder, verifier */
RB.diagrams.vc = function (d, f) {
  function node(n, icon, cls, i) {
    return '<div' + RB.a(i, 'vc-n ' + cls) + '>' + RB.hx(icon, cls === 'holder') + '<div class="dh">' + RB.esc(n.name) + '</div><div class="cap">' + RB.esc(n.text) + '</div></div>';
  }
  var arr = function (i) { return '<div' + RB.a(i, 'vc-arr arrow') + '>' + RB.arrowSvg('r') + '</div>'; };
  var trust = '<div' + RB.a(3, 'vc-trust') + '><svg viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">' +
    '<path d="M16.5 19 V6 H83.5 V19" fill="none" stroke="#848B91" stroke-width="2.5" stroke-dasharray="7 7" vector-effect="non-scaling-stroke"/></svg>' +
    '<span>' + RB.esc(d.arrows[2]) + '</span></div>';
  var card = '<div' + RB.a(9, 'vc-card pop') + '><div class="kick">' + RB.esc(d.card.type) + '</div>' +
    d.card.rows.map(function (r) { return '<div class="vc-row"><span class="muted">' + RB.esc(r[0]) + '</span><span>' + RB.esc(r[1]) + '</span></div>'; }).join('') +
    '<div class="vc-sig">' + RB.icon('sign') + '<span>' + RB.esc(d.card.sig) + '</span></div></div>';
  return '<div class="vc">' + trust + '<div class="vc-flow">' +
    node(d.issuer, 'building', 'issuer', 4) + arr(5) + node(d.holder, 'wallet', 'holder', 6) + arr(7) + node(d.verifier, 'check', 'verifier', 8) +
    '</div>' + card + '</div>';
};

/* 06: zero knowledge flow */
RB.diagrams.zk = function (d, f) {
  var h = '<div class="zk">';
  d.steps.forEach(function (s, i) {
    if (i > 0) h += '<div' + RB.a(2 + i * 2, 'zk-arr arrow') + '>' + RB.arrowSvg(f === 'landscape' ? 'r' : 'd') + '</div>';
    var extra = '';
    if (i === 1) extra = '<div class="redact"><span class="muted">Birth date</span><span class="bars"><i></i><i></i><i></i></span></div>';
    if (i === 3) extra = '<div class="truth">True</div>';
    h += '<div' + RB.a(3 + i * 2, 'zk-s panel' + (i === 3 ? ' hot' : '')) + '>' + RB.hx(s.icon, i === 3) +
      '<div class="zk-t"><div class="kick">' + (i + 1) + ' ' + RB.esc(s.name) + '</div><div class="cap">' + RB.esc(s.text) + '</div>' + extra + '</div></div>';
  });
  h += '</div><div class="zk-cmp">';
  d.compare.forEach(function (c, i) {
    h += '<div' + RB.a(11 + i, 'panel zk-c' + (i === 1 ? ' hot' : '')) + '>' + RB.icon(i === 0 ? 'eye' : 'lock') + '<div><div class="dh">' + RB.esc(c.name) + '</div><div class="cap">' + RB.esc(c.text) + '</div></div></div>';
  });
  return h + '</div>';
};

/* 07: Tokeniser lifecycle and published figures */
RB.diagrams.tokeniser = function (d, f) {
  var h = '<div class="tk">';
  d.steps.forEach(function (s, i) {
    h += '<div' + RB.a(3 + i, 'tk-s') + '><div class="tk-dot"><span>' + (i + 1) + '</span></div>' +
      '<div class="tk-t"><div class="dh">' + RB.esc(s.name) + '</div><div class="cap">' + RB.esc(s.text) + '</div></div></div>';
  });
  h += '</div><div class="tk-stats">';
  d.stats.forEach(function (s, i) {
    h += '<div' + RB.a(9 + i, 'panel tk-stat') + '><div class="big">' + RB.esc(s.v) + '</div><div class="cap">' + RB.esc(s.l) + '</div></div>';
  });
  h += '</div><div' + RB.a(12, 'cap tk-note muted') + '>' + RB.esc(d.statNote) + ', ' + RB.esc(RB.series.verified) + '</div>';
  return h;
};

/* 08: compliance rules travel with the asset */
RB.diagrams.compliance = function (d, f) {
  var card = '<div' + RB.a(3, 'panel hot cp-card') + '><div class="cp-head">' + RB.hx('token', true) + '<div class="dh">' + RB.esc(d.tokenName) + '</div></div>' +
    '<div class="kick">Rules built in</div><ul>' + d.rules.map(function (r) { return '<li>' + RB.icon('shield') + '<span>' + RB.esc(r) + '</span></li>'; }).join('') + '</ul></div>';
  function lane(x, ok, i) {
    return '<div' + RB.a(i, 'panel cp-lane ' + (ok ? 'ok' : 'no')) + '><div class="cp-to">' + RB.icon('swap') + '<span class="cap">' + RB.esc(x.to) + '</span></div>' +
      '<div class="cp-res">' + RB.glyph(ok) + '<span class="dh">' + RB.esc(x.result) + '</span></div></div>';
  }
  return '<div class="cp">' + card + '<div class="cp-lanes">' +
    '<div' + RB.a(4, 'kick cp-try') + '>Transfer attempts</div>' + lane(d.ok, true, 5) + lane(d.no, false, 6) + '</div></div>';
};

/* 09: accountable blockspace, people and nodes */
RB.diagrams.accountability = function (d, f) {
  var h = '<div class="ac">';
  d.rows.forEach(function (r, ri) {
    h += '<div class="ac-row">';
    h += '<div' + RB.a(3 + ri * 4, 'ac-lab') + '>' + RB.esc(r.label) + '</div>';
    r.steps.forEach(function (s, i) {
      if (i > 0) h += '<div' + RB.a(4 + ri * 4 + i, 'ac-arr arrow') + '>' + RB.arrowSvg('r') + '</div>';
      h += '<div' + RB.a(4 + ri * 4 + i, 'panel ac-s' + (i === 2 ? ' hot' : '')) + '>' + RB.icon(s.icon) + '<span class="cap">' + RB.esc(s.text) + '</span></div>';
    });
    h += '</div>';
  });
  h += '</div><div' + RB.a(12, 'ac-notes') + '><div class="cap"><b>' + RB.esc(d.note) + '</b></div><div class="cap ac-priv">' + RB.icon('lock') + '<span>' + RB.esc(d.privacy) + '</span></div></div>';
  return h;
};

/* 10: how the DAO decides today */
RB.diagrams.governance = function (d, f) {
  var h = '<div class="gv">';
  d.steps.forEach(function (s, i) {
    if (i > 0 && f === 'landscape') h += '<div' + RB.a(2 + i * 2, 'gv-arr arrow') + '>' + RB.arrowSvg('r') + '</div>';
    h += '<div' + RB.a(3 + i * 2, 'panel gv-s') + '><div class="gv-h">' + RB.hx(s.icon, i === 1) + '<div class="kick">' + (i + 1) + ' ' + RB.esc(s.name) + '</div></div><div class="cap">' + RB.esc(s.text) + '</div></div>';
  });
  h += '</div><div class="gv-low">';
  h += '<div' + RB.a(11, 'panel gv-q') + '><div class="dh">' + RB.esc(d.quorum.name) + '</div><div class="cap">' + RB.esc(d.quorum.text) + '</div></div>';
  h += '<div' + RB.a(12, 'panel hot gv-f') + '><div class="kick">' + RB.esc(d.inForce.title) + '</div><ul>' +
    d.inForce.items.map(function (x) { return '<li><span class="dot"></span><span class="cap">' + RB.esc(x) + '</span></li>'; }).join('') + '</ul></div>';
  return h + '</div>';
};

/* 11: Project Acacia timeline and results */
RB.diagrams.acacia = function (d, f) {
  var h = '<div class="aca-tl"><div class="aca-line"></div>';
  d.timeline.forEach(function (t, i) {
    h += '<div' + RB.a(3 + i, 'aca-m' + (i === 1 ? ' key' : '')) + '><span class="aca-dot"></span><div class="aca-when">' + RB.esc(t.when) + '</div><div class="cap">' + RB.esc(t.text) + '</div></div>';
  });
  h += '</div><div class="aca-stats">';
  d.stats.forEach(function (s, i) {
    h += '<div' + RB.a(8 + i, 'panel aca-st' + (i === 0 ? ' hot' : '')) + '><div class="big' + (s.v.length > 6 ? ' long' : '') + '">' + RB.esc(s.v) + '</div><div class="cap">' + RB.esc(s.l) + '</div></div>';
  });
  h += '</div><div' + RB.a(11, 'cap aca-gloss') + '>' + RB.esc(d.gloss) + '</div>';
  return h;
};
