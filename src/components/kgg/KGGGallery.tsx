"use client";

import Reveal from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  { zone: "Console Arena", note: "wide shot, rig row lit warm", accent: "ember" },
  { zone: "VR Battle Pod", note: "player mid-session, cool rim light", accent: "electric" },
  { zone: "Squad Lounge", note: "group candid, ember glow", accent: "ember" },
  { zone: "Board Game Deck", note: "overhead, tabletop detail", accent: "ember" },
  { zone: "Streaming Corner", note: "rig + ring light detail", accent: "electric" },
  { zone: "Tournament Stage", note: "crowd POV, dramatic low angle", accent: "electric" },
] as const;

export default function KGGGallery() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <section ref={containerRef} id="gallery" className="py-24 perspective-1000">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-ember-soft">
            The Venue Frame
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
            Our Spaces.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Every frame here is a placeholder for real KGG photography &mdash; shot on-site and graded to this palette, not stock imagery.
          </p>
        </Reveal>

        <motion.div
          style={{ rotateX }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transform-style-3d"
        >
          {items.map((item, idx) => (
            <motion.div
              key={item.zone}
              initial={{ opacity: 0, z: -50 }}
              whileInView={{ opacity: 1, z: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, z: 50 }}
              className={`hud-frame ${item.accent === "electric" ? "electric" : ""} group relative min-h-64 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-surface-2 to-base-2 p-6 transform-style-3d cursor-default flex flex-col justify-between`}
            >
              <div className="hud-c2" />
              <div
                className={`pointer-events-none absolute inset-0 z-0 ${
                  item.accent === "electric"
                    ? "bg-[radial-gradient(70%_60%_at_30%_10%,rgba(61,169,252,0.16),transparent_65%)]"
                    : "bg-[radial-gradient(70%_60%_at_30%_10%,rgba(255,90,31,0.16),transparent_65%)]"
                }`}
              />
              <span className="relative z-10 self-start rounded border border-dashed border-white/15 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-2">
                shoot here
              </span>
              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <p className="font-mono text-xs text-muted-2">{item.note}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{item.zone}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
