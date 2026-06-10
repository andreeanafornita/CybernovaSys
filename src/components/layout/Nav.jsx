"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PageProgress from "@/components/ui/PageProgress";

const DARK_PAGES = ["/work", "/process", "/shop"];

export default function Nav({ lang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Strip /{lang} prefix to get the "bare" path for comparison
  const barePath = pathname.replace(`/${lang}`, "") || "/";

  const isDark = DARK_PAGES.some(
    (p) => barePath === p || barePath.startsWith(p + "/")
  );

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

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  // ── Language switcher ────────────────────────────────────────
  const switchLang = useCallback(() => {
    const targetLang = lang === "en" ? "ro" : "en";
    // Replace /{lang} prefix in current path
    const newPath = pathname.replace(`/${lang}`, `/${targetLang}`);
    // Save to cookie for future visits
    document.cookie = `NEXT_LOCALE=${targetLang}; max-age=${60 * 60 * 24 * 365}; path=/; samesite=lax`;
    router.push(newPath);
  }, [lang, pathname, router]);

  return (
    <header
      className={`nav-shell ${scrolled ? "is-scrolled" : ""} ${isDark ? "is-dark" : ""} ${menuOpen ? "is-menu-open" : ""}`}
    >
      <PageProgress />
      <div className="container nav-inner">
        {/* Brand */}
        <Link href={`/${lang}`} className="nav-brand">
          <img src="/cybernova-mark.svg" alt="" width="28" height="28" />
          <span className="wm">Cybernova</span>
        </Link>

        {/* Desktop + Mobile nav links */}
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {t.links.map((l) => {
            const fullHref = `/${lang}${l.href}`;
            const isActive = pathname === fullHref || (l.href !== "/" && pathname.startsWith(fullHref));
            return (
              <Link key={l.key} href={fullHref} className={isActive ? "is-active" : ""}>
                {l.label}
              </Link>
            );
          })}
          <Link href={`/${lang}/contact`} className="nav-cta nav-cta--mobile">
            <span>{t.cta}</span>
            <ArrowRight size={14} />
          </Link>
          {/* Language switcher inside mobile menu */}
          <button
            className="nav-lang-switch nav-lang-switch--mobile-menu"
            onClick={switchLang}
            aria-label={t.langSwitchLabel}
            title={t.langSwitchLabel}
          >
            {t.langSwitch}
          </button>
        </nav>

        {/* Desktop right side: lang switcher + CTA */}
        <div className="nav-right">
          {/* Language switcher */}
          <button
            className="nav-lang-switch"
            onClick={switchLang}
            aria-label={t.langSwitchLabel}
            title={t.langSwitchLabel}
          >
            {t.langSwitch}
          </button>

          {/* CTA button with text flip */}
          <Link href={`/${lang}/contact`} className="nav-cta nav-cta--desktop">
            <span className="nav-cta-text">
              <span className="front">{t.cta}</span>
              <span className="back">{t.ctaFlip}</span>
            </span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Hamburger (mobile only) */}
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
