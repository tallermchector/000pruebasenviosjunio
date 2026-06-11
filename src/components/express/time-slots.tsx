'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Zap, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function TimeSlots() {
  const timeSlots = [
    {
      icon: Zap,
      title: "Express Inmediato",
      time: "30-60 minutos",
      description: "Para emergencias y documentos",
      price: "Desde $3.500",
      features: ["Máxima prioridad", "Seguimiento en vivo", "Confirmación inmediata"],
    },
    {
      icon: Clock,
      title: "Express Mañana",
      time: "9:00 - 13:00",
      description: "Entrega garantizada en horario matutino",
      price: "Desde $2.800",
      features: ["Horario comercial", "Ideal para oficinas", "Seguimiento completo"],
    },
    {
      icon: Calendar,
      title: "Express Tarde",
      time: "14:00 - 18:00",
      description: "Perfecto para entregas de tarde",
      price: "Desde $2.800",
      features: ["Horario extendido", "Entregas residenciales", "Flexibilidad horaria"],
    },
  ]

  return (
    <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-slate-900 tracking-tighter">
              HORARIOS <span className="text-secondary drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">EXPRESS</span>
            </h2>
            <div className="w-24 h-2 bg-secondary mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              Elige el horario que mejor se adapte a tus necesidades.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {timeSlots.map((slot, index) => {
            const IconComponent = slot.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="bg-surface-light border-white/10 backdrop-blur-md hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-all duration-300 rounded-3xl overflow-hidden h-full flex flex-col group relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-10 text-center relative flex-grow flex flex-col">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-secondary/5 transition-colors duration-300" />

                    <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:border-secondary/50 transition-transform relative">
                      <IconComponent className="w-8 h-8 text-secondary group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.8)] transition-all" />
                    </div>
                    <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{slot.title}</h3>
                    <div className="text-3xl font-black text-secondary mb-4 font-[family-name:var(--font-orbitron)] italic tracking-tighter drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">{slot.time}</div>
                    <p className="text-gray-400 text-sm mb-6 font-[family-name:var(--font-roboto)] flex-grow">{slot.description}</p>
                    <div className="text-xl font-bold text-slate-900 mb-8 font-[family-name:var(--font-orbitron)]">{slot.price}</div>
                    <ul className="space-y-3 font-[family-name:var(--font-roboto)]">
                      {slot.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-400 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
