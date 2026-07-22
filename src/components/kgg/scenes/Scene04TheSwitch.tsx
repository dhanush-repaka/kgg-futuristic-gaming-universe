"use client";

import { motion } from "framer-motion";
import ScrollVideoSection from "../ScrollVideoSection";

const more = [
  { name: "Nintendo Switch", detail: "Mario Kart 8 Deluxe" },
  { name: "Meta Quest VR", detail: "Beat Saber" },
  { name: "Racing rigs", detail: "Pit-lane to podium" },
  { name: "Board games", detail: "For the whole squad" },
];

export default function Scene04TheSwitch() {
  return (
    <ScrollVideoSection
      src="/videos/scene-04-the-switch.mp4"
      poster="/videos/scene-04-the-switch-poster.jpg"
      trackVh={160}
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
          And that&rsquo;s just the start.
        </motion.h2>

        <ul className="space-y-0 border-t border-rule">
          {more.map((m, i) => (
            <motion.li
              key={m.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-baseline justify-between gap-4 border-b border-rule py-4"
            >
              <span className="text-lg font-semibold text-ink">{m.name}</span>
              <span className="font-mono-label text-xs text-ink-muted">{m.detail}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </ScrollVideoSection>
  );
}
