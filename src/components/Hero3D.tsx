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
    <mesh ref={meshRef} position={[-4, -1, -2]}>
      <boxGeometry args={[1.5, 0.5, 0.8]} />
      <meshStandardMaterial
        color="#E0E7FF"
        emissive="#8B5CF6"
        emissiveIntensity={0.5}
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.7}
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
    <mesh ref={meshRef} position={[4, 1, -2]}>
      <boxGeometry args={[1.2, 0.6, 0.8]} />
      <meshStandardMaterial
        color="#FDE4FF"
        emissive="#EC4899"
        emissiveIntensity={0.5}
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

function GalaxyParticles() {
  const pointsRef = useRef<Points>(null);
  const [particleCount, setParticleCount] = useState(2000);
  
  useEffect(() => {
    const updateParticleCount = () => {
      setParticleCount(window.innerWidth < 768 ? 500 : 2000);
    };
    updateParticleCount();
    window.addEventListener('resize', updateParticleCount);
    return () => window.removeEventListener('resize', updateParticleCount);
  }, []);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  const positions = useRef<Float32Array | null>(null);
  
  if (!positions.current || positions.current.length !== particleCount * 3) {
    positions.current = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 10 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions.current[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions.current[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions.current[i * 3 + 2] = radius * Math.cos(phi);
    }
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions.current}
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
    let animationFrameId: number | null = null;
    let lastUpdate = 0;
    const throttleMs = 16; // ~60fps

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdate < throttleMs) return;
      lastUpdate = now;

      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: -(e.clientY / window.innerHeight) * 2 + 1,
        });
      });
    };

    // Only add listener on desktop
    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 opacity-50" style={{ willChange: 'transform' }}>
        <Canvas dpr={[1, 2]} performance={{ min: 0.5 }}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#A78BFA" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#EC4899" />
          <pointLight position={[0, 10, 5]} intensity={0.6} color="#60A5FA" />
          <spotLight position={[0, 5, 0]} angle={0.3} intensity={0.5} color="#60A5FA" />
          
          <RotatingController />
          <FloatingVRHeadset />
          <GalaxyParticles />
          <Stars radius={100} depth={50} count={3000} factor={3} fade speed={0.5} />
        </Canvas>
      </div>

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>

      {/* Holographic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 via-transparent to-cyan-200/20 animate-prismatic pointer-events-none" />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
          animate={{
            y: ['0vh', '100vh'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Energy Waves */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/30"
          animate={{
            scale: [1, 1.5, 2],
            opacity: [0.5, 0.2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-400/30"
          animate={{
            scale: [1, 1.5, 2],
            opacity: [0.5, 0.2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
            ease: 'easeOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30"
          animate={{
            scale: [1, 1.5, 2],
            opacity: [0.5, 0.2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
            ease: 'easeOut',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center w-full max-w-full">
        {/* Text Backdrop Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full max-w-4xl h-96 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />
        </div>

        {/* Glassmorphism Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative backdrop-blur-xl bg-white/10 rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl w-full max-w-5xl mx-auto"
          style={{
            transform: `translate(${typeof window !== 'undefined' && window.innerWidth > 768 ? mousePosition.x * 10 : 0}px, ${typeof window !== 'undefined' && window.innerWidth > 768 ? mousePosition.y * 10 : 0}px)`,
            boxShadow: '0 8px 32px 0 rgba(168, 85, 247, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
            willChange: 'transform',
          }}
        >
          {/* Holographic Glitch Effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-0"
            animate={{
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), transparent)',
              transform: 'skewX(-20deg)',
            }}
          />

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 holo-text relative z-10 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] break-words">
            KARTHIKEYA'S
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 holo-text relative z-10 drop-shadow-[0_0_30px_rgba(236,72,153,0.5)] break-words">
            GAMES GALAXY
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-600 mb-4 sm:mb-6 md:mb-8 font-light tracking-wide relative z-10 px-2">
            Don't be bored, get on board, get on board!
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-500 mb-6 sm:mb-8 font-light tracking-wide relative z-10 px-2">
            Experience Next-Gen Gaming in Tirupati
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a 
              href="/booking"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 holo-border rounded-full font-semibold text-lg text-purple-700 chrome-effect inline-block futuristic-button relative overflow-hidden"
            >
              <span className="relative z-10">Book Now</span>
            </motion.a>
            <motion.button 
              onClick={() => {
                document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(236, 72, 153, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-holo rounded-full font-semibold text-lg text-purple-700 futuristic-button relative overflow-hidden"
            >
              <span className="relative z-10">Explore Games</span>
            </motion.button>
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