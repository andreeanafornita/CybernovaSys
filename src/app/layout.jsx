import "@/app/globals.css";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

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

export const metadata = {
  title: "Cybernova Systems — Websites, web apps, mobile apps",
  description:
    "An independent product studio building websites, web apps, and mobile apps for teams shipping the next thing.",
  metadataBase: new URL("https://cybernova.systems"),
  openGraph: {
    title: "Cybernova Systems — Websites, web apps, mobile apps",
    description:
      "An independent product studio building websites, web apps, and mobile apps for teams shipping the next thing.",
    type: "website",
    locale: "en_US",
    siteName: "Cybernova Systems",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
