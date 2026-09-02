"use client";

import React, { useRef, useState, useCallback } from "react";

export interface CardSpotlightProps {
  children: React.ReactNode;
  className?: string;
  accent?: "emerald" | "cyan" | "amber" | "purple";
}

const ACCENT_GLOWS: Record<string, string> = {
  emerald: "rgba(16, 185, 129, 0.12)",
  cyan: "rgba(6, 182, 212, 0.12)",
  amber: "rgba(245, 158, 11, 0.12)",
  purple: "rgba(168, 85, 247, 0.12)",
};

export const CardSpotlight: React.FC<CardSpotlightProps> = ({
  children,
  className = "",
  accent = "emerald",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

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

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
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
    </div>
  );
};
