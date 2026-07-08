"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Minimalist3DCanvas() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform scroll into 3D rotations for the background grid
  const rotateX = useTransform(scrollY, [0, 2000], [45, 10]);
  const yOffset = useTransform(scrollY, [0, 2000], [0, -500]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-base overflow-hidden perspective-1000 flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_15%_0%,rgba(255,90,31,0.10),transparent_60%),radial-gradient(45%_40%_at_90%_15%,rgba(61,169,252,0.08),transparent_60%),radial-gradient(ellipse_at_center,rgba(18,22,31,1)_0%,rgba(10,14,20,1)_100%)] z-0" />

      {/* 3D Grid floor */}
      <motion.div
        style={{ rotateX, y: yOffset }}
        className="absolute w-[200vw] h-[200vh] border-t border-ember/10 origin-center transform-style-3d z-10 opacity-30"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(240,243,250,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(240,243,250,0.04)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </motion.div>

      {/* Subtle floating HUD ring */}
      <motion.div
        animate={{ rotateY: 360, rotateX: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute right-[20%] top-[30%] w-64 h-64 border border-electric/10 rounded-full transform-style-3d opacity-25"
      >
        <div className="absolute inset-0 border border-ember/10 rounded-full" style={{ transform: "rotateX(60deg)" }} />
        <div className="absolute inset-0 border border-electric/10 rounded-full" style={{ transform: "rotateY(60deg)" }} />
      </motion.div>
    </div>
  );
}
