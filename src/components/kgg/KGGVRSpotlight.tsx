import Link from "next/link";
import Reveal from "./Reveal";

export default function KGGVRSpotlight() {
  return (
    <section id="vr" className="mx-auto w-full max-w-7xl px-5 py-18 md:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-violet-500/10 p-8 md:p-12">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs tracking-[0.22em] text-cyan-200 uppercase">VR Signature Experience</p>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Meta Quest Worlds. Real Adrenaline.</h2>
              <p className="mt-4 text-slate-300">
                Enter immersive arenas, action adventures, rhythm challenges, and simulation experiences designed for both first-timers and serious explorers.
              </p>
              <Link
                href="#contact"
                className="mt-7 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/15 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/25"
              >
                Book VR Session
              </Link>
            </div>
            <div className="rounded-2xl border border-white/15 bg-black/25 p-5 backdrop-blur-sm">
              <p className="text-sm text-slate-200">Included in VR Session</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• Guided onboarding and controls briefing</li>
                <li>• Multi-genre VR title library</li>
                <li>• Premium hygiene and comfort setup</li>
                <li>• Beginner-friendly and family-friendly options</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
