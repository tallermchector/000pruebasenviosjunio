'use client';

import { HeroSection } from "@/components/ui/HeroSection";
import RotatingCard from "@/components/homenew/rotating-card";

export function FaqHero() {
  return (
    <HeroSection
      preTitle="Centro de Ayuda"
      title={
        <>
          Preguntas <span className="text-secondary italic">Frecuentes</span>
        </>
      }
      description="Todo lo que necesitás saber sobre nuestra operativa, tarifas y SLAs de entrega. Transparencia total."
      ctaButtons={[
        {
          text: "Contacto Directo",
          href: "/contacto",
          variant: "secondary",
          icon: "ArrowRight"
        }
      ]}
      layout="split-visual-right"
      visualElement={
        <div className="relative w-full max-w-[450px] aspect-[1.6/1]">
           <RotatingCard 
             frontImageSrc="/cards/card_mapa.webp" 
             backImageSrc="/cards/card2.webp" 
             className="w-full h-full" 
           />
         </div>
      }
    />
  );
}

