"use client";

import { Sparkles, Users, Armchair, ShieldCheck, Zap } from "lucide-react";
import Reveal from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { title: "Premium Setup", icon: Sparkles, copy: "Top-tier consoles, tuned displays, and low-latency gameplay environments." },
  { title: "VR Adventures", icon: Zap, copy: "Immersive Meta Quest sessions crafted for excitement and first-time comfort." },
  { title: "For Friends & Family", icon: Users, copy: "Socially designed zones for squads, families, and casual group fun." },
  { title: "Comfort-First Space", icon: Armchair, copy: "Relaxed seating, clean environment, and an atmosphere you can stay in for hours." },
  { title: "Trusted Experience", icon: ShieldCheck, copy: "A modern entertainment hub focused on safety, quality, and unforgettable sessions." },
];

export default function KGGHighlights() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section ref={containerRef} className="py-24 border-y border-white/5 perspective-1000">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Why KGG Works.</h2>
        </Reveal>
        
        <motion.div 
          style={{ rotateX }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 transform-style-3d"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, z: -50 }}
                whileInView={{ opacity: 1, z: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ z: 20, scale: 1.02 }}
                key={item.title} 
                className="group rounded-xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10 transform-style-3d"
              >
                <Icon className="h-6 w-6 text-white group-hover:text-slate-300" />
                <h3 className="mt-6 text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.copy}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
