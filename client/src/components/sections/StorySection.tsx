import { motion } from "framer-motion";
import { useState } from "react";

/**
 * Story Section - Dynamic Manga Panels
 *
 * Design Philosophy: Creates cinematic manga panels with:
 * - Hover interactions and cinematic transitions
 * - Black ink overlays and dramatic shadows
 * - Subtle motion and staggered reveal animations
 * - Panels feel like scenes from a dark psychological manga
 * - Asymmetric layout with huge spacing
 */

interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  kanji?: string;
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: "THE AWAKENING",
    subtitle: "01",
    description: "A forgotten power stirs deep within...",
    kanji: "覚醒",
  },
  {
    id: 2,
    title: "RISING SHADOW",
    subtitle: "02",
    description: "Darkness creeps across the land.",
    kanji: "影",
  },
  {
    id: 3,
    title: "THE CLASH",
    subtitle: "03",
    description: "Heroes collide in an epic battle!",
    kanji: "衝突",
  },
  {
    id: 4,
    title: "AFTERMATH",
    subtitle: "04",
    description: "The dust settles, but questions remain.",
    kanji: "余波",
  },
  {
    id: 5,
    title: "REBIRTH",
    subtitle: "05",
    description: "From ashes, a new legend rises.",
    kanji: "再生",
  },
];

export default function StorySection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="panels"
      className="relative w-full py-32 px-6 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
            CHAPTERS
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold italic font-serif">
            THE STORY
          </h3>
        </motion.div>
      </div>

      {/* Panels grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {chapters.map((chapter) => (
          <motion.div
            key={chapter.id}
            variants={panelVariants}
            className="group relative"
            onMouseEnter={() => setHoveredId(chapter.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Panel background */}
            <motion.div
              className="relative overflow-hidden bg-secondary border border-border aspect-square flex flex-col items-center justify-center p-8"
              whileHover={{
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Ink overlay effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-foreground/0 via-foreground/0 to-foreground/10 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Kanji background */}
              {chapter.kanji && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-9xl font-bold text-foreground/5 pointer-events-none"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {chapter.kanji}
                </motion.div>
              )}

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Chapter number */}
                <motion.div
                  className="text-7xl font-bold text-foreground/20 mb-4 font-mono"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {chapter.subtitle}
                </motion.div>

                {/* Title */}
                <motion.h4
                  className="text-xl font-bold tracking-wider uppercase mb-3 font-mono"
                  initial={{ y: 0 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {chapter.title}
                </motion.h4>

                {/* Description */}
                <motion.p
                  className="text-sm text-foreground/70 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {chapter.description}
                </motion.p>
              </div>

              {/* Hover border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-foreground pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
