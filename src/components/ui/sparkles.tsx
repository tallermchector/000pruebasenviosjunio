"use client";

import { useId } from "react";
import Particles, { ParticlesProvider, useParticlesProvider } from "@tsparticles/react";
import { type Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

interface SparklesProps {
  className?: string;
  size?: number;
  minSize?: number | null;
  density?: number;
  speed?: number;
  minSpeed?: number | null;
  opacity?: number;
  opacitySpeed?: number;
  minOpacity?: number | null;
  color?: string;
  background?: string;
  options?: any;
  direction?: string;
}

function SparklesInner({
  className,
  size = 1,
  minSize = null,
  density = 800,
  speed = 1,
  minSpeed = null,
  opacity = 1,
  opacitySpeed = 3,
  minOpacity = null,
  color = "#FFFFFF",
  background = "transparent",
  options = {},
  direction = "none",
}: SparklesProps) {
  const { loaded } = useParticlesProvider();
  const id = useId();

  const defaultOptions = {
    background: {
      color: {
        value: background,
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: color,
      },
      move: {
        enable: true,
        direction: direction,
        speed: {
          min: minSpeed || speed / 10,
          max: speed,
        },
        straight: false,
      },
      number: {
        value: density,
      },
      opacity: {
        value: {
          min: minOpacity || opacity / 10,
          max: opacity,
        },
        animation: {
          enable: true,
          sync: false,
          speed: opacitySpeed,
        },
      },
      size: {
        value: {
          min: minSize || size / 2.5,
          max: size,
        },
      },
    },
    detectRetina: true,
  };

  return loaded ? (
    <Particles id={id} options={{ ...defaultOptions, ...options }} className={className} />
  ) : null;
}

export function Sparkles(props: SparklesProps) {
  const initEngine = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <ParticlesProvider init={initEngine}>
      <SparklesInner {...props} />
    </ParticlesProvider>
  );
}
