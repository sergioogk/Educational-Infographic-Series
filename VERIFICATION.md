# Verification

The checks below were run on 26 Oct 2026, and the logs are in `verification/`. Each check can be re-run with the commands in `README.md`.

## Summary

| Check | Result | Log |
|---|---|---|
| Every quote in `SOURCES.md` appears in the source page it cites | 110 of 110 found | `verification/quote-check.txt` |
| Brief failure criteria and voice rules (20 automated checks) | 20 of 20 pass | `verification/verify.txt` |
| Layout: no text overflows its area, font loaded, in all 33 renders | 33 of 33 clean | `verification/render-report.json` |
| Website: no script errors, no broken links, no sideways scroll at 1440 px and 375 px | 10 of 10 page loads pass | `verification/site-check.txt` |

## 1. Facts

**Method.** Every page in the brief's resource list was downloaded on 26 Oct 2026. Pages that build their content with JavaScript (the TASK-23 changelog and the DAO voting platform) were opened in a real browser, and every tab and proposal used was captured. The whitepaper PDF linked from redbelly.network/whitepaper was read in full.

The copy was written only from those pages. Each claim on the artwork was then matched to a supporting sentence, and those sentences are quoted in `SOURCES.md`. `tools/check_quotes.py` confirms each quote appears in the saved page text. It ignores case, spacing, curly quotes and words the PDF splits across a line break. Anyone can repeat the check by hand: search the quote on the linked page.

**Judgement calls where the sources differ.** In each case the narrower wording was used.

| Topic | What the sources say | What the artwork says |
|---|---|---|
| 11 Project Acacia | The Redbelly Acacia page calls it the first time a public blockchain hosts a CBDC. TASK-07 says the precise claim is that Redbelly was the only public platform among the 3 that received the RBA's pilot wholesale CBDC, since Ethereum and the XRP Ledger were also used in the project. | "3 networks received the RBA's pilot wholesale CBDC. Redbelly was the only public one." |
| 10 Governance | The voting platform header says "One person, one vote". The platform's own signalling proposal says it is not yet strict one person one vote, because one verified identity can hold around ten wallets. Voting power is set per proposal (RBNT balance, token balance or verified identity). | "Only wallets with a Receptor credential", "Each proposal sets its method, power and quorum", and "a minimum number of different verified voters". It never claims one person, one vote. |
| 10 Governance | The TASK-23 changelog describes Snapshot rules: token weighting, quorum of zero, the whitelist. Voting has since moved to the voting platform. | Snapshot rules are not used. The changelog is used only for decisions in force: the treasury pause, the High Council seats and the five pods. The proposal list on the platform was checked for later votes that change these. There were none (the later votes were policies on withdrawal and resubmission, a treasury multisig amendment, test votes and the website choice). |
| 01 and 03 Throughput | The whitepaper says DBFT "has demonstrated over 97,500 transactions per second in production environments". TASK-07 notes this is a benchmark figure, not everyday network load. | "97,500 transactions a second shown", with no claim about live load. |
| 11 Project Acacia | Tokeniser's page says 24 firms. TASK-07 says 24 use cases were selected from about 50 proposals and 20 were completed. | The 24 figure is not used. The artwork uses the TASK-07 numbers: 20 completed, 5 on Redbelly. |
| 07 Tokeniser | The figures are published by Tokeniser itself. | They are labelled "Figures published by Tokeniser, 26 Oct 2026". |

**Kept out on purpose:** token price, supply, allocations, staking and yields, fee examples in dollars, market size forecasts, validator counts, and names of people. See `SOURCES.md`, "What was deliberately left out".

## 2. Brief failure criteria

| Failure criterion | How it is prevented | Automated check |
|---|---|---|
| Any factual error | Claim by claim source table and the quote check above | Quote check, 110 of 110 |
| Governance from Constitution v1.2, Snapshot or outdated rules | Voting rules from the voting platform, decisions in force from TASK-23 | "Governance copy has no Snapshot or Constitution v1.2 rules" and "cites the voting platform and TASK-23" |
| Price talk, advice, promised returns | None in the copy. The site footer states the series is not financial advice. | "No price talk, advice or returns in artwork copy" |
| Unlicensed images, icons or fonts | Readex Pro (OFL, licence included), official logo files unmodified, all icons and diagrams drawn from scratch, no photos | "Only Readex Pro (OFL) is embedded", "Logo files are the official brand kit SVGs", "Font licence file included" |
| Any infographic or format missing | 33 PNGs at exact sizes | "33 PNGs present at the required sizes" |
| Personal credit inside the deliverable | No names, handles, signatures, watermarks or "made by" lines in the artwork, the site or the docs | "No personal credit, names or handles in artwork or site" |

## 3. Quality benchmarks

| Benchmark | Evidence |
|---|---|
| A newcomer understands each topic from the infographic alone | Each one opens with a one-line answer, has one diagram and up to 3 short points, and uses no unexplained jargon. Terms like DBFT, wholesale CBDC and identity quorum are explained on the artwork itself. |
| All 11 clearly belong to one series | They share a frame: red edge bar, "Redbelly Explained NN / 11" label, title with one red keyword, answer line, source and date footer, and logo. Type, colour, icon style and grid are the same throughout. |
| Text readable on a phone without zooming | Minimum text is 25 px on 16:9, 21 px on 4:5 and 20 px on 1:1. Body text is 31 to 34 px, 26 to 28 px and 24 to 25 px. Each format was previewed at 390 pt phone width (see the README readability table). 4:5 and 1:1 are the phone-first versions. |
| Every fact matches the supplied resources | Section 1 above |

## 4. Brand and voice

- Colours are limited to the Redbelly palette, with red `#FF5050` as the only accent. Fonts are limited to Readex Pro.
- Logos are the official SVGs, unmodified, on dark backgrounds with clear space, and never animated.
- Task Board voice: no em or en dashes and no emoji (checked across the artwork copy, site pages and Markdown), plain words, the number stated, and the answer first.
- Task Board social rules: PNG rather than JPEG, a dated "Last verified" line on every image, editable sources supplied.

## 5. Website

- It is static HTML, CSS and JS with no build step, no external CDN and no tracking.
- Checked at 1440 x 900 and 375 x 812: no console errors, no broken internal links, no sideways scroll.
- Reduced motion turns off every animation.
- Each infographic has alt text, there is a skip link, the format switch uses tabs with `aria-selected`, focus outlines are visible, and the arrow keys move between topics.
