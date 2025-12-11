"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let animationFrameId: number | null = null;
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      // Skip if scroll change is minimal
      if (Math.abs(currentScrollY - lastScrollY) < 5) return;
      lastScrollY = currentScrollY;

      if (!ticking) {
        animationFrameId = requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const parallax = currentScrollY * 0.3; // Reduced parallax intensity
          containerRef.current.style.transform = `translateY(${parallax}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttle scroll events
    let scrollTimeout: NodeJS.Timeout;
    const throttledScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 16); // ~60fps
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ willChange: "transform" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20" />
      <div className="absolute top-0 left-0 w-full h-[200vh] bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-full h-[200vh] bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]" />
    </div>
  );
}

