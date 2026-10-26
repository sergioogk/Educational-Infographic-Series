// Smoke test for the showcase site: console errors, broken links, horizontal scroll, screenshots.
//   node tools/site-check.mjs [outDir]
import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = process.argv[2] || join(root, 'tools', 'shots');
await import('node:fs').then(fs => fs.mkdirSync(out, { recursive: true }));
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.png': 'image/png', '.zip': 'application/zip' };
const misses = new Set();
const server = createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  try { const f = join(root, p); res.writeHead(200, { 'content-type': types[extname(f)] || 'application/octet-stream' }); res.end(await readFile(f)); }
  catch { misses.add(p); res.writeHead(404); res.end(); }
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}/`;
const b = await chromium.launch();
const pages = ['index.html', 'view.html?id=01', 'view.html?id=05&f=portrait', 'view.html?id=10&f=square', 'sources.html'];
let fail = 0;
for (const [label, vp] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 375, height: 812 }]]) {
  for (const path of pages) {
    const p = await b.newPage({ viewport: vp, deviceScaleFactor: 1 });
    const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto(base + path, { waitUntil: 'networkidle' });
    await p.waitForTimeout(2600);
    const sx = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')).filter(h => !/^(https?:|#|mailto:)/.test(h)));
    for (const l of new Set(links)) {
      const clean = l.split('?')[0].split('#')[0] || 'index.html';
      try { await stat(join(root, clean === './' ? 'index.html' : clean)); } catch { errs.push('broken link ' + l); }
    }
    const name = `${label}-${path.replace(/[?=&.]/g, '_')}.png`;
    await p.screenshot({ path: join(out, name), fullPage: path === 'index.html' || path === 'sources.html' });
    const ok = !errs.length && sx <= 0;
    if (!ok) fail++;
    console.log(`${ok ? 'ok  ' : 'FAIL'} ${label.padEnd(7)} ${path.padEnd(28)} hscroll ${sx}px ${errs.join(' | ')}`);
    await p.close();
  }
}
await b.close(); server.close();
if (misses.size) console.log('404s:', [...misses].join(', '));
console.log(fail ? `${fail} page checks failed` : 'all page checks passed');
