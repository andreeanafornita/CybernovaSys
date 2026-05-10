import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import Manifesto from "@/components/sections/Manifesto";
import ServicesStack from "@/components/sections/ServicesStack";
import HorizontalWork from "@/components/sections/HorizontalWork";
import BigCTA from "@/components/ui/BigCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee
        items={["Cybernova Systems", "Websites", "Web apps", "Mobile apps", "Brand systems", "Made in EU"]}
        surface="ink"
        speed={70}
      />
      <Manifesto />
      <ServicesStack />
      <HorizontalWork />
      <BigCTA
        heading={["Have a thing", "to ship?"]}
        sub="We take on six to eight projects a year. The next intake is open through August 2026."
        theme="rust"
      />
    </>
  );
}
