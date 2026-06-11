'use client';

import React from 'react';
import { Package, ShieldCheck, CreditCard, BarChart, Truck, Users } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

function SuccessMetrics() {
  const metrics = [
    { label: "Entregas Efectivas", value: "99.8%" },
    { label: "Clientes Corporativos", value: "+150" },
    { label: "SLA Cumplido", value: "100%" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={cn(
            "text-center p-8 bg-card border-l-4 rounded-xl transition-all duration-300 shadow-lg",
            index % 2 === 0 ? "border-l-primary" : "border-l-secondary"
          )}
        >
          <div className="text-4xl md:text-5xl font-black text-primary font-display mb-2 italic drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            {metric.value}
          </div>
          <div className="text-xxs font-bold uppercase tracking-[0.2em] text-gray-400">
            {metric.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function EntrepreneurBenefits() {
  const benefits = [
    {
      icon: Truck,
      title: "Partner Logístico Especializado",
      description: "Más que un envío, somos tu depósito. Soluciones de almacenamiento y fulfillment para PyMEs.",
    },
    {
      icon: CreditCard,
      title: "Cuentas Corrientes",
      description: "Esquemas de facturación mensual centralizada adaptados a tu flujo de caja (Factura C disponible).",
    },
    {
      icon: ShieldCheck,
      title: "Límites Claros y Seguros",
      description: "Flota de motos exclusiva. Llevamos bultos de hasta 5 kg (40x40x30 cm). Seguimiento centralizado vía WhatsApp.",
    },
    {
      icon: Package,
      title: "Almacenaje Seguro",
      description: "Contamos con depósitos propios con seguridad para tu mercadería.",
    },
    {
      icon: BarChart,
      title: "Reportes Detallados",
      description: "Métricas claras sobre tus entregas, devoluciones y tiempos promedio.",
    },
    {
      icon: Users,
      title: "Asesor Dedicado",
      description: "Un ejecutivo de cuentas para resolver todas tus dudas operativas.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-transparent relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SuccessMetrics />
            <h2 className="font-display text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter leading-none">
              BENEFICIOS <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">PARA NEGOCIOS</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
              Potenciamos tu capacidad operativa con soluciones logísticas de clase mundial.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={cn(
                  "group relative h-full rounded-xl overflow-hidden bg-card border-l-4 transition-all duration-300 flex flex-col p-10 shadow-lg hover:-translate-y-1",
                  index % 2 === 0
                    ? "border-l-primary hover:border-l-secondary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                    : "border-l-secondary hover:border-l-primary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                )}>
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110",
                    index % 2 === 0
                      ? "bg-primary/10 border border-primary/20 text-primary"
                      : "bg-secondary/10 border border-secondary/20 text-secondary"
                  )}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 uppercase text-white tracking-tight">{benefit.title}</h3>
                  <p className="text-gray-400 text-body-md leading-relaxed font-sans">{benefit.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
