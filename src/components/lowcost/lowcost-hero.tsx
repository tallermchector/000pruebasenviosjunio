'use client';

import { HeroSection } from "@/components/ui/HeroSection";

export function LowcostHero() {
  return (
    <HeroSection
      preTitle="TARIFA OPTIMIZADA"
      title={
        <>
          ENVÍOS LOWCOST: <br />
          <span className="text-secondary">MÁXIMA RENTABILIDAD</span>
        </>
      }
      description="Variabilizá tus costos logísticos con nuestro servicio de ruteo masivo inteligente. La mejor tarifa de Mar del Plata sin sacrificar seguridad."
      ctaButtons={[
        { text: "COTIZAR ENVÍO LOWCOST", href: "/cotizar/lowcost", variant: 'secondary' },
        { text: "VER TARIFAS OPTIMIZADAS", href: "#pricing-comparison", variant: 'outline', icon: 'Play' }
      ]}
      backgroundImageUrl="/bannerenvios.webp"
      backgroundImageAlt="Banner Envíos Low Cost Envios DosRuedas"
    />
  );
}
