"use client";

import { useEffect, useState } from "react";
import { getTonightStatus, type TonightStatus } from "@/lib/venue";
import { cn } from "@/lib/utils";

type Variant = "hero" | "badge" | "inline";

export default function TonightSignal({
  variant = "badge",
  onDark = false,
  className,
}: {
  variant?: Variant;
  /** Use on ink / dark chapter backgrounds. */
  onDark?: boolean;
  className?: string;
}) {
  const [status, setStatus] = useState<TonightStatus | null>(null);

  useEffect(() => {
    const tick = () => setStatus(getTonightStatus());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-md border border-voltage/35 bg-voltage/10 px-3 py-1.5 text-xs font-semibold text-voltage",
          className,
        )}
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-voltage" />
        Checking tonight&hellip;
      </span>
    );
  }

  const live = status.kind === "open" || status.kind === "closing";
  const tone = onDark
    ? status.kind === "closed"
      ? "border-white/20 bg-white/10 text-white/70"
      : status.kind === "closing"
        ? "border-accent/50 bg-accent/20 text-accent"
        : "border-voltage/40 bg-voltage/15 text-voltage"
    : status.kind === "closed"
      ? "border-ink/15 bg-surface text-ink-muted"
      : status.kind === "closing"
        ? "border-accent/40 bg-accent/10 text-accent"
        : "border-voltage/35 bg-voltage/10 text-voltage";

  if (variant === "inline") {
    return (
      <p className={cn("text-sm text-ink-muted", className)}>
        <span className="font-semibold text-ink">{status.label}</span>
        <span className="mx-2 text-ink/20">·</span>
        {status.detail}
      </p>
    );
  }

  if (variant === "hero") {
    return (
      <div
        className={cn(
          "inline-flex max-w-full flex-col gap-0.5 rounded-md border px-3 py-2",
          tone,
          className,
        )}
      >
        <span className="inline-flex items-center gap-2 text-xs font-semibold">
          {live ? (
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-current" />
          ) : null}
          {status.label}
        </span>
        <span className="text-[0.7rem] font-medium opacity-80">{status.detail}</span>
      </div>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold",
        tone,
        className,
      )}
    >
      {live ? <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" /> : null}
      {status.label}
    </span>
  );
}
