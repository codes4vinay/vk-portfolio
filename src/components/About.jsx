import React, { useState } from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";
import SectionHeading from "./SectionHeading";
import {
  FiServer,
  FiCpu,
  FiCloud,
  FiCheckCircle,
  FiShield,
  FiDatabase,
  FiChevronDown,
} from "react-icons/fi";

const About = () => {
  const [expanded, setExpanded] = useState(false);
  const pillars = [
    {
      icon: <FiServer className="text-indigo-500 text-xl" />,
      title: "Backend & Systems Architecture",
      desc: "Architecting high-throughput REST APIs, implementing raw HTTP stream handling without heavy frameworks, and optimizing query indexing across MongoDB and SQL.",
      tags: ["Node.js", "Express", "MongoDB", "FastAPI", "Redis"],
    },
    {
      icon: <FiCpu className="text-emerald-500 text-xl" />,
      title: "GenAI & Semantic Retrieval",
      desc: "Engineering production-ready RAG pipelines with vector databases (Pinecone, FAISS), implementing semantic search, chunking strategies, and LLM orchestration.",
      tags: ["RAG", "Pinecone", "LangChain", "FAISS", "Gemini API"],
    },
    {
      icon: <FiCloud className="text-sky-500 text-xl" />,
      title: "DevOps & Cloud Deployment",
      desc: "Containerizing services with Docker, deploying resilient microservices to Azure and AWS, and automating continuous delivery pipelines with GitHub Actions.",
      tags: ["Docker", "Azure", "AWS", "CI/CD", "Nginx"],
    },
  ];

  return (
    <section id="about" className="relative scroll-mt-24 pb-14 sm:pb-20">
      <SectionHeading
        eyebrow="ENGINEERING PHILOSOPHY"
        title="Scalable Architecture & Clean Design"
        subtitle="Focused on shipping resilient services, thoughtful APIs, and practical AI applications that solve real-world problems."
      />

      <div className="mx-auto grid max-w-5xl gap-4 sm:gap-6 lg:grid-cols-12 lg:items-stretch">
        {/* Left: Bio Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass-panel flex flex-col justify-between rounded-2xl p-4.5 sm:p-8 lg:col-span-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-code">
              <span className="h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              <span>Bio & Background</span>
            </div>
            <h3 className="mt-3 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              Hi, I'm Vinay Kumar
            </h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-900 dark:text-slate-100 font-medium">
              {ABOUT_TEXT}
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-900 dark:text-slate-100 font-medium">
              I prioritize clean code structure, predictable type contracts with Zod and TypeScript, and measurable outcomes — whether that means cutting slow MongoDB queries at Sahii or achieving a 99 Lighthouse performance score at Phi Launcher.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="font-extrabold text-slate-950 dark:text-white block text-[13px]">Location</span>
              <span className="text-slate-800 dark:text-slate-200 font-semibold mt-0.5 block">India (Open to Remote / Onsite)</span>
            </div>
            <div>
              <span className="font-extrabold text-slate-950 dark:text-white block text-[13px]">Education</span>
              <span className="text-slate-800 dark:text-slate-200 font-semibold mt-0.5 block">Indian Institute of Information Technology, Una</span>
            </div>
          </div>
        </motion.div>

        {/* Right: 3 Architectural Pillars */}
        <div className="grid gap-4 lg:col-span-6">
          {pillars.map((pillar, idx) => {
            const isHiddenOnMobile = !expanded && idx > 0;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`glass-panel interactive-card rounded-2xl p-4 sm:p-5 ${
                  isHiddenOnMobile ? "hidden sm:block" : "block"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/[0.04]">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-950 dark:text-white">
                      {pillar.title}
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
                      {pillar.desc}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-slate-300 bg-slate-100 px-2 py-0.5 text-[11px] font-bold font-code text-slate-900 dark:border-white/15 dark:bg-white/10 dark:text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Mobile Progressive Disclosure Toggle */}
          <div className="sm:hidden mt-2 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-900 shadow-2xs transition hover:bg-slate-100 dark:border-white/15 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <span>{expanded ? "Show Less" : "More About Me"}</span>
              <FiChevronDown
                className={`text-sm text-indigo-600 dark:text-indigo-400 transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
