import Image from "next/image";
import Link from "next/link";
import { MAPS, VENUE } from "@/lib/venue";

export default function StoryFooter() {
  return (
    <footer id="contact" className="border-t border-rule bg-bg">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-9 w-9 overflow-hidden rounded-md ring-1 ring-rule">
              <Image src="/kgg-logo.jpeg" alt="" fill sizes="36px" className="object-cover" />
            </span>
            <h3 className="font-display text-lg font-bold text-ink">
              Karthikeya&rsquo;s Games Galaxy
            </h3>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            Don&rsquo;t be bored, get on-board — a walk-in gaming lounge for console, racing, and VR
            sessions.
          </p>
          <a
            href={VENUE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            @{VENUE.instagramHandle}
          </a>
        </div>

        <div>
          <h4 className="font-mono-label text-[0.7rem] text-ink-muted">Navigate</h4>
          <ul className="mt-6 space-y-3 text-sm text-ink-muted">
            <li>
              <a href="#platforms" className="transition-colors hover:text-ink">
                Platforms
              </a>
            </li>
            <li>
              <a href="#lineup" className="transition-colors hover:text-ink">
                Lineup
              </a>
            </li>
            <li>
              <a href="#watchlist" className="transition-colors hover:text-ink">
                Watchlist
              </a>
            </li>
            <li>
              <a href="#pricing" className="transition-colors hover:text-ink">
                Pricing
              </a>
            </li>
            <li>
              <Link href="/booking" className="transition-colors hover:text-ink">
                Reserve
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono-label text-[0.7rem] text-ink-muted">Visit</h4>
          <ul className="mt-6 space-y-3 text-sm text-ink-muted">
            <li>
              <a href={`tel:${VENUE.phoneTel}`} className="transition-colors hover:text-ink">
                {VENUE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${VENUE.email}`} className="transition-colors hover:text-ink">
                {VENUE.email}
              </a>
            </li>
            <li>{VENUE.addressLine}</li>
            <li className="font-mono-label text-[0.7rem]">{VENUE.hoursLabel}</li>
            <li className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
              <a
                href={MAPS.google}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink transition-colors hover:text-accent"
              >
                Google Maps
              </a>
              <a
                href={MAPS.apple}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink transition-colors hover:text-accent"
              >
                Apple Maps
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rule py-6 text-center font-mono-label text-[0.7rem] text-ink-muted">
        &copy; {new Date().getFullYear()} Karthikeya&rsquo;s Games Galaxy. All rights reserved.
      </div>
    </footer>
  );
}
