"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#burn", label: "Why KGG" },
  { href: "#platforms", label: "Platforms" },
  { href: "#lineup", label: "Lineup" },
  { href: "#watchlist", label: "Watchlist" },
  { href: "#pricing", label: "Pricing" },
  { href: "#visit", label: "Visit" },
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
        scrolled
          ? "border-b border-rule bg-bg/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          onClick={(e) => jumpTo(e, "#top")}
          className="flex items-center gap-2.5"
          aria-label="KGG Home"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-md ring-1 ring-rule">
            <Image src="/kgg-logo.jpeg" alt="" fill sizes="32px" className="object-cover" priority />
          </span>
          <span className="hidden font-display text-sm font-bold tracking-tight text-ink sm:block">
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

        <div className="flex items-center gap-3">
          <Link
            href="/booking"
            className="hidden rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Reserve
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-rule text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-rule bg-bg px-5 py-6 md:hidden">
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={(e) => jumpTo(e, l.href)}
                  className="block text-base font-medium text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/booking"
                className="mt-2 inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-ink"
                onClick={() => setOpen(false)}
              >
                Reserve a session
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
