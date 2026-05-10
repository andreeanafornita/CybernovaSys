import { WorkHero, FeaturedCase, CaseGrid } from "./ClientComponents";
import BigCTA from "@/components/ui/BigCTA";

export const metadata = {
  title: "Work — Cybernova Systems",
  description: "Twelve products, three continents, one stack. Each of these is in production today.",
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <FeaturedCase />
      <CaseGrid />
      <BigCTA heading={["Project shaped?", "Let's talk."]} sub="The next intake is open through August 2026." theme="rust" />
    </>
  );
}
