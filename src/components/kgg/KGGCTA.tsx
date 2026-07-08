"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function KGGCTA() {
  return (
    <section className="relative w-full overflow-hidden border-t border-ink/8 py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_10%_20%,rgba(201,124,61,0.07),transparent_60%)]" />
      <div className="scanline absolute inset-x-0 top-0" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-ember-deep">
            Last Call
          </span>
          <h2 className="mt-5 max-w-2xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink md:text-7xl">
            Ready to <em className="font-normal italic text-ember-deep">play?</em>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Enter the arena for focused gaming, deep connection, and high-end entertainment. Walk in or reserve ahead.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <Link href="/booking" className="rounded-md bg-ember px-9 py-4 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(143,84,35,0.5)] transition hover:bg-ember-deep hover:scale-[1.02]">
              Book Now
            </Link>
            <Link href="#games" className="rounded-md border border-ink/15 bg-transparent px-9 py-4 text-sm font-semibold text-ink transition hover:bg-surface-2">
              Explore Games
            </Link>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hud-frame relative rounded-xl border border-ink/8 bg-surface p-8"
        >
          <div className="hud-c2" />
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-2">Walk in today</p>
          <p className="mt-4 font-display text-2xl font-medium text-ink">10 AM &ndash; 11 PM</p>
          <p className="mt-1 text-sm text-muted">Daily, Tirupati</p>
          <div className="mt-6 border-t border-ink/8 pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-2">Call ahead</p>
            <a href="tel:+917702528817" className="mt-2 block font-mono text-lg font-semibold text-ink transition hover:text-ember-deep">
              +91 77025 28817
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
