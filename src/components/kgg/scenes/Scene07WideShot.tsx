"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollVideoSection from "../ScrollVideoSection";

const reasons = ["Premium hardware", "Walk-in friendly", "For squads & family", "Open every day, 10 AM – 11 PM"];

const plans = [
  { name: "Quick Session", price: "₹299", unit: "/ hour", detail: "Any one console zone, walk-in friendly." },
  { name: "Squad Night", price: "₹999", unit: "/ 3 hours", detail: "Up to 4 players, console + board games.", featured: true },
  { name: "VR Signature", price: "₹699", unit: "/ 90 min", detail: "Guided Meta Quest immersion." },
];

export default function Scene07WideShot() {
  return (
    <div id="pricing">
      <ScrollVideoSection
        src="/videos/scene-07-wide-shot.mp4"
        poster="/videos/scene-07-wide-shot-poster.jpg"
        trackVh={220}
        overlay="darker"
      >
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-ink sm:text-5xl"
          >
            One room. Every session.
          </motion.h2>

          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
            {reasons.map((r, i) => (
              <motion.span
                key={r}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-sm text-ink-muted"
              >
                {r}
              </motion.span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className={`rounded-lg border p-6 backdrop-blur-md ${
                  p.featured ? "border-accent bg-accent/10" : "border-rule bg-bg-2/60"
                }`}
              >
                <p className="text-sm font-semibold text-ink">{p.name}</p>
                <p className="mt-3 tabular text-3xl font-extrabold text-ink">
                  {p.price} <span className="text-sm font-medium text-ink-muted">{p.unit}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-9"
          >
            <Link
              href="/booking"
              className="inline-block rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
            >
              Reserve a session
            </Link>
          </motion.div>
        </div>
      </ScrollVideoSection>
    </div>
  );
}
