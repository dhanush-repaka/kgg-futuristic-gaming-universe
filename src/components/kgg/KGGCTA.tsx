"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function KGGCTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-24 md:px-8 perspective-1000">
      <Reveal>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotateX: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ z: 20, rotateX: 2 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center md:p-20 backdrop-blur-sm transform-style-3d"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Ready to Play?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Join the minimalist sanctuary for focused gaming, deep connection, and high-end entertainment.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link href="/booking" className="rounded-full bg-white px-9 py-4 text-sm font-semibold text-black transition hover:bg-slate-200 hover:scale-[1.02]">
              Book Now
            </Link>
            <Link href="#games" className="rounded-full border border-white/20 bg-transparent px-9 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
              Explore Games
            </Link>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
