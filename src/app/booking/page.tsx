"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Minimalist3DCanvas from "@/components/kgg/Minimalist3DCanvas";

export default function BookingPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-base text-ink selection:bg-ember/20 perspective-1000">
      <Minimalist3DCanvas />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-ink/8 bg-base/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center px-5 py-4 md:px-8">
          <Link href="/" className="group flex items-center gap-3 text-muted transition hover:text-ink">
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-32 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hud-frame relative overflow-hidden rounded-3xl border border-ink/8 bg-surface p-10 text-center transform-style-3d md:p-16"
        >
          <div className="hud-c2" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_15%_0%,rgba(201,124,61,0.07),transparent_60%)]" />
          <span className="relative font-mono text-xs font-medium uppercase tracking-[0.14em] text-ember-deep">
            Reserve Session
          </span>
          <h1 className="relative mt-4 font-display text-5xl font-semibold tracking-tight text-ink md:text-6xl">
            Contact Us
          </h1>

          <p className="relative mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Our online booking system is currently being upgraded for a better experience.
            In the meantime, please reach out to us directly to reserve your session.
          </p>

          {/* Contact Information */}
          <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.a
              href="tel:+917702528817"
              whileHover={{ scale: 1.02 }}
              className="hud-frame group rounded-2xl border border-ink/8 bg-surface-2 p-8 text-left transition-colors"
            >
              <div className="hud-c2" />
              <Phone className="h-8 w-8 text-ember-deep" />
              <h3 className="mt-6 font-display text-xl font-medium text-ink">Call Us</h3>
              <p className="tabular mt-2 font-mono text-2xl font-semibold tracking-tight text-ink">+91 77025 28817</p>
              <p className="mt-2 text-sm text-muted">Available all day</p>
            </motion.a>

            <motion.a
              href="mailto:connect@kgg.lounge"
              whileHover={{ scale: 1.02 }}
              className="hud-frame group rounded-2xl border border-ink/8 bg-surface-2 p-8 text-left transition-colors"
            >
              <div className="hud-c2" />
              <Mail className="h-8 w-8 text-ember-deep" />
              <h3 className="mt-6 font-display text-xl font-medium text-ink">Email Us</h3>
              <p className="mt-2 font-mono text-xl font-semibold tracking-tight text-ink">connect@kgg.lounge</p>
              <p className="mt-2 text-sm text-muted">Usually responds within hours</p>
            </motion.a>
          </div>

          {/* Location Info */}
          <div className="hud-frame relative mt-6 rounded-2xl border border-ink/8 bg-surface-2 p-8 text-left">
            <div className="hud-c2" />
            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              <MapPin className="h-8 w-8 shrink-0 text-ember-deep" />
              <div className="mt-4 md:mt-0">
                <h3 className="font-display text-xl font-medium text-ink">Visit Us</h3>
                <p className="mt-2 text-lg text-muted">
                  537, Bairagipatteda Rd, Tirupati - 517501
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-2" />
                  <span className="font-mono text-sm font-medium text-muted-2">10:00 AM - 11:00 PM (Daily)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
