"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

export function ShopHero({ t }) {
  const root = useRef(null);

  useGSAP(() => {
    gsap.from(root.current.querySelectorAll(".editorial-title .split-line"), {
      yPercent: 110, duration: 1.5, stagger: 0.1, ease: "power4.out",
    });
    gsap.from(root.current.querySelector(".editorial-desc"), {
      opacity: 0, y: 20, duration: 1.5, ease: "power3.out", delay: 0.4,
    });
  }, { scope: root });

  return (
    <section ref={root} className="section-full surface-ink" style={{ display: "flex", alignItems: "center", minHeight: "80vh", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container">
        <h1 className="editorial-title" style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", lineHeight: 1, marginBottom: 40, fontFamily: "var(--font-display)", letterSpacing: "-0.03em", fontWeight: 400 }}>
          <span className="split-line" style={{ display: "block", overflow: "hidden" }}><span style={{ display: "block" }}>{t.title1}</span></span>
          <span className="split-line" style={{ display: "block", overflow: "hidden" }}><span style={{ display: "block", color: "var(--cs-cream)", opacity: 0.7 }}>{t.title2}</span></span>
        </h1>
        <p className="editorial-desc" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", maxWidth: "45ch", opacity: 0.6, lineHeight: 1.6, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {t.desc}
        </p>
      </div>
    </section>
  );
}

export function ShopGrid({ t, lang }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const sections = gsap.utils.toArray(".shop-exhibit-panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + containerRef.current.offsetWidth,
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="shop-exhibit-section surface-ink">
      <div ref={containerRef} className="shop-exhibit-container">
        {t.pcs.map((pc, i) => (
          <div key={pc.id} className="shop-exhibit-panel" style={{ "--pc-color": pc.color }}>
            <div className="shop-exhibit-content">
              <div className="shop-exhibit-text">
                <span className="exhibit-num">0{i + 1}</span>
                <h2 className="exhibit-name">{pc.name}</h2>
                <h3 className="exhibit-tagline">{pc.tagline}</h3>
                <p className="exhibit-desc">{pc.desc}</p>
                <div className="exhibit-specs">
                  <div className="spec-item"><span className="spec-label">{t.specLabels.cpu}</span><span className="spec-val">{pc.specs.cpu}</span></div>
                  <div className="spec-item"><span className="spec-label">{t.specLabels.gpu}</span><span className="spec-val">{pc.specs.gpu}</span></div>
                  <div className="spec-item"><span className="spec-label">{t.specLabels.ram}</span><span className="spec-val">{pc.specs.ram}</span></div>
                </div>
                <div className="exhibit-action">
                  <span className="exhibit-price">{pc.price}</span>
                  <Link href={`/${lang}/shop/${pc.id}`} className="exhibit-btn">
                    {t.purchaseBtn} <ArrowRight size={18} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
              <div className="shop-exhibit-visual">
                <div className="monolith-container">
                  <div className="monolith">
                    <div className="monolith-reflection"></div>
                    <div className="monolith-glow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
