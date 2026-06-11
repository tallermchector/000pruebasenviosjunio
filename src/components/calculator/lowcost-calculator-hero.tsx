'use client';

import { HeroSection } from "@/components/ui/HeroSection";

export default function LowCostCalculatorHero() {
  return (
    <HeroSection
      preTitle="Cotizador Low Cost"
      title={
        <>
          Cotizador de Envíos <span className="text-secondary">LowCost</span>
        </>
      }
      description="Eficiencia y rentabilidad. Calcula tu envío de ruteo diario masivo con entrega garantizada en el día."
      ctaButtons={[
        {
          text: "Más Información sobre Envíos Low Cost",
          href: "/servicios/envios-lowcost",
          variant: "secondary",
          icon: "ArrowRight"
        }
      ]}
    />
  );
}
