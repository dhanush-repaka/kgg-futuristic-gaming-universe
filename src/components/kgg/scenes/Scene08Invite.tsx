"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollVideoSection from "../ScrollVideoSection";

export default function Scene08Invite() {
  return (
    <ScrollVideoSection
      src="/videos/scene-08-the-invite.mp4"
      poster="/videos/scene-08-the-invite-poster.jpg"
      trackVh={140}
      overlay="dark"
    >
      <div className="mx-auto w-full max-w-3xl px-5 text-center md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-ink sm:text-5xl"
        >
          Ready to play?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-mono-label text-sm text-ink-muted"
        >
          Walk in today, 10 AM – 11 PM · Tirupati
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <Link
            href="/booking"
            className="inline-block rounded-md bg-accent px-8 py-4 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
          >
            Reserve Session
          </Link>
        </motion.div>
      </div>
    </ScrollVideoSection>
  );
}
