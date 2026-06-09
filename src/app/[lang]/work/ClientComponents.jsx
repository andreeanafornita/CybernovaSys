"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Orbits from "@/components/graphics/Orbits";
import Counter from "@/components/ui/Counter";

export function WorkHero({ t }) {
  const root = useRef(null);
  useGSAP(() => {
    if (!root.current) return;
    gsap.fromTo(root.current.querySelectorAll(".split-word"),
      { yPercent: 110 },
      { yPercent: 0, duration: 0.95, stagger: 0.04, ease: "power3.out" });
    gsap.from(root.current.querySelector(".lead"), { y: 18, opacity: 0, duration: 0.7, delay: 0.6, ease: "power3.out" });
    gsap.from(root.current.querySelectorAll(".work-meta-row > *"), { y: 16, opacity: 0, duration: 0.6, stagger: 0.08, delay: 0.8, ease: "power3.out" });
  }, { scope: root });

  return (
    <section ref={root} className="section-full page-hero surface-ink">
      <Orbits tone="cream" />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <span className="eyebrow"><span className="dot">●</span> {t.eyebrow}</span>
        <h1 style={{ marginTop: 24, maxWidth: "14ch" }} className="display-1">
          <span className="split-line">
            {t.headlineLine1.map((w, i) => <span key={i} className="split-word" style={{ paddingRight: "0.18em" }}>{w}</span>)}
          </span>
          <span className="split-line">
            {t.headlineLine2.map((w, i) => (
              <span key={i} className="split-word" style={{ paddingRight: "0.18em", color: i === t.headlineLine2.length - 1 ? "var(--cs-teal-300)" : "inherit", fontStyle: i === t.headlineLine2.length - 1 ? "italic" : "normal" }}>{w}</span>
            ))}
          </span>
        </h1>
        <p className="lead" style={{ marginTop: 28, opacity: 0.86 }}>{t.lead}</p>
        <div className="work-meta-row" style={{ display: "flex", gap: 56, marginTop: 64, flexWrap: "wrap" }}>
          {t.stats.map((s, i) => (
            <div key={i} className="stat">
              <span className="n" style={{ fontFamily: "var(--font-display)", fontSize: 56, lineHeight: 1, letterSpacing: "-0.03em", display: "block" }}>
                <Counter to={s.n} suffix={s.suffix} />
              </span>
              <span className="l" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.65 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedCase({ t, lang }) {
  const root = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    gsap.fromTo(root.current.querySelector(".visual"),
      { clipPath: "inset(0 0 100% 0)" },
      { clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" } });
    gsap.fromTo(root.current.querySelectorAll(".case-feature .meta > *"),
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" } });
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
            <span className="eyebrow"><span className="dot">●</span> {t.eyebrow}</span>
            <h2 className="display-2" style={{ marginTop: 16, maxWidth: "14ch" }}>{t.title}</h2>
            <p className="lead" style={{ marginTop: 18 }}>{t.lead}</p>
            <div className="tags">
              {t.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
            </div>
            <div style={{ marginTop: 28 }}>
              <a className="btn btn-primary" href="#">{t.cta} <span className="arrow"><ArrowRight size={16} /></span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseGrid({ t }) {
  const root = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    const cells = root.current.querySelectorAll(".case-cell");
    gsap.fromTo(cells,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" } });
  }, { scope: root });

  const tones = ["--ink", "--rust", "--teal", "", "--ink", "--rust"];

  return (
    <section ref={root} className="section-full surface-paper-2 tight">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
          <span className="eyebrow"><span className="dot">●</span> {t.eyebrow}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, opacity: 0.6, letterSpacing: "0.14em", textTransform: "uppercase" }}>{t.subtitle}</span>
        </div>
        <div className="case-grid">
          {t.cases.map((c, i) => (
            <article key={i} className={`case-cell ${tones[i] || ""}`}>
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
