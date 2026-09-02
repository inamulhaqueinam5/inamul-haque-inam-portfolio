import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Sparkles,
  FileText,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { CopyButton } from "@/components/CopyButton";

export const ContactSection: React.FC = () => {

  return (
    <section id="contact" className="relative py-24 border-t border-surface-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-emerald/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-xs font-mono font-semibold text-brand-emerald-light mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPEN FOR OPPORTUNITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-primary mb-4">
            Let&apos;s Build Something Remarkable
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            Actively open for Software Engineering, AI/ML, Data Analytics, and Corporate Business Development / MTO roles. Feel free to connect directly.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-surface border border-surface-border hover:border-brand-emerald/40 transition-all flex flex-col justify-between shadow-card group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-emerald/15 text-brand-emerald flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-ink-tertiary uppercase tracking-wider mb-1">
                Direct Email
              </div>
              <div className="text-sm sm:text-base font-bold text-ink-primary break-all mb-4">
                {personalInfo.email}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socials.email}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-[#08090D] bg-brand-emerald hover:bg-brand-emerald-light transition-colors text-center"
              >
                Send Email
              </a>
              <CopyButton value={personalInfo.email} label="Copy email address" />
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-surface border border-surface-border hover:border-brand-cyan/40 transition-all flex flex-col justify-between shadow-card group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/15 text-brand-cyan flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-ink-tertiary uppercase tracking-wider mb-1">
                Phone / WhatsApp
              </div>
              <div className="text-sm sm:text-base font-bold text-ink-primary mb-4 font-mono">
                {personalInfo.phone}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-[#08090D] bg-brand-cyan hover:bg-brand-cyan-light transition-colors text-center"
              >
                Call Now
              </a>
              <CopyButton value={personalInfo.phone} label="Copy phone number" />
            </div>
          </div>

          {/* Location & Status Card */}
          <div className="p-6 rounded-2xl bg-surface border border-surface-border hover:border-brand-amber/40 transition-all flex flex-col justify-between shadow-card group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-amber/15 text-brand-amber flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-ink-tertiary uppercase tracking-wider mb-1">
                Primary Location
              </div>
              <div className="text-sm sm:text-base font-bold text-ink-primary mb-2">
                {personalInfo.location}
              </div>
              <p className="text-xs text-ink-tertiary leading-relaxed">
                Available for on-site, hybrid, and global remote roles.
              </p>
            </div>

            <div className="pt-4 border-t border-surface-border flex items-center gap-2 text-xs font-mono text-brand-emerald">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-ping" />
              <span>Full-Time Ready</span>
            </div>
          </div>
        </div>

        {/* Social Presence Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="text-xs font-mono text-ink-tertiary mr-1">Verified Channels:</span>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface border border-surface-border hover:border-brand-cyan/40 text-xs font-mono text-ink-secondary hover:text-ink-primary transition-all group"
            aria-label="Inamul Haque Inam on GitHub"
          >
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface border border-surface-border hover:border-brand-emerald/40 text-xs font-mono text-ink-secondary hover:text-ink-primary transition-all group"
            aria-label="Inamul Haque Inam on LinkedIn"
          >
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-emerald group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href={personalInfo.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface border border-surface-border hover:border-brand-amber/40 text-xs font-mono text-ink-secondary hover:text-ink-primary transition-all group"
            aria-label="Inamul Haque Inam on Facebook"
          >
            <span>Facebook Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-amber group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Action Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-surface to-surface-elevated border border-brand-emerald/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-glow-emerald">
          <div className="text-left">
            <h3 className="text-xl font-bold text-ink-primary mb-1">
              Looking for an in-depth professional overview?
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary">
              Comprehensive breakdown of production architectures, published research and enterprise experience.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:inamulhaqueinam5@gmail.com?subject=Resume%20Request%20-%20Inamul%20Haque%20Inam"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-[#08090D] bg-brand-emerald hover:bg-brand-emerald-light shadow-glow-emerald transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Get Comprehensive CV</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
