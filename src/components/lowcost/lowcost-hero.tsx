'use client';

import { HeroSection } from "@/components/ui/HeroSection";
import RotatingCard from "@/components/homenew/rotating-card";

export function LowcostHero() {
  return (
    <HeroSection
      preTitle="TARIFA OPTIMIZADA"
      title={
        <>
          ENVÍOS LOWCOST: <br />
          <span className="text-secondary italic">MÁXIMA RENTABILIDAD</span>
        </>
      }
      description="Variabilizá tus costos logísticos con nuestro servicio de ruteo masivo inteligente. La mejor tarifa de Mar del Plata sin sacrificar seguridad."
      ctaButtons={[
        { text: "COTIZAR ENVÍO LOWCOST", href: "/cotizar/lowcost", variant: 'secondary' },
        { text: "VER TARIFAS OPTIMIZADAS", href: "#pricing-comparison", variant: 'outline', icon: 'Play' }
      ]}
      backgroundImageUrl="/bannerenvios.webp"
      backgroundImageAlt="Banner Envíos Low Cost Envios DosRuedas"
      layout="split-visual-right"
      visualElement={
        <div className="relative w-full max-w-[450px] aspect-[1.6/1]">
           <RotatingCard 
             frontImageSrc="/cards/card1.webp" 
             backImageSrc="/cards/card_moto02.webp" 
             className="w-full h-full" 
           />
        </div>
      }
    />
  );
}
