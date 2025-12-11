"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";
import FuturisticHeader from "./FuturisticHeader";

export default function LocationBooking() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "537, BAIRAGIPATTEDA RD, TIRUPATI - 517501",
      color: "from-pink-400 to-rose-400",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "10:00 AM - 11:00 PM (Daily)",
      color: "from-cyan-400 to-blue-400",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 77025 28817",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@kgg.com",
      color: "from-blue-400 to-cyan-400",
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-300 via-purple-300 to-pink-300"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-400/30 via-pink-400/20 to-cyan-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <FuturisticHeader subtitle="Get In Touch">
          Visit Us
        </FuturisticHeader>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl text-gray-600 text-center mb-12 mt-4"
        >
          Your next gaming adventure awaits
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] rounded-2xl overflow-hidden glass-holo holo-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.1234567890!2d79.4236624!3d13.6183836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4bd146e9d125%3A0xa8a85c11527383ef!2sKarthikeya%27s%20Games%20Galaxy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
              title="Karthikeya's Games Galaxy Location"
            />
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="glass-holo rounded-xl p-6 flex items-start gap-4 cursor-pointer group"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} chrome-effect group-hover:animate-float`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">{info.title}</h3>
                    {info.title === "Phone" ? (
                      <a href={`tel:${info.content.replace(/\s/g, '')}`} className="text-gray-600 hover:text-purple-600 transition-colors">
                        {info.content}
                      </a>
                    ) : info.title === "Email" ? (
                      <a href={`mailto:${info.content}`} className="text-gray-600 hover:text-purple-600 transition-colors">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-holo rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, color: "from-pink-400 to-purple-400" },
                  { icon: Facebook, color: "from-blue-400 to-cyan-400" },
                ].map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.icon === Instagram ? "https://instagram.com" : "https://facebook.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-lg bg-gradient-to-br ${social.color} chrome-effect`}
                    >
                      <SocialIcon className="w-6 h-6 text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = '/booking';
              }}
              className="w-full px-8 py-4 holo-border rounded-full font-semibold text-lg text-purple-700 chrome-effect"
            >
              Book Your Session Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}