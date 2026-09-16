"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export interface MetricCounterProps {
  value: string;
  label: string;
  className?: string;
}

export const MetricCounter: React.FC<MetricCounterProps> = ({
  value,
  label,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20px" });
  const shouldReduceMotion = useReducedMotion();

  // Parse numeric component and affixes (e.g. "> 94.54%" -> prefix: "> ", num: 94.54, suffix: "%")
  const match = value.match(/^([^0-9.]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  const prefix = match ? match[1] : "";
  const targetNum = match ? parseFloat(match[2]) : null;
  const suffix = match ? match[3] : "";
  const decimals = match && match[2].includes(".") ? match[2].split(".")[1].length : 0;

  const [currentNum, setCurrentNum] = useState<number>(shouldReduceMotion ? (targetNum ?? 0) : 0);
  const [hasCompleted, setHasCompleted] = useState<boolean>(shouldReduceMotion || targetNum === null);

  useEffect(() => {
    if (!isInView || shouldReduceMotion || targetNum === null) {
      if (targetNum !== null) setCurrentNum(targetNum);
      setHasCompleted(true);
      return;
    }

    const duration = 1200; // ms
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Natural cubic-bezier deceleration: 1 - Math.pow(1 - progress, 3)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * targetNum;

      setCurrentNum(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCurrentNum(targetNum);
        setHasCompleted(true);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, [isInView, shouldReduceMotion, targetNum]);

  const formattedNumber =
    targetNum !== null
      ? hasCompleted
        ? targetNum.toFixed(decimals)
        : currentNum.toFixed(decimals)
      : value;

  return (
    <div
      ref={containerRef}
      className={`p-2.5 rounded-lg bg-[#08090D] border border-surface-border text-center transition-all duration-300 hover:border-brand-emerald/40 hover:shadow-[0_0_12px_rgba(16,185,129,0.15)] group ${className}`}
    >
      <div
        className={`text-xs sm:text-sm font-bold font-mono tracking-tight transition-colors duration-300 ${
          "text-brand-emerald"
        }`}
      >
        <span>{prefix}</span>
        <span>{formattedNumber}</span>
        <span>{suffix}</span>
      </div>
      <div className="text-[10px] text-ink-tertiary mt-0.5 truncate group-hover:text-ink-secondary transition-colors">
        {label}
      </div>
    </div>
  );
};
