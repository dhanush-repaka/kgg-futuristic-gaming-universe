"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#games", label: "Games" },
  { href: "#vr", label: "VR" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function KGGNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-base/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="#home" className="group inline-flex items-center gap-3" aria-label="KGG Home">
          <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg ring-1 ring-white/10 transition group-hover:scale-105 group-hover:ring-ember/50">
            <Image src="/kgg-logo.jpeg" alt="" fill sizes="40px" className="object-cover" priority />
          </span>
          <span className="hidden font-display text-sm font-medium tracking-wide text-ink sm:block">
            Karthikeya&apos;s Games Galaxy
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted transition hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/booking"
            className="rounded-full bg-gradient-to-r from-ember to-ember-deep px-6 py-2 text-sm font-semibold text-[#0b0704] transition hover:brightness-110"
          >
            Reserve Session
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-ink transition hover:border-ember/40 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/5 bg-base/95 md:hidden"
          >
            {links.map((link) => (
              <li key={link.label} className="border-b border-white/5 last:border-none">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-4 text-sm font-medium text-muted transition hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
