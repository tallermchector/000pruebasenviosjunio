'use client';

import { HeroSection } from "@/components/ui/HeroSection";
import RotatingCard from "@/components/homenew/rotating-card";

export function EntrepreneurHero() {
  return (
    <HeroSection
      preTitle="E-COMMERCE 3PL"
      title={
        <>
          ALMACENAMIENTO Y <br />
          <span className="text-secondary italic">FULFILLMENT PARA PyMEs</span>
        </>
      }
      description="Solución integral de almacenamiento y fulfillment para PyMEs en Mar del Plata. Contamos con depósitos propios en la ciudad para garantizar el mejor servicio 3PL."
      ctaButtons={[
        { text: "SOLICITAR PLAN CORPORATIVO", href: "/contacto", variant: "secondary" },
        { text: "AGENDAR ASESORÍA 3PL", href: "https://wa.me/5492236602699", variant: "outline", icon: "Mail" }
      ]}
      backgroundImageUrl="/bannerenvios.webp"
      backgroundImageAlt="Banner Plan Emprendedor Envios DosRuedas"
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
