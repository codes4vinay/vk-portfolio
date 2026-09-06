import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiDocker,
  SiAmazonwebservices,
  SiLinux,
  SiGithubactions,
  SiNginx,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiZod,
  SiGoogle,
  SiPrisma,
  SiMeilisearch,
} from "react-icons/si";
import { FaJava, FaNodeJs, FaBrain, FaDatabase } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const TECH_DATA = [
  // Languages
  { name: "TypeScript", role: "Strict Types & Contracts", category: "Languages", icon: <SiTypescript className="text-blue-500" /> },
  { name: "JavaScript (ES6+)", role: "Async/Await & Event Loop", category: "Languages", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Python", role: "FastAPI & AI Pipelines", category: "Languages", icon: <SiPython className="text-sky-400" /> },
  { name: "Java", role: "OOP & Core Algorithms", category: "Languages", icon: <FaJava className="text-red-500" /> },

  // Backend & APIs
  { name: "Node.js", role: "Raw Streams & High Concurrency", category: "Backend & Systems", icon: <FaNodeJs className="text-emerald-500" /> },
  { name: "Express.js", role: "REST APIs & Middleware", category: "Backend & Systems", icon: <SiExpress className="text-slate-700 dark:text-slate-300" /> },
  { name: "FastAPI", role: "High Performance Async APIs", category: "Backend & Systems", icon: <SiFastapi className="text-teal-500" /> },
  { name: "MongoDB", role: "Indexing & Aggregations", category: "Backend & Systems", icon: <SiMongodb className="text-emerald-500" /> },
  { name: "Redis", role: "Caching & Background Queues", category: "Backend & Systems", icon: <SiRedis className="text-rose-500" /> },
  { name: "SQL & Relational", role: "Data Schemas & Joins", category: "Backend & Systems", icon: <FaDatabase className="text-indigo-400" /> },
  { name: "Prisma ORM", role: "Type-Safe DB Modeling", category: "Backend & Systems", icon: <SiPrisma className="text-teal-400" /> },
  { name: "Meilisearch", role: "Typo-Tolerant Fast Search", category: "Backend & Systems", icon: <SiMeilisearch className="text-rose-400" /> },
  { name: "Zod", role: "Runtime Schema Validation", category: "Backend & Systems", icon: <SiZod className="text-blue-400" /> },

  // GenAI & Data
  { name: "Pinecone", role: "Managed Vector Search", category: "GenAI & Data", icon: <FaBrain className="text-indigo-500" /> },
  { name: "FAISS", role: "Local Semantic Similarity", category: "GenAI & Data", icon: <FaBrain className="text-emerald-400" /> },
  { name: "RAG Architecture", role: "Context Retrieval & Synthesis", category: "GenAI & Data", icon: <FaBrain className="text-amber-400" /> },
  { name: "Gemini API", role: "Multimodal & Tool Calling", category: "GenAI & Data", icon: <SiGoogle className="text-blue-500" /> },

  // DevOps & Cloud
  { name: "Docker", role: "Multi-stage Containerization", category: "Cloud & DevOps", icon: <SiDocker className="text-sky-500" /> },
  { name: "AWS", role: "Cloud Services & Hosting", category: "Cloud & DevOps", icon: <SiAmazonwebservices className="text-amber-500" /> },
  { name: "GitHub Actions", role: "CI/CD Automated Pipelines", category: "Cloud & DevOps", icon: <SiGithubactions className="text-blue-400" /> },
  { name: "Linux / Bash", role: "Server Management & Scripting", category: "Cloud & DevOps", icon: <SiLinux className="text-amber-400" /> },
  { name: "Nginx", role: "Reverse Proxy & Load Balancing", category: "Cloud & DevOps", icon: <SiNginx className="text-emerald-500" /> },

  // Frontend
  { name: "React 19", role: "Component State & Hooks", category: "Frontend", icon: <SiReact className="text-sky-400" /> },
  { name: "Tailwind CSS", role: "Utility-First Design Tokens", category: "Frontend", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Vite", role: "Lightning Fast Bundling", category: "Frontend", icon: <SiVite className="text-purple-400" /> },
];

const CATEGORIES = ["All", "Backend & Systems", "Languages", "GenAI & Data", "Cloud & DevOps", "Frontend"];

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = TECH_DATA.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section id="technologies" className="relative scroll-mt-24 pb-20">
      <SectionHeading
        eyebrow="TECHNICAL TOOLBOX"
        title="Skills & Technologies"
        subtitle="Tools and technologies I use daily to design, construct, and deploy reliable software products."
      />

      {/* Category Filter Pills */}
      <div className="mb-8 sm:mb-10 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto touch-scroll no-scrollbar pb-2 px-1">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                isActive
                  ? "bg-slate-950 text-white shadow-xs dark:bg-white dark:text-slate-950"
                  : "border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:text-slate-950 dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-white/25 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-5xl">
        <motion.div
          layout
          className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={item.name}
                className="glass-panel interactive-card flex items-center gap-2.5 sm:gap-3.5 rounded-xl sm:rounded-2xl p-2.5 sm:p-4"
              >
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-slate-100 text-lg sm:text-2xl dark:bg-white/[0.04]">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-xs sm:text-sm font-extrabold text-slate-950 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-tight line-clamp-1">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
