'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calculator, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

export function LowcostCta() {
  return (
    <section className="py-24 px-4 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="p-12 md:p-16 rounded-xl bg-card border-l-4 border-l-secondary relative overflow-hidden text-center shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-32 translate-x-32" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-blue-400 text-xxs font-black tracking-[0.2em] mb-10 uppercase">
             ECONOMÍA Y ESCALA <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-black italic tracking-tighter leading-tight mb-8 uppercase text-white">
            ¿LISTO PARA BAJAR TUS <br />
            COSTOS <span className="text-secondary drop-shadow-[0_0_15px_rgba(255,230,0,0.2)]">LOGÍSTICOS?</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-sans">
            Empieza hoy mismo a enviar de forma inteligente. Súmate a la flota con mayor eficiencia de Mar del Plata.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <Link
              href="/cotizar/lowcost"
              className="px-12 py-5 bg-secondary hover:bg-yellow-400 text-black font-display font-black rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(255,230,0,0.2)] border border-secondary/20 flex items-center gap-3 uppercase tracking-tight h-auto"
            >
              <Calculator size={20} /> COTIZAR ENVÍO
             </Link>
            <a
              href="tel:+5492236602699"
              className="px-12 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display font-bold rounded-xl transition-all flex items-center gap-3 uppercase tracking-tight group h-auto"
            >
              <Phone size={20} className="text-secondary" />
              CONTACTAR ASESOR
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
