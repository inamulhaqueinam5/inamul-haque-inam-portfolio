"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy } from "lucide-react";

export interface CopyButtonProps {
  value: string;
  label: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  value,
  label,
  className = "relative p-2 rounded-lg bg-surface-subtle hover:bg-surface border border-surface-border hover:border-brand-emerald/40 text-ink-secondary hover:text-brand-emerald transition-all active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-1 focus-visible:ring-offset-[#08090D] flex items-center justify-center cursor-pointer",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={className}
      title={label}
      aria-label={`${label} to clipboard`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={{ scale: 0.6, rotate: -45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.6, rotate: 45, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center text-brand-emerald"
          >
            <Check className="w-4 h-4" />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center"
          >
            <Copy className="w-4 h-4" />
          </motion.span>
        )}
      </AnimatePresence>

      {/* Floating Copied confirmation pill */}
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: -24, scale: 1 }}
            exit={{ opacity: 0, y: -28, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-brand-emerald text-[#08090D] shadow-glow-emerald pointer-events-none whitespace-nowrap z-30"
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

