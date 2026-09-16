"use client";

import React, { useRef } from "react";

export interface MetricCounterProps {
  value: string;
  label: string;
  className?: string;
}

export const MetricCounter: React.FC<MetricCounterProps> = ({ value, label, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return <div ref={containerRef} className={className}>{value} {label}</div>;
};
