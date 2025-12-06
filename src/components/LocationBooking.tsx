"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

function AnimatedMapPin() {
  const pinRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (pinRef.current) {
      pinRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.3;
      pinRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      {/* Pin Body */}
      <mesh ref={pinRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#EC4899"
          emissive="#EC4899"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      {/* Pin Pointer */}
      <mesh position={[0, -0.8, 0]}>
        <coneGeometry args={[0.3, 0.8, 32]} />
        <meshStandardMaterial
          color="#EC4899"
          emissive="#EC4899"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      {/* Glow Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
        <torusGeometry args={[0.8, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#A78BFA"
          emissive="#A78BFA"
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

export default function LocationBooking() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Tirupati, Andhra Pradesh",
      color: "from-pink-400 to-rose-400",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Sun: 10:00 AM - 11:00 PM",
      color: "from-cyan-400 to-blue-400",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 XXXXX XXXXX",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@kggtirupati.com",
      color: "from-blue-400 to-cyan-400",
    },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-300 via-purple-300 to-pink-300" />
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
            Visit Us
          </h2>
          <p className="text-xl text-gray-600">
            Your next gaming adventure awaits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Map Pin */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] rounded-2xl overflow-hidden glass-holo holo-border"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.8} />
              <pointLight position={[10, 10, 10]} intensity={0.5} color="#A78BFA" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#EC4899" />
              <spotLight position={[0, 10, 0]} angle={0.3} intensity={0.5} />
              
              <AnimatedMapPin />
            </Canvas>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="glass-holo rounded-xl p-6 flex items-start gap-4 cursor-pointer group"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} chrome-effect group-hover:animate-float`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-holo rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, color: "from-pink-400 to-purple-400" },
                  { icon: Facebook, color: "from-blue-400 to-cyan-400" },
                ].map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-lg bg-gradient-to-br ${social.color} chrome-effect`}
                    >
                      <SocialIcon className="w-6 h-6 text-white" />
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 holo-border rounded-full font-semibold text-lg text-purple-700 chrome-effect"
            >
              Book Your Session Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}