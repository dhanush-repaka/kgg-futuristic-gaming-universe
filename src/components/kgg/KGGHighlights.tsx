"use client";

import { Sparkles, Users, Armchair, ShieldCheck, Zap } from "lucide-react";
import Reveal from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    title: "Premium Setup",
    icon: Sparkles,
    copy: "Top-tier consoles, tuned displays, and low-latency gameplay environments — every rig checked and re-tuned monthly, not left to drift.",
    accent: "ember",
    span: "lg:col-span-4 lg:row-span-2",
    featured: true,
  },
  { title: "VR Adventures", icon: Zap, copy: "Immersive Meta Quest sessions crafted for excitement and first-time comfort.", accent: "electric", span: "lg:col-span-2" },
  { title: "For Friends & Family", icon: Users, copy: "Socially designed zones for squads, families, and casual group fun.", accent: "ember", span: "lg:col-span-2" },
  { title: "Comfort-First Space", icon: Armchair, copy: "Relaxed seating, clean environment, and an atmosphere you can stay in for hours.", accent: "electric", span: "lg:col-span-2" },
  { title: "Trusted Experience", icon: ShieldCheck, copy: "A modern entertainment hub focused on safety, quality, and unforgettable sessions.", accent: "ember", span: "lg:col-span-2" },
] as const;

export default function KGGHighlights() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section ref={containerRef} className="py-24 border-y border-white/5 perspective-1000">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-ember-soft">
            Why It Works
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
            Why KGG Works.
          </h2>
        </Reveal>

        {/* Bento layout: Premium Setup gets a dominant tile, the rest fill
            in as smaller supporting tiles instead of a uniform card grid. */}
        <motion.div
          style={{ rotateX }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[minmax(160px,auto)] transform-style-3d"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            const isElectric = item.accent === "electric";
            return (
              <motion.div
                initial={{ opacity: 0, z: -50 }}
                whileInView={{ opacity: 1, z: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ z: 20, scale: 1.01 }}
                key={item.title}
                className={`hud-frame ${isElectric ? "electric" : ""} ${item.span} group relative flex flex-col justify-between rounded-xl border border-white/10 bg-surface p-8 transition-colors hover:bg-white/[0.07] transform-style-3d ${
                  "featured" in item && item.featured ? "bg-surface-2" : ""
                }`}
              >
                <div className="hud-c2" />
                <div>
                  <Icon className={`${"featured" in item && item.featured ? "h-9 w-9" : "h-6 w-6"} ${isElectric ? "text-electric-soft" : "text-ember-soft"}`} />
                  <h3 className={`mt-6 font-display font-bold text-ink ${"featured" in item && item.featured ? "text-2xl" : "text-lg"}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-3 leading-relaxed text-muted ${"featured" in item && item.featured ? "max-w-md text-base" : "text-sm"}`}>
                    {item.copy}
                  </p>
                </div>
                {"featured" in item && item.featured && (
                  <div className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                    Checked monthly, not left to drift
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
