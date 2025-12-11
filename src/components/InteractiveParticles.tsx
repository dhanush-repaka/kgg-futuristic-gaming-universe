"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  id: number;
}

export default function InteractiveParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    // Initialize particles
    const initParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          life: 1,
          id: particleIdRef.current++,
        });
      }
      setParticles(newParticles);
    };

    initParticles();

    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          x: p.x > window.innerWidth ? 0 : p.x < 0 ? window.innerWidth : p.x,
          y: p.y > window.innerHeight ? 0 : p.y < 0 ? window.innerHeight : p.y,
        }))
      );
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      setParticles((prev) =>
        prev.map((p) => {
          const dx = e.clientX - p.x;
          const dy = e.clientY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const force = distance < 100 ? (100 - distance) / 100 : 0;
          return {
            ...p,
            vx: p.vx + (dx / distance) * force * 0.01,
            vy: p.vy + (dy / distance) * force * 0.01,
          };
        })
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: 0.6,
            boxShadow: `0 0 ${particle.size * 2}px rgba(168, 85, 247, 0.8)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

