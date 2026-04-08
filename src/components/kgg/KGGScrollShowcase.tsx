"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const moments = [
  {
    title: "Lobby Entry",
    copy: "Neon-lit reception sets the tone with clean premium ambiance.",
  },
  {
    title: "Console Arena",
    copy: "Multi-platform stations arranged for squad battles and weekend sessions.",
  },
  {
    title: "VR Zone",
    copy: "Immersive Meta Quest action with guided onboarding and curated games.",
  },
  {
    title: "Social Lounge",
    copy: "Board games, party sessions, and chill downtime in one space.",
  },
];

export default function KGGScrollShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section ref={ref} className="overflow-hidden border-y border-white/10 py-20">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <p className="text-xs tracking-[0.2em] text-cyan-200 uppercase">Cinematic Scroll Journey</p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Feel the Lounge Before You Visit</h2>

        <motion.div style={{ x }} className="mt-10 flex w-max gap-5">
          {moments.map((moment) => (
            <article key={moment.title} className="w-[260px] rounded-2xl border border-white/10 bg-slate-900/65 p-5 backdrop-blur-sm md:w-[320px]">
              <p className="text-xs text-cyan-200">KGG Experience</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{moment.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{moment.copy}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
