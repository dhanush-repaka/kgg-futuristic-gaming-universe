import Image from "next/image";
import Link from "next/link";
import { MAPS, VENUE } from "@/lib/venue";

const stills = [
  {
    src: "/floor/floor-1.jpg",
    alt: "Karthikeya's Games Galaxy storefront on Bairagipatteda Road, Tirupati",
  },
  {
    src: "/floor/floor-2.jpg",
    alt: "Console bays with cloud ceiling lights at KGG",
  },
  {
    src: "/floor/floor-3.jpg",
    alt: "VR and TV gaming room at KGG",
  },
  {
    src: "/floor/floor-4.jpg",
    alt: "Board games room with friends playing chess at KGG",
  },
] as const;

export default function SocialProof() {
  return (
    <section
      id="proof"
      className="border-y border-rule bg-surface py-16 md:py-20"
      aria-label="Social proof"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="max-w-md shrink-0">
          <p className="font-mono-label text-[0.7rem] text-ink-muted">On the floor</p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold tracking-tight text-ink">
            Real nights. Real seats.
          </h2>
          <p className="mt-3 text-ink-muted">{VENUE.proofLine}</p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={MAPS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-semibold text-accent underline-offset-4 transition-colors hover:underline"
            >
              See more on Google Maps →
            </a>
            <a
              href={VENUE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-semibold text-ink underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              @{VENUE.instagramHandle} on Instagram
            </a>
          </div>
        </div>

        <div className="grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
          {stills.map((s) => (
            <a
              key={s.src}
              href={MAPS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[3/4] overflow-hidden rounded-lg bg-bg ring-1 ring-rule transition-opacity hover:opacity-95"
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 640px) 45vw, 180px"
                className="object-cover"
                quality={80}
              />
            </a>
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
