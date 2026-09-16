"use client";

import React, { useRef } from "react";

export interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = "", strength = 0.28 }) => {
  const ref = useRef<HTMLDivElement>(null);
  return <div ref={ref} className={className}>{children}</div>;
};
