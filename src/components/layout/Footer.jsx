import Link from "next/link";

const SITE_LINKS = [
  { href: "/", label: "Home", key: "home" },
  { href: "/work", label: "Work", key: "work" },
  { href: "/studio", label: "Studio", key: "studio" },
  { href: "/process", label: "Process", key: "process" },
  { href: "/news", label: "News", key: "news" },
  { href: "/contact", label: "Contact", key: "contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer-mark">
          Cybernova<span className="dot">.</span>
        </h2>
        <div className="footer-grid">
          <div className="footer-col">
            <h5>Studio</h5>
            <p
              style={{
                fontSize: "14.5px",
                lineHeight: 1.55,
                opacity: 0.86,
                margin: 0,
                maxWidth: "36ch",
              }}
            >
              An independent product studio building websites, web apps, and
              mobile apps for teams shipping the next thing.
            </p>
          </div>
          <div className="footer-col">
            <h5>Sitemap</h5>
            {SITE_LINKS.map((l) => (
              <Link key={l.key} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <Link href="/process#web">Marketing websites</Link>
            <Link href="/process#app">Web applications</Link>
            <Link href="/process#mobile">Mobile apps</Link>
            <Link href="/process#design">Brand &amp; design</Link>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <a href="mailto:hello@cybernova.systems">hello@cybernova.systems</a>
            <a href="#">@cybernova.systems</a>
            <a href="#">Read.cv / Cybernova</a>
          </div>
        </div>
        <div className="footer-fine">
          <span>© 2026 Cybernova Systems</span>
          <span>Built in-house, in JS &amp; CSS.</span>
        </div>
      </div>
    </footer>
  );
}
