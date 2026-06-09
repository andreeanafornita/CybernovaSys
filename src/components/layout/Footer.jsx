import Link from "next/link";

export default function Footer({ lang, t }) {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer-mark">
          Cybernova<span className="dot">.</span>
        </h2>
        <div className="footer-grid">
          <div className="footer-col">
            <h5>Studio</h5>
            <p style={{ fontSize: "14.5px", lineHeight: 1.55, opacity: 0.86, margin: 0, maxWidth: "36ch" }}>
              {t.studioDesc}
            </p>
          </div>
          <div className="footer-col">
            <h5>{t.col_sitemap}</h5>
            {t.sitemapLinks.map((l) => (
              <Link key={l.href} href={`/${lang}${l.href === "/" ? "" : l.href}`}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <h5>{t.col_services}</h5>
            {t.serviceLinks.map((l) => (
              <Link key={l.href} href={`/${lang}${l.href}`}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <h5>{t.col_contact}</h5>
            <a href="mailto:hello@cybernova.systems">hello@cybernova.systems</a>
            <a href="#">@cybernova.systems</a>
            <a href="#">Read.cv / Cybernova</a>
          </div>
        </div>
        <div className="footer-fine">
          <span>{t.copy}</span>
          <span>{t.built}</span>
        </div>
      </div>
    </footer>
  );
}
