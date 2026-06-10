import "@/app/globals.css";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { getDictionary, LOCALES } from "@/lib/getDictionary";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isRo = lang === "ro";
  return {
    title: isRo
      ? "Cybernova Systems — Website-uri, Aplicații Web & Mobile, Google Ads, TikTok Ads"
      : "Cybernova Systems — Custom Websites, Web Apps, Mobile Apps & Digital Ads",
    description: isRo
      ? "Agenție digitală din România: construim website-uri profesionale, aplicații web și mobile, magazine online, și gestionăm campanii Google Ads, Facebook Ads, Instagram Ads și TikTok Ads. Automatizări AI pentru orice afacere B2C sau B2B."
      : "Digital agency: custom websites, web apps, mobile apps, e-commerce stores, Google Ads, Facebook Ads, Instagram Ads, TikTok Ads management, and AI automation for B2C and B2B businesses.",
    metadataBase: new URL("https://cybernova.systems"),
    keywords: isRo
      ? ["website", "aplicatie web", "aplicatie mobila", "google ads", "facebook ads", "instagram ads", "tiktok ads", "magazine online", "automatizari AI", "agentie digitala", "web design", "dezvoltare software"]
      : ["website design", "web app development", "mobile app", "google ads agency", "facebook ads", "instagram ads", "tiktok ads", "e-commerce", "AI automation", "digital agency"],
    openGraph: {
      title: isRo
        ? "Cybernova Systems — Website-uri, Aplicații Web & Mobile, Google Ads, TikTok Ads"
        : "Cybernova Systems — Custom Websites, Web Apps, Mobile Apps & Digital Ads",
      description: isRo
        ? "Agenție digitală: website-uri, aplicații web și mobile, magazine online, Google Ads, Facebook Ads, Instagram Ads, TikTok Ads și automatizări AI."
        : "Custom websites, web & mobile apps, e-commerce, Google Ads, Facebook Ads, TikTok Ads, and AI automation. Everything to grow your business online.",
      type: "website",
      locale: isRo ? "ro_RO" : "en_US",
      siteName: "Cybernova Systems",
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://cybernova.systems/${lang}`,
      languages: {
        "en": "https://cybernova.systems/en",
        "ro": "https://cybernova.systems/ro",
      },
    },
  };
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Cybernova Systems",
              url: "https://cybernova.systems",
              description:
                "Digital agency specializing in custom website design, web app development, mobile apps, e-commerce, Google Ads, Facebook Ads, Instagram Ads, TikTok Ads management, and AI automation for B2C and B2B businesses.",
              foundingDate: "2021",
              areaServed: "Worldwide",
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@cybernova.systems",
                contactType: "customer service",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Website Design & Development" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Application Development" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development (iOS & Android)" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Commerce Store Development" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facebook & Instagram Ads Management" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "TikTok Ads Management" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation & Business Automation" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        <Nav lang={lang} t={dict.nav} />
        <main>{children}</main>
        <Footer lang={lang} t={dict.footer} />
      </body>
    </html>
  );
}
