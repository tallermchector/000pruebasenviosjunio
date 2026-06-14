"use client";

import { Ref, forwardRef, useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { motion, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Direction = "left" | "right";

export const PhotoGallery = ({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // First make the container visible with a fade-in
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);

    // Then start the photo animations after a short delay
    const animationTimer = setTimeout(
      () => {
        setIsLoaded(true);
      },
      (animationDelay + 0.4) * 1000
    );

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [animationDelay]);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for each photo
  const photoVariants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }),
    visible: (custom: { x: any; y: any; order: number }) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  };

  // Adapted logistic service photos & data
  const photos = [
    {
      id: 1,
      order: 0,
      x: "-340px",
      y: "15px",
      zIndex: 50,
      direction: "left" as Direction,
      src: "https://images.unsplash.com/photo-1566576912321-d58edd7a290f?w=800&auto=format&fit=crop&q=60",
      title: "Envíos Express",
      bajada: "ALTA PRIORIDAD",
      desc: "Vos elegís el rango horario exacto de entrega con solo 2 horas de anticipación. Rapidez urbana garantizada.",
    },
    {
      id: 2,
      order: 1,
      x: "-170px",
      y: "32px",
      zIndex: 40,
      direction: "left" as Direction,
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60",
      title: "Envíos LowCost",
      bajada: "RECOMENDADO",
      desc: "Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y entregamos en el día.",
    },
    {
      id: 3,
      order: 2,
      x: "0px",
      y: "8px",
      zIndex: 30,
      direction: "right" as Direction,
      src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop&q=60",
      title: "Envíos Flex",
      bajada: "MERCADOLIBRE SLAs",
      desc: "Cumplimos tus acuerdos Same-Day de MercadoLibre para mantener tu reputación siempre en verde.",
    },
    {
      id: 4,
      order: 3,
      x: "170px",
      y: "22px",
      zIndex: 20,
      direction: "right" as Direction,
      src: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=800&auto=format&fit=crop&q=60",
      title: "E-Commerce & 3PL",
      bajada: "CUENTA CORRIENTE",
      desc: "Soluciones de almacenamiento y distribución escalables para PyMEs con facturación centralizada.",
    },
    {
      id: 5,
      order: 4,
      x: "340px",
      y: "44px",
      zIndex: 10,
      direction: "left" as Direction,
      src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=60",
      title: "Cotización Online",
      bajada: "LOGÍSTICA DIGITAL",
      desc: "Calculá en tiempo real el costo exacto de tu mensajería utilizando nuestro cotizador inteligente en mapa.",
    },
  ];

  return (
    <div className="mt-24 mb-16 relative w-full overflow-hidden py-10">
      <div className="absolute inset-0 max-md:hidden top-[180px] -z-10 h-[300px] w-full bg-transparent bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.07] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <p className="lg:text-md my-2 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        NUESTRA GAMA DE SOLUCIONES
      </p>
      <h3 className="z-20 mx-auto max-w-4xl justify-center bg-gradient-to-r from-foreground via-foreground/85 to-foreground bg-clip-text py-3 text-center text-3xl font-display font-black uppercase italic text-transparent md:text-6xl tracking-tight">
        SERVICIOS <span className="text-secondary">EXCLUSIVOS</span>
      </h3>
      
      <div className="relative mb-8 h-[380px] w-full items-center justify-center lg:flex mt-12">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div className="relative h-[250px] w-[250px]">
              {/* Render photos in reverse order so that higher z-index photos are rendered later in the DOM */}
              {[...photos].reverse().map((photo) => (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0"
                  style={{ zIndex: photo.zIndex }}
                  variants={photoVariants}
                  custom={{
                    x: photo.x,
                    y: photo.y,
                    order: photo.order,
                  }}
                >
                  <Photo
                    width={240}
                    height={320}
                    src={photo.src}
                    alt={photo.title}
                    direction={photo.direction}
                    title={photo.title}
                    bajada={photo.bajada}
                    desc={photo.desc}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex w-full justify-center mt-12">
        <Button asChild className="rounded-md px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-display text-orbitron font-black uppercase tracking-tight h-auto shadow-md">
          <a href="/servicios/envios-express">Ver todos los servicios</a>
        </Button>
      </div>
    </div>
  );
};

function getRandomNumberInRange(min: number, max: number): number {
  if (min >= max) {
    throw new Error("Min value should be less than max value");
  }
  return Math.random() * (max - min) + min;
}

const MotionImage = motion(
  forwardRef(function MotionImage(
    props: ImageProps,
    ref: Ref<HTMLImageElement>
  ) {
    return <Image ref={ref} {...props} />;
  })
);

export const Photo = ({
  src,
  alt,
  className,
  direction,
  width,
  height,
  title,
  bajada,
  desc,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: Direction;
  width: number;
  height: number;
  title: string;
  bajada: string;
  desc: string;
}) => {
  const [rotation, setRotation] = useState<number>(0);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const randomRotation =
      getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, []);

  function handleMouse(event: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const resetMouse = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.15, zIndex: 9999 }}
      whileHover={{
        scale: 1.05,
        rotateZ: 2 * (direction === "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.05,
        zIndex: 9999,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 400,
        transform: `rotate(0deg) rotateX(0deg) rotateY(0deg)`,
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className={cn(
        className,
        "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing"
      )}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-lg border border-white/10">
        <MotionImage
          className={cn("rounded-3xl object-cover")}
          fill
          src={src}
          alt={alt}
          {...props}
          draggable={false}
        />
        {/* Transparent Text Overlay with Service Description */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 flex flex-col justify-end text-left select-none pointer-events-none">
          <span className="text-secondary font-black text-[9px] uppercase tracking-widest">{bajada}</span>
          <h4 className="text-white font-display font-black text-lg uppercase italic mt-1 leading-tight tracking-tight">{title}</h4>
          <p className="text-gray-300 text-[11px] mt-2 font-sans leading-snug line-clamp-3">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};
