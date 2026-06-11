"use client";

import { Button } from "@/components/ui/button";
import { Coins, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { PriceRange } from '../../../generated/prisma/client/client';

export type PriceRangeClient = Omit<PriceRange, 'distanciaMinKm' | 'distanciaMaxKm' | 'precioRango'> & {
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
};

interface FlexPricingRangesProps {
  priceRanges: PriceRangeClient[];
}

export function FlexPricingRanges({ priceRanges }: FlexPricingRangesProps) {
    const flexTiers = [
        {
            name: "Nivel 1",
            price: "Tarifa Clásica",
            distanceRange: "1 a 4 envíos diarios",
            description: "Ideal para vendedores que recién comienzan con Flex.",
            features: [
                "Tarifa zonificada estándar",
                "Segunda visita al 50%",
                "Retiro sin cargo",
            ],
            badgeText: "Crecimiento",
        },
        {
            name: "Nivel 2",
            price: "Tarifa Híbrida",
            distanceRange: "+5 envíos diarios",
            description: "Beneficios exclusivos para vendedores constantes.",
            features: [
                "Zona 4 y 5 tope fijo $6.500",
                "2da visita GRATIS (Zona 1)",
                "Prioridad en ruteo",
            ],
            badgeText: "Pro",
        },
        {
            name: "Nivel 3",
            price: "$4.500",
            distanceRange: "Grandes Cuentas (+10)",
            description: "Máxima eficiencia y previsibilidad de costos.",
            features: [
                "Tarifa PLANA toda la ciudad",
                "Reprogramaciones 100% GRATIS",
                "Soporte dedicado",
            ],
            badgeText: "Elite",
        },
    ];

    const handleWhatsAppClick = () => {
        const phoneNumber = "5492236602699";
        const message = "Hola, necesito cotizar un Envío Flex de más de 13 km.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

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
                        <h2 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-6 uppercase text-white tracking-tighter leading-none">
                            NIVELES Y <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">TARIFAS FLEX</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
                        <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
                            Escalá tu negocio con MercadoLibre Flex. A mayor volumen, mejores beneficios y tarifas para tus envíos.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {flexTiers.map((tier, index) => {
                        return (
                             <motion.div
                                key={index}
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
                                        "absolute top-0 right-0 border-b border-l-4 border-l-primary text-[9px] font-black uppercase tracking-widest py-1 px-3 shadow",
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
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> BENEFICIO CLIMA
                              </div>
                              <h3 className="font-display text-3xl font-black italic uppercase text-white uppercase tracking-tighter mb-4 italic">
                                RECARGO POR LLUVIA: <span className="text-secondary">SOLO 30%</span>
                              </h3>
                              <p className="text-gray-400 font-sans leading-relaxed">
                                Para nuestros clientes Flex, el recargo por días de lluvia es reducido. Minimizamos el impacto en tus costos operativos.
                              </p>
                            </div>
                            <div className="flex justify-center md:justify-end">
                               <Button
                                onClick={handleWhatsAppClick}
                                className="bg-secondary hover:bg-yellow-500 text-black font-display font-black px-10 py-5 rounded-xl transition-all uppercase tracking-tight shadow-[0_10px_20px_rgba(234,179,8,0.2)] border border-secondary/20 active:scale-95 h-auto text-label-md"
                              >
                                <Image src="/icon/icon-whatsapp.svg" alt="WhatsApp Icon" width={24} height={24} className="w-5 h-5 mr-3" />
                                MÁS INFORMACIÓN FLEX
                              </Button>
                            </div>
                         </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
