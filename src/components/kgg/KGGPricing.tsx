"use client";

import Reveal from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const sidePlans = [
  {
    title: "Quick Session",
    price: "₹299",
    unit: "/ hour",
    description: "Perfect for walk-ins and quick matches.",
    features: ["Any 1 console zone", "High-speed setup", "On-site support"],
  },
  {
    title: "VR Signature",
    price: "₹699",
    unit: "/ 90 min",
    description: "Premium Meta Quest immersion package.",
    features: ["Curated VR game library", "Beginner guidance", "Photo-worthy moments"],
  },
];

const featured = {
  title: "Squad Night",
  price: "₹999",
  unit: "/ 3 hours",
  description: "Best value for friends and teams — the pass most groups actually book.",
  features: ["Up to 4 players", "Console + board game access", "Priority slot booking", "Free top-up snacks"],
};

export default function KGGPricing() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);

  return (
    <section ref={containerRef} id="pricing" className="mx-auto w-full max-w-7xl px-5 py-24 md:px-8 perspective-1000">
      <Reveal>
        <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ember-deep">
          Session Passes
        </span>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Plainly priced, worth it.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">Flexible plans for solo players, squad battles, and unforgettable VR adventures.</p>
      </Reveal>

      <div className="scanline mt-12" />

      {/* Asymmetric layout: Squad Night is the pass most people book, so it
          gets a dominant, elevated center card instead of three equal boxes. */}
      <motion.div
        style={{ scale }}
        className="mt-12 grid items-center gap-6 lg:grid-cols-[0.82fr_1.05fr_0.82fr] transform-style-3d"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="hud-frame group relative flex flex-col justify-between rounded-xl border border-ink/8 bg-surface p-7 transform-style-3d lg:order-1"
        >
          <div className="hud-c2" />
          <div>
            <h3 className="font-display text-sm font-medium uppercase tracking-[0.06em] text-muted">{sidePlans[0].title}</h3>
            <p className="mt-4 flex items-baseline gap-2">
              <span className="tabular font-mono text-3xl font-bold text-ink">{sidePlans[0].price}</span>
              <span className="font-mono text-xs text-muted-2">{sidePlans[0].unit}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{sidePlans[0].description}</p>
            <ul className="mt-6 space-y-2.5">
              {sidePlans[0].features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember-deep" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          whileHover={{ y: -8 }}
          className="hud-frame group relative flex flex-col justify-between rounded-2xl border border-ember/30 bg-surface-2 p-9 shadow-[0_24px_48px_-24px_rgba(143,84,35,0.25)] transform-style-3d lg:order-2 lg:-my-6 lg:scale-[1.04]"
        >
          <div className="hud-c2" />
          <div className="absolute -top-3 right-8 rounded-full bg-ember px-3 py-1 font-mono text-xs font-semibold text-white">
            Most Booked
          </div>
          <div>
            <h3 className="font-display text-base font-medium uppercase tracking-[0.06em] text-ink">{featured.title}</h3>
            <p className="mt-5 flex items-baseline gap-2">
              <span className="tabular font-mono text-5xl font-bold text-ink">{featured.price}</span>
              <span className="font-mono text-sm text-muted-2">{featured.unit}</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{featured.description}</p>
            <ul className="mt-8 space-y-3">
              {featured.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="hud-frame group relative flex flex-col justify-between rounded-xl border border-ink/8 bg-surface p-7 transform-style-3d lg:order-3"
        >
          <div className="hud-c2" />
          <div>
            <h3 className="font-display text-sm font-medium uppercase tracking-[0.06em] text-muted">{sidePlans[1].title}</h3>
            <p className="mt-4 flex items-baseline gap-2">
              <span className="tabular font-mono text-3xl font-bold text-ink">{sidePlans[1].price}</span>
              <span className="font-mono text-xs text-muted-2">{sidePlans[1].unit}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{sidePlans[1].description}</p>
            <ul className="mt-6 space-y-2.5">
              {sidePlans[1].features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember-deep" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
