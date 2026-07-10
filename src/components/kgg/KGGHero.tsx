"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function KGGHero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-base pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_15%_0%,rgba(201,124,61,0.08),transparent_60%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-ink/10 bg-surface px-5 py-2 font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            Tirupati &middot; Andhra Pradesh
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl font-display text-6xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-7xl lg:text-[5.5rem]"
          >
            Enter <em className="font-normal italic text-ember-deep">the Arena.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            A premium gaming lounge for PS5, Xbox, Switch, and Meta Quest VR &mdash; built for walk-ins, squads, and family sessions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-11 flex flex-wrap gap-5"
          >
            <Link
              href="/booking"
              className="rounded-md bg-ember px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(143,84,35,0.5)] transition hover:bg-ember-deep hover:scale-[1.02]"
            >
              Reserve Session
            </Link>
            <Link
              href="#games"
              className="rounded-md border border-ink/15 bg-surface px-8 py-4 text-sm font-semibold text-ink transition hover:border-ember/40 hover:bg-surface-2"
            >
              Explore Games
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-16 flex flex-wrap gap-10 border-t border-ink/10 pt-8"
          >
            <div>
              <b className="tabular block font-mono text-2xl font-bold text-ink">5</b>
              <span className="text-xs tracking-wide text-muted-2">PLATFORMS ON DECK</span>
            </div>
            <div>
              <b className="tabular block font-mono text-2xl font-bold text-ink">&#8377;299</b>
              <span className="text-xs tracking-wide text-muted-2">ENTRY SESSION / HR</span>
            </div>
            <div>
              <b className="tabular block font-mono text-2xl font-bold text-ink">90min</b>
              <span className="text-xs tracking-wide text-muted-2">VR SIGNATURE PASS</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hud-frame relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10"
        >
          <div className="hud-c2" />
          <Image src="/mood/hero-controller.png" alt="" fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" priority />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-white/70">The energy inside</p>
            <p className="mt-2 font-display text-2xl font-medium text-white">Console Arena awaits.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
