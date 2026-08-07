import React, { useState } from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMongodb, TbBrandGithub } from "react-icons/tb";
import {
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaAws,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiPython,
  SiVite,
  SiPostman,
  SiNpm,
  SiGithubactions,
  SiCloudflare,
  SiRender,
  SiNginx,
  SiZod,
  SiFastapi,
  SiRedis,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Languages", "Backend & APIs", "GenAI & Data", "Frontend", "DevOps & Cloud"];

  const techStack = [
    // Programming Languages
    {
      name: "JavaScript",
      category: "Languages",
      icon: <SiJavascript className="text-3xl text-yellow-400" />,
    },
    {
      name: "TypeScript",
      category: "Languages",
      icon: <SiTypescript className="text-3xl text-blue-500" />,
    },
    {
      name: "Python",
      category: "Languages",
      icon: <SiPython className="text-3xl text-blue-400" />,
    },
    {
      name: "Java",
      category: "Languages",
      icon: <FaJava className="text-3xl text-red-500" />,
    },

    // Backend & APIs
    {
      name: "Node.js",
      category: "Backend & APIs",
      icon: <FaNodeJs className="text-3xl text-emerald-500" />,
    },
    {
      name: "Express.js",
      category: "Backend & APIs",
      icon: <SiExpress className="text-3xl text-slate-700 dark:text-slate-200" />,
    },
    {
      name: "FastAPI",
      category: "Backend & APIs",
      icon: <SiFastapi className="text-3xl text-teal-500" />,
    },
    {
      name: "Zod",
      category: "Backend & APIs",
      icon: <SiZod className="text-3xl text-indigo-500" />,
    },
    {
      name: "Postman",
      category: "Backend & APIs",
      icon: <SiPostman className="text-3xl text-orange-500" />,
    },

    // GenAI & Data
    {
      name: "LangChain",
      category: "GenAI & Data",
      icon: <FaBrain className="text-3xl text-amber-500" />,
    },
    {
      name: "MongoDB",
      category: "GenAI & Data",
      icon: <TbBrandMongodb className="text-3xl text-emerald-500" />,
    },
    {
      name: "Pinecone",
      category: "GenAI & Data",
      icon: <FaDatabase className="text-3xl text-violet-500" />,
    },
    {
      name: "Redis",
      category: "GenAI & Data",
      icon: <SiRedis className="text-3xl text-rose-500" />,
    },
    {
      name: "SQL",
      category: "GenAI & Data",
      icon: <FaDatabase className="text-3xl text-sky-500" />,
    },

    // Frontend
    {
      name: "React",
      category: "Frontend",
      icon: <RiReactjsLine className="text-3xl text-cyan-400" />,
    },
    {
      name: "TailwindCSS",
      category: "Frontend",
      icon: <RiTailwindCssFill className="text-3xl text-sky-400" />,
    },
    {
      name: "Vite",
      category: "Frontend",
      icon: <SiVite className="text-3xl text-purple-400" />,
    },
    {
      name: "HTML5",
      category: "Frontend",
      icon: <FaHtml5 className="text-3xl text-orange-600" />,
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: <FaCss3Alt className="text-3xl text-blue-600" />,
    },

    // DevOps & Cloud
    {
      name: "Docker",
      category: "DevOps & Cloud",
      icon: <FaDocker className="text-3xl text-sky-500" />,
    },
    {
      name: "AWS",
      category: "DevOps & Cloud",
      icon: <FaAws className="text-3xl text-amber-500" />,
    },
    {
      name: "Linux",
      category: "DevOps & Cloud",
      icon: <FaLinux className="text-3xl text-slate-800 dark:text-slate-200" />,
    },
    {
      name: "GitHub Actions",
      category: "DevOps & Cloud",
      icon: <SiGithubactions className="text-3xl text-blue-500" />,
    },
    {
      name: "Git",
      category: "DevOps & Cloud",
      icon: <FaGitAlt className="text-3xl text-orange-500" />,
    },
    {
      name: "Nginx",
      category: "DevOps & Cloud",
      icon: <SiNginx className="text-3xl text-emerald-600" />,
    },
    {
      name: "Cloudflare",
      category: "DevOps & Cloud",
      icon: <SiCloudflare className="text-3xl text-orange-500" />,
    },
    {
      name: "Render",
      category: "DevOps & Cloud",
      icon: <SiRender className="text-3xl text-purple-500" />,
    },
  ];


  const filteredTech =
    activeCategory === "All"
      ? techStack
      : techStack.filter((item) => item.category === activeCategory);

  return (
    <section id="technologies" className="relative scroll-mt-28 pb-24">
      <SectionHeading
        eyebrow="TECHNICAL TOOLBOX"
        title="Technologies & Frameworks"
        subtitle="Tools, languages, databases, and platforms I use to build scalable products."
      />

      <div className="mx-auto max-w-5xl">
        {/* Category Tabs with Animated Pill */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative rounded-full px-4 py-2 text-xs font-bold font-code transition-colors duration-200 ${
                  isActive
                    ? "text-white dark:text-slate-950"
                    : "border border-slate-900/10 bg-white/70 text-slate-700 hover:bg-slate-900/10 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:bg-white/10"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-tech-category-pill"
                    className="absolute inset-0 rounded-full bg-violet-600 shadow-lg shadow-violet-600/30 dark:bg-cyan-500 dark:shadow-cyan-500/30 z-0"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid - Keyed by Category for Instant Smooth Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5"
          >
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group glass-surface relative flex flex-col items-center justify-center rounded-2xl border border-slate-900/10 p-5 text-center dark:border-white/10 glass-card-hover"
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-900/5 bg-slate-900/5 shadow-inner transition-transform duration-300 group-hover:scale-110 dark:border-white/10 dark:bg-slate-900/80">
                  {tech.icon}
                </div>
                <p className="text-xs font-bold text-slate-900 dark:text-slate-200 font-code">
                  {tech.name}
                </p>
                <span className="mt-1 text-[10px] font-medium text-slate-500 dark:text-slate-400">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Technologies;



