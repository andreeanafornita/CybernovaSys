"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Globe, AppWindow, Sparkles, ShoppingBag, Target, Smartphone } from "lucide-react";

const ICONS = { web: Globe, app: AppWindow, mobile: Smartphone, brand: Sparkles, audit: Target, ecommerce: ShoppingBag };

export default function ServicesBento() {
  const root = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;

    gsap.from(root.current.querySelectorAll('.service-row'), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: root.current,
        start: 'top 80%'
      }
    });
  }, { scope: root });

  const services = [
    {
      id: "marketing",
      icon: "web",
      title: "Marketing Websites",
      desc: "High-performance sites built on Next.js, optimized for A+ Lighthouse scores and editorial workflows.",
      num: "01",
      hoverColor: "var(--cs-cream)",
    },
    {
      id: "web-apps",
      icon: "app",
      title: "Web Applications",
      desc: "Internal tools, customer portals, and real-time dashboards designed to be lived in.",
      num: "02",
      hoverColor: "var(--cs-rust)",
    },
    {
      id: "brand",
      icon: "brand",
      title: "Brand Systems",
      desc: "Identity, typography, and design systems that scale across surfaces and keep your brand coherent.",
      num: "03",
      hoverColor: "var(--cs-teal)",
    },
    {
      id: "ecommerce",
      icon: "ecommerce",
      title: "E-Commerce",
      desc: "High-conversion online stores built with modern headless architectures.",
      num: "04",
      hoverColor: "var(--cs-rust)",
    },
    {
      id: "uiux",
      icon: "audit",
      title: "UI/UX Audits",
      desc: "We dive deep into your analytics and flows to earn the click with clarity, not growth-hacks.",
      num: "05",
      hoverColor: "var(--cs-teal)",
    },
    {
      id: "mobile",
      icon: "mobile",
      title: "Mobile Apps",
      desc: "Native-feeling iOS and Android apps. React Native + Expo, designed in lockstep with the web.",
      num: "06",
      hoverColor: "var(--cs-cream)",
    },
  ];

  return (
    <section ref={root} className="services-list-section">
      <div className="container">
        <div className="services-list-header">
          <span className="eyebrow" style={{ opacity: 0.7 }}><span className="dot" style={{ background: 'var(--cs-cream)' }}></span> What we make</span>
          <h2 className="display-2" style={{ maxWidth: '14ch', marginTop: 18 }}>Services tailored for scale.</h2>
        </div>

        <div className="services-list">
          {services.map((s) => {
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
                    <div className="service-3d-text">Explore {s.title.split(' ')[0]}</div>
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
