'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, ShieldCheck, CheckCircle2, Play, Globe } from 'lucide-react';
import Image from 'next/image';
import { cn } from "@/lib/utils";

export const VisionSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  const features = [
    { icon: <Zap />, title: "Entregas a Tiempo", text: "Puntualidad garantizada en cada envío" },
    { icon: <ShieldCheck />, title: "Envíos Seguros", text: "Protección total de tus paquetes" }
  ];

  const stats = [
    { label: "Confianza local comprobada", value: "+5.000", color: "text-secondary" },
    { label: "Innovación constante en última milla", value: "7 Años", color: "text-primary" },
    { label: "Motocicletas dedicadas para máxima agilidad urbana", value: "Flota Exclusiva", color: "text-blue-400" }
  ];

  return (
    <section className="relative min-h-[100dvh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 bg-transparent overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 tech-grid-overlay" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xxs font-black tracking-[0.2em] mb-8 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> Partner Logístico Especializado
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-black italic uppercase text-white tracking-tighter leading-none mb-10">
              Nuestra Visión <br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">Logística</span>
            </h2>

            <p className="text-gray-400 text-body-lg mb-12 max-w-2xl">
              Transformamos <span className="font-bold text-gray-300">tus costos fijos en solutions flexibles</span> que acompañan el crecimiento de tu negocio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "flex items-start gap-5 p-5 rounded-xl transition-all duration-300 group",
                    i === 0 
                      ? "bg-card border-l-4 border-l-secondary hover:border-l-primary hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)]" 
                      : "bg-card border-l-4 border-l-primary hover:border-l-secondary hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                  )}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110",
                    i === 0 
                      ? "bg-secondary/10 border border-secondary/20 text-secondary"
                      : "bg-primary/10 border border-primary/20 text-primary"
                  )}>
                    {React.cloneElement(item.icon, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="text-headline-md text-sm text-white uppercase mb-1 transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                    <p className="text-gray-400 text-body-md text-xs">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-16 gap-y-10 pt-10 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col max-w-[200px]">
                  <span className={cn("text-headline-lg-mobile md:text-headline-lg font-display font-black tracking-tighter italic drop-shadow-lg leading-tight", stat.color)}>
                    {stat.value}
                  </span>
                  <span className="text-label-sm text-gray-400 uppercase mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}

              <motion.div
                whileHover={{ rotate: 90 }}
                className="hidden md:flex ml-auto w-16 h-16 rounded-full border border-white/10 items-center justify-center text-white/10 opacity-40"
              >
                <Globe size={24} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            style={{ scale, y }}
          >
            {/* Visual Frame */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group border border-white/10 shadow-elevation">
              <Image
                src="/hero/mapa_background.jpeg"
                alt="Vanguardia Logística"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-110 filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d16] via-transparent to-transparent opacity-90" />

              {/* Animated Inner Glow */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Floating Interactive Hub */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-card border-l-4 border-l-primary flex items-center justify-between transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                <div>
                  <h3 className="font-display text-lg font-black text-white uppercase tracking-tight mb-2">Conocé más sobre nosotros</h3>
                  <div className="flex items-center gap-3 text-xxs text-blue-400 font-black tracking-[0.2em] uppercase">
                    <CheckCircle2 size={14} className="animate-pulse text-primary" aria-hidden="true" /> ¿Listo para formar parte de nuestra familia?
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 12 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Ir a página sobre nosotros"
                  className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-white shadow-[0_10px_20px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-all border border-blue-400/30"
                  onClick={() => window.location.href = '/nosotros/sobre-nosotros'}
                >
                  <Play size={20} fill="currentColor" className="ml-1" aria-hidden="true" />
                </motion.button>
              </div>

              {/* Holographic Status */}
              <div className="absolute top-10 right-10 flex flex-col items-end gap-3">
                <div className="px-3 py-1.5 rounded bg-primary/10 border border-primary/20 text-[9px] font-black text-primary uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  EN LÍNEA
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent mr-4" />
              </div>
            </div>

            {/* Background Light Leaks */}
            <div className="absolute -z-10 -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
            <div className="absolute -z-10 -top-20 -left-20 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[100px] mix-blend-screen opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};