"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";

export function ContactHero({ t, tForm }) {
  const root = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "",
    service: tForm.services[0],
    budget: tForm.budgets[1],
    message: "",
  });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  useGSAP(() => {
    if (!root.current) return;
    gsap.fromTo(root.current.querySelectorAll(".split-word"),
      { yPercent: 110 },
      { yPercent: 0, duration: 0.95, stagger: 0.04, ease: "power3.out" });
    gsap.from(root.current.querySelector(".contact-form"), { y: 30, opacity: 0, duration: 0.8, delay: 0.4, ease: "power3.out" });
    gsap.from(root.current.querySelector(".contact-side .lead"), { y: 18, opacity: 0, duration: 0.7, delay: 0.5, ease: "power3.out" });
    gsap.from(root.current.querySelectorAll(".contact-side .info-row"), { y: 14, opacity: 0, duration: 0.6, stagger: 0.08, delay: 0.6, ease: "power3.out" });
  }, { scope: root });

  return (
    <section ref={root} className="section-full surface-teal">
      <div className="container contact-hero-grid">
        <div className="contact-side">
          <span className="eyebrow"><span className="dot">●</span> {t.eyebrow}</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(3rem, 1rem + 6vw, 6rem)", lineHeight: 0.98, letterSpacing: "-0.035em", margin: "24px 0 24px" }}>
            <span className="split-line">{t.headlineLine1.map((w, i) => <span key={i} className="split-word" style={{ paddingRight: "0.18em" }}>{w}</span>)}</span>
            <span className="split-line">{t.headlineLine2.map((w, i) => <span key={i} className="split-word" style={{ paddingRight: "0.18em", color: "var(--cs-rust)", fontStyle: "italic" }}>{w}</span>)}</span>
          </h1>
          <p className="lead" style={{ marginBottom: 32 }}>{t.lead}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { label: t.labelEmail,  value: <a href="mailto:hello@cybernova.systems" style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}>hello@cybernova.systems</a> },
              { label: t.labelOffice, value: <span style={{ fontWeight: 600 }}>{t.officeValue}</span> },
              { label: t.labelIntake, value: <span style={{ fontWeight: 600 }}>{t.intakeValue}</span> },
            ].map((row, i) => (
              <div key={i} className="info-row" style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid color-mix(in oklab, currentColor 22%, transparent)", paddingTop: 14 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.65 }}>{row.label}</span>
                {row.value}
              </div>
            ))}
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          {submitted ? (
            <div style={{ padding: "32px 8px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 28, letterSpacing: "-0.02em", marginBottom: 10 }}>{tForm.successTitle}</div>
              <p style={{ opacity: 0.8, fontSize: 15 }}>{tForm.successBody}</p>
            </div>
          ) : (
            <>
              <div className="field-row">
                <div className="field"><label>{tForm.labelName}</label><input value={form.name} onChange={set("name")} placeholder={tForm.placeholderName} required /></div>
                <div className="field"><label>{tForm.labelEmail}</label><input type="email" value={form.email} onChange={set("email")} placeholder={tForm.placeholderEmail} required /></div>
              </div>
              <div className="field-row">
                <div className="field"><label>{tForm.labelService}</label>
                  <select value={form.service} onChange={set("service")}>
                    {tForm.services.map((s, i) => <option key={i}>{s}</option>)}
                  </select>
                </div>
                <div className="field"><label>{tForm.labelBudget}</label>
                  <select value={form.budget} onChange={set("budget")}>
                    {tForm.budgets.map((b, i) => <option key={i}>{b}</option>)}
                  </select>
                </div>
              </div>
              <div className="field"><label>{tForm.labelMessage}</label><textarea value={form.message} onChange={set("message")} placeholder={tForm.placeholderMessage} required /></div>
              <button className="btn btn-primary" type="submit" style={{ alignSelf: "flex-start" }}>
                {tForm.submit} <span className="arrow"><ArrowRight size={16} /></span>
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export function FAQ({ t }) {
  const root = useRef(null);
  const [open, setOpen] = useState(0);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    gsap.fromTo(root.current.querySelectorAll(".faq-item"),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, stagger: 0.06, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" } });
  }, { scope: root });

  return (
    <section ref={root} className="section-full surface-paper">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
          <span className="eyebrow"><span className="dot">●</span> {t.eyebrow}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, opacity: 0.6, letterSpacing: "0.14em", textTransform: "uppercase" }}>{t.subtitle}</span>
        </div>
        <div className="faq-list">
          {t.items.map((it, i) => (
            <article key={i} className={`faq-item ${open === i ? "is-open" : ""}`}>
              <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span><span className="icon">+</span>
              </div>
              <div className="faq-a"><div className="faq-a-inner">{it.a}</div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
