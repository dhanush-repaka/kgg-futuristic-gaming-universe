"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TonightSignal from "@/components/kgg/TonightSignal";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-bg text-ink">
      {/* Full-bleed daylight campaign loop */}
      <div className="absolute inset-0" aria-hidden>
        <video
          className="absolute inset-0 h-full w-full object-cover object-[center_40%] motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/hero-daylight-poster.jpg"
        >
          <source src="/videos/hero-daylight.mp4" type="video/mp4" />
        </video>
        {/* Fallback still when reduced motion */}
        <div
          className="absolute inset-0 hidden bg-cover bg-[center_40%] motion-reduce:block"
          style={{ backgroundImage: "url(/videos/hero-daylight-poster.jpg)" }}
        />
        {/* Soft daylight wash — brand stays readable, video stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-bg/25" />
        <div
          className="pointer-events-none absolute -right-16 top-1/3 h-[380px] w-[380px] rounded-full bg-accent/18 blur-3xl"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-28 md:px-8 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="font-mono-label text-[0.7rem] text-ink-muted"
        >
          Tirupati · Andhra Pradesh
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="mt-5 max-w-3xl font-display text-[clamp(2.5rem,7vw,4.75rem)] font-extrabold leading-[0.94] tracking-[-0.04em] text-ink"
        >
          Karthikeya&rsquo;s
          <br />
          Games <span className="text-accent">Galaxy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted"
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
            className="rounded-md border border-ink/20 bg-surface/70 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition-colors hover:border-ink/40"
          >
            See platforms
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-8"
        >
          <TonightSignal variant="hero" />
        </motion.div>
      </div>
    </section>
  );
}
