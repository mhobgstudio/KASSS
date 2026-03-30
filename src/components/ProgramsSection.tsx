"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const programs = [
  {
    id: 1,
    title: "Undergraduate Research",
    duration: "4 Years",
    level: "BSc Physics",
    description: "Comprehensive undergraduate program combining theoretical physics with hands-on astronomical research and observation techniques.",
    topics: ["Stellar Physics", "Cosmology", "Observational Astronomy", "Data Analysis"],
    color: "#f4c430",
  },
  {
    id: 2,
    title: "Graduate Studies",
    duration: "2-4 Years",
    level: "MSc/PhD",
    description: "Advanced research opportunities in astrophysics, focusing on cutting-edge topics and international collaborations.",
    topics: ["Galactic Dynamics", "Black Hole Physics", "Exoplanet Research", "Radio Astronomy"],
    color: "#00d4ff",
  },
  {
    id: 3,
    title: "Public Outreach",
    duration: "Ongoing",
    level: "Open to All",
    description: "Community programs bringing astronomy to schools, communities, and the general public across Ghana.",
    topics: ["Star Gazing Events", "School Workshops", "Public Lectures", "Science Festivals"],
    color: "#ff6b35",
  },
  {
    id: 4,
    title: "Summer School",
    duration: "6 Weeks",
    level: "All Levels",
    description: "Intensive summer program featuring workshops, guest lectures from international astronomers, and hands-on projects.",
    topics: ["Telescope Operation", "Image Processing", "Research Methods", "Career Guidance"],
    color: "#9b59b6",
  },
];

export function ProgramsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="programs" className="relative py-32 overflow-hidden nebula-bg">
      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Academic Programs
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Your Journey to the </span>
            <span className="gradient-text-blue">Stars</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From undergraduate studies to advanced research, explore our comprehensive
            programs designed to nurture the next generation of astrophysicists.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredCard(program.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="glass card-hover rounded-3xl p-8 relative overflow-hidden group"
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${program.color}15, transparent 70%)`,
                }}
              />

              {/* Header */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${program.color}20`,
                        color: program.color,
                        border: `1px solid ${program.color}40`,
                      }}
                    >
                      {program.level}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-4">{program.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 text-sm">Duration</span>
                    <p className="text-white font-semibold">{program.duration}</p>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">{program.description}</p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded-lg border border-white/10"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: hoveredCard === program.id ? program.color : "transparent",
                    color: hoveredCard === program.id ? "#0a0a0f" : program.color,
                    border: `2px solid ${program.color}`,
                  }}
                >
                  Learn More
                  <motion.span
                    animate={{ x: hoveredCard === program.id ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Not sure which program is right for you?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="btn-primary"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
