import { getDictionary } from "@/lib/getDictionary";
import { StudioHero, ValuesStack, Team } from "./ClientComponents";
import BigCTA from "@/components/ui/BigCTA";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return { title: t.studio.meta.title, description: t.studio.meta.description };
}

export default async function StudioPage({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <>
      <StudioHero t={t.studio.hero} />
      <ValuesStack t={t.studio.values} />
      <Team t={t.studio.team} />
      <BigCTA
        heading={t.studio.cta.heading}
        sub={t.studio.cta.sub}
        theme="ink"
        lang={lang}
        cta1={t.homeCTA.cta1}
        cta2={t.homeCTA.cta2}
      />
    </>
  );
}
