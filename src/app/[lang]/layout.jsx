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
      ? "Cybernova Systems — Website-uri, aplicații web, mobile"
      : "Cybernova Systems — Websites, web apps, mobile apps",
    description: isRo
      ? "Un studio independent care construiește website-uri, aplicații web și mobile pentru echipe care lansează lucruri noi."
      : "An independent product studio building websites, web apps, and mobile apps for teams shipping the next thing.",
    metadataBase: new URL("https://cybernova.systems"),
    openGraph: {
      title: isRo
        ? "Cybernova Systems — Website-uri, aplicații web, mobile"
        : "Cybernova Systems — Websites, web apps, mobile apps",
      description: isRo
        ? "Un studio independent care construiește website-uri, aplicații web și mobile pentru echipe care lansează lucruri noi."
        : "An independent product studio building websites, web apps, and mobile apps for teams shipping the next thing.",
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
              "@type": "Organization",
              name: "Cybernova Systems",
              url: "https://cybernova.systems",
              description:
                "An independent product studio building websites, web apps, and mobile apps.",
              foundingDate: "2021",
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@cybernova.systems",
                contactType: "customer service",
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
