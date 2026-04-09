"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function KGGVRSpotlight() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section ref={containerRef} id="vr" className="mx-auto w-full max-w-7xl px-5 py-24 md:px-8 perspective-1000">
      <Reveal>
        <motion.div 
          style={{ rotateY }}
          className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-8 md:p-16 backdrop-blur-md transform-style-3d shadow-2xl"
        >
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center transform-style-3d">
            <motion.div
              initial={{ opacity: 0, z: -50 }}
              whileInView={{ opacity: 1, z: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">VR Signature Experience</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">Meta Quest Worlds.</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-400">
                Enter immersive arenas, action adventures, rhythm challenges, and simulation experiences crafted for presence and absolute adrenaline.
              </p>
              <Link
                href="/booking"
                className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-slate-200 hover:scale-[1.02]"
              >
                Book Session
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50, z: -20 }}
              whileInView={{ opacity: 1, x: 0, z: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl transform-style-3d"
            >
              <p className="text-sm font-medium text-white">Included in VR Pass</p>
              <ul className="mt-6 space-y-4 text-sm text-slate-400">
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-white/50" /> Guided onboarding</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-white/50" /> Multi-genre library</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-white/50" /> Premium hygiene setup</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-white/50" /> Family-friendly worlds</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
