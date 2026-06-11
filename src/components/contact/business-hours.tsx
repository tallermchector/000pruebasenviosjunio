"use client"

import { Calendar } from "lucide-react"
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: "easeOut" as any,
    },
  }),
};

export function BusinessHours() {
  const schedule = [
    { day: "Lunes - Viernes", hours: "9:00 - 18:00" },
    { day: "Sábados", hours: "10:00 - 15:00 " },
    { day: "Domingos", hours: "Cerrado" },
  ]

  return (
    <section className="py-12 md:py-16 px-4 bg-transparent border-t border-white/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase text-white tracking-tighter leading-none mb-4">Horarios de Atención</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto font-sans">Estamos disponibles para atenderte en los siguientes horarios.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 justify-center items-center">
            {/* Schedule Card */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="md:col-span-2 max-w-2xl mx-auto w-full"
            >
              <div className="hover:shadow-2xl rounded-xl bg-card border-l-4 border-l-primary p-6 sm:p-8 hover:border-l-secondary duration-300 transition-all shadow-lg">
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight flex items-center mb-6">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-primary animate-pulse" />
                  Horarios Regulares
                </h3>
                <div className="space-y-3 font-sans">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-white/5 last:border-b-0 text-sm sm:text-base"
                    >
                      <span className="text-white font-bold">{item.day}</span>
                      <span className="text-gray-400">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
