import React, { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/projects/image.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50  backdrop-blur-md">
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
          <a
            href="#home"
            className="px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            Home
          </a>
          <a href="#about" className="hover:text-stone-300 transition">
            About
          </a>
          <a href="#projects" className="hover:text-stone-300 transition">
            Projects
          </a>
          <a href="#technologies" className="hover:text-stone-300 transition">
            Technologies
          </a>
          <a href="#contact" className="hover:text-stone-300 transition">
            Contact
          </a>
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
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="hover:text-stone-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="hover:text-stone-300"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="hover:text-stone-300"
            >
              Projects
            </a>
            <a
              href="#technologies"
              onClick={() => setOpen(false)}
              className="hover:text-stone-300"
            >
              Technologies
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="hover:text-stone-300"
            >
              Contact
            </a>

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
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
