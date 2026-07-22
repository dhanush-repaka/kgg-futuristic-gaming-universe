"use client";

import { motion } from "framer-motion";
import ScrollVideoSection from "../ScrollVideoSection";

const labels = ["Beat Saber", "Guided sessions", "90-min Signature pass"];

export default function Scene05GoingUnder() {
  return (
    <div id="vr">
      <ScrollVideoSection
        src="/videos/scene-05-going-under.mp4"
        poster="/videos/scene-05-going-under-poster.jpg"
        trackVh={180}
        overlay="darker"
      >
        <div className="mx-auto w-full max-w-3xl px-5 text-center md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-ink sm:text-5xl"
          >
            Then, go under.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-5 max-w-md text-ink-muted"
          >
            Guided onboarding into rhythm, action, and simulation worlds — a Meta Quest VR pass, no headache-inducing
            guesswork.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {labels.map((l, i) => (
              <motion.span
                key={l}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="rounded-full border border-rule bg-bg-2/60 px-4 py-2 font-mono-label text-xs uppercase tracking-[0.1em] text-ink-muted backdrop-blur-sm"
              >
                {l}
              </motion.span>
            ))}
          </div>
        </div>
      </ScrollVideoSection>
    </div>
  );
}
