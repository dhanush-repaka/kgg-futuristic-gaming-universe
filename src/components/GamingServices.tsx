"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Gamepad2, Headset, Boxes, Car, Dices, Monitor } from "lucide-react";

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
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 holo-text">
            Gaming Arsenal
          </h2>
          <p className="text-xl text-gray-600">
            Choose your platform, unleash your skills
          </p>
        </motion.div>

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
                <motion.div
                  animate={{
                    rotateY: hoveredId === service.id ? 10 : 0,
                    rotateX: hoveredId === service.id ? -10 : 0,
                    scale: hoveredId === service.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className={`glass-holo rounded-2xl p-6 h-full ${
                    hoveredId === service.id ? "prismatic-glow" : ""
                  } transition-all duration-300`}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} chrome-effect flex items-center justify-center mb-4 group-hover:animate-float`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold holo-text">
                      {service.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`px-4 py-2 bg-gradient-to-r ${service.color} rounded-lg font-semibold text-sm text-white chrome-effect`}
                    >
                      Book
                    </motion.button>
                  </div>

                  {/* Hover Glow Effect */}
                  {hoveredId === service.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-200/30 via-pink-200/30 to-blue-200/30 pointer-events-none"
                      style={{ transform: "translateZ(20px)" }}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}