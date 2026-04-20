import React from "react";
import { PROJECTS } from "../constants/";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Card animation
const projectVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Tech badge animation
const techVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 pb-24">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        My Projects
      </motion.h2>

      <div className="space-y-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="
              mx-auto max-w-5xl
              rounded-2xl
              border border-white/10
              bg-white/5 backdrop-blur-md
              p-6
              transition hover:bg-white/10
            "
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Image */}
              <div className="w-full lg:w-1/3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-2/3">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

                <ul className="mb-4 space-y-2 text-stone-400">
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap mb-6">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={techVariants}
                      className="
                        mr-2 mb-2
                        rounded-md
                        bg-stone-800/80
                        px-3 py-1
                        text-xs font-medium text-stone-300
                      "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center gap-2
                        rounded-full
                        border border-white/20
                        px-4 py-2
                        text-sm text-white
                        hover:bg-white/10 transition
                      "
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center gap-2
                        rounded-full
                        bg-white text-black
                        px-4 py-2
                        text-sm font-medium
                        hover:bg-stone-200 transition
                      "
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
