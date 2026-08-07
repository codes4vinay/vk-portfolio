import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }) => {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : align === "right"
        ? "items-end text-right"
        : "items-center text-center";

  return (
    <motion.div
      className={`relative mx-auto mb-12 flex max-w-3xl flex-col gap-3 ${alignment}`}
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background glow accent behind heading */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-24 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-2xl dark:bg-purple-500/15" />

      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3.5 py-1 text-[11px] font-bold tracking-[0.2em] text-violet-600 uppercase dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
          </span>
          {eyebrow}
        </div>
      ) : null}

      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        <span className="bg-gradient-to-r from-slate-900 via-violet-950 to-slate-800 bg-clip-text text-transparent dark:from-white dark:via-purple-100 dark:to-cyan-200">
          {title}
        </span>
      </h2>

      {subtitle ? (
        <p className="max-w-xl text-pretty text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;

