"use client";

import { motion } from "framer-motion";
import ScrollVideoSection from "../ScrollVideoSection";

export default function Scene06BehindTheWheel() {
  return (
    <div id="racing">
      <ScrollVideoSection
        src="/videos/scene-06-behind-the-wheel.mp4"
        poster="/videos/scene-06-behind-the-wheel-poster.jpg"
        trackVh={160}
        overlay="darker"
      >
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="font-mono-label text-xs font-medium uppercase tracking-[0.16em] text-ink-muted"
          >
            Racing rigs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mt-4 max-w-lg text-4xl font-extrabold text-ink sm:text-5xl"
          >
            This part&rsquo;s real.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-md text-ink-muted"
          >
            Full pedal-and-wheel racing rigs, pit-lane to podium — the kind of setup you don&rsquo;t get to touch at
            home.
          </motion.p>
        </div>
      </ScrollVideoSection>
    </div>
  );
}
