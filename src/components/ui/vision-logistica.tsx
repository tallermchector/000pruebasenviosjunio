"use client";

import React from "react";
import { Sparkles } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";
import { Clock, ShieldCheck, Users, Award, Bike } from "lucide-react";
import { motion } from "framer-motion";

const visionItems = [
  {
    icon: Clock,
    title: "Entregas a Tiempo",
    description: "Puntualidad garantizada en cada envío.",
  },
  {
    icon: ShieldCheck,
    title: "Envíos Seguros",
    description: "Protección total de tus paquetes.",
  },
  {
    icon: Users,
    title: "Confianza",
    description: "+5.000 Confianza local comprobada.",
  },
  {
    icon: Award,
    title: "Experiencia",
    description: "7 Años de innovación constante en última milla.",
  },
  {
    icon: Bike,
    title: "Flota Exclusiva",
    description: "Motocicletas dedicadas para máxima agilidad urbana.",
  },
];

export function VisionLogistica() {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen w-full overflow-hidden bg-background relative flex flex-col justify-between py-24 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-4 z-20 flex-grow flex flex-col justify-center">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground font-display uppercase italic"
          >
            Nuestra Visión Logística
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base md:text-xl text-foreground/80 max-w-3xl mx-auto font-sans leading-relaxed"
          >
            Transformamos tus costos fijos en soluciones flexibles que acompañan el crecimiento de tu negocio.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {visionItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-[12px] bg-card/40 border border-border rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group"
              >
                <div className="w-12 h-12 rounded-md bg-primary/10 border border-primary/20 text-primary flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-primary/20">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-foreground font-bold text-lg mt-5 font-display tracking-tight uppercase group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-3 font-sans leading-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="relative h-72 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] z-0 mt-8">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,hsl(var(--primary)),transparent_70%)] before:opacity-40" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-border bg-white dark:bg-zinc-950" />
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color={theme === "dark" ? "#ffffff" : "hsl(var(--primary))"}
        />
      </div>
    </section>
  );
}
