"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { Logo } from "@/components/Logo";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-surface-border bg-[#08090D] py-12 text-xs text-ink-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <div>
              <span className="font-semibold text-ink-primary">
                {personalInfo.name}
              </span>
              <p className="text-[11px] text-ink-muted">
                AI-Native Software Engineer &bull; Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Copyright & Tagline */}
          <div className="text-center sm:text-right">
            <p className="text-ink-secondary">
              Designed for scientific rigor, systems excellence &amp; commercial velocity.
            </p>
            <p className="text-[11px] text-ink-muted mt-1">
              &copy; {new Date().getFullYear()} Inamul Haque Inam. All rights reserved.
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-surface border border-surface-border hover:border-brand-emerald/40 text-ink-secondary hover:text-ink-primary transition-colors flex items-center gap-1.5"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 text-brand-emerald" />
            <span className="font-mono text-xs">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

