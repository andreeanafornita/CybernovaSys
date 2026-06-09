import { getDictionary } from "@/lib/getDictionary";
import { WorkHero, FeaturedCase, CaseGrid } from "./ClientComponents";
import BigCTA from "@/components/ui/BigCTA";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return { title: t.work.meta.title, description: t.work.meta.description };
}

export default async function WorkPage({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <>
      <WorkHero t={t.work.hero} />
      <FeaturedCase t={t.work.featured} lang={lang} />
      <CaseGrid t={t.work.grid} />
      <BigCTA
        heading={t.work.cta.heading}
        sub={t.work.cta.sub}
        theme="rust"
        lang={lang}
        cta1={t.homeCTA.cta1}
        cta2={t.homeCTA.cta2}
      />
    </>
  );
}
