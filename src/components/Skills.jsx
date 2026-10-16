import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const TECH_LOGOS = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "FastAPI",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Redis",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  },
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "C++",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Tailwind CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

const CAPABILITY_INDEX = [
  {
    number: "01",
    title: "Languages",
    skills: "C++ / JavaScript / TypeScript / Python / SQL / Bash",
  },
  {
    number: "02",
    title: "Frameworks & APIs",
    skills: "React / Node.js / Express / FastAPI / Tailwind CSS / REST APIs / Socket.IO",
  },
  {
    number: "03",
    title: "GenAI & Search",
    skills: "RAG Pipelines / Pinecone / FAISS / LangChain / Gemini API / MiniLM / Embeddings",
  },
  {
    number: "04",
    title: "Data Stores & ORMs",
    skills: "MongoDB / PostgreSQL / Redis / Prisma ORM / Meilisearch / SQLite",
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    skills: "Docker / Azure / AWS (EC2, ECS) / GitHub Actions / Linux / Nginx / CI/CD",
  },
  {
    number: "06",
    title: "System Engineering",
    skills: "High-Throughput APIs / Fault-Injection / WebSockets / Microservices / Rate Limiting",
  },
];

const LogoMarquee = ({ logos = TECH_LOGOS, speed = 35 }) => {
  return (
    <div
      className="group relative flex overflow-hidden py-4 select-none"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex shrink-0 items-center gap-12 group-hover:[animation-play-state:paused]"
        style={{
          animation: `logo-loop-scroll ${speed}s linear infinite`,
        }}
      >
        {logos.concat(logos).map((item, idx) => (
          <img
            key={`${item.name}-${idx}`}
            src={item.src}
            alt={item.name}
            title={item.name}
            loading="lazy"
            className="h-10 w-10 shrink-0 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-125"
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });

  const ySphere = useTransform(smoothProgress, [0, 1], [-42, 42]);
  const xSphere = useTransform(smoothProgress, [0, 1], [-36, 36]);
  const yHeading = useTransform(smoothProgress, [0, 1], [24, -24]);

  return (
    <section
      ref={containerRef}
      id="skills"
      name="skills"
      style={{ position: "relative" }}
      className="relative w-full overflow-hidden px-4 py-20 text-slate-900 sm:px-6 lg:py-28"
    >
      {/* ===== DESKTOP / TABLET CONTAINER ===== */}
      <div className="relative mx-auto hidden max-w-screen-xl overflow-hidden rounded-[2rem] border border-slate-900/10 bg-gradient-to-br from-white/75 via-indigo-50/35 to-violet-50/45 px-6 py-8 shadow-xl shadow-indigo-900/5 backdrop-blur-2xl sm:block sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        {/* Parallax Blobs */}
        <motion.div
          style={{ x: xSphere, y: ySphere }}
          className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-indigo-400/10 blur-3xl"
        />
        <motion.div
          style={{ x: xSphere, y: ySphere }}
          className="pointer-events-none absolute -bottom-56 left-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-400/10 blur-3xl"
        />

        {/* Subtle grid backdrop */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(15,23,42,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.7)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="flex items-end justify-between border-b border-slate-900/15 pb-5"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs font-semibold tracking-[0.3em] text-indigo-600">
                03 / 04
              </span>
              <span className="h-px w-10 bg-indigo-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Technical Skills
              </span>
            </div>
            <span className="hidden font-mono text-xs text-slate-400 sm:block">
              SYSTEMS / STACK / TOOLS
            </span>
          </motion.div>

          {/* Heading row */}
          <div className="grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20 lg:py-20">
            <motion.div
              style={{ y: yHeading }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-indigo-600">
                The working set
              </p>
              <h2 className="max-w-2xl text-[clamp(3.4rem,8vw,7.8rem)] font-semibold leading-[0.84] tracking-[-0.08em] text-slate-900">
                Built for
                <span className="block text-indigo-600">the whole</span>
                system.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-lg border-l-2 border-indigo-500 pl-5 text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              I move between product interfaces, backend systems, data workflows, and the
              infrastructure that keeps them dependable. The stack is a means to make the experience
              better.
            </motion.p>
          </div>

          {/* Infinite Devicon Logo Loop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative mb-14 overflow-hidden border-y border-slate-900/10 py-5"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-violet-50/70 to-transparent" />
            <LogoMarquee />
          </motion.div>

          {/* Capability Index Label */}
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
              Capability index
            </span>
            <span className="hidden items-center gap-2 text-xs font-medium text-slate-500 sm:flex">
              Fundamentals first <FiArrowUpRight className="h-4 w-4 text-indigo-600" />
            </span>
          </div>

          {/* 6 Capabilities Grid */}
          <div className="grid gap-x-12 border-t border-slate-900/20 lg:grid-cols-2">
            {CAPABILITY_INDEX.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group border-b border-slate-900/15 py-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-indigo-600 font-semibold">
                    {item.number}
                  </span>
                  <span className="h-px w-8 bg-slate-900/20 transition-all duration-300 group-hover:w-16 group-hover:bg-indigo-500" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-600 sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  {item.skills}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="mt-12 flex items-center justify-between border-t border-slate-900/15 pt-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">
              Always learning / always shipping
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-600">
              01--infinity
            </span>
          </div>
        </div>
      </div>

      {/* ===== MOBILE SKILLS CONTAINER (sm:hidden) ===== */}
      <div className="relative mx-auto w-full max-w-screen-xl sm:hidden">
        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

        <div className="relative flex items-end justify-between border-b border-slate-900/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-indigo-600">
              03 / 04
            </span>
            <span className="h-px w-7 bg-indigo-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Skills
            </span>
          </div>
          <span className="font-mono text-[10px] text-slate-400">STACK</span>
        </div>

        <div className="relative pt-12">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-600">
            The working set
          </p>
          <h2 className="max-w-[19rem] text-[4.4rem] font-semibold leading-[0.82] tracking-[-0.09em] text-slate-900">
            Built for
            <span className="block text-indigo-600">the whole</span>
            system.
          </h2>
          <p className="mt-8 max-w-[19rem] border-l-2 border-indigo-500 pl-4 text-[15px] leading-relaxed text-slate-600">
            Interfaces, APIs, data, and infrastructure -- one connected working set.
          </p>
        </div>

        <div className="relative -mx-4 my-12 overflow-hidden border-y border-slate-900/10 bg-white/40 py-4">
          <LogoMarquee speed={22} />
        </div>

        <div className="relative">
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-400">
              Capability index
            </span>
            <FiArrowUpRight className="h-4 w-4 text-indigo-600" />
          </div>

          <div className="border-t-2 border-slate-900">
            {CAPABILITY_INDEX.map((item) => (
              <div key={item.number} className="border-b border-slate-900/15 py-5">
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-mono text-[10px] text-indigo-600 font-bold">
                    {item.number}
                  </span>
                  <span className="h-px w-5 bg-indigo-500/60" />
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <p className="pl-8 text-[13px] leading-relaxed text-slate-600">{item.skills}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-slate-900/15 pt-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-slate-400">
              Always learning / shipping
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-indigo-600">
              01--infinity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
