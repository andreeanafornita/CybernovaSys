"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Manifesto() {
  const root = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    const words = root.current.querySelectorAll(".manifesto-text .w");
    ScrollTrigger.create({
      trigger: root.current,
      start: "top top",
      end: "+=1200",
      pin: true,
      scrub: 0.4,
      onUpdate: (self) => {
        const total = words.length;
        const idx = Math.floor(self.progress * total);
        words.forEach((w, i) => w.classList.toggle("is-on", i < idx));
      },
    });
  }, { scope: root });

  const text = "We design and build calm, opinionated software. We make the call when it matters. We ship — then we sharpen. Our work runs in production for years, not weeks.".split(" ");

  return (
    <section ref={root} className="section-full surface-paper">
      <div className="container manifesto-inner">
        <aside className="manifesto-side">
          <span className="label">Manifesto</span>
          <span className="num">01</span>
        </aside>
        <p className="manifesto-text">
          {text.map((w, i) => {
            const em = ["ship", "sharpen.", "production"].some((s) => w.includes(s));
            return (
              <span key={i} className={`w ${em ? "em" : ""}`}>
                {w}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
