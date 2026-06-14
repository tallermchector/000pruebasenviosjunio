import type { Metadata } from "next";
import prisma from "@/lib/prisma";
import { ServiceTypeEnum } from "../../../generated/prisma/client";
import AnimatedHeroDemo from "@/components/ui/demo";
import { VisionLogistica } from "@/components/ui/vision-logistica";
import ModernPricingPage from "@/components/ui/animated-glassy-pricing";
import type { PriceRangeClient } from "@/components/express/express-pricing-ranges";

export const metadata: Metadata = {
  title: "Nueva Demo - Envíos DosRuedas",
  description: "Página de demostración integrada con el nuevo Hero animado, visión logística y sección de tarifas interactivas.",
};

// Disable prerendering since it relies on Prisma DB
export const revalidate = 0;

async function getPriceRanges(): Promise<PriceRangeClient[]> {
  try {
    const priceRanges = await prisma.priceRange.findMany({
      where: {
        serviceType: ServiceTypeEnum.EXPRESS,
        isActive: true,
      },
      orderBy: {
        distanciaMinKm: 'asc',
      },
    });

    return priceRanges.map(pr => ({
      ...pr,
      distanciaMinKm: pr.distanciaMinKm.toNumber(),
      distanciaMaxKm: pr.distanciaMaxKm.toNumber(),
      precioRango: pr.precioRango.toNumber(),
    }));
  } catch (error) {
    console.error("Error fetching price ranges:", error);
    return [];
  }
}

export default async function NuevaPage() {
  const priceRanges = await getPriceRanges();

  return (
    <main className="min-h-screen w-full bg-background flex flex-col relative">
      <div className="relative z-10">
        <AnimatedHeroDemo />
      </div>
      <div className="relative z-10">
        <VisionLogistica />
      </div>
      <ModernPricingPage
        title={
          <>
            Nuestras Tarifas de <span className="text-cyan-400">Envíos Express</span>
          </>
        }
        subtitle="Tarifas según distancia de entrega en Mar del Plata. Envíos en moto rápidos y seguros."
        priceRanges={priceRanges}
        showAnimatedBackground={true}
      />
    </main>
  );
}
