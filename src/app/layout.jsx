import "@/app/globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Cybernova Systems — Websites, web apps, mobile apps",
  description: "An independent product studio building websites, web apps, and mobile apps for teams shipping the next thing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav theme="light" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
