'use client';

import { HeroSection } from "@/components/ui/HeroSection";
import RotatingCard from "@/components/homenew/rotating-card";

export function ExpressHero() {
  return (
    <HeroSection
      preTitle="DISPONIBLE EN MAR DEL PLATA"
      title={
        <>
          ENVÍOS EXPRESS <br />
          <span className="text-secondary italic">INMEDIATOS</span>
        </>
      }
      description="La solución premium para operaciones de alta criticidad horaria. Vos tenés el control total: elegí el rango exacto de entrega con certeza absoluta."
      ctaButtons={[
        { text: "COTIZÁ TU ENVÍO EXPRESS", href: "/cotizar/express", variant: "secondary" },
        { text: "HABLAR POR WHATSAPP", href: "https://wa.me/5492236602699", variant: "outline", icon: "Mail" },
      ]}
      backgroundImageUrl="/bannerenvios.webp"
      backgroundImageAlt="Banner envíos express Envios DosRuedas"
      layout="split-visual-right"
      visualElement={
        <div className="relative w-full max-w-[450px] aspect-[1.6/1]">
           <RotatingCard className="w-full h-full" />
        </div>
      }
    />
  );
}
