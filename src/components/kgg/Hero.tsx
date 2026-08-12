"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/scene-01-hook-poster.jpg"
        aria-hidden
      >
        <source src="/videos/scene-01-hook.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/4 h-[420px] w-[420px] rounded-full bg-accent/30 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-28 md:px-8 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="font-mono-label text-[0.7rem] text-white/60"
        >
          Tirupati · Andhra Pradesh
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="mt-5 max-w-3xl font-display text-[clamp(2.5rem,7vw,4.75rem)] font-extrabold leading-[0.94] tracking-[-0.04em] text-white"
        >
          Karthikeya&rsquo;s
          <br />
          Games <span className="text-accent">Galaxy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="mt-6 max-w-md text-lg leading-relaxed text-white/75"
        >
          Don&rsquo;t be bored, get on-board. PS5, Xbox, Switch, racing, VR — walk in tonight.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/booking"
            className="rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
          >
            Reserve a session
          </Link>
          <a
            href="#platforms"
            className="rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60"
          >
            See platforms
          </a>
          <span className="ml-1 inline-flex items-center gap-2 rounded-full border border-voltage/40 bg-voltage/15 px-3 py-1.5 text-xs font-semibold text-voltage">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-voltage" />
            Open slots tonight
          </span>
        </motion.div>
      </div>
    </section>
  );
}
