import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import { ProductHero, ProductSpecs, StickyPurchaseBar } from "./ClientComponents";

export async function generateMetadata({ params }) {
  const { lang, id } = await params;
  const t = getDictionary(lang);
  const pc = t.shop.pcs.find((p) => p.id === id);
  if (!pc) return { title: "Product Not Found" };
  return {
    title: `${pc.name} — Cybernova Systems`,
    description: pc.tagline,
  };
}

export default async function ProductPage({ params }) {
  const { lang, id } = await params;
  const t = getDictionary(lang);
  const pc = t.shop.pcs.find((p) => p.id === id);
  if (!pc) notFound();

  // Resolve CSS variable colors to actual hex for this page
  const colorMap = {
    "var(--cs-teal)": "#37b29f",
    "var(--cs-rust)": "#aa4734",
    "var(--cs-cream)": "#d6c9ad",
  };
  const resolvedPc = { ...pc, color: colorMap[pc.color] || pc.color };

  return (
    <div className="surface-ink" style={{ minHeight: "100vh", paddingBottom: "120px" }}>
      <ProductHero pc={resolvedPc} specLabels={t.shop.specLabels} purchaseBtn={t.shop.purchaseBtn} />
      <ProductSpecs pc={resolvedPc} specLabels={t.shop.specLabels} />
      <StickyPurchaseBar pc={resolvedPc} purchaseBtn={t.shop.purchaseBtn} />
    </div>
  );
}
