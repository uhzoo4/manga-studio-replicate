import { motion } from "framer-motion";
import { useState } from "react";

/**
 * CTA Section - Call To Action
 *
 * Design: Dramatic signup section with email input and join button.
 * Uses cinematic styling and smooth interactions.
 */

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    }
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      id="cta"
      className="relative w-full py-32 px-6 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-foreground rounded-full blur-3xl" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold italic font-serif mb-6"
        >
          READY TO BEGIN?!
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-foreground/70 mb-12 leading-relaxed"
        >
          Your manga journey starts <strong>NOW</strong>. No turning back.
        </motion.p>

        {/* Email form */}
        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              id="email-input"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground transition-all duration-300"
            />
            <motion.button
              id="submit-btn"
              type="submit"
              className="px-8 py-3 bg-foreground text-background font-mono text-sm tracking-widest uppercase font-bold hover:bg-foreground/90 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitted ? "JOINED!" : "JOIN NOW!!"}
            </motion.button>
          </div>
        </motion.form>

        {/* Footer text */}
        <motion.p
          variants={itemVariants}
          className="text-xs text-muted-foreground font-mono tracking-widest uppercase mt-8"
        >
          Free to join · No credit card · Cancel anytime
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
