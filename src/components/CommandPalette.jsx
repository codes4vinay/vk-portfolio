import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiArrowRight,
  FiCode,
  FiBriefcase,
  FiLayers,
  FiBookOpen,
  FiMail,
  FiDownload,
  FiMoon,
  FiSun,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiCheck,
} from "react-icons/fi";
import { SiLeetcode, SiHashnode } from "react-icons/si";
import { applyTheme, getInitialTheme } from "../theme";

const CommandPalette = ({ isOpen, setIsOpen }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Toggle with Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("vinaykumar.2k04@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1200);
  };

  const toggleTheme = () => {
    const current = getInitialTheme();
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    setIsOpen(false);
  };

  const items = [
    {
      category: "Navigation",
      items: [
        {
          id: "nav-experience",
          label: "Work Experience & History",
          icon: <FiBriefcase className="text-emerald-500" />,
          action: () => scrollToSection("experience"),
          keywords: "experience work job sahii intern phi launcher",
        },
        {
          id: "nav-projects",
          label: "View Projects & Architecture",
          icon: <FiCode className="text-indigo-500" />,
          action: () => scrollToSection("projects"),
          keywords: "projects code systems work chaos proxy mendly",
        },
        {
          id: "nav-skills",
          label: "Technical Skills & Stack",
          icon: <FiLayers className="text-sky-500" />,
          action: () => scrollToSection("technologies"),
          keywords: "skills stack technologies languages frameworks node react",
        },
        {
          id: "nav-activity",
          label: "Engineering Activity & Proof",
          icon: <SiLeetcode className="text-amber-500" />,
          action: () => scrollToSection("activity"),
          keywords: "leetcode github stats commits practice activity",
        },
        {
          id: "nav-blogs",
          label: "Engineering Articles & Writing",
          icon: <FiBookOpen className="text-purple-500" />,
          action: () => scrollToSection("blogs"),
          keywords: "blogs articles hashnode backend genai write",
        },
        {
          id: "nav-contact",
          label: "Get in Touch",
          icon: <FiMail className="text-rose-500" />,
          action: () => scrollToSection("contact"),
          keywords: "contact message email hire collaborate",
        },
      ],
    },
    {
      category: "Quick Actions",
      items: [
        {
          id: "act-email",
          label: copied ? "Copied to clipboard!" : "Copy Email (vinaykumar.2k04@gmail.com)",
          icon: copied ? <FiCheck className="text-emerald-500" /> : <FiMail className="text-indigo-400" />,
          action: copyEmail,
          keywords: "email copy contact reach",
        },
        {
          id: "act-resume",
          label: "Download Official Resume (PDF)",
          icon: <FiDownload className="text-indigo-500" />,
          action: () => {
            window.open("/Vinay_Kumar_resume.pdf", "_blank");
            setIsOpen(false);
          },
          keywords: "resume cv download pdf",
        },
        {
          id: "act-theme",
          label: "Toggle Color Theme (Dark / Light)",
          icon: <FiMoon className="text-amber-400" />,
          action: toggleTheme,
          keywords: "theme dark light mode toggle",
        },
      ],
    },
    {
      category: "Profiles & Links",
      items: [
        {
          id: "link-github",
          label: "GitHub Profile (@codes4vinay)",
          icon: <FiGithub />,
          action: () => {
            window.open("https://github.com/codes4vinay", "_blank");
            setIsOpen(false);
          },
          keywords: "github code repositories source",
        },
        {
          id: "link-linkedin",
          label: "LinkedIn Profile",
          icon: <FiLinkedin className="text-blue-500" />,
          action: () => {
            window.open("https://www.linkedin.com/in/vinaykumar2004/", "_blank");
            setIsOpen(false);
          },
          keywords: "linkedin social profile connect network",
        },
        {
          id: "link-leetcode",
          label: "LeetCode Profile (@vinayislive)",
          icon: <SiLeetcode className="text-amber-500" />,
          action: () => {
            window.open("https://leetcode.com/u/vinayislive/", "_blank");
            setIsOpen(false);
          },
          keywords: "leetcode algorithms practice dsa",
        },
        {
          id: "link-hashnode",
          label: "Hashnode Blog Publications",
          icon: <SiHashnode className="text-blue-600" />,
          action: () => {
            window.open("https://vinayislive.hashnode.dev", "_blank");
            setIsOpen(false);
          },
          keywords: "hashnode blog posts articles",
        },
      ],
    },
  ];

  // Flatten and filter items
  const filteredGroups = items
    .map((group) => {
      const filtered = group.items.filter((item) => {
        const text = `${item.label} ${item.keywords} ${group.category}`.toLowerCase();
        return text.includes(query.toLowerCase());
      });
      return { ...group, items: filtered };
    })
    .filter((group) => group.items.length > 0);

  const flatList = filteredGroups.flatMap((group) => group.items);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (flatList.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + flatList.length) % (flatList.length || 1));
    } else if (e.key === "Enter" && flatList[selectedIndex]) {
      e.preventDefault();
      flatList[selectedIndex].action();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-20 sm:pt-28">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl dark:border-white/10 dark:bg-[#11141e] dark:text-slate-100"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3.5 dark:border-white/5">
              <FiSearch className="text-lg text-slate-400 dark:text-slate-500" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type a command, project, or section..."
                className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
              />
              <kbd className="hidden rounded bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500 sm:inline-block dark:bg-white/5 dark:text-slate-400">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div
              ref={listRef}
              className="max-h-80 overflow-y-auto p-2 scroll-smooth"
            >
              {flatList.length === 0 ? (
                <div className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">
                  No commands or sections matching "{query}"
                </div>
              ) : (
                filteredGroups.map((group) => (
                  <div key={group.category} className="mb-2 last:mb-0">
                    <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {group.category}
                    </div>
                    <div className="space-y-0.5">
                      {group.items.map((item) => {
                        const itemIndex = flatList.indexOf(item);
                        const isSelected = itemIndex === selectedIndex;
                        return (
                          <button
                            key={item.id}
                            onClick={item.action}
                            onMouseEnter={() => setSelectedIndex(itemIndex)}
                            className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                              isSelected
                                ? "bg-indigo-50 text-indigo-900 dark:bg-indigo-500/15 dark:text-indigo-200"
                                : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/[0.04]"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-base">{item.icon}</span>
                              <span className="font-medium">{item.label}</span>
                            </div>
                            {isSelected && (
                              <FiArrowRight className="text-xs text-indigo-600 dark:text-indigo-400" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/70 px-4 py-2 text-[11px] text-slate-500 dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span>Navigate</span>
                <kbd className="rounded border border-slate-200 bg-white px-1.5 py-0.5 font-sans dark:border-white/10 dark:bg-slate-900">
                  ↑
                </kbd>
                <kbd className="rounded border border-slate-200 bg-white px-1.5 py-0.5 font-sans dark:border-white/10 dark:bg-slate-900">
                  ↓
                </kbd>
              </div>
              <div className="flex items-center gap-2">
                <span>Select</span>
                <kbd className="rounded border border-slate-200 bg-white px-1.5 py-0.5 font-sans dark:border-white/10 dark:bg-slate-900">
                  ↵
                </kbd>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
