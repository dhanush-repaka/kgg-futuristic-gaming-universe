"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function KGGCTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-24 md:px-8 perspective-1000">
      <Reveal>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateX: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ z: 20, rotateX: 2 }}
          className="hud-frame relative overflow-hidden rounded-3xl border border-white/10 bg-surface p-12 text-center md:p-20 transform-style-3d"
        >
          <div className="hud-c2" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(255,90,31,0.14),transparent_60%),radial-gradient(55%_45%_at_85%_100%,rgba(61,169,252,0.12),transparent_60%)]" />
          <h2 className="relative font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">Ready to Play?</h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-lg text-muted">
            Enter the arena for focused gaming, deep connection, and high-end entertainment.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-5">
            <Link href="/booking" className="rounded-md bg-gradient-to-r from-ember to-ember-deep px-9 py-4 text-sm font-bold text-[#0b0704] shadow-[0_14px_30px_-12px_rgba(255,90,31,0.55)] transition hover:brightness-110 hover:scale-[1.02]">
              Book Now
            </Link>
            <Link href="#games" className="rounded-md border border-white/20 bg-transparent px-9 py-4 text-sm font-bold text-ink transition hover:bg-white/5">
              Explore Games
            </Link>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
