"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

export default function BigCTA({
  heading,
  sub,
  theme = "rust",
  primaryHref,
  lang = "en",
  cta1,
  cta2,
}) {
  const root = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    gsap.fromTo(
      root.current.querySelectorAll(".cta-line"),
      { yPercent: 110 },
      {
        yPercent: 0, duration: 1, stagger: 0.06, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 85%" },
      }
    );
    gsap.from(root.current.querySelectorAll(".cta-sub, .cta-action"), {
      y: 24, opacity: 0, duration: 0.7, stagger: 0.1, delay: 0.3, ease: "power3.out",
      scrollTrigger: { trigger: root.current, start: "top 85%" },
    });
  }, { scope: root });

  const cls =
    theme === "rust"  ? "surface-heat"
    : theme === "ink"   ? "surface-ink"
    : theme === "teal"  ? "surface-teal"
    : "surface-paper";

  const btnCls = theme === "teal" ? "btn-primary" : "btn-on-dark";
  const ghostCls = theme === "teal" ? "btn btn-ghost-dark" : "btn btn-ghost-light";

  const primary = primaryHref || `/${lang}/contact`;

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
          <p className="lead cta-sub" style={{ opacity: 0.88 }}>
            {sub}
          </p>
        )}
        <div className="cta-action" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link className={`btn ${btnCls}`} href={primary}>
            {cta1 || "Start a project"} <span className="arrow"><ArrowRight size={16} /></span>
          </Link>
          <Link className={ghostCls} href={`/${lang}/work`}>
            {cta2 || "See our work"}
          </Link>
        </div>
      </div>
    </section>
  );
}
