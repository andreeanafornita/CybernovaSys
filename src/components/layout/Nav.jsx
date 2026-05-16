"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PageProgress from "@/components/ui/PageProgress";

const SITE_LINKS = [
  { href: "/", label: "Home", key: "home" },
  { href: "/work", label: "Work", key: "work" },
  { href: "/studio", label: "Studio", key: "studio" },
  { href: "/process", label: "Process", key: "process" },
  { href: "/shop", label: "Shop", key: "shop" },
  { href: "/news", label: "News", key: "news" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const theme = ["/work", "/process", "/shop"].includes(pathname) ? "dark" : "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);

  return (
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""} ${theme === "dark" ? "is-dark" : ""} ${menuOpen ? "is-menu-open" : ""}`}>
      <PageProgress />
      <div className="container nav-inner">
        <Link href="/" className="nav-brand">
          <img src="/cybernova-mark.svg" alt="" width="28" height="28" />
          <span className="wm">Cybernova</span>
        </Link>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {SITE_LINKS.map((l) => (
            <Link key={l.key} href={l.href} className={pathname === l.href ? "is-active" : ""}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta nav-cta--mobile">
            <span>Start a project</span>
            <ArrowRight size={14} />
          </Link>
        </nav>
        <Link href="/contact" className="nav-cta nav-cta--desktop">
          <span className="nav-cta-text">
            <span className="front">Start a project</span>
            <span className="back">Let&apos;s build it</span>
          </span>
          <ArrowRight size={14} />
        </Link>
        <button
          className="nav-hamburger"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>
    </header>
  );
}
