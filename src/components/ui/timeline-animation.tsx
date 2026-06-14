"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

interface TimelineContentProps {
  children: React.ReactNode;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLDivElement | null>;
  customVariants?: Variants;
  className?: string;
  as?: string;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
    },
  }),
};

export const TimelineContent: React.FC<TimelineContentProps> = ({
  children,
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  as = "div",
}) => {
  // Use the motion component dynamically based on the 'as' prop
  const MotionComponent = (motion as any)[as] || motion.div;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={animationNum}
      variants={customVariants || defaultVariants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};
