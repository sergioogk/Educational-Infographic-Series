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
  verified: '31 Oct 2026'
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
  votingList: { title: 'DAO voting platform: Proposals page', url: 'https://redbelly-governance.vercel.app/proposals' },
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
      core: 'Redbelly Network', coreSub: 'Built to be FAST',
      tiles: [
        { k: 'F', name: 'Finality', text: 'Final in seconds. No forks.' },
        { k: 'A', name: 'Accountability', text: 'Every participant is known.' },
        { k: 'S', name: 'Security', text: 'Consensus proven correct.' },
        { k: 'T', name: 'Throughput', text: '97,500 transactions a second shown.' }
      ]
    },
    points: [
      { icon: 'building', lead: 'Made for real assets', text: 'Issue and manage regulated assets as tokens.' },
      { icon: 'flask', lead: 'Born from research', text: 'Consensus developed with the University of Sydney and CSIRO.' },
      { icon: 'code', lead: 'Speaks Ethereum', text: 'Runs Solidity smart contracts on an EVM.' }
    ],
    footer: 'Redbelly whitepaper, docs, website',
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
    answer: 'A token records ownership, with the rules written in. The asset and its legal rights stay the same.',
    diagram: 'compare',
    data: {
      left: 'Traditional', right: 'Tokenised',
      rows: [
        { label: 'Settlement', before: 'Usually T+2 in Australia', after: 'Compliant transfers settle in seconds', icon: 'clock' },
        { label: 'Transfers', before: 'Registry business hours', after: 'Can be transferred at any time', icon: 'calendar' },
        { label: 'Access', before: 'Often large minimums', after: 'Can be split into smaller units', icon: 'pie' },
        { label: 'Compliance', before: 'Checked by hand per transfer', after: 'Breaking a rule blocks the transfer', icon: 'shield' }
      ],
      note: 'Per Tokeniser, for Australian funds and companies on Redbelly. Investor eligibility rules still apply.'
    },
    points: [],
    footer: 'tokeniser.com, knowledge hub',
    refs: [
      { src: 'tokeniser', facts: 'FAQ: tokenisation records ownership as digital tokens and lets you program the rules of the asset.' },
      { src: 'khWhy', facts: 'The token is the record, not the asset itself; tokenisation does not change what you own or the legal rights attached to it. Written for Australian fund managers and companies.' },
      { src: 'khEnable', facts: 'Settlement is typically T+2 in Australia. Registries work business hours and later transfers queue; tokenised assets can be transferred at any time. High-value assets have traditionally needed large minimum investments; any asset can be divided into smaller units. Transfer eligibility is verified manually when requested; on tokenised infrastructure rules are written into the token and a breaching transfer is rejected before it can be submitted.' },
      { src: 'khHow', facts: 'Compliant transfers settle atomically on Redbelly Network in seconds. Transfers to an unverified wallet or an ineligible investor are rejected.' }
    ],
    alt: 'Infographic 2 of 11, Why tokenise real world assets. A digital token becomes the record of who owns an asset, with its rules written in, while the asset and its legal rights stay the same. Compared with traditional records in Australia: settlement is usually T+2, while compliant tokenised transfers on Redbelly settle in seconds; transfers can happen at any time instead of registry business hours; assets can be split into smaller units; and rule-breaking transfers are rejected instead of checked by hand. Based on Tokeniser’s guide for Australian funds and companies. Investor eligibility rules still apply.'
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
      { icon: 'lock', lead: 'Final once confirmed', text: 'No forks. Cannot be reversed.' },
      { icon: 'check', lead: 'Proven correct', text: 'Formally verified. Works while under a third of nodes are faulty.' }
    ],
    footer: 'Redbelly whitepaper, research hub',
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
    answer: 'Redbelly’s own identity and verifiable credential protocol. It checks who can use the network and each product.',
    diagram: 'receptor',
    data: {
      steps: [
        { kind: 'node', icon: 'wallet', name: 'You', text: 'Credentials in a wallet' },
        { kind: 'gate', icon: 'shield', name: 'Network access', text: 'Accredited issuer’s credential' },
        { kind: 'node', icon: 'hex', name: 'Redbelly', text: 'Every participant verified' },
        { kind: 'gate', icon: 'filter', name: 'Product rules', text: 'Such as wholesale investor' },
        { kind: 'node', icon: 'token', name: 'Product', text: 'Only eligible users get in' }
      ],
      modules: ['Issuer', 'Holder', 'Verifier'],
      standard: 'Built on the W3C standard'
    },
    points: [
      { icon: 'badge', lead: 'Accredited issuers', text: 'Only they grant network access.' },
      { icon: 'filter', lead: 'Rules per product', text: 'Apps set them. Users prove them.' },
      { icon: 'eye', lead: 'Two ways to prove', text: 'Zero knowledge on-chain, or some fields off-chain.' }
    ],
    footer: 'Redbelly docs: Receptor',
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
    answer: 'A digital proof about you, signed by a trusted issuer and kept in your own wallet.',
    diagram: 'vc',
    data: {
      issuer: { name: 'Issuer', text: 'Checks you, then signs' },
      holder: { name: 'You', text: 'Keep it, share proof' },
      verifier: { name: 'Verifier', text: 'Checks the signature' },
      arrows: ['Issues', 'Shares proof', 'The verifier trusts the issuer'],
      card: { type: 'AML/CTF credential', rows: [['Status', 'Passed'], ['Issued to', 'Your wallet']], sig: 'Signed by issuer' }
    },
    points: [
      { icon: 'repeat', lead: 'Reuse it', text: 'Less repeat KYC onboarding.' },
      { icon: 'wallet', lead: 'Keep it', text: 'Your data stays with you.' },
      { icon: 'key', lead: 'Trust it', text: 'Forgeries fail the check.' }
    ],
    footer: 'Redbelly whitepaper, docs, website',
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
        { icon: 'check', name: 'The answer', text: 'True or false. No personal data on-chain.' }
      ],
      compare: [
        { name: 'Selective Disclosure', text: 'Shows only the fields asked for. Off-chain.' },
        { name: 'Proof by Query (zero knowledge)', text: 'Shares only the proof. No data.' }
      ]
    },
    points: [],
    footer: 'Redbelly docs: Eligibility SDK',
    refs: [
      { src: 'sdzk', facts: 'Proof by Query uses zero knowledge proofs to prove a statement without revealing data; verifier asks a yes or no query such as is the user over 18; wallet generates a proof; on-chain a smart contract verifies it; result is true or false with no personal data exposed on-chain. Selective Disclosure reveals only specific requested fields, off-chain. In SD data is revealed; in PBQ only the proof is shared.' },
      { src: 'pbq', facts: 'Age over 18 proven from a passport credential without disclosing the exact birth date.' }
    ],
    alt: 'Infographic 6 of 11, Zero knowledge proofs. Prove something is true without revealing the data. A verifier asks if a user is over 18, the wallet builds a proof while the birth date stays hidden, a smart contract on Redbelly checks it, and the answer is true with no personal data on-chain.'
  },
  {
    id: '07', slug: 'tokeniser', short: 'Tokeniser',
    title: 'What is [Tokeniser]?',
    answer: 'A Redbelly Network project that lets funds and companies issue and run tokenised assets, without a technology project.',
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
    footer: 'tokeniser.com, knowledge hub',
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
      rules: ['Identity verified (KYC, AML)', 'Eligible investor type', 'Lock-up periods', 'Foreign ownership caps'],
      ok: { to: 'Verified, eligible wallet', result: 'Settles' },
      no: { to: 'Unverified wallet', result: 'Rejected before it settles' }
    },
    points: [
      { icon: 'code', lead: 'Programmed in', text: 'Issuers write the rules into the asset.' },
      { icon: 'list', lead: 'Checked every time', text: 'Failed checks stop the trade. All are logged.' },
      { icon: 'link', lead: 'Inherited', text: 'Apps using the asset inherit its rules.' }
    ],
    footer: 'Redbelly whitepaper, website, Tokeniser',
    refs: [
      { src: 'whitepaper', facts: 'Section 2: eligibility criteria programmed into the definition of the asset; only parties that can prove eligibility can hold the token. Section 3: compliance becomes an inherent property of the asset; compliance composability means interacting assets and protocols inherit the compliance properties of underlying assets.' },
      { src: 'assetTok', facts: 'Defined investor eligibility enforced at the point of trade; AML, CTF and Travel Rule requirements can be applied as needed.' },
      { src: 'khComp', facts: 'Rules encoded into the token and enforced at every transfer: KYC/AML status, eligibility, transfer restrictions such as lock-ups, foreign ownership limits; non-compliant transfers rejected before submission; records kept for audit.' },
      { src: 'tokComp', facts: 'Trades that fail a check do not proceed, and every check is logged.' }
    ],
    alt: 'Infographic 8 of 11, Compliance aware assets. The rules travel with the asset, such as verified identity, eligible investor type, lock-up periods and foreign ownership caps. A transfer to a verified eligible wallet settles. A transfer to an unverified wallet is rejected before it settles.'
  },
  {
    id: '09', slug: 'identity-and-accountability', short: 'Identity and accountability',
    title: 'Identity and [accountability]',
    answer: 'Every network participant is identity-verified. Nodes that try to make honest nodes disagree leave signed evidence.',
    diagram: 'accountability',
    data: {
      rows: [
        { label: 'Participants', steps: [
          { icon: 'users', text: 'People, businesses and AI agents' },
          { icon: 'badge', text: 'Verified by accredited issuers' },
          { icon: 'link', text: 'Transactions can be tied to a responsible party' }
        ] },
        { label: 'Nodes', steps: [
          { icon: 'alert', text: 'Faulty nodes try to cause disagreement' },
          { icon: 'sign', text: 'Their signed traces become proof of fraud' },
          { icon: 'remove', text: 'Enough proof removes them from consensus' }
        ] }
      ],
      note: 'Designed to tolerate attackers that control more than half the system.',
      privacy: 'Zero knowledge proofs can prove a fact without revealing the data.'
    },
    points: [],
    footer: 'Redbelly whitepaper, docs, Acacia page',
    refs: [
      { src: 'whitepaper', facts: 'Section 3 Accountable Blockspace: mandatory identity verification for all network participants through accredited verifiable credential issuers, from individuals to businesses to AI agents; all transactions can be tied back to a responsible entity. Section 4.1.2: designed to tolerate an adversary that controls more than half the system; if honest nodes disagree on the next block, the system can eventually output at least n/3 faulty nodes responsible; faulty nodes that try to cause disagreement leave cryptographically signed traces that honest nodes combine into proofs of fraud; once enough proofs are gathered, an exclusion protocol removes the identified faulty nodes from the consensus committee.' },
      { src: 'acacia', facts: 'Participants verify their identities, but their privacy remains protected through zero knowledge proofs.' },
      { src: 'sdzk', facts: 'Zero knowledge proofs let users prove a statement is true without revealing the underlying data.' }
    ],
    alt: 'Infographic 9 of 11, Identity and accountability. Every network participant is identity-verified: people, businesses and AI agents are verified by accredited issuers, so transactions can be tied to a responsible party. Consensus nodes are accountable too: faulty nodes that try to cause disagreement leave signed traces, honest nodes combine them into proof of fraud, and with enough proof the faulty nodes are removed from the consensus committee. The whitepaper says this is designed to tolerate attackers that control more than half the system. Zero knowledge proofs can prove a fact without revealing the data.'
  },
  {
    id: '10', slug: 'governance', short: 'Governance',
    title: 'How the DAO [decides]',
    answer: 'Only verified wallets can vote on the DAO voting platform. Every ballot is signed and public.',
    diagram: 'governance',
    data: {
      steps: [
        { icon: 'doc', name: 'Propose', text: 'Signed, no gas. Locked once open.' },
        { icon: 'badge', name: 'Vote', text: 'Only wallets with a Receptor credential.' },
        { icon: 'scale', name: 'Count', text: 'Method, power and quorum set per proposal.' },
        { icon: 'receipt', name: 'Record', text: 'Signed ballots, receipts on IPFS.' }
      ],
      quorum: { name: 'Identity quorum', text: 'A minimum number of different verified voters. One large holder cannot meet it alone.' },
      inForce: {
        title: 'In force now',
        items: [
          'New treasury-funded work paused until a future vote.',
          'High Council: 3 seats, elected July 2026.',
          '5 pods: Marketing, Builder/Develop, Researcher, Community, Partnerships.'
        ]
      }
    },
    points: [],
    footer: 'DAO voting platform, checked 31 Oct 2026',
    footerNote: 'TASK-23 changelog, as of 1 Aug 2026',
    refs: [
      { src: 'votingList', facts: 'Signature voting on Redbelly, no gas. Proposal list checked for later votes that change what is in force: none.' },
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
        { when: 'Feb 2026', text: 'Live pilots with real money end' },
        { when: 'May 2026', text: 'RBA publishes its Final Report' }
      ],
      stats: [
        { v: '3', l: 'networks got the RBA’s pilot wholesale CBDC. Redbelly was the only public one.' },
        { v: '5', l: 'of 20 completed use cases ran on Redbelly mainnet.' },
        { v: 'Under 4\u00a0min', l: 'to issue and resell a tokenised bond. Normally up to 4 days.' }
      ],
      gloss: 'Wholesale CBDC: central bank digital money used between financial institutions.'
    },
    points: [],
    footer: 'TASK-07 deep dive, Redbelly, Tokeniser',
    refs: [
      { src: 'task07', facts: 'Phase 1 completed 2024 (conceptual settlement models); Phase 2 July 2025 to February 2026; Redbelly selected July 2025; 20 completed use cases on 6 DLT platforms; RBA issued pilot wCBDC onto 3 platforms and Redbelly was the only public one; 4 lead participants used Redbelly mainnet across 5 use cases; CLIFFO Series 1 bond issuance, coupon registration and secondary transfer in under four minutes, conventionally up to four days; Final Report May 2026; wholesale CBDC is used between regulated financial institutions, not consumer wallets.' },
      { src: 'acacia', facts: 'Redbelly selected for the RBA’s Project Acacia; live transactions using real tokenised assets and AUD on Redbelly Network.' },
      { src: 'tokTech', facts: 'Redbelly settled a tokenised corporate bond in the RBA’s pilot wholesale CBDC as part of Project Acacia.' }
    ],
    alt: 'Infographic 11 of 11, Project Acacia. The Reserve Bank of Australia’s real money pilot of tokenised assets and digital money. Phase 1 in 2024, Phase 2 from July 2025 to February 2026 with Redbelly selected, Final Report in May 2026. Three networks received the pilot wholesale CBDC and Redbelly was the only public one. Five of 20 completed use cases ran on Redbelly, and a tokenised bond was issued and resold in under four minutes.'
  }
];
