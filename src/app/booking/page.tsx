"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Minimalist3DCanvas from "@/components/kgg/Minimalist3DCanvas";

export default function BookingPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-black text-white selection:bg-white/30 perspective-1000">
      <Minimalist3DCanvas />
      
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center px-5 py-4 md:px-8">
          <Link href="/" className="group flex items-center gap-3 text-slate-300 transition hover:text-white">
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-32 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md transform-style-3d md:p-16"
        >
          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
            Contact Us
          </h1>
          
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Our online booking system is currently being upgraded for a better experience. 
            In the meantime, please reach out to us directly to reserve your session.
          </p>

          {/* Contact Information */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.a
              href="tel:+917702528817"
              whileHover={{ scale: 1.02, z: 20 }}
              className="group rounded-2xl border border-white/10 bg-black/40 p-8 text-left transition-colors hover:bg-white/10"
            >
              <Phone className="h-8 w-8 text-white" />
              <h3 className="mt-6 text-xl font-medium text-white">Call Us</h3>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-200">+91 77025 28817</p>
              <p className="mt-2 text-sm text-slate-400">Available all day</p>
            </motion.a>

            <motion.a
              href="mailto:connect@kgg.lounge"
              whileHover={{ scale: 1.02, z: 20 }}
              className="group rounded-2xl border border-white/10 bg-black/40 p-8 text-left transition-colors hover:bg-white/10"
            >
              <Mail className="h-8 w-8 text-white" />
              <h3 className="mt-6 text-xl font-medium text-white">Email Us</h3>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-200">connect@kgg.lounge</p>
              <p className="mt-2 text-sm text-slate-400">Usually responds within hours</p>
            </motion.a>
          </div>

          {/* Location Info */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-8 text-left">
            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              <MapPin className="h-8 w-8 shrink-0 text-white" />
              <div className="mt-4 md:mt-0">
                <h3 className="text-xl font-medium text-white">Visit Us</h3>
                <p className="mt-2 text-lg text-slate-300">
                  537, Bairagipatteda Rd, Tirupati - 517501
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-400">10:00 AM - 11:00 PM (Daily)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
