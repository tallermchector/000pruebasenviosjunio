'use client';

import { HeroSection } from "@/components/ui/HeroSection";
import RotatingCard from "@/components/homenew/rotating-card";

export default function CalculatorHero() {
  return (
    <HeroSection
      preTitle="Cotizador Express"
      title={
        <>
          Cotizador de Envíos <span className="text-secondary italic">Express</span>
        </>
      }
      description="Calcula el costo de tu envío prioritario al instante. Alta precisión y elección de rango horario."
      ctaButtons={[
        {
          text: "Más Sobre Envíos Express",
          href: "/servicios/envios-express",
          variant: "secondary",
          icon: "ArrowRight"
        }
      ]}
      layout="split-visual-right"
      visualElement={
        <div className="relative w-full max-w-[450px] aspect-[1.6/1]">
           <RotatingCard 
             frontImageSrc="/cards/card1.webp" 
             backImageSrc="/cards/card_mapa.webp" 
             className="w-full h-full" 
           />
        </div>
      }
    />
  );
}
