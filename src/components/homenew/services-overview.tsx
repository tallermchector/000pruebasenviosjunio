'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Zap, Package, Truck, ChevronRight, Clock, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { motionVariants } from '@/components/ui/animations';

// Definición de tipos para la tematización semántica de cada tarjeta
type ServiceTheme = {
  card: string;
  icon: string;
  accent: string;
  text: string;
  desc: string;
  button: string;
  badge?: string;
  glow: string;
};

const THEMES: Record<string, ServiceTheme> = {
  express: {
    card: "bg-blue-950/10 border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-950/20",
    icon: "bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-md",
    accent: "text-blue-400",
    text: "text-foreground",
    desc: "text-muted-foreground [&>span]:text-foreground",
    button: "text-muted-foreground hover:text-foreground group-hover:text-blue-400",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/30 border",
    glow: "bg-blue-500"
  },
  lowcost: {
    card: "bg-amber-950/10 border-amber-500/20 hover:border-amber-400/50 hover:bg-amber-950/20",
    icon: "bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-md",
    accent: "text-amber-400",
    text: "text-foreground",
    desc: "text-muted-foreground [&>span]:text-foreground",
    button: "text-muted-foreground hover:text-foreground group-hover:text-amber-400",
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/30 border",
    glow: "bg-amber-500"
  },
  meli: {
    card: "bg-emerald-950/10 border-emerald-500/20 hover:border-emerald-400/50 hover:bg-emerald-950/20",
    icon: "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-md",
    accent: "text-emerald-400",
    text: "text-foreground",
    desc: "text-muted-foreground [&>span]:text-foreground",
    button: "text-muted-foreground hover:text-foreground group-hover:text-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 border",
    glow: "bg-emerald-500"
  },
  ecommerce: {
    card: "bg-indigo-950/10 border-indigo-500/20 hover:border-indigo-400/50 hover:bg-indigo-950/20",
    icon: "bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-md",
    accent: "text-indigo-400",
    text: "text-foreground",
    desc: "text-muted-foreground [&>span]:text-foreground",
    button: "text-muted-foreground hover:text-foreground group-hover:text-indigo-400",
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30 border",
    glow: "bg-indigo-500"
  }
};

export const ServicesOverview = () => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      theme: "express",
      title: "Envíos Express",
      bajada: "Prioridad absoluta y certeza total.",
      desc: <>Diseñado para operaciones de alta criticidad horaria. <span className="font-bold">Vos elegís el rango exacto</span> de entrega con solo 2 horas de anticipación.</>,
      icon: <Zap />,
      href: "/servicios/envios-express",
      buttonText: "Solicitar Express",
      badge: "ALTA PRIORIDAD",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      theme: "lowcost",
      title: "Envíos LowCost",
      bajada: "Rentabilidad y ruteo masivo.",
      desc: <>Variabilizá tus costos logísticos. <span className="font-bold">Ingresá tus pedidos</span> antes de las 13:00 hs y garantizamos entrega en el día.</>,
      icon: <Clock />,
      href: "/servicios/envios-lowcost",
      buttonText: "Ahorrá con LowCost",
      badge: "RECOMENDADO",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      theme: "meli",
      title: "Envíos Flex (MercadoLibre)",
      bajada: "Potenciá tu reputación al máximo.",
      desc: <>Somos expertos en MercadoLibre. Cumplimos tus <span className="font-bold">acuerdos de nivel de servicio (SLAs) Same-Day</span> para que tu termómetro esté en verde.</>,
      icon: <Package />,
      href: "/servicios/enviosflex",
      buttonText: "Activar Envíos Flex",
      badge: "SLAs COMPLIANT",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      theme: "ecommerce",
      title: "E-Commerce & 3PL",
      bajada: "Tercerización y cuentas corrientes.",
      desc: <>Más que un envío, somos tu depósito. <span className="font-bold">Soluciones escalables</span> para PyMEs con facturación mensual centralizada.</>,
      icon: <Truck />,
      href: "/servicios/plan-emprendedores",
      buttonText: "Hablar con un asesor",
      badge: "CUENTA CORRIENTE",
      className: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <section id="servicios" className="relative min-h-[100dvh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 bg-transparent overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[160px] pointer-events-none opacity-50" />
      
      {/* Section Transition Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/10 to-transparent" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/40 text-secondary text-xxs font-black tracking-[0.2em] mb-8 uppercase">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" /> SERVICIOS EXCLUSIVOS
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black italic uppercase text-foreground tracking-tighter leading-none">
              NUESTRA GAMA DE <br />
              <span className="text-primary font-display">SOLUCIONES</span>
            </h2>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-md lg:border-l lg:border-border lg:pl-10"
          >
            <p className="text-muted-foreground text-body-lg font-sans">
              Infraestructura moderna para negocios que no se detienen. Inteligencia aplicada a cada kilómetro.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-6 h-auto"
          variants={shouldReduceMotion ? {} : motionVariants.bentoGridEntrance}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, idx) => {
            const theme = THEMES[service.theme as keyof typeof THEMES];
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: shouldReduceMotion ? { opacity: 1 } : motionVariants.bentoItemEntrance.hidden,
                  visible: shouldReduceMotion ? { opacity: 1 } : motionVariants.bentoItemEntrance.visible,
                  hover: shouldReduceMotion ? {} : motionVariants.cardHoverDepth.hover,
                }}
                whileHover="hover"
                className={cn(
                  "group p-6 lg:p-10 flex flex-col justify-between relative overflow-hidden rounded-xl border backdrop-blur-sm transition-colors duration-300",
                  theme.card,
                  service.className
                )}
              >
                {/* Background Ambient Glow for Card hover */}
                <div className={cn("absolute -right-24 -bottom-24 w-48 h-48 rounded-full blur-[80px] pointer-events-none opacity-10 group-hover:opacity-30 transition-all duration-500", theme.glow)} />

                {/* Elegant Decorative Watermark SVG Icon */}
                {idx === 0 && (
                  <div className="absolute -top-6 -right-6 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-500 pointer-events-none" aria-hidden="true">
                    <MousePointer2 size={140} className="rotate-12 text-blue-500" />
                  </div>
                )}
                {idx === 1 && (
                  <div className="absolute -top-6 -right-6 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-500 pointer-events-none" aria-hidden="true">
                    <Clock size={140} className="-rotate-12 text-amber-500" />
                  </div>
                )}
                {idx === 2 && (
                  <div className="absolute -top-6 -right-6 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-500 pointer-events-none" aria-hidden="true">
                    <Package size={140} className="rotate-45 text-emerald-500" />
                  </div>
                )}
                {idx === 3 && (
                  <div className="absolute -top-6 -right-6 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-500 pointer-events-none" aria-hidden="true">
                    <Truck size={140} className="-rotate-12 text-indigo-500" />
                  </div>
                )}

                <div className="relative z-10">
                  <div className={cn(
                    "w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mb-6 lg:mb-10 transition-all duration-500 group-hover:-translate-y-1 group-hover:-translate-x-1 hover:shadow-md",
                    theme.icon
                  )}>
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28 })}
                  </div>

                  <h3 className={cn("text-headline-md italic font-black mb-1 uppercase tracking-wide transition-all duration-300 group-hover:tracking-wider", theme.text)}>
                    {service.title}
                  </h3>
                  <p className={cn("text-label-sm uppercase mb-4 tracking-widest font-bold transition-all duration-300", theme.accent)}>
                    {service.bajada}
                  </p>
                  <div className={cn("text-body-md mb-6 max-w-[320px] leading-relaxed transition-colors duration-300", theme.desc)}>
                    {service.desc}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <Link
                    href={service.href}
                    className={cn("flex items-center gap-2 text-label-md transition-all duration-300 group-hover:gap-3 font-bold", theme.button)}
                  >
                    {service.buttonText} <ChevronRight size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>

                  {service.badge && (
                    <div className={cn("hidden md:flex items-center gap-2 px-3 py-1 rounded-full font-display text-[9px] font-black tracking-[0.2em] uppercase border", theme.badge)}>
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Decorative side border accent */}
                <div className={cn("absolute top-1/4 -right-px w-px h-1/2 bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent group-hover:via-current transition-all duration-300", theme.accent)} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};