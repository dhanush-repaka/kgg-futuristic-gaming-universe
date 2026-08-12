import Link from "next/link";

export default function Invite() {
  return (
    <section id="visit" className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(800px 400px at 80% 20%, rgba(255,46,0,0.45), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <p className="font-mono-label text-[0.7rem] text-white/50">Tonight</p>
        <h2 className="mt-4 max-w-[14ch] font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
          Tonight&rsquo;s seats won&rsquo;t wait.
        </h2>
        <p className="mt-5 max-w-lg text-lg text-white/70">
          Walk into Karthikeya&rsquo;s Games Galaxy — Tirupati&rsquo;s lounge for squads, solos, and anyone done with boredom.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/booking"
            className="rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
          >
            Reserve a session
          </Link>
          <a
            href="tel:+917702528817"
            className="rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50"
          >
            Call +91 77025 28817
          </a>
        </div>
        <p className="mt-8 font-mono-label text-[0.7rem] text-white/45">
          10:00 AM – 11:00 PM · 537, Bairagipatteda Rd, Tirupati
        </p>
      </div>
    </section>
  );
}
