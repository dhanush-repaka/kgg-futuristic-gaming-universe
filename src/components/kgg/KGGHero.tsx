"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function KGGHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  // We track the scroll over 300vh. The video will scrub as we scroll through it.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fade out hero content as we scroll down to reveal just the video
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedMetadata = () => {
        setDuration(videoRef.current?.duration || 0);
      };
      const v = videoRef.current;
      v.addEventListener("loadedmetadata", handleLoadedMetadata);
      if (v.readyState >= 1) handleLoadedMetadata();
      v.pause(); // Disable native autoplay so scrub handles it
      
      return () => v.removeEventListener("loadedmetadata", handleLoadedMetadata);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && duration > 0) {
      // Calculate scrub time. Fast-forward it slightly so it completes smoothly over the 300vh
      const targetTime = latest * duration;
      videoRef.current.currentTime = targetTime;
    }
  });

  return (
    <section ref={containerRef} id="home" className="relative h-[300vh] w-full bg-black">
      
      {/* Sticky Background Video Layer */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          playsInline
          muted
          preload="auto"
          // Scroll-scrubbed video layer
          src="/hero-video.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />
        
        {/* Centered Hero Content that fades out as you scrub/scroll */}
        <motion.div 
          style={{ y, opacity, scale }}
          className="relative z-10 flex h-full items-center justify-center px-5 perspective-1000"
        >
          <div className="flex flex-col items-center text-center max-w-4xl pt-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 inline-flex rounded-full border border-white/20 bg-black/40 px-5 py-2 text-xs font-semibold tracking-widest text-slate-300 uppercase backdrop-blur-md"
            >
              Immersive Gaming Lounge
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, z: -100 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl backdrop-blur-sm"
            >
              Enter the <br className="md:hidden" /> Future of Play.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              A minimalist sanctuary for next-gen PlayStation, Xbox, and Meta Quest VR. Scroll to dive into the experience.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-5"
            >
              <Link
                href="/booking"
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-slate-200 hover:scale-[1.02]"
              >
                Reserve Session
              </Link>
              <Link
                href="#games"
                className="rounded-full border border-white/30 bg-black/30 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
              >
                Explore Games
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
