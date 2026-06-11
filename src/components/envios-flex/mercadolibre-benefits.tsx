'use client';

import React from 'react';
import { TrendingUp, ShieldCheck, Clock, MapPin, Smartphone, UserCheck } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils";

function ReputationThermometer() {
  return (
    <div className="max-w-md mx-auto mb-12">
      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
        <span>Reputación</span>
        <span className="text-green-500">MercadoLíder Platinum</span>
      </div>
      <div className="h-4 w-full bg-card rounded-full overflow-hidden border border-white/10 flex">
        <div className="h-full w-1/5 bg-red-500/50" />
        <div className="h-full w-1/5 bg-orange-500/50" />
        <div className="h-full w-1/5 bg-yellow-500/50" />
        <div className="h-full w-1/5 bg-lime-500/50" />
        <motion.div
          className="h-full w-1/5 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]"
          initial={{ width: 0 }}
          whileInView={{ width: '20%' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export function MercadoLibreBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Corte 15:00 hs",
      description: "Despachá tus ventas hasta las 15:00 hs para entrega garantizada en el mismo día.",
    },
    {
      icon: ShieldCheck,
      title: "Reputación Intacta",
      description: "Cumplimos el 100% de tus acuerdos de nivel de servicio (SLAs) para que mantengas tu estatus de MercadoLíder.",
    },
    {
      icon: TrendingUp,
      title: "Devoluciones sin cargo",
      description: "Si el comprador rechaza el producto en domicilio, la devolución a tu local es totalmente SIN CARGO.",
    },
    {
      icon: MapPin,
      title: "Cobertura MDP",
      description: "Cubrimos todas las zonas habilitadas por MercadoLibre Flex en Mar del Plata.",
    },
    {
      icon: Smartphone,
      title: "App de Control",
      description: "Gestioná y monitoreá tus despachos desde nuestra plataforma exclusiva.",
    },
    {
      icon: UserCheck,
      title: "Choferes Calificados",
      description: "Personal capacitado para brindar la mejor experiencia de entrega a tus clientes.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-transparent relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ReputationThermometer />
            <h2 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-6 uppercase text-foreground tracking-tighter leading-none">
              BENEFICIOS <span className="text-secondary drop-shadow-[0_0_20px_rgba(234,179,8,0.4)]">PARA VENDEDORES</span>
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
              La solución definitiva para llevar tu tienda de MercadoLibre al siguiente nivel de competitividad.
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
              >
                <div className={cn(
                  "group relative h-full rounded-xl overflow-hidden bg-card border-l-4 transition-all duration-300 p-10 flex flex-col justify-between shadow-lg",
                  index % 2 === 0
                    ? "border-l-primary hover:border-l-secondary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                    : "border-l-secondary hover:border-l-primary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                )}>
                  <div>
                    <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center mb-8 transition-transform group-hover:scale-110",
                      index % 2 === 0
                        ? "bg-primary/10 border border-primary/20 text-primary"
                        : "bg-secondary/10 border border-secondary/20 text-secondary"
                    )}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="font-display text-headline-lg font-bold mb-4 uppercase text-white tracking-tight">{benefit.title}</h3>
                    <p className="text-gray-400 text-body-md leading-relaxed font-sans">{benefit.description}</p>
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
