import { getDictionary } from "@/lib/getDictionary";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import Manifesto from "@/components/sections/Manifesto";
import ServicesStack from "@/components/sections/ServicesStack";
import HorizontalWork from "@/components/sections/HorizontalWork";
import ServicesBento from "@/components/sections/ServicesBento";
import BigCTA from "@/components/ui/BigCTA";

export default async function HomePage({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <>
      <Hero t={t.hero} lang={lang} />
      <Marquee items={t.marquee.items} surface="ink" speed={70} />
      <Manifesto t={t.manifesto} />
      <ServicesStack t={t.servicesStack} />
      <HorizontalWork t={t.horizontalWork} lang={lang} />
      <ServicesBento t={t.servicesBento} />
      <BigCTA
        heading={t.homeCTA.heading}
        sub={t.homeCTA.sub}
        theme="rust"
        lang={lang}
        cta1={t.homeCTA.cta1}
        cta2={t.homeCTA.cta2}
      />
    </>
  );
}
