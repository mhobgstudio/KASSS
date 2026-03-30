"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute w-[600px] h-[600px] border border-[#f4c430]/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute w-[800px] h-[800px] border border-[#00d4ff]/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute w-[1000px] h-[1000px] border border-[#f4c430]/5 rounded-full"
        />

        {/* Orbiting Planet */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute w-[500px] h-[500px]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#f4c430] to-[#ff6b35] shadow-lg shadow-[#f4c430]/50" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
      >
        {/* Logo Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center items-center gap-6 mb-8"
        >
          <img
            src="/logos/kasss-logo.svg"
            alt="KASSS"
            className="h-20 md:h-28 w-auto"
          />
        </motion.div>

        {/* Main Title with Fellou-style highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">Explore the </span>
            <span className="gradient-text">Universe</span>
            <br />
            <span className="text-white">with </span>
            <span className="highlight-box">KNUST</span>
            <span className="text-white"> Astrophysics</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-subtitle text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-4"
        >
          Discover, <span className="highlight-box-blue text-[#00d4ff]">research</span>, and <span className="highlight-box text-[#f4c430]">innovate</span> — KASSS is Ghana's premier
          astronomy and space science society where curiosity meets cosmic discovery.
        </motion.p>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center gap-2 mb-10 text-gray-500"
        >
          <span className="text-sm">The Stars Are Closer Than You Think</span>
          <div className="flex gap-1">
            <span className="text-[#f4c430]">★</span>
            <span className="text-[#f4c430]">★</span>
            <span className="text-[#f4c430]">★</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="btn-primary text-base"
          >
            Join Our Society
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="btn-secondary text-base"
          >
            Explore Programs
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "500+", label: "Members" },
            { value: "50+", label: "Research Projects" },
            { value: "30+", label: "Events/Year" },
            { value: "10+", label: "Partnerships" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs tracking-widest">SCROLL TO EXPLORE</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1.5 h-1.5 bg-[#f4c430] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
