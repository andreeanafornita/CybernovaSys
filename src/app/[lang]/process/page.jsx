import { getDictionary } from "@/lib/getDictionary";
import { ProcessHero, PinnedSteps, Timeline } from "./ClientComponents";
import BigCTA from "@/components/ui/BigCTA";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return { title: t.process.meta.title, description: t.process.meta.description };
}

export default async function ProcessPage({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <>
      <ProcessHero t={t.process.hero} />
      <PinnedSteps t={t.process} />
      <Timeline t={t.process.timeline} />
      <BigCTA
        heading={t.process.cta.heading}
        sub={t.process.cta.sub}
        theme="rust"
        lang={lang}
        cta1={t.homeCTA.cta1}
        cta2={t.homeCTA.cta2}
      />
    </>
  );
}
