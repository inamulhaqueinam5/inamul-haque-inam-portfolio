"use client";

import React, { useRef, useState } from "react";

export interface MetricCounterProps {
  value: string;
  label: string;
  className?: string;
}

export const MetricCounter: React.FC<MetricCounterProps> = ({ value, label, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const match = value.match(/^([^0-9.]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  const prefix = match ? match[1] : "";
  const targetNum = match ? parseFloat(match[2]) : null;
  const suffix = match ? match[3] : "";
  const decimals = match && match[2].includes(".") ? match[2].split(".")[1].length : 0;
  const [currentNum, setCurrentNum] = useState<number>(0);
  return <div ref={containerRef} className={className}>{prefix}{currentNum}{suffix} {label}</div>;
};
