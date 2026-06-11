'use client';

import React from 'react';
import { motion } from "framer-motion"
import { ShieldCheck, Laptop, PhoneCall, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils";

export function Requirements() {
  const requirements = [
    {
      title: "Cuenta MercadoLibre",
      desc: "Tener habilitada la opción de Mercado Envíos Flex en tu cuenta de vendedor.",
      icon: Laptop
    },
    {
      title: "Ubicación",
      desc: "Estar ubicado dentro de las zonas de cobertura para retiro en Mar del Plata.",
      icon: CheckCircle2
    },
    {
      title: "Horario de Corte",
      desc: "Establecer un horario de corte (sugerido 15hs) para procesar tus ventas diarias.",
      icon: PhoneCall
    },
    {
      title: "Suscripción",
      desc: "Alta en nuestra plataforma para el control y liquidación de servicios.",
      icon: ShieldCheck
    }
  ]

  return (
    <section className="py-24 px-4 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase mb-6 uppercase text-white tracking-tighter leading-none">
              ¿QUÉ <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">NECESITAS?</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
              Requisitos mínimos para empezar a ofrecer envíos Same-Day hoy mismo.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
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
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110",
                  index % 2 === 0
                    ? "bg-primary/10 border border-primary/20 text-primary"
                    : "bg-secondary/10 border border-secondary/20 text-secondary"
                )}>
                   <req.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-black italic uppercase mb-3 uppercase text-white tracking-tight">{req.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">{req.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
