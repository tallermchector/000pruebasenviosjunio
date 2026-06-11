'use client';

import { HeroSection } from "@/components/ui/HeroSection";

export function FaqHero() {
  return (
    <HeroSection
      title="Preguntas Frecuentes"
      description="Todo lo que necesitás saber sobre nuestra operativa, tarifas y SLAs de entrega. Transparencia total."
      backgroundImageUrl="/bannerenvios.png"
      backgroundImageAlt="Banner FAQ Envios DosRuedas"
    />
  );
}
