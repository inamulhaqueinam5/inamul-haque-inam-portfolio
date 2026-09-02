import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#08090D",
        surface: {
          DEFAULT: "#0F1117",
          subtle: "#141721",
          elevated: "#1B1F2D",
          border: "rgba(255, 255, 255, 0.08)",
          "border-hover": "rgba(255, 255, 255, 0.16)",
        },
        brand: {
          emerald: "#10B981",
          "emerald-light": "#34D399",
          cyan: "#06B6D4",
          "cyan-light": "#38BDF8",
          purple: "#8B5CF6",
          amber: "#F59E0B",
        },
        ink: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
          tertiary: "#64748B",
          muted: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        "glow-emerald": "0 0 25px -5px rgba(16, 185, 129, 0.15)",
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.15)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.06)",
        "card-hover": "0 10px 30px -5px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(16, 185, 129, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;

