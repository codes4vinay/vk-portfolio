import React from "react";
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
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiJavascript,
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
} from "react-icons/si";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const Technologies = () => {
  const techStack = [
    // Frontend
    {
      name: "React",
      icon: <RiReactjsLine className="text-4xl text-cyan-700 dark:text-cyan-300" />,
    },
    {
      name: "TailwindCSS",
      icon: <RiTailwindCssFill className="text-4xl text-sky-700 dark:text-sky-300" />,
    },

    // Backend
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-4xl text-emerald-700 dark:text-emerald-300" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-4xl text-slate-700 dark:text-stone-200" />,
    },
    {
      name: "MongoDB",
      icon: <TbBrandMongodb className="text-4xl text-emerald-700 dark:text-emerald-300" />,
    },
    {
      name: "SQL",
      icon: <FaDatabase className="text-4xl text-sky-700 dark:text-sky-200" />,
    },
    {
      name: "Neo4j",
      icon: <FaProjectDiagram className="text-4xl text-emerald-700 dark:text-emerald-200" />,
    },
    {
      name: "Pinecone",
      icon: <FaDatabase className="text-4xl text-violet-700 dark:text-violet-200" />,
    },
    {
      name: "LangChain",
      icon: <FaBrain className="text-4xl text-amber-700 dark:text-amber-200" />,
    },
    {
      name: "LangGraph",
      icon: <FaProjectDiagram className="text-4xl text-indigo-700 dark:text-indigo-200" />,
    },
    {
      name: "LangSmith",
      icon: <FaBrain className="text-4xl text-rose-700 dark:text-rose-200" />,
    },

    // Languages & Tools
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-4xl text-yellow-600 dark:text-yellow-200" />,
    },
    {
      name: "Python",
      icon: <SiPython className="text-4xl text-sky-700 dark:text-sky-200" />,
    },
    {
      name: "Java",
      icon: <FaJava className="text-4xl text-rose-700 dark:text-rose-200" />,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-4xl text-orange-700 dark:text-orange-200" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-4xl text-blue-700 dark:text-blue-200" />,
    },
    {
      name: "Vite",
      icon: <SiVite className="text-4xl text-violet-700 dark:text-violet-200" />,
    },
    {
      name: "NPM",
      icon: <SiNpm className="text-4xl text-red-700 dark:text-red-200" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-4xl text-orange-700 dark:text-orange-200" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-4xl text-orange-700 dark:text-orange-200" />,
    },

    // DevOps & Cloud
    {
      name: "Docker",
      icon: <FaDocker className="text-4xl text-sky-700 dark:text-sky-200" />,
    },
    {
      name: "Linux",
      icon: <FaLinux className="text-4xl text-slate-700 dark:text-stone-200" />,
    },
    {
      name: "AWS",
      icon: <FaAws className="text-4xl text-amber-700 dark:text-amber-200" />,
    },
    {
      name: "GitHub",
      icon: <TbBrandGithub className="text-4xl text-slate-800 dark:text-stone-100" />,
    },
    {
      name: "GitHub Actions",
      icon: <SiGithubactions className="text-4xl text-blue-700 dark:text-blue-200" />,
    },
    {
      name: "Zod",
      icon: <SiZod className="text-4xl text-indigo-700 dark:text-indigo-200" />,
    },
    {
      name: "Cloudflare",
      icon: <SiCloudflare className="text-4xl text-orange-700 dark:text-orange-200" />,
    },
    {
      name: "Render",
      icon: <SiRender className="text-4xl text-indigo-700 dark:text-indigo-200" />,
    },
    {
      name: "Nginx",
      icon: <SiNginx className="text-4xl text-emerald-700 dark:text-emerald-200" />,
    },
  ];

  return (
    <section id="technologies" className="scroll-mt-28 pb-24">
      <SectionHeading
        eyebrow="TOOLBOX"
        title="Tech stack I use to build"
        subtitle="Backend, GenAI/RAG, and DevOps tools I use most."
      />

      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.02, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl border border-slate-900/10 bg-white/70 p-4 backdrop-blur-md transition hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_55%)]" />
              </div>
              <div className="relative flex flex-col items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-900/10 bg-white/70 shadow-sm shadow-slate-900/5 transition-transform duration-300 group-hover:scale-[1.03] dark:border-white/10 dark:bg-black/30 dark:shadow-none">
                  {tech.icon}
                </div>
                <p className="text-xs font-semibold text-slate-800 dark:text-stone-200 sm:text-sm">
                  {tech.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;

