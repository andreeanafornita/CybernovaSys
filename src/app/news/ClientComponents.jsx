"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Orbits from "@/components/graphics/Orbits";

export function NewsHero() {
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
      <div className="container news-hero-inner" style={{ position: 'relative', zIndex: 2 }}>
        <span className="eyebrow"><span className="dot">●</span> News & Updates</span>
        <h1 style={{ marginTop: 24, maxWidth: '14ch' }} className="display-1">
          <span className="split-line">
            {['Latest','from'].map((w, i) => <span key={i} className="split-word" style={{ paddingRight: '0.18em' }}>{w}</span>)}
          </span>
          <span className="split-line">
            {['the','studio.'].map((w, i) => (
              <span key={i} className="split-word" style={{ paddingRight: '0.18em', color: i === 1 ? 'var(--cs-rust)' : 'inherit', fontStyle: i === 1 ? 'italic' : 'normal' }}>{w}</span>
            ))}
          </span>
        </h1>
        <p className="lead" style={{ marginTop: 28 }}>
          Project launches, behind-the-scenes process, and the occasional opinion on building software that lasts.
        </p>
      </div>
    </section>
  );
}

export function NewsFeed() {
  const root = useRef(null);
  useGSAP(() => {
    if (!root.current) return;
    gsap.from(root.current.querySelectorAll('.news-card-skeleton'), {
      y: 30, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', delay: 0.3
    });
  }, { scope: root });

  return (
    <section ref={root} className="section-full surface-paper-2 tight">
      <div className="container">
        <div className="news-empty">
          <div className="news-empty-icon">📰</div>
          <h3>Content is on its way.</h3>
          <p>We're connecting our editorial pipeline. Articles, case studies, and studio updates will appear here soon.</p>
        </div>
        <div className="news-grid-placeholder">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="news-card-skeleton">
              <div className="skeleton-bar --sm" />
              <div className="skeleton-bar --lg" />
              <div className="skeleton-bar --md" />
              <div className="skeleton-bar --block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
