"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowLeft, Check, Navigation } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  MAPS,
  VENUE,
  buildIndiaDateOptions,
  isSlotPast,
  whatsappUrl,
} from "@/lib/venue";
import TonightSignal from "@/components/kgg/TonightSignal";

const PHONE_KEY = "kgg-phone";

const sessionTypes = [
  {
    id: "quick",
    title: "Quick Session",
    price: "₹299 / hour",
    description: "Any 1 console zone, walk-in friendly.",
    defaultParty: 1,
  },
  {
    id: "squad",
    title: "Squad Night",
    price: "₹999 / 3 hours",
    description: "Up to 4 players, console + board games.",
    defaultParty: 4,
  },
  {
    id: "vr",
    title: "VR Signature",
    price: "₹699 / 90 min",
    description: "Guided Meta Quest immersion.",
    defaultParty: 1,
  },
] as const;

const timeSlots = [
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
];

const labelClass = "font-mono-label text-[0.7rem] text-ink-muted";

const fieldClass =
  "h-11 w-full rounded-lg border border-ink/15 bg-surface px-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-accent";

const chipIdle = "border-ink/15 bg-surface text-ink hover:border-ink/30";
const chipActive = "border-accent bg-accent text-accent-ink";

export default function BookingPage() {
  const dateOptions = useMemo(() => buildIndiaDateOptions(10), []);
  const [sessionType, setSessionType] = useState<(typeof sessionTypes)[number]["id"]>("squad");
  const [date, setDate] = useState(dateOptions[0]?.iso ?? "");
  const [time, setTime] = useState("");
  const [partySize, setPartySize] = useState(4);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState(false);
  const [nowTick, setNowTick] = useState(0);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(PHONE_KEY);
      if (saved) setPhone(saved);
    } catch {
      /* ignore */
    }
    const id = window.setInterval(() => setNowTick((n) => n + 1), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const selectedPlan = sessionTypes.find((s) => s.id === sessionType)!;
  const todayIso = dateOptions[0]?.iso;
  const isToday = date === todayIso;

  const availableSlots = useMemo(() => {
    void nowTick;
    if (!isToday) return timeSlots.map((t) => ({ t, past: false }));
    return timeSlots.map((t) => ({ t, past: isSlotPast(t) }));
  }, [isToday, nowTick]);

  useEffect(() => {
    if (!time) return;
    const slot = availableSlots.find((s) => s.t === time);
    if (slot?.past) setTime("");
  }, [availableSlots, time]);

  const canSubmit = name.trim().length > 0 && phone.trim().length >= 10 && date && time;

  const selectSession = (id: (typeof sessionTypes)[number]["id"]) => {
    setSessionType(id);
    const plan = sessionTypes.find((s) => s.id === id)!;
    setPartySize(plan.defaultParty);
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    try {
      window.localStorage.setItem(PHONE_KEY, value);
    } catch {
      /* ignore */
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const message = [
      `Hi KGG, I'd like to reserve a session:`,
      ``,
      `Session: ${selectedPlan.title} (${selectedPlan.price})`,
      `Date: ${date} (IST)`,
      `Time: ${time} IST`,
      `Party size: ${partySize}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      notes.trim() ? `Notes: ${notes.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    setSent(true);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-bg/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/"
            className="group flex items-center gap-3 text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <Link href="/" className="flex items-center gap-2.5" aria-label="KGG Home">
            <span className="relative inline-flex h-8 w-8 overflow-hidden rounded-md ring-1 ring-rule">
              <Image src="/kgg-logo.jpeg" alt="" fill sizes="32px" className="object-cover" />
            </span>
            <span className="hidden font-display text-sm font-bold tracking-tight text-ink sm:block">
              KGG
            </span>
          </Link>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-2xl px-5 py-28 md:px-8 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TonightSignal variant="badge" />
          <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,3.5rem)] font-extrabold tracking-tight text-ink">
            Hold your seat.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
            Pick a plan and slot — we open WhatsApp pre-filled so we can confirm your night. While
            we&rsquo;re open, replies usually land within a few minutes.
          </p>
        </motion.div>

        {!sent ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-10 space-y-7"
          >
            <fieldset>
              <legend className={labelClass}>Session type</legend>
              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {sessionTypes.map((s) => (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => selectSession(s.id)}
                    className={cn(
                      "flex h-[108px] flex-col rounded-xl border p-3.5 text-left transition-colors",
                      sessionType === s.id
                        ? "border-accent bg-surface shadow-[0_0_0_1px_var(--kgg-accent)]"
                        : chipIdle,
                    )}
                  >
                    <p className="font-display text-[0.95rem] font-bold leading-tight text-ink">
                      {s.title}
                    </p>
                    <p className="mt-auto text-[0.7rem] leading-snug text-ink-muted">
                      {s.description}
                    </p>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className={labelClass}>Date (IST)</legend>
              <div className="mt-3 grid grid-cols-5 gap-2">
                {dateOptions.map((d) => (
                  <button
                    type="button"
                    key={d.iso}
                    onClick={() => setDate(d.iso)}
                    className={cn(
                      "flex h-14 w-full flex-col items-center justify-center rounded-lg border transition-colors",
                      date === d.iso ? chipActive : chipIdle,
                    )}
                  >
                    <span
                      className={cn(
                        "text-[0.6rem] font-semibold uppercase tracking-wide",
                        date === d.iso ? "text-accent-ink/85" : "text-ink-muted",
                      )}
                    >
                      {d.isToday ? "Today" : d.weekday}
                    </span>
                    <span className="mt-0.5 text-[0.8rem] font-semibold tabular-nums leading-none">
                      {d.label}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className={labelClass}>Time (IST)</legend>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
                {availableSlots.map(({ t, past }) => (
                  <button
                    type="button"
                    key={t}
                    disabled={past}
                    onClick={() => setTime(t)}
                    className={cn(
                      "flex h-11 items-center justify-center rounded-lg border text-sm font-medium tabular-nums transition-colors",
                      past
                        ? "cursor-not-allowed border-ink/10 bg-bg text-ink-muted/40"
                        : time === t
                          ? chipActive
                          : chipIdle,
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {isToday ? (
                <p className="mt-2 text-xs text-ink-muted">
                  Past times for today (India time) are unavailable.
                </p>
              ) : null}
            </fieldset>

            <div>
              <label className={labelClass}>Party size</label>
              <div className="mt-3 flex h-11 w-full items-center justify-between rounded-lg border border-ink/15 bg-surface px-1.5">
                <button
                  type="button"
                  onClick={() => setPartySize((n) => Math.max(1, n - 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-lg text-ink-muted transition-colors hover:bg-bg hover:text-ink"
                  aria-label="Decrease party size"
                >
                  &minus;
                </button>
                <span className="tabular text-sm font-semibold text-ink">
                  {partySize} {partySize === 1 ? "player" : "players"}
                </span>
                <button
                  type="button"
                  onClick={() => setPartySize((n) => Math.min(8, n + 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-lg text-ink-muted transition-colors hover:bg-bg hover:text-ink"
                  aria-label="Increase party size"
                >
                  +
                </button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className={cn(fieldClass, "mt-3")}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className={cn(fieldClass, "mt-3")}
                />
              </div>
            </div>

            <div>
              <label htmlFor="notes" className={labelClass}>
                Notes <span className="normal-case tracking-normal">(optional)</span>
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Anything we should know?"
                className="mt-3 h-[88px] w-full resize-none rounded-lg border border-ink/15 bg-surface px-4 py-3 text-sm leading-relaxed text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-accent"
              />
            </div>

            <div className="space-y-3 pt-1">
              <button
                type="submit"
                disabled={!canSubmit}
                className="flex h-11 w-full items-center justify-center rounded-lg bg-accent text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue on WhatsApp
              </button>
              <p className="text-xs leading-relaxed text-ink-muted">
                We don&apos;t auto-confirm yet — sending opens WhatsApp with your details, and we
                confirm the slot there.
              </p>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mt-10 rounded-xl border border-ink/15 bg-surface p-8 text-center sm:p-10"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-ink">
              <Check className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold text-ink">
              Almost there — finish on WhatsApp.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Send the pre-filled message and we&apos;ll confirm your{" "}
              {selectedPlan.title.toLowerCase()} on {date} at {time}. While we&apos;re open, replies
              usually land within a few minutes.
            </p>

            <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center rounded-lg bg-accent text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
              >
                Open WhatsApp again
              </a>
              <a
                href={`tel:${VENUE.phoneTel}`}
                className="flex h-11 items-center justify-center gap-2 rounded-lg border border-ink/15 bg-bg text-sm font-semibold text-ink transition-colors hover:border-ink/30"
              >
                <Phone className="h-4 w-4 text-accent" />
                Call us
              </a>
              <a
                href={MAPS.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center gap-2 rounded-lg border border-ink/15 bg-bg text-sm font-semibold text-ink transition-colors hover:border-ink/30 sm:col-span-2"
              >
                <Navigation className="h-4 w-4 text-accent" />
                Get directions
              </a>
            </div>

            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-6 text-xs font-semibold uppercase tracking-widest text-ink-muted underline underline-offset-4 transition-colors hover:text-ink"
            >
              Book another session
            </button>
          </motion.div>
        )}

        <div className="mt-16 grid grid-cols-1 gap-3 border-t border-rule pt-12 sm:grid-cols-2">
          <a
            href={`tel:${VENUE.phoneTel}`}
            className="rounded-xl border border-ink/15 bg-surface p-6 text-left transition-colors hover:border-accent/40"
          >
            <Phone className="h-5 w-5 text-accent" />
            <h3 className="mt-4 font-display text-base font-bold text-ink">Call us</h3>
            <p className="tabular mt-1 text-base font-semibold tracking-tight text-ink">
              {VENUE.phoneDisplay}
            </p>
          </a>
          <a
            href={`mailto:${VENUE.email}`}
            className="rounded-xl border border-ink/15 bg-surface p-6 text-left transition-colors hover:border-accent/40"
          >
            <Mail className="h-5 w-5 text-accent" />
            <h3 className="mt-4 font-display text-base font-bold text-ink">Email us</h3>
            <p className="mt-1 text-base font-semibold tracking-tight text-ink">{VENUE.email}</p>
          </a>
        </div>

        <div className="mt-3 rounded-xl border border-ink/15 bg-surface p-6">
          <div className="flex gap-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-base font-bold text-ink">Visit us</h3>
              <p className="mt-1 text-sm text-ink-muted">{VENUE.addressLine}</p>
              <div className="mt-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-ink-muted" />
                <span className="font-mono-label text-[0.65rem] text-ink-muted">
                  {VENUE.hoursLabel}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={MAPS.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Google Maps
                </a>
                <a
                  href={MAPS.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Apple Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
