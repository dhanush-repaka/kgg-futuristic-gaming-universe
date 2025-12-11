"use client";

import { ReactNode } from "react";

interface NeonGlowProps {
  children: ReactNode;
  className?: string;
  color?: "purple" | "pink" | "cyan" | "blue";
}

export default function NeonGlow({ children, className = "", color = "purple" }: NeonGlowProps) {
  const colorClasses = {
    purple: "shadow-[0_0_20px_rgba(168,85,247,0.8),0_0_40px_rgba(168,85,247,0.6),0_0_60px_rgba(168,85,247,0.4)]",
    pink: "shadow-[0_0_20px_rgba(236,72,153,0.8),0_0_40px_rgba(236,72,153,0.6),0_0_60px_rgba(236,72,153,0.4)]",
    cyan: "shadow-[0_0_20px_rgba(34,211,238,0.8),0_0_40px_rgba(34,211,238,0.6),0_0_60px_rgba(34,211,238,0.4)]",
    blue: "shadow-[0_0_20px_rgba(59,130,246,0.8),0_0_40px_rgba(59,130,246,0.6),0_0_60px_rgba(59,130,246,0.4)]",
  };

  return (
    <div className={`${className} transition-all duration-300 hover:${colorClasses[color]}`}>
      {children}
    </div>
  );
}

