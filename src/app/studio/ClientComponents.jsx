"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Orbits from "@/components/graphics/Orbits";
import { useGSAP } from "@gsap/react";

export function StudioHero() {
  const root = useRef(null);
  useGSAP(() => {
    if (!root.current) return;
    gsap.fromTo(root.current.querySelectorAll('.split-word'),
      { yPercent: 110 },
      { yPercent: 0, duration: 0.95, stagger: 0.04, ease: 'power3.out' });
    gsap.from(root.current.querySelector('.lead'), { y: 18, opacity: 0, duration: 0.7, delay: 0.6, ease: 'power3.out' });
  }, { scope: root });

  return (
    <section ref={root} className="section-full page-hero surface-paper">
      <Orbits tone="forest" />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <span className="eyebrow"><span className="dot">●</span> Studio · since 2021</span>
        <h1 style={{ marginTop: 24, maxWidth: '14ch' }} className="display-1">
          <span className="split-line">{['A','small','studio'].map((w, i) => <span key={i} className="split-word" style={{ paddingRight: '0.18em' }}>{w}</span>)}</span>
          <span className="split-line">{['that','ships,'].map((w, i) => <span key={i} className="split-word" style={{ paddingRight: '0.18em' }}>{w}</span>)}</span>
          <span className="split-line">{['then','sharpens.'].map((w, i) => (
            <span key={i} className="split-word" style={{ paddingRight: '0.18em', color: i === 1 ? 'var(--cs-rust)' : 'inherit', fontStyle: i === 1 ? 'italic' : 'normal' }}>{w}</span>
          ))}</span>
        </h1>
        <p className="lead" style={{ marginTop: 28 }}>
          Twelve people. Three time-zones. One stack we have actually shipped to production for five years. We work directly with founders, in-house leads, and operators — no account managers, no pitch decks.
        </p>
      </div>
    </section>
  );
}

export function ValuesStack() {
  const root = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    const cards = root.current.querySelectorAll('.value-card');
    gsap.fromTo(cards,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' } });
  }, { scope: root });

  const values = [
    { num: '01', title: 'Fewer projects, deeper.', body: 'Six to eight a year, no more. The team you meet on the call is the team that ships.' },
    { num: '02', title: 'One stack, well known.', body: 'Next.js, JavaScript, CSS, Postgres, React Native. We run them in production. We hold opinions about them.' },
    { num: '03', title: 'Calm copy. Calm UI.', body: 'No exclamation marks, no growth-hack patterns. We earn the click with clarity.' },
    { num: '04', title: 'Ship, then sharpen.', body: 'Real users beat staging environments. We ship narrow slices and harden in production with you.' },
    { num: '05', title: 'Direct, not polite.', body: 'We will tell you when an idea is wrong. You will tell us when a build is. That is the deal.' },
  ];

  return (
    <section ref={root} className="section-full surface-paper-2">
      <div className="container values-shell">
        <aside className="values-side">
          <span className="eyebrow"><span className="dot">●</span> What we believe</span>
          <h2 className="display-2" style={{ marginTop: 18, maxWidth: '12ch' }}>Five rules we keep going back to.</h2>
        </aside>
        <div className="values-list">
          {values.map((v, i) => (
            <article key={i} className="value-card">
              <span className="num">{v.num}</span>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Team() {
  const root = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    const tiles = root.current.querySelectorAll('.team-tile');
    gsap.fromTo(tiles,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' } });
  }, { scope: root });

  const team = [
    { who: 'Toma T.', role: 'Founder · Engineering', av: 'T', tone: '' },
    { who: 'Sora L.',  role: 'Design lead', av: 'S', tone: '' },
    { who: 'Marius P.', role: 'Mobile lead', av: 'M', tone: '' },
    { who: 'Hana K.',  role: 'Product engineer', av: 'H', tone: '' },
    { who: 'Diego R.', role: 'Front-end', av: 'D', tone: '' },
    { who: 'Aïcha N.', role: 'Front-end', av: 'A', tone: '' },
    { who: 'Léon M.',  role: 'Back-end', av: 'L', tone: '' },
    { who: 'Robin V.', role: 'Brand & motion', av: 'R', tone: '' },
  ];

  return (
    <section ref={root} className="section-full surface-paper tight">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 16, marginBottom: 28 }}>
          <span className="eyebrow"><span className="dot">●</span> The crew</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, opacity: 0.6, letterSpacing: '0.14em', textTransform: 'uppercase' }}>12 humans · Paris / Bucharest / Montréal</span>
        </div>
        <div className="team-grid">
          {team.map((p, i) => (
            <article key={i} className={`team-tile ${p.tone}`}>
              <div>
                <div className="role">{p.role}</div>
                <div className="who">{p.who}</div>
              </div>
              <span className="av">{p.av}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
