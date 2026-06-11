"use client"

import { Heart, Zap, Shield, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function CompanyValues() {
  const values = [
    {
      icon: Heart,
      title: "Compromiso",
      description: "Nos comprometemos con cada envío como si fuera propio, garantizando excelencia en cada entrega.",
      color: "text-red-500",
      bg: "bg-red-500/10"
    },
    {
      icon: Zap,
      title: "Rapidez",
      description: "Agilidad motorizada para cumplir con los SLAs más exigentes del mercado actual.",
      color: "text-secondary",
      bg: "bg-secondary/10"
    },
    {
      icon: Shield,
      title: "Confiabilidad",
      description: "Procesos auditados y notificaciones en tiempo real para tu total tranquilidad.",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Cercanía",
      description: "Atención personalizada y conocimiento profundo de la logística en Mar del Plata.",
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
  ]

  return (
    <section className="py-16 px-4 bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter leading-none text-center">Nuestros Valores</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Los pilares que sostienen nuestra operativa y nos permiten ser tu partner logístico de confianza.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={cn(
                  "group relative h-full rounded-xl overflow-hidden bg-card border-l-4 transition-all duration-300 flex flex-col p-8 shadow-lg hover:-translate-y-2 text-center",
                  index % 2 === 0
                    ? "border-l-primary hover:border-l-secondary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                    : "border-l-secondary hover:border-l-primary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                )}>
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-500", value.bg, "border border-white/5")}>
                    <IconComponent className={cn("w-8 h-8", value.color)} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-4 uppercase tracking-tight">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-sans text-sm">{value.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
