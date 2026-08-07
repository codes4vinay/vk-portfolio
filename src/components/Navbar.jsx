import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { SiHashnode, SiLeetcode } from "react-icons/si";
import logo from "../assets/projects/image.png";
import { applyTheme, getInitialTheme } from "../theme";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(getInitialTheme());
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "leetcode", label: "LeetCode" },
    { id: "about", label: "About" },
    { id: "technologies", label: "Stack" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "blogs", label: "Blogs" },
    { id: "contact", label: "Contact" },
  ];


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 160;
      let currentSection = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      return next;
    });
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/vinaykumar2004/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
      hoverColor: "hover:text-blue-500 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]",
    },
    {
      href: "https://github.com/codes4vinay",
      label: "GitHub",
      icon: <FaGithub />,
      hoverColor: "hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]",
    },
    {
      href: "https://leetcode.com/u/vinayislive/",
      label: "LeetCode",
      icon: <SiLeetcode />,
      hoverColor: "hover:text-amber-400 hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]",
    },
    {
      href: "https://www.instagram.com/vinay.kumar.ig/",
      label: "Instagram",
      icon: <FaInstagram />,
      hoverColor: "hover:text-pink-500 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]",
    },
    {
      href: "https://x.com/VinayKumar8269",
      label: "Twitter",
      icon: <FaTwitter />,
      hoverColor: "hover:text-sky-400 hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]",
    },
    {
      href: "https://hashnode.com/@vinayislive",
      label: "Hashnode",
      icon: <SiHashnode />,
      hoverColor: "hover:text-indigo-400 hover:drop-shadow-[0_0_10px_rgba(129,140,248,0.8)]",
    },
  ];

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2.5 glass-navbar border-b border-slate-900/10 dark:border-white/10" : "py-4 bg-transparent"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <motion.a
          href="#home"
          aria-label="Home"
          className="group flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-violet-500/30 bg-slate-900/10 p-1 backdrop-blur-md transition group-hover:border-violet-500/80 dark:border-violet-400/30 dark:bg-slate-900/50">
            <img
              src={logo}
              alt="Logo"
              className="h-full w-full rounded-xl object-cover invert dark:invert-0"
            />
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
          </div>

          <div className="hidden sm:flex sm:flex-col">
            <span className="text-sm font-extrabold tracking-tight text-slate-900 dark:text-white">
              Vinay<span className="text-violet-600 dark:text-violet-400">.dev</span>
            </span>
            <span className="text-[10px] font-medium tracking-wider text-emerald-600 dark:text-emerald-400">
              AVAILABLE FOR HIRE
            </span>
          </div>
        </motion.a>

        {/* Desktop Glass Nav Pills */}
        <nav
          className="
            hidden lg:flex items-center justify-center gap-1
            rounded-full border border-slate-900/10 bg-slate-900/5 p-1.5 backdrop-blur-xl
            dark:border-white/10 dark:bg-slate-900/60
            shadow-lg shadow-black/5 dark:shadow-black/40
          "
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveSection(link.id)}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200 xl:px-4 ${
                  isActive
                    ? "text-white dark:text-white"
                    : "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="cyber-nav-active"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 shadow-[0_0_15px_rgba(139,92,246,0.5)] dark:from-violet-600 dark:via-purple-600 dark:to-cyan-600"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Section: Theme Toggle & Social Icons */}
        <div className="hidden lg:flex items-center gap-3">
          <motion.button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-slate-800 backdrop-blur-md transition hover:border-violet-500/50 hover:bg-violet-500/10 dark:border-white/10 dark:bg-slate-900/70 dark:text-white dark:hover:border-violet-400/50 dark:hover:bg-violet-400/20"
            whileHover={{ scale: 1.1, rotate: theme === "dark" ? -15 : 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? (
              <FaSun className="text-amber-300 drop-shadow-[0_0_8px_rgba(252,211,77,0.8)]" />
            ) : (
              <FaMoon className="text-violet-600" />
            )}
          </motion.button>

          <div className="h-4 w-px bg-slate-300 dark:bg-slate-800" />

          {/* Social Links */}
          <div className="flex items-center gap-2.5 text-base text-slate-700 dark:text-slate-300">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${social.hoverColor}`}
                whileHover={{ y: -2, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <motion.button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-900/10 bg-white/80 text-slate-800 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80 dark:text-white"
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? <FaSun className="text-amber-300" /> : <FaMoon className="text-violet-600" />}
          </motion.button>

          <motion.button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-900/10 bg-white/80 text-slate-900 dark:border-white/10 dark:bg-slate-900/80 dark:text-white"
            aria-label="Menu"
            whileTap={{ scale: 0.9 }}
          >
            {open ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="px-4 pt-3 pb-6 lg:hidden"
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="glass-surface flex flex-col gap-3 rounded-3xl p-5 shadow-2xl dark:border-white/10 dark:bg-slate-950/90">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;

                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={() => {
                        setActiveSection(link.id);
                        setOpen(false);
                      }}
                      className={`rounded-2xl px-4 py-2.5 text-xs font-semibold transition ${
                        isActive
                          ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                          : "bg-slate-900/5 text-slate-700 hover:bg-slate-900/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>

              <div className="mt-2 flex justify-around border-t border-slate-900/10 pt-4 text-xl dark:border-white/10">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={`transition-transform hover:scale-125 ${social.hoverColor}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
