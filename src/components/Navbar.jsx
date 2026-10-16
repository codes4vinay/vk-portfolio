import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "activity", label: "Activity" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const itemRefs = useRef([]);
  const lastScrollY = useRef(0);
  const isAutoScrolling = useRef(false);
  const isManuallyClicked = useRef(false);
  const clickTimeout = useRef(null);
  const activeDebounceTimeout = useRef(null);
  const pendingSection = useRef(null);

  // Position the sliding goo pill under active nav item
  useEffect(() => {
    const activeIdx = NAV_ITEMS.findIndex((item) => item.id === activeSection);
    const activeEl = itemRefs.current[activeIdx];
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.clientWidth,
        opacity: 1,
      });
    }
  }, [activeSection]);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!isAutoScrolling.current) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      }
      lastScrollY.current = currentScrollY;

      // Detect active section on scroll
      if (!isManuallyClicked.current) {
        const scrollPosition = currentScrollY + 240;
        for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
          const sectionEl = document.getElementById(NAV_ITEMS[i].id);
          if (sectionEl) {
            const top = sectionEl.offsetTop;
            if (scrollPosition >= top) {
              setActiveSection(NAV_ITEMS[i].id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    if (e) e.preventDefault();
    setActiveSection(id);
    setHidden(false);
    setMobileMenuOpen(false);

    isAutoScrolling.current = true;
    isManuallyClicked.current = true;
    clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      isManuallyClicked.current = false;
      isAutoScrolling.current = false;
    }, 800);

    const targetEl = document.getElementById(id);
    if (targetEl) {
      const topOffset = targetEl.offsetTop - (id === "home" ? 0 : 40);
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  const currentLabel = NAV_ITEMS.find((item) => item.id === activeSection)?.label || "Menu";

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-[transform,opacity] duration-500
        ${hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      {/* Mobile Top Bar */}
      <div className="md:hidden backdrop-blur-md bg-white/60 border-b border-black/5">
        <div className="flex items-center justify-between px-5 py-4">
          <span className="text-slate-900 font-semibold tracking-tight">{currentLabel}</span>
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            className="text-slate-600 hover:text-slate-900 p-1"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <ul className="px-4 pb-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`
                    block px-4 py-3 rounded-lg text-sm font-medium transition-colors
                    ${
                      activeSection === item.id
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop Floating Pill Navigation */}
      <div className="hidden md:flex justify-center mt-8 px-4">
        {/* SVG Filter for Gooey Transition Effect */}
        <svg className="absolute w-0 h-0">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
              <feColorMatrix
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              />
            </filter>
          </defs>
        </svg>

        <nav className="relative p-2 rounded-full backdrop-blur-md bg-white/60 border border-black/5 shadow-lg shadow-black/5">
          {/* Animated Goo Indicator */}
          <div className="absolute inset-0 pointer-events-none" style={{ filter: "url(#goo)" }}>
            <div
              className="absolute top-1/2 -translate-y-1/2 h-[78%] rounded-full bg-indigo-500/15 border border-indigo-500/30 shadow-[0_0_16px_rgba(99,102,241,0.25)] transition-all duration-700 ease-out"
              style={indicatorStyle}
            />
          </div>

          <ul className="relative flex items-center gap-2 z-10">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} ref={(el) => (itemRefs.current[idx] = el)}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`
                      block px-6 py-2 rounded-full text-sm font-medium tracking-wide
                      cursor-pointer transition-[color,transform,filter] duration-300 select-none
                      ${
                        isActive
                          ? "text-indigo-700 scale-110"
                          : "text-slate-500 hover:text-slate-800 hover:scale-105"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
