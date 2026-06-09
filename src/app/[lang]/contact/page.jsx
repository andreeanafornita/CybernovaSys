import { getDictionary } from "@/lib/getDictionary";
import { ContactHero, FAQ } from "./ClientComponents";
import BigCTA from "@/components/ui/BigCTA";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return { title: t.contact.meta.title, description: t.contact.meta.description };
}

export default async function ContactPage({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <>
      <ContactHero t={t.contact.hero} tForm={t.contact.form} />
      <FAQ t={t.contact.faq} />
      <BigCTA
        heading={t.contact.cta.heading}
        sub={t.contact.cta.sub}
        theme="ink"
        primaryHref="mailto:hello@cybernova.systems"
        lang={lang}
        cta1={t.homeCTA.cta1}
        cta2={t.homeCTA.cta2}
      />
    </>
  );
}
