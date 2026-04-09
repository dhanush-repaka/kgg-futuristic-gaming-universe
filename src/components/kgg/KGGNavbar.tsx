"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#games", label: "Games" },
  { href: "#vr", label: "VR" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function KGGNavbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl"
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="#home" className="group inline-flex items-center gap-3" aria-label="KGG Home">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-xs font-bold text-black transition group-hover:scale-105">
            KGG
          </span>
          <span className="hidden text-sm font-medium tracking-wide text-white sm:block">
            Karthikeya&apos;s Games Galaxy
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-400 transition hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/booking"
          className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition hover:bg-slate-200"
        >
          Book Now
        </Link>
      </nav>
    </motion.header>
  );
}
