import React, { useState } from "react";
import { PROJECTS } from "../constants/";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiLayers,
  FiServer,
  FiCpu,
  FiCheckCircle,
  FiChevronDown,
} from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const CATEGORIES = ["All", "Distributed Systems", "GenAI & RAG", "Full Stack"];

// Assign categories to existing project titles
const getProjectCategory = (title) => {
  if (title.toLowerCase().includes("chaos") || title.toLowerCase().includes("proxy")) return "Distributed Systems";
  if (title.toLowerCase().includes("docfusion") || title.toLowerCase().includes("rag")) return "GenAI & RAG";
  return "Full Stack";
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expanded, setExpanded] = useState(false);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;
    const cat = getProjectCategory(project.title);
    if (activeFilter === "GenAI & RAG") {
      return cat === "GenAI & RAG" || project.technologies.some(t => ["RAG", "Pinecone", "Gemini API", "FAISS"].includes(t));
    }
    return cat === activeFilter;
  });

  return (
    <section id="projects" className="relative scroll-mt-24 pb-20">
      <SectionHeading
        eyebrow="ENGINEERING SHOWCASE"
        title="Featured Systems & Applications"
        subtitle="Selected production-ready distributed systems, fault-injection proxies, and AI-enabled platforms."
      />

      {/* Filter Tabs */}
      <div className="mb-8 sm:mb-10 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto touch-scroll no-scrollbar pb-2 px-1">
        {CATEGORIES.map((category) => {
          const isActive = activeFilter === category;
          return (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setExpanded(false);
              }}
              className={`shrink-0 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                isActive
                  ? "bg-slate-950 text-white shadow-xs dark:bg-white dark:text-slate-950"
                  : "border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:text-slate-950 dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-white/25 dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="mx-auto max-w-5xl">
        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isFlagship = index === 0 && activeFilter === "All";
              const isHiddenOnMobile = !expanded && index >= 2;

              return (
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  key={project.title}
                  className={`group glass-panel interactive-card flex-col justify-between overflow-hidden rounded-2xl ${
                    isFlagship ? "md:col-span-2" : ""
                  } ${isHiddenOnMobile ? "hidden sm:flex" : "flex"}`}
                >
                  <div>
                    {/* Project Image Container */}
                    <div className="relative overflow-hidden border-b border-slate-100 bg-slate-950 dark:border-white/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                          isFlagship ? "h-44 xs:h-52 sm:h-72" : "h-40 xs:h-48 sm:h-52"
                        }`}
                        loading="lazy"
                      />
                      {/* Subtle Overlay Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-slate-950/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                          {getProjectCategory(project.title)}
                        </span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base sm:text-xl font-extrabold tracking-tight text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      {/* Description Points */}
                      <ul className="mt-3 space-y-2 text-xs sm:text-sm leading-relaxed text-slate-900 dark:text-slate-100 font-medium">
                        {project.description.slice(0, isFlagship ? 4 : 3).map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1 text-indigo-600 dark:text-indigo-400 shrink-0 text-xs font-bold">
                              •
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-slate-300 bg-slate-100 px-2 py-0.5 text-[11px] font-bold font-code text-slate-900 dark:border-white/15 dark:bg-white/10 dark:text-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="border-t border-slate-200 p-4 pt-3 sm:p-5 sm:pt-3 dark:border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 sm:px-3.5 py-2 text-xs font-bold text-slate-900 shadow-2xs transition hover:bg-slate-100 dark:border-white/15 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                        >
                          <FiGithub className="text-sm" />
                          <span>Code</span>
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3 sm:px-3.5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-indigo-700"
                        >
                          <FiExternalLink className="text-sm" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                    <span className="text-[11px] font-code font-bold text-slate-700 dark:text-slate-300">
                      Production Ready
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Progressive Disclosure Toggle */}
        {filteredProjects.length > 2 && (
          <div className="sm:hidden mt-6 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-900 shadow-2xs transition hover:bg-slate-100 dark:border-white/15 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <span>
                {expanded
                  ? "Show Fewer Projects"
                  : `Show All ${filteredProjects.length} Projects (+${filteredProjects.length - 2} more)`}
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

export default Projects;
