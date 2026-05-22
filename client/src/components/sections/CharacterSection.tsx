import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/**
 * Character Section - Interactive Character Showcase
 *
 * Design Philosophy: Main focus point with:
 * - Left-side character tabs with active switching
 * - Animated stat bars
 * - Silhouette reveal animations
 * - Japanese text overlays and manga metadata cards
 * - Cinematic hover animations
 * - Smooth transitions between characters
 * - Characters feel mysterious and iconic
 */

interface Character {
  id: string;
  name: string;
  title: string;
  kanji: string;
  stats: {
    power: number;
    speed: number;
    will: number;
  };
  description: string;
}

const characters: Character[] = [
  {
    id: "kaito",
    name: "KAITO",
    title: "THE PROTAGONIST",
    kanji: "主人公",
    stats: {
      power: 85,
      speed: 75,
      will: 95,
    },
    description:
      "A young warrior awakening to his true potential. Driven by an unshakeable will to protect those he cares for.",
  },
  {
    id: "yami",
    name: "YAMI",
    title: "THE SHADOW",
    kanji: "影",
    stats: {
      power: 80,
      speed: 95,
      will: 70,
    },
    description:
      "Shrouded in mystery, moving through darkness with lethal precision. What secrets does the shadow conceal?",
  },
  {
    id: "hikari",
    name: "HIKARI",
    title: "THE GUARDIAN",
    kanji: "光",
    stats: {
      power: 90,
      speed: 60,
      will: 85,
    },
    description:
      "A beacon of hope and protection. Standing firm against the encroaching darkness with unwavering resolve.",
  },
];

export default function CharacterSection() {
  const [activeCharacterId, setActiveCharacterId] = useState(characters[0].id);
  const activeCharacter = characters.find((c) => c.id === activeCharacterId);

  const statVariants = {
    hidden: { scaleX: 0 },
    visible: (i: number) => ({
      scaleX: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      id="characters"
      className="relative w-full py-32 px-6 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
            HEROES
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold italic font-serif">
            CHARACTERS
          </h3>
        </motion.div>
      </div>

      {/* Main character display */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Character tabs - Left side */}
        <motion.div
          className="lg:col-span-1 flex lg:flex-col gap-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {characters.map((character) => {
            const isActive = activeCharacterId === character.id;
            const baseClasses =
              "relative p-4 border transition-all duration-300 text-left group";
            const activeClasses = isActive
              ? "border-foreground bg-foreground/5"
              : "border-border hover:border-foreground/50";

            return (
              <motion.button
                key={character.id}
                onClick={() => setActiveCharacterId(character.id)}
                className={`${baseClasses} ${activeClasses}`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Kanji */}
                <div className="text-3xl font-bold text-foreground/20 mb-2">
                  {character.kanji}
                </div>

                {/* Name */}
                <div className="text-sm font-mono tracking-widest uppercase font-bold mb-1">
                  {character.name}
                </div>

                {/* Title */}
                <div className="text-xs text-muted-foreground font-mono">
                  {character.title}
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 border border-foreground pointer-events-none"
                    layoutId="characterTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Character details - Right side */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {activeCharacter && (
              <motion.div
                key={activeCharacter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
              >
                {/* Character header */}
                <div className="border-b border-border pb-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-6xl md:text-7xl font-bold italic font-serif mb-4"
                  >
                    {activeCharacter.name}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-foreground/70 leading-relaxed max-w-2xl"
                  >
                    {activeCharacter.description}
                  </motion.p>
                </div>

                {/* Stats */}
                <div className="space-y-6">
                  <h4 className="text-sm font-mono tracking-widest uppercase text-muted-foreground">
                    ABILITIES
                  </h4>

                  {Object.entries(activeCharacter.stats).map(([key, value], i) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono tracking-widest uppercase">
                          {key}
                        </span>
                        <span className="text-sm font-mono text-muted-foreground">
                          {value}%
                        </span>
                      </div>

                      {/* Stat bar */}
                      <div className="h-1 bg-secondary overflow-hidden">
                        <motion.div
                          className="h-full bg-foreground"
                          custom={i}
                          variants={statVariants}
                          initial="hidden"
                          animate="visible"
                          style={{ width: `${value}%` }}
                          layoutId={`stat-${activeCharacter.id}-${key}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Silhouette reveal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="relative h-96 bg-secondary border border-border flex items-center justify-center overflow-hidden"
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-foreground/0 to-foreground/5"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Silhouette placeholder */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="relative z-10 text-9xl font-bold text-foreground"
                  >
                    {activeCharacter.kanji}
                  </motion.div>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent pointer-events-none"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
