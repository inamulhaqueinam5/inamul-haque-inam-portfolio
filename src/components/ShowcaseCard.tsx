"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ShowcaseCardAccent = "emerald" | "cyan" | "amber" | "purple";
export type ShowcaseCardPadding = "default" | "compact" | "spacious";

export interface ShowcaseCardProps {
  index?: number;
  accent?: ShowcaseCardAccent;
  padding?: ShowcaseCardPadding;
  className?: string;
  children: React.ReactNode;
}

const ACCENT_GLOWS: Record<ShowcaseCardAccent, string> = {
  emerald: "rgba(16, 185, 129, 0.12)",
  cyan: "rgba(6, 182, 212, 0.12)",
  amber: "rgba(245, 158, 11, 0.12)",
  purple: "rgba(168, 85, 247, 0.12)",
};

const ACCENT_HOVER_BORDERS: Record<ShowcaseCardAccent, string> = {
  emerald: "hover:border-brand-emerald/40",
  cyan: "hover:border-brand-cyan/40",
  amber: "hover:border-brand-amber/40",
  purple: "hover:border-brand-purple/40",
};

const PADDING_CLASSES: Record<ShowcaseCardPadding, string> = {
  default: "p-6 sm:p-8",
  compact: "p-6",
  spacious: "p-6 sm:p-8 lg:p-10",
};

export const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  index = 0,
  accent = "emerald",
  padding = "default",
  className = "",
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const shouldReduceMotion = useReducedMotion();
  const delay = shouldReduceMotion ? 0 : index * 0.1;
  const initialY = shouldReduceMotion ? 0 : 20;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setOpacity(1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
  }, []);

  const glowColor = ACCENT_GLOWS[accent] || ACCENT_GLOWS.emerald;
  const hoverBorder = ACCENT_HOVER_BORDERS[accent] || ACCENT_HOVER_BORDERS.emerald;
  const paddingClass = PADDING_CLASSES[padding] || PADDING_CLASSES.default;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-surface border border-surface-border transition-all duration-300 shadow-card hover:shadow-card-hover flex flex-col justify-between h-full",
        hoverBorder,
        paddingClass,
        className
      )}
    >
      {/* Specular spotlight glow layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-[inherit]"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      {children}
    </motion.div>
  );
};
