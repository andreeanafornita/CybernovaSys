"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Orbits from "@/components/graphics/Orbits";
import { useGSAP } from "@gsap/react";

export function StudioHero({ t }) {
  const root = useRef(null);
  useGSAP(() => {
    if (!root.current) return;
    gsap.fromTo(root.current.querySelectorAll(".split-word"),
      { yPercent: 110 },
      { yPercent: 0, duration: 0.95, stagger: 0.04, ease: "power3.out" });
    gsap.from(root.current.querySelector(".lead"), { y: 18, opacity: 0, duration: 0.7, delay: 0.6, ease: "power3.out" });
  }, { scope: root });

  return (
    <section ref={root} className="section-full page-hero surface-paper">
      <Orbits tone="forest" />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <span className="eyebrow"><span className="dot">●</span> {t.eyebrow}</span>
        <h1 style={{ marginTop: 24, maxWidth: "14ch" }} className="display-1">
          <span className="split-line">{t.headlineLine1.map((w, i) => <span key={i} className="split-word" style={{ paddingRight: "0.18em" }}>{w}</span>)}</span>
          <span className="split-line">{t.headlineLine2.map((w, i) => <span key={i} className="split-word" style={{ paddingRight: "0.18em" }}>{w}</span>)}</span>
          <span className="split-line">{t.headlineLine3.map((w, i) => (
            <span key={i} className="split-word" style={{ paddingRight: "0.18em", color: i === t.headlineLine3.length - 1 ? "var(--cs-rust)" : "inherit", fontStyle: i === t.headlineLine3.length - 1 ? "italic" : "normal" }}>{w}</span>
          ))}</span>
        </h1>
        <p className="lead" style={{ marginTop: 28 }}>{t.lead}</p>
      </div>
    </section>
  );
}

export function ValuesStack({ t }) {
  const root = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    const cards = root.current.querySelectorAll(".value-card");
    gsap.fromTo(cards,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" } });
  }, { scope: root });

  return (
    <section ref={root} className="section-full surface-paper-2">
      <div className="container values-shell">
        <aside className="values-side">
          <span className="eyebrow"><span className="dot">●</span> {t.eyebrow}</span>
          <h2 className="display-2" style={{ marginTop: 18, maxWidth: "12ch" }}>{t.heading}</h2>
        </aside>
        <div className="values-list">
          {t.items.map((v, i) => (
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

export function Team({ t }) {
  const root = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    const tiles = root.current.querySelectorAll(".team-tile");
    gsap.fromTo(tiles,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" } });
  }, { scope: root });

  return (
    <section ref={root} className="section-full surface-paper tight">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
          <span className="eyebrow"><span className="dot">●</span> {t.eyebrow}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, opacity: 0.6, letterSpacing: "0.14em", textTransform: "uppercase" }}>{t.subtitle}</span>
        </div>
        <div className="team-grid">
          {t.members.map((p, i) => (
            <article key={i} className="team-tile">
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
