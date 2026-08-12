/** Shared venue + booking constants for KGG. */

export const VENUE = {
  name: "Karthikeya's Games Galaxy",
  shortName: "KGG",
  tagline: "Don't be bored, get on-board!",
  phoneDisplay: "+91 77025 28817",
  phoneTel: "+917702528817",
  whatsapp: "917702528817",
  email: "connect@kgg.lounge",
  addressLine: "537, Bairagipatteda Rd, Tirupati - 517501",
  addressShort: "537, Bairagipatteda Rd, Tirupati",
  city: "Tirupati",
  /** India Standard Time — lounge clock, not the visitor's device TZ. */
  timeZone: "Asia/Kolkata",
  hoursLabel: "10:00 AM – 11:00 PM IST · daily",
  openHour: 10,
  closeHour: 23,
  /** Soft social proof — no invented session counts. */
  proofLine: "Squads and walk-ins every night · Tirupati",
  instagramHandle: "kgg.lounge",
  instagramUrl: "https://www.instagram.com/kgg.lounge/",
} as const;

const mapsQuery = encodeURIComponent(
  "Karthikeya's Games Galaxy, 537 Bairagipatteda Rd, Tirupati 517501",
);

export const MAPS = {
  google: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  apple: `http://maps.apple.com/?q=${mapsQuery}`,
} as const;

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${VENUE.whatsapp}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

/** Parts of "now" in India Standard Time (Asia/Kolkata). */
export function getIndiaNow(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-IN", {
    timeZone: VENUE.timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    hourCycle: "h23",
  }).formatToParts(now);

  const pick = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const year = Number(pick("year"));
  const month = Number(pick("month"));
  const day = Number(pick("day"));
  let hour = Number(pick("hour"));
  const minute = Number(pick("minute"));
  // Some engines emit "24" for midnight under h23 — normalize.
  if (hour === 24) hour = 0;

  return {
    year,
    month,
    day,
    hour,
    minute,
    weekday: pick("weekday"),
    minutesOfDay: hour * 60 + minute,
    isoDate: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
  };
}

/** Calendar dates for booking chips, always starting from "today" in IST. */
export function buildIndiaDateOptions(count = 10, now = new Date()) {
  const india = getIndiaNow(now);
  // Noon UTC on the IST civil date avoids DST edge cases (IST has none)
  // and keeps weekday math stable when we add days.
  const startUtc = Date.UTC(india.year, india.month - 1, india.day, 12, 0, 0);

  return Array.from({ length: count }, (_, i) => {
    const ms = startUtc + i * 86_400_000;
    const d = new Date(ms);
    const weekday = new Intl.DateTimeFormat("en-IN", {
      timeZone: "UTC",
      weekday: "short",
    }).format(d);
    const label = new Intl.DateTimeFormat("en-IN", {
      timeZone: "UTC",
      day: "numeric",
      month: "short",
    }).format(d);
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, "0");
    const day = String(d.getUTCDate()).padStart(2, "0");
    return {
      iso: `${y}-${m}-${day}`,
      weekday,
      label,
      isToday: i === 0,
    };
  });
}

export type TonightStatus =
  | { kind: "open"; minutesLeft: number; label: string; detail: string }
  | { kind: "closing"; minutesLeft: number; label: string; detail: string }
  | { kind: "closed"; label: string; detail: string }
  | { kind: "before_open"; label: string; detail: string };

/** Live open/close signal from lounge hours in IST. */
export function getTonightStatus(now = new Date()): TonightStatus {
  const { minutesOfDay: minutes } = getIndiaNow(now);
  const openAt = VENUE.openHour * 60;
  const closeAt = VENUE.closeHour * 60;

  if (minutes < openAt) {
    return {
      kind: "before_open",
      label: "Opens at 10:00 AM IST",
      detail: "Walk-ins welcome once doors open",
    };
  }

  if (minutes >= closeAt) {
    return {
      kind: "closed",
      label: "Closed for tonight",
      detail: "Opens 10:00 AM IST tomorrow · reserve ahead",
    };
  }

  const minutesLeft = closeAt - minutes;
  const hoursLeft = Math.floor(minutesLeft / 60);
  const mins = minutesLeft % 60;

  if (minutesLeft <= 90) {
    return {
      kind: "closing",
      minutesLeft,
      label: mins === 0 ? `${hoursLeft}h until close` : `${hoursLeft}h ${mins}m until close`,
      detail: "Last walk-ins · reserve to lock a seat · IST",
    };
  }

  const leftLabel =
    mins === 0 ? `${hoursLeft}h left tonight` : `${hoursLeft}h ${mins}m left tonight`;

  return {
    kind: "open",
    minutesLeft,
    label: leftLabel,
    detail: "Walk-ins until 11:00 PM IST · reserve for a guaranteed seat",
  };
}

/** Parse "10:00 AM" style slots to minutes from midnight. */
export function slotToMinutes(slot: string): number {
  const match = slot.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return 0;
  let h = Number(match[1]);
  const m = Number(match[2]);
  const ap = match[3].toUpperCase();
  if (ap === "PM" && h !== 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  return h * 60 + m;
}

/** Whether a slot has already passed for "today" in IST. */
export function isSlotPast(slot: string, now = new Date()): boolean {
  return slotToMinutes(slot) <= getIndiaNow(now).minutesOfDay;
}
