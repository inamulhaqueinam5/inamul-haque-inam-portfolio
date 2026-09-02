"use client";

import React from "react";
import { motion } from "framer-motion";

export interface AnimateInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
}

export const AnimateInView: React.FC<AnimateInViewProps> = ({
  children,
  className,
  delay = 0,
  yOffset = 20,
  duration = 0.5,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
