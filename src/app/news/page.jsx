import { NewsHero, NewsFeed } from "./ClientComponents";
import BigCTA from "@/components/ui/BigCTA";

export const metadata = {
  title: "News — Cybernova Systems",
  description: "Project launches, process insights, and studio updates from Cybernova Systems.",
};

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <NewsFeed />
      <BigCTA
        heading={["Got a story?", "We'll read it."]}
        sub="If you're building something worth talking about, we'd love to hear from you."
        theme="rust"
      />
    </>
  );
}
