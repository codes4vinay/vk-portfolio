import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import SectionHeading from "./SectionHeading";

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
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-stone-100">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-stone-400">{item.company}</p>
                </div>
                <p className="text-sm font-medium text-stone-300">{item.year}</p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-stone-300 sm:text-base">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-stone-200"
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

