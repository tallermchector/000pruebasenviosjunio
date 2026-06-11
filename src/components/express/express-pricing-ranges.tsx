"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Calculator, AlertTriangle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { PriceRange } from '../../../generated/prisma/browser';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type PriceRangeClient = Omit<PriceRange, 'distanciaMinKm' | 'distanciaMaxKm' | 'precioRango'> & {
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
  nombreZona?: string;
};

interface ExpressPricingRangesProps {
  priceRanges: PriceRangeClient[];
}

export function ExpressPricingRanges({ priceRanges }: ExpressPricingRangesProps) {
  const displayedPriceRanges = priceRanges.slice(0, 4);

  const staticData = [
    {
      description: "Ideal para entregas inmediatas en el centro",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
    {
      description: "Cobertura extendida con rapidez",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
    {
      description: "Llegamos a donde otros no",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
    {
      description: "Máxima cobertura urbana",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
  ];

  return (
    <section className="py-32 px-4 bg-transparent relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-6 uppercase text-foreground tracking-tighter leading-none">
              TARIFAS 2026 <br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">ENVÍOS EXPRESS</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-8" />
            <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
              Consultá los precios actualizados para nuestro servicio premium con rango horario a elección.
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
                "group relative h-full rounded-xl overflow-hidden bg-card border-l-4 transition-all duration-300 flex flex-col p-8",
                index % 2 === 0
                  ? "border-l-primary hover:border-l-secondary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                  : "border-l-secondary hover:border-l-primary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              )}>
                <span className={cn(
                  "absolute top-0 right-0 border-b border-l-4 border-l-primary text-[9px] font-black uppercase tracking-widest py-1 px-3 shadow",
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
                    <MapPin size={24} />
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
                  <p className="text-gray-400 mb-6 text-center text-body-md font-sans leading-relaxed">
                    {staticData[index]?.description || "Servicio premium garantizado"}
                  </p>
                  <ul className="space-y-4 font-sans">
                    {(staticData[index]?.features || ["Elegís rango horario", "Seguimiento real"]).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle2 className={cn("w-4 h-4 mr-3 flex-shrink-0", index % 2 === 0 ? "text-primary" : "text-secondary")} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 space-y-12">
          {/* Cotizador CTA Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border-l-4 border-l-secondary rounded-xl overflow-hidden p-8 md:p-12 shadow-2xl relative">
               <div className="grid lg:grid-cols-3 gap-12 items-center">
                  <div className="lg:col-span-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xxs font-black tracking-[0.2em] mb-6 uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> COTIZACIÓN DINÁMICA
                    </div>
                    <h3 className="font-display text-display-md font-black text-foreground uppercase tracking-tighter mb-6 italic">
                      ZONA 5: <span className="text-secondary">$1.000 / KM</span>
                    </h3>
                    <p className="text-gray-400 font-sans text-body-lg leading-relaxed max-w-3xl">
                      Para envíos de larga distancia fuera del ejido urbano o una cotización precisa con mapa, utilizá nuestro cotizador inteligente de alta precisión.
                    </p>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                     <Button
                      asChild
                      size="lg"
                      className="bg-secondary hover:bg-yellow-500 text-black font-display font-black px-10 py-5 rounded-xl transition-all uppercase tracking-tight h-auto text-label-md shadow-[0_10px_20px_rgba(234,179,8,0.2)] border border-secondary/20 active:scale-95"
                    >
                      <Link href="/cotizar/express">
                        <Calculator className="w-5 h-5 mr-3" />
                        IR AL COTIZADOR
                      </Link>
                    </Button>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Conditions Accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
               <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
               </div>
               <h4 className="font-display font-black text-foreground text-headline-lg uppercase tracking-tight">Condiciones del Servicio Express</h4>
            </div>

            <Accordion type="single" collapsible className="w-full bg-card border-l-4 border-l-primary rounded-xl overflow-hidden shadow-lg">
              <AccordionItem value="item-1" className="border-white/5 px-6">
                <AccordionTrigger className="text-foreground hover:no-underline font-sans uppercase text-sm font-bold tracking-wider hover:text-primary transition-colors">
                  Tiempos y Tolerancia
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-sans leading-relaxed pb-6 text-body-md">
                  Contamos con una tolerancia de 10 minutos en puerta. Es fundamental que el receptor esté disponible para asegurar la eficiencia del servicio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-white/5 px-6">
                <AccordionTrigger className="text-foreground hover:no-underline font-sans uppercase text-sm font-bold tracking-wider hover:text-primary transition-colors">
                  Recargos por Clima
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-sans leading-relaxed pb-6 text-body-md">
                  En días de lluvia, se aplica un recargo del 50% sobre el valor del envío para garantizar la seguridad de nuestros repartidores y la protección de tu carga.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-white/5 px-6">
                <AccordionTrigger className="text-foreground hover:no-underline font-sans uppercase text-sm font-bold tracking-wider hover:text-primary transition-colors">
                  Bultos y Pesos
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-sans leading-relaxed pb-6 text-body-md">
                  El servicio estándar incluye un bulto de hasta 5kg/40cm. Cada bulto excedente tiene un costo adicional de $1.800.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-white/5 px-6 last:border-0">
                <AccordionTrigger className="text-foreground hover:no-underline font-sans uppercase text-sm font-bold tracking-wider hover:text-primary transition-colors">
                  Anticipación Requerida
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-sans leading-relaxed pb-6 text-body-md">
                  Para coordinar un envío express con éxito, solicitamos una anticipación mínima de 2 horas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
