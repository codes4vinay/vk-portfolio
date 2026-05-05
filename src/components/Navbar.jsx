import React, { useEffect, useState } from "react";
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
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/10 bg-white/70 backdrop-blur-xl dark:border-white/5 dark:bg-slate-950/45">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" aria-label="Home">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-9 w-9 rounded-xl" />
            <span className="hidden text-sm font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:inline">
              Vinay Kumar
            </span>
          </div>
        </a>

        {/* Desktop Glass Menu */}
        <div
          className="
            hidden md:flex items-center gap-8
            px-8 py-3 rounded-full
            bg-black/5 backdrop-blur-md
            border border-black/10
            text-sm font-medium text-stone-900
            dark:bg-white/10 dark:border-white/10 dark:text-white
          "
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveSection(link.id)}
                className={`rounded-full px-4 py-1.5 transition ${
                  isActive
                    ? "bg-black/10 text-stone-900 dark:bg-white/15 dark:text-white"
                    : "text-stone-700 hover:bg-black/5 hover:text-stone-900 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-stone-800 transition hover:bg-black/10 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* Socials */}
          <div className="flex items-center gap-4 text-lg text-stone-800 dark:text-white/90">
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
              href="https://hashnode.com/@vinayislive"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-stone-950 dark:hover:text-white"
            >
              <SiHashnode />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-slate-900 transition hover:text-violet-700 dark:text-white dark:hover:text-fuchsia-200 md:hidden"
          aria-label="Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Glass Menu */}
      {open && (
        <div className="md:hidden px-4 pb-6 sm:px-6 lg:px-8">
          <div
            className="
              flex flex-col gap-4
              rounded-2xl
              bg-white/70 backdrop-blur-md
              border border-black/10
              p-6 text-stone-900
              dark:bg-white/10 dark:border-white/10 dark:text-white
            "
          >
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center justify-between rounded-xl border border-black/10 bg-black/5 px-4 py-3 text-sm font-medium text-stone-900 transition hover:bg-black/10 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              <span>Theme</span>
              <span className="text-base">
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </span>
            </button>

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
                  className={
                    isActive
                      ? "font-semibold text-violet-700 dark:text-fuchsia-200"
                      : "text-slate-700 hover:text-violet-700 dark:text-white/80 dark:hover:text-white"
                  }
                >
                  {link.label}
                </a>
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
