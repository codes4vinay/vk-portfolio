import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { PROJECTS } from "../constants";

const ENRICHED_PROJECTS = [
  {
    id: 1,
    title: "Chaos Proxy — HTTP Fault-Injection Proxy",
    excerpt:
      "Built an HTTP fault-injection proxy on raw Node.js streams handling connection piping and auto error recovery. Implemented a triangle-wave fault model, p50/p95/p99 telemetry, and a live React + Socket.IO dashboard.",
    image: "/chaos-proxy.jpg",
    date: "Feb 2026",
    tags: ["Node.js", "TypeScript", "React", "Socket.IO", "WebSockets", "Recharts"],
    github: "https://github.com/codes4vinay/Chaos-Proxy",
    demo: null,
  },
  {
    id: 2,
    title: "Mendly — Electronics Repair Marketplace",
    excerpt:
      "Full-stack repair marketplace across 3 RBAC roles with JWT auth, live chat via Socket.IO, Razorpay payments, sub-150ms Azure response times, and a Groq + Pinecone RAG support chatbot.",
    image: "/mendly.png",
    date: "Dec 2025",
    tags: ["React", "Node.js", "Express", "MongoDB", "Pinecone", "RAG", "Azure"],
    github: "https://github.com/codes4vinay/mendly",
    demo: "https://mendly.vinaydev.in/",
  },
  {
    id: 3,
    title: "DocFusion — AI Document Analysis Platform",
    excerpt:
      "AI-powered document analysis platform using FastAPI, OCR, and RAG. Implemented a FAISS semantic retrieval pipeline with MiniLM embeddings, Redis/RQ background workers, and Supabase auth.",
    image: "/project-5.png",
    date: "Nov 2025",
    tags: ["FastAPI", "Python", "React", "FAISS", "Redis", "Docker", "Supabase"],
    github: "https://github.com/codes4vinay/DocFusion",
    demo: "https://docfusion.vinaydev.in/",
  },
  {
    id: 4,
    title: "AI Thumbnail Generator (Thumblify)",
    excerpt:
      "AI-powered tool that generates eye-catching thumbnails for creators. Integrated Google Gemini API to produce intelligent design suggestions and variations with instant preview and download.",
    image: "/thumblify.png",
    date: "Sep 2025",
    tags: ["React", "Node.js", "Gemini API", "JavaScript", "TailwindCSS"],
    github: "https://github.com/codes4vinay/Thumblify",
    demo: "https://thumblify-ai.vercel.app/",
  },
  {
    id: 5,
    title: "Auth7 Kit — Authentication Library",
    excerpt:
      "Plug-and-play authentication package for Node.js and Express apps. Implemented secure cookie JWT tokens, email verification, password reset, session invalidation, and custom user schemas.",
    image: "/npm.png",
    date: "Aug 2025",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "npm Package"],
    github: "https://github.com/codes4vinay/auth7",
    demo: "https://www.npmjs.com/package/auth7-kit",
  },
  {
    id: 6,
    title: "Filespire — Secure File Sharing Platform",
    excerpt:
      "Modern file sharing platform for uploading and distributing files securely with shareable links, instant QR code generator, and direct email distribution workflows.",
    image: "/filespire.png",
    date: "Jul 2025",
    tags: ["React", "Node.js", "MongoDB", "Firebase", "Express"],
    github: "https://github.com/codes4vinay/filespire",
    demo: "https://filespire.in/",
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/50 backdrop-blur-xl shadow-lg shadow-black/5 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1"
    >
      {/* Spotlight Cursor Glow */}
      <div
        className="pointer-events-none absolute -inset-px z-10 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.08), transparent 40%)`,
        }}
      />

      {/* Image Preview with Zoom */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.date && (
          <span className="absolute right-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-700 backdrop-blur-md shadow-xs">
            {project.date}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col p-6">
        <h3 className="mb-2.5 text-lg font-semibold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-indigo-600">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-xs leading-relaxed text-slate-600 line-clamp-4">
          {project.excerpt}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-md bg-indigo-50 px-2.5 py-0.5 text-[10px] font-medium text-indigo-600"
              >
                {t}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Action Links */}
        <div className="flex items-center gap-4 border-t border-slate-900/10 pt-3.5 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 transition-colors hover:text-slate-900"
            >
              <FaGithub size={15} />
              <span>Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 transition-colors hover:text-indigo-800"
            >
              <FiExternalLink size={13} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      name="projects"
      className="w-full min-h-svh text-slate-900 py-20 relative z-10 flex flex-col justify-center"
    >
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col justify-center w-full">
        {/* Section Heading matching target aesthetic */}
        <div className="pb-12 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold inline border-b-4 border-indigo-600"
          >
            <span className="text-slate-900">Selected Work</span>
          </motion.h2>
          <p className="mt-4 text-slate-500 text-sm md:text-base max-w-xl">
            A curated showcase of distributed proxies, developer tools, GenAI pipelines, and
            full-stack systems built for performance.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ENRICHED_PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
