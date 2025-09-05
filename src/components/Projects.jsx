import React from "react";
import { PROJECTS } from "../constants/";
import { motion } from "framer-motion";

// Variants for project card animation
const projectVariants = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
};

// Variants for tech badges
const techVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const Projects = () => {
  return (
    <div className="pb-4">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center items-center p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={projectVariants}
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.name}
                width={250}
                height={250}
                className="mb-6 rounded shadow-lg"
              />
            </div>

            {/* Project Details */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    custom={techIndex}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={techVariants}
                    className="mr-2 mb-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
