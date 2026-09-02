"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  className = "p-2.5 rounded-xl bg-surface border border-surface-border hover:border-brand-emerald/40 text-ink-secondary hover:text-ink-primary transition-all flex items-center gap-2 active:scale-95 group outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] cursor-pointer",
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={scrollToTop}
      className={className}
      aria-label="Scroll back to top of page"
    >
      <ArrowUp className="w-4 h-4 text-brand-emerald transition-transform group-hover:-translate-y-0.5" />
      <span className="font-mono text-xs font-medium">Back to Top</span>
    </motion.button>
  );
};

