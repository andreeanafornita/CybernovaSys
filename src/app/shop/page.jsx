import { ShopHero, ShopGrid } from "./ClientComponents";

export const metadata = {
  title: "Shop — Custom High-Performance PCs",
  description: "Browse our exclusive line of custom-built, ultra-performance workstations and gaming rigs. Built for scale, designed for awe.",
};

export default function ShopPage() {
  return (
    <main>
      <ShopHero />
      <ShopGrid />
    </main>
  );
}
