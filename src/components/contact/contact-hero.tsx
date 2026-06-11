'use client';

import { HeroSection } from "@/components/ui/HeroSection";
import RotatingCard from "@/components/homenew/rotating-card";

export function ContactHero() {
  return (
    <HeroSection
      preTitle="Contacto"
      title={
        <>
          Contacto <span className="text-secondary italic">Comercial</span>
        </>
      }
      description="¿Listo para escalar tu negocio? Hablá con un asesor logístico y diseñemos un esquema tarifario a tu medida."
      ctaButtons={[
        {
          text: "Escribinos",
          href: "#contacto-formulario",
          variant: "secondary",
          icon: "Mail"
        },
        {
          text: "Preguntas Frecuentes",
          href: "/nosotros/preguntas-frecuentes",
          variant: "outline",
          icon: "ArrowRight"
        }
      ]}
      layout="split-visual-right"
      visualElement={
        <div className="relative w-full max-w-[450px] aspect-[1.6/1]">
           <RotatingCard 
             frontImageSrc="/cards/card3.webp" 
             backImageSrc="/cards/card_moto01.webp" 
             className="w-full h-full" 
           />
         </div>
      }
    />
  );
}

