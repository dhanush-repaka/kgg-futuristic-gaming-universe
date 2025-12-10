"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Group } from "three";
import { motion } from "framer-motion";
import { Sparkles, Stars } from "@react-three/drei";

function CricketBat() {
  const batRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (batRef.current) {
      batRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.3;
      batRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <group ref={batRef} position={[-1, 0, 0]}>
      {/* Bat Handle */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="#8B4513" metalness={0.3} roughness={0.7} />
      </mesh>
      {/* Bat Blade */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.3, 2, 0.15]} />
        <meshStandardMaterial
          color="#F5DEB3"
          metalness={0.2}
          roughness={0.6}
          emissive="#FFD700"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

function CricketBall() {
  const ballRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (ballRef.current) {
      ballRef.current.position.x = Math.sin(state.clock.elapsedTime * 3) * 2;
      ballRef.current.position.y = Math.abs(Math.sin(state.clock.elapsedTime * 3)) * 1.5;
      ballRef.current.rotation.x += 0.1;
      ballRef.current.rotation.y += 0.05;
    }
  });

  return (
    <mesh ref={ballRef} position={[1, 0, 0]}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial
        color="#FF0000"
        metalness={0.8}
        roughness={0.2}
        emissive="#FF0000"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export default function VRCricketSection() {
  return (
    <section id="vr-cricket" className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-pink-300 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-300 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden holo-border"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.8} />
              <pointLight position={[10, 10, 10]} intensity={0.5} color="#A78BFA" />
              <pointLight position={[-10, 5, -10]} intensity={0.5} color="#EC4899" />
              
              <CricketBat />
              <CricketBall />
              <Sparkles count={100} scale={5} size={2} speed={0.3} color="#A78BFA" />
              <Stars radius={100} depth={50} count={2000} factor={3} fade speed={0.5} />
            </Canvas>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 glass-holo rounded-full mb-6 holo-border">
              <span className="text-purple-600 font-semibold animate-pulse">
                🎮 COMING SOON
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 holo-text">
              VR Cricket Turf
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Step into the future of cricket with our revolutionary VR Cricket Turf. 
              Experience realistic bowling, batting, and fielding in an immersive 
              virtual environment. Perfect your technique, face world-class bowlers, 
              and play in iconic stadiums—all in virtual reality.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "🏏 Realistic Physics Engine",
                "🌍 Multiple Stadium Environments",
                "👥 Multiplayer Competition",
                "📊 Performance Analytics",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-lg text-gray-700"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                alert('Thank you for your interest! We will notify you when VR Cricket Turf launches.');
              }}
              className="px-8 py-4 holo-border rounded-full font-semibold text-lg text-purple-700 chrome-effect"
            >
              Notify Me on Launch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}