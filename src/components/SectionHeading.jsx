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
      className={`mx-auto mb-10 flex max-w-3xl flex-col gap-3 ${alignment}`}
      initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.18em] text-stone-500 dark:text-stone-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-stone-950 dark:text-stone-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-pretty text-sm leading-relaxed text-stone-600 dark:text-stone-400 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;
