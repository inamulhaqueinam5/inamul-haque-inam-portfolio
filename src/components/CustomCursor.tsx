"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type CursorVariant = "default" | "pointer" | "text";

export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");
  const [isMouseDown, setIsMouseDown] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Tuned spring physics for precision dot and trailing aura ring
  const dotSpringConfig = shouldReduceMotion
    ? { stiffness: 2000, damping: 100, mass: 0.1 }
    : { stiffness: 1400, damping: 60, mass: 0.15 };

  const ringSpringConfig = shouldReduceMotion
    ? { stiffness: 2000, damping: 100, mass: 0.1 }
    : { stiffness: 380, damping: 28, mass: 0.45 };

  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktop mouse/trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor="pointer"], .cursor-pointer, label'
      );
      if (interactive) {
        setCursorVariant("pointer");
        return;
      }

      const textElement = target.closest("p, h1, h2, h3, h4, h5, h6, pre, code, blockquote");
      if (textElement) {
        setCursorVariant("text");
        return;
      }

      setCursorVariant("default");
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isEnabled) return null;

  // Ring styling and dimensions based on current variant and pressed state
  const getRingVariants = () => {
    let scale = 1;
    let borderColor = "rgba(16, 185, 129, 0.45)"; // brand-emerald
    let backgroundColor = "rgba(16, 185, 129, 0.04)";
    let boxShadow = "0 0 16px rgba(16, 185, 129, 0.15)";
    let width = 36;
    let height = 36;

    if (cursorVariant === "pointer") {
      scale = isMouseDown ? 1.3 : 1.6;
      borderColor = "rgba(6, 182, 212, 0.75)"; // brand-cyan
      backgroundColor = "rgba(6, 182, 212, 0.12)";
      boxShadow = "0 0 24px rgba(6, 182, 212, 0.35), inset 0 0 12px rgba(6, 182, 212, 0.15)";
    } else if (cursorVariant === "text") {
      scale = isMouseDown ? 0.7 : 0.85;
      borderColor = "rgba(148, 163, 184, 0.5)"; // slate-400
      backgroundColor = "rgba(148, 163, 184, 0.05)";
      boxShadow = "0 0 10px rgba(148, 163, 184, 0.15)";
      width = 24;
      height = 32;
    } else if (isMouseDown) {
      scale = 0.82;
      borderColor = "rgba(52, 211, 153, 0.7)";
      backgroundColor = "rgba(16, 185, 129, 0.16)";
    }

    return {
      scale,
      borderColor,
      backgroundColor,
      boxShadow,
      width,
      height,
    };
  };

  const ringStyle = getRingVariants();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Precision Core Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isMouseDown ? 0.7 : cursorVariant === "pointer" ? 0.5 : 1,
          backgroundColor: cursorVariant === "pointer" ? "#06B6D4" : "#10B981",
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale: { type: "spring", stiffness: 500, damping: 25 },
          backgroundColor: { duration: 0.2 },
        }}
      >
        <div
          className="w-2 h-2 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.9)]"
          style={{
            backgroundColor: "inherit",
          }}
        />
      </motion.div>

      {/* Trailing Fluid Aura Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 rounded-full border will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: ringStyle.scale,
          borderColor: ringStyle.borderColor,
          backgroundColor: ringStyle.backgroundColor,
          boxShadow: ringStyle.boxShadow,
          width: ringStyle.width,
          height: ringStyle.height,
        }}
        transition={{
          opacity: { duration: 0.18 },
          scale: { type: "spring", stiffness: 400, damping: 25 },
          borderColor: { duration: 0.2 },
          backgroundColor: { duration: 0.2 },
          boxShadow: { duration: 0.2 },
          width: { type: "spring", stiffness: 450, damping: 28 },
          height: { type: "spring", stiffness: 450, damping: 28 },
        }}
      />
    </div>
  );
};
