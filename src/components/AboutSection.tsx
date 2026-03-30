"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🔭",
    title: "Astronomical Observations",
    description: "Access to state-of-the-art telescopes and observation equipment for hands-on learning and research.",
  },
  {
    icon: "🚀",
    title: "Space Research",
    description: "Engage in cutting-edge research projects exploring galaxies, black holes, and cosmic phenomena.",
  },
  {
    icon: "📚",
    title: "Academic Excellence",
    description: "Learn from world-class faculty and access comprehensive astrophysics curriculum.",
  },
  {
    icon: "🌍",
    title: "Global Network",
    description: "Connect with international space agencies, observatories, and research institutions.",
  },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0a2e]/30 to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#f4c430] text-sm font-semibold tracking-widest uppercase mb-4 block">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Pioneering </span>
            <span className="gradient-text">Astrophysics</span>
            <br />
            <span className="text-white">in West Africa</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            KNUST Astronomy and Space Science Society (KASSS) is dedicated to advancing
            astronomical knowledge and inspiring the next generation of space scientists in Ghana.
          </p>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20"
        >
          <div className="glass p-4 rounded-xl">
            <img
              src="/logos/knust-logo.png"
              alt="KNUST"
              className="h-16 md:h-20 w-auto"
            />
          </div>
          <div className="glass p-4 rounded-xl">
            <img
              src="/logos/college-of-science.png"
              alt="College of Science"
              className="h-16 md:h-20 w-auto"
            />
          </div>
          <div className="glass p-4 rounded-xl">
            <img
              src="/logos/kasss-logo.svg"
              alt="KASSS"
              className="h-16 md:h-20 w-auto"
            />
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass card-hover rounded-2xl p-6 text-center"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                className="text-4xl mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#f4c430]/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#00d4ff]/20 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Our <span className="gradient-text">Mission</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                To foster scientific curiosity, promote astronomical research, and build a
                community of passionate space enthusiasts who will lead Ghana's advancement
                in space science and technology.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#f4c430]/10 text-[#f4c430] rounded-full text-sm border border-[#f4c430]/30">
                  Research
                </span>
                <span className="px-4 py-2 bg-[#00d4ff]/10 text-[#00d4ff] rounded-full text-sm border border-[#00d4ff]/30">
                  Education
                </span>
                <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm border border-white/30">
                  Innovation
                </span>
              </div>
            </div>
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="inline-block"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 relative">
                  <div className="absolute inset-0 border-2 border-dashed border-[#f4c430]/30 rounded-full" />
                  <div className="absolute inset-4 border-2 border-dashed border-[#00d4ff]/30 rounded-full" />
                  <div className="absolute inset-8 border-2 border-dashed border-white/20 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">🌌</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
