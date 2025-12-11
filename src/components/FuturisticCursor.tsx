"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  life: number;
  id: number;
}

export default function FuturisticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only show on desktop (non-touch devices)
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia("(pointer: fine)").matches);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    
    if (!cursor || !trail) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let trailX = 0;
    let trailY = 0;
    let animationFrameId: number;

    // Smooth cursor movement
    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;

      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";
      trail.style.left = trailX + "px";
      trail.style.top = trailY + "px";

      // Update particles
      setParticles((prev) => {
        const updated = prev
          .map((p) => ({ ...p, life: p.life - 0.02 }))
          .filter((p) => p.life > 0);
        return updated;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Add particle
      setParticles((prev) => {
        if (prev.length < 20) {
          return [
            ...prev,
            {
              x: e.clientX,
              y: e.clientY,
              life: 1,
              id: particleIdRef.current++,
            },
          ];
        }
        return prev;
      });
    };

    const handleMouseEnter = () => {
      if (cursor) cursor.style.opacity = "1";
      if (trail) trail.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.style.opacity = "0";
      if (trail) trail.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      >
        <div className="w-full h-full rounded-full bg-white border-2 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400" />
      </div>

      {/* Trail Cursor */}
      <div
        ref={trailRef}
        className="fixed w-12 h-12 pointer-events-none z-[9998]"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-cyan-400/30 blur-sm border border-purple-300/50" />
      </div>

      {/* Particles */}
      <div className="fixed pointer-events-none z-[9997] top-0 left-0 w-full h-full">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full bg-purple-400"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: particle.life,
              transform: `scale(${particle.life})`,
            }}
          />
        ))}
      </div>
    </>
  );
}

