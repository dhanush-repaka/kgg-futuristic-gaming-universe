"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function KGGScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500"
      style={{ scaleX }}
    />
  );
}
