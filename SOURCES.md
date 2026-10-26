# Redbelly Explained: source list

Every fact in the 11 infographics comes from the resources supplied in the brief. Each table below lists a claim as it appears in the artwork, the text that supports it (quoted exactly, so you can search for it on the page), and the page it comes from.

All pages were read on **26 Oct 2026**. That date is printed on every infographic as "Last verified". Every quote in this file was checked by `tools/check_quotes.py` against copies of the pages saved that day. See `VERIFICATION.md`.

## Resources used

| Resource | Used for |
|---|---|
| [Redbelly Network website](https://redbelly.network) | 01 |
| [Redbelly whitepaper](https://redbelly.network/whitepaper) (PDF dated 28 Aug 2025, linked from that page) | 01, 03, 05, 08, 09 |
| [Redbelly research hub](https://redbelly.network/research) and its [DBFT paper page](https://redbelly.network/research/dbft-ef-cient-leaderless-byzantine-consensus) | 03 |
| [Redbelly docs](https://docs.redbelly.network): [Receptor](https://docs.redbelly.network/pages/receptor/), [Issuer module](https://docs.redbelly.network/pages/modules/issuer/), [Eligibility Kit overview](https://docs.redbelly.network/pages/eligibility-sdk/overview/), [Configure Eligibility Criteria](https://docs.redbelly.network/pages/eligibility-sdk/configure-eligibility-criteria/), [Proof by Query](https://docs.redbelly.network/pages/methods/proof-by-query/), [Selective Disclosure](https://docs.redbelly.network/pages/methods/selective-disclosure/) | 01, 04, 05, 06 |
| [Selective disclosure and zero knowledge proofs](https://docs.redbelly.network/pages/eligibility-sdk/selective-disclosure-vs-zero-knowledge/) | 06 |
| [Tokeniser website](https://tokeniser.com): home, [technology](https://tokeniser.com/technology), [automated compliance](https://tokeniser.com/product/superpowers/automated-compliance), knowledge hub ([why tokenise](https://tokeniser.com/resources/knowledge-hub/business-case/why-tokenise-your-assets), [what it enables](https://tokeniser.com/resources/knowledge-hub/business-case/what-does-tokenising-your-assets-enable), [what is Tokeniser](https://tokeniser.com/resources/knowledge-hub/platform/what-is-tokeniser), [how it works](https://tokeniser.com/resources/knowledge-hub/platform/how-does-tokeniser-work), [investor compliance](https://tokeniser.com/resources/knowledge-hub/australia/how-tokeniser-handles-investor-compliance)) | 02, 07, 08, 11 |
| [Redbelly asset tokenisation](https://redbelly.network/asset-tokenisation) | 02, 05, 08 |
| [Redbelly Project Acacia page](https://redbelly.network/projectacacia) | 09, 11 |
| [TASK-07 Project Acacia deep dive](https://khalyd.substack.com/p/redbelly-network-and-the-rbas-project) (winning entry) | 11 |
| [TASK-23 DAO structural changes changelog](https://redbelly.smartcodedbot.com/changelog/) (winning entry, sourced to 1 Aug 2026) | 10 |
| [DAO voting platform](https://redbelly-governance.vercel.app/): overview, [New proposal](https://redbelly-governance.vercel.app/create), [Wallet safety](https://redbelly-governance.vercel.app/safety) | 10 |
| [Redbelly brand kit](https://redbelly.network/brand) and [Task Board brand kit](https://taskboard.redbellydao.network/brand) | Design and voice only, no facts |

## What was deliberately left out

- **Constitution v1.2, Snapshot settings and older governance rules.** The brief marks v1.2 as out of date. Infographic 10 uses the TASK-23 changelog for what is in force, and the voting platform for how voting works today. Where the changelog describes Snapshot voting (token weighting, no quorum, the whitelist), the voting platform takes priority, so none of it is used.
- **Token price, supply, allocations, staking yields and fees in dollars.** The whitepaper's tokenomics section and the fixed fee example are not used, to keep the series free of price talk.
- **Market size forecasts.** The trillion dollar estimates on the asset tokenisation page are not used.
- **Validator and node counts.** Sources give different figures for different things (nodes, governors, validators), so none are used.
- **The phrase "first public blockchain to host a CBDC".** TASK-07 shows the precise claim is narrower. Infographic 11 uses the precise version.

---

## 01 What is Redbelly

| Claim on the infographic | Supporting text | Source |
|---|---|---|
| A layer 1 blockchain built for tokenising real world assets | “The Redbelly Network is a layer 1 blockchain, built and optimised for real world asset tokenisation.” | [Docs home](https://docs.redbelly.network) |
| Every participant is verified | “Firstly, all network participants are known. We enforce mandatory identity verification for all network participants through our marketplace of accredited verifiable credential issuers.” | [Whitepaper](https://redbelly.network/whitepaper), section 3 |
| FAST: Finality, Accountability, Security, Throughput | “implements novel security and scaling features that deliver Finality, Accountability, Security, and Throughput (FAST)” | Whitepaper, section 4.1 |
| Final within seconds. No forks. | “transactions are confirmed as irreversible within seconds” and “It cannot fork” | Whitepaper, section 4.1.1 |
| Consensus proven correct | “has been mathematically proven to be correct through a process of formal verification through parameterised model checking” | Whitepaper, section 4.1.1 |
| 97,500 transactions a second shown | “DBFT has demonstrated over 97,500 transactions per second in production environments” | Whitepaper, section 4.1.1 |
| Issue, manage and distribute regulated financial assets as tokens | “Redbelly provides the infrastructure to issue, manage, and distribute regulated digital financial assets to a global investor base.” | [redbelly.network](https://redbelly.network) |
| Consensus developed with the University of Sydney and CSIRO | “democratic byzantine fault tolerant (DBFT) consensus developed with The University of Sydney and CSIRO’s Data61” | [Whitepaper page](https://redbelly.network/whitepaper) |
| A scalable EVM runs Solidity smart contracts | “a scalable EVM implementation” and “the largest pool of developers already proficient in the Solidity programming language” | Docs home; whitepaper, section 4.1.4 |

## 02 Why tokenise real world assets

| Claim on the infographic | Supporting text | Source |
|---|---|---|
| Tokenising records ownership as a digital token, with the asset's rules built in | “Tokenisation records ownership of financial products and services as digital tokens, and lets you program the rules of the asset.” | [tokeniser.com](https://tokeniser.com) FAQ |
| What you own stays the same. How it moves changes. | “Tokenisation does not change what you own. It changes how ownership is recorded, transferred, and administered.” | [Knowledge hub: Why tokenise](https://tokeniser.com/resources/knowledge-hub/business-case/why-tokenise-your-assets) |
| Settlement: takes days (T+2) versus seconds, in one transaction | “settlement that happens in seconds instead of T+2” and “The transfer of the token and the corresponding payment occur in the same transaction, simultaneously” | Knowledge hub: Why tokenise; [What it enables](https://tokeniser.com/resources/knowledge-hub/business-case/what-does-tokenising-your-assets-enable) |
| Trading hours: registry business hours versus 24/7 | “24/7 transferability removes the dependency on business-hours registry operations.” | Knowledge hub: What it enables |
| Access: large minimums versus smaller fractional units | “have traditionally required large minimum investments” and “any asset can be divided into smaller units, lowering the investment threshold and widening the investor base.” | Knowledge hub: What it enables |
| Compliance: manual checks versus checked on every transfer | “Transfer eligibility is verified manually when a transfer is requested.” and “KYC/AML, transfer restrictions, and investor eligibility are enforced automatically at every transaction.” | Knowledge hub: What it enables |

## 03 DBFT consensus

| Claim on the infographic | Supporting text | Source |
|---|---|---|
| Democratic Byzantine Fault Tolerance | “a new leaderless Byzantine consensus called the Democratic Byzantine Fault Tolerance (DBFT) for blockchains.” | [Research hub](https://redbelly.network/research) |
| No leader. Every node plays a similar role. | “each node plays a similar role in the execution of the consensus” | [DBFT paper page](https://redbelly.network/research/dbft-ef-cient-leaderless-byzantine-consensus) |
| No single point of failure | “As a leaderless consensus algorithm, it eliminates single points of failure” | Whitepaper, section 4.1.1 |
| Most blockchains compete. One block wins. The rest is wasted work. | “This is a waste of resources as only one participant succeeds and the rest fail.” | Whitepaper, section 4.1.1 |
| Redbelly nodes combine their transactions into one superblock | “solve consensus by combining distinct sets of transactions into a ‘superblock’ in a leaderless manner” | Whitepaper, section 4.1.1 |
| No forks. A confirmed transaction cannot be reversed. | “It cannot fork” and “transactions are confirmed as irreversible within seconds” | Whitepaper, section 4.1.1 |
| Formally verified | “formal verification through parameterised model checking” | Whitepaper, section 4.1.1 |
| Works while under a third of nodes are faulty | “for any number n of processes and any number f < n/3 of Byzantine processes.” | Research hub: Holistic Verification of Blockchain Consensus |

## 04 Receptor

| Claim on the infographic | Supporting text | Source |
|---|---|---|
| Receptor is Redbelly's own digital identity and verifiable credential protocol | “Receptor is Redbelly's native digital identity and verifiable credential protocol.” | [Receptor docs](https://docs.redbelly.network/pages/receptor/) |
| It checks who can use the network and who can access each product | “It facilitates network access, ensuring that all network participants are who they say they are, helps use case developers to surface the eligibility criteria for their real world asset tokenisation use case, and helps users to prove that they meet those criteria.” | Receptor docs |
| Network access needs an accredited issuer's credential | “Only accredited issuers can issue credentials that give users network access.” | [Issuer module](https://docs.redbelly.network/pages/modules/issuer/) |
| Product rules, such as wholesale investor | “AUSophisticatedWholesaleInvestorCredential” (a supported credential type) | [Configure Eligibility Criteria](https://docs.redbelly.network/pages/eligibility-sdk/configure-eligibility-criteria/) |
| Modules: Issuer, Holder, Verifier | “The framework is composed of three essential modules; the Issuer, the Holder, and the Verifier.” | Receptor docs |
| Built on the W3C standard | “Receptor is built on the W3C verifiable credential data model” | Receptor docs |
| Two ways to prove: on-chain with zero knowledge, or off-chain by sharing only some fields | “Use this method when you want to surface eligibility criteria and validate claims on-chain.” and “Use this method when you require users to reveal specified, verifiable information off-chain.” | Receptor docs (Proof by Query, Selective Disclosure) |

## 05 Verifiable credentials

| Claim on the infographic | Supporting text | Source |
|---|---|---|
| A trusted issuer signs it | “Use to define and issue verifiable credentials to users.” and “Sign the messages and construct the proof.” | Receptor docs; [Selective Disclosure](https://docs.redbelly.network/pages/methods/selective-disclosure/) |
| You keep it in your own wallet | “Use to create experiences for users to store, manage, and use credentials that are issued to them.” | Receptor docs (Holder) |
| Example: an AML/CTF credential with status passed | “AMLCTFCredential” and “AML status equals "passed"” | Configure Eligibility Criteria |
| Reusable identity and KYC credentials cut repeat onboarding | “Reusable client identity and KYC credentials streamline onboarding and reduce duplication” | [Asset tokenisation](https://redbelly.network/asset-tokenisation) |
| Your data stays with you, not in every company's database | “user data is kept at the edge and is not duplicated across each service provider which would create many honeypots of sensitive data.” | Whitepaper, section 4.2 |
| The verifier checks against the issuer's public key, so forgeries fail | “checks its mathematical validity against the trusted issuer's public key.” and “making them resistant to forgery and tampering” | [Eligibility Kit overview](https://docs.redbelly.network/pages/eligibility-sdk/overview/) |

## 06 Zero knowledge proofs

| Claim on the infographic | Supporting text | Source |
|---|---|---|
| Prove something is true without revealing the data behind it | “allow users to prove a statement is true without revealing any of the underlying data that makes it true.” | [Selective Disclosure vs Proof by Query](https://docs.redbelly.network/pages/eligibility-sdk/selective-disclosure-vs-zero-knowledge/) |
| The question: is this user over 18? | “The verifier asks a yes/no question using a query” | Same page |
| Your wallet builds a proof. Birth date stays hidden. | “The user's wallet generates a cryptographic proof that they satisfy the query, without revealing their address or any other personal information.” and “the proof of age can be made without disclosing their exact birth date” | Same page; [Proof by Query](https://docs.redbelly.network/pages/methods/proof-by-query/) |
| A smart contract checks the proof on Redbelly | “For on-chain verification method the proof is submitted to and verified by a smart contract on the Redbelly Network.” | Selective Disclosure vs Proof by Query |
| Just true or false. No personal data on-chain. | “The result is a simple "true" or "false," with no personal data ever being exposed on-chain.” | Same page |
| Selective Disclosure reveals only the fields asked for, off-chain | “is a method where a user reveal only specific fields from their credential to a verifier. This process is handled off-chain” | Same page |
| Proof by Query shares only the proof, no data at all | “No personal data is ever revealed to the verifier or recorded on-chain.” | Same page |

## 07 Tokeniser

| Claim on the infographic | Supporting text | Source |
|---|---|---|
| A Redbelly Network project | “Tokeniser is a Redbelly Network project” | [tokeniser.com](https://tokeniser.com) |
| Lets funds and companies issue and run tokenised assets on Redbelly | “It enables fund managers, company secretaries, and asset administrators to issue, manage, transfer, and report on tokenised assets” | [Knowledge hub: What is Tokeniser?](https://tokeniser.com/resources/knowledge-hub/platform/what-is-tokeniser) |
| Without a technology project | “Tokeniser gives you the benefits of tokenisation without the technology project.” | tokeniser.com FAQ |
| Set up: define the asset and its rules | “Define asset class, compliance rules, corporate action schedule, and fund-specific restrictions.” | [Knowledge hub: How does Tokeniser work?](https://tokeniser.com/resources/knowledge-hub/platform/how-does-tokeniser-work) |
| Onboard: investors verify identity and status | “Investors complete identity verification and investor classification under the Corporations Act.” | Same page |
| Issue: tokens go to verified wallets | “Tokens are minted on Redbelly Network and transferred to verified investor wallets.” | Same page |
| Transfer: checked, then settled in seconds | “Every transfer is checked against configured compliance parameters before submission.” and “Compliant transfers settle atomically on Redbelly Network in seconds.” | Same page |
| Pay and report: payouts and records automated | “The platform executes the action programmatically across all eligible token holders.” and “No manual compilation or reconciliation is required.” | Same page |
| A$2B+ transactions, 160+ companies and funds, A$1.2B issued (figures published by Tokeniser) | “A$1.2B issued equity & funds 160+ companies and funds A$2B+ transactions” | tokeniser.com |

## 08 Compliance aware assets

| Claim on the infographic | Supporting text | Source |
|---|---|---|
| The rules travel with the asset | “This transforms the complexity of compliance assurance into an inherent property of the assets themselves.” | Whitepaper, section 3 |
| Issuers write eligibility rules into the asset itself | “the asset issuer has been able to program the eligibility criteria into the definition of the asset, only parties that can prove their eligibility will be able to hold the token” | Whitepaper, section 2 |
| Every transfer is checked before it can settle | “defined investor eligibility, enforced at the point of trade.” | [Asset tokenisation](https://redbelly.network/asset-tokenisation) |
| Rules: identity verified (KYC, AML), eligible investor type, transfer limits like lock-ups, foreign ownership caps | “Foreign ownership limits, lock-up periods, and wholesale investor thresholds are all configurable compliance parameters.” and “Compliance rules, KYC/AML status, investor eligibility criteria, transfer restrictions” | [Knowledge hub: investor compliance](https://tokeniser.com/resources/knowledge-hub/australia/how-tokeniser-handles-investor-compliance) |
| Unverified wallet: rejected before it settles | “Non-compliant transfers, to unverified wallets, ineligible investors, or in breach of transfer restrictions, are rejected at the protocol layer before submission.” | Same page |
| Transfers that break a rule fail. Every check is logged. | “Trades that fail a check do not proceed, and every check is logged.” | [Tokeniser: Automated compliance](https://tokeniser.com/product/superpowers/automated-compliance) |
| Apps using the asset on Redbelly inherit its rules | “they automatically inherit the compliance properties of the underlying assets.” | Whitepaper, section 3 |

## 09 Identity and accountability

| Claim on the infographic | Supporting text | Source |
|---|---|---|
| Accountable blockspace | “The foundational concept of our system is accountable blockspace.” | Whitepaper, section 3 |
| People, businesses and AI agents are verified by accredited issuers | “through our marketplace of accredited verifiable credential issuers.” and “from individuals, to businesses, to AI agents” | Whitepaper, section 3 |
| Every transaction traces to someone responsible | “all transactions can be tied back to a responsible entity.” | Whitepaper, section 3 |
| A cheating node's signed messages become proof of fraud | “they leave cryptographically signed traces that honest nodes can combine to build undeniable proofs of fraud” | Whitepaper, section 4.1.2 |
| Proven faulty nodes are removed | “an exclusion protocol to remove the identified faulty nodes from the consensus committee” | Whitepaper, section 4.1.2 |
| This works even if a majority of nodes collude | “is able to detect and punish malicious nodes using undeniable proofs of fraud even in the case of a colluding majority” | Whitepaper, section 3 |
| Identities are verified. Zero knowledge proofs keep personal data private. | “Participants verify their identities, but their privacy remains protected through zero-knowledge proofs.” | [Project Acacia page](https://redbelly.network/projectacacia) |

## 10 Governance

How voting works is taken from the voting platform (checked 26 Oct 2026). What is in force is taken from the TASK-23 changelog (sourced to 1 Aug 2026), and the platform's proposal list was checked for any later vote that changes those items. None was found.

| Claim on the infographic | Supporting text | Source |
|---|---|---|
| Redbelly Community DAO members vote on the DAO voting platform | “Signature voting on Redbelly. No gas, no subscription.” | [Voting platform](https://redbelly-governance.vercel.app/) (Proposals) |
| Only verified wallets can vote | “Only wallets holding a Receptor credential can vote, as Redbelly requires one for network access.” and “Every address here clears Redbelly’s passport-backed identity check.” | [New proposal page](https://redbelly-governance.vercel.app/create); platform header |
| Propose: signed, no gas, locked once voting opens | “Publishing signs a message. It costs no gas, and a proposal cannot be edited once it is open” | New proposal page |
| Vote: only wallets with a Receptor credential | “Verified wallets only” and “Only wallets holding a Receptor credential can vote” | New proposal page |
| Count: each proposal sets its method, power and quorum | Fields on the form: “Voting system”, “Voting power”, “Voting period (days)”, “Quorum (0 for none)”, “Identity quorum (0 for none)”. Methods offered include single choice, approval, weighted, quadratic, ranked choice, Copeland and one verified address one vote. | New proposal page |
| Identity quorum: a minimum number of different verified voters; one large holder cannot meet it alone | “Distinct verified voters who must take part, however much weight they carry. A power quorum can be met by one large holder alone; this cannot.” | New proposal page |
| Record: signed ballots, receipts on IPFS, anyone can check | “Your signature is stored with your ballot, so anyone can re-verify that your vote was really yours without trusting this server.” and “Receipts on IPFS” | [Wallet safety page](https://redbelly-governance.vercel.app/safety); platform overview |
| In force: new treasury-funded work is paused until a future vote | “New treasury-funded initiatives are suspended until a future governance vote resumes them.” | [TASK-23 changelog](https://redbelly.smartcodedbot.com/changelog/) |
| In force: High Council, 3 seats, elected July 2026 | “Elected 3 High Council seats.” (High Council Elections, closed 2026-07-24) | TASK-23 changelog |
| In force: 5 pods, Marketing, Builder/Develop, Researcher, Community, Partnerships | “Five pods: Marketing, Builder/Develop, Researcher, Community and Partnerships.” | TASK-23 changelog |

## 11 Project Acacia

| Claim on the infographic | Supporting text | Source |
|---|---|---|
| The RBA's real money pilot of tokenised assets and digital money | “a real-money pilot examining how tokenised money and assets could improve Australia’s wholesale financial markets” | [TASK-07 deep dive](https://khalyd.substack.com/p/redbelly-network-and-the-rbas-project) |
| Live pilots with real money and assets on Redbelly | “transacting using real tokenized assets and AUD on Redbelly Network.” | [Project Acacia page](https://redbelly.network/projectacacia) |
| 2024: Phase 1 maps settlement models | “Phase 1, completed in 2024, was conceptual: it mapped the space of possible settlement models for tokenised assets and digital money” | TASK-07 |
| Jul 2025: Phase 2 starts, Redbelly selected | “In July 2025 the Reserve Bank of Australia (RBA) and the Digital Finance Cooperative Research Centre (DFCRC) selected Redbelly Network” | TASK-07 |
| Jul 2025 to Feb 2026: live pilots | “ran from July 2025 (when participants were announced) through February 2026” | TASK-07 |
| May 2026: RBA publishes its Final Report | “the RBA’s May 2026 Final Report” | TASK-07 |
| 3 networks received the RBA's pilot wholesale CBDC. Redbelly was the only public one. | “Of the three platforms onto which the RBA actually issued its pilot wholesale central bank digital currency (wCBDC), Redbelly was the only one built on public, generally accessible infrastructure” | TASK-07 |
| 5 of 20 completed use cases ran on Redbelly mainnet | “used Redbelly’s mainnet across five of the twenty completed use cases.” | TASK-07 |
| Under 4 min to issue and resell a tokenised bond on Redbelly. Normally up to 4 days. | “issuance, coupon registration, and the secondary transfer completed end-to-end in under four minutes on Redbelly” and “would conventionally have taken up to four days” | TASK-07 |
| Also supported by Tokeniser | “It has settled a tokenised corporate bond in the Reserve Bank of Australia's pilot wholesale CBDC as part of Project Acacia.” | [Tokeniser: technology](https://tokeniser.com/technology) |
| Wholesale CBDC: central bank digital money used between financial institutions | “it upgrades the settlement layer between regulated financial institutions” | TASK-07 |
