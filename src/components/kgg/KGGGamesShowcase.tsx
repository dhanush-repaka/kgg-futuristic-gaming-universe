"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";

const games = [
  { platform: "PS5", title: "Grand Theft Auto V", genre: "Action-Adventure" },
  { platform: "PS5", title: "WWE 2K25", genre: "Sports / Fighting" },
  { platform: "Xbox", title: "Forza Horizon 5", genre: "Racing" },
  { platform: "Switch", title: "Mario Kart 8 Deluxe", genre: "Party / Racing" },
  { platform: "Meta Quest", title: "Beat Saber", genre: "Rhythm / VR" },
  { platform: "Board Game", title: "Catan & Chess Night", genre: "Strategy / Tabletop" },
] as const;

export default function KGGGamesShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const scrollRail = (dir: 1 | -1) => {
    railRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section ref={containerRef} id="games-showcase" className="w-full bg-base py-28 md:py-36">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ember-deep">
                On the Deck
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                Our Game Library.
              </h2>
            </div>
            <div className="hidden rounded-full border border-ink/8 bg-surface px-4 py-2 font-mono text-xs text-muted md:block">
              Updated Monthly
            </div>
          </div>
        </Reveal>
      </div>

      {/* Full-bleed featured setup — edge-to-edge, no card border, the chapter's visual anchor */}
      <motion.div
        style={{ y: yOffset }}
        initial={{ opacity: 0, scale: 1.06 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-12 aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]"
      >
        <Image src="/mood/featured-setup.png" alt="" fill sizes="100vw" className="object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <Reveal delay={0.2}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-ember" />
              Featured Setup
            </div>
            <h3 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pro Driving Simulator
            </h3>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-white/75">
              Ultra-realistic force feedback, pedal tension, and panoramic views. Built for Gran Turismo 7 and F1 on PlayStation 5.
            </p>
          </Reveal>
        </div>
      </motion.div>

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* Game select rail — horizontal scroll-snap, like a console dashboard row, not a static grid */}
        <div className="mt-14 flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-2">Scroll to browse &middot; {games.length} titles</p>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollRail(-1)}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 bg-surface text-muted transition hover:text-ink hover:-translate-y-0.5"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollRail(1)}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 bg-surface text-muted transition hover:text-ink hover:-translate-y-0.5"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className="mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {games.map((game, idx) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[3/4] w-[260px] shrink-0 snap-start overflow-hidden rounded-2xl border border-ink/8 bg-surface cursor-default sm:w-[280px]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(201,124,61,0.08),transparent_65%)]" />

              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="self-end rounded-full border border-ink/8 bg-base px-3 py-1 font-mono text-xs font-medium text-muted">
                  {game.platform}
                </div>
                <div>
                  <p className="font-mono text-xs font-medium text-muted-2">{game.genre}</p>
                  <h4 className="mt-1 font-display text-xl font-medium text-ink">{game.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
