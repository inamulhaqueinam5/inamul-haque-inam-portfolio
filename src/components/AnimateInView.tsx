"use client";

import React from "react";
import { motion } from "framer-motion";

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
  duration = 0.5,
  as = "div",
}) => {
  const MotionComponent = motion[as] as typeof motion.div;

  return (
    <MotionComponent
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};
