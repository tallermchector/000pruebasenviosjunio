'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Rocket, CheckCircle2, ArrowRight, ShieldCheck, Zap, Globe, Package, Building2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from "@/lib/utils";

export const EmprendedoresHome = () => {
  const shouldReduceMotion = useReducedMotion();
  const solutions = [
    {
      title: "Soluciones Corporativas",
      description: "Optimización logística para empresas con Cuenta Corriente Flexible y beneficios de escala",
      icon: Building2,
      features: ["Cuenta Corriente Flexible", "Facturación simplificada", "Gestión multi-usuario", "Reportes de impacto"],
      link: "/servicios/plan-emprendedores",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
      badge: "Corporativo",
    },
    {
      title: "Envíos Flex MercadoLibre",
      description: "Socio estratégico para potenciar tus ventas con entregas en el día",
      icon: Zap,
      features: ["Cumplimiento de SLAs", "Mejora tu reputación", "Tarifas competitivas", "Soporte Flex dedicado"],
      link: "/servicios/enviosflex",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
      badge: "MercadoLibre",
    },
    {
      title: "Logística E-Commerce",
      description: "Gestión integral de última milla para PyMEs en crecimiento",
      icon: Globe,
      features: ["Integración tecnológica", "Rutas optimizadas", "Flota especializada", "Seguimiento en tiempo real"],
      link: "/servicios/plan-emprendedores",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
      badge: "PyMEs",
    },
  ];

  return (
    <section className="relative min-h-[100dvh] flex items-center py-20 lg:py-32 px-4 overflow-hidden bg-transparent">
      {/* Background Decorative Tech Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05]">
        <Image
          src="/hero/delivery_background.jpeg"
          alt="Background Delivery"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#3b82f633_0,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24 items-end">
          <div>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/40 text-secondary text-xxs font-black tracking-[0.2em] mb-8 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> Soluciones Corporativas y PyME
            </motion.div>
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-display font-black italic text-foreground uppercase tracking-tighter leading-none"
            >
              Potencia tu <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)] font-display">Logística</span> <br />
              con <span className="text-secondary drop-shadow-[0_0_15px_rgba(234,179,8,0.2)] font-display">DosRuedas</span>
            </motion.h2>
          </div>
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:border-l lg:border-border lg:pl-12"
          >
            <p className="text-muted-foreground text-body-lg mb-10 font-sans">
              Transformamos la última milla de tu empresa con una flota ágil y especializada de alta precisión. Beneficios exclusivos para clientes corporativos.
            </p>
            <div className="flex gap-8 font-sans">
              <div className="flex flex-col gap-1">
                <span className="text-secondary text-3xl font-display font-black italic uppercase">500+</span>
                <span className="text-label-sm text-muted-foreground/80 uppercase">Empresas</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-secondary text-3xl font-display font-black italic uppercase">24/7</span>
                <span className="text-label-sm text-muted-foreground/80 uppercase">Operativa</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto lg:h-[620px]">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              className={cn(
                "group relative h-full rounded-xl overflow-hidden bg-card border-l-4 transition-all duration-300",
                idx % 2 === 0
                  ? "border-l-primary hover:border-l-secondary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                  : "border-l-secondary hover:border-l-primary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              )}
            >
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex justify-between items-start mb-auto">
                  <span className={cn(
                    "px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-[0.2em] shadow-lg",
                    idx % 2 === 0
                      ? "bg-primary/10 border-primary/20 text-primary"
                      : "bg-secondary/10 border-secondary/20 text-secondary"
                  )}>
                    {solution.badge}
                  </span>
                </div>

                <div className={cn(
                  "w-12 h-12 rounded-md flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                  idx % 2 === 0
                    ? "bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    : "bg-secondary/10 border border-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground"
                )}>
                  <solution.icon size={24} />
                </div>

                <h3 className="text-headline-md italic font-black text-foreground mb-3 uppercase tracking-wide">
                  {solution.title}
                </h3>

                <p className="text-muted-foreground text-body-md mb-6 line-clamp-2 font-sans">
                  {solution.description}
                </p>

                <div className="space-y-3 mb-8">
                  {solution.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-label-sm text-muted-foreground">
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                        idx % 2 === 0 ? "bg-primary/10" : "bg-secondary/10"
                      )}>
                        <CheckCircle2 size={12} className={idx % 2 === 0 ? "text-primary" : "text-secondary"} />
                      </div>
                      <span className="uppercase text-xs font-sans font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={solution.link}
                  className={cn(
                    "group/btn w-full py-4 rounded-md text-center flex items-center justify-center gap-3 transition-all duration-300 uppercase shadow-md active:scale-95 text-label-md font-bold border",
                    idx % 2 === 0
                      ? "bg-primary/10 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                      : "bg-secondary/10 border-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  )}
                >
                  CONFIGURAR PLAN <ArrowRight size={16} className="group-hover/btn:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic Floor Element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/40 to-transparent opacity-50" />
    </section>
  );
};