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
      className={`relative mx-auto mb-7 sm:mb-12 flex max-w-2xl flex-col gap-2 ${alignment}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {eyebrow ? (
        <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3.5 py-1 text-[11px] font-extrabold tracking-wider text-indigo-900 uppercase shadow-2xs dark:border-indigo-500/30 dark:bg-indigo-500/15 dark:text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
          <span>{eyebrow}</span>
        </div>
      ) : null}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
        {title}
      </h2>

      {subtitle ? (
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-slate-900 dark:text-slate-100 font-medium">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;
