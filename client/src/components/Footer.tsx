import { motion } from "framer-motion";

/**
 * Footer Component
 * 
 * Design: Minimal footer with social links and copyright.
 * Maintains the cinematic noir aesthetic with thin borders and restrained styling.
 */

export default function Footer() {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    { id: "footer-twitter", label: "Twitter", href: "#" },
    { id: "footer-discord", label: "Discord", href: "#" },
    { id: "footer-github", label: "GitHub", href: "#" },
  ];

  return (
    <motion.footer
      className="relative w-full py-16 px-6 bg-background border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold tracking-wider mb-2 font-serif">
              <span className="text-xl">漫画</span> STUDIO
            </h3>
            <p className="text-sm text-muted-foreground">
              Experimental manga studio experience.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h4 className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {["Story", "Characters", "Features"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h4 className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-4">
              Follow
            </h4>
            <ul className="space-y-2 text-sm">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    id={link.id}
                    href={link.href}
                    className="text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-border mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="text-center text-xs text-muted-foreground font-mono tracking-widest"
        >
          <p>© 2026 MANGA STUDIO. All Rights Reserved.</p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
