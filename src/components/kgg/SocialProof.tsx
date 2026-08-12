import Image from "next/image";
import Link from "next/link";
import { VENUE } from "@/lib/venue";

const stills = [
  { src: "/platforms/nintendo-switch.png", alt: "Nintendo Switch nights at KGG" },
  { src: "/platforms/meta-quest-vr.png", alt: "Meta Quest VR at KGG" },
  { src: "/games/gran-turismo-7.png", alt: "Racing nights at KGG" },
] as const;

export default function SocialProof() {
  return (
    <section
      id="proof"
      className="border-y border-rule bg-surface py-16 md:py-20"
      aria-label="Social proof"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="max-w-md">
          <p className="font-mono-label text-[0.7rem] text-ink-muted">On the floor</p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold tracking-tight text-ink">
            Real nights. Real seats.
          </h2>
          <p className="mt-3 text-ink-muted">{VENUE.proofLine}</p>
          <a
            href={VENUE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex text-sm font-semibold text-accent underline-offset-4 transition-colors hover:underline"
          >
            @{VENUE.instagramHandle} on Instagram
          </a>
        </div>

        <div className="grid w-full max-w-lg grid-cols-3 gap-3">
          {stills.map((s) => (
            <div
              key={s.src}
              className="relative aspect-[3/4] overflow-hidden rounded-lg bg-bg ring-1 ring-rule"
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 768px) 30vw, 160px"
                className="object-cover"
                quality={75}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-6xl justify-start px-5 md:px-8">
        <Link
          href="/booking"
          className="text-sm font-semibold text-ink underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          Hold a seat for tonight →
        </Link>
      </div>
    </section>
  );
}
