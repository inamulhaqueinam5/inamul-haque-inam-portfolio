import type { Metadata } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inamul Haque Inam | AI-Native Software Engineer & Business Strategist",
  description:
    "Portfolio of Inamul Haque Inam: AI-Native CSE Graduate bridging Explainable AI research, production full-stack engineering and international business operations.",
  keywords: [
    "Inamul Haque Inam",
    "Software Engineer",
    "Explainable AI",
    "Machine Learning",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Business Strategist",
    "Dhaka Bangladesh",
  ],
  authors: [{ name: "Inamul Haque Inam" }],
  openGraph: {
    title: "Inamul Haque Inam | AI-Native Software Engineer & Business Strategist",
    description:
      "Bridging peer-reviewed Explainable AI research, production full-stack systems and KPI-driven international business operations.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-ink-primary font-sans antialiased selection:bg-brand-emerald/30 selection:text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}


