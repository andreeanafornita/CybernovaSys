"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Orbits from "@/components/graphics/Orbits";
import { useGSAP } from "@gsap/react";

export function ProcessHero({ t }) {
  const root = useRef(null);
  useGSAP(() => {
    if (!root.current) return;
    gsap.fromTo(root.current.querySelectorAll(".split-word"),
      { yPercent: 110 },
      { yPercent: 0, duration: 0.95, stagger: 0.04, ease: "power3.out" });
    gsap.from(root.current.querySelector(".lead"), { y: 18, opacity: 0, duration: 0.7, delay: 0.6, ease: "power3.out" });
  }, { scope: root });

  return (
    <section ref={root} className="section-full page-hero surface-heat">
      <Orbits tone="cream" />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <span className="eyebrow"><span className="dot">●</span> {t.eyebrow}</span>
        <h1 style={{ marginTop: 24, maxWidth: "14ch" }} className="display-1">
          <span className="split-line">{t.headlineLine1.map((w, i) => <span key={i} className="split-word" style={{ paddingRight: "0.18em" }}>{w}</span>)}</span>
          <span className="split-line">{t.headlineLine2.map((w, i) => (
            <span key={i} className="split-word" style={{ paddingRight: "0.18em", color: i === t.headlineLine2.length - 1 ? "var(--cs-teal-300)" : "inherit", fontStyle: i === t.headlineLine2.length - 1 ? "italic" : "normal" }}>{w}</span>
          ))}</span>
        </h1>
        <p className="lead" style={{ marginTop: 28, opacity: 0.92 }}>{t.lead}</p>
      </div>
    </section>
  );
}

export function PinnedSteps({ t }) {
  const root = useRef(null);
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const counterRef = useRef(null);
  const steps = t.steps;
  const total = steps.length;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current || !trackRef.current) return;
    if (window.innerWidth < 769) return;
    gsap.to(trackRef.current, {
      x: () => -((total - 1) * window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "top top",
        end: () => "+=" + (total * window.innerHeight),
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (fillRef.current) fillRef.current.style.width = (self.progress * 100) + "%";
          const idx = Math.min(total, Math.floor(self.progress * total) + 1);
          if (counterRef.current) counterRef.current.textContent = String(idx).padStart(2, "0") + " / 0" + total;
        },
      },
    });
  }, { scope: root });

  const bgColors = ["var(--cs-forest)", "var(--cs-forest-800)", "var(--cs-rust)", "var(--cs-teal)"];
  const textColors = ["var(--cs-cream)", "var(--cs-cream)", "var(--cs-cream)", "var(--cs-forest)"];

  return (
    <section ref={root} className="proc-h-shell surface-ink">
      <span className="proc-h-counter" ref={counterRef}>01 / 0{total}</span>
      <div className="proc-h-bar"><span className="fill" ref={fillRef} /></div>
      <div className="proc-h-track" ref={trackRef}>
        {steps.map((s, i) => (
          <div key={i} className="proc-h-panel" style={{ background: bgColors[i] || bgColors[0], color: textColors[i] || textColors[0] }}>
            <div className="container">
              <span className="num">{t.phaseLabel} {s.num}</span>
              <h2 className="display-2" style={{ marginTop: 18 }}>{s.title}</h2>
              <p style={{ marginTop: 22, fontSize: 18, lineHeight: 1.55, maxWidth: "52ch" }}>{s.body}</p>
              <div style={{ marginTop: 36, display: "flex", gap: 28, flexWrap: "wrap", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.75 }}>
                <span>{s.duration}</span>
                <span>·</span>
                <span>{t.checkpoints}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Timeline({ t }) {
  const root = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    const fill = root.current.querySelector(".timeline-spine .fill");
    const rows = root.current.querySelectorAll(".timeline-row");
    gsap.to(fill, {
      height: "100%", ease: "none",
      scrollTrigger: { trigger: root.current, start: "top 60%", end: "bottom 60%", scrub: true },
    });
    rows.forEach((r) => {
      ScrollTrigger.create({
        trigger: r, start: "top 70%",
        onEnter: () => r.classList.add("is-on"),
        onLeaveBack: () => r.classList.remove("is-on"),
      });
      gsap.from(r.querySelectorAll(".head, .week, ul"), {
        y: 24, opacity: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: r, start: "top 75%" },
      });
    });
  }, { scope: root });

  return (
    <section ref={root} className="section-full surface-paper">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
          <span className="eyebrow"><span className="dot">●</span> {t.eyebrow}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, opacity: 0.6, letterSpacing: "0.14em", textTransform: "uppercase" }}>{t.subtitle}</span>
        </div>
        <div className="timeline-rail">
          <div className="timeline-spine"><span className="fill" /></div>
          {t.rows.map((r, i) => (
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
