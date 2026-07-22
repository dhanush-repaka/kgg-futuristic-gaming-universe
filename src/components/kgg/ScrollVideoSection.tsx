"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * A tall scroll track with a pinned full-viewport video whose playhead is
 * driven by scroll progress through the track — the story unfolds as the
 * visitor scrolls, not on a timer. Falls back to a normal muted loop on
 * narrow viewports (mobile scroll physics fight per-frame seeking). Under
 * prefers-reduced-motion the video never plays at all — the poster frame
 * stands in and content reveals stay static, the most conservative reading
 * of "reduce motion" rather than swapping one motion source for another.
 *
 * Perf: both the scroll-scrub listener and mobile playback are gated by
 * IntersectionObserver so only the section actually near the viewport does
 * any work — with eight of these stacked on one page, letting every video
 * autoplay or every scroll listener run unconditionally is real jank.
 *
 * Note: the HTML `autoPlay` attribute is unreliable once a <video> is
 * mounted via React/CDP-driven navigation — it silently no-ops in some
 * browser contexts. Playback is always started explicitly via `.play()`.
 */
export default function ScrollVideoSection({
  src,
  poster,
  trackVh = 220,
  overlay = "dark",
  children,
}: {
  src: string;
  poster: string;
  trackVh?: number;
  overlay?: "dark" | "darker";
  children: React.ReactNode;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  const [scrubEnabled, setScrubEnabled] = useState(false);
  const [near, setNear] = useState(false);

  useEffect(() => {
    setScrubEnabled(!reducedMotion && window.innerWidth >= 640);
  }, [reducedMotion]);

  // Only mark "near" (worth doing any work for) when the track is within
  // one viewport of the visible area.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const io = new IntersectionObserver(([entry]) => setNear(entry.isIntersecting), {
      rootMargin: "100% 0px 100% 0px",
    });
    io.observe(track);
    return () => io.disconnect();
  }, []);

  // Scroll-scrub path (desktop, motion allowed).
  useEffect(() => {
    if (!scrubEnabled || !near) return;
    const track = trackRef.current;
    const video = videoRef.current;
    if (!track || !video) return;

    let raf = 0;
    let ticking = false;
    let lastTime = -1;

    // Warm-up: a <video> that has never actually played can fail to paint
    // a seeked frame in some browsers/decoders — kick it with a real
    // play()+pause() once so the decoder produces a paintable frame before
    // scrubbing starts driving currentTime.
    video.play().then(() => video.pause()).catch(() => {});

    const update = () => {
      ticking = false;
      const rect = track.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      const duration = video.duration || 10;
      const target = progress * duration;
      if (Math.abs(target - lastTime) > 0.06) {
        video.currentTime = target;
        lastTime = target;
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [scrubEnabled, near]);

  // Mobile / non-scrub path: explicit play/pause, gated by visibility.
  useEffect(() => {
    if (scrubEnabled || reducedMotion) return;
    const video = videoRef.current;
    if (!video) return;
    if (near) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [scrubEnabled, reducedMotion, near]);

  return (
    <section ref={trackRef} style={{ height: `${trackVh}vh` }} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          playsInline
          loop={!scrubEnabled}
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className={`absolute inset-0 ${
            overlay === "darker"
              ? "bg-[linear-gradient(180deg,rgba(10,9,11,0.75)_0%,rgba(10,9,11,0.55)_40%,rgba(10,9,11,0.85)_100%)]"
              : "bg-[linear-gradient(180deg,rgba(10,9,11,0.35)_0%,rgba(10,9,11,0.15)_35%,rgba(10,9,11,0.65)_100%)]"
          }`}
        />
        <div className="relative z-10 flex h-full w-full items-center">{children}</div>
      </div>
    </section>
  );
}
