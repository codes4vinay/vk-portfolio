import React from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.25,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section id="about" className=" mt-12 pb-12 lg:pb-32">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4"
        >
          {/* NAME */}
          <motion.h1
            variants={childVariants}
            className="
              bg-gradient-to-r from-stone-100 via-stone-300 to-stone-500
              bg-clip-text text-transparent
              text-4xl sm:text-5xl lg:text-7xl
              font-bold tracking-tight
            "
          >
            Vinay Kumar
          </motion.h1>

          {/* ROLE */}
          <motion.span
            variants={childVariants}
            className="
  mt-3 inline-block
  bg-gradient-to-r from-stone-400 via-stone-400 to-stone-400
  bg-clip-text text-transparent
  text-lg sm:text-xl lg:text-2xl
  tracking-wide
"
          >
            MERN Stack Developer · DevOps Enthusiast
          </motion.span>

          {/* ACCENT LINE */}
          <motion.div
            variants={childVariants}
            className="
              mt-4 h-px w-24
              bg-gradient-to-r from-stone-300 to-transparent
            "
          />

          {/* DESCRIPTION */}
          <motion.p
            variants={childVariants}
            className="
              mt-6 max-w-xl
              text-base sm:text-lg lg:text-xl
              leading-relaxed
              text-stone-300
            "
          >
            {HERO_CONTENT}
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={childVariants}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            {/* Preview Resume */}
            <a
              href="/Vinay_Kumar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
      rounded-full border border-stone-300
      px-6 py-3 text-sm font-medium
      text-stone-200
      hover:bg-stone-800 transition
    "
            >
              Preview Resume
            </a>

            {/* Download Resume */}
            <a
              href="/Vinay_Kumar_resume.pdf"
              download
              className="
      rounded-full bg-stone-100
      px-6 py-3 text-sm font-medium
      text-stone-900
      shadow hover:bg-stone-200 transition
    "
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4"
        >
          <div className="relative">
            {/* BACKDROP */}
            <div
              className="
                absolute -inset-4 rounded-xl
                bg-gradient-to-r from-stone-800/40 to-stone-700/20
                blur-xl
              "
            />

            {/* LINKEDIN BADGE */}
            <div
              className="relative badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="large"
              data-theme="dark"
              data-type="HORIZONTAL"
              data-vanity="vinaykumar2004"
              data-version="v1"
            >
              <a
                className="badge-base__link LI-simple-link"
                href="https://in.linkedin.com/in/vinaykumar2004"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
