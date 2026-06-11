'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

export function SuccessStories() {
  const testimonials = [
    {
      name: "María González",
      business: "Tienda de Ropa Online",
      rating: 5,
      testimonial:
        "Desde que uso el Plan Emprendedor, mis ventas aumentaron un 40%. Los clientes confían más en mi tienda porque saben que sus pedidos llegarán rápido y seguro.",
      results: "40% aumento en ventas",
    },
    {
      name: "Carlos Rodríguez",
      business: "Productos Artesanales",
      rating: 5,
      testimonial:
        "La flexibilidad horaria me permite coordinar mejor con mis clientes. El soporte es excelente y siempre resuelven mis consultas rápidamente.",
      results: "95% satisfacción del cliente",
    },
    {
      name: "Ana Martínez",
      business: "Cosmética Natural",
      rating: 5,
      testimonial:
        "Las tarifas preferenciales me permiten ofrecer envío gratis a mis clientes sin afectar mis márgenes. Es una ventaja competitiva importante.",
      results: "30% más pedidos",
    },
  ]

  return (
    <section className="py-24 px-4 bg-[#0a0d16] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-slate-900 tracking-tighter">
              HISTORIAS DE <span className="text-primary">ÉXITO</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              Conoce cómo otros negocios han crecido con nuestras soluciones logísticas.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/5 border-white/10 backdrop-blur-md rounded-3xl overflow-hidden hover:border-primary/30 transition-all group">
                <CardContent className="p-10 relative">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-primary/5 transition-colors" />

                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl mr-6 flex items-center justify-center text-primary border border-primary/20">
                      <Star className="w-8 h-8 fill-primary" />
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-orbitron)] font-bold text-slate-900 uppercase tracking-tight">{testimonial.name}</h4>
                      <p className="text-xs text-primary font-bold uppercase tracking-widest">{testimonial.business}</p>
                      <div className="flex items-center mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-gray-400 mb-8 leading-relaxed italic font-[family-name:var(--font-roboto)]">&quot;{testimonial.testimonial}&quot;</p>

                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-2xl">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">Resultado: {testimonial.results}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
