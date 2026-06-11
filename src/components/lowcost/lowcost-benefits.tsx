'use client';

import React from 'react';
import { DollarSign, Clock, MapPin, TrendingDown, Users, Globe, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils";

export function LowcostBenefits() {
  const benefits = [
    {
      icon: Globe,
      title: "Eficiencia en Ruteo",
      description: "Ruteo diario masivo optimizado mediante IA. NO se elige rango horario para maximizar tu rentabilidad.",
    },
    {
      icon: Clock,
      title: "Corte y Entrega (SLA)",
      description: "Ingresá tus pedidos antes de las 13:00 hs y te garantizamos la entrega efectiva en el día, antes de las 19:00 hs.",
    },
    {
      icon: DollarSign,
      title: "Economía y Escala",
      description: "Bajá tus costos fijos y pagá solo por lo que enviás.",
    },
    {
      icon: MapPin,
      title: "Cobertura Total",
      description: "Llegamos a todos los barrios de Mar del Plata con ruteos optimizados.",
    },
    {
      icon: TrendingDown,
      title: "Menos Operatividad",
      description: "Simplificá tus despachos diarios con un esquema de retiro programado.",
    },
    {
      icon: Users,
      title: "Ideal Emprendedores",
      description: "Escalá tu negocio sin preocuparte por los costos fijos de envío.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-6 uppercase text-white tracking-tighter leading-none">
              BENEFICIOS <span className="text-secondary drop-shadow-[0_0_15px_rgba(255,230,0,0.35)]">LOWCOST</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
            <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
              La combinación perfecta entre economía y eficiencia logística para tu negocio.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="h-full"
              >
                <div className={cn(
                  "group relative h-full rounded-xl overflow-hidden bg-card border-l-4 transition-all duration-300 p-10 flex flex-col justify-between shadow-lg",
                  index % 2 === 0
                    ? "border-l-primary hover:border-l-secondary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                    : "border-l-secondary hover:border-l-primary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                )}>
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110",
                        index % 2 === 0
                          ? "bg-primary/10 border border-primary/20 text-primary"
                          : "bg-secondary/10 border border-secondary/20 text-secondary"
                      )}>
                        <IconComponent size={24} />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500/80 drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                      </motion.div>
                    </div>
                    <h3 className="font-display text-headline-lg font-bold mb-4 uppercase text-white tracking-tight">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-sans">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
