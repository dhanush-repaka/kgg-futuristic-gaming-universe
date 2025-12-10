"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const games = [
  {
    id: 1,
    title: "Where Wind Meets",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4de33059-eb11-4e68-9e83-a37a8a7c9175/generated_images/where-the-wind-meets-video-game-cover-ar-300c6148-20251206110950.jpg",
    genre: "Wuxia Action RPG",
    glowColor: "from-cyan-300/40 to-blue-400/40",
  },
  {
    id: 2,
    title: "GTA 5",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4de33059-eb11-4e68-9e83-a37a8a7c9175/generated_images/gta-5-grand-theft-auto-v-game-cover-art--4ba7b557-20251206110950.jpg",
    genre: "Open World Action",
    glowColor: "from-purple-300/40 to-pink-400/40",
  },
  {
    id: 3,
    title: "Ghost of Yotei",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4de33059-eb11-4e68-9e83-a37a8a7c9175/generated_images/ghost-of-yotei-game-art-samurai-warrior--a4b7cc0a-20251206110950.jpg",
    genre: "Samurai Adventure",
    glowColor: "from-blue-300/40 to-cyan-400/40",
  },
  {
    id: 4,
    title: "Black Myth Wukong",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4de33059-eb11-4e68-9e83-a37a8a7c9175/generated_images/black-myth-wukong-game-cover-art-monkey--1791a2cf-20251206110951.jpg",
    genre: "Mythology Action",
    glowColor: "from-purple-300/40 to-blue-400/40",
  },
  {
    id: 5,
    title: "Need for Speed",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4de33059-eb11-4e68-9e83-a37a8a7c9175/generated_images/need-for-speed-racing-game-cover-art-sle-86935349-20251206110951.jpg",
    genre: "Street Racing",
    glowColor: "from-cyan-300/40 to-purple-400/40",
  },
];

export default function NewGamesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="new-games" className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-cyan-300 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-purple-300 rounded-full blur-[150px]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: "linear-gradient(135deg, #A78BFA, #EC4899, #60A5FA)",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-holo holo-border mb-4">
            <Sparkles className="w-5 h-5 text-purple-600 animate-pulse" />
            <span className="text-purple-600 font-semibold">NEW ARRIVALS</span>
            <Sparkles className="w-5 h-5 text-purple-600 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 holo-text">
            Now Available
          </h2>
          <p className="text-xl text-gray-600">
            Latest blockbuster titles ready to play
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              onHoverStart={() => setHoveredId(game.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative group cursor-pointer"
            >
              <motion.div
                animate={{
                  rotateY: hoveredId === game.id ? 8 : 0,
                  rotateX: hoveredId === game.id ? -8 : 0,
                  scale: hoveredId === game.id ? 1.05 : 1,
                  z: hoveredId === game.id ? 50 : 0,
                }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
                className={`relative rounded-2xl overflow-hidden border-2 border-white/40 ${
                  hoveredId === game.id ? "prismatic-glow" : ""
                } transition-all duration-300`}
              >
                {/* Game Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${game.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Glass Info Panel */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredId === game.id ? 1 : 0,
                      y: hoveredId === game.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-x-0 bottom-0 p-4 glass-holo"
                  >
                    <h3 className="text-lg font-bold mb-1 holo-text">
                      {game.title}
                    </h3>
                    <p className="text-sm text-gray-700">{game.genre}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="mt-2 w-full px-3 py-2 holo-border rounded-lg font-semibold text-sm text-purple-700 chrome-effect"
                    >
                      Play Now
                    </motion.button>
                  </motion.div>
                </div>

                {/* 3D Shine Effect */}
                {hoveredId === game.id && (
                  <motion.div
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: [0, 1, 0], x: "100%" }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                    style={{ transform: "translateZ(30px)" }}
                  />
                )}

                {/* Corner Accents */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Floating Label when not hovered */}
              {hoveredId !== game.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 glass-holo rounded-full text-sm font-semibold text-gray-800"
                >
                  {game.title}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 holo-border rounded-full font-bold text-lg text-purple-700 chrome-effect"
          >
            View Full Game Library
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}