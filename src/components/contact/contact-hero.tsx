'use client';

import { HeroSection } from "@/components/ui/HeroSection";

export function ContactHero() {
  return (
    <HeroSection
      title={
        <>
          CONTACTO <span className="text-secondary">COMERCIAL</span>
        </>
      }
      description="¿Listo para escalar tu negocio? Hablá con un asesor logístico y diseñemos un esquema tarifario a tu medida."
      backgroundImageUrl="/bannerenvios.png"
      backgroundImageAlt="Banner contacto Envios DosRuedas"
    />
  );
}
