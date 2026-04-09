"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const games = [
  { platform: "PS5", title: "Grand Theft Auto V", genre: "Action-Adventure", image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png" },
  { platform: "PS5", title: "WWE 2K25", genre: "Sports / Fighting", image: "https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { platform: "Xbox", title: "Forza Horizon 5", genre: "Racing", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop" },
  { platform: "Meta Quest", title: "Beat Saber", genre: "Rhythm / VR", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop" },
];

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
        
        {/* Featured Simulator Block */}
        <Reveal>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Our Game Library.</h2>
            <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 md:block">
              Updated Monthly
            </div>
          </div>
        </Reveal>

        <motion.div 
          style={{ y: yOffset }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-black/40 xl:aspect-[21/9] aspect-[16/9] transform-style-3d group"
        >
          {/* Abstract Racing setup placeholder */}
          <img 
            src="https://images.pexels.com/photos/7915509/pexels-photo-7915509.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Driving Simulator" 
            className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <Reveal delay={0.2}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                Featured Setup
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Pro Driving Simulator
              </h3>
              <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-300">
                Experience ultra-realistic force feedback, pedal tension, and panoramic views. Built for Gran Turismo 7 and F1 on PlayStation 5.
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
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/5 bg-white/5 transform-style-3d cursor-default"
            >
              <img 
                src={game.image} 
                alt={game.title} 
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="self-end rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-md">
                  {game.platform}
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400">{game.genre}</p>
                  <h4 className="mt-1 text-xl font-semibold text-white">{game.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
