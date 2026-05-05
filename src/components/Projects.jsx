import React from "react";
import { PROJECTS } from "../constants/";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 pb-24">
      <SectionHeading
        eyebrow="WORK"
        title="Projects I’m proud of"
        subtitle="Selected builds with a focus on real-world UX, scalability, and clean engineering."
      />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ staggerChildren: 0.06 }}
          className="grid gap-6 md:grid-cols-2"
        >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.45, ease: "easeOut" }}
            whileHover={{
              y: -6,
              transition: { type: "spring", stiffness: 340, damping: 24 },
            }}
            whileTap={{ scale: 0.99 }}
            className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 backdrop-blur-md transition hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -inset-24 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.16),transparent_55%)]" />
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-t-3xl border-b border-black/10 bg-black/5 dark:border-white/10 dark:bg-black/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03] md:h-56"
                  loading="lazy"
                />
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-stone-950 dark:text-stone-100 sm:text-xl">
                    {project.title}
                  </h3>
                </div>

                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {project.description.slice(0, 3).map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-stone-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 7).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-medium text-stone-800 dark:border-white/10 dark:bg-black/30 dark:text-stone-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm font-medium text-stone-900 transition hover:bg-black/10 dark:border-white/15 dark:bg-black/20 dark:text-stone-100 dark:hover:bg-white/10"
                    >
                      <FaGithub />
                      Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-stone-200"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
