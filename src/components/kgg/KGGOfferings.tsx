"use client";

import { Gamepad2, Joystick, Sword, Radar } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";

const consoleTags = [
  { label: "PS5", icon: Gamepad2 },
  { label: "Series X", icon: Joystick },
  { label: "Switch", icon: Sword },
];

const vrTags = ["Beat Saber", "Arenas", "Simulation", "Family-friendly"];

const tagList: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } },
};

const tagItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

export default function KGGOfferings() {
  return (
    <section id="games" className="w-full bg-surface-2/60 py-28 md:py-36">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ember-deep">
            Arrive
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Two worlds, one floor.
          </h2>
        </Reveal>

        {/* Console block — wide, image on the right, sits high */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="relative mt-16 grid gap-8 md:grid-cols-12 md:items-end"
        >
          <div className="md:col-span-7">
            <motion.span
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
              className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ember-deep"
            >
              Console Arena
            </motion.span>
            <motion.h3
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.05 } } }}
              className="mt-3 font-display text-3xl font-medium text-ink md:text-4xl"
            >
              PlayStation &middot; Xbox &middot; Switch
            </motion.h3>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } } }}
              className="mt-4 max-w-md text-base leading-relaxed text-muted"
            >
              High-performance rigs, premium displays, and curated multiplayer &mdash; from
              pit-lane racing to party-night co-op, plus tabletop for when you want to
              look each other in the eye.
            </motion.p>
            <motion.div variants={tagList} className="mt-6 flex flex-wrap gap-3">
              {consoleTags.map((tag) => {
                const Icon = tag.icon;
                return (
                  <motion.span
                    key={tag.label}
                    variants={tagItem}
                    className="inline-flex items-center gap-2 rounded-md border border-ink/8 bg-surface px-3 py-2 font-mono text-xs text-muted"
                  >
                    <Icon className="h-3.5 w-3.5 text-ember-deep" />
                    {tag.label}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
          <motion.div
            variants={imageReveal}
            className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-ink/8 md:col-span-5"
          >
            <Image src="/mood/offerings-console.png" alt="" fill sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" />
          </motion.div>
        </motion.div>

        {/* VR block — narrower, image on the left, offset right on large screens (no vertical overlap) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="relative mt-16 grid gap-8 md:grid-cols-12 md:items-end lg:ml-[8.3%] lg:mr-[-8.3%]"
        >
          <motion.div
            variants={imageReveal}
            className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-ink/8 md:col-span-5"
          >
            <Image src="/mood/offerings-vr.png" alt="" fill sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" />
          </motion.div>
          <div className="md:col-span-7">
            <motion.span
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
              className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ember-deep"
            >
              VR Worlds
            </motion.span>
            <motion.h3
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.05 } } }}
              className="mt-3 font-display text-3xl font-medium text-ink md:text-4xl"
            >
              Meta Quest Signature
            </motion.h3>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } } }}
              className="mt-4 max-w-md text-base leading-relaxed text-muted"
            >
              Guided onboarding into rhythm, action, and simulation worlds &mdash; built
              for first-timers who&apos;ve never worn a headset and regulars chasing a
              high score.
            </motion.p>
            <motion.div variants={tagList} className="mt-6 flex flex-wrap gap-3">
              {vrTags.map((label) => (
                <motion.span
                  key={label}
                  variants={tagItem}
                  className="inline-flex items-center gap-2 rounded-md border border-ink/8 bg-surface px-3 py-2 font-mono text-xs text-muted"
                >
                  <Radar className="h-3.5 w-3.5 text-ember-deep" />
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
