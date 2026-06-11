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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary/10 border-4 border-secondary text-secondary text-xxs font-black tracking-[0.2em] mb-8 uppercase">
              <span className="w-2 h-2 bg-secondary animate-pulse" /> Partner Logístico Especializado
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-black italic uppercase text-white tracking-tighter leading-none mb-10">
              Nuestra Visión <br />
              <span className="text-primary">Logística</span>
            </h2>

            <p className="text-gray-400 text-body-lg mb-12 max-w-2xl">
              Transformamos <span className="font-bold text-gray-300">tus costos fijos en solutions flexibles</span> que acompañan el crecimiento de tu negocio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "flex items-start gap-5 p-5 rounded-xl border-l-4 border-l-primary border-4 transition-all duration-300 group hover:-translate-y-1 hover:-translate-x-1 hover:shadow-md",
                    i === 0 
                      ? "bg-background border-secondary hover:border-primary"
                      : "bg-background border-primary hover:border-secondary"
                  )}
                  whileHover={{ x: -4, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl border-4 flex items-center justify-center shrink-0 transition-transform duration-300",
                    i === 0 
                      ? "bg-secondary border-yellow-700 text-primary"
                      : "bg-primary border-blue-900 text-white"
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

            <div className="flex flex-wrap items-center gap-x-16 gap-y-10 pt-10 border-t-4 border-white/20">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col max-w-[200px]">
                  <span className={cn("text-headline-lg-mobile md:text-headline-lg font-display font-black tracking-tighter italic leading-tight", stat.color)}>
                    {stat.value}
                  </span>
                  <span className="text-label-sm text-gray-400 uppercase mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}

              <motion.div
                whileHover={{ rotate: 90 }}
                className="hidden md:flex ml-auto w-16 h-16 rounded-xl border-4 border-white/20 items-center justify-center text-white/10 opacity-40"
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
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden group border-8 border-primary shadow-lg">
              <Image
                src="/hero/mapa_background.jpeg"
                alt="Vanguardia Logística"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-110 filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* Floating Interactive Hub */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-background border-4 border-white flex items-center justify-between transition-all duration-500 shadow-md">
                <div>
                  <h3 className="font-display text-lg font-black text-white uppercase tracking-tight mb-2">Conocé más sobre nosotros</h3>
                  <div className="flex items-center gap-3 text-xxs text-blue-400 font-black tracking-[0.2em] uppercase">
                    <CheckCircle2 size={14} className="text-primary" aria-hidden="true" /> ¿Listo para formar parte de nuestra familia?
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1, x: -4, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Ir a página sobre nosotros"
                  className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-white hover:shadow-md transition-all border-4 border-blue-900"
                  onClick={() => window.location.href = '/nosotros/sobre-nosotros'}
                >
                  <Play size={20} fill="currentColor" className="ml-1" aria-hidden="true" />
                </motion.button>
              </div>

              {/* Holographic Status */}
              <div className="absolute top-10 right-10 flex flex-col items-end gap-3">
                <div className="px-3 py-1.5 rounded-xl bg-primary border-4 border-blue-900 text-[9px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-white animate-pulse" />
                  EN LÍNEA
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};