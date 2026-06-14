"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import type { PriceRangeClient } from "@/components/express/express-pricing-ranges";

const defaultZones = [
  {
    name: "Zona 1",
    subName: "Radio céntrico",
    description: "Ideal para entregas inmediatas en el centro (0 a 3 km)",
    price: 3700,
    rainPrice: Math.round(3700 * 1.5),
    buttonText: "Pedir Envío Zona 1",
    includes: [
      "Características del servicio:",
      "Elegís rango horario",
      "Mínimo 2hs anticipación",
      "Seguimiento real en mapa",
      "Tolerancia en puerta: 10 min",
    ],
  },
  {
    name: "Zona 2",
    subName: "Periferia cercana",
    description: "Cobertura de envíos rápidos (3 a 5 km)",
    price: 4600,
    rainPrice: Math.round(4600 * 1.5),
    buttonText: "Pedir Envío Zona 2",
    popular: true,
    includes: [
      "Características del servicio:",
      "Elegís rango horario",
      "Mínimo 2hs anticipación",
      "Seguimiento real en mapa",
      "Tolerancia en puerta: 10 min",
    ],
  },
  {
    name: "Zona 3",
    subName: "Zonas alejadas",
    description: "Llegamos con rapidez (5 a 7 km)",
    price: 6100,
    rainPrice: Math.round(6100 * 1.5),
    buttonText: "Pedir Envío Zona 3",
    includes: [
      "Características del servicio:",
      "Elegís rango horario",
      "Mínimo 2hs anticipación",
      "Seguimiento real en mapa",
      "Tolerancia en puerta: 10 min",
    ],
  },
  {
    name: "Zona 4",
    subName: "Límites de ciudad",
    description: "Máxima cobertura urbana (7 a 10 km)",
    price: 8200,
    rainPrice: Math.round(8200 * 1.5),
    buttonText: "Pedir Envío Zona 4",
    includes: [
      "Características del servicio:",
      "Elegís rango horario",
      "Mínimo 2hs anticipación",
      "Seguimiento real en mapa",
      "Tolerancia en puerta: 10 min",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-gray-700 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0" ? "text-white" : "text-gray-400",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative px-2">Día Normal</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1" ? "text-white" : "text-gray-400",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2 px-2">Día de Lluvia (+50%)</span>
        </button>
      </div>
    </div>
  );
};

interface PricingSection6Props {
  priceRanges?: PriceRangeClient[];
}

export default function PricingSection6({ priceRanges }: PricingSection6Props) {
  const [isRainRate, setIsRainRate] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsRainRate(Number.parseInt(value) === 1);

  // Map dynamic pricing from database if available, otherwise use default
  const zones = priceRanges && priceRanges.length > 0
    ? priceRanges.slice(0, 4).map((range, index) => {
        const defaultZone = defaultZones[index] || defaultZones[defaultZones.length - 1];
        return {
          name: range.nombreZona || `Zona ${index + 1}`,
          subName: index === 0 ? "Radio céntrico" : index === 1 ? "Periferia cercana" : index === 2 ? "Zonas alejadas" : "Límites de ciudad",
          description: defaultZone.description,
          price: range.precioRango,
          rainPrice: Math.round(range.precioRango * 1.5),
          buttonText: `Pedir Envío ${range.nombreZona || `Zona ${index + 1}`}`,
          popular: index === 1,
          includes: defaultZone.includes,
        };
      })
    : defaultZones;

  return (
    <div
      className="min-h-screen mx-auto relative bg-black overflow-x-hidden w-full pb-20"
      ref={pricingRef}
    >
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        <SparklesComp
          density={1800}
          direction="bottom"
          speed={1}
          color="#FFFFFF"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>
      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-114px] w-full h-[113.625vh] flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0"
      >
        <div className="framer-1i5axl2">
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 1"
          ></div>
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 2"
          ></div>
        </div>
      </TimelineContent>

      <article className="text-center mb-6 pt-32 max-w-3xl mx-auto space-y-2 relative z-50 px-4">
        <div className="text-4xl font-medium text-white flex justify-center">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center text-center leading-tight font-bold text-3xl md:text-5xl"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Nuestras Tarifas de Envíos Express
          </VerticalCutReveal>
        </div>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-gray-300 text-sm md:text-base"
        >
          Tarifas según distancia de entrega en Mar del Plata. Elegí tu rango horario preferido.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at center, #206ce8 0%, transparent 70%)
      `,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-4 py-6 mx-auto relative z-50 px-4">
        {zones.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative text-white border-neutral-800 h-full flex flex-col justify-between ${
                plan.popular
                  ? "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 shadow-[0px_-13px_300px_0px_#0900ff] z-20"
                  : "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 z-10"
              }`}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-3">{plan.subName}</p>
                  </div>
                  {plan.popular && (
                    <span className="text-[10px] bg-blue-600 text-white font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                      Más Elegido
                    </span>
                  )}
                </div>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-semibold">
                    $
                    <NumberFlow
                      value={isRainRate ? plan.rainPrice : plan.price}
                      className="text-4xl font-semibold"
                    />
                  </span>
                  <span className="text-gray-300 ml-1">
                    /envío
                  </span>
                </div>
                <p className="text-sm text-gray-300 min-h-[40px]">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0 flex-grow flex flex-col justify-between">
                <button
                  className={`w-full mb-6 p-4 text-base font-bold rounded-xl active:scale-95 transition-all ${
                    plan.popular
                      ? "bg-gradient-to-t from-blue-500 to-blue-600 shadow-lg shadow-blue-800 border border-blue-500 text-white"
                      : "bg-gradient-to-t from-neutral-950 to-neutral-600 shadow-lg shadow-neutral-900 border border-neutral-800 text-white"
                  }`}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3 pt-4 border-t border-neutral-700">
                  <h4 className="font-medium text-sm mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <span className="h-1.5 w-1.5 bg-blue-500 rounded-full grid place-content-center"></span>
                        <span className="text-xs text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
