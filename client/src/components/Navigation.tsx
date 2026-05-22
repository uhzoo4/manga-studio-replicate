import { motion } from "framer-motion";
import { useState } from "react";

/**
 * Navigation Component
 * 
 * Design: Minimal sticky navigation with Japanese glyph logo and smooth hover effects.
 * Uses off-white text on dark background with thin borders and restrained motion.
 */

export default function Navigation() {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const navItems = [
    { id: "nav-hero", label: "STORY", href: "#hero" },
    { id: "nav-panels", label: "PANELS", href: "#panels" },
    { id: "nav-characters", label: "CHARACTERS", href: "#characters" },
    { id: "nav-action", label: "ACTION", href: "#action" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          id="nav-logo"
          href="#"
          className="text-xl font-bold tracking-wider font-serif"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-2xl">漫画</span> STUDIO
        </motion.a>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              id={item.id}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-mono tracking-widest uppercase relative group"
              onMouseEnter={() => setIsHovered(item.id)}
              onMouseLeave={() => setIsHovered(null)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-foreground"
                initial={{ width: 0 }}
                animate={{ width: isHovered === item.id ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          id="nav-cta"
          href="#cta"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#cta");
          }}
          className="px-6 py-2 border border-foreground text-foreground text-sm font-mono tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          JOIN NOW
        </motion.a>
      </div>
    </motion.nav>
  );
}
