"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowIcon } from "@/components/icons";

function WorkGlyph({ idx }) {
  const sizes = ["340", "300", "380", "320"];
  return (
    <svg width={sizes[idx % sizes.length]} height={sizes[idx % sizes.length]} viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="200" cy="200" r="190" />
      <circle cx="200" cy="200" r="140" />
      <circle cx="200" cy="200" r="90" />
      <circle cx="200" cy="200" r="40" />
      <line x1="10" y1="200" x2="390" y2="200" />
      <line x1="200" y1="10" x2="200" y2="390" />
    </svg>
  );
}

export default function HorizontalWork() {
  const root = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current || !trackRef.current) return;
    // Disable horizontal scroll on mobile
    if (window.innerWidth < 769) return;
    const track = trackRef.current;
    const dist = () => track.scrollWidth - window.innerWidth;
    gsap.to(track, {
      x: () => -dist(),
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "top top",
        end: () => "+=" + dist(),
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: root });

  const cases = [
    { tone: "", meta: ["EstateX", "2025 · Web app"], title: "Listing engine for an estate portal", desc: "Typed Next.js front, Postgres/Prisma back, Mapbox-driven search. Replaced a creaking PHP build in 14 weeks." },
    { tone: "--ink", meta: ["FloteAuto", "2025 · Mobile + Web"], title: "Owner-mechanic app, end-to-end", desc: "Service log, photo intake, parts SKU lookup. Native iOS/Android and a workshop dashboard, designed in lockstep." },
    { tone: "--rust", meta: ["Notariat Azur", "2024 · Marketing site"], title: "Editorial relaunch for a notary office", desc: "Calm, rigorous, French-bilingual. Booking flow attached to their case-management API." },
    { tone: "--teal", meta: ["Loop Café", "2024 · Web app"], title: "Subscription coffee, run on Stripe", desc: "Self-serve management, pause/resume, gift flows. Two-week build, three years and counting in production." },
  ];

  return (
    <section ref={root} className="section-full surface-paper h-scroll-shell tight">
      <div className="container" style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
          <span className="eyebrow">
            <span className="dot">●</span> Selected work
          </span>
          <Link href="/work" className="btn btn-ghost-dark">
            All projects <span className="arrow"><ArrowIcon size={14} /></span>
          </Link>
        </div>
      </div>
      <div className="h-scroll-track" ref={trackRef}>
        {cases.map((c, i) => (
          <article key={i} className={`h-scroll-card ${c.tone}`}>
            <div className="top">
              <span>{c.meta[0]}</span>
              <span>{c.meta[1]}</span>
            </div>
            <div className="img">
              <WorkGlyph idx={i} />
            </div>
            <h3>{c.title}</h3>
            <p className="desc">{c.desc}</p>
          </article>
        ))}
        <div style={{ flex: "0 0 4vw" }} />
      </div>
    </section>
  );
}
