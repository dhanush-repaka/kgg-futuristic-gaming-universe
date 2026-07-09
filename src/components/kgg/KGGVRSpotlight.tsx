"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function KGGVRSpotlight() {
  return (
    <section id="vr" className="w-full bg-base py-28 md:py-36">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-7">
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-ember-deep uppercase">
              Signature
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Meta Quest Worlds.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Enter immersive arenas, action adventures, rhythm challenges, and
              simulation experiences crafted for presence and calm confidence.
            </p>
            <Link
              href="/booking"
              className="mt-10 inline-flex rounded-md bg-ember px-8 py-4 text-sm font-semibold text-white transition hover:bg-ember-deep hover:scale-[1.02]"
            >
              Book Session
            </Link>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delayChildren: 0.15, staggerChildren: 0.1 }}
            className="md:col-span-5 md:col-start-8"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted-2"
            >
              Included in VR Pass
            </motion.p>
            <ul className="mt-6 space-y-4 border-t border-ink/8 pt-6 text-sm text-muted">
              {[
                "Guided onboarding",
                "Multi-genre library",
                "Premium hygiene setup",
                "Family-friendly worlds",
              ].map((label, i) => (
                <motion.li
                  key={label}
                  variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                  className={`flex items-center gap-3 ${i < 3 ? "border-b border-ink/8 pb-4" : ""}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-ember-deep" /> {label}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
