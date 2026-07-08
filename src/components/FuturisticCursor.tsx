"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Minimal cursor ring — v1 had a glowing mix-blend-difference cursor with a
 * 20-particle trail, which read as a "gamer HUD" gimmick. Simplified to a
 * single soft ring with gentle lag, fitting the calm Premium Tech-Luxury
 * direction instead.
 */
export default function FuturisticCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.matchMedia("(pointer: fine)").matches);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const ring = ringRef.current;
    if (!ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationFrameId: number;

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      if (ring) ring.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      if (ring) ring.style.opacity = "0";
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
    <div
      ref={ringRef}
      className="fixed h-7 w-7 rounded-full border border-ember/50 pointer-events-none z-[9999]"
      style={{
        transform: "translate(-50%, -50%)",
        opacity: 0,
        transition: "opacity 0.3s",
      }}
    />
  );
}
