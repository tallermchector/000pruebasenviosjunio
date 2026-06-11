'use client';

import React from 'react';
import { motion } from "framer-motion"
import { PackageSearch, Truck, CheckSquare, Star } from "lucide-react"
import { cn } from "@/lib/utils";

export function HowItWorks() {
  const steps = [
    {
      icon: PackageSearch,
      title: "1. Vendes",
      description: "Recibes una venta con Mercado Envios Flex en tu panel de MercadoLibre.",
    },
    {
      icon: Truck,
      title: "2. Retiramos",
      description: "Coordinamos el retiro por tu local o domicilio en el horario de corte pactado.",
    },
    {
      icon: CheckSquare,
      title: "3. Entregamos",
      description: "Nuestra flota distribuye los paquetes en Mar del Plata durante la tarde.",
    },
    {
      icon: Star,
      title: "4. Calificas",
      description: "Tu cliente recibe el paquete en el día y tu reputación sube automáticamente.",
    },
  ]

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
            <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-6 uppercase text-white tracking-tighter leading-none">
              LOGÍSTICA <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">SIN FRICCIONES</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
              Integramos tu flujo de ventas con nuestra red de distribución en tiempo real.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
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
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110",
                  index % 2 === 0
                    ? "bg-primary/10 border border-primary/20 text-primary"
                    : "bg-secondary/10 border border-secondary/20 text-secondary"
                )}>
                   <step.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-black italic uppercase mb-4 uppercase text-white tracking-tight">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
