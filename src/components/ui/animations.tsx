'use client';

import React from 'react';
import { motion, Variants, HTMLMotionProps } from 'framer-motion';

/**
 * Easing estándar de Google Material Design para aceleración/desaceleración fluida
 */
export const materialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];


/**
 * Variantes de animación de Framer Motion basadas en el sistema de diseño visual de Envíos DosRuedas MDP
 */
export const motionVariants = {
  // Bento Grid entrance using staggerChildren
  bentoGridEntrance: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
        ease: materialEase,
      },
    },
  } as Variants,

  // Child items inside Bento Grid
  bentoItemEntrance: {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: materialEase,
      },
    },
  } as Variants,

  // Card hover "lift" (scale + subtle shadow depth change based on Elevation & Depth)
  cardHoverDepth: {
    initial: {
      scale: 1,
      y: 0,
      boxShadow: 'var(--shadow-md)',
      transition: {
        duration: 0.3,
        ease: materialEase,
      },
    },
    hover: {
      scale: 1.015,
      y: -4,
      boxShadow: 'var(--shadow-lg)',
      transition: {
        duration: 0.3,
        ease: materialEase,
      },
    },
  } as Variants,

  // Smooth fade and slide transition for general sections or text elements
  smoothFadeSlide: {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: materialEase,
      },
    },
  } as Variants,

  // Glassmorphism effect transition applying backdrop-blur
  glassmorphismEffect: {
    initial: {
      backdropFilter: 'blur(0px)',
      WebkitBackdropFilter: 'blur(0px)',
      backgroundColor: 'hsl(var(--card) / 0)',
      borderColor: 'hsl(var(--border) / 0)',
      transition: {
        duration: 0.4,
        ease: materialEase,
      },
    },
    active: {
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      backgroundColor: 'hsl(var(--card) / 0.45)',
      borderColor: 'hsl(var(--border) / 0.3)',
      transition: {
        duration: 0.4,
        ease: materialEase,
      },
    },
  } as Variants,
};

interface MotionWrapperProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}

/**
 * GlassmorphismEffect: Un wrapper de movimiento que aplica 'backdrop-blur'
 * mediante transiciones fluidas de Framer Motion.
 */
export const GlassmorphismEffect: React.FC<MotionWrapperProps> = ({ children, ...props }) => {
  return (
    <motion.div
      variants={motionVariants.glassmorphismEffect}
      initial="initial"
      animate="active"
      className="glass-card"
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * BentoGridContainer: Wrapper de movimiento que orquesta la entrada stagger de sus hijos
 */
export const BentoGridContainer: React.FC<MotionWrapperProps> = ({ children, ...props }) => {
  return (
    <motion.div
      variants={motionVariants.bentoGridEntrance}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
};
