import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import CharacterSection from "@/components/sections/CharacterSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

/**
 * Home Page - Cinematic Manga Studio Experience
 * 
 * Design Philosophy: Minimal Japanese editorial design mixed with underground manga aesthetics
 * and cinematic noir atmosphere. The experience feels like an experimental manga studio,
 * luxury fashion editorial, and psychological anime opening sequence combined.
 * 
 * Key Elements:
 * - Off-white manga paper background with deep blacks
 * - Asymmetric layouts with huge cinematic spacing
 * - Grain textures and animated noise
 * - Restrained, elegant motion
 * - Japanese glyph overlays
 * - Psychological intensity and melancholic atmosphere
 */

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full min-h-screen bg-background text-foreground overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Grain overlay for texture */}
      <GrainOverlay />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection scrollY={scrollY} />

      {/* Story/Chapters Section */}
      <StorySection />

      {/* Character Section */}
      <CharacterSection />

      {/* Features/Power Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
