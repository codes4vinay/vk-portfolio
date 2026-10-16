import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 w-full border-t border-slate-900/10 py-12 px-6 text-slate-500 text-sm">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="font-semibold text-slate-900 tracking-tight">Vinay Kumar</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-600">
              Available for work
            </span>
          </div>
        </div>

        {/* Center: Social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/codes4vinay"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-slate-900 transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://leetcode.com/u/vinayislive/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="hover:text-amber-500 transition-colors"
          >
            <SiLeetcode size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/vinaykumar2004/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <span>© 2026 Vinay Kumar</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-full border border-slate-300 text-slate-700 hover:text-indigo-600 hover:border-indigo-600 transition-colors cursor-pointer"
          >
            <FiArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
