import { notFound } from "next/navigation";
import { ProductHero, ProductSpecs, StickyPurchaseBar } from "./ClientComponents";

const PCS = {
  "nova-core": {
    id: "nova-core",
    name: "Nova Core.",
    tagline: "The foundation of performance.",
    desc: "Engineered for enthusiasts who demand flawless execution without the excess. Pure, unadulterated speed housed in a minimal footprint.",
    price: "$2,499",
    color: "#42BFA8",
    specs: { cpu: "Ryzen 7 7800X3D", gpu: "RTX 4070 Ti SUPER", ram: "32GB DDR5" }
  },
  "quantum-pro": {
    id: "quantum-pro",
    name: "Quantum Pro.",
    tagline: "Unbound creativity.",
    desc: "A creator's dream. Massive bandwidth and rendering power, wrapped in a monolithic silence. The ultimate tool for professionals.",
    price: "$4,299",
    color: "#B54E3C",
    specs: { cpu: "Core i9-14900K", gpu: "RTX 4090 24GB", ram: "64GB DDR5" }
  },
  "singularity": {
    id: "singularity",
    name: "Singularity.",
    tagline: "Beyond all limits.",
    desc: "Custom liquid-cooled architecture designed to shatter benchmarks. An uncompromising beast that redefines what a personal computer can do.",
    price: "$6,899",
    color: "#EAE6D7",
    specs: { cpu: "Ryzen 9 7950X", gpu: "Dual RTX 4090", ram: "128GB DDR5" }
  }
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const pc = PCS[id];
  if (!pc) return { title: "Product Not Found" };
  
  return {
    title: `${pc.name} — Cybernova Systems`,
    description: pc.tagline,
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const pc = PCS[id];
  if (!pc) notFound();

  return (
    <main className="surface-ink" style={{ minHeight: '100vh', paddingBottom: '120px' }}>
      <ProductHero pc={pc} />
      <ProductSpecs pc={pc} />
      <StickyPurchaseBar pc={pc} />
    </main>
  );
}
