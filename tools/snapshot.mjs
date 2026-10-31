/*
  Save a plain text copy of every source page, so tools/check_quotes.py can confirm
  each quote in SOURCES.md still appears on the page it cites.

    node tools/snapshot.mjs [outDir]       default: verification/snapshots (not committed)
    python3 tools/check_quotes.py verification/snapshots

  Every URL in RB.sources is opened in Chromium, so pages that build their content with
  JavaScript (the TASK-23 changelog, the DAO voting platform) are read as a visitor sees
  them. Tabs on a page are clicked one by one and each tab's text is added. The whitepaper
  PDF is converted with pdftotext (poppler-utils) when it is installed.
*/
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(process.argv[2] || join(root, 'verification', 'snapshots'));
await mkdir(out, { recursive: true });

const RB = {};
new Function('window', 'RB', (await readFile(join(root, 'assets/js/content.js'), 'utf8')).replace('window.RB = window.RB || {};', ''))({}, RB);
const pages = Object.entries(RB.sources).map(([key, s]) => ({ key, url: s.url }));
const pdf = 'https://redbelly.network/redbelly-network-whitepaper.pdf';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
let failed = 0;
for (const { key, url } of pages) {
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(1500);
    const parts = [await page.evaluate(() => document.body.innerText)];
    const tabs = await page.locator('[role="tab"]').count();
    for (let i = 0; i < tabs; i++) {
      try {
        await page.locator('[role="tab"]').nth(i).click({ timeout: 3000 });
        await page.waitForTimeout(600);
        parts.push(await page.evaluate(() => document.body.innerText));
      } catch {}
    }
    await writeFile(join(out, key + '.txt'), url + '\n\n' + parts.join('\n\n'));
    console.log(`ok    ${key.padEnd(11)} ${url}${tabs ? `  (${tabs} tabs)` : ''}`);
  } catch (e) {
    failed++;
    console.log(`FAIL  ${key.padEnd(11)} ${url}  ${e.message.split('\n')[0]}`);
  }
  await page.close();
}

// whitepaper PDF
try {
  const res = await ctx.request.get(pdf, { timeout: 60000 });
  const file = join(out, 'whitepaper.pdf');
  await writeFile(file, await res.body());
  execFileSync('pdftotext', [file, join(out, 'whitepaper_pdf.txt')]);
  console.log(`ok    whitepaper PDF ${pdf}`);
} catch (e) {
  failed++;
  console.log(`FAIL  whitepaper PDF ${pdf}  ${e.message.split('\n')[0]} (is pdftotext installed?)`);
}
await browser.close();
console.log(failed ? `\n${failed} pages could not be saved.` : `\nAll ${pages.length + 1} sources saved to ${out}`);
process.exit(failed ? 1 : 0);
