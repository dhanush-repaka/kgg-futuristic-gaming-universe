"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowLeft, Construction } from "lucide-react";
import Link from "next/link";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <div className="glass-holo border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-purple-700 hover:text-purple-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold holo-text">Book Your Gaming Session</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-holo rounded-2xl p-8 lg:p-12 holo-border text-center"
        >
          {/* Construction Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-purple-400 rounded-full blur-2xl opacity-50 animate-pulse" />
              <Construction className="w-20 h-20 text-purple-600 relative z-10" />
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4 holo-text">
            Booking System Under Development
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're currently working on our online booking functionality. 
            In the meantime, please contact us directly to book your gaming session!
          </p>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.a
              href="tel:+917702528817"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="glass-holo rounded-xl p-6 holo-border group"
            >
              <Phone className="w-8 h-8 text-purple-600 mb-3 mx-auto group-hover:animate-float" />
              <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-purple-600 font-medium">+91 77025 28817</p>
              <p className="text-sm text-gray-600 mt-1">Available 24/7</p>
            </motion.a>

            <motion.a
              href="mailto:info@kgg.com"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="glass-holo rounded-xl p-6 holo-border group"
            >
              <Mail className="w-8 h-8 text-purple-600 mb-3 mx-auto group-hover:animate-float" />
              <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-purple-600 font-medium">info@kgg.com</p>
              <p className="text-sm text-gray-600 mt-1">Quick Response</p>
            </motion.a>
          </div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-holo rounded-xl p-6 mb-8 holo-border"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="font-semibold text-gray-800 mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  537, BAIRAGIPATTEDA RD, TIRUPATI - 517501
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-600">10:00 AM - 11:00 PM (Daily)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+917702528817"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 holo-border rounded-full font-semibold text-lg text-purple-700 chrome-effect"
            >
              Call Now to Book
            </motion.a>
            <motion.a
              href="/#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-holo rounded-full font-semibold text-lg text-purple-700"
            >
              View Location
            </motion.a>
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-sm text-gray-500 mt-8"
          >
            We apologize for any inconvenience. Our online booking system will be available soon!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
