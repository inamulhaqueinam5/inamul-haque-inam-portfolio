import React from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  imageUrl?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md", imageUrl }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const avatarSrc = imageUrl || personalInfo.avatar;

  return (
    <div
      className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-emerald to-brand-cyan p-[1.5px] shadow-glow-emerald group transition-all duration-300 hover:scale-105 ${sizeClasses[size]} ${className}`}
    >
      <div className="w-full h-full bg-[#0B0D14] rounded-[10px] flex items-center justify-center relative overflow-hidden">
        {avatarSrc ? (
          <Image
            src={avatarSrc}
            alt={personalInfo.name}
            width={48}
            height={48}
            className="w-full h-full object-cover rounded-[10px]"
            unoptimized
          />
        ) : (
          <>
            {/* Ambient interior gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/15 via-transparent to-brand-cyan/15 group-hover:from-brand-emerald/25 group-hover:to-brand-cyan/25 transition-all" />

            {/* Person / Professional Avatar Icon */}
            <div className="relative z-10 flex items-center justify-center">
              <User className={`${iconSizes[size]} text-brand-emerald group-hover:text-brand-emerald-light transition-colors duration-200 stroke-[2.2]`} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
