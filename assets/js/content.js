/*
  Redbelly Explained: content for all 11 infographics.
  This file is the single source of truth for copy and sources.
  Edit text here, then run `node tools/render.mjs` to re-export every PNG.

  Copy rules (Task Board voice): plain words, say the number, no em or en dashes,
  no emoji, no filler verbs. Words inside [square brackets] in a title are set in brand red.
*/
window.RB = window.RB || {};

RB.series = {
  name: 'Redbelly Explained',
  total: 11,
  verified: '26 Oct 2026'
};

RB.sources = {
  docsHome:   { title: 'Redbelly docs: Home', url: 'https://docs.redbelly.network' },
  receptor:   { title: 'Redbelly docs: Receptor', url: 'https://docs.redbelly.network/pages/receptor/' },
  issuer:     { title: 'Redbelly docs: Receptor Issuer module', url: 'https://docs.redbelly.network/pages/modules/issuer/' },
  sdzk:       { title: 'Redbelly docs: Selective Disclosure vs Proof by Query (Zero Knowledge)', url: 'https://docs.redbelly.network/pages/eligibility-sdk/selective-disclosure-vs-zero-knowledge/' },
  pbq:        { title: 'Redbelly docs: Proof by Query', url: 'https://docs.redbelly.network/pages/methods/proof-by-query/' },
  sd:         { title: 'Redbelly docs: Selective Disclosure', url: 'https://docs.redbelly.network/pages/methods/selective-disclosure/' },
  ekOverview: { title: 'Redbelly docs: Eligibility Kit overview', url: 'https://docs.redbelly.network/pages/eligibility-sdk/overview/' },
  criteria:   { title: 'Redbelly docs: Configure Eligibility Criteria', url: 'https://docs.redbelly.network/pages/eligibility-sdk/configure-eligibility-criteria/' },
  whitepaper: { title: 'Redbelly Network whitepaper (28 Aug 2025)', url: 'https://redbelly.network/whitepaper' },
  research:   { title: 'Redbelly research hub', url: 'https://redbelly.network/research' },
  dbftPaper:  { title: 'Research hub: DBFT, Efficient Leaderless Byzantine Consensus', url: 'https://redbelly.network/research/dbft-ef-cient-leaderless-byzantine-consensus' },
  home:       { title: 'Redbelly Network website', url: 'https://redbelly.network' },
  assetTok:   { title: 'Redbelly asset tokenisation', url: 'https://redbelly.network/asset-tokenisation' },
  acacia:     { title: 'Redbelly Project Acacia page', url: 'https://redbelly.network/projectacacia' },
  task07:     { title: 'TASK-07 Project Acacia deep dive (winning entry)', url: 'https://khalyd.substack.com/p/redbelly-network-and-the-rbas-project' },
  tokeniser:  { title: 'Tokeniser website', url: 'https://tokeniser.com' },
  tokTech:    { title: 'Tokeniser: Our Technology', url: 'https://tokeniser.com/technology' },
  tokWhy:     { title: 'Tokeniser: Why tokenise', url: 'https://tokeniser.com/why-tokenise' },
  khWhy:      { title: 'Tokeniser knowledge hub: Why tokenise your assets?', url: 'https://tokeniser.com/resources/knowledge-hub/business-case/why-tokenise-your-assets' },
  khEnable:   { title: 'Tokeniser knowledge hub: What does tokenising your assets enable?', url: 'https://tokeniser.com/resources/knowledge-hub/business-case/what-does-tokenising-your-assets-enable' },
  khWhat:     { title: 'Tokeniser knowledge hub: What is Tokeniser?', url: 'https://tokeniser.com/resources/knowledge-hub/platform/what-is-tokeniser' },
  khHow:      { title: 'Tokeniser knowledge hub: How does Tokeniser work?', url: 'https://tokeniser.com/resources/knowledge-hub/platform/how-does-tokeniser-work' },
  khComp:     { title: 'Tokeniser knowledge hub: How does Tokeniser handle investor compliance?', url: 'https://tokeniser.com/resources/knowledge-hub/australia/how-tokeniser-handles-investor-compliance' },
  tokComp:    { title: 'Tokeniser: Automated compliance', url: 'https://tokeniser.com/product/superpowers/automated-compliance' },
  task23:     { title: 'TASK-23 DAO structural changes changelog (winning entry, sourced to 1 Aug 2026)', url: 'https://redbelly.smartcodedbot.com/changelog/' },
  voting:     { title: 'Redbelly DAO voting platform', url: 'https://redbelly-governance.vercel.app/' },
  votingNew:  { title: 'DAO voting platform: New proposal page (voting options)', url: 'https://redbelly-governance.vercel.app/create' },
  votingSafe: { title: 'DAO voting platform: Wallet safety page', url: 'https://redbelly-governance.vercel.app/safety' }
};

RB.items = [
  {
    id: '01', slug: 'what-is-redbelly', short: 'What is Redbelly',
    title: 'What is [Redbelly]?',
    answer: 'A layer 1 blockchain built for tokenising real world assets, where every participant is verified.',
    diagram: 'fast',
    data: {
      core: 'Redbelly Network', coreSub: 'Layer 1, built to be FAST',
      tiles: [
        { k: 'F', name: 'Finality', text: 'Final within seconds. No forks.' },
        { k: 'A', name: 'Accountability', text: 'Every participant is known.' },
        { k: 'S', name: 'Security', text: 'Consensus proven correct.' },
        { k: 'T', name: 'Throughput', text: '97,500 transactions a second shown.' }
      ]
    },
    points: [
      { icon: 'building', lead: 'Made for real assets', text: 'Issue, manage and distribute regulated financial assets as tokens.' },
      { icon: 'flask', lead: 'Born from research', text: 'Consensus developed with the University of Sydney and CSIRO.' },
      { icon: 'code', lead: 'Speaks Ethereum', text: 'A scalable EVM runs Solidity smart contracts.' }
    ],
    footer: 'docs.redbelly.network · Redbelly whitepaper · redbelly.network',
    refs: [
      { src: 'docsHome', facts: 'Layer 1 blockchain built and optimised for real world asset tokenisation; DBFT consensus; scalable EVM.' },
      { src: 'whitepaper', facts: 'Section 3: all network participants are known (mandatory identity verification). Section 4.1: FAST (Finality, Accountability, Security, Throughput). Section 4.1.1: irreversible within seconds, cannot fork, formally verified, over 97,500 transactions per second demonstrated in production. Section 4.1.4: SEVM, Solidity. Summary: DBFT developed with The University of Sydney and CSIRO Data61.' },
      { src: 'home', facts: 'Infrastructure to issue, manage and distribute regulated digital financial assets.' }
    ],
    alt: 'Infographic 1 of 11, What is Redbelly. Redbelly is a layer 1 blockchain built for tokenising real world assets, where every participant is verified. It is built around four properties called FAST: Finality, Accountability, Security and Throughput.'
  },
  {
    id: '02', slug: 'why-tokenise', short: 'Why tokenise real world assets',
    title: 'Why tokenise [real world assets]?',
    answer: 'Tokenising records ownership as a digital token, with the asset’s rules built in. What you own stays the same. How it moves changes.',
    diagram: 'compare',
    data: {
      left: 'Traditional', right: 'Tokenised',
      rows: [
        { label: 'Settlement', before: 'Takes days (T+2)', after: 'Seconds, in one transaction', icon: 'clock' },
        { label: 'Trading hours', before: 'Registry business hours', after: 'Any time, 24/7', icon: 'calendar' },
        { label: 'Access', before: 'Large minimum investments', after: 'Smaller fractional units', icon: 'pie' },
        { label: 'Compliance', before: 'Manual checks', after: 'Checked on every transfer', icon: 'shield' }
      ]
    },
    points: [],
    footer: 'Tokeniser knowledge hub · redbelly.network/asset-tokenisation',
    refs: [
      { src: 'tokeniser', facts: 'FAQ: tokenisation records ownership as digital tokens and lets you program the rules of the asset.' },
      { src: 'khWhy', facts: 'Tokenisation does not change what you own; it changes how ownership is recorded, transferred and administered. Settlement in seconds instead of T+2. Fractional access.' },
      { src: 'khEnable', facts: 'Atomic settlement, programmable compliance enforced at every transaction, fractional ownership lowers the investment threshold, 24/7 transfers without registry business hours.' },
      { src: 'assetTok', facts: 'Borderless 24/7 markets; automate issuance, settlement and compliance.' }
    ],
    alt: 'Infographic 2 of 11, Why tokenise real world assets. Tokenising records ownership as a digital token with the asset rules built in. Compared with traditional assets, settlement drops from days to seconds, trading runs 24/7, assets split into smaller units, and compliance is checked on every transfer.'
  },
  {
    id: '03', slug: 'dbft-consensus', short: 'DBFT consensus',
    title: '[DBFT] consensus',
    answer: 'Democratic Byzantine Fault Tolerance is how Redbelly’s nodes agree. There is no leader. Nodes build every block together.',
    diagram: 'dbft',
    data: {
      leftTitle: 'Most blockchains compete',
      leftText: 'One block wins. The rest is wasted work.',
      rightTitle: 'Redbelly nodes combine',
      rightText: 'Every node’s transactions join one superblock.',
      superblock: 'Superblock'
    },
    points: [
      { icon: 'nodes', lead: 'No leader', text: 'Every node plays a similar role. No single point of failure.' },
      { icon: 'lock', lead: 'Final once confirmed', text: 'No forks. A confirmed transaction cannot be reversed.' },
      { icon: 'check', lead: 'Proven correct', text: 'Formally verified. Works while under a third of nodes are faulty.' }
    ],
    footer: 'Redbelly whitepaper · redbelly.network/research',
    refs: [
      { src: 'whitepaper', facts: 'Section 4.1.1: leaderless, eliminates single points of failure, cannot fork, formally verified by parameterised model checking, irreversible within seconds; classical chains compete and waste work, Redbelly nodes combine distinct sets of transactions into a superblock (collaborative, not competitive). Section 4.1.2: BFT systems tolerate less than a third of faulty nodes.' },
      { src: 'dbftPaper', facts: 'DBFT is leaderless; each node plays a similar role, making the decision democratic.' },
      { src: 'research', facts: 'Holistic Verification of Blockchain Consensus: verified for any number n of processes and f < n/3 Byzantine processes.' }
    ],
    alt: 'Infographic 3 of 11, DBFT consensus. In most blockchains nodes compete and one block wins. In Redbelly DBFT there is no leader: every node’s transactions combine into one superblock. Confirmed transactions are final, there are no forks, and the consensus is formally verified.'
  },
  {
    id: '04', slug: 'receptor', short: 'Receptor',
    title: 'What is [Receptor]?',
    answer: 'Receptor is Redbelly’s own digital identity and verifiable credential protocol. It checks who can use the network and who can access each product.',
    diagram: 'receptor',
    data: {
      steps: [
        { kind: 'node', icon: 'wallet', name: 'You', text: 'Hold credentials in a wallet' },
        { kind: 'gate', icon: 'shield', name: 'Network access', text: 'Needs an accredited issuer’s credential' },
        { kind: 'node', icon: 'hex', name: 'Redbelly', text: 'Every participant verified' },
        { kind: 'gate', icon: 'filter', name: 'Product rules', text: 'Such as: wholesale investor' },
        { kind: 'node', icon: 'token', name: 'Product', text: 'Only eligible users get in' }
      ],
      modules: ['Issuer', 'Holder', 'Verifier'],
      standard: 'Built on the W3C standard'
    },
    points: [
      { icon: 'badge', lead: 'Accredited issuers', text: 'Only accredited issuers can grant network access.' },
      { icon: 'filter', lead: 'Rules per product', text: 'Apps set criteria. Users prove they meet them.' },
      { icon: 'eye', lead: 'Two ways to prove', text: 'On-chain with zero knowledge, or off-chain by sharing only some fields.' }
    ],
    footer: 'docs.redbelly.network/pages/receptor',
    refs: [
      { src: 'receptor', facts: 'Receptor is Redbelly’s native digital identity and verifiable credential protocol; facilitates network access so all participants are who they say they are; helps use cases surface eligibility criteria and users prove them; built on the W3C verifiable credential data model; Issuer, Holder and Verifier modules; issuers that provide network access are accredited; Proof by Query (on-chain) and Selective Disclosure (off-chain).' },
      { src: 'issuer', facts: 'Only accredited issuers can issue credentials that give users network access.' },
      { src: 'criteria', facts: 'Example credential types include AU Sophisticated Wholesale Investor.' }
    ],
    alt: 'Infographic 4 of 11, Receptor. Receptor is Redbelly’s identity and verifiable credential protocol. A user holds credentials in a wallet, passes a network access check using a credential from an accredited issuer, then passes product rules such as being a wholesale investor. It has Issuer, Holder and Verifier modules and is built on the W3C standard.'
  },
  {
    id: '05', slug: 'verifiable-credentials', short: 'Verifiable credentials',
    title: 'Verifiable [credentials]',
    answer: 'A digital proof about you, such as a passed AML check. A trusted issuer signs it and you keep it in your own wallet.',
    diagram: 'vc',
    data: {
      issuer: { name: 'Issuer', text: 'Checks you once, then signs' },
      holder: { name: 'You', text: 'Keep it. Share proof when asked.' },
      verifier: { name: 'Verifier', text: 'Checks the issuer\u2019s signature' },
      arrows: ['Issues', 'Shares proof', 'The verifier trusts the issuer'],
      card: { type: 'AML/CTF credential', rows: [['Status', 'Passed'], ['Issued to', 'Your wallet']], sig: 'Signed by issuer' }
    },
    points: [
      { icon: 'repeat', lead: 'Reuse it', text: 'Reusable identity and KYC credentials cut repeat onboarding.' },
      { icon: 'wallet', lead: 'Keep it', text: 'Your data stays with you, not in every company’s database.' },
      { icon: 'key', lead: 'Trust it', text: 'Checked against the issuer’s public key, so forgeries fail.' }
    ],
    footer: 'Redbelly whitepaper · docs.redbelly.network · redbelly.network/asset-tokenisation',
    refs: [
      { src: 'receptor', facts: 'Issuer, Holder and Verifier modules; W3C verifiable credential data model.' },
      { src: 'whitepaper', facts: 'Section 4.2: credential data model based on W3C and Iden3; user data kept at the edge, not duplicated across each service provider (no honeypots of sensitive data).' },
      { src: 'assetTok', facts: 'Reusable client identity and KYC credentials streamline onboarding and reduce duplication.' },
      { src: 'ekOverview', facts: 'Verifier checks a proof against the trusted issuer’s public key; sensitive data never leaves the user’s wallet; resistant to forgery and tampering.' },
      { src: 'criteria', facts: 'AMLCTFCredential is a supported credential type.' }
    ],
    alt: 'Infographic 5 of 11, Verifiable credentials. A verifiable credential is a digital proof about you, such as a passed AML check. An issuer signs it, you keep it in your wallet, and a verifier checks the signature. You can reuse it, your data stays with you, and forgeries fail.'
  },
  {
    id: '06', slug: 'zk-proofs', short: 'ZK proofs',
    title: '[Zero knowledge] proofs',
    answer: 'Prove something is true without revealing the data behind it.',
    diagram: 'zk',
    data: {
      steps: [
        { icon: 'question', name: 'The question', text: 'Is this user over 18?' },
        { icon: 'wallet', name: 'Your wallet', text: 'Builds a proof. Birth date stays hidden.' },
        { icon: 'contract', name: 'Smart contract', text: 'Checks the proof on Redbelly' },
        { icon: 'check', name: 'The answer', text: 'Just true or false. No personal data on-chain.' }
      ],
      compare: [
        { name: 'Selective Disclosure', text: 'Reveals only the fields asked for. Off-chain.' },
        { name: 'Zero knowledge (Proof by Query)', text: 'Shares only the proof. No data at all.' }
      ]
    },
    points: [],
    footer: 'docs.redbelly.network: Selective Disclosure vs Proof by Query',
    refs: [
      { src: 'sdzk', facts: 'Proof by Query uses zero knowledge proofs to prove a statement without revealing data; verifier asks a yes or no query such as is the user over 18; wallet generates a proof; on-chain a smart contract verifies it; result is true or false with no personal data exposed on-chain. Selective Disclosure reveals only specific requested fields, off-chain. In SD data is revealed; in PBQ only the proof is shared.' },
      { src: 'pbq', facts: 'Age over 18 proven from a passport credential without disclosing the exact birth date.' }
    ],
    alt: 'Infographic 6 of 11, Zero knowledge proofs. Prove something is true without revealing the data. A verifier asks if a user is over 18, the wallet builds a proof while the birth date stays hidden, a smart contract on Redbelly checks it, and the answer is true with no personal data on-chain.'
  },
  {
    id: '07', slug: 'tokeniser', short: 'Tokeniser',
    title: 'What is [Tokeniser]?',
    answer: 'A Redbelly Network project that lets funds and companies issue and run tokenised assets on Redbelly, without a technology project.',
    diagram: 'tokeniser',
    data: {
      steps: [
        { icon: 'settings', name: 'Set up', text: 'Define the asset and its rules' },
        { icon: 'badge', name: 'Onboard', text: 'Investors verify identity and status' },
        { icon: 'token', name: 'Issue', text: 'Tokens go to verified wallets' },
        { icon: 'swap', name: 'Transfer', text: 'Checked, then settled in seconds' },
        { icon: 'chart', name: 'Pay and report', text: 'Payouts and records automated' }
      ],
      stats: [
        { v: 'A$2B+', l: 'transactions processed' },
        { v: '160+', l: 'companies and funds' },
        { v: 'A$1.2B', l: 'equity and funds issued' }
      ],
      statNote: 'Figures published by Tokeniser'
    },
    points: [],
    footer: 'tokeniser.com · Tokeniser knowledge hub',
    refs: [
      { src: 'tokeniser', facts: 'Tokeniser is a Redbelly Network project; benefits of tokenisation without the technology project; A$1.2B issued equity and funds, 160+ companies and funds, A$2B+ transactions.' },
      { src: 'khWhat', facts: 'Platform for fund managers, company secretaries and asset administrators to issue, manage, transfer and report on tokenised assets on Redbelly Network.' },
      { src: 'khHow', facts: 'Steps: set up register and compliance rules; investor identity verification and classification; tokens minted to verified wallets; transfers checked then settled atomically in seconds; corporate actions executed across holders; reporting always current. No blockchain expertise required.' }
    ],
    alt: 'Infographic 7 of 11, Tokeniser. Tokeniser is a Redbelly Network project that lets funds and companies issue and run tokenised assets on Redbelly. Five steps: set up, onboard investors, issue tokens, transfer with checks, pay and report. Tokeniser publishes A$2B+ transactions, 160+ companies and funds, and A$1.2B issued.'
  },
  {
    id: '08', slug: 'compliance-aware-assets', short: 'Compliance aware assets',
    title: 'Compliance aware [assets]',
    answer: 'The rules travel with the asset. Every transfer is checked against them before it can settle.',
    diagram: 'compliance',
    data: {
      tokenName: 'Tokenised asset',
      rules: ['Identity verified (KYC, AML)', 'Eligible investor type', 'Transfer limits, like lock-ups', 'Foreign ownership caps'],
      ok: { to: 'Verified, eligible wallet', result: 'Settles' },
      no: { to: 'Unverified wallet', result: 'Rejected before it settles' }
    },
    points: [
      { icon: 'code', lead: 'Programmed in', text: 'Issuers write eligibility rules into the asset itself.' },
      { icon: 'list', lead: 'Checked every time', text: 'Transfers that break a rule fail. Every check is logged.' },
      { icon: 'link', lead: 'Inherited', text: 'Apps using the asset on Redbelly inherit its rules.' }
    ],
    footer: 'Redbelly whitepaper · redbelly.network/asset-tokenisation · Tokeniser',
    refs: [
      { src: 'whitepaper', facts: 'Section 2: eligibility criteria programmed into the definition of the asset; only parties that can prove eligibility can hold the token. Section 3: compliance becomes an inherent property of the asset; compliance composability means interacting assets and protocols inherit the compliance properties of underlying assets.' },
      { src: 'assetTok', facts: 'Defined investor eligibility enforced at the point of trade; AML, CTF and Travel Rule requirements can be applied as needed.' },
      { src: 'khComp', facts: 'Rules encoded into the token and enforced at every transfer: KYC/AML status, eligibility, transfer restrictions such as lock-ups, foreign ownership limits; non-compliant transfers rejected before submission; records kept for audit.' },
      { src: 'tokComp', facts: 'Trades that fail a check do not proceed, and every check is logged.' }
    ],
    alt: 'Infographic 8 of 11, Compliance aware assets. The rules travel with the asset, such as verified identity, eligible investor type, transfer limits and foreign ownership caps. A transfer to a verified eligible wallet settles. A transfer to an unverified wallet is rejected before it settles.'
  },
  {
    id: '09', slug: 'identity-and-accountability', short: 'Identity and accountability',
    title: 'Identity and [accountability]',
    answer: 'On Redbelly, every participant is known and cheating nodes can be caught with proof. The whitepaper calls this accountable blockspace.',
    diagram: 'accountability',
    data: {
      rows: [
        { label: 'People', steps: [
          { icon: 'users', text: 'People, businesses and AI agents' },
          { icon: 'badge', text: 'Verified by accredited issuers' },
          { icon: 'link', text: 'Every transaction traces to someone responsible' }
        ] },
        { label: 'Nodes', steps: [
          { icon: 'alert', text: 'A node tries to cheat' },
          { icon: 'sign', text: 'Its signed messages become proof of fraud' },
          { icon: 'remove', text: 'Proven faulty nodes are removed' }
        ] }
      ],
      note: 'This works even if a majority of nodes collude.',
      privacy: 'Identities are verified. Zero knowledge proofs keep personal data private.'
    },
    points: [],
    footer: 'Redbelly whitepaper · redbelly.network/projectacacia',
    refs: [
      { src: 'whitepaper', facts: 'Section 3 Accountable Blockspace: all network participants are known through accredited verifiable credential issuers, from individuals to businesses to AI agents; every transaction can be tied back to a responsible entity; malicious nodes detected and punished using undeniable proofs of fraud even with a colluding majority. Section 4.1.2: faulty nodes leave cryptographically signed traces that honest nodes combine into proofs of fraud; exclusion protocol removes them. Summary page: Polygraph.' },
      { src: 'acacia', facts: 'Participants verify their identities, but their privacy remains protected through zero knowledge proofs.' }
    ],
    alt: 'Infographic 9 of 11, Identity and accountability. People, businesses and AI agents are verified by accredited issuers, so every transaction traces back to someone responsible. If a node tries to cheat, its signed messages become proof of fraud and it is removed, even if a majority colludes.'
  },
  {
    id: '10', slug: 'governance', short: 'Governance',
    title: 'How the DAO [decides]',
    answer: 'Redbelly Community DAO members vote on the DAO voting platform. Only verified wallets can vote, and every ballot is signed and public.',
    diagram: 'governance',
    data: {
      steps: [
        { icon: 'doc', name: 'Propose', text: 'Signed, no gas. Locked once voting opens.' },
        { icon: 'badge', name: 'Vote', text: 'Only wallets with a Receptor credential.' },
        { icon: 'scale', name: 'Count', text: 'Each proposal sets its method, power and quorum.' },
        { icon: 'receipt', name: 'Record', text: 'Signed ballots, receipts on IPFS. Anyone can check.' }
      ],
      quorum: { name: 'Identity quorum', text: 'A minimum number of different verified voters. One large holder cannot meet it alone.' },
      inForce: {
        title: 'In force now',
        items: [
          'New treasury-funded work is paused until a future vote.',
          'High Council: 3 seats, elected July 2026.',
          '5 pods: Marketing, Builder/Develop, Researcher, Community, Partnerships.'
        ]
      }
    },
    points: [],
    footer: 'DAO voting platform, checked 26 Oct 2026 · TASK-23 changelog, as of 1 Aug 2026',
    footerNoVerified: true,
    refs: [
      { src: 'voting', facts: 'How voting works today: every address clears Redbelly’s passport-backed identity check; signature voting, no gas; receipts on IPFS; results show voters, quorum and identity quorum.' },
      { src: 'votingNew', facts: 'Publishing signs a message, costs no gas, and a proposal cannot be edited once open. Voting systems: single choice, approval, weighted, quadratic, ranked choice, Copeland, one verified address one vote. Voting power: RBNT balance, token balance or verified identity. Verified wallets only: only wallets holding a Receptor credential can vote. Quorum and identity quorum (distinct verified voters; a power quorum can be met by one large holder alone, this cannot).' },
      { src: 'votingSafe', facts: 'A vote is a signed message, never a transaction; signatures are stored with ballots so anyone can re-verify.' },
      { src: 'task23', facts: 'What is in force (sources as of 1 Aug 2026): new treasury-funded initiatives suspended until a future governance vote resumes them (July 2026 vote); High Council seats elected July 2026 (3 seats); five pods: Marketing, Builder/Develop, Researcher, Community, Partnerships. Snapshot-era voting rules described in the changelog are superseded by the voting platform.' }
    ],
    alt: 'Infographic 10 of 11, Governance. Redbelly Community DAO members vote on the DAO voting platform. Four steps: propose with a signed message, vote with a wallet that holds a Receptor credential, count using the method and quorum each proposal sets, and record signed ballots with receipts on IPFS. In force now: new treasury funded work is paused, the High Council has 3 seats elected in July 2026, and there are 5 pods.'
  },
  {
    id: '11', slug: 'project-acacia', short: 'Project Acacia',
    title: 'Project [Acacia]',
    answer: 'The Reserve Bank of Australia’s real money pilot of tokenised assets and digital money. Redbelly was one of the networks it ran on.',
    diagram: 'acacia',
    data: {
      timeline: [
        { when: '2024', text: 'Phase 1 maps settlement models' },
        { when: 'Jul 2025', text: 'Phase 2 starts. Redbelly selected.' },
        { when: 'Jul 2025 to Feb 2026', text: 'Live pilots with real money and assets' },
        { when: 'May 2026', text: 'RBA publishes its Final Report' }
      ],
      stats: [
        { v: '3', l: 'networks received the RBA’s pilot wholesale CBDC. Redbelly was the only public one.' },
        { v: '5', l: 'of 20 completed use cases ran on Redbelly mainnet.' },
        { v: 'Under 4 min', l: 'to issue and resell a tokenised bond on Redbelly. Normally up to 4 days.' }
      ],
      gloss: 'Wholesale CBDC: central bank digital money used between financial institutions.'
    },
    points: [],
    footer: 'TASK-07 Project Acacia deep dive · redbelly.network/projectacacia · tokeniser.com',
    refs: [
      { src: 'task07', facts: 'Phase 1 completed 2024 (conceptual settlement models); Phase 2 July 2025 to February 2026; Redbelly selected July 2025; 20 completed use cases on 6 DLT platforms; RBA issued pilot wCBDC onto 3 platforms and Redbelly was the only public one; 4 lead participants used Redbelly mainnet across 5 use cases; CLIFFO Series 1 bond issuance, coupon registration and secondary transfer in under four minutes, conventionally up to four days; Final Report May 2026; wholesale CBDC is used between regulated financial institutions, not consumer wallets.' },
      { src: 'acacia', facts: 'Redbelly selected for the RBA’s Project Acacia; live transactions using real tokenised assets and AUD on Redbelly Network.' },
      { src: 'tokTech', facts: 'Redbelly settled a tokenised corporate bond in the RBA’s pilot wholesale CBDC as part of Project Acacia.' }
    ],
    alt: 'Infographic 11 of 11, Project Acacia. The Reserve Bank of Australia’s real money pilot of tokenised assets and digital money. Phase 1 in 2024, Phase 2 from July 2025 to February 2026 with Redbelly selected, Final Report in May 2026. Three networks received the pilot wholesale CBDC and Redbelly was the only public one. Five of 20 completed use cases ran on Redbelly, and a tokenised bond was issued and resold in under four minutes.'
  }
];
