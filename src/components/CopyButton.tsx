"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

export interface CopyButtonProps {
  value: string;
  label: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  value,
  label,
  className = "p-2 rounded-lg bg-surface-subtle hover:bg-surface border border-surface-border text-ink-secondary hover:text-brand-emerald transition-colors",
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
      {copied ? (
        <Check className="w-4 h-4 text-brand-emerald" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
};
