"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Points } from "three";
import { motion } from "framer-motion";
import { Gamepad2, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

function FloatingParticles() {
  const pointsRef = useRef<Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#A78BFA"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, color: "from-pink-400 to-purple-400", href: "#" },
    { icon: Facebook, color: "from-blue-400 to-cyan-400", href: "#" },
    { icon: Twitter, color: "from-cyan-400 to-blue-400", href: "#" },
    { icon: Youtube, color: "from-red-400 to-pink-400", href: "#" },
  ];

  const footerLinks = {
    Quick: ["Home", "About", "Services", "Contact"],
    Games: ["PS5", "Xbox", "VR", "Switch"],
    Support: ["FAQ", "Pricing", "Booking", "Terms"],
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-transparent to-purple-50/50">
      {/* 3D Particle Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <FloatingParticles />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center chrome-effect">
                <Gamepad2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold holo-text">
                  Karthikeya's Games Galaxy
                </div>
                <div className="text-sm text-gray-500">Next-Gen Gaming Lounge</div>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 mb-6"
            >
              Experience the future of gaming with cutting-edge technology and 
              immersive experiences in the heart of Tirupati.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-3"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg bg-gradient-to-br ${social.color} chrome-effect`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 holo-text">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      whileHover={{ x: 5 }}
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600"
        >
          <p>© 2024 Karthikeya's Games Galaxy. All rights reserved.</p>
          <div className="flex gap-6">
            <motion.a
              whileHover={{ color: "#A855F7" }}
              href="#privacy"
              className="hover:text-purple-600"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              whileHover={{ color: "#A855F7" }}
              href="#terms"
              className="hover:text-purple-600"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" />
    </footer>
  );
}