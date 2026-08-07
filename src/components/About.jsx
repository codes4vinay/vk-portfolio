import React from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";
import SectionHeading from "./SectionHeading";
import { FaServer, FaBrain, FaDocker, FaCode, FaRocket } from "react-icons/fa";

const About = () => {
  const bentoCards = [
    {
      icon: <FaServer className="text-xl text-violet-500" />,
      title: "Backend & Systems",
      value: "Node.js • Express • MongoDB • SQL • Python",
      color: "from-violet-500/10 via-indigo-500/5 to-transparent",
      borderColor: "border-violet-500/20",
    },
    {
      icon: <FaBrain className="text-xl text-cyan-500" />,
      title: "GenAI & RAG Workflows",
      value: "LangChain • Vector Search (Pinecone) • RAG",

      color: "from-cyan-500/10 via-blue-500/5 to-transparent",
      borderColor: "border-cyan-500/20",
    },
    {
      icon: <FaDocker className="text-xl text-fuchsia-500" />,
      title: "DevOps & Cloud",
      value: "Docker • CI/CD Pipelines • AWS & Cloud-Native Deployments",
      color: "from-fuchsia-500/10 via-purple-500/5 to-transparent",
      borderColor: "border-fuchsia-500/20",
    },
  ];

  return (
    <section id="about" className="relative scroll-mt-28 pb-24 pt-4">
      <SectionHeading
        eyebrow="ENGINEERING PHILOSOPHY"
        title="Building scalable systems with GenAI capabilities"
        subtitle="Full Stack Developer focused on clean architecture, high-performance backends, and agent workflows."
      />

      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-12">
        {/* Main Bio Card - Spans 7 columns */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-surface glass-card-hover lg:col-span-7 flex flex-col justify-between rounded-3xl p-7 sm:p-9 border border-slate-900/10 dark:border-white/10"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-violet-500/10 px-3 py-1.5 text-xs font-bold text-violet-600 dark:bg-violet-400/10 dark:text-violet-300 font-code">
              <FaCode className="text-sm" />
              <span>whoami</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              Hi, I'm Vinay Kumar
            </h3>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
              {ABOUT_TEXT}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-slate-900/10 dark:border-white/10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-code">
              <FaRocket className="text-xs" /> Production-Focused
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-code">
              India (UTC+5:30)
            </span>
          </div>
        </motion.div>

        {/* Vertical Stack of Specialty Cards - Spans 5 columns */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {bentoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className={`glass-surface relative overflow-hidden rounded-3xl p-6 border ${card.borderColor} bg-gradient-to-br ${card.color}`}
            >
              <div className="flex items-center gap-3.5 mb-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/80 shadow-sm dark:bg-slate-900/80 border border-slate-900/10 dark:border-white/10">
                  {card.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-code">
                  {card.title}
                </h4>
              </div>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-300 pl-1">
                {card.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

