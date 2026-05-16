"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

export function ShopHero() {
  const root = useRef(null);

  useGSAP(() => {
    gsap.from(root.current.querySelectorAll('.editorial-title .split-line'), {
      yPercent: 110,
      duration: 1.5,
      stagger: 0.1,
      ease: 'power4.out',
    });
    gsap.from(root.current.querySelector('.editorial-desc'), {
      opacity: 0,
      y: 20,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.4
    });
  }, { scope: root });

  return (
    <section ref={root} className="section-full surface-ink" style={{ display: 'flex', alignItems: 'center', minHeight: '80vh', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <h1 className="editorial-title" style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)', lineHeight: 1, marginBottom: 40, fontFamily: 'var(--font-display)', letterSpacing: '-0.03em', fontWeight: 400 }}>
          <span className="split-line" style={{ display: 'block', overflow: 'hidden' }}><span style={{ display: 'block' }}>Tools for the</span></span>
          <span className="split-line" style={{ display: 'block', overflow: 'hidden' }}><span style={{ display: 'block', color: 'var(--cs-cream)', opacity: 0.7 }}>extraordinary.</span></span>
        </h1>
        <p className="editorial-desc" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', maxWidth: '45ch', opacity: 0.6, lineHeight: 1.6, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Handcrafted computational monoliths. Designed for silence, engineered for absolute power.
        </p>
      </div>
    </section>
  );
}

const PCS = [
  {
    id: "nova-core",
    name: "Nova Core.",
    tagline: "The foundation of performance.",
    desc: "Engineered for enthusiasts who demand flawless execution without the excess. Pure, unadulterated speed housed in a minimal footprint.",
    price: "$2,499",
    color: "var(--cs-teal)",
    specs: { cpu: "Ryzen 7 7800X3D", gpu: "RTX 4070 Ti SUPER", ram: "32GB DDR5" }
  },
  {
    id: "quantum-pro",
    name: "Quantum Pro.",
    tagline: "Unbound creativity.",
    desc: "A creator's dream. Massive bandwidth and rendering power, wrapped in a monolithic silence. The ultimate tool for professionals.",
    price: "$4,299",
    color: "var(--cs-rust)",
    specs: { cpu: "Core i9-14900K", gpu: "RTX 4090 24GB", ram: "64GB DDR5" }
  },
  {
    id: "singularity",
    name: "Singularity.",
    tagline: "Beyond all limits.",
    desc: "Custom liquid-cooled architecture designed to shatter benchmarks. An uncompromising beast that redefines what a personal computer can do.",
    price: "$6,899",
    color: "var(--cs-cream)",
    specs: { cpu: "Ryzen 9 7950X", gpu: "Dual RTX 4090", ram: "128GB DDR5" }
  }
];

export function ShopGrid() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Only apply horizontal scroll on desktop
    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      const sections = gsap.utils.toArray('.shop-exhibit-panel');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + containerRef.current.offsetWidth
        }
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="shop-exhibit-section surface-ink">
      <div ref={containerRef} className="shop-exhibit-container">
        {PCS.map((pc, i) => (
          <div key={pc.id} className="shop-exhibit-panel" style={{ "--pc-color": pc.color }}>
            
            <div className="shop-exhibit-content">
              {/* Left Side: Typography */}
              <div className="shop-exhibit-text">
                <span className="exhibit-num">0{i + 1}</span>
                <h2 className="exhibit-name">{pc.name}</h2>
                <h3 className="exhibit-tagline">{pc.tagline}</h3>
                <p className="exhibit-desc">{pc.desc}</p>
                
                <div className="exhibit-specs">
                  <div className="spec-item">
                    <span className="spec-label">Processor</span>
                    <span className="spec-val">{pc.specs.cpu}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Graphics</span>
                    <span className="spec-val">{pc.specs.gpu}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Memory</span>
                    <span className="spec-val">{pc.specs.ram}</span>
                  </div>
                </div>

                <div className="exhibit-action">
                  <span className="exhibit-price">{pc.price}</span>
                  <Link href={`/shop/${pc.id}`} className="exhibit-btn">
                    Purchase <ArrowRight size={18} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>

              {/* Right Side: The Minimalist Monolith Graphic */}
              <div className="shop-exhibit-visual">
                <div className="monolith-container">
                  <div className="monolith">
                    {/* Minimalist reflection lines */}
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
