"use client";


import { Coins, ArrowRightCircle } from "lucide-react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { PriceRange } from '../../../generated/prisma/client';

export type PriceRangeClient = Omit<PriceRange, 'distanciaMinKm' | 'distanciaMaxKm' | 'precioRango'> & {
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
};

interface EntrepreneurPricingRangesProps {
  priceRanges: PriceRangeClient[];
}

export function EntrepreneurPricingRanges({ priceRanges }: EntrepreneurPricingRangesProps) {
  const entrepreneurTiers = [
    {
      name: "3PL Fulfillment",
      price: "$6.000",
      distanceRange: "Tarifa Plana Same Day",
      description: "Incluye almacenamiento, picking y embalaje básico.",
      features: [
        "Cobranza contra-reembolso bonificada",
        "Rechazos devueltos sin cargo",
        "Control de stock incluido",
      ],
      badgeText: "Plan E-Commerce",
    },
    {
      name: "Plan 24HS",
      price: "$3.800",
      distanceRange: "Next Day (Retiro hoy)",
      description: "Tarifas decrecientes: Pro $3.500 | Elite $3.200 | Partner $3.000",
      features: [
        "20% OFF usando Drop-Off",
        "Entrega garantizada < 24hs",
        "Ideal para grandes volúmenes",
      ],
      badgeText: "Plan Escala",
    },
    {
      name: "Cta. Cte. Flexible",
      price: "Híbrido",
      distanceRange: "LowCost + Beneficios Express",
      description: "Pagá tarifas LowCost pero con prioridad de gestión.",
      features: [
        "Corte extendido hasta 15:00 hs",
        "Elección de rango horario",
        "Facturación mensual centralizada",
      ],
      badgeText: "Plan Corporativo",
    },
  ];

  return (
    <section className="py-24 px-4 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter leading-none">
              PLANES 3PL Y <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">SOLUCIONES E-COMMERCE</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
              Elegí el plan que mejor se adapte al volumen de tu negocio. Desde almacenamiento hasta ruteo masivo.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entrepreneurTiers.map((tier, index) => {
            return (
               <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
              >
                  <div className={cn(
                      "group relative h-full rounded-xl overflow-hidden bg-card border-l-4 transition-all duration-300 flex flex-col p-8 shadow-lg hover:-translate-y-1",
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
                          {tier.badgeText}
                      </span>

                      <div className="text-center pt-8 pb-6">
                          <div className={cn(
                              "w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110",
                              index % 2 === 0
                                  ? "bg-primary/10 border border-primary/20 text-primary"
                                  : "bg-secondary/10 border border-secondary/20 text-secondary"
                          )}>
                              <Coins size={24} />
                          </div>
                          <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
                              {tier.name}
                          </h3>
                          <p className={cn(
                              "text-xs font-bold uppercase tracking-widest mt-1",
                              index % 2 === 0 ? "text-primary" : "text-secondary"
                          )}>
                              {tier.distanceRange}
                          </p>
                          <div className="text-4xl font-black text-white mt-6 font-display italic tracking-tighter">
                              {tier.price}
                          </div>
                      </div>

                      <div className="flex-grow pb-4">
                          <p className="text-gray-400 mb-6 text-center text-sm font-sans leading-relaxed">
                              {tier.description}
                          </p>
                          <ul className="space-y-4 font-sans">
                              {tier.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                      <ArrowRightCircle className={cn("w-4 h-4 mr-3 flex-shrink-0", index % 2 === 0 ? "text-primary" : "text-secondary")} />
                                      {feature}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
