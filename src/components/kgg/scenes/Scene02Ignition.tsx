"use client";

import { motion } from "framer-motion";
import ScrollVideoSection from "../ScrollVideoSection";

const stats = [
  { value: "5", label: "Platforms on deck" },
  { value: "₹299", label: "Entry session / hr" },
  { value: "90 min", label: "VR signature pass" },
];

export default function Scene02Ignition() {
  return (
    <ScrollVideoSection
      src="/videos/scene-02-ignition.mp4"
      poster="/videos/scene-02-ignition-poster.jpg"
      trackVh={130}
      overlay="darker"
    >
      <div className="mx-auto w-full max-w-4xl px-5 text-center md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-ink sm:text-4xl"
        >
          Step inside.
        </motion.h2>

        <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-6 font-mono-label">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="tabular text-3xl font-extrabold text-ink sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollVideoSection>
  );
}
