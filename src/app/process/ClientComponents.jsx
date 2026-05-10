"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Orbits from "@/components/graphics/Orbits";
import { useGSAP } from "@gsap/react";

export function ProcessHero() {
  const root = useRef(null);
  useGSAP(() => {
    if (!root.current) return;
    gsap.fromTo(root.current.querySelectorAll('.split-word'),
      { yPercent: 110 },
      { yPercent: 0, duration: 0.95, stagger: 0.04, ease: 'power3.out' });
    gsap.from(root.current.querySelector('.lead'), { y: 18, opacity: 0, duration: 0.7, delay: 0.6, ease: 'power3.out' });
  }, { scope: root });

  return (
    <section ref={root} className="section-full page-hero surface-heat">
      <Orbits tone="cream" />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <span className="eyebrow"><span className="dot">●</span> Process · 12 to 18 weeks</span>
        <h1 style={{ marginTop: 24, maxWidth: '14ch' }} className="display-1">
          <span className="split-line">{['From','kickoff','to'].map((w, i) => <span key={i} className="split-word" style={{ paddingRight: '0.18em' }}>{w}</span>)}</span>
          <span className="split-line">{['keys','in','your','hand.'].map((w, i) => (
            <span key={i} className="split-word" style={{ paddingRight: '0.18em', color: i === 3 ? 'var(--cs-teal-300)' : 'inherit', fontStyle: i === 3 ? 'italic' : 'normal' }}>{w}</span>
          ))}</span>
        </h1>
        <p className="lead" style={{ marginTop: 28, opacity: 0.92 }}>
          Four phases. Two weekly checkpoints. One Notion you can actually navigate. We design and build in narrow vertical slices so you see your product earlier — and shape it where it matters.
        </p>
      </div>
    </section>
  );
}

export function PinnedSteps() {
  const root = useRef(null);
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const counterRef = useRef(null);
  const total = 4;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current || !trackRef.current) return;
    gsap.to(trackRef.current, {
      x: () => -((total - 1) * window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: root.current,
        start: 'top top',
        end: () => '+=' + (total * window.innerHeight),
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (fillRef.current) fillRef.current.style.width = (self.progress * 100) + '%';
          const idx = Math.min(total, Math.floor(self.progress * total) + 1);
          if (counterRef.current) counterRef.current.textContent = String(idx).padStart(2, '0') + ' / 0' + total;
        }
      }
    });
  }, { scope: root });

  const steps = [
    { num: '01', title: 'Discovery', body: 'Two weeks of interviews, audits, and a clean problem statement. We surface what is real and what is theatre, then commit to a sharp brief.' },
    { num: '02', title: 'Design', body: 'Wireframes shaped in shared FigJam, polished into a hi-fi spec. Every screen has a written intent — every component, a clear job.' },
    { num: '03', title: 'Build', body: 'Typed Next.js front, Postgres / Prisma back, deployed on day one. Two weekly demos. No big-bang launch, no integration week from hell.' },
    { num: '04', title: 'Launch & sharpen', body: 'We ship behind a flag, watch the data, and keep iterating for four to eight weeks. Then we hand over a calm, documented codebase.' },
  ];

  return (
    <section ref={root} className="proc-h-shell surface-ink">
      <span className="proc-h-counter" ref={counterRef}>01 / 0{total}</span>
      <div className="proc-h-bar"><span className="fill" ref={fillRef} /></div>
      <div className="proc-h-track" ref={trackRef}>
        {steps.map((s, i) => (
          <div key={i} className="proc-h-panel" style={{ background: ['var(--cs-forest)','var(--cs-forest-800)','var(--cs-rust)','var(--cs-teal)'][i], color: i === 3 ? 'var(--cs-forest)' : 'var(--cs-cream)' }}>
            <div className="container">
              <span className="num">Phase {s.num}</span>
              <h2 className="display-2" style={{ marginTop: 18 }}>{s.title}</h2>
              <p style={{ marginTop: 22, fontSize: 18, lineHeight: 1.55, maxWidth: '52ch' }}>{s.body}</p>
              <div style={{ marginTop: 36, display: 'flex', gap: 28, flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.75 }}>
                <span>{i === 0 ? '2 weeks' : i === 1 ? '3 weeks' : i === 2 ? '6–10 weeks' : '4–8 weeks'}</span>
                <span>·</span>
                <span>Two checkpoints / week</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Timeline() {
  const root = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    const fill = root.current.querySelector('.timeline-spine .fill');
    const rows = root.current.querySelectorAll('.timeline-row');
    gsap.to(fill, {
      height: '100%', ease: 'none',
      scrollTrigger: { trigger: root.current, start: 'top 60%', end: 'bottom 60%', scrub: true }
    });
    rows.forEach((r) => {
      ScrollTrigger.create({
        trigger: r, start: 'top 70%',
        onEnter: () => r.classList.add('is-on'),
        onLeaveBack: () => r.classList.remove('is-on'),
      });
      gsap.from(r.querySelectorAll('.head, .week, ul'), {
        y: 24, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: r, start: 'top 75%' }
      });
    });
  }, { scope: root });

  const rows = [
    { week: 'Week 1–2', title: 'Discovery', desc: 'Workshops, codebase audit, customer interviews. We exit with a written brief, success metrics, and a ranked backlog.', list: ['Stakeholder interviews', 'Tech audit', 'Brief + success metrics'] },
    { week: 'Week 3–5', title: 'Design', desc: 'From rough wireframes to a hi-fi system. Component library is born here and reused for the build.', list: ['IA + wireframes', 'Hi-fi screens', 'Component library v1'] },
    { week: 'Week 6–14', title: 'Build', desc: 'Typed front, typed back, deployed on day one. Two demos a week. Bugs fixed in production behind feature flags.', list: ['Next.js + tRPC', 'Postgres / Prisma', 'CI / preview envs'] },
    { week: 'Week 14–18', title: 'Launch & sharpen', desc: 'Soft launch, data, iteration. Then a documented hand-off — or a retainer if you want us to keep at it.', list: ['Soft launch + flags', 'Analytics + iteration', 'Hand-off / retainer'] },
  ];

  return (
    <section ref={root} className="section-full surface-paper">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
          <span className="eyebrow"><span className="dot">●</span> Week-by-week</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, opacity: 0.6, letterSpacing: '0.14em', textTransform: 'uppercase' }}>~14 weeks · standard project</span>
        </div>
        <div className="timeline-rail">
          <div className="timeline-spine"><span className="fill" /></div>
          {rows.map((r, i) => (
            <div key={i} className="timeline-row">
              <span className="timeline-node" />
              <div className="week">{r.week}</div>
              <div className="head"><h3>{r.title}</h3><p>{r.desc}</p></div>
              <ul>{r.list.map((it, j) => <li key={j}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
