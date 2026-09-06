import React, { useState } from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import SectionHeading from "./SectionHeading";
import { FiExternalLink, FiMapPin, FiCalendar, FiChevronDown } from "react-icons/fi";

const Experience = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="experience" className="relative scroll-mt-24 pb-20">
      <SectionHeading
        eyebrow="CAREER PROGRESSION"
        title="Professional Experience"
        subtitle="Track record of shipping production APIs, cutting query latency, and engineering high-scoring interfaces."
      />

      <div className="mx-auto max-w-3xl">
        <div className="relative border-l-2 border-slate-200/80 dark:border-white/10 pl-4 sm:pl-8 ml-2 sm:ml-4 space-y-5 sm:space-y-10">
          {EXPERIENCES.map((item, index) => {
            const isCurrent = item.year.includes("Present");
            const isHiddenOnMobile = !expanded && index > 0;

            return (
              <motion.div
                key={`${item.year}-${item.company}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`relative ${isHiddenOnMobile ? "hidden sm:block" : "block"}`}
              >
                {/* Timeline node dot */}
                <div
                  className={`absolute -left-[25px] sm:-left-[41px] top-2 h-4 w-4 rounded-full border-2 bg-white dark:bg-slate-950 ${
                    isCurrent
                      ? "border-emerald-500 ring-4 ring-emerald-500/10"
                      : "border-slate-400 dark:border-slate-600"
                  }`}
                />

                {/* Experience Card */}
                <div className="glass-panel rounded-2xl p-4 sm:p-7 interactive-card">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200/80 pb-3.5 dark:border-white/10">
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-950 dark:text-white">
                        {item.role}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-bold text-indigo-600 hover:underline dark:text-indigo-400"
                          >
                            <span>{item.company}</span>
                            <FiExternalLink className="text-[10px]" />
                          </a>
                        ) : (
                          <span className="font-bold text-slate-950 dark:text-white">
                            {item.company}
                          </span>
                        )}

                        {item.location && (
                          <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400 font-medium">
                            <FiMapPin className="text-[11px]" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full border border-slate-300 bg-slate-100 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-bold text-slate-900 dark:border-white/15 dark:bg-white/[0.06] dark:text-slate-200 font-code shadow-2xs">
                      <FiCalendar className="text-[10px]" />
                      <span>{item.year}</span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="mt-3.5 space-y-2 text-xs sm:text-sm leading-relaxed text-slate-900 dark:text-slate-100 font-medium">
                    {item.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/80 dark:border-white/10">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-300 bg-slate-100 px-2 py-0.5 text-[11px] font-bold font-code text-slate-900 dark:border-white/15 dark:bg-white/10 dark:text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Progressive Disclosure Toggle */}
        {EXPERIENCES.length > 1 && (
          <div className="sm:hidden mt-6 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-900 shadow-2xs transition hover:bg-slate-100 dark:border-white/15 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <span>
                {expanded
                  ? "Show Current Role Only"
                  : `View Earlier Experience (Phi Launcher)`}
              </span>
              <FiChevronDown
                className={`text-sm text-indigo-600 dark:text-indigo-400 transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
