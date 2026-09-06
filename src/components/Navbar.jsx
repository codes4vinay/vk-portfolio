import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { FiCommand, FiArrowUpRight } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { applyTheme, getInitialTheme } from "../theme";

const Navbar = ({ onOpenCommandPalette }) => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(getInitialTheme());
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "home", label: "Overview" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "technologies", label: "Stack" },
    { id: "activity", label: "Activity" },
    { id: "blogs", label: "Articles" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 200;
      let currentSection = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      return next;
    });
  };

  const scrollToSection = (e, id) => {
    if (e) e.preventDefault();
    setActiveSection(id);
    setOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const openCommandPalette = () => {
    if (onOpenCommandPalette) onOpenCommandPalette();
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-4 pb-2">
      <div className="mx-auto max-w-6xl">
        <nav
          aria-label="Main Navigation"
          className={`relative flex items-center justify-between rounded-2xl px-3.5 py-2.5 transition-all duration-300 ${
            scrolled
              ? "glass-navbar shadow-lg"
              : "border border-slate-900/5 bg-white/60 backdrop-blur-md dark:border-white/5 dark:bg-slate-900/40"
          }`}
        >
          {/* Left: Brand Identity */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="group flex items-center gap-2.5 focus-visible:outline-none min-w-0"
          >
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 font-bold text-xs sm:text-sm text-white shadow-sm transition-transform group-hover:scale-105 dark:bg-white dark:text-slate-950">
              VK
            </div>
            <div className="flex flex-col min-w-0">
              <span className="truncate text-xs sm:text-sm font-extrabold tracking-tight text-slate-950 dark:text-white">
                Vinay Kumar
              </span>
              <span className="text-[10px] font-semibold tracking-wide text-slate-700 dark:text-slate-300 hidden xs:block truncate">
                Full Stack & Systems
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 rounded-xl border border-slate-300/60 bg-slate-100/70 p-1 dark:border-white/10 dark:bg-white/[0.04]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`relative px-3 py-1.5 text-xs font-bold tracking-wide transition-colors ${
                    isActive
                      ? "text-slate-950 dark:text-white"
                      : "text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-lg bg-white shadow-xs dark:bg-slate-800"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right: Actions & Socials */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Quick Cmd+K Search Button */}
            <button
              onClick={openCommandPalette}
              aria-label="Open Command Menu"
              className="group hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-900/10 bg-slate-100/70 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:border-slate-900/20 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 dark:hover:border-white/20 dark:hover:text-white"
            >
              <FiCommand className="text-slate-400 dark:text-slate-500" />
              <span>Search</span>
              <kbd className="rounded bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 shadow-2xs dark:bg-white/10 dark:text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* GitHub Profile Button (Desktop / Tablet) */}
            <a
              href="https://github.com/codes4vinay"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl border border-slate-900/10 bg-white text-slate-700 shadow-2xs transition hover:bg-slate-50 hover:text-slate-950 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <FaGithub className="text-sm" />
            </a>

            {/* Resume Link */}
            <a
              href="/Vinay_Kumar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-xs transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
              <span>CV</span>
              <FiArrowUpRight className="text-xs" />
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-slate-900/10 bg-white text-slate-700 shadow-2xs transition hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {theme === "dark" ? (
                <FaSun className="text-amber-400 text-xs sm:text-sm" />
              ) : (
                <FaMoon className="text-slate-600 text-xs sm:text-sm" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Open Mobile Menu"
              className="flex md:hidden h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-slate-900/10 bg-white text-slate-700 transition dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
            >
              {open ? <FaTimes className="text-xs" /> : <FaBars className="text-xs" />}
            </button>
          </div>
        </nav>

        {/* Mobile Backdrop */}
        {open && (
          <div
            className="fixed inset-0 z-30 bg-slate-950/40 backdrop-blur-xs md:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Mobile Slide-down Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="relative z-40 glass-panel mt-2 overflow-hidden rounded-2xl p-4 md:hidden border border-slate-200/80 shadow-xl dark:border-white/10 dark:bg-slate-900/95"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-bold transition ${
                      activeSection === link.id
                        ? "bg-indigo-50 text-indigo-900 dark:bg-indigo-500/15 dark:text-indigo-200"
                        : "text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-white/10"
                    }`}
                  >
                    <span>{link.label}</span>
                    <FiArrowUpRight className="text-xs text-slate-500 dark:text-slate-400" />
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setOpen(false);
                    openCommandPalette();
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-bold text-slate-900 shadow-2xs dark:border-white/15 dark:bg-slate-800 dark:text-slate-100"
                >
                  <FiCommand /> Quick Command Palette (⌘K)
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://github.com/codes4vinay"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-bold text-slate-900 shadow-2xs dark:border-white/15 dark:bg-slate-800 dark:text-slate-100"
                  >
                    <FaGithub className="text-sm" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="/Vinay_Kumar_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 py-2.5 text-xs font-semibold text-white shadow-xs"
                  >
                    <span>Resume PDF</span>
                    <FiArrowUpRight className="text-xs" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
