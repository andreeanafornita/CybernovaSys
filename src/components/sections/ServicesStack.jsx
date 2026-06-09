"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function ServiceGlyph({ idx }) {
  if (idx === 0)
    return (
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="20" y="34" width="160" height="120" rx="6" />
        <line x1="20" y1="60" x2="180" y2="60" />
        <circle cx="36" cy="47" r="3" fill="currentColor" />
        <circle cx="48" cy="47" r="3" fill="currentColor" />
        <circle cx="60" cy="47" r="3" fill="currentColor" />
        <rect x="38" y="78" width="60" height="8" />
        <rect x="38" y="92" width="100" height="6" opacity="0.6" />
        <rect x="38" y="104" width="80" height="6" opacity="0.6" />
        <rect x="38" y="124" width="40" height="20" stroke="currentColor" />
      </svg>
    );
  if (idx === 1)
    return (
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="16" y="30" width="168" height="140" rx="4" />
        <line x1="60" y1="30" x2="60" y2="170" />
        <rect x="22" y="42" width="32" height="6" />
        <rect x="22" y="56" width="22" height="6" opacity="0.6" />
        <rect x="22" y="70" width="28" height="6" opacity="0.6" />
        <rect x="72" y="46" width="50" height="40" />
        <rect x="128" y="46" width="50" height="40" />
        <rect x="72" y="96" width="106" height="60" />
        <polyline points="80,140 100,120 118,134 138,108 158,118 174,108" />
      </svg>
    );
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="62" y="14" width="76" height="172" rx="14" />
      <rect x="68" y="22" width="64" height="148" rx="6" opacity="0.4" />
      <circle cx="100" cy="180" r="3" fill="currentColor" />
      <rect x="76" y="40" width="48" height="20" />
      <rect x="76" y="68" width="48" height="20" opacity="0.6" />
      <rect x="76" y="96" width="48" height="20" opacity="0.4" />
      <circle cx="100" cy="146" r="10" />
    </svg>
  );
}

const TONES = ["", "--rust", "--teal"];

export default function ServicesStack({ t }) {
  const root = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    if (window.innerWidth < 769) return;
    const cards = root.current.querySelectorAll(".pin-card");
    if (!cards.length) return;

    const total = cards.length;
    const stickyOffset = 30;

    gsap.set(cards, { yPercent: (i) => (i === 0 ? 0 : 100), scale: 1, zIndex: (i) => i + 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root.current,
        start: "top top",
        end: () => `+=${total * 100}%`,
        pin: true,
        scrub: 0.6,
      },
    });

    cards.forEach((card, i) => {
      if (i === 0) return;
      const prev = cards[i - 1];
      tl.to(prev, { scale: 0.94, yPercent: -stickyOffset / 6, duration: 1, ease: "none" }, i - 1)
        .to(card, { yPercent: 0, duration: 1, ease: "power2.out" }, i - 1);
    });
  }, { scope: root });

  return (
    <section ref={root} className="section-full surface-paper-2 pin-stack-shell tight">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
          <span className="eyebrow">
            <span className="dot">●</span> {t.eyebrow}
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, opacity: 0.6, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            {t.scrollHint}
          </span>
        </div>
        <div className="pin-stack-cards" style={{ minHeight: "70vh" }}>
          {t.services.map((s, i) => (
            <article key={i} className={`pin-card ${TONES[i] || ""}`}>
              <div>
                <span className="num">{s.num}</span>
                <h3>{s.title}</h3>
                <p className="body">{s.body}</p>
                <div className="points">
                  {s.points.map((p, j) => (
                    <div key={j} className="point">
                      <span className="ic">{String(j + 1).padStart(2, "0")}</span>
                      <span className="t">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="visual">
                <ServiceGlyph idx={i} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
