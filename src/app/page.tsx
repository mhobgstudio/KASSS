"use client";

import { StarsBackground } from "@/components/StarsBackground";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { ResearchSection } from "@/components/ResearchSection";
import { EventsSection } from "@/components/EventsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StarsBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ResearchSection />
      <EventsSection />
      <ContactSection />
    </main>
  );
}
