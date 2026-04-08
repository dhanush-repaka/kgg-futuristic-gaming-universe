import Reveal from "./Reveal";

const items = [
  "Console Arena",
  "VR Battle Pod",
  "Squad Lounge",
  "Board Game Deck",
  "Streaming Corner",
  "Tournament Stage",
];

export default function KGGGallery() {
  return (
    <section id="gallery" className="border-y border-white/10 bg-slate-900/40 py-18">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Gallery Showcase</h2>
          <p className="mt-3 max-w-2xl text-slate-300">A premium-ready gallery layout prepared for your real venue photos, events, and launch promos.</p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((label, idx) => (
            <Reveal key={label} delay={idx * 0.06}>
              <figure className="group relative min-h-52 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/12 via-slate-900/80 to-violet-500/12 p-5">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-400/18 blur-2xl transition group-hover:scale-125" />
                <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-violet-400/18 blur-2xl" />
                <div className="relative">
                  <p className="text-xs tracking-[0.2em] text-cyan-200 uppercase">Placeholder Slot</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{label}</h3>
                  <p className="mt-2 text-sm text-slate-300">Drop your high-resolution branded image/video still here.</p>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
