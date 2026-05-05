import React from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";
import SectionHeading from "./SectionHeading";

const About = () => {
  const cardHover = {
    y: -4,
    transition: { type: "spring", stiffness: 360, damping: 24 },
  };

  return (
    <section id="about" className="scroll-mt-28 pb-24 pt-4">
      <SectionHeading
        eyebrow="ABOUT"
        title="Building full‑stack products that ship"
        subtitle="I care about clean UX, production-ready backends, and pragmatic cloud setups."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <motion.div
          whileHover={cardHover}
          className="glass-surface rounded-3xl p-6 sm:p-8"
        >
          <p className="relative text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
            {ABOUT_TEXT}
          </p>
        </motion.div>

        <div className="grid gap-4">
          {[
            {
              title: "Backend",
              value: "Node.js • Express • MongoDB • SQL",
            },
            {
              title: "GenAI / RAG",
              value: "LangChain • LangGraph • Pinecone • Neo4j",
            },
            {
              title: "DevOps",
              value: "Docker • CI/CD • AWS fundamentals",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={cardHover}
              className="glass-surface rounded-3xl p-6"
            >
              <p className="relative text-xs font-semibold tracking-[0.18em] text-stone-500 dark:text-stone-400">
                {item.title}
              </p>
              <p className="relative mt-2 text-sm text-stone-800 dark:text-stone-200 sm:text-base">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
