"use client";

import { motion } from "framer-motion";
import ScrollVideoSection from "../ScrollVideoSection";

const consoles = [
  { name: "PS5", detail: "GTA V · WWE 2K25" },
  { name: "Xbox Series X", detail: "Forza Horizon 5" },
];

export default function Scene03ConsoleReveal() {
  return (
    <div id="platforms">
      <ScrollVideoSection
        src="/videos/scene-03-console-reveal.mp4"
        poster="/videos/scene-03-console-reveal-poster.jpg"
        trackVh={170}
        overlay="dark"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-md text-4xl font-extrabold text-ink sm:text-5xl"
          >
            Your platform. Your rules.
          </motion.h2>

          <ul className="space-y-0 border-t border-rule">
            {consoles.map((c, i) => (
              <motion.li
                key={c.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex items-baseline justify-between gap-4 border-b border-rule py-5"
              >
                <span className="text-xl font-semibold text-ink">{c.name}</span>
                <span className="font-mono-label text-xs text-ink-muted">{c.detail}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </ScrollVideoSection>
    </div>
  );
}
