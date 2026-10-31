/*
  Phone readability check. Works out how big the text in every exported PNG really is on
  a phone screen, in points, and saves what the phone shows so it can be checked by eye.

    node tools/render.mjs          first, so tools/render-report.json is current
    node tools/phone-check.mjs     writes verification/phone-check.txt and verification/phone/*.jpg

  How it is measured. A phone shows a picture at the full width of the screen. The reference
  phone is 390 x 844 pt (the iPhone 12 to 16 size; most Android phones are 360 to 412 dp).
    4:5 and 1:1 (1080 px wide), phone upright: 390 pt wide, so 1 pt = 2.77 px.
    16:9 (1920 px wide), phone sideways, full screen: the picture fills the 390 pt height,
    so it is 693 pt wide and 1 pt = 2.77 px. Upright it is only 390 pt wide (1 pt = 4.92 px),
    which is reported too, but 16:9 is the desktop and website format.
  Text size in pt = font size in px x shown width in pt / picture width in px.
  Pass marks: smallest text 11 pt (Apple's smallest recommended text size) and body text
  11.5 pt, for 4:5 and 1:1 upright and for 16:9 sideways.
  Exit code 1 if any picture misses a pass mark.
*/
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const rep = JSON.parse(await readFile(join(root, 'tools', 'render-report.json'), 'utf8'));

const PHONE = { w: 390, h: 844 };
const MIN_PT = 11, BODY_PT = 11.5;
const view = f => {
  const portrait = f.height > f.width;
  if (f.width === 1920) {
    const sideW = PHONE.w * f.width / f.height; // fills the 390 pt height when the phone is sideways
    return { format: '16:9', checkedAs: 'sideways', shownPt: sideW, upright: PHONE.w };
  }
  return { format: portrait ? '4:5' : '1:1', checkedAs: 'upright', shownPt: PHONE.w };
};
const pt = (px, f, shown) => +(px * shown / f.width).toFixed(1);

const rows = [];
let fails = 0;
for (const f of rep.files) {
  const v = view(f);
  const minPt = pt(f.minFontPx, f, v.shownPt), bodyPt = pt(f.bodyFontPx, f, v.shownPt);
  const ok = minPt >= MIN_PT && bodyPt >= BODY_PT;
  if (!ok) fails++;
  rows.push({ file: f.file.split('/').pop(), ...v, minPx: f.minFontPx, bodyPx: f.bodyFontPx, minPt, bodyPt,
    uprightMinPt: v.upright ? pt(f.minFontPx, f, v.upright) : null, uprightBodyPt: v.upright ? pt(f.bodyFontPx, f, v.upright) : null, ok });
}

// what the phone screen shows: one sheet per format, each picture at its phone size in pt, rendered at 2x
await mkdir(join(root, 'verification', 'phone'), { recursive: true });
const browser = await chromium.launch();
for (const [key, label] of [['portrait', '4:5 on a 390 x 844 pt phone, upright'], ['square', '1:1 on a 390 x 844 pt phone, upright'], ['landscape', '16:9 on a 390 x 844 pt phone, sideways and full screen']]) {
  const list = rows.filter(r => r.file.includes('-' + key + '-'));
  const side = key === 'landscape';
  const sw = side ? PHONE.h : PHONE.w, sh = side ? PHONE.w : PHONE.h;
  const cols = side ? 3 : 4;
  const cells = [];
  for (const r of list) {
    const src = 'data:image/png;base64,' + (await readFile(join(root, 'downloads', key, r.file))).toString('base64');
    cells.push(`<figure><div class="screen" style="width:${sw}px;height:${sh}px"><img src="${src}"></div>
    <figcaption>${r.file.slice(0, 2)} &middot; smallest ${r.minPt} pt &middot; body ${r.bodyPt} pt</figcaption></figure>`);
  }
  const html = `<!doctype html><meta charset="utf-8"><style>
    body { margin: 0; padding: 24px; background: #fff; font: 16px system-ui, sans-serif; color: #142530; }
    h1 { font-size: 20px; margin: 0 0 16px; }
    .grid { display: grid; grid-template-columns: repeat(${cols}, max-content); gap: 22px; }
    figure { margin: 0; }
    .screen { background: #000; border-radius: 28px; display: grid; place-items: center; overflow: hidden; outline: 10px solid #111; outline-offset: 0; }
    .screen img { ${side ? 'height: 100%; width: auto;' : 'width: 100%; height: auto;'} display: block; }
    figcaption { margin-top: 18px; font-size: 15px; }
  </style><h1>Phone preview: ${label}. Shown at real phone size in pt, saved at 2x like a phone screen.</h1><div class="grid">${cells.join('')}</div>`;
  const page = await browser.newPage({ viewport: { width: 48 + cols * (sw + 22), height: 800 }, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: 'load' });
  await page.screenshot({ path: join(root, 'verification', 'phone', `phone-${key}.jpg`), type: 'jpeg', quality: 80, fullPage: true });
  await page.close();
}
await browser.close();

const pad = (s, n) => String(s).padEnd(n);
let out = `Phone readability check, ${new Date().toISOString().slice(0, 10)}\n`;
out += `Reference phone ${PHONE.w} x ${PHONE.h} pt. Pass marks: smallest text ${MIN_PT} pt, body text ${BODY_PT} pt.\n`;
out += `4:5 and 1:1 checked upright (shown 390 pt wide). 16:9 checked sideways, full screen (shown 693 pt wide); its upright size is listed for reference.\n\n`;
out += pad('file', 56) + pad('format', 8) + pad('smallest', 18) + pad('body', 18) + 'result\n';
for (const r of rows) {
  out += pad(r.file, 56) + pad(r.format, 8) + pad(`${r.minPx} px = ${r.minPt} pt`, 18) + pad(`${r.bodyPx} px = ${r.bodyPt} pt`, 18) +
    (r.ok ? 'pass' : 'FAIL') + (r.uprightMinPt ? `   (upright: ${r.uprightMinPt} pt / ${r.uprightBodyPt} pt)` : '') + '\n';
}
out += `\n${rows.length - fails} of ${rows.length} pictures pass. Screens saved in verification/phone/.\n`;
await writeFile(join(root, 'verification', 'phone-check.txt'), out);
console.log(out);
process.exit(fails ? 1 : 0);
