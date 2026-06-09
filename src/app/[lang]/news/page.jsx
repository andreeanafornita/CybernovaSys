import { getDictionary } from "@/lib/getDictionary";
import { NewsHero, NewsFeed } from "./ClientComponents";
import BigCTA from "@/components/ui/BigCTA";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return { title: t.news.meta.title, description: t.news.meta.description };
}

export default async function NewsPage({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <>
      <NewsHero t={t.news.hero} />
      <NewsFeed t={t.news.feed} />
      <BigCTA
        heading={t.news.cta.heading}
        sub={t.news.cta.sub}
        theme="rust"
        lang={lang}
        cta1={t.homeCTA.cta1}
        cta2={t.homeCTA.cta2}
      />
    </>
  );
}
