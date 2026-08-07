import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import SectionHeading from "./SectionHeading";
import { FiExternalLink, FiMapPin, FiBriefcase } from "react-icons/fi";

const Experience = () => {
  return (
    <section id="experience" className="relative scroll-mt-28 pb-24">
      <SectionHeading
        eyebrow="CAREER PATH"
        title="Professional Experience"
        subtitle="Roles, responsibilities, performance achievements, and scalable architecture pattern implementations."
      />

      <div className="mx-auto max-w-4xl relative">
        {/* Glowing Vertical Timeline Beam Line */}
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent dark:from-violet-400 dark:via-cyan-400 hidden sm:block opacity-60" />

        <div className="space-y-8">
          {EXPERIENCES.map((item, index) => (
            <motion.article
              key={`${item.year}-${item.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
              className="glass-surface relative rounded-3xl p-6 sm:p-8 sm:ml-10 border border-slate-900/10 dark:border-white/10 glass-card-hover"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-14 top-8 hidden h-8 w-8 items-center justify-center rounded-full border-2 border-violet-500 bg-slate-900 text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.6)] sm:flex">
                <FiBriefcase className="text-xs" />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between border-b border-slate-900/10 pb-4 dark:border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold font-code text-slate-600 dark:text-slate-400">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-violet-600 hover:underline dark:text-cyan-400"
                      >
                        {item.company}
                        <FiExternalLink className="text-xs" />
                      </a>
                    ) : (
                      <span className="text-slate-800 dark:text-slate-200">{item.company}</span>
                    )}
                    {item.location && (
                      <span className="inline-flex items-center gap-1 text-slate-500">
                        <FiMapPin className="text-xs text-rose-500" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                <span className="inline-flex items-center rounded-full bg-violet-500/10 px-3 py-1 text-xs font-bold text-violet-600 dark:bg-violet-400/10 dark:text-violet-300 font-code">
                  {item.year}
                </span>
              </div>

              {Array.isArray(item.description) ? (
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                  {item.description.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 dark:bg-cyan-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                  {item.description}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-900/10 dark:border-white/10">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-slate-900/10 bg-slate-900/5 px-3 py-1 text-xs font-bold font-code text-slate-800 dark:border-white/10 dark:bg-slate-900/70 dark:text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
