"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Menu,
  X,
  Mail,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { Logo } from "@/components/Logo";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { name: string; href: string; badge?: string }[] = [
    { name: "Skills", href: "#skills" },
    { name: "Research", href: "#research" },
    { name: "Projects", href: "#projects" },
    { name: "Operations & Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090D]/85 backdrop-blur-md border-b border-surface-border py-3.5 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <Logo size="md" />
            <span className="font-semibold tracking-tight text-ink-primary group-hover:text-brand-emerald transition-colors text-sm sm:text-base">
              {personalInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-1.5 text-xs lg:text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors rounded-lg hover:bg-white/[0.04] flex items-center gap-1.5"
              >
                {link.name}
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider bg-brand-emerald/15 text-brand-emerald-light border border-brand-emerald/30 rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalInfo.socials.email}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-ink-secondary hover:text-ink-primary border border-surface-border hover:border-brand-emerald/40 bg-surface/60 rounded-lg transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Contact</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#08090D] bg-gradient-to-r from-brand-emerald to-brand-emerald-light hover:brightness-110 rounded-lg shadow-glow-emerald transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink-secondary hover:text-ink-primary hover:bg-white/[0.05] rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-surface-border bg-[#08090D]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-ink-secondary hover:text-ink-primary hover:bg-white/[0.05] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-brand-emerald/15 text-brand-emerald-light border border-brand-emerald/30 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-surface-border flex flex-col gap-2">
              <a
                href={personalInfo.socials.email}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-ink-primary border border-surface-border bg-surface rounded-lg"
              >
                <Mail className="w-4 h-4 text-brand-emerald" />
                Contact Inam
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-[#08090D] bg-brand-emerald rounded-lg"
              >
                <FileText className="w-4 h-4" />
                Get in Touch & Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


