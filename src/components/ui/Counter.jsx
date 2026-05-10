"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Counter({ to, suffix = "", duration = 1.4 }) {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!ref.current) return;
    
    const obj = { v: 0 };
    gsap.to(obj, {
      v: to,
      duration,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%" },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = Math.round(obj.v) + suffix;
      },
    });
  }, { scope: ref, dependencies: [to, suffix, duration] });

  return <span ref={ref} dangerouslySetInnerHTML={{ __html: `0${suffix}` }} />;
}
