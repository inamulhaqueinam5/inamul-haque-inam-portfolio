"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = "", strength = 0.28 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { stiffness: 350, damping: 25, mass: 0.2 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);
  return <motion.div ref={ref} style={{ x, y }} className={className}>{children}</motion.div>;
};
