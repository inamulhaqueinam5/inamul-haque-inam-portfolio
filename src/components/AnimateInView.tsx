"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface AnimateInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  as?: "div" | "h1" | "p" | "span" | "header" | "section";
}

export const AnimateInView: React.FC<AnimateInViewProps> = ({
  children,
  className,
  delay = 0,
  yOffset = 20,
  duration = 0.55,
  as = "div",
}) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[as] as typeof motion.div;

  const initialY = shouldReduceMotion ? 0 : yOffset;

  return (
    <MotionComponent
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

