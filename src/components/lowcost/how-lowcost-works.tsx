'use client';

import React from 'react';
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils";

export function HowLowcostWorks() {
  const steps = [
    {
      title: "1. Despacho",
      description: "Prepara tus pedidos y cárgalos en nuestro sistema antes del horario de corte.",
    },
    {
      title: "2. Recolección",
      description: "Nuestro equipo retira todos tus paquetes en una sola visita a tu local o depósito.",
    },
    {
      title: "3. Ruteo",
      description: "Utilizamos algoritmos de IA para trazar la ruta más corta y eficiente.",
    },
    {
      title: "4. Entrega",
      description: "Entregamos todos los paquetes en el transcurso del día antes de las 19:00 hs.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-transparent relative overflow-hidden">
       <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-6 uppercase text-white tracking-tighter leading-none">
              ¿CÓMO <span className="text-secondary drop-shadow-[0_0_15px_rgba(255,230,0,0.35)]">FUNCIONA?</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
            <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
              Un proceso simple y transparente diseñado para maximizar tu productividad.
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
              className={cn(
                "group relative p-8 rounded-xl bg-card border-l-4 transition-all duration-300",
                index % 2 === 0
                  ? "border-l-primary hover:border-l-secondary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                  : "border-l-secondary hover:border-l-primary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              )}
            >
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none" />
              <div className={cn(
                "absolute -top-3 -right-3 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                index % 2 === 0 ? "bg-primary/20 border border-primary/40" : "bg-secondary/20 border border-secondary/40"
              )}>
                 <CheckCircle2 className={cn("w-5 h-5", index % 2 === 0 ? "text-primary" : "text-secondary")} />
              </div>
              <h3 className="font-display text-xl font-bold mb-4 uppercase text-white tracking-tight">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-sans">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
