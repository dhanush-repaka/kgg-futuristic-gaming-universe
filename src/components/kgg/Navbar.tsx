"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#platforms", label: "Platforms" },
  { href: "#vr", label: "VR" },
  { href: "#racing", label: "Racing" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // next/link's client-side router doesn't reliably scroll for same-page
  // hash targets (it can update nothing at all if it doesn't see a route
  // change). Plain anchors + an explicit scrollIntoView are the reliable
  // path here — click-triggered, so it doesn't fight the wheel-driven
  // video-scrub listeners the way global CSS scroll-behavior:smooth did.
  const jumpTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
    setOpen(false);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-rule bg-bg/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" onClick={(e) => jumpTo(e, "#top")} className="flex items-center gap-2.5" aria-label="KGG Home">
          <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-md ring-1 ring-rule">
            <Image src="/kgg-logo.jpeg" alt="" fill sizes="32px" className="object-cover" priority />
          </span>
          <span className="hidden font-mono-label text-xs font-medium tracking-[0.14em] text-ink uppercase sm:block">
            KGG
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={(e) => jumpTo(e, l.href)}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/booking"
            className="hidden rounded-md bg-accent px-5 py-2 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90 sm:inline-block"
          >
            Reserve
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-rule text-ink md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-rule bg-bg/95 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <li key={l.label} className="border-b border-rule last:border-none">
              <a
                href={l.href}
                onClick={(e) => jumpTo(e, l.href)}
                className="block px-5 py-3 text-sm font-medium text-ink-muted hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="p-3">
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-ink"
            >
              Reserve a session
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
