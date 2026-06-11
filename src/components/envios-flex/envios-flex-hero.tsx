'use client';

import { HeroSection } from "@/components/ui/HeroSection";

export function EnviosFlexHero() {
  return (
    <HeroSection
      preTitle="BENEFICIO EMPRENDEDORES"
      title={
        <>
          ENVÍOS FLEX MERCADOLIBRE: <br />
          <span className="text-secondary">POTENCIÁ TU REPUTACIÓN</span>
        </>
      }
      description="Somos expertos en la logística de MercadoLibre. Optimizamos tus entregas Same-Day para que tu medidor siempre esté en verde y vos solo te enfoques en vender."
      ctaButtons={[
        { text: "ACTIVAR ENVÍOS FLEX", href: "/cotizar/lowcost", variant: "secondary" },
        { text: "CONTACTAR ASESOR FLEX", href: "https://wa.me/5492236602699", variant: "outline", icon: "Mail" }
      ]}
      backgroundImageUrl="/bannerenvios.webp"
      backgroundImageAlt="Banner Envíos Flex Envios DosRuedas"
    />
  );
}
