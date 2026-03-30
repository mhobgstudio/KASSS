"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socialLinks = [
  { name: "Twitter", icon: "𝕏", href: "#" },
  { name: "Instagram", icon: "📷", href: "#" },
  { name: "LinkedIn", icon: "💼", href: "#" },
  { name: "YouTube", icon: "▶", href: "#" },
];

const quickLinks = [
  { label: "About KASSS", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Research", href: "#research" },
  { label: "Events", href: "#events" },
  { label: "Publications", href: "#" },
  { label: "Gallery", href: "#" },
];

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative pt-32 pb-12 overflow-hidden">
      {/* Section Divider */}
      <div className="section-divider mb-20" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Contact Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Connect With </span>
            <span className="gradient-text-blue">Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Have questions about our programs, research, or membership?
            We'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-gray-400 text-sm mb-2">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f4c430]/50 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-400 text-sm mb-2">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f4c430]/50 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f4c430]/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">Subject</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#f4c430]/50 transition-colors"
                >
                  <option value="" className="bg-[#0a0a0f]">Select a subject</option>
                  <option value="membership" className="bg-[#0a0a0f]">Membership Inquiry</option>
                  <option value="research" className="bg-[#0a0a0f]">Research Collaboration</option>
                  <option value="events" className="bg-[#0a0a0f]">Events & Workshops</option>
                  <option value="other" className="bg-[#0a0a0f]">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f4c430]/50 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary py-4"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Location Card */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-white font-medium">Department of Physics</p>
                    <p className="text-gray-400 text-sm">
                      College of Science<br />
                      Kwame Nkrumah University of Science and Technology<br />
                      Kumasi, Ghana
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400 text-sm">kasss@knust.edu.gh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400 text-sm">+233 XX XXX XXXX</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-[#f4c430] hover:text-[#0a0a0f] hover:border-[#f4c430] transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/10 pt-12"
        >
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <img src="/logos/kasss-logo.svg" alt="KASSS" className="h-12 w-auto" />
                <div>
                  <h4 className="text-lg font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>KASSS</h4>
                  <p className="text-xs text-gray-500">KNUST Astronomy & Space Science Society</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Pioneering astrophysics education and research in West Africa.
                Join us in exploring the wonders of the universe.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-white font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-[#f4c430] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner Logos */}
            <div>
              <h5 className="text-white font-semibold mb-4">Our Partners</h5>
              <div className="flex flex-wrap gap-4">
                <img src="/logos/knust-logo.png" alt="KNUST" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/logos/college-of-science.png" alt="College of Science" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 KASSS - KNUST Astronomy and Space Science Society. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Made with</span>
              <span className="text-[#f4c430]">★</span>
              <span>for the cosmos</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
