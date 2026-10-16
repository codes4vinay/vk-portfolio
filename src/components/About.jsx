import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import { ABOUT_TEXT } from "../constants";

const PHILOSOPHIES = [
  {
    number: "01",
    title: "Make complexity feel quiet.",
    description:
      "The best interface is the one that lets the work speak. I care about clear flows, fast feedback, and details that reward a second look.",
  },
  {
    number: "02",
    title: "Stay close to the metal.",
    description:
      "I like understanding what happens underneath the UI — from data models and APIs to deployment, observability, and the last mile of performance.",
  },
  {
    number: "03",
    title: "Ship, then sharpen.",
    description:
      "Working software is the baseline. Once it's live, I iterate on edge cases, accessibility, and micro-interactions.",
  },
];

const About = () => {
  const scrollToContact = (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      name="about"
      className="relative flex min-h-svh w-full items-center overflow-hidden px-6 py-24 text-slate-900 lg:py-32"
    >
      {/* Background ambient blurs */}
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-screen-xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-16 flex items-end justify-between border-b border-slate-900/15 pb-4"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-semibold tracking-[0.3em] text-indigo-600">
              01 / 04
            </span>
            <span className="h-px w-10 bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              About
            </span>
          </div>
          <span className="hidden font-mono text-xs text-slate-400 sm:block">
            VINAY KUMAR — 2026
          </span>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-24">
          {/* Left Column: Heading & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <p className="mb-7 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
              A developer in progress
            </p>

            <h2 className="max-w-3xl text-[clamp(3.4rem,8vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-slate-900">
              I build things
              <span className="block text-indigo-600">that hold up.</span>
            </h2>

            <div className="mt-12 flex max-w-xl gap-5 border-l-2 border-indigo-500 pl-5 sm:pl-7">
              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
                {ABOUT_TEXT}
              </p>
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 pl-5 sm:pl-7">
              I prioritize clean code structure, predictable type contracts, and measurable outcomes
              — whether that means reducing MongoDB query latencies at Sahii or achieving a 99
              Lighthouse performance score at Phi Launcher.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 pl-5 sm:pl-7">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 cursor-pointer"
              >
                <span>Start a conversation</span>
                <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-indigo-600" />
              </button>
            </div>

            <div className="mt-16 hidden items-center gap-4 text-slate-400 lg:flex pl-5 sm:pl-7">
              <FiArrowDown className="h-5 w-5 animate-bounce text-indigo-600" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
                Keep scrolling
              </span>
            </div>
          </motion.div>

          {/* Right Column: How I Work Philosophies */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="self-end"
          >
            <div className="mb-6 flex items-center justify-between border-b border-slate-900/15 pb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
                How I work
              </span>
            </div>

            <div>
              {PHILOSOPHIES.map((item, idx) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.18 + idx * 0.1 }}
                  className="group grid grid-cols-[2.5rem_1fr] gap-4 border-b border-slate-900/15 py-7 first:pt-2"
                >
                  <span className="pt-1 font-mono text-xs text-indigo-500 font-semibold">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-600 sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Status Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-20 flex flex-col gap-5 border-t border-slate-900/15 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-mono uppercase tracking-[0.25em] text-slate-400">
            Currently exploring
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-medium text-slate-600">
            <span>distributed systems</span>
            <span className="text-indigo-500">✦</span>
            <span>generative AI</span>
            <span className="text-indigo-500">✦</span>
            <span>RAG pipelines</span>
            <span className="text-indigo-500">✦</span>
            <span>cloud native architecture</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
