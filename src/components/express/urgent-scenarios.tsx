'use client';

import React from 'react';
import { FileText, Heart, Briefcase, Gift } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils";

export function UrgentScenarios() {
  const scenarios = [
    {
      icon: FileText,
      title: "Documentos",
      description: "Contratos, documentos legales, certificados que no pueden esperar.",
      examples: ["Documentos notariales", "Contratos comerciales", "Certificados médicos"],
    },
    {
      icon: Heart,
      title: "Salud",
      description: "Medicamentos, análisis médicos y suministros de salud con prioridad de entrega.",
      examples: ["Medicamentos especiales", "Resultados de laboratorio", "Suministros médicos"],
    },
    {
      icon: Briefcase,
      title: "Negocios",
      description: "Entregas comerciales que no pueden retrasarse sin afectar operaciones.",
      examples: ["Repuestos", "Muestras comerciales", "Productos perecederos"],
    },
    {
      icon: Gift,
      title: "Regalos",
      description: "Regalos y sorpresas que deben llegar en un rango horario acotado",
      examples: ["Regalos de cumpleaños", "Desayunos/Meriendas", "Comida especial"],
    },
  ]

  return (
    <section className="py-24 px-4 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-6 uppercase text-white tracking-tighter leading-none">
              ¿CUÁNDO NECESITAS <span className="text-secondary drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">EXPRESS?</span>
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
            <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
              Situaciones donde cada minuto cuenta y la rapidez es fundamental.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {scenarios.map((scenario, index) => {
            const IconComponent = scenario.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={cn(
                  "relative rounded-xl overflow-hidden bg-card border-l-4 transition-all duration-300 p-8",
                  index % 2 === 0
                    ? "border-l-primary hover:border-l-secondary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                    : "border-l-secondary hover:border-l-primary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                )}>
                  <div className="flex items-start mb-6">
                    <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center mr-6 flex-shrink-0 transition-transform group-hover:scale-110",
                      index % 2 === 0
                        ? "bg-primary/10 border border-primary/20 text-primary"
                        : "bg-secondary/10 border border-secondary/20 text-secondary"
                    )}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2 uppercase text-white tracking-tight">{scenario.title}</h3>
                      <p className="text-gray-400 text-body-md leading-relaxed font-sans">{scenario.description}</p>
                    </div>
                  </div>
                  <div className="ml-18">
                    <h4 className="font-display text-xxs font-bold text-gray-500 mb-3 uppercase tracking-widest">Ejemplos comunes:</h4>
                    <ul className="space-y-2.5 font-sans">
                      {scenario.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-gray-400 flex items-center">
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full mr-3 shadow-[0_0_5px_rgba(234,179,8,0.5)]",
                            index % 2 === 0 ? "bg-primary" : "bg-secondary"
                          )}></div>
                          {example}
                        </li>
                      ))}
                    </ul>
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
