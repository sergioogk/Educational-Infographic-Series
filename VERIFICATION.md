# Verification

The checks below were run on 31 Oct 2026, and the logs are in `verification/`. Each check can be re-run with the commands in `README.md`.

## Summary

| Check | Result | Log |
|---|---|---|
| Every quote in `SOURCES.md` appears in the source page it cites (pages saved again on 31 Oct 2026) | 117 of 117 found | `verification/quote-check.txt` |
| Brief failure criteria, voice rules and phone readability (21 automated checks) | 21 of 21 pass | `verification/verify.txt` |
| Text size on a phone, in pt, for all 33 pictures | 33 of 33 pass | `verification/phone-check.txt`, screens in `verification/phone/` |
| Layout: no text overflows its area, font loaded, in all 33 renders | 33 of 33 clean | `verification/render-report.json` |
| Website: no script errors, no broken links, no sideways scroll at 1440 px and 375 px | 10 of 10 page loads pass | `verification/site-check.txt` |

## 1. Facts

**Method.** `tools/snapshot.mjs` opens every source page in Chromium and saves its text, so pages that build their content with JavaScript (the TASK-23 changelog and the DAO voting platform) are read as a visitor sees them, tab by tab. The whitepaper PDF linked from redbelly.network/whitepaper is converted to text. This was done on 26 Oct 2026 and again on 31 Oct 2026 for this revision.

The copy was written only from those pages. Each claim on the artwork was then matched to a supporting sentence, and those sentences are quoted in `SOURCES.md`. `tools/check_quotes.py` confirms each quote appears in the saved page text. It ignores case, spacing, curly quotes and words the PDF splits across a line break. Anyone can repeat the check by hand: search the quote on the linked page.

**Changes on 31 Oct 2026.** Two quotes no longer matched their pages word for word: the Selective Disclosure page now describes signing with `blsSign`, and the "Signature voting on Redbelly" line sits on the voting platform's Proposals page. Both quotes were replaced with the current wording and the Proposals page was added as a source. The proposal list (41 proposals, none open, newest 25 days old) has no vote that changes what infographic 10 lists as in force.

**Precise wording on 02 and 09.** The review asked for narrower claims on tokenisation benefits and node accountability. Both were rewritten from the exact source sentences.

| Topic | Before | Now, and why |
|---|---|---|
| 02 Settlement | "Takes days (T+2)" versus "Seconds, in one transaction" | "Usually T+2 in Australia" versus "Compliant transfers settle in seconds". The source gives T+2 for Australia only, and the seconds figure is for compliant transfers on Redbelly. |
| 02 Trading hours | "Trading hours: any time, 24/7" | "Transfers: can be transferred at any time". The source talks about transfers and registry hours, not about markets trading all day. |
| 02 Access | "Smaller fractional units" | "Can be split into smaller units", plus "Investor eligibility rules still apply", so it does not read as open to everyone. |
| 02 Compliance | "Checked on every transfer" | "Breaking a rule blocks the transfer", matching "rejected at the protocol layer before it can be submitted". |
| 02 Scope | none | "Per Tokeniser, for Australian funds and companies on Redbelly", and the answer adds that the asset and its legal rights stay the same. |
| 09 Answer | "Every participant is known and cheating nodes can be caught with proof" | "Every network participant is identity-verified. Nodes that try to make honest nodes disagree leave signed evidence." The whitepaper's mechanism is about nodes that try to cause disagreement, not any kind of cheating. |
| 09 Nodes | "A node tries to cheat", "Proven faulty nodes are removed" | "Faulty nodes try to cause disagreement", "Their signed traces become proof of fraud", "Enough proof removes them from consensus" (the exclusion protocol acts once enough proofs are gathered). |
| 09 Majority | "This works even if a majority of nodes collude" | "Designed to tolerate attackers that control more than half the system", the whitepaper's own wording, stated as a design goal. |
| 09 People | "Every transaction traces to someone responsible" | "Transactions can be tied to a responsible party", matching "can be tied back to a responsible entity". |
| 09 Privacy | "Zero knowledge proofs keep personal data private" | "Zero knowledge proofs can prove a fact without revealing the data". |

**Judgement calls where the sources differ.** In each case the narrower wording was used.

| Topic | What the sources say | What the artwork says |
|---|---|---|
| 11 Project Acacia | The Redbelly Acacia page calls it the first time a public blockchain hosts a CBDC. TASK-07 says the precise claim is that Redbelly was the only public platform among the 3 that received the RBA's pilot wholesale CBDC, since Ethereum and the XRP Ledger were also used in the project. | "3 networks got the RBA's pilot wholesale CBDC. Redbelly was the only public one." |
| 10 Governance | The voting platform header says "One person, one vote". The platform's own signalling proposal says it is not yet strict one person one vote, because one verified identity can hold around ten wallets. Voting power is set per proposal (RBNT balance, token balance or verified identity). | "Only wallets with a Receptor credential", "Method, power and quorum set per proposal", and "a minimum number of different verified voters". It never claims one person, one vote. |
| 10 Governance | The TASK-23 changelog describes Snapshot rules: token weighting, quorum of zero, the whitelist. Voting has since moved to the voting platform. | Snapshot rules are not used. The changelog is used only for decisions in force: the treasury pause, the High Council seats and the five pods. The proposal list on the platform was checked for later votes that change these. There were none (the later votes were policies on withdrawal and resubmission, a treasury multisig amendment, test votes and the website choice). |
| 01 and 03 Throughput | The whitepaper says DBFT "has demonstrated over 97,500 transactions per second in production environments". TASK-07 notes this is a benchmark figure, not everyday network load. | "97,500 transactions a second shown", with no claim about live load. |
| 11 Project Acacia | Tokeniser's page says 24 firms. TASK-07 says 24 use cases were selected from about 50 proposals and 20 were completed. | The 24 figure is not used. The artwork uses the TASK-07 numbers: 20 completed, 5 on Redbelly. |
| 07 Tokeniser | The figures are published by Tokeniser itself. | They are labelled "Figures published by Tokeniser, 31 Oct 2026". |

**Kept out on purpose:** token price, supply, allocations, staking and yields, fee examples in dollars, market size forecasts, validator counts, and names of people. See `SOURCES.md`, "What was deliberately left out".

## 2. Brief failure criteria

| Failure criterion | How it is prevented | Automated check |
|---|---|---|
| Any factual error | Claim by claim source table and the quote check above | Quote check, 117 of 117 |
| Governance from Constitution v1.2, Snapshot or outdated rules | Voting rules from the voting platform, decisions in force from TASK-23 | "Governance copy has no Snapshot or Constitution v1.2 rules" and "cites the voting platform and TASK-23" |
| Price talk, advice, promised returns | None in the copy. The site footer states the series is not financial advice. | "No price talk, advice or returns in artwork copy" |
| Unlicensed images, icons or fonts | Readex Pro (OFL, licence included), official logo files unmodified, all icons and diagrams drawn from scratch, no photos | "Only Readex Pro (OFL) is embedded", "Logo files are the official brand kit SVGs", "Font licence file included" |
| Any infographic or format missing | 33 PNGs at exact sizes | "33 PNGs present at the required sizes" |
| Personal credit inside the deliverable | No names, handles, signatures, watermarks or "made by" lines in the artwork, the site or the docs | "No personal credit, names or handles in artwork or site" |

## 3. Quality benchmarks

| Benchmark | Evidence |
|---|---|
| A newcomer understands each topic from the infographic alone | Each one opens with a one-line answer, has one diagram, and uses no unexplained jargon. Terms like DBFT, wholesale CBDC and identity quorum are explained on the artwork itself. The copy was cut back in this revision, so there is less to read. |
| All 11 clearly belong to one series | They share a frame: red edge bar, "Redbelly Explained NN / 11" label, title with one red keyword, answer line, source and date footer, and logo. Type, colour, icon style and grid are the same throughout. |
| Text readable on a phone without zooming | Section 4 below |
| Every fact matches the supplied resources | Section 1 above |

## 4. Phone readability

The first submission had 20 to 25 px source lines and 24 to 28 px body text on the phone formats, about 7 to 10 pt on a phone. This revision sets a floor and measures it.

**Standard.** Every line of text is at least 11 pt as the reader sees it, which is Apple's smallest recommended text size, and body text is at least 11.5 pt. The reference phone is 390 x 844 pt. A phone shows a picture at full screen width, so:

- 4:5 and 1:1 (1080 px wide), phone upright: 390 pt wide, 1 pt = 2.77 px, so 11 pt needs 30.5 px.
- 16:9 (1920 px wide), phone sideways and full screen: the picture fills the 390 pt height and is 693 pt wide, 1 pt = 2.77 px again.

**Result.** The smallest text in all 33 pictures is 31 px (11.2 pt): the series label, the source line and the date. Body text is 33 px (11.9 pt) on 4:5, 32 to 34 px (11.6 to 12.3 pt) on 1:1 and 33 to 36 px (12 to 13 pt) on 16:9 sideways. The low-contrast mid grey was also taken off all text; small text now uses `#DCDCDC` on the dark navy.

**How it was checked.**

1. `tools/render.mjs` reads the computed font size of every text element in every render, and records the smallest size and the size most of the words are set in (body).
2. `tools/phone-check.mjs` converts those sizes to pt for the phone, fails anything under the pass marks, and draws each picture inside a 390 x 844 pt phone screen at 2x (`verification/phone/phone-portrait.jpg`, `phone-square.jpg`, `phone-landscape.jpg`). Open those files at 100 % to see the pictures at the size a phone shows them.
3. `tools/verify.mjs` repeats the pt check as two of its 21 checks, so a later edit that shrinks text fails the check.
4. Every render was also checked for text spilling out of its area (33 of 33 clean).

**What changed to make room.** The copy was shortened, the source line now names the sources in short form (full links in `SOURCES.md`), and the phone layouts were rebuilt: a label, before and after table on 02; a 2 x 2 grid on 06 and 10; two columns on 09; a vertical timeline on 11; one row per key point on 4:5. The 1:1 versions leave out the key points and three side notes so the rest can stay large; 4:5 and 16:9 keep them. 16:9 on an upright phone is only 390 pt wide (body about 7 pt), so the posting guide in `README.md` sends phone posts to 4:5 and 1:1.

## 5. Brand and voice

- Colours are limited to the Redbelly palette, with red `#FF5050` as the only accent. Fonts are limited to Readex Pro.
- Logos are the official SVGs, unmodified, on dark backgrounds with clear space, and never animated.
- Task Board voice: no em or en dashes and no emoji (checked across the artwork copy, site pages and Markdown), plain words, the number stated, and the answer first.
- Task Board social rules: PNG rather than JPEG, a dated "Last verified" line on every image, editable sources supplied.

## 6. Website

- It is static HTML, CSS and JS with no build step, no external CDN and no tracking.
- Checked at 1440 x 900 and 375 x 812: no console errors, no broken internal links, no sideways scroll.
- Reduced motion turns off every animation.
- Each infographic has alt text, there is a skip link, the format switch uses tabs with `aria-selected`, focus outlines are visible, and the arrow keys move between topics.
