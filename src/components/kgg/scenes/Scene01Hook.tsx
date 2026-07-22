"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollVideoSection from "../ScrollVideoSection";

export default function Scene01Hook() {
  return (
    <div id="top">
      <ScrollVideoSection
        src="/videos/scene-01-hook.mp4"
        poster="/videos/scene-01-hook-poster.jpg"
        trackVh={180}
        overlay="dark"
      >
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono-label text-xs font-medium uppercase tracking-[0.16em] text-ink-muted"
          >
            Tirupati, Andhra Pradesh
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 max-w-2xl text-5xl font-extrabold leading-[1.02] text-ink sm:text-6xl lg:text-7xl"
          >
            Don&rsquo;t be bored, get on-board.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted"
          >
            Karthikeya&rsquo;s Games Galaxy — a walk-in gaming lounge for PS5, Xbox, Switch, racing rigs, and VR.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              href="/booking"
              className="rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
            >
              Reserve a session
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0.4] }}
            transition={{ duration: 2.4, delay: 0.9, times: [0, 0.3, 0.8, 1], repeat: Infinity, repeatDelay: 1.2 }}
            className="mt-16 font-mono-label text-xs uppercase tracking-[0.18em] text-ink-muted"
          >
            Scroll to begin ↓
          </motion.p>
        </div>
      </ScrollVideoSection>
    </div>
  );
}
