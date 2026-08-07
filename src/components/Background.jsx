import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Light Mode Grid & Glows */}
      <div
        className="absolute inset-0 animate-background-drift dark:hidden"
        style={{
          background: "#f8fafc",
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 blur-[120px] dark:hidden" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-cyan-400/20 to-indigo-400/20 blur-[120px] dark:hidden" />

      {/* Dark Mode - Futuristic Cyber Glowing Canvas */}
      <div
        className="absolute inset-0 hidden animate-background-drift dark:block"
        style={{
          background: "#030712",
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glowing Neon Orbs in Dark Mode */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 left-1/4 hidden h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-violet-600/25 via-purple-600/20 to-transparent blur-[140px] dark:block"
      />

      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-24 hidden h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-transparent blur-[150px] dark:block"
      />

      <motion.div
        animate={{
          x: [0, 40, -50, 0],
          y: [0, -30, 50, 0],
          scale: [1, 1.05, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-10 hidden h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-fuchsia-600/20 via-rose-600/15 to-transparent blur-[130px] dark:block"
      />

      {/* Futuristic Center Radial Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,transparent_20%,rgba(3,7,18,0.7)_100%)] dark:block hidden" />
    </div>
  );
};

export default Background;

