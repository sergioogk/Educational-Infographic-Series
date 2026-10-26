// Prints how far each layout area overflows (px) for every item/format. Dev helper.
import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, extname, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
const server = createServer(async (req, res) => { try { const f = join(root, decodeURIComponent(new URL(req.url, 'http://x').pathname)); res.writeHead(200, { 'content-type': types[extname(f)] || 'application/octet-stream' }); res.end(await readFile(f)); } catch { res.writeHead(404); res.end(); } });
await new Promise(r => server.listen(0, '127.0.0.1', r));
const port = server.address().port;
const b = await chromium.launch();
const ids = process.argv.slice(2).length ? process.argv.slice(2) : ['01','02','03','04','05','06','07','08','09','10','11'];
for (const id of ids) for (const [f, w, h] of [['landscape',1920,1080],['portrait',1080,1350],['square',1080,1080]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto(`http://127.0.0.1:${port}/board.html?id=${id}&f=${f}`); await p.waitForSelector('body[data-ready="1"]');
  const r = await p.evaluate(() => {
    const o = {};
    for (const sel of ['.head', '.vis', '.pts', '.foot']) {
      const a = document.querySelector('.board ' + sel); if (!a) continue;
      const ar = a.getBoundingClientRect(); let max = ar.top, min = ar.bottom;
      a.querySelectorAll('*').forEach(e => { const r = e.getBoundingClientRect(); if (r.height) { max = Math.max(max, r.bottom); min = Math.min(min, r.top); } });
      o[sel] = { h: Math.round(ar.height), over: Math.round(max - ar.bottom), free: Math.round(ar.bottom - max) };
    }
    return o;
  });
  const v = r['.vis'];
  console.log(id, f.padEnd(9), 'vis h', v.h, v.over > 0 ? 'OVER ' + v.over : 'free ' + v.free);
  await p.close();
}
await b.close(); server.close();
