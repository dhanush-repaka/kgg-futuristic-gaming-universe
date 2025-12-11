"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Gamepad2 } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Games", "VR Cricket", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-holo backdrop-blur-lg border-b border-purple-200/30 shadow-[0_8px_32px_rgba(168,85,247,0.1)]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="relative h-10 w-10 lg:h-12 lg:w-12">
                <Image
                  src="/kgg-logo.jpeg"
                  alt="Karthikeya's Games Galaxy"
                  fill
                  className="rounded-md border border-purple-300/30 shadow-lg object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl lg:text-2xl font-extrabold holo-text tracking-wide">Games Galaxy</span>
                <span className="text-[10px] lg:text-xs text-purple-600 font-semibold uppercase tracking-widest">Karthikeya</span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => {
                const getHref = (item: string) => {
                  const map: Record<string, string> = {
                    'Home': '#home',
                    'Games': '#games',
                    'VR Cricket': '#vr-cricket',
                    'Contact': '#contact',
                  };
                  return map[item] || `#${item.toLowerCase().replace(" ", "-")}`;
                };
                return (
                  <motion.a
                    key={item}
                    href={getHref(item)}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = getHref(item).substring(1);
                      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group"
                  >
                    {item}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                );
              })}
              
              <motion.a
                href="/booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 holo-border rounded-full font-semibold text-sm text-purple-700 chrome-effect inline-block"
              >
                Book Now
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glass-holo"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-40 w-full sm:w-80 glass-holo backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
              {navItems.map((item, index) => {
                const getHref = (item: string) => {
                  const map: Record<string, string> = {
                    'Home': '#home',
                    'Games': '#games',
                    'VR Cricket': '#vr-cricket',
                    'Contact': '#contact',
                  };
                  return map[item] || `#${item.toLowerCase().replace(" ", "-")}`;
                };
                return (
                  <motion.a
                    key={item}
                    href={getHref(item)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      const targetId = getHref(item).substring(1);
                      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-2xl font-semibold text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    {item}
                  </motion.a>
                );
              })}
              
              <motion.a
                href="/booking"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-3 holo-border rounded-full font-semibold text-purple-700 chrome-effect inline-block"
              >
                Book Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}