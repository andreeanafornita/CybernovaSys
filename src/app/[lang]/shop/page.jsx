import { getDictionary } from "@/lib/getDictionary";
import { ShopHero, ShopGrid } from "./ClientComponents";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return { title: t.shop.meta.title, description: t.shop.meta.description };
}

export default async function ShopPage({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <>
      <ShopHero t={t.shop.hero} />
      <ShopGrid t={t.shop} lang={lang} />
    </>
  );
}
