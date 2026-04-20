import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import logo from "../assets/projects/image.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "technologies", label: "Tech Stack" },
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

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black/20 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" aria-label="Home">
          <img src={logo} alt="Logo" className="w-[70px]" />
        </a>

        {/* Desktop Glass Menu */}
        <div
          className="
            hidden md:flex items-center gap-8
            px-8 py-3 rounded-full
            bg-white/10 backdrop-blur-md
            border border-white/10
            text-sm font-medium text-white
          "
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveSection(link.id)}
                className={`rounded-full px-4 py-1 transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white hover:bg-white/10 hover:text-stone-300"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Socials (desktop only) */}
        <div className="hidden md:flex items-center gap-4 text-xl text-white">
          <a
            href="https://www.linkedin.com/in/vinaykumar2004/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/codes4vinay"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/vinay.kumar.ig/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/VinayKumar8269"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://hashnode.com/@vinayislive"
            target="_blank"
            rel="noreferrer"
          >
            <SiHashnode />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
          aria-label="Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Glass Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6">
          <div
            className="
              flex flex-col gap-4
              rounded-2xl
              bg-white/10 backdrop-blur-md
              border border-white/10
              p-6 text-white
            "
          >
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
                    isActive ? "text-stone-200" : "hover:text-stone-300"
                  }
                >
                  {link.label}
                </a>
              );
            })}

            {/* Mobile Socials */}
            <div className="flex gap-4 pt-4 text-xl">
              <a
                href="https://www.linkedin.com/in/vinaykumar2004/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/codes4vinay"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/vinay.kumar.ig/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/VinayKumar8269"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://hashnode.com/@codes4vinay"
                target="_blank"
                rel="noreferrer"
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
