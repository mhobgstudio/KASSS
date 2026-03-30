"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const upcomingEvents = [
  {
    id: 1,
    title: "Night Sky Observation",
    date: "April 15, 2026",
    time: "7:00 PM - 11:00 PM",
    location: "KNUST Observatory",
    type: "Observation",
    description: "Join us for an evening of stargazing featuring views of Saturn's rings and Jupiter's moons.",
  },
  {
    id: 2,
    title: "Guest Lecture: Dark Matter Mysteries",
    date: "April 22, 2026",
    time: "2:00 PM - 4:00 PM",
    location: "Great Hall, KNUST",
    type: "Lecture",
    description: "Dr. Amara Mensah from NASA discusses the latest findings on dark matter distribution.",
  },
  {
    id: 3,
    title: "Annual Astrophysics Symposium",
    date: "May 5-7, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "College of Science Auditorium",
    type: "Conference",
    description: "Three-day conference featuring research presentations, workshops, and networking opportunities.",
  },
];

const pastHighlights = [
  { title: "World Space Week Celebration", attendees: 500, year: 2025 },
  { title: "Solar Eclipse Viewing Party", attendees: 1200, year: 2025 },
  { title: "Astronomy Olympiad Workshop", attendees: 150, year: 2024 },
];

export function EventsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="relative py-32 overflow-hidden nebula-bg">
      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#ff6b35] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Events & Activities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Join Our </span>
            <span className="gradient-text">Cosmic</span>
            <span className="text-white"> Community</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From stargazing nights to international conferences, immerse yourself
            in our vibrant community of space enthusiasts.
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass rounded-3xl p-6 card-hover relative overflow-hidden group"
            >
              {/* Event Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    event.type === "Observation"
                      ? "bg-[#f4c430]/20 text-[#f4c430] border border-[#f4c430]/30"
                      : event.type === "Lecture"
                      ? "bg-[#00d4ff]/20 text-[#00d4ff] border border-[#00d4ff]/30"
                      : "bg-[#ff6b35]/20 text-[#ff6b35] border border-[#ff6b35]/30"
                  }`}
                >
                  {event.type}
                </span>
                <span className="text-gray-500 text-sm">{event.date}</span>
              </div>

              {/* Event Details */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4c430] transition-colors">
                {event.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{event.description}</p>

              {/* Time & Location */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span>⏰</span>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span>📍</span>
                  <span>{event.location}</span>
                </div>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full py-3 rounded-xl font-semibold bg-white/5 text-white hover:bg-[#f4c430] hover:text-[#0a0a0f] transition-all duration-300 border border-white/10 hover:border-[#f4c430]"
              >
                Register Now
              </motion.button>

              {/* Decorative Element */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#f4c430]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Calendar Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Never Miss an <span className="gradient-text">Event</span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Subscribe to our calendar and receive notifications about upcoming stargazing
                events, lectures, workshops, and exclusive member activities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f4c430]/50"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            {/* Past Highlights */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Past Highlights</h4>
              <div className="space-y-3">
                {pastHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5"
                  >
                    <div>
                      <p className="text-white font-medium text-sm">{highlight.title}</p>
                      <p className="text-gray-500 text-xs">{highlight.year}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#f4c430] font-semibold">{highlight.attendees}+</p>
                      <p className="text-gray-500 text-xs">Attendees</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* View All Events CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <span>View Full Calendar</span>
            <span>📅</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
