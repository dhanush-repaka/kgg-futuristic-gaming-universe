"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { Mesh, Points } from "three";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

function RotatingController() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, 0, 0]}>
      <boxGeometry args={[1.5, 0.5, 0.8]} />
      <meshStandardMaterial
        color="#E0E7FF"
        emissive="#8B5CF6"
        emissiveIntensity={0.3}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

function FloatingVRHeadset() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
      meshRef.current.rotation.y -= 0.008;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.6) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <boxGeometry args={[1.2, 0.6, 0.8]} />
      <meshStandardMaterial
        color="#FDE4FF"
        emissive="#EC4899"
        emissiveIntensity={0.3}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

function GalaxyParticles() {
  const pointsRef = useRef<Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const radius = Math.random() * 10 + 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
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
        size={0.05}
        color="#A78BFA"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function Hero3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 opacity-60">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#A78BFA" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#EC4899" />
          <spotLight position={[0, 5, 0]} angle={0.3} intensity={0.5} color="#60A5FA" />
          
          <RotatingController />
          <FloatingVRHeadset />
          <GalaxyParticles />
          <Stars radius={100} depth={50} count={3000} factor={3} fade speed={0.5} />
        </Canvas>
      </div>

      {/* Holographic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 via-transparent to-cyan-200/20 animate-prismatic pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 holo-text">
            KARTHIKEYA'S
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-4 holo-text">
            GAMES GALAXY
          </h2>
          <p className="text-xl md:text-2xl text-purple-600 mb-8 font-light tracking-wide">
            Experience Next-Gen Gaming in Tirupati
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 holo-border rounded-full font-semibold text-lg text-purple-700 hover:scale-105 transition-transform chrome-effect"
            >
              Book Now
            </button>
            <button 
              onClick={() => {
                document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 glass-holo rounded-full font-semibold text-lg text-purple-700 hover:scale-105 transition-transform"
            >
              Explore Games
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10"
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-purple-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}