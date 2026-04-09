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
    <div className="pointer-events-none fixed inset-0 -z-10 bg-black overflow-hidden perspective-1000 flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)] z-0" />
      
      {/* 3D Grid floor */}
      <motion.div 
        style={{ rotateX, y: yOffset }}
        className="absolute w-[200vw] h-[200vh] border-t border-white/5 origin-center transform-style-3d z-10 opacity-40"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </motion.div>

      {/* Subtle floating 3D objects made with framer motion */}
      <motion.div
        animate={{ rotateY: 360, rotateX: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute right-[20%] top-[30%] w-64 h-64 border border-white/10 rounded-full transform-style-3d opacity-20"
      >
        <div className="absolute inset-0 border border-white/10 rounded-full" style={{ transform: "rotateX(60deg)" }} />
        <div className="absolute inset-0 border border-white/10 rounded-full" style={{ transform: "rotateY(60deg)" }} />
      </motion.div>
    </div>
  );
}
