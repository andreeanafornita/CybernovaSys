"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Orbits from "@/components/graphics/Orbits";
import Counter from "@/components/ui/Counter";

export function WorkHero() {
  const root = useRef(null);
  useGSAP(() => {
    if (!root.current) return;
    gsap.fromTo(root.current.querySelectorAll('.split-word'),
      { yPercent: 110 },
      { yPercent: 0, duration: 0.95, stagger: 0.04, ease: 'power3.out' });
    gsap.from(root.current.querySelector('.lead'), { y: 18, opacity: 0, duration: 0.7, delay: 0.6, ease: 'power3.out' });
    gsap.from(root.current.querySelectorAll('.work-meta-row > *'), { y: 16, opacity: 0, duration: 0.6, stagger: 0.08, delay: 0.8, ease: 'power3.out' });
  }, { scope: root });

  return (
    <section ref={root} className="section-full page-hero surface-ink">
      <Orbits tone="cream" />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <span className="eyebrow"><span className="dot">●</span> Selected work · 2021 — 2026</span>
        <h1 style={{ marginTop: 24, maxWidth: '14ch' }} className="display-1">
          <span className="split-line">{['Things','we','shipped'].map((w, i) => <span key={i} className="split-word" style={{ paddingRight: '0.18em' }}>{w}</span>)}</span>
          <span className="split-line">{['for','people','we','like.'].map((w, i) => (
            <span key={i} className="split-word" style={{ paddingRight: '0.18em', color: i === 3 ? 'var(--cs-teal-300)' : 'inherit', fontStyle: i === 3 ? 'italic' : 'normal' }}>{w}</span>
          ))}</span>
        </h1>
        <p className="lead" style={{ marginTop: 28, opacity: 0.86 }}>
          Twelve products, three continents, one stack. Each of these is in production today and run by the team that owns it.
        </p>
        <div className="work-meta-row" style={{ display: 'flex', gap: 56, marginTop: 64, flexWrap: 'wrap' }}>
          <div className="stat"><span className="n" style={{ fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em', display: 'block' }}><Counter to={48} suffix="+" /></span><span className="l" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.65 }}>Shipped products</span></div>
          <div className="stat"><span className="n" style={{ fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em', display: 'block' }}><Counter to={94} suffix="%" /></span><span className="l" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.65 }}>Repeat clients</span></div>
          <div className="stat"><span className="n" style={{ fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em', display: 'block' }}><Counter to={11} /></span><span className="l" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.65 }}>Industries served</span></div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedCase() {
  const root = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    gsap.fromTo(root.current.querySelector('.visual'),
      { clipPath: 'inset(0 0 100% 0)' },
      { clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 70%' } });
    gsap.fromTo(root.current.querySelectorAll('.case-feature .meta > *'),
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 70%' } });
  }, { scope: root });

  return (
    <section ref={root} className="section-full surface-paper">
      <div className="container">
        <div className="case-feature">
          <div className="visual">
            <div className="decor">
              <svg width="80%" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="200" cy="200" r="190"/><circle cx="200" cy="200" r="140"/><circle cx="200" cy="200" r="90"/>
                <line x1="10" y1="200" x2="390" y2="200"/><line x1="200" y1="10" x2="200" y2="390"/>
              </svg>
            </div>
          </div>
          <div className="meta">
            <span className="eyebrow"><span className="dot">●</span> Featured case · 2025</span>
            <h2 className="display-2" style={{ marginTop: 16, maxWidth: '14ch' }}>EstateX — a portal that loads.</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              We replaced a tangled PHP build with a typed Next.js front and a Postgres/Prisma back. Search now returns in 90&#8239;ms; the team ships features instead of reading stack traces.
            </p>
            <div className="tags">
              <span className="tag">Next.js</span>
              <span className="tag">Postgres</span>
              <span className="tag">Mapbox</span>
              <span className="tag">14&#8239;weeks</span>
            </div>
            <div style={{ marginTop: 28 }}>
              <a className="btn btn-primary" href="#">Read the case <span className="arrow"><ArrowRight size={16} /></span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseGrid() {
  const root = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    const cells = root.current.querySelectorAll('.case-cell');
    gsap.fromTo(cells,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' } });
  }, { scope: root });

  const cases = [
    { tone: '--ink',  meta: ['FloteAuto', '2025 · Mobile'], title: 'Owner-mechanic app, end-to-end' },
    { tone: '--rust', meta: ['Notariat Azur', '2024 · Web'], title: 'Editorial relaunch for a notary office' },
    { tone: '--teal', meta: ['Loop Café', '2024 · Web app'], title: 'Subscription coffee, run on Stripe' },
    { tone: '',       meta: ['Maison Brut', '2023 · Web'], title: 'A wine importer, French + English' },
    { tone: '--ink',  meta: ['Atlas HR', '2023 · Web app'], title: 'Internal tool retired five SaaS' },
    { tone: '--rust', meta: ['Mira Health', '2022 · Mobile'], title: 'Patient intake, Quebec-bilingual' },
  ];

  return (
    <section ref={root} className="section-full surface-paper-2 tight">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
          <span className="eyebrow"><span className="dot">●</span> More projects</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, opacity: 0.6, letterSpacing: '0.14em', textTransform: 'uppercase' }}>2022 — 2025</span>
        </div>
        <div className="case-grid">
          {cases.map((c, i) => (
            <article key={i} className={`case-cell ${c.tone}`}>
              <div className="top"><span>{c.meta[0]}</span><span>{c.meta[1]}</span></div>
              <h3>{c.title}</h3>
              <div className="decor">
                <svg width="280" height="280" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="200" cy="200" r="190"/><circle cx="200" cy="200" r="140"/><circle cx="200" cy="200" r="90"/>
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
