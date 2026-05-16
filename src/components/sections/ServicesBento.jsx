"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowIcon } from "@/components/icons";

export default function ServicesBento() {
  const root = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    
    gsap.from(root.current.querySelectorAll('.neon-bento-card'), {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
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
      title: "Marketing Websites",
      colSpan: 2,
      rowSpan: 1,
      icon: "🌐",
      desc: "High-performance sites built on Next.js, optimized for A+ Lighthouse scores and editorial workflows.",
      stats: "01 / SERVICE",
      isGlow: false
    },
    {
      id: "web-apps",
      title: "Web Applications",
      colSpan: 1,
      rowSpan: 2,
      icon: "⚡",
      desc: "Internal tools, customer portals, and real-time dashboards designed to be lived in.",
      badge: "LIVE DEMO",
      isGlow: true
    },
    {
      id: "brand",
      title: "Brand Systems",
      colSpan: 1,
      rowSpan: 1,
      icon: "✨",
      desc: "Identity and typography",
      stats: "04 / SERVICE",
      isGlow: false
    },
    {
      id: "uiux",
      title: "UI/UX Audits",
      colSpan: 2,
      rowSpan: 1,
      icon: "🎯",
      desc: "We dive deep into your analytics and flows to earn the click with clarity, not growth-hacks.",
      stats: "05 / SERVICE",
      isGlow: true
    },
    {
      id: "mobile",
      title: "Mobile Apps",
      colSpan: 1,
      rowSpan: 1,
      icon: "📱",
      desc: "React Native + Expo apps",
      stats: "03 / SERVICE",
      isGlow: false
    }
  ];

  return (
    <section ref={root} className="neon-bento-section">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 56 }}>
          <span className="neon-eyebrow"><span className="dot" style={{ color: 'var(--neon-green)' }}>●</span> What we make</span>
          <h2 className="display-2" style={{ maxWidth: '14ch', color: 'var(--neon-white)' }}>Services tailored for scale.</h2>
        </div>
        
        <div className="neon-bento-grid">
          {services.map((s) => (
            <div 
              key={s.id} 
              className={`neon-bento-card ${s.isGlow ? '--glow' : ''}`}
              style={{
                gridColumn: `span ${s.colSpan}`,
                gridRow: `span ${s.rowSpan}`
              }}
            >
              <div className="neon-bento-top">
                <span className="neon-bento-icon">{s.icon}</span>
                <span className="neon-bento-arrow"><ArrowIcon /></span>
              </div>
              <div className="neon-bento-bottom">
                <h3>{s.title}</h3>
                {s.stats && <div className="neon-bento-stats">{s.stats}</div>}
                {s.desc && <p className="neon-bento-desc">{s.desc}</p>}
                {s.badge && <div className="neon-bento-badge">{s.badge}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
