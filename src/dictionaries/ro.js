const ro = {
  lang: "ro",

  /* ─── Nav ───────────────────────────────────────────────── */
  nav: {
    links: [
      { href: "/work",    label: "Portofoliu", key: "work" },
      { href: "/studio",  label: "Studio",     key: "studio" },
      { href: "/process", label: "Proces",     key: "process" },
      { href: "/shop",    label: "Shop",       key: "shop" },
      { href: "/news",    label: "Noutăți",   key: "news" },
    ],
    cta:      "Începe un proiect",
    ctaFlip:  "Hai să-l facem",
    langSwitch: "EN",
    langSwitchLabel: "Switch to English",
  },

  /* ─── Footer ─────────────────────────────────────────────── */
  footer: {
    studioDesc: "Un studio independent care construiește website-uri, aplicații web și mobile pentru echipe care lansează lucruri noi.",
    col_sitemap: "Hartă site",
    col_services: "Servicii",
    col_contact: "Contact",
    sitemapLinks: [
      { href: "/",        label: "Acasă" },
      { href: "/work",    label: "Portofoliu" },
      { href: "/studio",  label: "Studio" },
      { href: "/process", label: "Proces" },
      { href: "/news",    label: "Noutăți" },
      { href: "/contact", label: "Contact" },
    ],
    serviceLinks: [
      { href: "/process#web",    label: "Website-uri de prezentare" },
      { href: "/process#app",    label: "Aplicații web" },
      { href: "/process#mobile", label: "Aplicații mobile" },
      { href: "/process#design", label: "Brand & design" },
    ],
    built: "Construit intern, în JS & CSS.",
    copy: "© 2026 Cybernova Systems",
  },

  /* ─── Home ───────────────────────────────────────────────── */
  hero: {
    eyebrow: "Cybernova Systems · Est. 2021",
    headlineLine1: ["Website-uri,", "aplicații web,", "mobile —"],
    headlineLine2: ["lansate,", "nu", "arhivate."],
    lead: "Suntem un studio mic care construiește suprafețele digitale pe care echipele în creștere le lansează efectiv — rapid, calm și construit să reziste după demo.",
    cta1: "Începe un proiect",
    cta2: "Vezi portofoliul",
    stats: [
      { n: 48, suffix: "+", label: "Produse lansate" },
      { n: 6,  suffix: "",  label: "Ani client mediu" },
      { n: 12, suffix: "",  label: "Echipă senior" },
      { n: 3,  suffix: "",  label: "Continente deservite" },
    ],
  },

  marquee: {
    items: ["Cybernova Systems", "Website-uri", "Aplicații web", "Aplicații mobile", "Sisteme de brand", "Făcut în UE"],
  },

  manifesto: {
    text: "Proiectăm și construim software calm, cu opinii clare. Luăm decizia când contează. Livrăm — apoi îmbunătățim. Munca noastră rulează în producție ani, nu săptămâni.",
    emphasisWords: ["Livrăm", "îmbunătățim.", "producție"],
  },

  servicesStack: {
    eyebrow: "Ce facem",
    scrollHint: "Derulează",
    services: [
      {
        num: "01 / Serviciu",
        title: "Website-uri de prezentare",
        body: "Site-uri care se încarcă rapid, scalează la sute de pagini și rezistă în ziua în care un co-fondator rescrie homepage-ul la 23:00. Construite în Next.js, deploy pe edge.",
        points: ["Fluxuri editoriale CMS", "Edge-rendered, A+ Lighthouse", "Motion + direcție interacțiune", "Analytics & A/B din prima zi"],
      },
      {
        num: "02 / Serviciu",
        title: "Aplicații web",
        body: "Tool-uri interne, dashboard-uri, portaluri pentru clienți — typed end-to-end și instrumentate din primul commit. Proiectate să fie trăite, nu doar demo-uite.",
        points: ["Stack Next.js + tRPC tipizat", "Auth, billing, roluri, audituri", "Realtime + joburi în background", "Observabilitate inclusă"],
      },
      {
        num: "03 / Serviciu",
        title: "Aplicații mobile",
        body: "Aplicații iOS și Android cu feeling nativ pentru produse unde telefonul este produsul. Proiectate în tandem cu web-ul, astfel încât clienții văd un singur brand pe trei suprafețe.",
        points: ["React Native + Expo", "Push, deep-links, sharing", "Sincronizare offline-first", "Operațiuni TestFlight + Play Console"],
      },
    ],
  },

  horizontalWork: {
    eyebrow: "Proiecte selectate",
    allProjects: "Toate proiectele",
    cases: [
      { meta: ["EstateX", "2025 · Aplicație web"], title: "Motor de listare pentru un portal imobiliar", desc: "Front Next.js tipizat, back Postgres/Prisma, căutare cu Mapbox. Am înlocuit un build PHP anchilozat în 14 săptămâni." },
      { meta: ["FloteAuto", "2025 · Mobile + Web"], title: "Aplicație proprietar-mecanic, end-to-end", desc: "Jurnal service, preluare foto, căutare SKU piese. iOS/Android nativ și dashboard pentru atelier, proiectate în tandem." },
      { meta: ["Notariat Azur", "2024 · Site de prezentare"], title: "Relancare editorială pentru un birou notarial", desc: "Calm, riguros, bilingv franceză. Flow de programare conectat la API-ul lor de gestiune cazuri." },
      { meta: ["Loop Café", "2024 · Aplicație web"], title: "Abonament cafea, rulat pe Stripe", desc: "Management self-serve, pauze/reluări, fluxuri cadouri. Build în două săptămâni, trei ani în producție și numărând." },
    ],
  },

  servicesBento: {
    eyebrow: "Ce facem",
    heading: "Servicii adaptate pentru creștere.",
    services: [
      { id: "marketing", icon: "web",       title: "Website-uri de prezentare", desc: "Site-uri de înaltă performanță construite pe Next.js, optimizate pentru scoruri A+ Lighthouse și fluxuri editoriale.", num: "01", hoverColor: "var(--cs-cream)", exploreLabel: "Explorează Website-uri" },
      { id: "web-apps",  icon: "app",       title: "Aplicații web",             desc: "Tool-uri interne, portaluri pentru clienți și dashboard-uri în timp real, proiectate să fie trăite.", num: "02", hoverColor: "var(--cs-rust)", exploreLabel: "Explorează Web" },
      { id: "brand",     icon: "brand",     title: "Sisteme de brand",          desc: "Identitate, tipografie și sisteme de design care scalează pe suprafețe și mențin brandul coerent.", num: "03", hoverColor: "var(--cs-teal)", exploreLabel: "Explorează Brand" },
      { id: "ecommerce", icon: "ecommerce", title: "E-Commerce",                desc: "Magazine online cu conversie ridicată, construite cu arhitecturi headless moderne.", num: "04", hoverColor: "var(--cs-rust)", exploreLabel: "Explorează E-Commerce" },
      { id: "uiux",      icon: "audit",     title: "Audituri UI/UX",            desc: "Analizăm în profunzime analytics-urile și fluxurile pentru a câștiga click-ul cu claritate, nu cu growth-hacks.", num: "05", hoverColor: "var(--cs-teal)", exploreLabel: "Explorează Audituri" },
      { id: "mobile",    icon: "mobile",    title: "Aplicații mobile",          desc: "Aplicații iOS și Android cu feeling nativ. React Native + Expo, proiectate în tandem cu web-ul.", num: "06", hoverColor: "var(--cs-cream)", exploreLabel: "Explorează Mobile" },
    ],
  },

  homeCTA: {
    heading: ["Ai ceva", "de lansat?"],
    sub: "Preluăm șase până la opt proiecte pe an. Înscrierea pentru proiecte noi este deschisă până în august 2026.",
    cta1: "Începe un proiect",
    cta2: "Vezi portofoliul",
  },

  /* ─── Work page ──────────────────────────────────────────── */
  work: {
    meta: {
      title: "Portofoliu — Cybernova Systems",
      description: "Douăsprezece produse, trei continente, un stack. Fiecare dintre acestea este în producție astăzi.",
    },
    hero: {
      eyebrow: "Portofoliu selectat · 2021 — 2026",
      headlineLine1: ["Lucruri", "pe care", "le-am livrat"],
      headlineLine2: ["pentru", "oameni", "pe care", "îi prețuim."],
      lead: "Douăsprezece produse, trei continente, un stack. Fiecare dintre acestea este în producție astăzi și rulat de echipa care îl deține.",
      stats: [
        { n: 48, suffix: "+", label: "Produse livrate" },
        { n: 94, suffix: "%", label: "Clienți recurenți" },
        { n: 11, suffix: "",  label: "Industrii deservite" },
      ],
    },
    featured: {
      eyebrow: "Proiect de referință · 2025",
      title: "EstateX — un portal care se încarcă.",
      lead: "Am înlocuit un build PHP încâlcit cu un front Next.js tipizat și un back Postgres/Prisma. Căutarea returnează acum în 90\u202fms; echipa livrează funcționalități în loc să citească stack trace-uri.",
      tags: ["Next.js", "Postgres", "Mapbox", "14\u202fsăptămâni"],
      cta: "Citește studiul de caz",
    },
    grid: {
      eyebrow: "Mai multe proiecte",
      subtitle: "2022 — 2025",
      cases: [
        { meta: ["FloteAuto",    "2025 · Mobile"],         title: "Aplicație proprietar-mecanic, end-to-end" },
        { meta: ["Notariat Azur","2024 · Web"],            title: "Relancare editorială pentru un birou notarial" },
        { meta: ["Loop Café",    "2024 · Aplicație web"],  title: "Abonament cafea, rulat pe Stripe" },
        { meta: ["Maison Brut",  "2023 · Web"],            title: "Un importator de vinuri, franceză + engleză" },
        { meta: ["Atlas HR",     "2023 · Aplicație web"],  title: "Tool intern care a pensionat cinci SaaS-uri" },
        { meta: ["Mira Health",  "2022 · Mobile"],         title: "Preluare pacienți, bilingv Quebec" },
      ],
    },
    cta: {
      heading: ["Ai un proiect?", "Vorbim."],
      sub: "Înscrierea pentru proiecte noi este deschisă până în august 2026.",
    },
  },

  /* ─── Studio page ────────────────────────────────────────── */
  studio: {
    meta: {
      title: "Studio — Cybernova Systems",
      description: "Un studio mic care livrează, apoi îmbunătățește.",
    },
    hero: {
      eyebrow: "Studio · din 2021",
      headlineLine1: ["Un", "studio", "mic"],
      headlineLine2: ["care", "livrează,"],
      headlineLine3: ["apoi", "îmbunătățește."],
      lead: "Doisprezece oameni. Trei fusuri orare. Un stack pe care l-am livrat efectiv în producție timp de cinci ani. Lucrăm direct cu fondatori, leads interni și operatori — fără account managers, fără pitch decks.",
    },
    values: {
      eyebrow: "Ce credem",
      heading: "Cinci reguli la care revenim mereu.",
      items: [
        { num: "01", title: "Mai puține proiecte, mai profunde.", body: "Șase până la opt pe an, nu mai mult. Echipa cu care te întâlnești la call este echipa care livrează." },
        { num: "02", title: "Un stack, bine cunoscut.",          body: "Next.js, JavaScript, CSS, Postgres, React Native. Le rulăm în producție. Avem opinii despre ele." },
        { num: "03", title: "Copy calm. UI calm.",               body: "Fără semne de exclamare, fără pattern-uri de growth-hack. Câștigăm click-ul cu claritate." },
        { num: "04", title: "Livrăm, apoi îmbunătățim.",        body: "Utilizatorii reali bat mediile de staging. Livrăm tranșe înguste și consolidăm în producție împreună cu tine." },
        { num: "05", title: "Direcți, nu politicoși.",          body: "Îți spunem când o idee e greșită. Tu ne spui când un build e greșit. Acesta e înțelegerea." },
      ],
    },
    team: {
      eyebrow: "Echipa",
      subtitle: "12 oameni · Paris / București / Montréal",
      members: [
        { who: "Toma T.",   role: "Fondator · Inginerie",  av: "T" },
        { who: "Sora L.",   role: "Lead design",           av: "S" },
        { who: "Marius P.", role: "Lead mobile",           av: "M" },
        { who: "Hana K.",   role: "Inginer de produs",     av: "H" },
        { who: "Diego R.",  role: "Front-end",             av: "D" },
        { who: "Aïcha N.",  role: "Front-end",             av: "A" },
        { who: "Léon M.",   role: "Back-end",              av: "L" },
        { who: "Robin V.",  role: "Brand & motion",        av: "R" },
      ],
    },
    cta: {
      heading: ["Vrei să lucrezi", "cu noi?"],
      sub: "Răspundem la fiecare brief — de obicei în două zile lucrătoare.",
    },
  },

  /* ─── Process page ───────────────────────────────────────── */
  process: {
    meta: {
      title: "Proces — Cybernova Systems",
      description: "Patru faze. Două checkpointuri săptămânale. Un Notion prin care poți naviga efectiv.",
    },
    hero: {
      eyebrow: "Proces · 12 până la 18 săptămâni",
      headlineLine1: ["De la", "kickoff", "la"],
      headlineLine2: ["cheile", "în", "mâna", "ta."],
      lead: "Patru faze. Două checkpointuri săptămânale. Un Notion prin care poți naviga efectiv. Proiectăm și construim în tranșe verticale înguste, astfel încât să-ți vezi produsul mai devreme — și să-l modelezi acolo unde contează.",
    },
    steps: [
      { num: "01", title: "Descoperire",       body: "Două săptămâni de interviuri, audituri și o declarație clară a problemei. Identificăm ce e real și ce e teatru, apoi ne angajăm la un brief clar.",           duration: "2 săptămâni" },
      { num: "02", title: "Design",            body: "Wireframe-uri conturate în FigJam partajat, finisate într-un spec hi-fi. Fiecare ecran are o intenție scrisă — fiecare componentă, un rol clar.",           duration: "3 săptămâni" },
      { num: "03", title: "Construcție",       body: "Front Next.js tipizat, back Postgres / Prisma, deploy din prima zi. Două demo-uri săptămânale. Fără lansare big-bang, fără săptămână de integrare din coșmar.", duration: "6–10 săptămâni" },
      { num: "04", title: "Lansare & șlefuire",body: "Livrăm în spatele unui flag, urmărim datele și continuăm iterațiile timp de patru până la opt săptămâni. Apoi predăm o codebase calmă și documentată.",    duration: "4–8 săptămâni" },
    ],
    phaseLabel: "Faza",
    checkpoints: "Două checkpointuri / săptămână",
    timeline: {
      eyebrow: "Săptămână cu săptămână",
      subtitle: "~14 săptămâni · proiect standard",
      rows: [
        { week: "Săpt. 1–2",   title: "Descoperire",        desc: "Workshop-uri, audit codebase, interviuri cu clienți. Ieșim cu un brief scris, metrici de succes și un backlog prioritizat.", list: ["Interviuri stakeholderi", "Audit tehnic", "Brief + metrici de succes"] },
        { week: "Săpt. 3–5",   title: "Design",             desc: "De la wireframe-uri grosiere la un sistem hi-fi. Biblioteca de componente se naște aici și este reutilizată la construcție.", list: ["IA + wireframe-uri", "Ecrane hi-fi", "Bibliotecă componente v1"] },
        { week: "Săpt. 6–14",  title: "Construcție",        desc: "Front tipizat, back tipizat, deploy din prima zi. Două demo-uri pe săptămână. Bug-uri rezolvate în producție în spatele feature flags.", list: ["Next.js + tRPC", "Postgres / Prisma", "CI / preview envs"] },
        { week: "Săpt. 14–18", title: "Lansare & șlefuire", desc: "Lansare soft, date, iterație. Apoi o predare documentată — sau un retainer dacă vrei să continuăm.", list: ["Lansare soft + flags", "Analytics + iterație", "Predare / retainer"] },
      ],
    },
    cta: {
      heading: ["Sună ca o potrivire?", "Trimite-ne un brief."],
      sub: "Un paragraf scurt este suficient pentru a începe. Răspundem în două zile lucrătoare.",
    },
  },

  /* ─── Contact page ───────────────────────────────────────── */
  contact: {
    meta: {
      title: "Contact — Cybernova Systems",
      description: "Spune-ne ce construiești. Un paragraf este suficient.",
    },
    hero: {
      eyebrow: "Spune-ne ce construiești",
      headlineLine1: ["Trimite-ne", "un"],
      headlineLine2: ["paragraf."],
      lead: "Un paragraf este suficient. Spune-ne forma lucrului, cronologia aproximativă, și revenim în două zile lucrătoare. Niciun formular redirecționat la un CRM, niciun auto-responder.",
      labelEmail: "Email",
      labelOffice: "Birouri",
      labelIntake: "Intake deschis",
      officeValue: "Paris · București · Montréal",
      intakeValue: "Până în august 2026",
    },
    form: {
      labelName: "Nume",
      labelEmail: "Email",
      labelService: "Serviciu",
      labelBudget: "Buget",
      labelMessage: "Forma lucrului",
      placeholderName: "Numele tău",
      placeholderEmail: "tu@companie.com",
      placeholderMessage: "Un paragraf este suficient — problema, publicul, cronologia aproximativă.",
      services: ["Website de prezentare", "Aplicație web", "Aplicație mobilă", "Brand & design", "Altele"],
      budgets: ["Sub €20k", "€20–40k", "€40–80k", "€80k+", "Nu știu încă"],
      submit: "Trimite brieful",
      successTitle: "Mesaj primit.",
      successBody: "Îți scriem înapoi în două zile lucrătoare, de la un om real.",
    },
    faq: {
      eyebrow: "FAQ",
      subtitle: "Întrebările pe care le primim efectiv",
      items: [
        { q: "Cât durează de obicei un proiect?",            a: "Site-uri de prezentare: 6–10 săptămâni. Aplicații web: 12–18 săptămâni. Aplicații mobile: 14–22 săptămâni. Scopăm la calendar — datele fixe bat scopul fix." },
        { q: "Luați proiecte pe equity sau revenue-share?",  a: "Da, pe proiectul rar unde avem o convingere neobișnuit de puternică. Implicit este un angajament la preț fix cu un brief clar." },
        { q: "Puteți lucra cu inginerii noștri interni?",    a: "Da — și preferăm asta unde e posibil. Facem perechi, review la PRs și predăm un stack pe care echipa ta îl poate rula din prima zi." },
        { q: "Unde sunteți bazați?",                         a: "Paris, București și Montréal. Lucrăm async cu două demo-uri sincrone pe săptămână, indiferent unde ești." },
        { q: "Cum arată un retainer după lansare?",          a: "O taxă lunară fixă pentru o capacitate convenită — de obicei unu sau doi ingineri și un designer. Anulare oricând cu 30 de zile preaviz." },
        { q: "Semnați NDA-uri?",                             a: "Da. NDA mutual este în regulă înainte de orice schimb de detalii specifice." },
      ],
    },
    cta: {
      heading: ["Sau scrie", "un email."],
      sub: "hello@cybernova.systems — direct la un om real.",
    },
  },

  /* ─── Shop page ──────────────────────────────────────────── */
  shop: {
    meta: {
      title: "Shop — PC-uri custom de înaltă performanță",
      description: "Descoperă linia noastră exclusivă de workstation-uri și gaming rigs construite custom. Built for scale, designed for awe.",
    },
    hero: {
      title1: "Unelte pentru",
      title2: "extraordinar.",
      desc: "Monoliți computaționali artizanali. Proiectați pentru liniște, ingineriți pentru putere absolută.",
    },
    specLabels: { cpu: "Procesor", gpu: "Grafică", ram: "Memorie" },
    purchaseBtn: "Cumpără",
    pcs: [
      {
        id: "nova-core",
        name: "Nova Core.",
        tagline: "Fundația performanței.",
        desc: "Inginerat pentru entuziaști care cer execuție impecabilă fără exces. Viteză pură, neadulterată, într-un ambalaj minimal.",
        price: "$2,499",
        color: "var(--cs-teal)",
        specs: { cpu: "Ryzen 7 7800X3D", gpu: "RTX 4070 Ti SUPER", ram: "32GB DDR5" },
      },
      {
        id: "quantum-pro",
        name: "Quantum Pro.",
        tagline: "Creativitate fără limite.",
        desc: "Visul unui creator. Bandă largă masivă și putere de randare, învelite într-o liniște monolitică. Unealta supremă pentru profesioniști.",
        price: "$4,299",
        color: "var(--cs-rust)",
        specs: { cpu: "Core i9-14900K", gpu: "RTX 4090 24GB", ram: "64GB DDR5" },
      },
      {
        id: "singularity",
        name: "Singularity.",
        tagline: "Dincolo de orice limite.",
        desc: "Arhitectură cu răcire lichidă customizată, proiectată să spargă benchmark-uri. O bestie fără compromisuri care redefinește ce poate face un computer personal.",
        price: "$6,899",
        color: "var(--cs-cream)",
        specs: { cpu: "Ryzen 9 7950X", gpu: "Dual RTX 4090", ram: "128GB DDR5" },
      },
    ],
  },

  /* ─── News page ──────────────────────────────────────────── */
  news: {
    meta: {
      title: "Noutăți — Cybernova Systems",
      description: "Lansări de proiecte, perspective de proces și actualizări din studio de la Cybernova Systems.",
    },
    hero: {
      eyebrow: "Noutăți & Actualizări",
      headlineLine1: ["Ultimele", "din"],
      headlineLine2: ["studio."],
      lead: "Lansări de proiecte, culisele procesului și ocazionala opinie despre construirea de software care rezistă.",
    },
    feed: {
      emptyTitle: "Conținutul vine pe drum.",
      emptyBody: "Conectăm pipeline-ul editorial. Articole, studii de caz și actualizări din studio vor apărea curând.",
    },
    cta: {
      heading: ["Ai o poveste?", "O citim."],
      sub: "Dacă construiești ceva care merită discutat, ne-ar plăcea să auzim de la tine.",
    },
  },
};

export default ro;
