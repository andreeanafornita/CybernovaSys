const en = {
  lang: "en",

  /* ─── Nav ───────────────────────────────────────────────── */
  nav: {
    links: [
      { href: "/work",    label: "Work",    key: "work" },
      { href: "/studio",  label: "Studio",  key: "studio" },
      { href: "/process", label: "Process", key: "process" },
      { href: "/shop",    label: "Shop",    key: "shop" },
      { href: "/news",    label: "News",    key: "news" },
    ],
    cta:      "Start a project",
    ctaFlip:  "Let's build it",
    langSwitch: "RO",
    langSwitchLabel: "Schimbă în Română",
  },

  /* ─── Footer ─────────────────────────────────────────────── */
  footer: {
    studioDesc: "An independent product studio building websites, web apps, and mobile apps for teams shipping the next thing.",
    col_sitemap: "Sitemap",
    col_services: "Services",
    col_contact: "Contact",
    sitemapLinks: [
      { href: "/",        label: "Home" },
      { href: "/work",    label: "Work" },
      { href: "/studio",  label: "Studio" },
      { href: "/process", label: "Process" },
      { href: "/news",    label: "News" },
      { href: "/contact", label: "Contact" },
    ],
    serviceLinks: [
      { href: "/process#web",    label: "Marketing websites" },
      { href: "/process#app",    label: "Web applications" },
      { href: "/process#mobile", label: "Mobile apps" },
      { href: "/process#design", label: "Brand & design" },
    ],
    built: "Built in-house, in JS & CSS.",
    copy: "© 2026 Cybernova Systems",
  },

  /* ─── Home ───────────────────────────────────────────────── */
  hero: {
    eyebrow: "Cybernova Systems · Digital Agency Since 2021",
    headlineLine1: ["We build websites,", "apps &"],
    headlineLine2: ["run ads", "that", "convert."],
    lead: "We create custom websites, mobile apps, and online stores — and we run Google, Facebook, Instagram, and TikTok ads that bring real customers to your business. Everything your brand needs to grow online, in one place.",
    cta1: "Start a project",
    cta2: "See our work",
    stats: [
      { n: 48, suffix: "+", label: "Projects delivered" },
      { n: 6,  suffix: "+", label: "Years average client" },
      { n: 12, suffix: "",  label: "Specialists on team" },
      { n: 3,  suffix: "",  label: "Continents served" },
    ],
  },

  marquee: {
    items: ["Cybernova Systems", "Websites", "Web Apps", "Mobile Apps", "Google Ads", "Meta Ads", "TikTok Ads", "AI Automation", "Made in EU"],
  },

  manifesto: {
    text: "Every business deserves a powerful online presence. We build websites and apps that look great, load fast, and turn visitors into customers — then we run ads that keep them coming back.",
    emphasisWords: ["powerful", "customers", "ads"],
  },

  servicesStack: {
    eyebrow: "What we do",
    scrollHint: "Scroll to explore",
    services: [
      {
        num: "01 / Service",
        title: "Custom Websites & Online Stores",
        body: "We design and build professional websites and e-commerce stores for any type of business — whether you sell products online, offer services, or want to showcase your brand. Fast, modern, and built to grow with you.",
        points: ["Presentation & portfolio sites", "Online stores (e-commerce)", "Booking & reservation platforms", "B2B & B2C websites"],
      },
      {
        num: "02 / Service",
        title: "Web & Mobile Apps",
        body: "Need a custom platform, a client portal, or a mobile app for your business? We build tailored digital tools that automate your processes and make your team and customers' lives easier — on any device.",
        points: ["Custom business platforms", "iOS & Android mobile apps", "Customer portals & dashboards", "Internal management tools"],
      },
      {
        num: "03 / Service",
        title: "Paid Advertising — Google, Meta, TikTok",
        body: "We manage advertising campaigns on Google, Facebook, Instagram, and TikTok that bring the right people to your business. We handle everything: strategy, ad creation, targeting, and optimization — so you get more customers for your budget.",
        points: ["Google Search & Shopping Ads", "Facebook & Instagram Ads", "TikTok Ads for e-commerce", "Full campaign management & reporting"],
      },
    ],
  },

  horizontalWork: {
    eyebrow: "Selected projects",
    allProjects: "All projects",
    cases: [
      { img: "/mockup-estatex.png",   meta: ["EstateX", "2025 · Real Estate Platform"], title: "Property search platform rebuilt from scratch", desc: "A modern property listing engine with map search and instant filters. Replaced a slow, outdated system and cut search time by 90%." },
      { img: "/mockup-floteauto.png", meta: ["FloteAuto", "2025 · Mobile App"], title: "Vehicle service app for owners & mechanics", desc: "A native iOS & Android app that keeps car owners connected with their mechanic — service history, reminders, and photo reporting in one tap." },
      { img: "/mockup-ecommerce.png", meta: ["Loop Café", "2024 · E-Commerce"], title: "Coffee subscription store on Stripe", desc: "Self-managed subscriptions, pause/resume flows, and gift options. Built in two weeks, generating revenue for three years and counting." },
      { img: "/mockup-ads.png",       meta: ["Multi-Client", "2025 · Paid Ads"], title: "Google & Meta ad campaigns delivering 4× ROAS", desc: "End-to-end campaign management for retail and service businesses — strategy, creative, targeting, and weekly reporting." },
    ],
  },

  servicesBento: {
    eyebrow: "Our services",
    heading: "Everything you need to grow online.",
    services: [
      { id: "marketing", icon: "web",      title: "Presentation Websites",  desc: "Professional websites that showcase your business 24/7, load instantly, and turn visitors into leads or customers.", num: "01", hoverColor: "var(--cs-cream)", exploreLabel: "Explore Websites" },
      { id: "web-apps",  icon: "app",      title: "Web Applications",       desc: "Custom platforms, client portals, and internal tools built for the way your business actually works.", num: "02", hoverColor: "var(--cs-rust)", exploreLabel: "Explore Web Apps" },
      { id: "mobile",    icon: "mobile",   title: "Mobile Apps",            desc: "iOS and Android apps your customers will love — designed from the ground up for the best experience on any phone.", num: "03", hoverColor: "var(--cs-teal)", exploreLabel: "Explore Mobile" },
      { id: "ecommerce", icon: "ecommerce",title: "Online Stores",          desc: "High-converting e-commerce stores with seamless checkout, inventory management, and everything you need to sell online.", num: "04", hoverColor: "var(--cs-rust)", exploreLabel: "Explore E-Commerce" },
      { id: "ads",       icon: "ads",      title: "Google, Meta & TikTok Ads", desc: "Paid advertising campaigns that put your business in front of the right people — and turn clicks into real revenue.", num: "05", hoverColor: "var(--cs-cream)", exploreLabel: "Explore Ads" },
      { id: "ai",        icon: "ai",       title: "AI Automation",          desc: "We automate repetitive tasks in your business using AI — from customer responses to lead follow-ups and reporting — so your team focuses on what matters.", num: "06", hoverColor: "var(--cs-teal)", exploreLabel: "Explore AI" },
    ],
  },

  homeCTA: {
    heading: ["Ready to grow", "your business?"],
    sub: "Tell us what you need. We'll reply within 2 working days with a clear plan and honest price.",
    cta1: "Start a project",
    cta2: "See our work",
  },

  /* ─── Work page ──────────────────────────────────────────── */
  work: {
    meta: {
      title: "Work — Cybernova Systems",
      description: "Twelve products, three continents, one stack. Each of these is in production today.",
    },
    hero: {
      eyebrow: "Selected work · 2021 — 2026",
      headlineLine1: ["Things", "we", "shipped"],
      headlineLine2: ["for", "people", "we", "like."],
      lead: "Twelve products, three continents, one stack. Each of these is in production today and run by the team that owns it.",
      stats: [
        { n: 48, suffix: "+", label: "Shipped products" },
        { n: 94, suffix: "%", label: "Repeat clients" },
        { n: 11, suffix: "",  label: "Industries served" },
      ],
    },
    featured: {
      eyebrow: "Featured case · 2025",
      title: "EstateX — a portal that loads.",
      lead: "We replaced a tangled PHP build with a typed Next.js front and a Postgres/Prisma back. Search now returns in 90\u202fms; the team ships features instead of reading stack traces.",
      tags: ["Next.js", "Postgres", "Mapbox", "14\u202fweeks"],
      cta: "Read the case",
    },
    grid: {
      eyebrow: "More projects",
      subtitle: "2022 — 2025",
      cases: [
        { meta: ["FloteAuto",    "2025 · Mobile"],   title: "Owner-mechanic app, end-to-end" },
        { meta: ["Notariat Azur","2024 · Web"],      title: "Editorial relaunch for a notary office" },
        { meta: ["Loop Café",    "2024 · Web app"],  title: "Subscription coffee, run on Stripe" },
        { meta: ["Maison Brut",  "2023 · Web"],      title: "A wine importer, French + English" },
        { meta: ["Atlas HR",     "2023 · Web app"],  title: "Internal tool retired five SaaS" },
        { meta: ["Mira Health",  "2022 · Mobile"],   title: "Patient intake, Quebec-bilingual" },
      ],
    },
    cta: {
      heading: ["Project shaped?", "Let's talk."],
      sub: "The next intake is open through August 2026.",
    },
  },

  /* ─── Studio page ────────────────────────────────────────── */
  studio: {
    meta: {
      title: "Studio — Cybernova Systems",
      description: "A small studio that ships, then sharpens.",
    },
    hero: {
      eyebrow: "Studio · since 2021",
      headlineLine1: ["A", "small", "studio"],
      headlineLine2: ["that", "ships,"],
      headlineLine3: ["then", "sharpens."],
      lead: "Twelve people. Three time-zones. One stack we have actually shipped to production for five years. We work directly with founders, in-house leads, and operators — no account managers, no pitch decks.",
    },
    values: {
      eyebrow: "What we believe",
      heading: "Five rules we keep going back to.",
      items: [
        { num: "01", title: "Fewer projects, deeper.",   body: "Six to eight a year, no more. The team you meet on the call is the team that ships." },
        { num: "02", title: "One stack, well known.",    body: "Next.js, JavaScript, CSS, Postgres, React Native. We run them in production. We hold opinions about them." },
        { num: "03", title: "Calm copy. Calm UI.",       body: "No exclamation marks, no growth-hack patterns. We earn the click with clarity." },
        { num: "04", title: "Ship, then sharpen.",       body: "Real users beat staging environments. We ship narrow slices and harden in production with you." },
        { num: "05", title: "Direct, not polite.",       body: "We will tell you when an idea is wrong. You will tell us when a build is. That is the deal." },
      ],
    },
    team: {
      eyebrow: "The crew",
      subtitle: "12 humans · Paris / Bucharest / Montréal",
      members: [
        { who: "Toma T.",   role: "Founder · Engineering", av: "T" },
        { who: "Sora L.",   role: "Design lead",           av: "S" },
        { who: "Marius P.", role: "Mobile lead",           av: "M" },
        { who: "Hana K.",   role: "Product engineer",      av: "H" },
        { who: "Diego R.",  role: "Front-end",             av: "D" },
        { who: "Aïcha N.",  role: "Front-end",             av: "A" },
        { who: "Léon M.",   role: "Back-end",              av: "L" },
        { who: "Robin V.",  role: "Brand & motion",        av: "R" },
      ],
    },
    cta: {
      heading: ["Want to work", "with us?"],
      sub: "We respond to every brief — usually within two working days.",
    },
  },

  /* ─── Process page ───────────────────────────────────────── */
  process: {
    meta: {
      title: "Process — Cybernova Systems",
      description: "Four phases. Two weekly checkpoints. One Notion you can actually navigate.",
    },
    hero: {
      eyebrow: "Process · 12 to 18 weeks",
      headlineLine1: ["From", "kickoff", "to"],
      headlineLine2: ["keys", "in", "your", "hand."],
      lead: "Four phases. Two weekly checkpoints. One Notion you can actually navigate. We design and build in narrow vertical slices so you see your product earlier — and shape it where it matters.",
    },
    steps: [
      { num: "01", title: "Discovery",       body: "Two weeks of interviews, audits, and a clean problem statement. We surface what is real and what is theatre, then commit to a sharp brief.",       duration: "2 weeks" },
      { num: "02", title: "Design",          body: "Wireframes shaped in shared FigJam, polished into a hi-fi spec. Every screen has a written intent — every component, a clear job.",           duration: "3 weeks" },
      { num: "03", title: "Build",           body: "Typed Next.js front, Postgres / Prisma back, deployed on day one. Two weekly demos. No big-bang launch, no integration week from hell.",       duration: "6–10 weeks" },
      { num: "04", title: "Launch & sharpen",body: "We ship behind a flag, watch the data, and keep iterating for four to eight weeks. Then we hand over a calm, documented codebase.",           duration: "4–8 weeks" },
    ],
    phaseLabel: "Phase",
    checkpoints: "Two checkpoints / week",
    timeline: {
      eyebrow: "Week-by-week",
      subtitle: "~14 weeks · standard project",
      rows: [
        { week: "Week 1–2",   title: "Discovery",        desc: "Workshops, codebase audit, customer interviews. We exit with a written brief, success metrics, and a ranked backlog.", list: ["Stakeholder interviews", "Tech audit", "Brief + success metrics"] },
        { week: "Week 3–5",   title: "Design",           desc: "From rough wireframes to a hi-fi system. Component library is born here and reused for the build.", list: ["IA + wireframes", "Hi-fi screens", "Component library v1"] },
        { week: "Week 6–14",  title: "Build",            desc: "Typed front, typed back, deployed on day one. Two demos a week. Bugs fixed in production behind feature flags.", list: ["Next.js + tRPC", "Postgres / Prisma", "CI / preview envs"] },
        { week: "Week 14–18", title: "Launch & sharpen", desc: "Soft launch, data, iteration. Then a documented hand-off — or a retainer if you want us to keep at it.", list: ["Soft launch + flags", "Analytics + iteration", "Hand-off / retainer"] },
      ],
    },
    cta: {
      heading: ["Sounds like a fit?", "Send us a brief."],
      sub: "A short paragraph is enough to start. We respond within two working days.",
    },
  },

  /* ─── Contact page ───────────────────────────────────────── */
  contact: {
    meta: {
      title: "Contact — Cybernova Systems",
      description: "Tell us what you're building. One paragraph is enough.",
    },
    hero: {
      eyebrow: "Tell us what you're building",
      headlineLine1: ["Send", "us", "a"],
      headlineLine2: ["paragraph."],
      lead: "One paragraph is enough. Tell us the shape of the thing, the rough timeline, and we'll come back within two working days. No forms forwarded to a CRM, no auto-responder.",
      labelEmail: "Email",
      labelOffice: "Office",
      labelIntake: "Open intake",
      officeValue: "Paris · Bucharest · Montréal",
      intakeValue: "Through August 2026",
    },
    form: {
      labelName: "Name",
      labelEmail: "Email",
      labelService: "Service",
      labelBudget: "Budget",
      labelMessage: "The shape of the thing",
      placeholderName: "Your name",
      placeholderEmail: "you@company.com",
      placeholderMessage: "A paragraph is plenty — the problem, the audience, the rough timeline.",
      services: ["Marketing website", "Web application", "Mobile app", "Brand & design", "Other"],
      budgets: ["Under €20k", "€20–40k", "€40–80k", "€80k+", "Not sure yet"],
      submit: "Send brief",
      successTitle: "Message received.",
      successBody: "We'll write back within two working days, from a real human.",
    },
    faq: {
      eyebrow: "FAQ",
      subtitle: "The questions we actually get",
      items: [
        { q: "How long does a project usually take?",      a: "Marketing sites: 6–10 weeks. Web apps: 12–18 weeks. Mobile apps: 14–22 weeks. We scope to the calendar — fixed dates beat fixed scope." },
        { q: "Do you take on equity or revenue-share work?",a: "We do, on the rare project where we have unusually strong conviction. Default is a fixed-fee engagement with a sharp brief." },
        { q: "Can you work with our in-house engineers?",  a: "Yes — and we prefer it where possible. We pair, review PRs, and hand over a stack your team can run on day one." },
        { q: "Where are you based?",                       a: "Paris, Bucharest, and Montréal. We work async with two synchronous demos a week, regardless of where you are." },
        { q: "What does retainer look like after launch?", a: "A flat monthly fee for an agreed slice of capacity — usually one or two engineers and a designer. Cancel anytime with 30 days notice." },
        { q: "Do you sign NDAs?",                          a: "Yes. Mutual NDA is fine before any specifics get exchanged." },
      ],
    },
    cta: {
      heading: ["Or just write", "an email."],
      sub: "hello@cybernova.systems — straight to a real human.",
    },
  },

  /* ─── Shop page ──────────────────────────────────────────── */
  shop: {
    meta: {
      title: "Shop — Custom High-Performance PCs",
      description: "Browse our exclusive line of custom-built, ultra-performance workstations and gaming rigs. Built for scale, designed for awe.",
    },
    hero: {
      title1: "Tools for the",
      title2: "extraordinary.",
      desc: "Handcrafted computational monoliths. Designed for silence, engineered for absolute power.",
    },
    specLabels: { cpu: "Processor", gpu: "Graphics", ram: "Memory" },
    purchaseBtn: "Purchase",
    pcs: [
      {
        id: "nova-core",
        name: "Nova Core.",
        tagline: "The foundation of performance.",
        desc: "Engineered for enthusiasts who demand flawless execution without the excess. Pure, unadulterated speed housed in a minimal footprint.",
        price: "$2,499",
        color: "var(--cs-teal)",
        specs: { cpu: "Ryzen 7 7800X3D", gpu: "RTX 4070 Ti SUPER", ram: "32GB DDR5" },
      },
      {
        id: "quantum-pro",
        name: "Quantum Pro.",
        tagline: "Unbound creativity.",
        desc: "A creator's dream. Massive bandwidth and rendering power, wrapped in a monolithic silence. The ultimate tool for professionals.",
        price: "$4,299",
        color: "var(--cs-rust)",
        specs: { cpu: "Core i9-14900K", gpu: "RTX 4090 24GB", ram: "64GB DDR5" },
      },
      {
        id: "singularity",
        name: "Singularity.",
        tagline: "Beyond all limits.",
        desc: "Custom liquid-cooled architecture designed to shatter benchmarks. An uncompromising beast that redefines what a personal computer can do.",
        price: "$6,899",
        color: "var(--cs-cream)",
        specs: { cpu: "Ryzen 9 7950X", gpu: "Dual RTX 4090", ram: "128GB DDR5" },
      },
    ],
  },

  /* ─── News page ──────────────────────────────────────────── */
  news: {
    meta: {
      title: "News — Cybernova Systems",
      description: "Project launches, process insights, and studio updates from Cybernova Systems.",
    },
    hero: {
      eyebrow: "News & Updates",
      headlineLine1: ["Latest", "from"],
      headlineLine2: ["the", "studio."],
      lead: "Project launches, behind-the-scenes process, and the occasional opinion on building software that lasts.",
    },
    feed: {
      emptyTitle: "Content is on its way.",
      emptyBody: "We're connecting our editorial pipeline. Articles, case studies, and studio updates will appear here soon.",
    },
    cta: {
      heading: ["Got a story?", "We'll read it."],
      sub: "If you're building something worth talking about, we'd love to hear from you.",
    },
  },
};

export default en;
