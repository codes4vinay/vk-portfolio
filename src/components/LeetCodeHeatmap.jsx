import React from "react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const LEETCODE_USERNAME = "vinayislive";
const LEETCODE_PROFILE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`;
const LEETCODE_LIGHT_CARD_URL = `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=light&font=Inter&ext=heatmap`;
const LEETCODE_DARK_CARD_URL = `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Inter&ext=heatmap`;

const LeetCodeHeatmap = () => {
  return (
    <section id="leetcode" className="relative scroll-mt-28 pb-14">
      <SectionHeading
        eyebrow="LEETCODE"
        title="Problem Solving Activity"
        subtitle="Consistent algorithm practice and LeetCode activity tracking."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-3xl"
      >
        <div className="relative group">
          {/* Subtle Neon Border Glow */}
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-violet-500/20 to-cyan-500/20 blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300" />

          <a
            href={LEETCODE_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="glass-surface relative block rounded-2xl p-4 sm:p-5 transition-all duration-300 border border-slate-900/10 dark:border-white/10"
            aria-label={`View ${LEETCODE_USERNAME} on LeetCode`}
          >
            {/* Compact Header */}
            <div className="mb-3.5 flex items-center justify-between gap-3 border-b border-slate-900/10 pb-3 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-lg text-amber-500 shadow-xs">
                  <SiLeetcode />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white font-code">
                      @{LEETCODE_USERNAME}
                    </h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.2 text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                      <FaCheckCircle className="text-[8px]" /> ACTIVE
                    </span>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-xl border border-slate-900/10 bg-slate-900/5 px-3 py-1 text-[11px] font-bold text-slate-800 transition hover:bg-amber-500 hover:text-white dark:border-white/15 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-amber-500 font-code">
                <span>View Profile</span>
                <FaExternalLinkAlt className="text-[9px]" />
              </div>
            </div>

            {/* Compact Heatmap Card Image Container */}
            <div className="overflow-hidden rounded-xl border border-slate-900/10 bg-white/90 p-2.5 shadow-inner dark:border-white/10 dark:bg-slate-950/80 sm:p-3">
              <img
                src={LEETCODE_LIGHT_CARD_URL}
                alt={`LeetCode heatmap for ${LEETCODE_USERNAME}`}
                loading="lazy"
                className="mx-auto w-full max-w-[480px] dark:hidden transition-transform duration-300 group-hover:scale-[1.01]"
              />
              <img
                src={LEETCODE_DARK_CARD_URL}
                alt={`LeetCode heatmap for ${LEETCODE_USERNAME}`}
                loading="lazy"
                className="mx-auto hidden w-full max-w-[480px] dark:block transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default LeetCodeHeatmap;


