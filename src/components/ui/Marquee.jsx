"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Star } from "lucide-react";

export default function Marquee({ items, surface = "ink", speed = 60 }) {
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const t = trackRef.current;
    const w = t.scrollWidth / 2;
    const tween = gsap.to(t, { x: -w, duration: w / speed, ease: "none", repeat: -1 });
    return () => tween.kill();
  }, [speed]);

  const all = [...items, ...items];
  const cls =
    surface === "ink"
      ? "surface-ink"
      : surface === "teal"
      ? "surface-teal"
      : surface === "rust"
      ? "surface-heat"
      : "surface-paper";

  return (
    <div className={`marquee ${cls}`}>
      <div className="marquee-track" ref={trackRef}>
        {all.map((it, i) => (
          <span className="marquee-item" key={i}>
            <span className="star">
              <Star size={18} />
            </span>
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
