import { ContactHero, FAQ } from "./ClientComponents";
import BigCTA from "@/components/ui/BigCTA";

export const metadata = {
  title: "Contact — Cybernova Systems",
  description: "Tell us what you're building. One paragraph is enough.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <FAQ />
      <BigCTA heading={["Or just write", "an email."]} sub="hello@cybernova.systems — straight to a real human." theme="ink" primaryHref="mailto:hello@cybernova.systems" />
    </>
  );
}
