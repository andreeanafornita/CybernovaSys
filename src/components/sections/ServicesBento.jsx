"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Globe, AppWindow, Sparkles, ShoppingBag, Target, Smartphone } from "lucide-react";

const ICONS = {
  web: Globe,
  app: AppWindow,
  mobile: Smartphone,
  brand: Sparkles,
  audit: Target,
  ecommerce: ShoppingBag,
};

export default function ServicesBento({ t }) {
  const root = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    gsap.from(root.current.querySelectorAll(".service-row"), {
      y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: root.current, start: "top 80%" },
    });
  }, { scope: root });

  return (
    <section ref={root} className="services-list-section">
      <div className="container">
        <div className="services-list-header">
          <span className="eyebrow" style={{ opacity: 0.7 }}>
            <span className="dot" style={{ background: "var(--cs-cream)" }}></span> {t.eyebrow}
          </span>
          <h2 className="display-2" style={{ maxWidth: "14ch", marginTop: 18 }}>{t.heading}</h2>
        </div>

        <div className="services-list">
          {t.services.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <div
                key={s.id}
                className="service-row"
                style={{ "--hover-color": s.hoverColor }}
              >
                <div className="service-num">{s.num}</div>
                <h3 className="service-title">{s.title}</h3>
                <div className="service-desc-wrapper">
                  <p>{s.desc}</p>
                </div>

                {/* 3D Glass Card WOW Effect */}
                <div className="service-3d-scene">
                  <div className="service-3d-card">
                    <div className="service-3d-glow" />
                    <Icon size={48} strokeWidth={1} className="service-3d-icon" />
                    <div className="service-3d-text">{s.exploreLabel}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
