'use client';

import { HeroSection } from "@/components/ui/HeroSection";

export function EntrepreneurHero() {
  return (
    <HeroSection
      preTitle="E-COMMERCE 3PL"
      title={
        <>
          ALMACENAMIENTO Y <br />
          <span className="text-secondary">FULFILLMENT PARA PyMEs</span>
        </>
      }
      description="Solución integral de almacenamiento y fulfillment para PyMEs en Mar del Plata. Contamos con depósitos propios en la ciudad para garantizar el mejor servicio 3PL."
      ctaButtons={[
        { text: "SOLICITAR PLAN CORPORATIVO", href: "/contacto", variant: "secondary" },
        { text: "AGENDAR ASESORÍA 3PL", href: "https://wa.me/5492236602699", variant: "outline", icon: "Mail" }
      ]}
      backgroundImageUrl="/bannerenvios.webp"
      backgroundImageAlt="Banner Plan Emprendedor Envios DosRuedas"
    />
  );
}
