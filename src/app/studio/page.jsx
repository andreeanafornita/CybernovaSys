import { StudioHero, ValuesStack, Team } from "./ClientComponents";
import BigCTA from "@/components/ui/BigCTA";

export const metadata = {
  title: "Studio — Cybernova Systems",
  description: "A small studio that ships, then sharpens.",
};

export default function StudioPage() {
  return (
    <>
      <StudioHero />
      <ValuesStack />
      <Team />
      <BigCTA heading={["Want to work", "with us?"]} sub="We respond to every brief — usually within two working days." theme="ink" />
    </>
  );
}
