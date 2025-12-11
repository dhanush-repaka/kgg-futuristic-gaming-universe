"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FuturisticHeaderProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export default function FuturisticHeader({ children, subtitle, className = "" }: FuturisticHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`text-center mb-16 flex flex-col items-center ${className}`}
    >
      {/* Animated Badge */}
      {subtitle && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-holo holo-border mb-6"
        >
        <motion.div
          className="w-2 h-2 rounded-full bg-purple-400"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
            {subtitle}
          </span>
          <motion.div
            className="w-2 h-2 rounded-full bg-pink-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
            }}
          />
        </motion.div>
      )}

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="text-5xl md:text-6xl mb-8 holo-text relative block leading-tight w-full"
        style={{
          fontWeight: 600,
          letterSpacing: "-0.01em",
        }}
      >
        {children}
        {/* Subtle Glowing Underline */}
        <motion.div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
          }}
        />
      </motion.h2>
    </motion.div>
  );
}

