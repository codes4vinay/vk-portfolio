import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SYSTEM_STEPS = [
  "INITIALIZING RUNTIME ENVIRONMENT...",
  "COMPILING PRODUCTION SCHEMAS...",
  "CONNECTING REPOSITORIES & APIS...",
  "SYSTEM SPEC LOADED",
];

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1600; // Fast, smooth 1.6s experience

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawProgress);

      if (rawProgress < 30) {
        setStepIndex(0);
      } else if (rawProgress < 65) {
        setStepIndex(1);
      } else if (rawProgress < 90) {
        setStepIndex(2);
      } else {
        setStepIndex(3);
      }

      if (elapsed >= duration) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 220);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        filter: "blur(12px)",
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07080c] text-white select-none px-4 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[350px] w-[500px] rounded-full bg-indigo-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-[300px] w-[450px] rounded-full bg-emerald-500/10 blur-[100px]" />

      {/* Center Container */}
      <div className="relative z-10 w-full max-w-[280px] xs:max-w-xs sm:max-w-sm flex flex-col items-center text-center">
        {/* Animated Orbital Monogram */}
        <div className="relative mb-6 flex items-center justify-center">
          {/* Outer Pulsing Rings */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-3 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 blur-xs"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-500 via-transparent to-emerald-400 opacity-40 blur-xs"
          />

          {/* Central Glass Tile */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-slate-900/90 shadow-2xl backdrop-blur-xl"
          >
            <span className="font-code text-xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-indigo-300">
              &lt;VK/&gt;
            </span>

            {/* Micro Corner Accent */}
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          </motion.div>
        </div>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-1"
        >
          <div className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center justify-center gap-2">
            <span>Vinay Kumar</span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400 animate-ping" />
          </div>
          <div className="text-xs font-medium tracking-wide text-slate-400">
            Full Stack & Systems Architect
          </div>
        </motion.div>

        {/* Dynamic Boot Sequence Text */}
        <div className="mt-7 h-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={stepIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="text-[11px] font-code font-medium text-slate-400 tracking-wider flex items-center gap-1.5"
            >
              <span className="text-emerald-400">❯</span>
              <span>{SYSTEM_STEPS[stepIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar Container */}
        <div className="mt-3 w-full">
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10 p-[1px]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 shadow-[0_0_12px_rgba(99,102,241,0.6)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Bottom Metainfo: Percentage & Latency */}
          <div className="mt-2.5 flex items-center justify-between text-[10px] font-code text-slate-500">
            <span>PORTFOLIO_OS::v2.6</span>
            <span className="font-semibold text-slate-300">
              {progress.toString().padStart(3, "0")}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
