"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const researchAreas = [
  {
    title: "Stellar Evolution",
    description: "Studying the life cycles of stars, from formation to supernovae and beyond.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800",
    stats: { papers: 45, projects: 8 },
  },
  {
    title: "Galactic Dynamics",
    description: "Exploring the structure, formation, and evolution of galaxies across the universe.",
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800",
    stats: { papers: 32, projects: 5 },
  },
  {
    title: "Cosmology",
    description: "Investigating the origin, evolution, and ultimate fate of the universe.",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800",
    stats: { papers: 28, projects: 6 },
  },
  {
    title: "Exoplanet Discovery",
    description: "Searching for and characterizing planets orbiting stars beyond our solar system.",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800",
    stats: { papers: 19, projects: 4 },
  },
];

const publications = [
  { title: "Dark Matter Distribution in Local Group Galaxies", journal: "Nature Astronomy", year: 2024 },
  { title: "Stellar Population Analysis of NGC 1234", journal: "Astrophysical Journal", year: 2024 },
  { title: "Radio Emission from Active Galactic Nuclei", journal: "Monthly Notices RAS", year: 2023 },
];

export function ResearchSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="research" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Section Divider */}
      <div className="section-divider mb-20" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#f4c430] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Research Excellence
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Pushing the </span>
            <span className="gradient-text">Boundaries</span>
            <br />
            <span className="text-white">of Knowledge</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our research spans the entire cosmos, from nearby stars to the most distant galaxies,
            contributing to humanity's understanding of the universe.
          </p>
        </motion.div>

        {/* Research Areas - Horizontal Scroll Effect */}
        <motion.div style={{ x }} className="mb-20">
          <div className="flex gap-6 pb-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="min-w-[320px] md:min-w-[400px] glass rounded-3xl overflow-hidden card-hover group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{area.description}</p>

                  {/* Stats */}
                  <div className="flex gap-6">
                    <div>
                      <span className="text-2xl font-bold gradient-text">{area.stats.papers}</span>
                      <p className="text-xs text-gray-500">Publications</p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold gradient-text-blue">{area.stats.projects}</span>
                      <p className="text-xs text-gray-500">Active Projects</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Publications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Recent Publications</h3>
              <p className="text-gray-400">Our latest contributions to astronomical research</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="btn-secondary whitespace-nowrap"
            >
              View All Publications
            </motion.button>
          </div>

          <div className="space-y-4">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="flex-1">
                  <h4 className="text-white font-medium group-hover:text-[#f4c430] transition-colors">
                    {pub.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{pub.journal}</p>
                </div>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <span className="text-[#00d4ff] text-sm font-medium">{pub.year}</span>
                  <span className="text-gray-500 group-hover:text-[#f4c430] transition-colors">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Collaboration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 glass px-8 py-4 rounded-full">
            <span className="text-gray-400">Interested in collaboration?</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="text-[#f4c430] font-semibold hover:underline"
            >
              Contact Research Team →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
