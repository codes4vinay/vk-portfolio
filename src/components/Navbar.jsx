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
import { SiHashnode } from "react-icons/si";
import logo from "../assets/projects/image.png";
import { applyTheme, getInitialTheme } from "../theme";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(getInitialTheme());

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "technologies", label: "Tech Stack" },
    { id: "blogs", label: "Blogs" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 140;

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

  return (
    <motion.nav
      className="glass-navbar fixed inset-x-0 top-0 z-50 border-b border-slate-900/10 dark:border-white/5"
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.a
          href="#home"
          aria-label="Home"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-9 w-9 rounded-xl invert dark:invert-0"
            />
            <span className="hidden text-sm font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:inline">
              Vinay Kumar
            </span>
          </div>
        </motion.a>

        {/* Desktop Glass Menu */}
        <div
          className="
            glass-surface hidden md:flex items-center gap-8
            px-8 py-3 rounded-full
            text-sm font-medium text-stone-900
            dark:text-white
          "
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveSection(link.id)}
                className={`relative rounded-full px-4 py-1.5 transition ${
                  isActive
                    ? "text-stone-900 dark:text-white"
                    : "text-stone-700 hover:text-stone-900 dark:text-white/80 dark:hover:text-white"
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {isActive ? (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-black/10 dark:bg-white/15"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className="relative">{link.label}</span>
              </motion.a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <motion.button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-stone-800 transition hover:bg-black/10 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            whileHover={{ y: -1, rotate: theme === "dark" ? -8 : 8 }}
            whileTap={{ scale: 0.94 }}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </motion.button>

          {/* Socials */}
          <div className="flex items-center gap-4 text-lg text-stone-800 dark:text-white/90">
            <motion.a
              href="https://www.linkedin.com/in/vinaykumar2004/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-stone-950 dark:hover:text-white"
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/codes4vinay"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-stone-950 dark:hover:text-white"
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/vinay.kumar.ig/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-stone-950 dark:hover:text-white"
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://x.com/VinayKumar8269"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-stone-950 dark:hover:text-white"
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="https://hashnode.com/@vinayislive"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-stone-950 dark:hover:text-white"
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <SiHashnode />
            </motion.a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          onClick={() => setOpen(!open)}
          className="text-2xl text-slate-900 transition hover:text-violet-700 dark:text-white dark:hover:text-fuchsia-200 md:hidden"
          aria-label="Menu"
          whileTap={{ scale: 0.92 }}
        >
          {open ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Glass Menu */}
      <AnimatePresence>
        {open && (
        <motion.div
          className="px-4 pb-6 sm:px-6 lg:px-8 md:hidden"
          initial={{ opacity: 0, y: -8, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -8, height: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <motion.div
            className="
              glass-surface flex flex-col gap-4
              rounded-2xl
              p-6 text-stone-900
              dark:text-white
            "
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.035, delayChildren: 0.08 },
              },
            }}
          >
            <motion.button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center justify-between rounded-xl border border-black/10 bg-black/5 px-4 py-3 text-sm font-medium text-stone-900 transition hover:bg-black/10 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              variants={{ hidden: { opacity: 0, y: -6 }, visible: { opacity: 1, y: 0 } }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Theme</span>
              <span className="text-base">
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </span>
            </motion.button>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => {
                    setActiveSection(link.id);
                    setOpen(false);
                  }}
                  className={
                    isActive
                      ? "font-semibold text-white"
                      : "text-slate-700 hover:text-violet-700 dark:text-white/80 dark:hover:text-white"
                  }
                  variants={{ hidden: { opacity: 0, y: -6 }, visible: { opacity: 1, y: 0 } }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                </motion.a>
              );
            })}

            {/* Mobile Socials */}
            <div className="flex gap-4 pt-4 text-lg text-stone-800 dark:text-white/90">
              <a
                href="https://www.linkedin.com/in/vinaykumar2004/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-stone-950 dark:hover:text-white"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/codes4vinay"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-stone-950 dark:hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/vinay.kumar.ig/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-stone-950 dark:hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/VinayKumar8269"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-stone-950 dark:hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="https://hashnode.com/@codes4vinay"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-stone-950 dark:hover:text-white"
              >
                <SiHashnode />
              </a>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
