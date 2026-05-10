"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowIcon } from "@/components/icons";
import { useGSAP } from "@gsap/react";

export function ContactHero() {
  const root = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: 'Marketing website', budget: '€20–40k', message: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  useGSAP(() => {
    if (!root.current) return;
    gsap.fromTo(root.current.querySelectorAll('.split-word'),
      { yPercent: 110 },
      { yPercent: 0, duration: 0.95, stagger: 0.04, ease: 'power3.out' });
    gsap.from(root.current.querySelector('.contact-form'), { y: 30, opacity: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' });
    gsap.from(root.current.querySelector('.contact-side .lead'), { y: 18, opacity: 0, duration: 0.7, delay: 0.5, ease: 'power3.out' });
    gsap.from(root.current.querySelectorAll('.contact-side .info-row'), { y: 14, opacity: 0, duration: 0.6, stagger: 0.08, delay: 0.6, ease: 'power3.out' });
  }, { scope: root });

  return (
    <section ref={root} className="section-full surface-teal">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div className="contact-side">
          <span className="eyebrow"><span className="dot">●</span> Tell us what you're building</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(3rem, 1rem + 6vw, 6rem)', lineHeight: 0.98, letterSpacing: '-0.035em', margin: '24px 0 24px' }}>
            <span className="split-line">{['Send','us','a'].map((w, i) => <span key={i} className="split-word" style={{ paddingRight: '0.18em' }}>{w}</span>)}</span>
            <span className="split-line">{['paragraph.'].map((w, i) => <span key={i} className="split-word" style={{ paddingRight: '0.18em', color: 'var(--cs-rust)', fontStyle: 'italic' }}>{w}</span>)}</span>
          </h1>
          <p className="lead" style={{ marginBottom: 32 }}>
            One paragraph is enough. Tell us the shape of the thing, the rough timeline, and we'll come back within two working days. No forms forwarded to a CRM, no auto-responder.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="info-row" style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid color-mix(in oklab, currentColor 22%, transparent)', paddingTop: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.65 }}>Email</span>
              <a href="mailto:hello@cybernova.systems" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>hello@cybernova.systems</a>
            </div>
            <div className="info-row" style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid color-mix(in oklab, currentColor 22%, transparent)', paddingTop: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.65 }}>Office</span>
              <span style={{ fontWeight: 600 }}>Paris · Bucharest · Montréal</span>
            </div>
            <div className="info-row" style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid color-mix(in oklab, currentColor 22%, transparent)', paddingTop: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.65 }}>Open intake</span>
              <span style={{ fontWeight: 600 }}>Through August 2026</span>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          {submitted ? (
            <div style={{ padding: '32px 8px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, letterSpacing: '-0.02em', marginBottom: 10 }}>Message received.</div>
              <p style={{ opacity: 0.8, fontSize: 15 }}>We'll write back within two working days, from a real human.</p>
            </div>
          ) : (
            <>
              <div className="field-row">
                <div className="field"><label>Name</label><input value={form.name} onChange={set('name')} placeholder="Your name" required /></div>
                <div className="field"><label>Email</label><input type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" required /></div>
              </div>
              <div className="field-row">
                <div className="field"><label>Service</label>
                  <select value={form.service} onChange={set('service')}>
                    <option>Marketing website</option><option>Web application</option><option>Mobile app</option><option>Brand &amp; design</option><option>Other</option>
                  </select>
                </div>
                <div className="field"><label>Budget</label>
                  <select value={form.budget} onChange={set('budget')}>
                    <option>Under €20k</option><option>€20–40k</option><option>€40–80k</option><option>€80k+</option><option>Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="field"><label>The shape of the thing</label><textarea value={form.message} onChange={set('message')} placeholder="A paragraph is plenty — the problem, the audience, the rough timeline." required /></div>
              <button className="btn btn-primary" type="submit" style={{ alignSelf: 'flex-start' }}>Send brief <span className="arrow"><ArrowIcon size={16} /></span></button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export function FAQ() {
  const root = useRef(null);
  const [open, setOpen] = useState(0);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    gsap.fromTo(root.current.querySelectorAll('.faq-item'),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' } });
  }, { scope: root });

  const items = [
    { q: 'How long does a project usually take?', a: 'Marketing sites: 6–10 weeks. Web apps: 12–18 weeks. Mobile apps: 14–22 weeks. We scope to the calendar — fixed dates beat fixed scope.' },
    { q: 'Do you take on equity or revenue-share work?', a: 'We do, on the rare project where we have unusually strong conviction. Default is a fixed-fee engagement with a sharp brief.' },
    { q: 'Can you work with our in-house engineers?', a: 'Yes — and we prefer it where possible. We pair, review PRs, and hand over a stack your team can run on day one.' },
    { q: 'Where are you based?', a: 'Paris, Bucharest, and Montréal. We work async with two synchronous demos a week, regardless of where you are.' },
    { q: 'What does retainer look like after launch?', a: 'A flat monthly fee for an agreed slice of capacity — usually one or two engineers and a designer. Cancel anytime with 30 days notice.' },
    { q: 'Do you sign NDAs?', a: 'Yes. Mutual NDA is fine before any specifics get exchanged.' },
  ];

  return (
    <section ref={root} className="section-full surface-paper">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
          <span className="eyebrow"><span className="dot">●</span> FAQ</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, opacity: 0.6, letterSpacing: '0.14em', textTransform: 'uppercase' }}>The questions we actually get</span>
        </div>
        <div className="faq-list">
          {items.map((it, i) => (
            <article key={i} className={`faq-item ${open === i ? 'is-open' : ''}`}>
              <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span><span className="icon">+</span>
              </div>
              <div className="faq-a"><div className="faq-a-inner">{it.a}</div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
