import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import SectionHeading from "./SectionHeading";
import { FiExternalLink, FiMapPin } from "react-icons/fi";

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-28 pb-24">
      <SectionHeading
        eyebrow="EXPERIENCE"
        title="What I’ve been working on"
        subtitle="A quick snapshot of roles, responsibilities, and the tools I use most."
      />

      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6">
          {EXPERIENCES.map((item) => (
            <motion.article
              key={`${item.year}-${item.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="rounded-3xl border border-slate-900/10 bg-white/70 p-6 backdrop-blur-md transition hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 sm:p-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-stone-950 dark:text-stone-100">
                    {item.role}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-stone-600 dark:text-stone-400">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-stone-800 transition hover:text-violet-700 dark:text-stone-200 dark:hover:text-fuchsia-200"
                      >
                        {item.company}
                        <FiExternalLink aria-hidden="true" className="text-xs" />
                      </a>
                    ) : (
                      <span>{item.company}</span>
                    )}
                    {item.location ? (
                      <span className="inline-flex items-center gap-1.5">
                        <FiMapPin aria-hidden="true" className="text-xs" />
                        {item.location}
                      </span>
                    ) : null}
                  </div>
                </div>
                <p className="text-sm font-medium text-stone-600 dark:text-stone-300">{item.year}</p>
              </div>

              {Array.isArray(item.description) ? (
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300 sm:text-base">
                  {item.description.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 dark:bg-fuchsia-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-5 text-sm leading-relaxed text-stone-700 dark:text-stone-300 sm:text-base">
                  {item.description}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs font-medium text-stone-700 dark:border-white/10 dark:bg-black/30 dark:text-stone-200"
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

