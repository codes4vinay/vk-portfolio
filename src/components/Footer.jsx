import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <div className="text-sm text-stone-600 dark:text-stone-400">
          <p className="text-stone-900 dark:text-stone-300">Vinay Kumar</p>
          <p className="mt-1">Built with React, Tailwind, and Vite.</p>
        </div>

        <p className="text-sm text-stone-500 dark:text-stone-500">
          © {currentYear} • All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
