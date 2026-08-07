import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaTerminal, FaCode, FaCheckCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Initializing core systems...",
    "Loading tech telemetry & portfolio...",
    "Connecting GenAI & API endpoints...",
    "Rendering cyber interface...",
    "System online ⚡",
  ];

  useEffect(() => {
    // Smooth progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (progress < 25) setCurrentStep(0);
    else if (progress < 50) setCurrentStep(1);
    else if (progress < 75) setCurrentStep(2);
    else if (progress < 95) setCurrentStep(3);
    else setCurrentStep(4);

    if (progress >= 100) {
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0.98,
        y: -12,
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
      }}
      style={{ willChange: "opacity, transform" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712] px-4 font-code text-white select-none overflow-hidden"
    >
      {/* Background Neon Orbs */}
      <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-violet-600/20 blur-[130px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-cyan-500/20 blur-[130px] animate-pulse" />

      {/* Cyber Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center">
        {/* Animated Brand Emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-500/30 bg-slate-900/80 p-4 shadow-2xl backdrop-blur-xl shadow-violet-500/20"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 blur-md opacity-60 animate-pulse" />
          <FaCode className="relative text-3xl text-cyan-400" />
        </motion.div>

        {/* Developer Name & Title */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-black tracking-tight text-white">
            Vinay<span className="text-violet-400">.dev</span>
          </h2>
          <p className="mt-1 flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <HiSparkles className="text-amber-400 text-xs" />
            <span>FULL STACK & GENAI ENGINEER</span>
          </p>
        </motion.div>

        {/* Terminal Loading Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-xl text-left"
        >
          {/* Header */}
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <FaTerminal className="text-violet-400" />
              <span>system_initialization.sh</span>
            </div>
            <span className="font-bold text-cyan-400">{progress}%</span>
          </div>

          {/* Progress Bar */}
          <div className="relative mb-4 h-2 w-full overflow-hidden rounded-full bg-slate-900 border border-white/5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>

          {/* Status Step Logs */}
          <div className="flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2 truncate">
              {progress >= 100 ? (
                <FaCheckCircle className="text-emerald-400 text-xs shrink-0" />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
              )}
              <span className="truncate text-[11px] font-medium text-slate-300">
                {steps[currentStep]}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
