"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  className = "p-2.5 rounded-xl bg-surface border border-surface-border hover:border-brand-emerald/40 text-ink-secondary hover:text-ink-primary transition-colors flex items-center gap-1.5",
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={className}
      aria-label="Scroll back to top"
    >
      <ArrowUp className="w-4 h-4 text-brand-emerald" />
      <span className="font-mono text-xs">Top</span>
    </button>
  );
};
