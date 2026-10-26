/*
  Export every infographic as PNG in all three formats.

    node tools/render.mjs                  render all 33 PNGs into downloads/
    node tools/render.mjs --only 03        render one infographic
    node tools/render.mjs --check          also fail on overflowing text

  Needs Playwright with Chromium (npm i -D playwright && npx playwright install chromium).
  The script serves the project folder on a local port, opens board.html for each
  item and format, waits for the font, checks layout, then screenshots the artboard.
*/
import { createServer } from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { extname, join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;
const strict = args.includes('--check');

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.png': 'image/png' };
const server = createServer(async (req, res) => {
  try {
    const p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    const file = join(root, p === '/' ? 'index.html' : p);
    if (!file.startsWith(root)) throw new Error('outside root');
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404); res.end('not found');
  }
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const port = server.address().port;

// read the item list from content.js without a bundler
const ctx = { window: {} };
new Function('window', 'RB', (await readFile(join(root, 'assets/js/content.js'), 'utf8')).replace('window.RB = window.RB || {};', ''))(ctx.window, ctx.window.RB = {});
const items = ctx.window.RB.items;
const verified = ctx.window.RB.series.verified;

const formats = { landscape: [1920, 1080], portrait: [1080, 1350], square: [1080, 1080] };
const browser = await chromium.launch();
const report = [];
let problems = 0;

for (const item of items) {
  if (only && item.id !== only && item.slug !== only) continue;
  for (const [f, [w, h]] of Object.entries(formats)) {
    const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    await page.goto(`http://127.0.0.1:${port}/board.html?id=${item.id}&f=${f}`);
    await page.waitForSelector('body[data-ready="1"]');
    await page.evaluate(() => document.fonts.ready);
    const check = await page.evaluate(() => {
      const b = document.querySelector('.board').getBoundingClientRect();
      const out = [];
      const fontOk = document.fonts.check('500 40px "Readex Pro"');
      document.querySelectorAll('.board *').forEach(el => {
        if (el.closest('svg') && el.tagName !== 'svg') return;
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        if (r.right > b.right + 0.5 || r.bottom > b.bottom + 0.5 || r.left < b.left - 0.5 || r.top < b.top - 0.5) out.push('outside board: ' + el.className);
        if (el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).overflow !== 'visible') out.push('clipped x: ' + el.className);
      });
      // children spilling out of grid areas (text overflowing its own box)
      document.querySelectorAll('.board .head, .board .vis, .board .pts, .board .foot').forEach(area => {
        const ar = area.getBoundingClientRect();
        area.querySelectorAll('*').forEach(el => {
          if (el.closest('svg') && el.tagName !== 'svg') return;
          const r = el.getBoundingClientRect();
          if (r.width && (r.bottom > ar.bottom + 1 || r.right > ar.right + 1)) out.push('spills ' + area.className + ': ' + (el.className || el.tagName));
        });
      });
      // smallest rendered text size
      let min = 999;
      document.querySelectorAll('.board *').forEach(el => {
        if ([...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) {
          min = Math.min(min, parseFloat(getComputedStyle(el).fontSize));
        }
      });
      return { out: [...new Set(out)].slice(0, 12), fontOk, minFont: min };
    });
    const dir = join(root, 'downloads', f);
    await mkdir(dir, { recursive: true });
    const name = `${item.id}-${item.slug}-${f}-${w}x${h}.png`;
    await page.locator('.board').screenshot({ path: join(dir, name), type: 'png' });
    const bad = check.out.length > 0 || !check.fontOk;
    if (bad) problems++;
    report.push({ file: `downloads/${f}/${name}`, width: w, height: h, minFontPx: check.minFont, fontLoaded: check.fontOk, issues: check.out });
    console.log(`${bad ? 'WARN' : 'ok  '} ${name}  min text ${check.minFont}px${check.out.length ? '  ' + check.out.join(' | ') : ''}`);
    await page.close();
  }
}
// Open Graph card for link previews (Discord, X, Telegram)
if (!only) {
  const og = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await og.goto(`http://127.0.0.1:${port}/tools/og.html`);
  await og.waitForSelector('body[data-ready="1"]');
  await og.locator('.og').screenshot({ path: join(root, 'og.png'), type: 'png' });
  await og.close();
  console.log('ok   og.png');

  // Vector PDFs, one per format with 11 pages, for editing in Illustrator, Affinity, Inkscape or Figma
  await mkdir(join(root, 'source-files', 'vector-pdf'), { recursive: true });
  for (const [f, [w, h]] of Object.entries(formats)) {
    const pp = await browser.newPage({ viewport: { width: w, height: h } });
    await pp.goto(`http://127.0.0.1:${port}/tools/print.html?f=${f}`);
    await pp.waitForSelector('body[data-ready="1"]');
    await pp.pdf({ path: join(root, 'source-files', 'vector-pdf', `redbelly-explained-${f}-${w}x${h}.pdf`), width: `${w}px`, height: `${h}px`, printBackground: true, preferCSSPageSize: true });
    await pp.close();
    console.log(`ok   source-files/vector-pdf/redbelly-explained-${f}-${w}x${h}.pdf`);
  }
}
await browser.close();
server.close();

// One zip with all 33 PNGs for the "Download all" button
if (!only) {
  const { execFileSync } = await import('node:child_process');
  const zipPath = join(root, 'downloads', 'redbelly-explained-all-png.zip');
  try {
    await import('node:fs').then(fs => fs.rmSync(zipPath, { force: true }));
    execFileSync('zip', ['-q', '-X', '-r', zipPath, 'landscape', 'portrait', 'square'], { cwd: join(root, 'downloads') });
    console.log('ok   downloads/redbelly-explained-all-png.zip');
  } catch (e) {
    console.log('note: the zip command was not found, so the all-PNG zip was not rebuilt');
  }
}
await writeFile(join(root, 'tools', 'render-report.json'), JSON.stringify({ verified, generated: new Date().toISOString(), problems, files: report }, null, 2));
console.log(`\n${report.length} PNGs written. ${problems} with layout warnings.`);
if (strict && problems) process.exit(1);
