'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calculator, ArrowRight, Zap, ShieldCheck, Clock, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const CtaSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex items-center py-20 lg:py-32 px-4 bg-transparent overflow-hidden">
      {/* High-End Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero/abstracto_background.jpeg"
          alt=""
          fill
          className="object-cover opacity-10 grayscale select-none"
        />

        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid-overlay opacity-50" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-10 md:p-20 rounded-xl bg-card/90 border border-primary/20 backdrop-blur-xl overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient glows inside the card */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold tracking-wider mb-8 uppercase"
            >
              <Zap size={14} className="fill-current animate-pulse" aria-hidden="true" /> ¡Empezá Ahora!
            </motion.div>

            <h2 className="text-display-md md:text-display-lg font-black text-foreground mb-6 uppercase italic leading-none">
              ¿Listo para escalar la <br />
              <span className="text-secondary drop-shadow-[0_0_12px_rgba(231,176,8,0.2)] font-display">logística de tu E-Commerce?</span>
            </h2>

            <p className="text-muted-foreground text-body-lg mb-12 max-w-2xl mx-auto leading-relaxed font-sans">
              <strong className="font-bold text-foreground">Olvidate de la gestión de paquetes</strong> y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web."
                aria-label="Contactanos por WhatsApp para servicios logísticos"
                className="group w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground font-display text-label-md rounded-md hover:bg-secondary/90 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-3 uppercase font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Contactanos por WhatsApp <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <Link
                href="/tarifas"
                className="group w-full sm:w-auto px-8 py-4 bg-primary/10 border border-primary/20 text-foreground font-display text-label-md rounded-md transition-all duration-200 flex items-center justify-center gap-3 hover:bg-primary/20 uppercase font-bold shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Ver Tarifas 2026 <Calculator size={18} className="group-hover:scale-105 transition-transform duration-200" />
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-border/40">
              {[
                { icon: <Clock aria-hidden="true" />, text: "Confianza local comprobada" },
                { icon: <ShieldCheck aria-hidden="true" />, text: "Innovación constante en última milla" },
                { icon: <MousePointer2 aria-hidden="true" />, text: "Motocicletas dedicadas para máxima agilidad urbana" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 text-center">
                  <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-all duration-200 hover:text-secondary hover:border-secondary/30">
                    {React.cloneElement(item.icon as React.ReactElement<{ size?: number; className?: string; fill?: string }>, { size: 18 })}
                  </div>
                  <span className="font-sans font-medium text-xs text-muted-foreground max-w-[200px]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};