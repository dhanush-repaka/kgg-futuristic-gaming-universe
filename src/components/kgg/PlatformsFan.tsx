"use client";

import { ImageCardFan, type FanCardItem } from "@/components/ui/image-card-fan";

const cards: FanCardItem[] = [
  {
    id: "ps5",
    src: "/videos/scene-04-the-switch-poster.jpg",
    title: "PS5 Zone",
    description:
      "DualSense, 4K HDR bays, GTA V, WWE 2K25 — grab a controller and claim the night.",
  },
  {
    id: "xbox",
    src: "/videos/scene-03-console-reveal-poster.jpg",
    title: "Xbox Series X",
    description:
      "Forza Horizon 5 and Series X power. Same lounge energy, different stick feel.",
  },
  {
    id: "switch",
    src: "/platforms/nintendo-switch.png",
    title: "Nintendo Switch",
    description:
      "Couch multiplayer that actually fits a squad. Light, loud, impossible to leave early.",
  },
  {
    id: "racing",
    src: "/videos/scene-06-behind-the-wheel-poster.jpg",
    title: "Racing Rigs",
    description:
      "Wheel, pedals, cockpit — the closest Tirupati gets to a real grid without leaving town.",
  },
  {
    id: "vr",
    src: "/platforms/meta-quest-vr.png",
    title: "Meta Quest VR",
    description:
      "Guided immersion for 90 minutes. First-timers welcome — leave with a story.",
  },
  {
    id: "board",
    src: "/platforms/board-games.png",
    title: "Board Games",
    description:
      "Chess, checkers, backgammon, and more — slow the night down without killing the vibe.",
  },
];

export default function PlatformsFan() {
  return (
    <section id="platforms" className="bg-bg py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <p className="font-mono-label text-[0.7rem] text-ink-muted">Platforms</p>
        <h2 className="mt-3 max-w-xl font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-tight text-ink">
          Pick your weapon.
        </h2>
        <p className="mt-4 max-w-lg text-ink-muted">
          Flick a card up — that&rsquo;s your night. Consoles, racing, VR, board games. Same floor.
          Zero boredom.
        </p>

        <div className="mt-12 md:mt-16">
          <ImageCardFan cards={cards} className="mx-auto max-w-5xl" />
        </div>
      </div>
    </section>
  );
}
