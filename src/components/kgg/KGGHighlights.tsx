"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

const highlights = [
  {
    n: "01",
    title: "Premium Setup",
    copy: "Top-tier consoles, tuned displays, and low-latency gameplay environments — every rig checked and re-tuned monthly, not left to drift.",
  },
  {
    n: "02",
    title: "VR Adventures",
    copy: "Immersive Meta Quest sessions crafted for excitement and first-time comfort.",
  },
  {
    n: "03",
    title: "For Friends & Family",
    copy: "Socially designed zones for squads, families, and casual group fun.",
  },
  {
    n: "04",
    title: "Comfort-First Space",
    copy: "Relaxed seating, clean environment, and an atmosphere you can stay in for hours.",
  },
  {
    n: "05",
    title: "Trusted Experience",
    copy: "A modern entertainment hub focused on safety, quality, and unforgettable sessions.",
  },
];

export default function KGGHighlights() {
  return (
    <section className="w-full border-y border-ink/8 bg-white py-28 md:py-36">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ember-deep">
            Why It Works
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Five reasons regulars come back.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-ink/8">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.n}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delayChildren: idx * 0.12, staggerChildren: 0.08 }}
              className="relative grid gap-3 py-10 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <motion.div
                variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                style={{ transformOrigin: "left" }}
                className="absolute bottom-0 left-0 h-px w-full bg-ink/8"
              />
              <motion.span
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }}
                className="font-mono text-sm text-muted-2 md:col-span-1"
              >
                {item.n}
              </motion.span>
              <motion.h3
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }}
                className={`font-display text-2xl font-medium text-ink md:col-span-4 md:text-3xl ${
                  idx % 2 === 1 ? "md:col-start-3" : "md:col-start-2"
                }`}
              >
                {item.title}
              </motion.h3>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }}
                className={`max-w-lg text-base leading-relaxed text-muted md:col-span-6 ${
                  idx % 2 === 1 ? "md:col-start-7" : "md:col-start-6"
                }`}
              >
                {item.copy}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
