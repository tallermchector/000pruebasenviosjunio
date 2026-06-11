'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Zap, Package, Truck, ChevronRight, Clock, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { motionVariants } from '@/components/ui/animations';

// Definición de tipos para la tematización semántica
type ServiceTheme = {
  card: string;
  icon: string;
  accent: string;
  text: string;
  desc: string;
  button: string;
  badge?: string;
  accentColor: string;
  glowColor: string;
};

const THEMES: Record<string, ServiceTheme> = {
  express: {
    card: "bg-background border-4 border-white/20 rounded-none shadow-md hover:shadow-lg hover:-translate-y-1 hover:-translate-x-1 hover:border-primary transition-all duration-300",
    icon: "bg-primary border-4 border-blue-900 text-white rounded-none",
    accent: "text-primary",
    text: "text-white",
    desc: "text-gray-400 [&>span]:text-white",
    button: "text-gray-300 hover:text-white group-hover:text-primary",
    badge: "bg-primary text-white border-primary border-2 rounded-none",
    accentColor: "blue-400",
    glowColor: "transparent"
  },
  lowcost: {
    card: "bg-background border-4 border-white/20 rounded-none shadow-md hover:shadow-lg hover:-translate-y-1 hover:-translate-x-1 hover:border-secondary transition-all duration-300",
    icon: "bg-secondary border-4 border-yellow-700 text-primary rounded-none",
    accent: "text-secondary",
    text: "text-white",
    desc: "text-gray-400 [&>span]:text-white",
    button: "text-gray-300 hover:text-white group-hover:text-secondary",
    badge: "bg-secondary text-primary border-secondary border-2 rounded-none",
    accentColor: "yellow-400",
    glowColor: "transparent"
  },
  meli: {
    card: "bg-background border-4 border-white/20 rounded-none shadow-md hover:shadow-lg hover:-translate-y-1 hover:-translate-x-1 hover:border-primary transition-all duration-300",
    icon: "bg-primary border-4 border-blue-900 text-white rounded-none",
    accent: "text-primary",
    text: "text-white",
    desc: "text-gray-400 [&>span]:text-white",
    button: "text-gray-300 hover:text-white group-hover:text-primary",
    badge: "bg-primary text-white border-primary border-2 rounded-none",
    accentColor: "blue-400",
    glowColor: "transparent"
  },
  ecommerce: {
    card: "bg-background border-4 border-white/20 rounded-none shadow-md hover:shadow-lg hover:-translate-y-1 hover:-translate-x-1 hover:border-secondary transition-all duration-300",
    icon: "bg-secondary border-4 border-yellow-700 text-primary rounded-none",
    accent: "text-secondary",
    text: "text-white",
    desc: "text-gray-400 [&>span]:text-white",
    button: "text-gray-300 hover:text-white group-hover:text-secondary",
    badge: "bg-secondary text-primary border-secondary border-2 rounded-none",
    accentColor: "yellow-400",
    glowColor: "transparent"
  }
};

export const ServicesOverview = () => {
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
      className: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <section className="relative min-h-[100dvh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 bg-transparent overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[160px] pointer-events-none opacity-50" />
      
      {/* Section Transition Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-secondary/10 border-4 border-secondary text-secondary text-xxs font-black tracking-[0.2em] mb-8 uppercase">
              <span className="w-2 h-2 bg-secondary animate-pulse" /> SERVICIOS EXCLUSIVOS
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black italic uppercase text-white tracking-tighter leading-none">
              NUESTRA GAMA DE <br />
              <span className="text-primary">SOLUCIONES</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-md lg:border-l lg:border-white/10 lg:pl-10"
          >
            <p className="text-gray-400 text-body-lg">
              Infraestructura moderna para negocios que no se detienen. Inteligencia aplicada a cada kilómetro.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-6 h-auto"
          variants={motionVariants.bentoGridEntrance}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, idx) => {
            const theme = THEMES[service.theme as keyof typeof THEMES];
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: motionVariants.bentoItemEntrance.hidden,
                  visible: motionVariants.bentoItemEntrance.visible,
                  hover: motionVariants.cardHoverDepth.hover,
                }}
                whileHover="hover"
                className={cn(
                  "group p-6 lg:p-10 flex flex-col justify-between relative overflow-hidden",
                  theme.card,
                  service.className
                )}
              >

                <div className="relative z-10">
                  <div className={cn(
                    "w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mb-6 lg:mb-10 transition-all duration-500 group-hover:-translate-y-1 group-hover:-translate-x-1 hover:shadow-md",
                    theme.icon
                  )}>
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28 })}
                  </div>

                  <h3 className={cn("text-headline-md mb-1 uppercase tracking-wide transition-all duration-300 group-hover:tracking-wider", theme.text)}>
                    {service.title}
                  </h3>
                  <p className={cn("text-label-sm uppercase mb-4 tracking-widest transition-all duration-300 group-hover:text-white", theme.accent)}>
                    {service.bajada}
                  </p>
                  <div className={cn("text-body-md mb-6 max-w-[320px] leading-relaxed transition-colors duration-300 group-hover:text-gray-300", theme.desc)}>
                    {service.desc}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <Link
                    href={service.href}
                    className={cn("flex items-center gap-2 text-label-md transition-all duration-300 group-hover:gap-3", theme.button)}
                  >
                    {service.buttonText} <ChevronRight size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>

                  {service.badge && (
                    <div className={cn("hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full font-display text-[9px] font-black tracking-[0.2em] uppercase border", theme.badge)}>
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Decorative side border accent */}
                <div className={cn("absolute top-1/2 -right-1 w-[2px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:via-current transition-all", theme.accent)} />

                {/* Specific Visual for the first card */}
                {idx === 0 && (
                  <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
                    <MousePointer2 size={120} className="rotate-12 text-white" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};