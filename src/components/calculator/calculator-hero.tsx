'use client';

import { HeroSection } from "@/components/ui/HeroSection";

export default function CalculatorHero() {
  return (
    <HeroSection
      preTitle="Cotizador Express"
      title={
        <>
          Cotizador de Envíos <span className="text-secondary">Express</span>
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
    />
  );
}
