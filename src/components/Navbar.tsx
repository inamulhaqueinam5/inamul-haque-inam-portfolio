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
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["skills", "research", "projects", "experience", "education", "certifications"];
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-20% 0px -55% 0px",
      threshold: 0.1,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks: { name: string; href: string; badge?: string }[] = [
    { name: "Skills", href: "#skills" },
    { name: "Research", href: "#research" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
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
          <Link
            href="/"
            className="group flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] rounded-xl"
          >
            <Logo size="md" />
            <span className="font-semibold tracking-tight text-ink-primary group-hover:text-brand-emerald transition-colors text-sm sm:text-base">
              {personalInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation Links with Active Scroll-Spy */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const targetId = link.href.slice(1);
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors rounded-lg flex items-center gap-1.5 outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] ${
                    isActive
                      ? "text-brand-emerald font-semibold"
                      : "text-ink-secondary hover:text-ink-primary hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {link.badge && (
                    <span className="relative z-10 px-1.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider bg-brand-emerald/15 text-brand-emerald-light border border-brand-emerald/30 rounded-full">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-brand-emerald rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalInfo.socials.email}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-ink-secondary hover:text-ink-primary border border-surface-border hover:border-brand-emerald/40 bg-surface/60 hover:bg-surface rounded-lg transition-all active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
            >
              <Mail className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Contact</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#08090D] bg-gradient-to-r from-brand-emerald to-brand-emerald-light hover:brightness-110 rounded-lg shadow-glow-emerald transition-all active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
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
              className="p-2 text-ink-secondary hover:text-ink-primary hover:bg-white/[0.05] rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Staggered Fade */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-surface-border bg-[#08090D]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, idx) => {
                const targetId = link.href.slice(1);
                const isActive = activeSection === targetId;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-brand-emerald bg-brand-emerald/10 font-semibold"
                        : "text-ink-secondary hover:text-ink-primary hover:bg-white/[0.05]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-brand-emerald/15 text-brand-emerald-light border border-brand-emerald/30 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </motion.a>
                );
              })}
            </div>
            <div className="pt-3 border-t border-surface-border flex flex-col gap-2">
              <a
                href={personalInfo.socials.email}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-ink-primary border border-surface-border bg-surface rounded-lg active:scale-98 transition-all"
              >
                <Mail className="w-4 h-4 text-brand-emerald" />
                Contact Inam
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-[#08090D] bg-brand-emerald rounded-lg active:scale-98 transition-all shadow-glow-emerald"
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


