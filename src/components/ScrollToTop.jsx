import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 left-6 sm:bottom-10 sm:left-8 z-[9999] flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/30 bg-slate-900/90 text-cyan-400 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950 dark:border-cyan-400/40 dark:bg-slate-950/90 dark:text-cyan-300 dark:hover:bg-cyan-400 dark:hover:text-slate-950 cursor-pointer group"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 blur-md opacity-40 group-hover:opacity-100 transition-opacity" />
          <FaArrowUp className="relative text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
