import { motion } from "framer-motion";

/**
 * Features Section - Power Features Showcase
 * 
 * Design: Displays key features with cinematic styling, Japanese text overlays,
 * and hover interactions that feel like manga action sequences.
 */

interface Feature {
  id: string;
  title: string;
  description: string;
  soundEffect: string;
}

const features: Feature[] = [
  {
    id: "stories",
    title: "DYNAMIC STORIES",
    description: "Interactive narratives that respond to your choices. Every decision shapes the world.",
    soundEffect: "ドン!",
  },
  {
    id: "battles",
    title: "EPIC BATTLES",
    description: "Real-time combat with devastating combos and ultimate techniques.",
    soundEffect: "バキ!",
  },
  {
    id: "panels",
    title: "CUSTOM PANELS",
    description: "Create your own manga panels with our powerful editor tools.",
    soundEffect: "ゴゴゴ",
  },
  {
    id: "community",
    title: "COMMUNITY",
    description: "Join thousands of creators and readers in our growing universe.",
    soundEffect: "ワー!",
  },
];

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const featureVariants = {
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
      id="action"
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
        >
          <h2 className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
            POWER
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold italic font-serif">
            FEATURES
          </h3>
        </motion.div>
      </div>

      {/* Features grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            variants={featureVariants}
            className="group relative"
          >
            <motion.div
              className="relative p-8 border border-border bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300 overflow-hidden"
              whileHover={{
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-foreground/0 via-foreground/0 to-foreground/5 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Sound effect text - top right */}
              <motion.div
                className="absolute top-4 right-4 text-3xl font-bold text-foreground/10 font-serif italic"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {feature.soundEffect}
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                {/* Title */}
                <motion.h4
                  className="text-2xl font-bold tracking-wider uppercase mb-4 font-mono"
                  initial={{ y: 0 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.title}
                </motion.h4>

                {/* Description */}
                <motion.p
                  className="text-foreground/70 leading-relaxed"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.description}
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
