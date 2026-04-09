"use client";

import Reveal from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    title: "Quick Session",
    price: "₹299",
    unit: "/hour",
    description: "Perfect for walk-ins and quick matches.",
    features: ["Any 1 console zone", "High-speed setup", "On-site support"],
  },
  {
    title: "Squad Night",
    price: "₹999",
    unit: "/3 hours",
    description: "Best value for friends and teams.",
    features: ["Up to 4 players", "Console + board game access", "Priority slot booking"],
    featured: true,
  },
  {
    title: "VR Signature",
    price: "₹699",
    unit: "/90 min",
    description: "Premium Meta Quest immersion package.",
    features: ["Curated VR game library", "Beginner guidance", "Photo-worthy moments"],
  },
];

export default function KGGPricing() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={containerRef} id="pricing" className="mx-auto w-full max-w-7xl px-5 py-24 md:px-8 perspective-1000">
      <Reveal>
        <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Sessions & Pricing.</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">Flexible plans for solo players, squad battles, and unforgettable VR adventures.</p>
      </Reveal>

      <motion.div 
        style={{ scale }}
        className="mt-16 grid gap-6 lg:grid-cols-3 transform-style-3d"
      >
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
            whileHover={{ y: -10, z: 20, scale: 1.02 }}
            className={`group relative flex h-full flex-col justify-between rounded-xl border p-8 backdrop-blur-md transform-style-3d ${
              plan.featured
                ? "border-white/30 bg-white/10"
                : "border-white/10 bg-white/5"
            }`}
          >
            <div>
              <h3 className="text-xl font-medium text-white">{plan.title}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-white">{plan.price}</span>
                <span className="text-sm font-medium text-slate-400">{plan.unit}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{plan.description}</p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-white/50" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {plan.featured && (
              <div className="absolute -top-3 right-6 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                Popular
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
