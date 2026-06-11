'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Zap, ShieldCheck, Clock, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const CtaSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center py-20 lg:py-32 px-4 bg-transparent overflow-hidden">
      {/* High-End Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero/abstracto_background.jpeg"
          alt="Background Abstracto"
          fill
          className="object-cover opacity-10 grayscale"
        />

        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid-overlay opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-12 md:p-24 rounded-xl bg-primary border-8 border-blue-900 border-l-primary overflow-hidden shadow-lg"
        >

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-secondary border-4 border-yellow-700 text-primary text-xxs font-black tracking-[0.4em] mb-12 uppercase"
            >
              <Zap size={16} className="fill-primary text-primary animate-pulse" /> ¡Empezá Ahora!
            </motion.div>

            <h2 className="text-headline-lg-mobile md:text-display-lg font-black text-white mb-10 uppercase italic">
              ¿Listo para escalar la <br />
              <span className="text-secondary">logística de tu E-Commerce?</span>
            </h2>

            <p className="text-gray-300 text-body-lg mb-16 max-w-4xl mx-auto opacity-80">
              <span className="font-bold">Olvidate de la gestión de paquetes</span> y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web."
                aria-label="Contactanos por WhatsApp para servicios logísticos"
                className="group w-full sm:w-auto px-12 py-6 bg-secondary text-primary text-label-md rounded-xl border-4 border-yellow-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-md flex items-center justify-center gap-4 uppercase"
              >
                Contactanos por WhatsApp <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/tarifas"
                className="w-full sm:w-auto px-12 py-6 bg-white/5 border-4 border-white/20 text-white text-label-md rounded-xl transition-all flex items-center justify-center gap-4 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 hover:-translate-x-1 uppercase shadow-md"
              >
                Ver Tarifas 2026 <Calculator size={22} />
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 border-t-4 border-white/20">
              {[
                { icon: <Clock aria-hidden="true" />, text: "Confianza local comprobada" },
                { icon: <ShieldCheck aria-hidden="true" />, text: "Innovación constante en última milla" },
                { icon: <MousePointer2 aria-hidden="true" />, text: "Motocicletas dedicadas para máxima agilidad urbana" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4 text-label-sm text-blue-100 uppercase font-bold">
                  <div className="w-12 h-12 rounded-xl bg-background border-4 border-white/20 flex items-center justify-center text-white transition-all">
                    {React.cloneElement(item.icon as React.ReactElement<{ size?: number; className?: string; fill?: string }>, { size: 20 })}
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};