"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function KGGParallaxScene() {
  const { scrollYProgress } = useScroll();
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const rotateReverse = useTransform(scrollYProgress, [0, 1], [360, 0]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: ySlow }}
        className="absolute left-[8%] top-28 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <motion.div
        style={{ y: yFast }}
        className="absolute right-[8%] top-44 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl"
      />
      <motion.div
        style={{ rotate }}
        className="absolute left-1/2 top-[18%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-cyan-300/20"
      />
      <motion.div
        style={{ rotate: rotateReverse }}
        className="absolute left-1/2 top-[22%] h-[18rem] w-[18rem] -translate-x-1/2 rounded-full border border-violet-300/20"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
    </div>
  );
}
