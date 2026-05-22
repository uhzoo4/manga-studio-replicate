import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Hero Section - Cinematic Manga Studio Experience
 * 
 * Design Philosophy: Creates a "holy shit" first impression with:
 * - Massive oversized italic typography
 * - Cinematic motion and parallax
 * - Ink splash/shadow reveal animations
 * - Layered manga textures
 * - Atmospheric movement
 * - Huge empty space used intentionally
 * - Animated grain/noise
 * 
 * The hero should feel alive, not static. Like a psychological anime opening.
 */

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Parallax effect for subtle depth
  const parallaxY = scrollY * 0.5;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="hero"
      className="relative w-full min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-background"
      style={{
        transform: `translateY(${parallaxY}px)`,
      }}
    >
      {/* Background ink splash effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0.03 : 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-foreground rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-foreground rounded-full blur-3xl opacity-5" />
      </motion.div>

      {/* Main content container */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Japanese subtitle */}
        <motion.div
          variants={itemVariants}
          className="mb-8 text-sm font-mono tracking-widest uppercase text-muted-foreground"
        >
          <span className="text-2xl mr-2">あなたのストーリーが始まる</span>
        </motion.div>

        {/* Main title - Massive italic typography */}
        <motion.h1
          variants={titleVariants}
          className="text-7xl md:text-8xl lg:text-9xl font-bold italic tracking-tighter leading-none mb-6 font-serif"
          style={{
            fontFamily: "Bebas Neue, serif",
            letterSpacing: "-0.02em",
          }}
        >
          MANGA
          <br />
          STUDIO
        </motion.h1>

        {/* Subtitle with dramatic text */}
        <motion.div
          variants={itemVariants}
          className="text-lg md:text-2xl font-mono tracking-widest uppercase mb-16 text-foreground/80"
        >
          <div className="flex items-center justify-center gap-4">
            <motion.div
              className="h-px flex-1 bg-foreground/30"
              initial={{ width: 0 }}
              animate={{ width: isLoaded ? "100%" : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <span>CREATE. FIGHT. CONQUER.</span>
            <motion.div
              className="h-px flex-1 bg-foreground/30"
              initial={{ width: 0 }}
              animate={{ width: isLoaded ? "100%" : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.a
            id="hero-cta-primary"
            href="#cta"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 border-2 border-foreground text-foreground font-mono text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            START READING
          </motion.a>

          <motion.a
            id="hero-cta-secondary"
            href="#panels"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#panels")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 text-foreground font-mono text-sm tracking-widest uppercase border-b-2 border-foreground hover:border-b-4 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted-foreground"
        >
          <span>SCROLL DOWN</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-8 bg-foreground/30"
          />
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </motion.section>
  );
}
