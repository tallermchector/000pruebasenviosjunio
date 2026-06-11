"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

export function PlanInformation() {
  const features = [
    {
      title: "Soluciones 3PL",
      description: "Terceriza tu logística con nosotros. Almacenamos, preparamos y enviamos tus productos.",
    },
    {
      title: "Fulfillment",
      description: "Picking y packing profesional. Tu mercadería segura y lista para salir en minutos.",
    },
    {
      title: "Cuentas Corrientes",
      description: "Esquemas de pago flexibles adaptados al flujo de caja de tu empresa o emprendimiento.",
    },
  ]

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as any, stiffness: 100 } },
  };

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xxs font-black tracking-[0.2em] mb-6 uppercase">
              SOLUCIONES CORPORATIVAS
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black italic leading-none mb-8 uppercase text-white tracking-tighter">
              LOGÍSTICA 3PL <br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">PARA EMPRENDEDORES</span>
            </h2>
            <p className="text-gray-400 text-body-lg mb-10 leading-relaxed font-sans max-w-xl">
              Somos más que una empresa de envíos; nos convertimos en tu departamento de logística. Delegá el almacenamiento y la distribución en expertos y enfocate en hacer crecer tu negocio.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  custom={index}
                  variants={itemVariants}
                >
                  <div className="w-6 h-6 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-headline-lg-mobile font-bold text-foreground mb-2 font-display uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 text-body-md leading-relaxed font-sans">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Large Branding */}
          <motion.div
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            variants={itemVariants}
          >
            <div className="text-center lg:text-right select-none opacity-20">
              <div className="space-y-2">
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-white font-display tracking-tighter leading-none">
                  CORE
                </div>
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-primary font-display tracking-tighter leading-none">
                  BUSINESS
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
