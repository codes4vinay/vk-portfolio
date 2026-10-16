import React from "react";
import { FiArrowRight, FiFileText } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import GlowingButton from "./GlowingButton";
import MacbookModel, { OrbitalFallback } from "./MacbookModel";

const Hero = () => {
  const scrollToProjects = (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      name="home"
      className="w-full text-slate-900 overflow-hidden relative"
      style={{ minHeight: "100svh" }}
    >
      {/* ===== DESKTOP VIEW (lg+) ===== */}
      <div
        className="hidden lg:flex max-w-screen-xl mx-auto px-6 flex-row items-center justify-between relative z-10"
        style={{ minHeight: "100svh" }}
      >
        <div className="w-full lg:w-1/2 mt-20 md:mt-0 pr-6">
          <p
            style={{ animation: "fadeSlideUp 0.6s ease forwards" }}
            className="opacity-0 text-sm md:text-md font-medium tracking-[0.2em] uppercase text-indigo-600 mb-2 font-mono"
          >
            Hi, my name is
          </p>

          <h1
            style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.15s" }}
            className="opacity-0 text-6xl xl:text-8xl font-semibold tracking-tighter leading-tight mb-2"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d1b69] via-[#4338ca] to-[#6366f1]">
              Vinay Kumar
            </span>
          </h1>

          <h2
            style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.3s" }}
            className="opacity-0 text-2xl sm:text-4xl font-light tracking-tight text-slate-500 mb-6"
          >
            Full Stack Developer
          </h2>

          <p
            style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.45s" }}
            className="opacity-0 text-slate-600 py-2 max-w-lg text-lg font-light mb-8 leading-relaxed"
          >
            Computer Science Engineer focused on building secure APIs, realtime systems, and
            GenAI/RAG architectures that ship. Passionate about system design, scalable services,
            and crafting high-performance web experiences.
          </p>

          <div
            style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.6s" }}
            className="opacity-0 flex flex-col sm:flex-row gap-5 items-start sm:items-center"
          >
            <GlowingButton onClick={scrollToProjects} className="px-8 py-4 text-base font-medium">
              <span>View My Work</span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </GlowingButton>

            {/* Social Pill Strip */}
            <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-black/5 border border-black/10 backdrop-blur-md">
              <a
                href="https://github.com/codes4vinay"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="text-slate-500 hover:text-slate-900 hover:scale-110 transition-[color,transform] duration-300"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://leetcode.com/u/vinayislive/"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode Profile"
                className="text-slate-500 hover:text-amber-500 hover:scale-110 transition-[color,transform] duration-300"
              >
                <SiLeetcode size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/vinaykumar2004/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="text-slate-500 hover:text-blue-600 hover:scale-110 transition-[color,transform] duration-300"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="/Vinay_Kumar_resume.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Resume / CV"
                className="text-slate-500 hover:text-indigo-600 hover:scale-110 transition-[color,transform] duration-300 flex items-center gap-1 text-xs font-semibold"
                title="View Resume"
              >
                <FiFileText size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: 3D Interactive Model */}
        <div
          style={{ animation: "fadeScaleIn 0.8s ease forwards", animationDelay: "0.4s" }}
          className="opacity-0 hidden lg:flex lg:w-1/2 h-[560px] xl:h-full justify-center items-center"
        >
          <MacbookModel />
        </div>
      </div>

      {/* ===== TABLET VIEW (md to lg) ===== */}
      <div className="relative z-10 mx-auto hidden min-h-[100svh] w-full max-w-5xl flex-col px-10 pb-10 pt-28 md:flex lg:hidden">
        <div className="flex items-center justify-between border-b border-slate-900/15 pb-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-semibold tracking-[0.3em] text-indigo-600">
              00 / 04
            </span>
            <span className="h-px w-10 bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Portfolio
            </span>
          </div>
          <span className="font-mono text-[10px] text-slate-400">2026 / INDIA</span>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1.15fr_0.85fr] items-center gap-8 py-10">
          <div className="relative">
            <p
              style={{ animation: "fadeSlideUp 0.6s ease forwards" }}
              className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600 opacity-0"
            >
              A developer in progress
            </p>
            <h1
              style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.12s" }}
              className="max-w-2xl text-[clamp(4.5rem,10vw,7.5rem)] font-semibold leading-[0.82] tracking-[-0.09em] text-slate-900 opacity-0"
            >
              Vinay
              <span className="block text-indigo-600">Kumar.</span>
            </h1>
            <p
              style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.25s" }}
              className="mt-8 max-w-lg border-l-2 border-indigo-500 pl-5 text-lg leading-relaxed text-slate-600 opacity-0"
            >
              Full Stack Developer working across interfaces, APIs, data pipelines, and the
              infrastructure that keeps products dependable.
            </p>
          </div>

          <OrbitalFallback />
        </div>

        <div
          style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.4s" }}
          className="flex items-center justify-between border-t border-slate-900/15 pt-5 opacity-0"
        >
          <GlowingButton onClick={scrollToProjects} className="px-8 py-4 text-sm font-medium">
            <span>View my work</span>
            <FiArrowRight className="ml-2" />
          </GlowingButton>

          <div className="flex items-center gap-5 text-slate-500">
            <a
              href="https://github.com/codes4vinay"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-slate-900"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://leetcode.com/u/vinayislive/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="transition-colors hover:text-amber-500"
            >
              <SiLeetcode size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vinaykumar2004/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-slate-900"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* ===== MOBILE VIEW (below md) ===== */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-screen-xl flex-col px-6 pb-7 pt-24 md:hidden">
        <div className="flex items-center justify-between border-b border-slate-900/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-indigo-600">
              00
            </span>
            <span className="h-px w-8 bg-indigo-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Portfolio
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
            India
          </span>
        </div>

        <div className="relative flex flex-1 flex-col justify-center py-8">
          <p
            style={{ animation: "fadeSlideUp 0.6s ease forwards" }}
            className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-indigo-600 opacity-0"
          >
            A developer in progress
          </p>
          <h1
            style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.12s" }}
            className="max-w-[20rem] text-[clamp(4.2rem,18vw,6rem)] font-semibold leading-[0.84] tracking-[-0.08em] text-slate-900 opacity-0"
          >
            Vinay
            <span className="block text-indigo-600">Kumar.</span>
          </h1>
          <p
            style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.24s" }}
            className="mt-6 max-w-[19rem] border-l-2 border-indigo-500 pl-4 text-base leading-relaxed text-slate-600 opacity-0"
          >
            Full Stack Developer building interfaces, APIs, data flows, and cloud-backed systems.
          </p>

          <div
            style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.38s" }}
            className="mt-8 flex flex-col gap-4 opacity-0"
          >
            <GlowingButton onClick={scrollToProjects} className="px-7 py-3.5 text-sm font-medium w-full">
              <span>View my work</span>
              <FiArrowRight className="ml-2" />
            </GlowingButton>

            <div className="flex items-center justify-around rounded-2xl bg-black/5 border border-black/10 py-3 text-slate-600">
              <a
                href="https://github.com/codes4vinay"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://leetcode.com/u/vinayislive/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500"
              >
                <SiLeetcode size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vinaykumar2004/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="/Vinay_Kumar_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 text-xs font-bold"
              >
                CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
