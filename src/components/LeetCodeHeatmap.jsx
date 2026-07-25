import React from "react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import SectionHeading from "./SectionHeading";

const LEETCODE_USERNAME = "vinayislive";
const LEETCODE_PROFILE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`;
const LEETCODE_LIGHT_CARD_URL = `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=light&font=Inter&ext=heatmap`;
const LEETCODE_DARK_CARD_URL = `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Inter&ext=heatmap`;

const LeetCodeHeatmap = () => {
  return (
    <section id="leetcode" className="scroll-mt-28 pb-24">
      <SectionHeading
        eyebrow="LEETCODE"
        title="Problem-solving activity"
        subtitle="A snapshot of recent practice and consistency."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-5xl"
      >
        <a
          href={LEETCODE_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="glass-surface group block rounded-3xl p-4 transition hover:-translate-y-1 sm:p-6"
          aria-label={`View ${LEETCODE_USERNAME} on LeetCode`}
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 text-xl text-amber-500">
                <SiLeetcode />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-stone-950 dark:text-stone-100">
                  @{LEETCODE_USERNAME}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  LeetCode profile
                </p>
              </div>
            </div>

            <span className="hidden rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs font-medium text-stone-700 transition group-hover:bg-black/10 dark:border-white/15 dark:bg-white/5 dark:text-stone-300 dark:group-hover:bg-white/10 sm:inline-flex">
              View profile
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white p-3 dark:border-white/10 dark:bg-[#0d1117] sm:p-5">
            <img
              src={LEETCODE_LIGHT_CARD_URL}
              alt={`LeetCode heatmap for ${LEETCODE_USERNAME}`}
              loading="lazy"
              className="mx-auto w-full max-w-[620px] dark:hidden"
            />
            <img
              src={LEETCODE_DARK_CARD_URL}
              alt={`LeetCode heatmap for ${LEETCODE_USERNAME}`}
              loading="lazy"
              className="mx-auto hidden w-full max-w-[620px] dark:block"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default LeetCodeHeatmap;
