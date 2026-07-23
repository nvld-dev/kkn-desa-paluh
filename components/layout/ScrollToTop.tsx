"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Kembali ke atas"
          onClick={scrollToTop}
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: 40,
          }}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 24,
          }}
          whileHover={{
            y: -4,
            scale: 1.06,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="group fixed right-8 bottom-8 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/60 text-white shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-black/60"
        >
          {/* Glow */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Border Glow */}
          <span className="absolute inset-0 rounded-full ring-1 ring-white/5 transition-all duration-300 group-hover:ring-white/15" />

          {/* Icon */}
          <ChevronUp className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
