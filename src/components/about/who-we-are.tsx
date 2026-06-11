"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

export function WhoWeAre() {
  return (
    <section className="py-16 px-4 bg-transparent">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter leading-none text-center">
            QUIÉNES <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">SOMOS</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl text-white leading-relaxed mb-8 font-display italic tracking-tight"
            >
              "Tu aliado confiable en mensajería y delivery en Mar del Plata"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col items-center justify-center mb-8 p-6 rounded-xl bg-card border-l-4 border-l-secondary shadow-lg transition-all duration-300 hover:border-l-primary"
            >
              <div className="flex items-center space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-xl font-bold text-white font-display uppercase tracking-tight">4.9 estrellas en Google Reviews</span>
              <p className="text-gray-400 text-sm mt-2 font-sans">Basado en la confianza de cientos de clientes locales</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-400 text-lg leading-relaxed font-sans"
            >
              Envíos DosRuedas se posiciona en el mercado como tu Partner Logístico Especializado. Entendemos que la eficiencia operativa en la entrega es el pilar fundamental de la experiencia del cliente final. Transformamos tu estructura de gasto fijo en soluciones flexibles que acompañan el crecimiento de tu negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 p-8 rounded-xl bg-card border-l-4 border-l-primary text-left transition-all duration-300 shadow-lg hover:border-l-secondary"
            >
              <h3 className="font-display text-2xl font-black italic text-primary uppercase tracking-tight mb-4">Nuestra Ventaja Injusta</h3>
              <p className="text-gray-300 leading-relaxed font-sans mb-4 text-base">
                En un mercado saturado de apps genéricas, nosotros decidimos ir por el camino de la excelencia territorial. Nuestra "Ventaja Injusta" se basa en tres pilares innegociables:
              </p>
              <ul className="space-y-4 text-gray-400 font-sans text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">●</span>
                  <span><strong>Atención Personalizada:</strong> Damos la cara frente a cualquier inconveniente. No sos un ticket, sos un partner.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">●</span>
                  <span><strong>Flota Exclusiva:</strong> Controlamos cada eslabón de la cadena para asegurar puntualidad y seguridad.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">●</span>
                  <span><strong>Cero Tercerización:</strong> No delegamos tu confianza en terceros. Si es DosRuedas, lo hacemos nosotros.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
