import React from "react";
import { ExternalLink } from "lucide-react";

export type EvidenceActionVariant =
  | "doi"
  | "sciencedirect"
  | "verify"
  | "demo"
  | "repo";

export interface EvidenceActionProps {
  href: string;
  variant: EvidenceActionVariant;
  contextTitle?: string;
  label?: string;
  className?: string;
}

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface VariantConfig {
  defaultLabel: string;
  actionPrefix: string;
  styleClass: string;
  icon: (iconClass: string) => React.ReactNode;
}

const VARIANT_CONFIGS: Record<EvidenceActionVariant, VariantConfig> = {
  doi: {
    defaultLabel: "View DOI",
    actionPrefix: "Open DOI for",
    styleClass:
      "text-brand-emerald-light bg-brand-emerald/10 hover:bg-brand-emerald/20 border-brand-emerald/30 hover:border-brand-emerald/50 shadow-sm hover:shadow-[0_0_12px_rgba(16,185,129,0.25)]",
    icon: (iconClass) => <ExternalLink className={`${iconClass} text-brand-emerald`} />,
  },
  sciencedirect: {
    defaultLabel: "ScienceDirect",
    actionPrefix: "Open ScienceDirect article for",
    styleClass:
      "text-brand-cyan bg-brand-cyan/10 hover:bg-brand-cyan/20 border-brand-cyan/30 hover:border-brand-cyan/50 shadow-sm hover:shadow-[0_0_12px_rgba(6,182,212,0.25)]",
    icon: (iconClass) => <ExternalLink className={`${iconClass} text-brand-cyan`} />,
  },
  verify: {
    defaultLabel: "Verify",
    actionPrefix: "Verify credential for",
    styleClass: "text-brand-emerald hover:text-brand-emerald-light",
    icon: (iconClass) => <ExternalLink className={`${iconClass} text-brand-emerald`} />,
  },
  demo: {
    defaultLabel: "Live Demo",
    actionPrefix: "Launch live demo for",
    styleClass:
      "text-[#08090D] bg-brand-cyan hover:bg-brand-cyan-light shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] font-semibold",
    icon: (iconClass) => <ExternalLink className={`${iconClass} text-[#08090D]`} />,
  },
  repo: {
    defaultLabel: "GitHub Repository",
    actionPrefix: "Explore GitHub repository for",
    styleClass:
      "text-ink-primary bg-surface-subtle hover:bg-surface-elevated border-surface-border hover:border-brand-cyan/50 hover:text-brand-cyan shadow-card hover:scale-[1.02] active:scale-[0.98]",
    icon: (iconClass) => (
      <GithubIcon className={`${iconClass} text-ink-secondary group-hover:text-brand-cyan transition-colors`} />
    ),
  },
};

export const EvidenceAction: React.FC<EvidenceActionProps> = ({
  href,
  variant,
  contextTitle,
  label,
  className = "",
}) => {
  const config = VARIANT_CONFIGS[variant];
  const displayLabel = label || config.defaultLabel;
  const titleText = contextTitle ? `${config.actionPrefix} ${contextTitle}` : displayLabel;
  const ariaLabel = contextTitle ? `${config.actionPrefix} ${contextTitle} in new tab` : `${displayLabel} in new tab`;

  // Verify variant is compact inline text link, others are rounded button/pills
  const baseClass =
    variant === "verify"
      ? "inline-flex items-center gap-1 text-xs font-mono transition-colors group"
      : variant === "demo" || variant === "repo"
      ? "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono border transition-all duration-200 group"
      : "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 group";

  const iconClass =
    variant === "verify"
      ? "w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
      : "w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={titleText}
      aria-label={ariaLabel}
      className={`${baseClass} ${config.styleClass} ${className}`}
    >
      <span>{displayLabel}</span>
      {config.icon(iconClass)}
    </a>
  );
};
