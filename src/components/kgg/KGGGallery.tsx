"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

const zones = [
  { zone: "Console Arena", note: "wide shot, rig row lit warm" },
  { zone: "VR Battle Pod", note: "player mid-session, soft rim light" },
  { zone: "Squad Lounge", note: "group candid, warm light" },
  { zone: "Board Game Deck", note: "overhead, tabletop detail" },
] as const;

export default function KGGGallery() {
  return (
    <section id="gallery" className="w-full bg-surface-2/60 py-28 md:py-36">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ember-deep">
            The Venue Frame
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Our Spaces.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Every frame here is a placeholder for real KGG photography &mdash; shot on-site
            with soft natural light, not stock imagery.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 md:space-y-24">
          {zones.map((item, idx) => (
            <motion.div
              key={item.zone}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid items-center gap-8 md:grid-cols-12"
            >
              <motion.div
                variants={{ hidden: { opacity: 0, scale: 1.08 }, show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/8 bg-gradient-to-br from-surface to-base-2 md:col-span-7 ${
                  idx % 2 === 1 ? "md:order-2" : "md:order-1"
                }`}
              >
                <span className="absolute left-5 top-5 rounded border border-dashed border-ink/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-2">
                  shoot here
                </span>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } } }}
                className={`md:col-span-5 ${idx % 2 === 1 ? "md:order-1" : "md:order-2"}`}
              >
                <p className="font-mono text-xs text-muted-2">{item.note}</p>
                <h3 className="mt-2 font-display text-3xl font-medium text-ink">{item.zone}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Closing full-bleed banner */}
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 aspect-[21/9] overflow-hidden rounded-2xl border border-ink/8 bg-gradient-to-br from-surface to-base-2 md:mt-24"
        >
          <span className="absolute left-6 top-6 rounded border border-dashed border-ink/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-2">
            shoot here
          </span>
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
              crowd POV, dramatic low angle
            </p>
            <h3 className="mt-2 font-display text-3xl font-medium text-ink md:text-4xl">
              Tournament Stage.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
