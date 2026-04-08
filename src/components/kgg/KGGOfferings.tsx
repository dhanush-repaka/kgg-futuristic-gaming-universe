import { Gamepad2, Joystick, Sword, Radar, Dices } from "lucide-react";
import Reveal from "./Reveal";

const offerings = [
  {
    title: "PlayStation",
    description: "High-performance PlayStation sessions with premium displays, immersive sound, and competitive couch gaming comfort.",
    icon: Gamepad2,
  },
  {
    title: "Xbox",
    description: "Fast-paced Xbox gameplay with curated multiplayer experiences for squads, rivals, and weekend tournaments.",
    icon: Joystick,
  },
  {
    title: "Nintendo Switch",
    description: "Social-friendly Nintendo sessions packed with party titles, co-op fun, and family-ready entertainment.",
    icon: Sword,
  },
  {
    title: "Meta Quest VR",
    description: "Step into breathtaking VR adventures, sports, and interactive experiences powered by Meta Quest.",
    icon: Radar,
  },
  {
    title: "Board Games",
    description: "Classic and modern tabletop picks for strategy, laughs, and relaxed social hangouts.",
    icon: Dices,
  },
];

export default function KGGOfferings() {
  return (
    <section id="games" className="mx-auto w-full max-w-7xl px-5 py-18 md:px-8">
      <Reveal>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Built for Every Kind of Player</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          From console warriors to VR explorers and casual board game lovers, KGG brings everyone together in one stylish gaming universe.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {offerings.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group h-full rounded-2xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/40 hover:bg-cyan-300/8 hover:shadow-[0_16px_35px_rgba(34,211,238,0.2)]">
                <div className="mb-5 inline-flex rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-3 text-cyan-200 transition group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
