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

  const rotateY = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <section ref={containerRef} id="vr" className="mx-auto w-full max-w-7xl px-5 py-24 md:px-8 perspective-1000">
      <Reveal>
        <motion.div
          style={{ rotateY }}
          className="hud-frame relative overflow-hidden rounded-2xl border border-ink/8 bg-surface p-8 md:p-16 transform-style-3d"
        >
          <div className="hud-c2" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_0%,rgba(201,124,61,0.06),transparent_60%)]" />
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center transform-style-3d">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-mono text-xs font-semibold tracking-[0.14em] text-ember-deep uppercase">VR Signature Experience</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">Meta Quest Worlds.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Enter immersive arenas, action adventures, rhythm challenges, and simulation experiences crafted for presence and calm confidence.
              </p>
              <Link
                href="/booking"
                className="mt-10 inline-flex rounded-md bg-ember px-8 py-4 text-sm font-semibold text-white transition hover:bg-ember-deep hover:scale-[1.02]"
              >
                Book Session
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-xl border border-ink/8 bg-surface-2 p-8 transform-style-3d"
            >
              <p className="font-mono text-sm font-medium text-ink">Included in VR Pass</p>
              <ul className="mt-6 space-y-4 text-sm text-muted">
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-ember-deep" /> Guided onboarding</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-ember-deep" /> Multi-genre library</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-ember-deep" /> Premium hygiene setup</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-ember-deep" /> Family-friendly worlds</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
