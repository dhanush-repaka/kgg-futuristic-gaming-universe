"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const upcoming = [
  { title: "Grand Theft Auto VI", platform: "PS5 · Xbox", status: "Coming Soon" },
];

export default function KGGUpdates() {
  return (
    <section className="w-full border-y border-ink/8 bg-base py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ember-deep">
                What&apos;s Next
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                Coming to the deck.
              </h2>
            </div>
            <span className="rounded-full bg-ember px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-white">
              Coming Soon
            </span>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-ink/8">
          {upcoming.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col gap-4 border-b border-ink/8 py-10 md:flex-row md:items-baseline md:justify-between"
            >
              <h3 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl md:text-6xl">
                {item.title}
              </h3>
              <div className="flex items-center gap-3 shrink-0">
                <span className="rounded-md border border-ink/10 bg-surface px-3 py-1.5 font-mono text-xs text-muted">
                  {item.platform}
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-ember-deep">
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted">
            We&apos;re tracking every major release across PS5, Xbox, Switch, and Meta Quest &mdash;
            ask at the counter for the latest arrivals and launch-night plans.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
