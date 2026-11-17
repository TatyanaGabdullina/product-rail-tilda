'use client';
import ClothingRailHero from '@/components/ui/product-rail-gallery';
import { RAIL_DEMO_ITEMS } from './products';
export default function Page() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <ClothingRailHero
        items={RAIL_DEMO_ITEMS}
        hanger="none"
        caption="Prechádzajte po lište, posúvajte vešiaky a nadvihnite si kúsok oblečenia, aby ste si pozreli jeho zadnú stranu."
        autoplay={true}
      />
    </main>
  );
}
