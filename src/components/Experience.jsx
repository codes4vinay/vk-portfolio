import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { EXPERIENCES } from "../constants";

const EXPERIENCE_DATA = [
  {
    id: "01",
    company: "Sahii",
    role: "Full Stack Developer Intern",
    type: "Internship",
    duration: "July 2026 – Sept 2026",
    location: "Remote",
    link: "https://sahii.in",
    overview:
      "Engineered a cross-order item-level PO engine, zero-login RFQ portal, and real-time webhook order sync for a live commerce platform.",
    points: [
      "Engineered a cross-order item-level PO engine in Node.js, Express, MongoDB that pools identical SKUs across customer orders and supports split-quantity multi-vendor awarding.",
      "Built a zero-login RFQ portal with tokenized URLs and QR codes, plus automated RFQ and PO alerts via the WhatsApp Cloud API.",
      "Designed a real-time webhook sync with the live e-commerce platform, auto-mapping orders across 10 categories and 22 subcategories and computing gross margin.",
      "Shipped 10+ REST APIs with JWT auth, Zod validation, and RBAC across 3 roles; automated deployments using GitHub Actions and PM2.",
    ],
    stack:
      "Node.js · Express · MongoDB · REST APIs · WhatsApp Cloud API · Webhooks · Zod · JWT · RBAC · GitHub Actions · PM2",
  },
  {
    id: "02",
    company: "Phi Launcher",
    role: "Web Developer",
    type: "Freelance",
    duration: "Oct 2025 - Nov 2025",
    location: "Freelance | Remote",
    link: "https://philauncher.com",
    overview:
      "Engineered modular React components, integrated REST APIs, and led frontend performance optimization initiatives.",
    points: [
      "Engineered responsive, reusable UI components with React.js and Tailwind CSS to build scalable, mobile-first interfaces.",
      "Integrated 10+ REST APIs and collaborated with backend to deliver seamless, end-to-end application functionality.",
      "Optimized frontend performance: cut bundle size by 67% and boosted Lighthouse score from 60 to 99.",
      "Shipped production-ready features in a fast-paced startup environment, contributing to Phi Launcher’s product growth.",
    ],
    stack:
      "React.js · Tailwind CSS · REST APIs · Performance Optimization · Lighthouse · Core Web Vitals",
  },
];

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = EXPERIENCE_DATA[selectedIndex];

  return (
    <section
      id="experience"
      name="experience"
      className="relative flex min-h-svh w-full items-center overflow-hidden px-6 py-24 text-slate-900 lg:py-32"
    >
      {/* Background ambient sphere */}
      <div className="pointer-events-none absolute -right-36 top-1/4 h-[34rem] w-[34rem] rounded-full bg-indigo-400/10 blur-3xl" />

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
              02 / 04
            </span>
            <span className="h-px w-10 bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Experience
            </span>
          </div>
          <span className="hidden font-mono text-xs text-slate-400 sm:block">
            SELECTED WORK
          </span>
        </motion.div>

        {/* Timeline & Details Split Grid */}
        <div className="grid gap-14 lg:min-h-[560px] lg:grid-cols-[0.38fr_0.62fr] lg:gap-24">
          {/* Left Column: Vertical Interactive Timeline */}
          <div className="relative">
            {/* Timeline base track */}
            <div className="absolute bottom-5 left-[9px] top-5 w-px bg-slate-900/15" />

            {/* Glowing animated fill line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[9px] top-5 h-[calc(100%-2.5rem)] w-px origin-top bg-indigo-600"
            />

            <div className="relative flex flex-col gap-10">
              {EXPERIENCE_DATA.map((item, idx) => {
                const isActive = idx === selectedIndex;
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.12 }}
                    onClick={() => setSelectedIndex(idx)}
                    className="group flex w-full cursor-pointer items-start gap-7 text-left focus:outline-none"
                  >
                    {/* Ring Node */}
                    <span
                      className={`relative z-10 mt-1 flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border-2 bg-white transition-all duration-300 ${
                        isActive
                          ? "border-indigo-600 shadow-[0_0_0_6px_rgba(99,102,241,0.12)]"
                          : "border-slate-400 group-hover:border-indigo-500"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-colors ${
                          isActive
                            ? "bg-indigo-600"
                            : "bg-transparent group-hover:bg-indigo-400"
                        }`}
                      />
                    </span>

                    {/* Entry Info */}
                    <span
                      className={`min-w-0 transition-opacity ${
                        isActive ? "opacity-100" : "opacity-45 group-hover:opacity-100"
                      }`}
                    >
                      <span className="mb-2 block font-mono text-xs tracking-[0.2em] text-indigo-600">
                        {item.duration}
                      </span>
                      <span className="block text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        {item.company}
                      </span>
                      <span className="mt-1 block text-sm text-slate-500">{item.role}</span>
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-16 hidden items-center gap-3 text-slate-400 lg:flex">
              <FiArrowUpRight className="h-5 w-5 text-indigo-600" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                Tap an entry to explore
              </span>
            </div>
          </div>

          {/* Right Column: Detailed Experience Card */}
          <div className="relative min-h-[32rem] lg:h-[560px]">
            {/* Watermark ID */}
            <div className="absolute -left-7 top-0 hidden font-mono text-[10rem] font-semibold leading-none tracking-[-0.12em] text-indigo-600/[0.07] lg:block select-none pointer-events-none">
              {selected.id}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="relative flex h-full flex-col"
              >
                {/* Header with Title & Link */}
                <div className="flex flex-wrap items-start justify-between gap-5 border-b-2 border-slate-900 pb-7">
                  <div>
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-indigo-600">
                      {selected.id} / {selected.type}
                    </p>
                    <h3 className="max-w-xl text-3xl font-semibold leading-[0.95] tracking-[-0.045em] text-slate-900 sm:text-5xl">
                      {selected.role}
                    </h3>
                  </div>

                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full border border-slate-300 text-indigo-600 hover:border-indigo-600 hover:bg-indigo-50 transition-colors"
                    aria-label={`Visit ${selected.company}`}
                  >
                    <FiArrowUpRight className="h-6 w-6 shrink-0" />
                  </a>
                </div>

                {/* Details Grid */}
                <div className="grid min-h-0 flex-1 gap-10 overflow-y-auto py-8 pr-1 [scrollbar-width:none] sm:grid-cols-[0.85fr_1.15fr] sm:gap-14 [&::-webkit-scrollbar]:hidden">
                  {/* Left sub-column */}
                  <div className="self-start">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                      {selected.duration}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-600">
                      {selected.location} • {selected.company}
                    </p>
                    <p className="mt-8 border-l-2 border-indigo-500 pl-4 text-base font-medium leading-relaxed text-slate-700">
                      {selected.overview}
                    </p>
                  </div>

                  {/* Right sub-column: What I worked on */}
                  <div className="self-start">
                    <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                      What I worked on
                    </p>
                    <ul className="space-y-4">
                      {selected.points.map((point, pIdx) => (
                        <motion.li
                          key={pIdx}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: pIdx * 0.07 }}
                          className="flex gap-3 text-sm leading-relaxed text-slate-600 sm:text-base"
                        >
                          <FiCheck className="mt-1 h-4 w-4 shrink-0 text-indigo-600" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Tech Stack strip */}
                <div className="flex items-center justify-between border-t border-slate-900/15 pt-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Stack
                  </span>
                  <span className="text-right text-xs font-semibold text-slate-700 sm:text-sm">
                    {selected.stack}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Section bottom label */}
        <div className="mt-20 flex items-center justify-between border-t border-slate-900/15 pt-5">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
            Built through curiosity
          </span>
          <span className="hidden items-center gap-2 text-xs font-medium text-slate-500 sm:flex">
            More chapters loading
            <FiArrowUpRight className="h-4 w-4 text-indigo-600" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
