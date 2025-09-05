import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs, TbBrandMongodb } from "react-icons/tb";
import { FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import {
  SiFirebase,
  SiJavascript,
  SiExpress,
  SiVite,
  SiPostman,
  SiNpm,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration, delay = 0) => ({
  animate: {
    y: [0, -20, 10, 0], // bigger floating distance
    rotate: [0, 10, -10, 0], // more noticeable rotation
    scale: [1, 1.2, 1, 1.15], // stronger scaling
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      delay: delay,
    },
  },
});

const Technologies = () => {
  const techStack = [
    {
      name: "React",
      icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
    },
    {
      name: "Next.js",
      icon: <TbBrandNextjs className="text-7xl text-white" />,
    },
    {
      name: "TailwindCSS",
      icon: <RiTailwindCssFill className="text-7xl text-sky-400" />,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-7xl text-green-500" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-7xl text-gray-300" />,
    },
    {
      name: "MongoDB",
      icon: <TbBrandMongodb className="text-7xl text-green-600" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-7xl text-yellow-400" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-7xl text-yellow-300" />,
    },
    { name: "Java", icon: <FaJava className="text-7xl text-red-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-7xl text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-7xl text-blue-500" /> },
    { name: "Vite", icon: <SiVite className="text-7xl text-purple-500" /> },
    { name: "NPM", icon: <SiNpm className="text-7xl text-red-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-7xl text-orange-600" /> },
    {
      name: "Postman",
      icon: <SiPostman className="text-7xl text-orange-400" />,
    },
  ];

  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Technologies
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
            variants={iconVariants(2 + index * 0.1, index * 0.1)}
            animate="animate"
          >
            {tech.icon}
            <p className="text-sm text-gray-300">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
