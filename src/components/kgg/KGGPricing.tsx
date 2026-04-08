import Reveal from "./Reveal";

const plans = [
  {
    title: "Quick Session",
    price: "₹299",
    unit: "/hour",
    description: "Perfect for walk-ins and quick matches.",
    features: ["Any 1 console zone", "High-speed setup", "On-site support"],
  },
  {
    title: "Squad Night",
    price: "₹999",
    unit: "/3 hours",
    description: "Best value for friends and teams.",
    features: ["Up to 4 players", "Console + board game access", "Priority slot booking"],
    featured: true,
  },
  {
    title: "VR Signature",
    price: "₹699",
    unit: "/90 min",
    description: "Premium Meta Quest immersion package.",
    features: ["Curated VR game library", "Beginner guidance", "Photo-worthy moments"],
  },
];

export default function KGGPricing() {
  return (
    <section id="pricing" className="mx-auto w-full max-w-7xl px-5 py-18 md:px-8">
      <Reveal>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Sessions & Pricing</h2>
        <p className="mt-3 max-w-2xl text-slate-300">Flexible plans for solo players, squad battles, and unforgettable VR adventures.</p>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((plan, idx) => (
          <Reveal key={plan.title} delay={idx * 0.07}>
            <article
              className={`h-full rounded-2xl border p-6 backdrop-blur-xl transition hover:-translate-y-1 ${
                plan.featured
                  ? "border-cyan-300/45 bg-cyan-300/8 shadow-[0_0_35px_rgba(34,211,238,0.25)]"
                  : "border-white/12 bg-white/5"
              }`}
            >
              <h3 className="text-lg font-semibold text-slate-100">{plan.title}</h3>
              <p className="mt-4 text-4xl font-bold text-white">{plan.price}<span className="text-base font-medium text-slate-400">{plan.unit}</span></p>
              <p className="mt-3 text-sm text-slate-300">{plan.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
