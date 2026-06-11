'use client';

import Link from 'next/link';
import { Play, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { HeroBackground } from './hero-background';
import { HeroVisuals } from './hero-visuals';
import { HeroScrollIndicator } from './hero-scroll-indicator';
import { motion } from 'framer-motion';
import { motionVariants } from '@/components/ui/animations';

export default function HeroAnimado() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = motionVariants.smoothFadeSlide;

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 overflow-hidden bg-transparent">
      {/* Background Parallax - Client Component */}
      <HeroBackground />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-center lg:text-left"
        >
          {/* Badge - Animation with Framer Motion */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-display text-xs font-black tracking-widest mb-8 uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            LOGÍSTICA EXTREMA // MAR DEL PLATA
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-black italic mb-6 uppercase text-white tracking-tighter leading-none"
          >
            Mensajería y <br />
            <span className="text-primary">Logística E-Commerce</span> <br />
            en <span className="text-secondary italic">Mar del Plata</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-body-lg mb-8 xl:mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
          >
            <Link
              href="/cotizar/express"
              aria-label="Solicitar Servicio de mensajería desde el héroe"
              className="group relative px-10 py-4.5 bg-primary hover:bg-blue-600 text-white font-display text-xs font-black rounded-xl border-4 border-blue-900 transition-all shadow-md uppercase overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-md"
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Servicio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>

            <Link
              href="/servicios/envios-express"
              aria-label="Ver todos los servicios de envíos"
              className="flex items-center gap-4 group text-white font-display text-xs font-black hover:text-primary transition-colors py-2 uppercase tracking-wider"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border-4 border-white/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all group-hover:-translate-y-1 group-hover:-translate-x-1 hover:shadow-md" aria-hidden="true">
                <Play className="fill-white text-white ml-1" size={18} />
              </div>
              <span>Ver Servicios</span>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 lg:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2 text-label-sm uppercase text-white/40">
              <ShieldCheck size={14} className="text-primary" /> 100% SEGURO
            </div>
            <div className="flex items-center gap-2 text-label-sm uppercase text-white/40">
              <Zap size={14} className="text-secondary" /> ULTRA RÁPIDO
            </div>
            <div className="flex items-center gap-2 text-label-sm uppercase text-white/40">
              <Globe size={14} className="text-blue-400" /> COBERTURA TOTAL
            </div>
          </motion.div>
        </motion.div>

        {/* Visuals - Client Component */}
        <HeroVisuals />
      </div>

      {/* Scroll Indicator - Client Component */}
      <HeroScrollIndicator />
    </section>
  );
}