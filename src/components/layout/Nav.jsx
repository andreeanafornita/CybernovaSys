"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowIcon } from "@/components/icons";
import PageProgress from "@/components/ui/PageProgress";

const SITE_LINKS = [
  { href: "/", label: "Home", key: "home" },
  { href: "/work", label: "Work", key: "work" },
  { href: "/studio", label: "Studio", key: "studio" },
  { href: "/process", label: "Process", key: "process" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const theme = ["/work", "/process"].includes(pathname) ? "dark" : "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""} ${theme === "dark" ? "is-dark" : ""}`}>
      <PageProgress />
      <div className="container nav-inner">
        <Link href="/" className="nav-brand">
          <img src="/cybernova-mark.svg" alt="" width="28" height="28" />
          <span className="wm">Cybernova</span>
        </Link>
        <nav className="nav-links">
          {SITE_LINKS.map((l) => (
            <Link key={l.key} href={l.href} className={pathname === l.href ? "is-active" : ""}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="nav-cta">
          Start a project <ArrowIcon size={14} />
        </Link>
      </div>
    </header>
  );
}
