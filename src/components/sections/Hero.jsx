"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Orbits from "@/components/graphics/Orbits";
import Counter from "@/components/ui/Counter";

export default function Hero() {
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

  const headline = ["Websites,", "web apps,", "mobile apps —"];
  const headline2 = ["shipped,", "not", "shelved."];

  return (
    <section ref={root} className="section-full hero surface-teal">
      <Orbits tone="forest" />
      <div className="container hero-grid">
        <span className="eyebrow hero-eyebrow">
          <span className="dot">●</span> Cybernova Systems · Est. 2021
        </span>
        <h1 className="display-1">
          <span className="split-line">
            {headline.map((w, i) => (
              <span key={i} className="split-word" style={{ paddingRight: "0.18em" }}>
                {w}
              </span>
            ))}
          </span>
          <span className="split-line">
            {headline2.map((w, i) => (
              <span
                key={i}
                className="split-word"
                style={{
                  paddingRight: "0.18em",
                  color: i === 2 ? "var(--cs-rust)" : "inherit",
                  fontStyle: i === 2 ? "italic" : "normal",
                }}
              >
                {w}
              </span>
            ))}
          </span>
        </h1>
        <p className="lead">
          We're a small product studio building the digital surfaces growing teams actually launch — fast, calm, and built to last past the demo.
        </p>
        <div className="hero-cta-row">
          <Link className="btn btn-primary" href="/contact">
            Start a project <span className="arrow"><ArrowRight size={16} /></span>
          </Link>
          <Link className="btn btn-ghost-dark" href="/work">
            See our work
          </Link>
        </div>
        <div className="hero-meta">
          <div className="stat">
            <span className="n"><Counter to={48} suffix="+" /></span>
            <span className="l">Products shipped</span>
          </div>
          <div className="stat">
            <span className="n"><Counter to={6} /></span>
            <span className="l">Year average client</span>
          </div>
          <div className="stat">
            <span className="n"><Counter to={12} /></span>
            <span className="l">Senior crew</span>
          </div>
          <div className="stat">
            <span className="n"><Counter to={3} /></span>
            <span className="l">Continents shipped to</span>
          </div>
        </div>
      </div>
    </section>
  );
}
