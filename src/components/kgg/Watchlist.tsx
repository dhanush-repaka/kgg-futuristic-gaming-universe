"use client";

import Image from "next/image";
import { whatsappUrl } from "@/lib/venue";

const watchlist = [
  {
    title: "GTA 6",
    blurb: "When it drops, we want the first Tirupati night ready.",
    src: "/games/gta-6.png",
  },
  {
    title: "Marvel Wolverine",
    blurb: "Claws out — ask to be pinged the week it lands.",
    src: "/games/wolverine.png",
  },
] as const;

export default function Watchlist() {
  return (
    <section id="watchlist" className="bg-bg py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <p className="font-mono-label text-[0.7rem] text-ink-muted">Coming soon</p>
        <h2 className="mt-3 max-w-xl font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-tight text-ink">
          Watchlist.
        </h2>
        <p className="mt-4 max-w-lg text-ink-muted">
          Titles we&rsquo;re loading the second they&rsquo;re out. Tap WhatsApp and we&rsquo;ll
          message you when the seat night goes live.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {watchlist.map((game) => {
            const msg = `Hi KGG — add me to the watchlist for ${game.title}. Ping me when it's playable at the lounge.`;
            return (
              <li
                key={game.title}
                className="flex gap-4 overflow-hidden rounded-xl border border-ink/15 bg-surface p-4 sm:p-5"
              >
                <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-md bg-bg ring-1 ring-rule sm:h-32 sm:w-24">
                  <Image
                    src={game.src}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover"
                    quality={75}
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-accent px-1.5 py-1 text-center text-[0.55rem] font-semibold uppercase tracking-wider text-accent-ink">
                    Soon
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="font-display text-xl font-bold text-ink">{game.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{game.blurb}</p>
                  <a
                    href={whatsappUrl(msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex pt-4 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    Notify me on WhatsApp →
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
