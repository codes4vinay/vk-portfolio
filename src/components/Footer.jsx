import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-900/10 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold text-slate-900 dark:text-white font-code">
            Vinay Kumar <span className="text-violet-500">•</span> Full Stack & GenAI Engineer
          </p>
          <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            Crafted with React, Tailwind CSS, Framer Motion & Vite.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-bold font-code text-slate-500 dark:text-slate-500">
            © {currentYear} • All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
