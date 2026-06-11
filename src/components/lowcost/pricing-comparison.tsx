"use client";

import { Button } from "@/components/ui/button";
import { MapPin, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { PriceRange } from '../../../generated/prisma/client/client';

export type PriceRangeClient = Omit<PriceRange, 'distanciaMinKm' | 'distanciaMaxKm' | 'precioRango'> & {
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
  nombreZona?: string;
};

interface PricingComparisonProps {
  priceRanges: PriceRangeClient[];
}

export function PricingComparison({ priceRanges }: PricingComparisonProps) {
  const displayedPriceRanges = priceRanges.slice(0, 4);

  const staticData = [
    {
      description: "La mejor tarifa para ruteo en el centro",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
    },
    {
      description: "Cobertura extendida económica",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
    },
    {
      description: "Llegamos a toda la ciudad al mejor costo",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
    },
    {
      description: "Máximo ahorro en distancias largas",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
    },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699";
    const message = "Hola, necesito cotizar un envío Low Cost de más de 13 km.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="pricing-comparison" className="py-24 px-4 bg-transparent relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-black italic mb-6 uppercase text-foreground tracking-tighter leading-none">
              TARIFAS 2026 <br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">ENVÍOS LOWCOST</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
              Eficiencia en ruteo masivo. Garantizamos entregas antes de las 19:00 hs para pedidos antes de las 13:00 hs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedPriceRanges.map((range, index) => (
            <motion.div
              key={range.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={cn(
                "group relative h-full rounded-xl overflow-hidden bg-card border-l-4 transition-all duration-300 flex flex-col p-8 shadow-lg",
                index % 2 === 0
                  ? "border-l-primary hover:border-l-secondary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                  : "border-l-secondary hover:border-l-primary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              )}>
                <span className={cn(
                  "absolute top-0 right-0 border-b border-l text-[9px] font-black uppercase tracking-widest py-1 px-3 shadow",
                  index % 2 === 0
                    ? "bg-primary/10 border-primary/20 text-primary"
                    : "bg-secondary/10 border-secondary/20 text-secondary"
                )}>
                  Tarifa 2026
                </span>

                <div className="text-center pt-8 pb-6">
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110",
                    index % 2 === 0
                      ? "bg-primary/10 border border-primary/20 text-primary"
                      : "bg-secondary/10 border border-secondary/20 text-secondary"
                  )}>
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-headline-lg font-bold text-foreground uppercase tracking-tight">
                    {range.nombreZona || `Zona ${index + 1}`}
                  </h3>
                  <p className={cn(
                    "text-xs font-bold uppercase tracking-widest mt-1",
                    index % 2 === 0 ? "text-primary" : "text-secondary"
                  )}>
                    {index === 0 ? "Radio céntrico" : index === 1 ? "Periferia cercana" : index === 2 ? "Zonas alejadas" : "Límites de ciudad"}
                  </p>
                  <div className="text-4xl font-black text-foreground mt-6 font-display italic tracking-tighter">
                    ${range.precioRango.toLocaleString('es-AR')}
                  </div>
                </div>

                <div className="flex-grow pb-4">
                  <p className="text-gray-400 mb-6 text-center text-body-md font-sans leading-relaxed font-sans">
                    {staticData[index]?.description || "Eficiencia en ruteo masivo"}
                  </p>
                  <ul className="space-y-4 font-sans">
                    {(staticData[index]?.features || ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"]).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-body-md">
                        <ArrowRightCircle className={cn("w-4 h-4 mr-3 flex-shrink-0", index % 2 === 0 ? "text-primary" : "text-secondary")} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-12"
        >
          <div className="bg-card border-l-4 border-l-primary rounded-xl overflow-hidden p-8 md:p-12 shadow-2xl relative">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xxs font-black tracking-[0.2em] mb-6 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> COTIZACIÓN ESPECIAL
                  </div>
                  <h3 className="font-display text-display-md font-black text-foreground uppercase tracking-tighter mb-4 italic">
                    ZONA 5: <span className="text-secondary">$700 / KM</span>
                  </h3>
                  <p className="text-gray-400 font-sans leading-relaxed text-body-lg">
                    Para envíos de larga distancia fuera del ejido urbano masivo, ofrecemos la tarifa más competitiva por kilómetro.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                   <Button
                    onClick={handleWhatsAppClick}
                    className="bg-secondary hover:bg-yellow-500 text-black font-display font-black px-10 py-5 rounded-xl transition-all uppercase tracking-tight shadow-[0_10px_20px_rgba(234,179,8,0.2)] border border-secondary/20 active:scale-95 h-auto text-label-md"
                  >
                    <Image src="/icon/icon-whatsapp.svg" alt="WhatsApp Icon" width={24} height={24} className="w-5 h-5 mr-3" />
                    CONSULTAR POR WHATSAPP
                  </Button>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
