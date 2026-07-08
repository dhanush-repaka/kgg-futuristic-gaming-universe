"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const HUDReticle3D = dynamic(() => import("./HUDReticle3D"), { ssr: false });

export default function KGGHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // We track the scroll over 300vh. The video will scrub as we scroll through it.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
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
    <section ref={containerRef} id="home" className="relative h-[300vh] w-full bg-base">
      {/* Sticky Background Video Layer */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          playsInline
          muted
          preload="auto"
          src="/hero-video.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base/85 via-base/50 to-base pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_45%_at_20%_15%,rgba(255,90,31,0.16),transparent_60%),radial-gradient(45%_45%_at_85%_25%,rgba(61,169,252,0.14),transparent_60%)] pointer-events-none" />

        {/* Focal WebGL HUD reticle, offset to the right so it reads as a real 3D object in the scene */}
        {heroInView && (
          <div className="absolute inset-0 hidden md:block pointer-events-none">
            <HUDReticle3D className="absolute right-[4%] top-1/2 h-[70vh] w-[70vh] -translate-y-1/2 opacity-80" />
          </div>
        )}

        {/* Hero content that fades out as you scrub/scroll */}
        <motion.div
          style={{ y, opacity, scale }}
          className="relative z-10 flex h-full items-center px-5 perspective-1000 md:px-8"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col pt-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-base/50 px-5 py-2 font-mono text-xs font-medium tracking-[0.18em] text-ember-soft uppercase backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_10px_2px_rgba(255,90,31,0.7)]" />
              Tirupati &middot; Andhra Pradesh
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, z: -100 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl font-display text-6xl font-black leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl"
            >
              Enter{" "}
              <span className="bg-gradient-to-r from-ember-soft to-ember bg-clip-text text-transparent">
                the Arena.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              A premium gaming lounge built like a next-gen main menu &mdash; PS5, Xbox, Switch, and Meta Quest VR, tuned for walk-ins, squads, and family sessions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-11 flex flex-wrap gap-5"
            >
              <Link
                href="/booking"
                className="rounded-md bg-gradient-to-r from-ember to-ember-deep px-8 py-4 text-sm font-bold text-[#0b0704] shadow-[0_14px_30px_-12px_rgba(255,90,31,0.55)] transition hover:brightness-110 hover:scale-[1.02]"
              >
                Reserve Session
              </Link>
              <Link
                href="#games"
                className="rounded-md border border-white/20 bg-base/40 px-8 py-4 text-sm font-bold text-ink backdrop-blur-md transition hover:border-electric-soft/50 hover:bg-white/5"
              >
                Explore Games
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-16 flex flex-wrap gap-10 border-t border-white/10 pt-8"
            >
              <div>
                <b className="tabular block font-mono text-2xl font-bold text-ink">5</b>
                <span className="text-xs tracking-wide text-muted-2">PLATFORMS ON DECK</span>
              </div>
              <div>
                <b className="tabular block font-mono text-2xl font-bold text-ink">&#8377;299</b>
                <span className="text-xs tracking-wide text-muted-2">ENTRY SESSION / HR</span>
              </div>
              <div>
                <b className="tabular block font-mono text-2xl font-bold text-ink">90min</b>
                <span className="text-xs tracking-wide text-muted-2">VR SIGNATURE PASS</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
