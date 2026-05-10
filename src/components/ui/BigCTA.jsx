"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowIcon } from "@/components/icons";

export default function BigCTA({ heading, sub, theme = "rust", primaryHref = "/contact" }) {
  const root = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    gsap.fromTo(root.current.querySelectorAll('.cta-heading .w'),
      { yPercent: 110 },
      { yPercent: 0, duration: 1, stagger: 0.04, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 85%' } });
    gsap.from(root.current.querySelectorAll('.cta-sub, .cta-action'),
      { y: 24, opacity: 0, duration: 0.7, stagger: 0.1, delay: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 85%' } });
  }, { scope: root });

  const cls =
    theme === "rust"
      ? "surface-heat"
      : theme === "ink"
      ? "surface-ink"
      : theme === "teal"
      ? "surface-teal"
      : "surface-paper";
  const btnCls = theme === "teal" ? "btn-primary" : "btn-on-dark";

  return (
    <section ref={root} className={`section-full big-cta ${cls}`}>
      <div className="container big-cta-inner">
        <span className="eyebrow">
          <span className="dot">●</span> Ready when you are
        </span>
        <h2>
          {heading.map((line, i) => (
            <span key={i} className="split-line">
              <span className="cta-line">{line}</span>
            </span>
          ))}
        </h2>
        {sub && (
          <p className="lead" style={{ opacity: 0.88 }}>
            {sub}
          </p>
        )}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link className={`btn ${btnCls}`} href={primaryHref}>
            Start a project <span className="arrow"><ArrowIcon size={16} /></span>
          </Link>
          <Link
            className={theme === "teal" ? "btn btn-ghost-dark" : "btn btn-ghost-light"}
            href="/work"
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
