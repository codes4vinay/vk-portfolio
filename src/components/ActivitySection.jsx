import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FiGithub, FiExternalLink, FiCheckCircle, FiActivity } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const GITHUB_USERNAME = "codes4vinay";
const LEETCODE_USERNAME = "vinayislive";

const FALLBACK_YEARS = ["2026", "2025", "2024"];

const ActivitySection = () => {
  const [selectedYear, setSelectedYear] = useState("2026");
  const [activeTab, setActiveTab] = useState("github");

  return (
    <section id="activity" className="relative scroll-mt-24 pb-20">
      <SectionHeading
        eyebrow="ENGINEERING PROOF"
        title="Activity & Problem Solving"
        subtitle="Consistent code contributions, open-source repositories, and algorithm problem-solving metrics."
      />

      <div className="mx-auto max-w-5xl">
        {/* Toggle between GitHub and LeetCode */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <button
            onClick={() => setActiveTab("github")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
              activeTab === "github"
                ? "bg-slate-950 text-white shadow-xs dark:bg-white dark:text-slate-950"
                : "border border-slate-300 bg-white text-slate-800 hover:text-slate-950 dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:text-white"
            }`}
          >
            <FiGithub className="text-sm" />
            <span>GitHub Activity</span>
          </button>

          <button
            onClick={() => setActiveTab("leetcode")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
              activeTab === "leetcode"
                ? "bg-slate-950 text-white shadow-xs dark:bg-white dark:text-slate-950"
                : "border border-slate-300 bg-white text-slate-800 hover:text-slate-950 dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:text-white"
            }`}
          >
            <SiLeetcode className="text-sm text-amber-500" />
            <span>LeetCode Stats</span>
          </button>
        </div>

        {/* Content Container */}
        <div className="glass-panel rounded-2xl p-4 sm:p-8">
          {activeTab === "github" ? (
            <div>
              {/* GitHub Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/80 pb-5 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-950 dark:bg-white/10 dark:text-white text-lg">
                    <FiGithub />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-950 dark:text-white font-code">
                      github.com/{GITHUB_USERNAME}
                    </h3>
                    <p className="text-xs text-slate-800 dark:text-slate-200 font-semibold">
                      Open source repositories, pull requests, and commit logs
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-900 shadow-2xs transition hover:bg-slate-50 dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <span>View Profile</span>
                    <FiExternalLink className="text-[10px]" />
                  </a>
                </div>
              </div>

              {/* GitHub Metrics Overview */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-white/5 dark:bg-white/[0.02]">
                  <div className="text-2xl font-extrabold text-slate-950 dark:text-white">500+</div>
                  <div className="text-xs text-slate-800 dark:text-slate-200 font-bold mt-0.5">Annual Commits</div>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-white/5 dark:bg-white/[0.02]">
                  <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">18+</div>
                  <div className="text-xs text-slate-800 dark:text-slate-200 font-bold mt-0.5">Public Repositories</div>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-white/5 dark:bg-white/[0.02]">
                  <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">Top 15%</div>
                  <div className="text-xs text-slate-800 dark:text-slate-200 font-bold mt-0.5">Contribution Consistency</div>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-white/5 dark:bg-white/[0.02]">
                  <div className="text-2xl font-extrabold text-slate-950 dark:text-white">TypeScript</div>
                  <div className="text-xs text-slate-800 dark:text-slate-200 font-bold mt-0.5">Primary Language</div>
                </div>
              </div>

              {/* Repositories Spotlight */}
              <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
                  Key Repositories
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <a
                    href="https://github.com/codes4vinay/Chaos-Proxy"
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-slate-300/80 bg-white/60 p-3.5 transition hover:border-indigo-500/50 dark:border-white/10 dark:bg-transparent dark:hover:border-indigo-400/40"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        Chaos-Proxy
                      </span>
                      <FiExternalLink className="text-xs text-slate-500" />
                    </div>
                    <p className="mt-1 text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 font-normal line-clamp-2">
                      HTTP fault-injection proxy on raw Node.js streams.
                    </p>
                  </a>

                  <a
                    href="https://github.com/codes4vinay/mendly"
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-slate-300/80 bg-white/60 p-3.5 transition hover:border-indigo-500/50 dark:border-white/10 dark:bg-transparent dark:hover:border-indigo-400/40"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        mendly
                      </span>
                      <FiExternalLink className="text-xs text-slate-500" />
                    </div>
                    <p className="mt-1 text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 font-normal line-clamp-2">
                      Full-stack repair marketplace with Pinecone RAG support.
                    </p>
                  </a>

                  <a
                    href="https://github.com/codes4vinay/DocFusion"
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-slate-300/80 bg-white/60 p-3.5 transition hover:border-indigo-500/50 dark:border-white/10 dark:bg-transparent dark:hover:border-indigo-400/40"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        DocFusion
                      </span>
                      <FiExternalLink className="text-xs text-slate-500" />
                    </div>
                    <p className="mt-1 text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 font-normal line-clamp-2">
                      AI document analysis with FastAPI, OCR, and FAISS.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* LeetCode Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/80 pb-5 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 text-lg">
                    <SiLeetcode />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-950 dark:text-white font-code">
                      leetcode.com/u/{LEETCODE_USERNAME}
                    </h3>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      Data Structures, Algorithms & Problem Solving Consistency
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-900 shadow-2xs transition hover:bg-slate-50 dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <span>View Profile</span>
                    <FiExternalLink className="text-[10px]" />
                  </a>
                </div>
              </div>

              {/* LeetCode Breakdown */}
              <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4 text-center sm:text-left">
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-50/70 p-2.5 sm:p-4 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                  <div className="text-[10px] sm:text-xs font-bold uppercase text-emerald-900 dark:text-emerald-400">
                    Easy
                  </div>
                  <div className="mt-1 sm:mt-2 text-xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                    120+
                  </div>
                  <div className="mt-0.5 text-[10px] sm:text-xs text-slate-700 dark:text-slate-300 font-semibold hidden xs:block sm:block">Fundamentals</div>
                </div>

                <div className="rounded-xl border border-amber-500/30 bg-amber-50/70 p-2.5 sm:p-4 dark:border-amber-500/20 dark:bg-amber-500/10">
                  <div className="text-[10px] sm:text-xs font-bold uppercase text-amber-900 dark:text-amber-400">
                    Medium
                  </div>
                  <div className="mt-1 sm:mt-2 text-xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                    150+
                  </div>
                  <div className="mt-0.5 text-[10px] sm:text-xs text-slate-700 dark:text-slate-300 font-semibold hidden xs:block sm:block">Trees & DP</div>
                </div>

                <div className="rounded-xl border border-rose-500/30 bg-rose-50/70 p-2.5 sm:p-4 dark:border-rose-500/20 dark:bg-rose-500/10">
                  <div className="text-[10px] sm:text-xs font-bold uppercase text-rose-900 dark:text-rose-400">
                    Hard
                  </div>
                  <div className="mt-1 sm:mt-2 text-xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                    30+
                  </div>
                  <div className="mt-0.5 text-[10px] sm:text-xs text-slate-700 dark:text-slate-300 font-semibold hidden xs:block sm:block">Advanced</div>
                </div>
              </div>

              {/* Core Topics Covered */}
              <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
                  Core Topics Mastered
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Dynamic Programming",
                    "Binary Search",
                    "Depth & Breadth First Search",
                    "Two Pointers & Sliding Window",
                    "Hash Tables & Sets",
                    "Binary Trees & BST",
                    "Graphs & Topological Sort",
                    "Monotonic Stack",
                  ].map((topic) => (
                    <span
                      key={topic}
                      className="rounded-lg border border-slate-300 bg-slate-100/90 px-2.5 py-1 text-xs font-semibold text-slate-800 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
