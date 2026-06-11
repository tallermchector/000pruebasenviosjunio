"use client"

import { Calendar, MapPin, TrendingUp, Award } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function CompanyStory() {
  const milestones = [
    {
      icon: Calendar,
      year: "2017",
      title: "Inicios",
      description: "Comenzamos como un servicio de mensajería local, adaptándonos rápidamente a las exigencias del mercado.",
    },
    {
      icon: TrendingUp,
      year: "2021",
      title: "Transformación",
      description: "Evolucionamos hacia el E-commerce moderno en Mar del Plata, optimizando procesos de última milla.",
    },
    {
      icon: Award,
      year: "2023",
      title: "Consolidación",
      description: "Alcanzamos los 4.9 estrellas en Google Reviews, validando nuestro compromiso con la excelencia.",
    },
    {
      icon: MapPin,
      year: "2024",
      title: "Actualidad",
      description: "Operamos bajo un modelo de tercerización 3PL diseñado para potenciar PyMEs y plataformas digitales.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-transparent overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter leading-none text-center">Nuestra Historia</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Más de 7 años revolucionando la logística de última milla en Mar del Plata.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Timeline Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 z-0"></div>

          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <div className={cn(
                  "relative z-10 group rounded-xl overflow-hidden bg-card border-l-4 transition-all duration-300 flex flex-col p-6 shadow-lg hover:-translate-y-2",
                  index % 2 === 0
                    ? "border-l-primary hover:border-l-secondary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                    : "border-l-secondary hover:border-l-primary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                )}>
                  <div className="flex items-center mb-4">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300", index % 2 === 0 ? "bg-primary/10 border border-primary/20 text-primary" : "bg-secondary/10 border border-secondary/20 text-secondary")}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={cn("text-2xl font-bold font-display italic", index % 2 === 0 ? "text-primary" : "text-secondary")}>{milestone.year}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 uppercase tracking-tight">{milestone.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-sans text-sm">{milestone.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
