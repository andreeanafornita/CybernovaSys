import { ProcessHero, PinnedSteps, Timeline } from "./ClientComponents";
import BigCTA from "@/components/ui/BigCTA";

export const metadata = {
  title: "Process — Cybernova Systems",
  description: "Four phases. Two weekly checkpoints. One Notion you can actually navigate.",
};

export default function ProcessPage() {
  return (
    <>
      <ProcessHero />
      <PinnedSteps />
      <Timeline />
      <BigCTA heading={["Sounds like a fit?", "Send us a brief."]} sub="A short paragraph is enough to start. We respond within two working days." theme="rust" />
    </>
  );
}
