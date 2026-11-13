'use client';
import ClothingRailHero from '@/components/ui/product-rail-gallery';
import { RAIL_DEMO_ITEMS } from './products';
export default function Page() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <ClothingRailHero
        items={RAIL_DEMO_ITEMS}
        hanger="none"
        eyebrow="New season · Ten pieces on the rail"
        heading="A clothing rail you can handle, right on the page."
        caption="Brush along the rail, slide a hanger, lift a piece to see the back."
        autoplay={true}
      />
    </main>
  );
}
