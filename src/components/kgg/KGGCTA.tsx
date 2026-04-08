import Link from "next/link";
import Reveal from "./Reveal";

export default function KGGCTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-18 md:px-8">
      <Reveal>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Ready to Level Up Your Next Outing?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Plan a casual visit, birthday hangout, or high-energy gaming night at Karthikeya&apos;s Games Galaxy.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="#contact" className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105">
              Book Now
            </Link>
            <Link href="#pricing" className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/55 hover:text-cyan-200">
              View Pricing
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
