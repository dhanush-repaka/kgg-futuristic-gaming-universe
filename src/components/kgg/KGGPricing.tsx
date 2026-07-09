"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Quick Session",
    price: "₹299",
    unit: "/ hour",
    description: "Perfect for walk-ins and quick matches.",
    features: ["Any 1 console zone", "High-speed setup", "On-site support"],
  },
  {
    title: "Squad Night",
    price: "₹999",
    unit: "/ 3 hours",
    description: "Best value for friends and teams — the pass most groups actually book.",
    features: ["Up to 4 players", "Console + board game access", "Priority slot booking", "Free top-up snacks"],
    featured: true,
    badge: "Most Booked",
  },
  {
    title: "VR Signature",
    price: "₹699",
    unit: "/ 90 min",
    description: "Premium Meta Quest immersion package.",
    features: ["Curated VR game library", "Beginner guidance", "Photo-worthy moments"],
  },
];

export default function KGGPricing() {
  return (
    <section id="pricing" className="mx-auto w-full max-w-7xl px-5 py-28 md:px-8 md:py-36">
      <Reveal>
        <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ember-deep">
          Session Passes
        </span>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Plainly priced, worth it.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Flexible plans for solo players, squad battles, and unforgettable VR adventures.
        </p>
      </Reveal>

      <div className="mt-14 overflow-hidden rounded-2xl border border-ink/10 bg-surface">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className={`grid gap-4 border-b border-ink/8 px-6 py-8 last:border-b-0 md:grid-cols-12 md:items-center md:px-10 ${
              plan.featured ? "bg-surface-2" : ""
            }`}
          >
            <div className="md:col-span-4">
              {plan.badge && (
                <span className="mb-2 inline-block rounded-full bg-ember px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-white">
                  {plan.badge}
                </span>
              )}
              <h3 className={`font-display font-medium text-ink ${plan.featured ? "text-2xl" : "text-xl"}`}>
                {plan.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{plan.description}</p>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember-deep" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="md:col-span-3 md:text-right">
              <motion.span
                initial={{ opacity: 0, scale: plan.featured ? 0.85 : 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 + 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                className={`tabular inline-block font-mono font-bold text-ink ${plan.featured ? "text-4xl" : "text-3xl"}`}
              >
                {plan.price}
              </motion.span>
              <span className="ml-1 font-mono text-xs text-muted-2">{plan.unit}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
