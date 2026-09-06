import React from "react";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200/80 py-12 dark:border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <p className="text-xs font-bold text-slate-950 dark:text-white">
              Vinay Kumar — Full Stack & Systems Engineer
            </p>
          </div>
          <p className="mt-1 text-xs text-slate-700 dark:text-slate-300 font-medium">
            Designed for performance, built with React 19, Tailwind CSS & Vite.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm">
            <a
              href="https://github.com/codes4vinay"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition hover:text-slate-900 dark:hover:text-white"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vinaykumar2004/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/vinayislive/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="transition hover:text-amber-500"
            >
              <SiLeetcode />
            </a>
            <a
              href="mailto:vinaykumar.2k04@gmail.com"
              aria-label="Email"
              className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <FiMail />
            </a>
          </div>

          <div className="h-4 w-px bg-slate-200 dark:bg-white/10" />

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <FiArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
