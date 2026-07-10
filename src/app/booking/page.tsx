"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import Minimalist3DCanvas from "@/components/kgg/Minimalist3DCanvas";

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
    <div className="relative min-h-screen overflow-x-clip bg-base text-ink selection:bg-ember/20 perspective-1000">
      <Minimalist3DCanvas />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-ink/8 bg-base/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center px-5 py-4 md:px-8">
          <Link href="/" className="group flex items-center gap-3 text-muted transition hover:text-ink">
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 py-32 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ember-deep">
            Reserve Session
          </span>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-ink md:text-6xl">
            Book your slot.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Fill in your details and we&apos;ll open WhatsApp with everything pre-filled &mdash;
            send it and we&apos;ll confirm your slot directly.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-12 space-y-10"
            >
              {/* Session type */}
              <div>
                <label className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
                  Session Type
                </label>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {sessionTypes.map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSessionType(s.id)}
                      className={`rounded-xl border p-5 text-left transition ${
                        sessionType === s.id
                          ? "border-ember bg-surface-2 shadow-[0_10px_24px_-16px_rgba(143,84,35,0.4)]"
                          : "border-ink/8 bg-surface hover:border-ink/20"
                      }`}
                    >
                      <p className="font-display text-lg font-medium text-ink">{s.title}</p>
                      <p className="tabular mt-1 font-mono text-sm text-ember-deep">{s.price}</p>
                      <p className="mt-2 text-xs leading-relaxed text-muted">{s.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & time */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="date" className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="mt-3 w-full rounded-md border border-ink/12 bg-surface px-4 py-3 text-sm text-ink outline-none transition focus:border-ember/50"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
                    Time
                  </label>
                  <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className="mt-3 w-full rounded-md border border-ink/12 bg-surface px-4 py-3 text-sm text-ink outline-none transition focus:border-ember/50"
                  >
                    <option value="" disabled>Select a slot</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Party size */}
              <div>
                <label htmlFor="party" className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
                  Party Size
                </label>
                <div className="mt-3 inline-flex items-center gap-4 rounded-md border border-ink/12 bg-surface px-4 py-2">
                  <button
                    type="button"
                    onClick={() => setPartySize((n) => Math.max(1, n - 1))}
                    className="text-lg text-muted transition hover:text-ink"
                    aria-label="Decrease party size"
                  >
                    &minus;
                  </button>
                  <span className="tabular w-6 text-center font-mono text-sm text-ink">{partySize}</span>
                  <button
                    type="button"
                    onClick={() => setPartySize((n) => Math.min(8, n + 1))}
                    className="text-lg text-muted transition hover:text-ink"
                    aria-label="Increase party size"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Contact */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="mt-3 w-full rounded-md border border-ink/12 bg-surface px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted-2 focus:border-ember/50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="mt-3 w-full rounded-md border border-ink/12 bg-surface px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted-2 focus:border-ember/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
                  Notes <span className="normal-case text-muted-2">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Anything we should know?"
                  className="mt-3 w-full resize-none rounded-md border border-ink/12 bg-surface px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted-2 focus:border-ember/50"
                />
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full rounded-md bg-ember px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(143,84,35,0.5)] transition hover:bg-ember-deep hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 sm:w-auto"
              >
                Continue on WhatsApp
              </button>
              <p className="text-xs text-muted-2">
                We don&apos;t auto-confirm bookings yet &mdash; sending opens WhatsApp with your
                details filled in, and we&apos;ll confirm the slot with you there.
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-12 rounded-2xl border border-ink/8 bg-surface-2 p-10 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ember text-white">
                <Check className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-display text-2xl font-medium text-ink">Request sent to WhatsApp.</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Finish sending the pre-filled message over there and we&apos;ll confirm your{" "}
                {selectedPlan.title.toLowerCase()} slot on {date} at {time}. Didn&apos;t open?{" "}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ember-deep underline underline-offset-2"
                >
                  Open WhatsApp manually
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-xs font-medium uppercase tracking-widest text-muted-2 underline underline-offset-4 transition hover:text-ink"
              >
                Book another session
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fallback contact */}
        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-ink/8 pt-12 md:grid-cols-2">
          <a
            href="tel:+917702528817"
            className="group rounded-2xl border border-ink/8 bg-surface p-8 text-left transition hover:border-ember/30 hover:-translate-y-0.5"
          >
            <Phone className="h-7 w-7 text-ember-deep" />
            <h3 className="mt-5 font-display text-lg font-medium text-ink">Call Us</h3>
            <p className="tabular mt-2 font-mono text-xl font-semibold tracking-tight text-ink">+91 77025 28817</p>
          </a>
          <a
            href="mailto:connect@kgg.lounge"
            className="group rounded-2xl border border-ink/8 bg-surface p-8 text-left transition hover:border-ember/30 hover:-translate-y-0.5"
          >
            <Mail className="h-7 w-7 text-ember-deep" />
            <h3 className="mt-5 font-display text-lg font-medium text-ink">Email Us</h3>
            <p className="mt-2 font-mono text-lg font-semibold tracking-tight text-ink">connect@kgg.lounge</p>
          </a>
        </div>

        <div className="mt-6 rounded-2xl border border-ink/8 bg-surface p-8">
          <div className="flex flex-col md:flex-row md:items-start md:gap-6">
            <MapPin className="h-7 w-7 shrink-0 text-ember-deep" />
            <div className="mt-4 md:mt-0">
              <h3 className="font-display text-lg font-medium text-ink">Visit Us</h3>
              <p className="mt-2 text-base text-muted">537, Bairagipatteda Rd, Tirupati - 517501</p>
              <div className="mt-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-muted-2" />
                <span className="font-mono text-sm font-medium text-muted-2">10:00 AM - 11:00 PM (Daily)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
