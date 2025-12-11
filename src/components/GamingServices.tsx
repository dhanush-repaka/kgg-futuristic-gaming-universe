"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Gamepad2, Headset, Boxes, Car, Dices, Monitor } from "lucide-react";
import HolographicCard from "./HolographicCard";
import NeonGlow from "./NeonGlow";
import FuturisticHeader from "./FuturisticHeader";

const services = [
  {
    id: 1,
    title: "PS5 Gaming",
    icon: Gamepad2,
    description: "Latest PS5 titles in 4K with haptic feedback",
    color: "from-blue-400 to-cyan-400",
    price: "₹150/hour",
  },
  {
    id: 2,
    title: "Xbox Series X",
    icon: Monitor,
    description: "Game Pass Ultimate with 100+ games",
    color: "from-green-400 to-emerald-400",
    price: "₹150/hour",
  },
  {
    id: 3,
    title: "Meta Quest VR",
    icon: Headset,
    description: "Immersive virtual reality experiences",
    color: "from-purple-400 to-pink-400",
    price: "₹200/hour",
  },
  {
    id: 4,
    title: "Nintendo Switch",
    icon: Boxes,
    description: "Family-friendly gaming station",
    color: "from-red-400 to-orange-400",
    price: "₹120/hour",
  },
  {
    id: 5,
    title: "Racing Setup",
    icon: Car,
    description: "Full sim racing rig with steering wheel",
    color: "from-yellow-400 to-amber-400",
    price: "₹180/hour",
  },
  {
    id: 6,
    title: "Board Games",
    icon: Dices,
    description: "Classic & modern board game collection",
    color: "from-indigo-400 to-blue-400",
    price: "₹100/hour",
  },
];

export default function GamingServices() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="games" className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -25, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <FuturisticHeader subtitle="Choose Your Platform">
          Gaming Arsenal
        </FuturisticHeader>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl text-gray-600 text-center mb-12 mt-4"
        >
          Choose your platform, unleash your skills
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredId(service.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="relative group"
              >
                <HolographicCard>
                  <motion.div
                    animate={{
                      rotateY: hoveredId === service.id ? 10 : 0,
                      rotateX: hoveredId === service.id ? -10 : 0,
                      scale: hoveredId === service.id ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className={`glass-holo rounded-2xl p-6 h-full group ${
                      hoveredId === service.id ? "prismatic-glow" : ""
                    } transition-all duration-300 border-2 ${
                      hoveredId === service.id 
                        ? "border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.6)]" 
                        : "border-transparent"
                    }`}
                  >
                  {/* Icon */}
                  <NeonGlow color={service.id % 2 === 0 ? "purple" : "pink"}>
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} chrome-effect flex items-center justify-center mb-4 group-hover:animate-float transition-all duration-300 ${
                        hoveredId === service.id ? "scale-110 rotate-12" : ""
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </NeonGlow>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold holo-text">
                      {service.price}
                    </span>
                    <motion.a
                      href="/booking"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 bg-gradient-to-r ${service.color} rounded-lg font-semibold text-sm text-white chrome-effect inline-block`}
                    >
                      Book
                    </motion.a>
                  </div>

                  {/* Hover Glow Effect */}
                  {hoveredId === service.id && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-200/30 via-pink-200/30 to-blue-200/30 pointer-events-none"
                        style={{ transform: "translateZ(20px)" }}
                      />
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 0.3 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 pointer-events-none blur-xl"
                      />
                    </>
                  )}
                  </motion.div>
                </HolographicCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}