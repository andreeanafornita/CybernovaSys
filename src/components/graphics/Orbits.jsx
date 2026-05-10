"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Orbits({ tone = "forest" }) {
  const stroke = tone === "cream" ? "var(--cs-cream)" : "var(--cs-forest)";
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
    tl.to(ref.current.querySelector(".r1"), { rotate: 360, duration: 60, transformOrigin: "50% 50%" }, 0)
      .to(ref.current.querySelector(".r2"), { rotate: -360, duration: 90, transformOrigin: "50% 50%" }, 0)
      .to(ref.current.querySelector(".r3"), { rotate: 360, duration: 120, transformOrigin: "50% 50%" }, 0);
      
    const onScroll = () => {
      if (!ref.current) return;
      ref.current.style.transform = `translateY(-50%) translate3d(0, ${window.scrollY * -0.08}px, 0)`;
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      tl.kill();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <svg ref={ref} className="hero-orbits" viewBox="0 0 800 800" fill="none" stroke={stroke} strokeWidth="1.2" aria-hidden>
      <g className="r1" opacity="0.6"><circle cx="400" cy="400" r="380" /><circle cx="780" cy="400" r="6" fill={stroke} /></g>
      <g className="r2" opacity="0.5"><circle cx="400" cy="400" r="290" /><circle cx="110" cy="400" r="5" fill={stroke} /></g>
      <g className="r3" opacity="0.45"><circle cx="400" cy="400" r="200" /><circle cx="400" cy="200" r="4" fill={stroke} /></g>
      <circle cx="400" cy="400" r="80" stroke={stroke} strokeDasharray="3 6" opacity="0.7" />
      <circle cx="400" cy="400" r="6" fill={stroke} />
    </svg>
  );
}
