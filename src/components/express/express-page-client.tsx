'use client';

import { ExpressHero } from "@/components/express/express-hero";
import { ExpressContent } from "@/components/express/express-content";
import { ExpressBenefits } from "@/components/express/express-benefits";
import { UrgentScenarios } from "@/components/express/urgent-scenarios";
import { ExpressCta } from "@/components/express/express-cta";
import { ExpressPricingRanges, type PriceRangeClient } from "@/components/express/express-pricing-ranges";

interface ExpressPageClientProps {
  priceRanges: PriceRangeClient[];
}

export function ExpressPageClient({ priceRanges }: ExpressPageClientProps) {
  return (
    <>
      <ExpressHero />
      <ExpressContent />
      <div id="express-pricing-ranges">
        <ExpressPricingRanges priceRanges={priceRanges} />
      </div>
      <ExpressBenefits />
      <UrgentScenarios />
      <ExpressCta />
    </>
  );
}
