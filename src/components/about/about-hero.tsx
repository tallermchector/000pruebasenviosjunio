'use client';

import { HeroSection } from "@/components/ui/HeroSection";
import RotatingCard from "@/components/homenew/rotating-card";

export function AboutHero() {
  return (
    <HeroSection
      preTitle="Nuestra Historia"
      title={
        <>
          Sobre <span className="text-secondary italic">Nosotros</span>
        </>
      }
      description="Somos Envíos DosRuedas, tu solución confiable. Más de 7 años revolucionando la logística de última milla en Mar del Plata."
      ctaButtons={[
        {
          text: "Ver Servicios",
          href: "/#servicios",
          variant: "secondary",
          icon: "ArrowRight"
        }
      ]}
      layout="split-visual-right"
      visualElement={
        <div className="relative w-full max-w-[450px] aspect-[1.6/1]">
           <RotatingCard 
             frontImageSrc="/cards/card_moto01.webp" 
             backImageSrc="/cards/card3.webp" 
             className="w-full h-full" 
           />
         </div>
      }
    />
  );
}

