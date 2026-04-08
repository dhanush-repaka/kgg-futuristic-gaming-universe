import { Sparkles, Users, Armchair, ShieldCheck, Zap } from "lucide-react";
import Reveal from "./Reveal";

const highlights = [
  { title: "Premium Setup", icon: Sparkles, copy: "Top-tier consoles, tuned displays, and low-latency gameplay environments." },
  { title: "VR Adventures", icon: Zap, copy: "Immersive Meta Quest sessions crafted for excitement and first-time comfort." },
  { title: "For Friends & Family", icon: Users, copy: "Socially designed zones for squads, families, and casual group fun." },
  { title: "Comfort-First Space", icon: Armchair, copy: "Relaxed seating, clean environment, and an atmosphere you can stay in for hours." },
  { title: "Trusted Experience", icon: ShieldCheck, copy: "A modern entertainment hub focused on safety, quality, and unforgettable sessions." },
];

export default function KGGHighlights() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-18">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Why KGG Stands Out</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
                  <Icon className="h-5 w-5 text-cyan-300" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.copy}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
