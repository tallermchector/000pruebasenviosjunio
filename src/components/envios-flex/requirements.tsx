'use client';

import React from 'react';
import { motion } from "framer-motion"
import { ShieldCheck, Laptop, PhoneCall, CheckCircle2 } from "lucide-react"

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
    <section className="py-24 px-4 bg-surface-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-slate-900 tracking-tighter">
              ¿QUÉ <span className="text-primary">NECESITAS?</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
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
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <req.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-bold mb-3 uppercase text-slate-900 tracking-tight">{req.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-roboto)]">{req.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
