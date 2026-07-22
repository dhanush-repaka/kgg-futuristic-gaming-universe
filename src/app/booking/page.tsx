"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

const WHATSAPP_NUMBER = "917702528817";

const sessionTypes = [
  { id: "quick", title: "Quick Session", price: "₹299 / hour", description: "Any 1 console zone, walk-in friendly." },
  { id: "squad", title: "Squad Night", price: "₹999 / 3 hours", description: "Up to 4 players, console + board games." },
  { id: "vr", title: "VR Signature", price: "₹699 / 90 min", description: "Guided Meta Quest immersion." },
] as const;

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM",
];

export default function BookingPage() {
  const [sessionType, setSessionType] = useState<(typeof sessionTypes)[number]["id"]>("squad");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [partySize, setPartySize] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState(false);

  const today = new Date().toISOString().split("T")[0];
  const selectedPlan = sessionTypes.find((s) => s.id === sessionType)!;
  const canSubmit = name.trim().length > 0 && phone.trim().length >= 10 && date && time;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const message = [
      `Hi KGG, I'd like to reserve a session:`,
      ``,
      `Session: ${selectedPlan.title} (${selectedPlan.price})`,
      `Date: ${date}`,
      `Time: ${time}`,
      `Party size: ${partySize}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      notes.trim() ? `Notes: ${notes.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center px-5 py-4 md:px-8">
          <Link href="/" className="group flex items-center gap-3 text-ink-muted transition-colors hover:text-ink">
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 py-32 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono-label text-xs font-medium uppercase tracking-[0.14em] text-accent">
            Reserve Session
          </span>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-ink md:text-6xl">
            Book your slot.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Fill in your details and we&apos;ll open WhatsApp with everything pre-filled &mdash;
            send it and we&apos;ll confirm your slot directly.
          </p>
        </motion.div>

        {!sent ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 space-y-10"
            >
              <div>
                <label className="font-mono-label text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Session Type
                </label>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {sessionTypes.map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSessionType(s.id)}
                      className={`rounded-lg border p-5 text-left transition-colors ${
                        sessionType === s.id
                          ? "border-accent bg-bg-2"
                          : "border-rule bg-bg-2/50 hover:border-ink/25"
                      }`}
                    >
                      <p className="text-lg font-semibold text-ink">{s.title}</p>
                      <p className="tabular mt-1 font-mono-label text-sm text-accent">{s.price}</p>
                      <p className="mt-2 text-xs leading-relaxed text-ink-muted">{s.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="date" className="font-mono-label text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="mt-3 w-full rounded-md border border-rule bg-bg-2 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent/60"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="font-mono-label text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Time
                  </label>
                  <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className="mt-3 w-full rounded-md border border-rule bg-bg-2 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent/60"
                  >
                    <option value="" disabled>Select a slot</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="party" className="font-mono-label text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Party Size
                </label>
                <div className="mt-3 inline-flex items-center gap-4 rounded-md border border-rule bg-bg-2 px-4 py-2">
                  <button
                    type="button"
                    onClick={() => setPartySize((n) => Math.max(1, n - 1))}
                    className="text-lg text-ink-muted transition-colors hover:text-ink"
                    aria-label="Decrease party size"
                  >
                    &minus;
                  </button>
                  <span className="tabular w-6 text-center font-mono-label text-sm text-ink">{partySize}</span>
                  <button
                    type="button"
                    onClick={() => setPartySize((n) => Math.min(8, n + 1))}
                    className="text-lg text-ink-muted transition-colors hover:text-ink"
                    aria-label="Increase party size"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="font-mono-label text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="mt-3 w-full rounded-md border border-rule bg-bg-2 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-accent/60"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="font-mono-label text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="mt-3 w-full rounded-md border border-rule bg-bg-2 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-accent/60"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="font-mono-label text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Notes <span className="normal-case text-ink-muted">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Anything we should know?"
                  className="mt-3 w-full resize-none rounded-md border border-rule bg-bg-2 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-accent/60"
                />
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full rounded-md bg-accent px-8 py-4 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
              >
                Continue on WhatsApp
              </button>
              <p className="text-xs text-ink-muted">
                We don&apos;t auto-confirm bookings yet &mdash; sending opens WhatsApp with your
                details filled in, and we&apos;ll confirm the slot with you there.
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 rounded-lg border border-rule bg-bg-2 p-10 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-ink">
                <Check className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-ink">Request sent to WhatsApp.</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Finish sending the pre-filled message over there and we&apos;ll confirm your{" "}
                {selectedPlan.title.toLowerCase()} slot on {date} at {time}. Didn&apos;t open?{" "}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent underline underline-offset-2"
                >
                  Open WhatsApp manually
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-xs font-medium uppercase tracking-widest text-ink-muted underline underline-offset-4 transition-colors hover:text-ink"
              >
                Book another session
              </button>
            </motion.div>
          )}

        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-rule pt-12 md:grid-cols-2">
          <a
            href="tel:+917702528817"
            className="group rounded-lg border border-rule bg-bg-2/50 p-8 text-left transition-colors hover:border-accent/40"
          >
            <Phone className="h-7 w-7 text-accent" />
            <h3 className="mt-5 text-lg font-semibold text-ink">Call Us</h3>
            <p className="tabular mt-2 font-mono-label text-xl font-semibold tracking-tight text-ink">+91 77025 28817</p>
          </a>
          <a
            href="mailto:connect@kgg.lounge"
            className="group rounded-lg border border-rule bg-bg-2/50 p-8 text-left transition-colors hover:border-accent/40"
          >
            <Mail className="h-7 w-7 text-accent" />
            <h3 className="mt-5 text-lg font-semibold text-ink">Email Us</h3>
            <p className="mt-2 font-mono-label text-lg font-semibold tracking-tight text-ink">connect@kgg.lounge</p>
          </a>
        </div>

        <div className="mt-6 rounded-lg border border-rule bg-bg-2/50 p-8">
          <div className="flex flex-col md:flex-row md:items-start md:gap-6">
            <MapPin className="h-7 w-7 shrink-0 text-accent" />
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg font-semibold text-ink">Visit Us</h3>
              <p className="mt-2 text-base text-ink-muted">537, Bairagipatteda Rd, Tirupati - 517501</p>
              <div className="mt-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-ink-muted" />
                <span className="font-mono-label text-sm font-medium text-ink-muted">10:00 AM - 11:00 PM (Daily)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
