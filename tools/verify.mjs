/*
  Checks the deliverables against the brief's failure criteria and the Task Board voice rules.
    node tools/verify.mjs
  Exit code 1 if any check fails.
*/
import { readFile, readdir, stat } from 'node:fs/promises';
import { join, resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const results = [];
const check = (name, ok, detail = '') => { results.push({ name, ok, detail }); };

// load content.js
const RB = {};
new Function('window', 'RB', (await readFile(join(root, 'assets/js/content.js'), 'utf8')).replace('window.RB = window.RB || {};', ''))({}, RB);

// every string that ends up inside an infographic
const strings = [];
const walk = (v, path) => {
  if (typeof v === 'string') strings.push({ path, s: v });
  else if (Array.isArray(v)) v.forEach((x, i) => walk(x, path + '[' + i + ']'));
  else if (v && typeof v === 'object') for (const k of Object.keys(v)) if (k !== 'refs') walk(v[k], path + '.' + k);
};
RB.items.forEach(it => walk(it, it.id));
walk(RB.series, 'series');

// 1. 11 topics, 3 formats each, exact pixel sizes
const sizes = { landscape: [1920, 1080], portrait: [1080, 1350], square: [1080, 1080] };
check('11 infographics defined', RB.items.length === 11, RB.items.length + ' items');
const pngSize = async f => { const b = await readFile(f); return [b.readUInt32BE(16), b.readUInt32BE(20)]; };
let pngs = 0, badSize = [];
for (const it of RB.items) for (const [f, [w, h]] of Object.entries(sizes)) {
  const file = join(root, 'downloads', f, `${it.id}-${it.slug}-${f}-${w}x${h}.png`);
  try { const [pw, ph] = await pngSize(file); pngs++; if (pw !== w || ph !== h) badSize.push(file + ` ${pw}x${ph}`); }
  catch { badSize.push('missing ' + file); }
}
check('33 PNGs present at the required sizes', pngs === 33 && !badSize.length, `${pngs} found` + (badSize.length ? '; ' + badSize.join(', ') : ''));

// 2. voice: no em or en dashes, no emoji, no filler verbs (artwork copy and all docs and pages)
const textFiles = ['index.html', 'view.html', 'sources.html', 'README.md', 'SOURCES.md', 'VERIFICATION.md', 'assets/js/site.js'];
const docs = [];
for (const f of textFiles) { try { docs.push({ path: f, s: await readFile(join(root, f), 'utf8') }); } catch {} }
const all = strings.concat(docs);
const dash = all.filter(x => /[–—]/.test(x.s)).map(x => x.path);
check('No em or en dashes anywhere', !dash.length, dash.join(', '));
const emoji = all.filter(x => /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F000}-\u{1F2FF}]/u.test(x.s)).map(x => x.path);
check('No emoji', !emoji.length, emoji.join(', '));
const filler = all.filter(x => /\b(elevate|seamless(ly)?|unleash|revolutioni[sz]e)\b/i.test(x.s)).map(x => x.path);
check('No filler verbs (elevate, seamless, unleash, revolutionize)', !filler.length, filler.join(', '));

// 3. no price talk, investment advice or promises of returns inside the artwork
const priceRe = /\b(price|prices|profit|profits|returns?|yield|apy|apr|roi|moon|pump|buy|sell|guarantee[ds]?|invest now|financial advice|token value|rbnt)\b/i;
const price = strings.filter(x => priceRe.test(x.s)).map(x => `${x.path}: "${x.s}"`);
check('No price talk, advice or returns in artwork copy', !price.length, price.join(' | '));

// 4. no personal credit: handles, signatures, watermarks, "made by" lines.
// Names to block are passed at run time so none are stored in the repo:
//   RB_BLOCK_NAMES="name one,name two" node tools/verify.mjs
const extra = (process.env.RB_BLOCK_NAMES || '').split(',').map(s => s.trim()).filter(Boolean).map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
const people = new RegExp('(@[a-z0-9_]{2,}|made by|designed by|created by|\\bby @' + (extra.length ? '|' + extra.join('|') : '') + ')', 'i');
const credit = strings.concat(docs.filter(d => d.path.endsWith('.html'))).filter(x => people.test(x.s)).map(x => x.path);
check('No personal credit, names or handles in artwork or site', !credit.length, credit.join(', '));

// 5. every infographic names its sources on the artwork and in SOURCES.md
const srcMd = docs.find(d => d.path === 'SOURCES.md')?.s || '';
const noFooter = RB.items.filter(it => !it.footer || it.footer.length < 8).map(it => it.id);
check('Every infographic prints its sources', !noFooter.length, noFooter.join(', '));
const noSection = RB.items.filter(it => !srcMd.includes('## ' + it.id + ' ')).map(it => it.id);
check('Every infographic has a section in SOURCES.md', !noSection.length, noSection.join(', '));
const badRef = RB.items.flatMap(it => it.refs.filter(r => !RB.sources[r.src]).map(r => it.id + ':' + r.src));
check('Every source reference resolves to a URL', !badRef.length, badRef.join(', '));
const allowedHosts = ['redbelly.network', 'docs.redbelly.network', 'tokeniser.com', 'khalyd.substack.com', 'redbelly.smartcodedbot.com', 'redbelly-governance.vercel.app'];
const offList = Object.values(RB.sources).filter(s => !allowedHosts.includes(new URL(s.url).host)).map(s => s.url);
check('All sources are supplied resources (or pages on them)', !offList.length, offList.join(', '));

// 6. governance uses the current process, not v1.2 or Snapshot rules
const gov = RB.items.find(it => it.slug === 'governance');
const govText = JSON.stringify({ t: gov.title, a: gov.answer, d: gov.data, f: gov.footer });
const outdated = /(snapshot|constitution|v1\.2|whitelist|token[- ]weighted only|no quorum)/i.test(govText);
check('Governance copy has no Snapshot or Constitution v1.2 rules', !outdated);
check('Governance cites the voting platform and the TASK-23 changelog', /voting platform/i.test(gov.footer) && /TASK-23/.test(gov.footer));

// 7. licensed assets only: fonts are local OFL Readex Pro, logos are the official files
const css = await readFile(join(root, 'assets/css/board.css'), 'utf8');
check('Only Readex Pro (OFL) is embedded', /ReadexPro-latin-var\.woff2/.test(css) && !/@import|fonts\.googleapis/.test(css));
const brand = await readdir(join(root, 'assets/brand'));
check('Logo files are the official brand kit SVGs', brand.filter(f => f.endsWith('.svg')).length === 4, brand.join(', '));
let ofl = false; try { ofl = (await readFile(join(root, 'LICENSES/ReadexPro-OFL.txt'), 'utf8')).includes('SIL OPEN FONT LICENSE'); } catch {}
check('Font licence file included', ofl);

// 8. editable sources and vector exports
const pdfs = await readdir(join(root, 'source-files/vector-pdf')).catch(() => []);
check('Vector PDFs for all 3 formats', pdfs.filter(f => f.endsWith('.pdf')).length === 3, pdfs.join(', '));

// 9. render report: no layout overflow, smallest text size per format
try {
  const rep = JSON.parse(await readFile(join(root, 'tools/render-report.json'), 'utf8'));
  const minBy = {}; rep.files.forEach(f => { const k = f.width + 'x' + f.height; minBy[k] = Math.min(minBy[k] ?? 999, f.minFontPx); });
  check('Last render had no overflowing text', rep.problems === 0, `${rep.files.length} files rendered`);
  check('Smallest text per format (px)', true, Object.entries(minBy).map(([k, v]) => `${k}: ${v}px`).join(', '));
  check('Font loaded in every render', rep.files.every(f => f.fontLoaded));
} catch { check('Render report present', false, 'run node tools/render.mjs first'); }

let fail = 0;
for (const r of results) { if (!r.ok) fail++; console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? '  (' + r.detail + ')' : ''}`); }
console.log(`\n${results.length - fail} of ${results.length} checks passed.`);
process.exit(fail ? 1 : 0);
