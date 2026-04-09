"use client";

import Reveal from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  "Console Arena",
  "VR Battle Pod",
  "Squad Lounge",
  "Board Game Deck",
  "Streaming Corner",
  "Tournament Stage",
];

export default function KGGGallery() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <section ref={containerRef} id="gallery" className="py-24 perspective-1000">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Our Spaces.</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">A look inside the minimalist sanctuary built for focused gaming and connection.</p>
        </Reveal>

        <motion.div 
          style={{ rotateX }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transform-style-3d"
        >
          {items.map((label, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, z: -50 }}
              whileInView={{ opacity: 1, z: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, z: 50 }}
              className="group relative min-h-64 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transform-style-3d cursor-default flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />
              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Gallery Slot</p>
                <h3 className="mt-2 text-xl font-medium text-white">{label}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
