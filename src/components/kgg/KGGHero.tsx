"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function KGGHero() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0.35]);
  const panelRotate = useTransform(scrollY, [0, 550], [0, -8]);

  return (
    <section id="home" className="relative overflow-hidden px-5 pb-24 pt-18 md:px-8 md:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_45%),radial-gradient(circle_at_78%_0%,rgba(139,92,246,0.28),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.2),transparent_50%)]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/8 px-4 py-1 text-xs font-medium tracking-[0.22em] text-cyan-200 uppercase">
            Premium Gaming Lounge Experience
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Enter the Future of Play at <span className="holo-text">Karthikeya&apos;s Games Galaxy</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Dive into next-gen PlayStation, Xbox, Nintendo Switch, Meta Quest VR, and social board game sessions in one immersive, premium entertainment space built for friends, families, and gamers.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#pricing" className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_32px_rgba(56,189,248,0.38)] transition hover:scale-105">
              Reserve Your Session
            </Link>
            <Link href="#gallery" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur-sm transition hover:border-cyan-300/60 hover:text-cyan-200">
              Explore The Lounge
            </Link>
          </div>
        </motion.div>

        <motion.div style={{ rotateX: panelRotate, transformPerspective: 1200 }} initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }} className="relative mx-auto w-full max-w-md lg:translate-y-2">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-cyan-400/45 via-blue-500/35 to-violet-500/45 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/8 p-3 backdrop-blur-xl">
            <Image src="/kgg-logo.jpeg" alt="Karthikeya's Games Galaxy logo" width={800} height={1000} className="h-[440px] w-full rounded-2xl object-cover" priority />
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-slate-200">
              <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/8 px-2 py-2">PS5</div>
              <div className="rounded-lg border border-violet-300/20 bg-violet-300/8 px-2 py-2">XR & VR</div>
              <div className="rounded-lg border border-blue-300/20 bg-blue-300/8 px-2 py-2">Nintendo</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
