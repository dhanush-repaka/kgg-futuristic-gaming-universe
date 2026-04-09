"use client";

import { Gamepad2, Joystick, Sword, Radar, Dices } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const offerings = [
  {
    title: "PlayStation",
    description: "High-performance PlayStation sessions with premium displays.",
    icon: Gamepad2,
  },
  {
    title: "Xbox",
    description: "Fast-paced Xbox gameplay with curated multiplayer experiences.",
    icon: Joystick,
  },
  {
    title: "Nintendo Switch",
    description: "Social-friendly sessions packed with party titles and co-op fun.",
    icon: Sword,
  },
  {
    title: "Meta Quest VR",
    description: "Step into breathtaking VR adventures and interactive experiences.",
    icon: Radar,
  },
  {
    title: "Board Games",
    description: "Classic and modern tabletop picks for strategy and relaxed hangouts.",
    icon: Dices,
  },
];

export default function KGGOfferings() {
  return (
    <section id="games" className="mx-auto w-full max-w-7xl px-5 py-24 md:px-8 perspective-1000">
      <Reveal>
        <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Our Platforms.</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          From console to VR and casual tabletop, everything you need for premium gaming.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transform-style-3d">
        {offerings.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
              className="group relative flex h-full flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transform-style-3d cursor-default"
            >
              <div>
                <motion.div 
                  className="mb-8 inline-flex rounded-lg bg-white/10 p-3 text-white transition-colors group-hover:bg-white group-hover:text-black"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
