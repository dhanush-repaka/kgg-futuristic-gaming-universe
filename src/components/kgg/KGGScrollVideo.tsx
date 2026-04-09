"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function KGGScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  // We track the scroll of a very tall container to allow scrubbing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    if (videoRef.current) {
      // Ensure the video metadata is loaded so we know duration
      const handleLoadedMetadata = () => {
        setDuration(videoRef.current?.duration || 0);
      };
      
      const v = videoRef.current;
      v.addEventListener("loadedmetadata", handleLoadedMetadata);
      if (v.readyState >= 1) handleLoadedMetadata();

      // Pause it immediately so it doesn't auto play natively
      v.pause();
      
      return () => v.removeEventListener("loadedmetadata", handleLoadedMetadata);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && duration > 0) {
      // Calculate the current time based on scroll progress
      // Add a slight smoothing by not using RAF manually, Framer Motion propagates this efficiently enough.
      const targetTime = latest * duration;
      
      // If we seek outside buffering limits, browsers can stutter. 
      // But for small mp4s, this direct seek works incredibly well on modern browsers (like Apple's scroll effect).
      videoRef.current.currentTime = targetTime;
    }
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-black">
      {/* The sticky container holds the video in place while we scroll through the 400vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-60"
          playsInline
          muted
          preload="auto"
          src="https://cdn.coverr.co/videos/coverr-playing-a-racing-game-on-a-console-8452/1080p.mp4"
        />
        
        {/* Overlay gradient so text remains readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />
      </div>
    </div>
  );
}
