'use client';

import { HeroSection } from "@/components/ui/HeroSection";
import RotatingCard from "@/components/homenew/rotating-card";

export default function LowCostCalculatorHero() {
  return (
    <HeroSection
      preTitle="Cotizador Low Cost"
      title={
        <>
          Cotizador de Envíos <span className="text-secondary italic">LowCost</span>
        </>
      }
      description="Eficiencia y rentabilidad. Calcula tu envío de ruteo diario masivo con entrega garantizada en el día."
      ctaButtons={[
        {
          text: "Más Información sobre Envíos Low Cost",
          href: "/servicios/envios-lowcost",
          variant: "secondary",
          icon: "ArrowRight"
        }
      ]}
      layout="split-visual-right"
      visualElement={
        <div className="relative w-full max-w-[450px] aspect-[1.6/1]">
           <RotatingCard 
             frontImageSrc="/cards/card2.webp" 
             backImageSrc="/cards/card_moto02.webp" 
             className="w-full h-full" 
           />
        </div>
      }
    />
  );
}
