"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const games = [
  { platform: "PS5", title: "Grand Theft Auto V", genre: "Action-Adventure", accent: "ember" },
  { platform: "PS5", title: "WWE 2K25", genre: "Sports / Fighting", accent: "ember" },
  { platform: "Xbox", title: "Forza Horizon 5", genre: "Racing", accent: "electric" },
  { platform: "Meta Quest", title: "Beat Saber", genre: "Rhythm / VR", accent: "electric" },
] as const;

export default function KGGGamesShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="games-showcase" className="py-32 perspective-1000 overflow-hidden border-t border-white/5">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-ember-soft">
                On the Deck
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
                Our Game Library.
              </h2>
            </div>
            <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-muted md:block">
              Updated Monthly
            </div>
          </div>
        </Reveal>

        {/* Featured setup — placeholder frame for real venue photography/video */}
        <motion.div
          style={{ y: yOffset }}
          className="hud-frame relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface-2 to-base-2 xl:aspect-[21/9] aspect-[16/9] transform-style-3d group"
        >
          <div className="hud-c2" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(255,90,31,0.18),transparent_65%),radial-gradient(55%_55%_at_85%_75%,rgba(61,169,252,0.14),transparent_65%)]" />
          <span className="absolute right-6 top-6 rounded border border-dashed border-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-2">
            real footage goes here
          </span>

          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <Reveal delay={0.2}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-ink backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-ember animate-pulse" />
                Featured Setup
              </div>
              <h3 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Pro Driving Simulator
              </h3>
              <p className="mt-4 max-w-2xl text-base md:text-lg text-muted">
                Ultra-realistic force feedback, pedal tension, and panoramic views. Built for Gran Turismo 7 and F1 on PlayStation 5.
              </p>
            </Reveal>
          </div>
        </motion.div>

        {/* Regular Games Grid */}
        <motion.div
          style={{ rotateX }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 transform-style-3d"
        >
          {games.map((game, idx) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`hud-frame ${game.accent === "electric" ? "electric" : ""} group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/5 bg-surface transform-style-3d cursor-default`}
            >
              <div className="hud-c2" />
              <div
                className={`absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 ${
                  game.accent === "electric"
                    ? "bg-[radial-gradient(80%_60%_at_50%_0%,rgba(61,169,252,0.22),transparent_65%)]"
                    : "bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,90,31,0.22),transparent_65%)]"
                } opacity-70`}
              />

              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="self-end rounded-full bg-base/60 px-3 py-1 font-mono text-xs font-medium text-muted backdrop-blur-md">
                  {game.platform}
                </div>
                <div>
                  <p className="font-mono text-xs font-medium text-muted-2">{game.genre}</p>
                  <h4 className="mt-1 font-display text-xl font-bold text-ink">{game.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
