import React from "react";
import { PROJECTS } from "../constants/";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="relative scroll-mt-28 pb-24">
      <SectionHeading
        eyebrow="FEATURED PORTFOLIO"
        title="Projects & Systems I've Built"
        subtitle="Selected production-ready applications, AI document analysis platforms, and developer packages."
      />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.55, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group glass-surface glass-card-hover relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-900/10 dark:border-white/10"
            >
              <div>
                {/* Project Image Preview */}
                <div className="relative overflow-hidden border-b border-slate-900/10 dark:border-white/10">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-60"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-950/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-md font-code">
                      <FaFolder className="text-violet-400" />
                      Project {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <ul className="mt-4 space-y-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                    {project.description.slice(0, 3).map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 dark:bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 7).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-900/10 bg-slate-900/5 px-2.5 py-1 text-[11px] font-bold font-code text-slate-800 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-900/15 bg-slate-900/5 px-4 py-2.5 text-xs font-bold font-code text-slate-800 transition hover:bg-slate-900 hover:text-white dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-white dark:hover:text-slate-900"
                  >
                    <FaGithub className="text-sm" />
                    Source Code
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-bold font-code text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 dark:shadow-cyan-500/30"
                  >
                    <FaExternalLinkAlt className="text-[10px]" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
