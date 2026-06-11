'use client';

import React from 'react';
import { Zap, MapPin, Phone, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils";

function UrgencyClock() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      <div className="absolute inset-0 border-4 border-secondary/20 rounded-full" />
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-12 bg-secondary origin-bottom -translate-x-1/2 -translate-y-full rounded-full shadow-[0_0_15px_rgba(234,179,8,0.8)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-8 bg-white origin-bottom -translate-x-1/2 -translate-y-full rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg" />
      <div className="absolute inset-0 border-t-4 border-secondary rounded-full animate-spin-slow opacity-50" />
    </div>
  )
}

export function ExpressBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Alta criticidad horaria",
      description: "Diseñado para cuando el tiempo es el factor crítico. Vos elegís el límite de entrega (ej. \"antes de las 17:00 hs\").",
    },
    {
      icon: Zap,
      title: "Anticipación mínima",
      description: "Solo requerimos 2 horas de anticipación para garantizar la viabilidad del ruteo exclusivo.",
    },
    {
      icon: Award,
      title: "Certeza Absoluta",
      description: "Precisión garantizada en el tiempo de tu cliente final.",
    },
    {
      icon: MapPin,
      title: "Seguimiento en Tiempo Real",
      description: "Monitoreá tu envío en vivo desde la recolección hasta la entrega final.",
    },
    {
      icon: Phone,
      title: "Soporte Prioritario",
      description: "Línea directa de atención para clientes express con respuesta inmediata.",
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
            <UrgencyClock />
            <h2 className="font-display text-5xl md:text-7xl font-black italic mb-6 uppercase text-foreground tracking-tighter leading-none">
              ¿POR QUÉ <span className="text-secondary drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">ELEGIR EXPRESS?</span>
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
            <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
              Descubrí todas las ventajas de nuestro servicio premium de entregas rápidas.
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
                  "group relative h-full rounded-xl overflow-hidden bg-card border-l-4 transition-all duration-300 p-10 flex flex-col justify-between",
                  index % 2 === 0
                    ? "border-l-primary hover:border-l-secondary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                    : "border-l-secondary hover:border-l-primary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                )}>
                  <div>
                    <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                      index % 2 === 0
                        ? "bg-primary/10 border border-primary/20 text-primary"
                        : "bg-secondary/10 border border-secondary/20 text-secondary"
                    )}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="font-display text-headline-lg font-bold mb-4 uppercase text-foreground tracking-tight">{benefit.title}</h3>
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
