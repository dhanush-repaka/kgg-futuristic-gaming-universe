import Link from "next/link";

const plans = [
  {
    id: "quick",
    title: "Quick Session",
    price: "₹299",
    unit: "/ hour",
    detail: "Any 1 console zone. Walk-in friendly.",
  },
  {
    id: "squad",
    title: "Squad Night",
    price: "₹999",
    unit: "/ 3 hours",
    detail: "Up to 4 players. Console + board games.",
    featured: true,
  },
  {
    id: "vr",
    title: "VR Signature",
    price: "₹699",
    unit: "/ 90 min",
    detail: "Guided Meta Quest immersion.",
  },
] as const;

export default function Pricing() {
  return (
    <section id="pricing" className="border-y border-rule bg-surface py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <p className="font-mono-label text-[0.7rem] text-ink-muted">Pricing</p>
        <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-tight text-ink">
          Hold a seat tonight.
        </h2>
        <p className="mt-4 max-w-lg text-ink-muted">
          Clear rates. WhatsApp confirm. No app download required.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`rounded-xl border p-6 ${
                "featured" in p && p.featured
                  ? "border-accent shadow-[0_0_0_1px_var(--kgg-accent)]"
                  : "border-rule bg-bg"
              }`}
            >
              {"featured" in p && p.featured ? (
                <span className="font-mono-label text-[0.65rem] text-accent">Most booked</span>
              ) : (
                <span className="font-mono-label text-[0.65rem] text-ink-muted">Session</span>
              )}
              <h3 className="mt-3 font-display text-2xl font-bold text-ink">{p.title}</h3>
              <p className="mt-4 tabular">
                <span className="text-3xl font-bold text-accent">{p.price}</span>
                <span className="text-sm text-ink-muted">{p.unit}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/booking"
            className="inline-flex rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
          >
            Reserve a session
          </Link>
        </div>
      </div>
    </section>
  );
}
