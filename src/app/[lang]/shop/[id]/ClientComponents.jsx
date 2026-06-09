"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Cpu, HardDrive, MemoryStick, Zap, Fan } from "lucide-react";

export function ProductHero({ pc, specLabels, purchaseBtn }) {
  const containerRef = useRef(null);
  const monolithRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.from(".product-title", { y: 100, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.2 })
      .from(".product-tagline", { y: 20, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
      .from(".product-desc", { opacity: 0, duration: 1 }, "-=0.5")
      .from(monolithRef.current, { scale: 0.9, opacity: 0, duration: 1.5, ease: "power3.out" }, "-=1");

    gsap.to(monolithRef.current, {
      scale: 1.1, y: 100,
      scrollTrigger: {
        trigger: containerRef.current, start: "top top", end: "bottom top", scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="product-hero-section" style={{ position: "relative", overflow: "hidden", paddingTop: "120px" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center", minHeight: "70vh" }}>
        <div className="product-hero-text" style={{ zIndex: 10 }}>
          <div className="exhibit-num" style={{ marginBottom: 16 }}>{pc.id.toUpperCase()}</div>
          <h1 className="product-title" style={{ fontSize: "clamp(4rem, 10vw, 10rem)", lineHeight: 0.9, margin: 0, fontFamily: "var(--font-display)", letterSpacing: "-0.04em", color: "var(--cs-cream)" }}>
            {pc.name}
          </h1>
          <h2 className="product-tagline" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 300, color: pc.color, marginTop: 24, marginBottom: 32 }}>
            {pc.tagline}
          </h2>
          <p className="product-desc" style={{ fontSize: "1.25rem", opacity: 0.7, maxWidth: "45ch", lineHeight: 1.6 }}>
            {pc.desc}
          </p>
        </div>
        <div className="product-hero-visual" style={{ display: "flex", justifyContent: "center", perspective: "2000px" }}>
          <div ref={monolithRef} className="product-monolith-container" style={{ width: "360px", height: "600px", transformStyle: "preserve-3d", transform: "rotateY(-15deg) rotateX(5deg)", "--pc-color": pc.color }}>
            <div className="monolith" style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #1a1a1a 0%, #050505 100%)", borderRadius: 12, position: "relative", boxShadow: "30px 40px 60px -20px rgba(0,0,0,0.8), inset 1px 1px 0 rgba(255,255,255,0.1), inset -1px -1px 0 rgba(0,0,0,0.5)", overflow: "hidden" }}>
              <div className="monolith-reflection" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 40%)" }}></div>
              <div className="monolith-glow" style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)", width: "80%", height: "2px", background: "var(--pc-color)", boxShadow: "0 0 60px 20px color-mix(in oklab, var(--pc-color) 40%, transparent)" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductSpecs({ pc, specLabels }) {
  const root = useRef(null);

  useGSAP(() => {
    gsap.from(root.current.querySelectorAll(".spec-card"), {
      y: 50, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: root.current, start: "top 75%" },
    });
  }, { scope: root });

  const specsDetails = [
    { label: specLabels.cpu, value: pc.specs.cpu, icon: Cpu,         desc: "Unlocked architecture for maximum multi-core capability." },
    { label: specLabels.gpu, value: pc.specs.gpu, icon: Zap,         desc: "Ray tracing and AI-accelerated performance for flawless rendering." },
    { label: specLabels.ram, value: pc.specs.ram, icon: MemoryStick, desc: "Ultra-low latency memory channels for unbottlenecked speed." },
    { label: "Storage",      value: "2TB NVMe SSD",  icon: HardDrive,  desc: "Gen4 speeds. Instant load times and massive capacity." },
    { label: "Cooling",      value: "Custom Loop",   icon: Fan,         desc: "Whisper-quiet thermal dissipation even under maximum load." },
  ];

  return (
    <section ref={root} className="product-specs-section" style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: "80px" }}>
      <div className="container">
        <h3 style={{ fontFamily: "var(--font-mono)", fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.5, marginBottom: 64 }}>Technical Architecture</h3>
        <div className="specs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
          {specsDetails.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <article key={i} className="spec-card" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, padding: 32 }}>
                <Icon size={32} color={pc.color} style={{ marginBottom: 24, opacity: 0.8 }} />
                <h4 style={{ fontFamily: "var(--font-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.5, marginBottom: 8 }}>{spec.label}</h4>
                <p style={{ fontSize: "1.5rem", fontWeight: 400, color: "var(--cs-cream)", margin: 0, marginBottom: 16 }}>{spec.value}</p>
                <p style={{ opacity: 0.6, fontSize: 14, lineHeight: 1.5, margin: 0 }}>{spec.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function StickyPurchaseBar({ pc, purchaseBtn }) {
  const barRef = useRef(null);

  useGSAP(() => {
    gsap.set(barRef.current, { y: 100, opacity: 0 });
    ScrollTrigger.create({
      start: 500,
      onEnter: () => gsap.to(barRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }),
      onLeaveBack: () => gsap.to(barRef.current, { y: 100, opacity: 0, duration: 0.5, ease: "power3.in" }),
    });
  }, []);

  return (
    <div ref={barRef} className="sticky-purchase-bar" style={{ position: "fixed", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 100, background: "rgba(10,10,10,0.8)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 100, padding: "12px 12px 12px 32px", display: "flex", alignItems: "center", gap: 48, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--cs-cream)" }}>{pc.name}</span>
        <span style={{ width: 1, height: 24, background: "rgba(255,255,255,0.2)" }}></span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.25rem", color: pc.color }}>{pc.price}</span>
      </div>
      <button className="purchase-cta" style={{ background: "var(--cs-cream)", color: "#111", border: "none", padding: "16px 32px", borderRadius: 40, fontWeight: 500, display: "flex", alignItems: "center", gap: 8, cursor: "pointer", transition: "transform 200ms ease" }}>
        {purchaseBtn} <ArrowRight size={16} />
      </button>
    </div>
  );
}
