"use client";

import { Gamepad2, Joystick, Sword, Dices, Radar } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const consoleTags = [
  { label: "PS5", icon: Gamepad2 },
  { label: "Series X", icon: Joystick },
  { label: "Switch", icon: Sword },
  { label: "Board Games", icon: Dices },
];

export default function KGGOfferings() {
  return (
    <section id="games" className="mx-auto w-full max-w-7xl px-5 py-24 md:px-8 perspective-1000">
      <Reveal>
        <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ember-deep">
          Select Your World
        </span>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Every platform has a home turf.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Instead of one flat games grid, the lounge splits into two worlds &mdash; matching how it&apos;s actually laid out on the floor.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-2 transform-style-3d">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hud-frame group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-2xl border border-ink/8 bg-surface p-10"
        >
          <div className="hud-c2" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_100%_0%,rgba(201,124,61,0.07),transparent_60%)]" />
          <span className="absolute left-8 top-8 rounded-full border border-ink/10 bg-surface-2 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ember-deep">
            Console Arena
          </span>
          <div className="relative">
            <h3 className="font-display text-2xl font-medium text-ink md:text-3xl">
              PlayStation &middot; Xbox &middot; Switch
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              High-performance rigs, premium displays, and curated multiplayer &mdash; from pit-lane racing to party-night co-op, plus tabletop for when you want to look each other in the eye.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {consoleTags.map((tag) => {
                const Icon = tag.icon;
                return (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-2 rounded-md border border-ink/8 bg-surface-2 px-3 py-2 font-mono text-xs text-muted"
                  >
                    <Icon className="h-3.5 w-3.5 text-ember-deep" />
                    {tag.label}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="hud-frame group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-2xl border border-ink/8 bg-surface p-10"
        >
          <div className="hud-c2" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_100%_0%,rgba(201,124,61,0.07),transparent_60%)]" />
          <span className="absolute left-8 top-8 rounded-full border border-ink/10 bg-surface-2 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ember-deep">
            VR Worlds
          </span>
          <div className="relative">
            <h3 className="font-display text-2xl font-medium text-ink md:text-3xl">
              Meta Quest Signature
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Guided onboarding into rhythm, action, and simulation worlds &mdash; built for first-timers who&apos;ve never worn a headset and regulars chasing a high score.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Beat Saber", "Arenas", "Simulation", "Family-friendly"].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-md border border-ink/8 bg-surface-2 px-3 py-2 font-mono text-xs text-muted"
                >
                  <Radar className="h-3.5 w-3.5 text-ember-deep" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
