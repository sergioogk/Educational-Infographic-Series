# Redbelly Explained

Eleven plain-language infographics on Redbelly's core ideas, built as one series. Each topic comes in landscape 16:9, portrait 4:5 and square 1:1. The package includes an animated showcase site that deploys to Vercel as-is.

Live site: https://redbelly-visual-academy.vercel.app

Every fact comes from the resources in the brief. `SOURCES.md` lists them claim by claim, and `VERIFICATION.md` shows the checks that were run.

## Deliverables

| # | Required deliverable | Where it is |
|---|---|---|
| 1 | 11 infographics, each in 16:9 (1920 x 1080), 4:5 (1080 x 1350) and 1:1 (1080 x 1080), PNG | `downloads/landscape/`, `downloads/portrait/`, `downloads/square/` (33 files). All 33 are also zipped in `downloads/redbelly-explained-all-png.zip` |
| 2 | Editable source files | The whole project is the source. All copy lives in `assets/js/content.js`, layouts and diagrams in `assets/js/board.js`, design in `assets/css/`. There are also vector PDFs with live text in `source-files/vector-pdf/` (one per format, 11 pages each), which open in Illustrator, Affinity, Inkscape, or Figma via PDF import |
| 3 | Source list | `SOURCES.md`. The same list is on the site at `/sources` and on each infographic's page |

Also included: the showcase website (`index.html`, `view.html`, `sources.html`), the verification report (`VERIFICATION.md`) and licences (`LICENSES/`).

## The series

| # | Topic | One line answer on the artwork |
|---|---|---|
| 01 | What is Redbelly | A layer 1 blockchain built for tokenising real world assets, where every participant is verified. |
| 02 | Why tokenise real world assets | A token records ownership, with the rules written in. The asset and its legal rights stay the same. |
| 03 | DBFT consensus | There is no leader. Nodes build every block together. |
| 04 | Receptor | Redbelly's own identity and verifiable credential protocol. It checks who can use the network and each product. |
| 05 | Verifiable credentials | A digital proof about you, signed by a trusted issuer and kept in your own wallet. |
| 06 | ZK proofs | Prove something is true without revealing the data behind it. |
| 07 | Tokeniser | A Redbelly Network project that lets funds and companies issue and run tokenised assets, without a technology project. |
| 08 | Compliance aware assets | The rules travel with the asset. Every transfer is checked against them before it can settle. |
| 09 | Identity and accountability | Every network participant is identity-verified. Nodes that try to make honest nodes disagree leave signed evidence. |
| 10 | Governance | Only verified wallets can vote on the DAO voting platform. Every ballot is signed and public. |
| 11 | Project Acacia | The RBA's real money pilot. Redbelly was the only public network to receive the pilot wholesale CBDC. |

File names follow `NN-topic-format-WIDTHxHEIGHT.png`, for example `downloads/portrait/03-dbft-consensus-portrait-1080x1350.png`.

## Deploy to Vercel

The site is plain static HTML, CSS and JS. There is no build step and no dependencies to install.

**From a VPS with the Vercel CLI**

```bash
unzip redbelly-explained.zip
cd redbelly-explained
npx vercel@latest login        # once
npx vercel@latest --prod       # answer: framework "Other", no build command, output directory "."
```

**From GitHub**

1. Push the `redbelly-explained` folder to a repository (the folder contents at the repository root).
2. On vercel.com, choose Add New, then Project, and import the repository.
3. Set Framework Preset to **Other**. Leave Build Command and Output Directory empty. Deploy.

`vercel.json` turns on clean URLs (`/view?id=03`, `/sources`) and sets cache and security headers. `.vercelignore` keeps `tools/`, `source-files/`, `verification/` and the Markdown files out of the deployment. The font licence ships with the font (`assets/fonts/OFL.txt`).

After the first deploy, you can put the full domain into the `og:image` tags (`/og.png` becomes `https://your-domain/og.png`). Some link previewers need an absolute URL.

**Local preview:** run `python3 -m http.server 8080` in the folder and open `http://localhost:8080`.

## The site

- **Home:** a hero with infographic 01 building itself, then a gallery of all 11. Each card plays its entrance animation when it scrolls into view.
- **Viewer** (`/view?id=05`): the live, animated infographic, a 16:9 / 4:5 / 1:1 switch, replay, PNG downloads, alt text with a copy button, sources, and previous and next links (the arrow keys work too).
- **Sources** (`/sources`): the full source list for all 11.

## Motion

Neither brand kit defines motion, so the animation is quiet and follows the brand's restraint:

- elements fade and rise into place in reading order;
- connectors draw on, then a slow dash shows direction of flow;
- each infographic has one slow pulse on the element that carries the idea, such as the DBFT superblock, the rejected transfer in 08, or the key date in 11.

The Redbelly logo is never animated, scaled, recoloured or rotated. Everything is static for visitors who set reduced motion. The PNG exports are the static final frame.

## Design system

- **Brand:** the series explains Redbelly Network, so the artwork follows the Redbelly brand kit (redbelly.network/brand). It uses Readex Pro, red `#FF5050` as the only accent, grey `#283A46`, and the secondary palette `#142530`, `#848B91`, `#DCDCDC`, `#ECEBEC`, with the official horizontal logo (negative version on dark).
- **Signature elements:** taken from the brand guideline pages. These are the red edge bar, the small uppercase labels with a red rule, and a faint hexagon texture (plain hexagons, not the isotype).
- **Voice and social rules:** from the Task Board brand kit. No em or en dashes, no emoji, say the number, lead with the answer. Exports are PNG rather than JPEG for anything with text. Every image carries a dated "Last verified" line. Editable sources are always supplied.
- **Note for the DAO:** the Task Board kit asks that deliverables under the Redbelly Network name are checked with the core team. The logo files are used unmodified from the official kit, but the DAO may want that check before publishing.

## Readability on a phone

Every line of text, including the source line and the small labels, is at least 31 px. That is 11 pt or more on a phone, which is Apple's smallest recommended text size. Body text is 32 to 36 px.

`tools/phone-check.mjs` measures this on every export. A phone shows a picture at full screen width, and the reference phone is 390 x 844 pt (the iPhone 12 to 16 size). The script turns each picture's font sizes into the points a reader actually sees, and saves what the phone screen shows in `verification/phone/`.

| Format | How it is read | Smallest text | Body text |
|---|---|---|---|
| 4:5 portrait | phone upright, 390 pt wide | 31 px = 11.2 pt | 33 px = 11.9 pt |
| 1:1 square | phone upright, 390 pt wide | 31 px = 11.2 pt | 32 to 34 px = 11.6 to 12.3 pt |
| 16:9 landscape | phone sideways, full screen, 693 pt wide | 31 px = 11.2 pt | 33 to 36 px = 12 to 13 pt |

All 33 pass (`verification/phone-check.txt`). On an upright phone, 16:9 is only 390 pt wide (body about 7 pt), so use 4:5 or 1:1 for phone-first posts and 16:9 for the website, desktop and slides.

To keep the text this size, the copy was cut back and each format has its own layout:

- **4:5** keeps everything: the answer, the diagram and the three key points, set as one row each.
- **1:1** is the short cut. It keeps the answer, the diagram and the sources, and leaves out the three key points (01, 03, 04, 05, 08) and three side notes: the privacy line on 09, the identity quorum panel on 10 and the CBDC definition on 11. Those stay on 4:5 and 16:9.
- **16:9** keeps everything, laid out across the width.

The source line is short on the artwork (for example "Redbelly whitepaper, docs, website"). The full links are in `SOURCES.md` and on each viewer page.

## Posting guide

| Where | Format |
|---|---|
| X (feed, phone first) | 4:5 portrait |
| X (link card, desktop) | 16:9 landscape |
| Discord and Telegram pins | 1:1 square |
| DAO website and Start Here hub | 16:9 landscape, or link to the viewer page |

Each viewer page has ready-to-paste alt text. When a fact changes, edit `assets/js/content.js`, update `RB.series.verified`, and re-export.

## Edit and re-export

You need Node 18 or newer and Playwright with Chromium.

```bash
cd tools && npm install && npx playwright install chromium && cd ..
node tools/render.mjs        # writes 33 PNGs, vector PDFs, og.png and the all-PNG zip; flags any overflowing text
node tools/phone-check.mjs   # text size in pt on a phone for all 33, plus phone screen previews
node tools/verify.mjs        # sizes, phone readability, voice rules, price talk, personal credit, sources, licences
node tools/site-check.mjs    # opens every page at desktop and phone width: errors, broken links, sideways scroll
node tools/snapshot.mjs      # saves a text copy of every source page to verification/snapshots
python3 tools/check_quotes.py verification/snapshots   # every quote in SOURCES.md is still on its page
```

`node tools/render.mjs --only 07` re-renders one infographic. You can also open `board.html?id=07&f=portrait` in a browser to see one artboard at full size, and add `&anim=1` to watch it animate.

## Folder map

```
index.html, view.html, sources.html   showcase site
board.html                            one artboard at full size (used for export)
assets/js/content.js                  all copy, sources and alt text (edit here)
assets/js/board.js                    frame and the 11 diagram layouts
assets/js/icons.js                    original line icons
assets/js/site.js                     site behaviour
assets/css/board.css                  brand tokens, frame and type scale for the 3 formats
assets/css/diagrams.css               diagram styles
assets/css/motion.css                 animation, with reduced motion support
assets/css/site.css                   site styles
assets/fonts/                         Readex Pro and its OFL licence
assets/brand/                         official Redbelly logo SVGs, unmodified
downloads/                            33 PNGs and the all-PNG zip
source-files/vector-pdf/              editable vector PDFs, 11 pages per format
og.png                                1200 x 630 link preview image
tools/                                export and check scripts (not deployed)
SOURCES.md, VERIFICATION.md           source list and checks
verification/                         check logs and phone screen previews (not deployed)
LICENSES/                             font licence and asset notice
```
