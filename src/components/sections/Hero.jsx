"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Orbits from "@/components/graphics/Orbits";
import Counter from "@/components/ui/Counter";

export default function Hero({ t, lang }) {
  const root = useRef(null);

  useGSAP(() => {
    if (!root.current) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(root.current.querySelector(".hero-eyebrow"), { y: 16, opacity: 0, duration: 0.6 })
      .fromTo(
        root.current.querySelectorAll(".split-word"),
        { yPercent: 110 },
        { yPercent: 0, duration: 0.95, stagger: 0.04 },
        "-=0.3"
      )
      .from(root.current.querySelector(".lead"), { y: 18, opacity: 0, duration: 0.7 }, "-=0.4")
      .from(root.current.querySelectorAll(".hero-cta-row > *"), { y: 14, opacity: 0, stagger: 0.08, duration: 0.5 }, "-=0.4")
      .from(root.current.querySelectorAll(".hero-meta .stat"), { y: 18, opacity: 0, stagger: 0.08, duration: 0.6 }, "-=0.3");
  }, { scope: root });

  return (
    <section ref={root} className="section-full hero surface-teal">
      <Orbits tone="forest" />
      <div className="container hero-grid">
        <span className="eyebrow hero-eyebrow">
          <span className="dot">●</span> {t.eyebrow}
        </span>
        <h1 className="display-1">
          <span className="split-line">
            {t.headlineLine1.map((w, i) => (
              <span key={i} className="split-word" style={{ paddingRight: "0.18em" }}>{w}</span>
            ))}
          </span>
          <span className="split-line">
            {t.headlineLine2.map((w, i) => (
              <span
                key={i}
                className="split-word"
                style={{
                  paddingRight: "0.18em",
                  color: i === t.headlineLine2.length - 1 ? "var(--cs-rust)" : "inherit",
                  fontStyle: i === t.headlineLine2.length - 1 ? "italic" : "normal",
                }}
              >
                {w}
              </span>
            ))}
          </span>
        </h1>
        <p className="lead">{t.lead}</p>
        <div className="hero-cta-row">
          <Link className="btn btn-primary" href={`/${lang}/contact`}>
            {t.cta1} <span className="arrow"><ArrowRight size={16} /></span>
          </Link>
          <Link className="btn btn-ghost-dark" href={`/${lang}/work`}>
            {t.cta2}
          </Link>
        </div>
        <div className="hero-meta">
          {t.stats.map((s, i) => (
            <div key={i} className="stat">
              <span className="n"><Counter to={s.n} suffix={s.suffix} /></span>
              <span className="l">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
