"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sparkles, Dices, Gift, Calendar, Users, GlassWater } from "lucide-react";
import HolographicCard from "./HolographicCard";

export default function AnnouncementsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="announcements" className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-300 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-300 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-holo rounded-full mb-4 holo-border">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-yellow-600 font-semibold">Special Offers</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 holo-text" style={{ fontWeight: 600, letterSpacing: "-0.01em" }}>
            🎉 Exciting Campaigns
          </h2>
        </motion.div>

        {/* Main Announcement Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <HolographicCard>
            <div className="relative rounded-2xl overflow-hidden border-2 border-red-400/50 bg-gradient-to-br from-red-50/50 via-yellow-50/50 to-orange-50/50 backdrop-blur-sm">
              {/* Animated Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-yellow-400/20 to-orange-400/20"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative p-6 md:p-8">
                {/* Group Mojito Campaign */}
                <div className="mb-6 pb-6 border-b-2 border-green-200/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center shadow-lg"
                      >
                        <Users className="w-10 h-10 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                          🍹 Group of 3+? Free Mojito for Everyone!
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <GlassWater className="w-4 h-4" />
                          <span className="font-semibold text-green-600">Ongoing Promotion</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      🎉 <strong>Bring your friends and enjoy!</strong> When you visit as a <strong className="text-green-600">group of 3 or more</strong>, <strong className="text-emerald-600">everyone in your group gets a FREE mojito!</strong> Perfect for gaming sessions with friends!
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-3 py-2 bg-white/60 rounded-lg backdrop-blur-sm">
                        <Users className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-semibold text-gray-800">Groups of 3+</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-white/60 rounded-lg backdrop-blur-sm">
                        <GlassWater className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-semibold text-gray-800">Free Mojito Each</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dice Roll Challenge */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg"
                      >
                        <Dices className="w-10 h-10 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                          🎲 Dice Roll Challenge
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold text-red-600">Roll a 1, Get 1 Hour FREE!</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Overview Content */}
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      🎮 <strong>End your gaming session with a chance to save!</strong> Roll the dice at checkout—if you get a <strong className="text-red-600">1</strong>, you'll get <strong className="text-yellow-600">1 hour FREE</strong> deducted from your session bill! <strong>Example:</strong> Play 2 hours, roll a 1, pay for only 1 hour!
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-3 py-2 bg-white/60 rounded-lg backdrop-blur-sm">
                        <Gift className="w-5 h-5 text-red-500" />
                        <span className="text-sm font-semibold text-gray-800">Any Platform</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-white/60 rounded-lg backdrop-blur-sm">
                        <Dices className="w-5 h-5 text-yellow-500" />
                        <span className="text-sm font-semibold text-gray-800">One Roll Per Session</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isExpanded ? (
                    <>
                      <span>Show Less</span>
                      <motion.span
                        animate={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        ↑
                      </motion.span>
                    </>
                  ) : (
                    <>
                      <span>Read More Details</span>
                      <motion.span
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ↓
                      </motion.span>
                    </>
                  )}
                </motion.button>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden mt-6"
                    >
                      <div className="pt-6 border-t-2 border-red-200/50 space-y-6">
                        {/* Full Details */}
                        <div className="space-y-4">
                          <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Dices className="w-6 h-6 text-red-500" />
                            How It Works
                          </h4>
                          <div className="space-y-3 text-gray-700">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">1️⃣</span>
                              <p>Complete your gaming session at Karthikeya's Games Galaxy</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">2️⃣</span>
                              <p>At checkout, you'll be given a chance to roll a dice</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">3️⃣</span>
                              <p>If the dice shows <strong className="text-red-600">1</strong>, you win <strong className="text-yellow-600">1 hour FREE</strong>—deducted from your session bill!</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">4️⃣</span>
                              <p><strong>Example:</strong> If you played for 2 hours and roll a 1, you only pay for 1 hour. The free hour is automatically applied to your current session!</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">5️⃣</span>
                              <p>Payment is made at the end of your session, after the dice roll. The discount applies to <strong>any platform</strong>—PS5, Xbox, VR, Nintendo Switch, or PC gaming!</p>
                            </div>
                          </div>
                        </div>

                        {/* Terms & Conditions */}
                        <div className="bg-white/40 rounded-lg p-4 backdrop-blur-sm border border-red-200/50">
                          <h4 className="text-lg font-bold text-gray-900 mb-3">📋 Terms & Conditions</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-red-500 mt-1">•</span>
                              <span>Offer valid <strong>this weekend only</strong> (Saturday & Sunday)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-500 mt-1">•</span>
                              <span>One dice roll per gaming session</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-500 mt-1">•</span>
                              <span>The free hour is <strong>redeemed against your current session payment</strong>—you don't need to pay for that hour!</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-500 mt-1">•</span>
                              <span>Discount applies to any platform—PS5, Xbox, VR, Nintendo Switch, or PC gaming</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-500 mt-1">•</span>
                              <span>Payment is processed at the end of your session, after the dice roll</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-500 mt-1">•</span>
                              <span>Cannot be combined with other offers or discounts</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-500 mt-1">•</span>
                              <span>Management reserves the right to modify or cancel the offer</span>
                            </li>
                          </ul>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center pt-4">
                          <p className="text-lg font-semibold text-gray-800 mb-4">
                            🎉 Don't miss out! Visit us this weekend and roll the dice for your chance to win!
                          </p>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            Book Your Session Now
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-red-400/20 rounded-full blur-xl" />
            </div>
          </HolographicCard>
        </motion.div>
      </div>
    </section>
  );
}

