/*
  Original line icons drawn for this series (no third-party icon set).
  48 x 48 grid, 2.5 stroke, round joins. Colour comes from currentColor.
*/
window.RB = window.RB || {};

RB.iconPaths = {
  building: '<path d="M8 41h32M12 41V13l12-6 12 6v28"/><path d="M18 18h2M28 18h2M18 25h2M28 25h2M18 32h2M28 32h2"/><path d="M21 41v-6h6v6"/>',
  flask: '<path d="M19 7h10M21 7v12L10 37a3 3 0 0 0 2.6 4.5h22.8A3 3 0 0 0 38 37L27 19V7"/><path d="M15 30h18"/>',
  code: '<path d="M17 15 8 24l9 9M31 15l9 9-9 9M27 11l-6 26"/>',
  clock: '<circle cx="24" cy="24" r="16"/><path d="M24 15v9l6 4"/>',
  calendar: '<rect x="8" y="11" width="32" height="29" rx="3"/><path d="M8 19h32M16 7v8M32 7v8"/><path d="M15 26h4M22 26h4M29 26h4M15 33h4M22 33h4"/>',
  pie: '<path d="M24 8a16 16 0 1 0 16 16H24Z"/><path d="M29 6v13h13A13 13 0 0 0 29 6Z"/>',
  shield: '<path d="M24 6 9 12v11c0 9.5 6.4 16.4 15 19 8.6-2.6 15-9.5 15-19V12Z"/><path d="m17 24 5 5 9-10"/>',
  nodes: '<circle cx="24" cy="10" r="4"/><circle cx="10" cy="34" r="4"/><circle cx="38" cy="34" r="4"/><path d="M22 13.5 12 30.5M26 13.5l10 17M14 34h20"/>',
  lock: '<rect x="10" y="21" width="28" height="20" rx="3"/><path d="M16 21v-6a8 8 0 0 1 16 0v6M24 29v5"/>',
  check: '<circle cx="24" cy="24" r="16"/><path d="m16.5 24.5 5 5 10-11"/>',
  cross: '<circle cx="24" cy="24" r="16"/><path d="m18 18 12 12M30 18 18 30"/>',
  wallet: '<path d="M37 16V12a3 3 0 0 0-3-3H11a4 4 0 0 0 0 8h26a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3H11a4 4 0 0 1-4-4V13"/><path d="M40 25h-7a3 3 0 0 0 0 6h7"/>',
  filter: '<path d="M8 10h32L28 25v12l-8 4V25Z"/>',
  hex: '<path d="M24 5 40.5 14.5v19L24 43 7.5 33.5v-19Z"/><path d="M24 24 7.5 14.5M24 24l16.5-9.5M24 24v19"/>',
  token: '<circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="9"/><path d="M24 19v10M20.5 22l3.5-3 3.5 3"/>',
  badge: '<rect x="7" y="10" width="34" height="28" rx="3"/><circle cx="18" cy="22" r="4"/><path d="M11 32c1.2-3.3 3.8-5 7-5s5.8 1.7 7 5M29 19h7M29 25h7"/>',
  eye: '<path d="M5 24s7-12 19-12 19 12 19 12-7 12-19 12S5 24 5 24Z"/><circle cx="24" cy="24" r="5"/><path d="M9 39 39 9"/>',
  repeat: '<path d="M10 22v-3a6 6 0 0 1 6-6h22l-5-5M38 26v3a6 6 0 0 1-6 6H10l5 5"/>',
  key: '<circle cx="15" cy="30" r="8"/><path d="m21 24 17-17M32 13l5 5M27 18l4 4"/>',
  question: '<circle cx="24" cy="24" r="16"/><path d="M19 19a5 5 0 1 1 7.5 4.3c-1.6.9-2.5 2-2.5 3.7v1"/><path d="M24 33.5v.5"/>',
  contract: '<path d="M30 6H12a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V15Z"/><path d="M30 6v9h9M16 22h16M16 29h10"/><path d="m26 36 3 3 6-6"/>',
  settings: '<circle cx="24" cy="24" r="6"/><path d="M24 6v6M24 36v6M6 24h6M36 24h6M11.3 11.3l4.2 4.2M32.5 32.5l4.2 4.2M11.3 36.7l4.2-4.2M32.5 15.5l4.2-4.2"/>',
  swap: '<path d="M8 17h30l-7-7M40 31H10l7 7"/>',
  chart: '<path d="M8 8v32h32"/><path d="M15 32v-8M23 32V18M31 32v-12"/>',
  list: '<path d="M19 12h21M19 24h21M19 36h21"/><path d="m7 12 3 3 5-6M7 24l3 3 5-6M7 36l3 3 5-6"/>',
  link: '<path d="M20 28 28 20"/><path d="M17 23l-4 4a7 7 0 0 0 10 10l4-4M31 25l4-4a7 7 0 0 0-10-10l-4 4"/>',
  users: '<circle cx="18" cy="17" r="6"/><path d="M7 39c0-6.6 4.9-11 11-11s11 4.4 11 11"/><circle cx="33" cy="15" r="5"/><path d="M32 26c5.4 0 9 3.8 9 9.5"/>',
  alert: '<path d="M24 7 4 41h40Z"/><path d="M24 19v10M24 34.5v.5"/>',
  sign: '<path d="M8 36c5-2 7-8 10-8s1 7 5 7 4-6 7-6 3 4 10 4"/><path d="M28 7l8 8-14 14h-8v-8Z"/>',
  remove: '<circle cx="18" cy="17" r="7"/><path d="M6 40c0-7 5.4-12 12-12 3 0 5.6.9 7.6 2.5"/><path d="m31 30 10 10M41 30 31 40"/>',
  doc: '<path d="M29 6H13a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V15Z"/><path d="M29 6v9h9M17 23h14M17 30h14M17 37h8"/>',
  scale: '<path d="M24 7v34M14 41h20M10 13h28"/><path d="M10 13 4 27a6 6 0 0 0 12 0Z"/><path d="M38 13l-6 14a6 6 0 0 0 12 0Z"/>',
  receipt: '<path d="M11 6h26v36l-4.3-3-4.4 3-4.3-3-4.3 3-4.4-3-4.3 3Z"/><path d="M17 15h14M17 22h14M17 29h8"/>',
  arrow: '<path d="M6 24h34M30 14l10 10-10 10"/>'
};

RB.icon = function (name, cls) {
  var p = RB.iconPaths[name] || RB.iconPaths.hex;
  return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
};
