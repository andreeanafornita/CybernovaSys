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
    eyebrow: "Cybernova Systems · Agenție Digitală din 2021",
    headlineLine1: ["Construim website-uri,", "aplicații &"],
    headlineLine2: ["rulăm reclame", "care", "convertesc."],
    lead: "Creăm website-uri personalizate, aplicații mobile și magazine online — și rulăm reclame pe Google, Facebook, Instagram și TikTok care aduc clienți reali în afacerea ta. Tot ce are nevoie brandul tău pentru a crește online, într-un singur loc.",
    cta1: "Începe un proiect",
    cta2: "Vezi portofoliul",
    stats: [
      { n: 48, suffix: "+", label: "Proiecte livrate" },
      { n: 6,  suffix: "+", label: "Ani client mediu" },
      { n: 12, suffix: "",  label: "Specialiști în echipă" },
      { n: 3,  suffix: "",  label: "Continente deservite" },
    ],
  },

  marquee: {
    items: ["Cybernova Systems", "Website-uri", "Aplicații Web", "Aplicații Mobile", "Google Ads", "Meta Ads", "TikTok Ads", "Automatizări AI", "Făcut în UE"],
  },

  manifesto: {
    text: "Orice afacere merită o prezență online puternică. Construim website-uri și aplicații care arată impecabil, se încarcă rapid și transformă vizitatorii în clienți — apoi rulăm reclame care îi aduc înapoi.",
    emphasisWords: ["puternică", "clienți", "reclame"],
  },

  servicesStack: {
    eyebrow: "Ce facem",
    scrollHint: "Derulează pentru mai mult",
    services: [
      {
        num: "01 / Serviciu",
        title: "Website-uri & Magazine Online",
        body: "Proiectăm și construim website-uri profesionale și magazine online pentru orice tip de afacere — indiferent că vinzi produse, oferi servicii sau vrei să-ți prezinți brandul. Rapide, moderne și gata să crească odată cu tine.",
        points: ["Site-uri de prezentare & portofoliu", "Magazine online (e-commerce)", "Platforme de rezervări & programări", "Website-uri B2B & B2C"],
      },
      {
        num: "02 / Serviciu",
        title: "Aplicații Web & Mobile",
        body: "Ai nevoie de o platformă personalizată, un portal pentru clienți sau o aplicație mobilă pentru afacerea ta? Construim instrumente digitale adaptate care automatizează procesele tale și fac viața echipei și clienților mai ușoară — pe orice dispozitiv.",
        points: ["Platforme de business personalizate", "Aplicații iOS & Android", "Portaluri & dashboard-uri pentru clienți", "Instrumente interne de management"],
      },
      {
        num: "03 / Serviciu",
        title: "Publicitate Plătită — Google, Meta, TikTok",
        body: "Gestionăm campanii de publicitate pe Google, Facebook, Instagram și TikTok care aduc oamenii potriviți la afacerea ta. Ne ocupăm de tot: strategie, crearea reclamelor, targetare și optimizare — ca tu să obții mai mulți clienți pentru bugetul tău.",
        points: ["Google Search & Shopping Ads", "Facebook & Instagram Ads", "TikTok Ads pentru e-commerce", "Management complet & raportare"],
      },
    ],
  },

  horizontalWork: {
    eyebrow: "Proiecte selectate",
    allProjects: "Toate proiectele",
    cases: [
      { img: "/mockup-estatex.png",   meta: ["EstateX", "2025 · Platformă Imobiliară"], title: "Platformă de căutare imobiliară reconstruită de la zero", desc: "Un motor modern de listare imobiliară cu căutare pe hartă și filtre instantanee. A înlocuit un sistem vechi și a redus timpul de căutare cu 90%." },
      { img: "/mockup-floteauto.png", meta: ["FloteAuto", "2025 · Aplicație Mobilă"], title: "Aplicație auto pentru proprietari & mecanici", desc: "O aplicație nativă iOS & Android care ține proprietarii de mașini conectați cu mecanicul lor — istoric service, remindere și raportare foto dintr-o atingere." },
      { img: "/mockup-ecommerce.png", meta: ["Loop Café", "2024 · E-Commerce"], title: "Magazine online de cafea pe abonament cu Stripe", desc: "Abonamente gestionate de client, opțiuni de pauză/reluare și cadouri. Construit în două săptămâni, generând venituri de trei ani și numărând." },
      { img: "/mockup-ads.png",       meta: ["Multi-Client", "2025 · Reclame Plătite"], title: "Campanii Google & Meta cu 4× ROAS", desc: "Management complet de campanii pentru afaceri de retail și servicii — strategie, creative, targetare și raportare săptămânală." },
    ],
  },

  servicesBento: {
    eyebrow: "Serviciile noastre",
    heading: "Tot ce ai nevoie ca să crești online.",
    services: [
      { id: "marketing", icon: "web",       title: "Website-uri de Prezentare",      desc: "Website-uri profesionale care îți prezintă afacerea 24/7, se încarcă instant și transformă vizitatorii în lead-uri sau clienți.", num: "01", hoverColor: "var(--cs-cream)", exploreLabel: "Explorează Website-uri" },
      { id: "web-apps",  icon: "app",       title: "Aplicații Web",                  desc: "Platforme personalizate, portaluri pentru clienți și instrumente interne construite pentru modul în care funcționează afacerea ta.", num: "02", hoverColor: "var(--cs-rust)", exploreLabel: "Explorează Aplicații Web" },
      { id: "mobile",    icon: "mobile",    title: "Aplicații Mobile",               desc: "Aplicații iOS și Android pe care clienții tăi le vor adora — proiectate de la zero pentru cea mai bună experiență pe orice telefon.", num: "03", hoverColor: "var(--cs-teal)", exploreLabel: "Explorează Mobile" },
      { id: "ecommerce", icon: "ecommerce", title: "Magazine Online",                desc: "Magazine online cu conversie ridicată, cu checkout ușor, management de inventar și tot ce ai nevoie pentru a vinde online.", num: "04", hoverColor: "var(--cs-rust)", exploreLabel: "Explorează E-Commerce" },
      { id: "ads",       icon: "ads",       title: "Google, Meta & TikTok Ads",      desc: "Campanii de publicitate plătită care pun afacerea ta în fața oamenilor potriviți — și transformă click-urile în venituri reale.", num: "05", hoverColor: "var(--cs-cream)", exploreLabel: "Explorează Reclame" },
      { id: "ai",        icon: "ai",        title: "Automatizări cu AI",             desc: "Automatizăm sarcinile repetitive din afacerea ta cu AI — de la răspunsuri pentru clienți la follow-up-uri și raportare — ca echipa ta să se concentreze pe ce contează.", num: "06", hoverColor: "var(--cs-teal)", exploreLabel: "Explorează AI" },
    ],
  },

  homeCTA: {
    heading: ["Gata să crești", "afacerea?"],
    sub: "Spune-ne ce ai nevoie. Îți răspundem în 2 zile lucrătoare cu un plan clar și un preț corect.",
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
