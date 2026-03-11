import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMongodb, TbBrandGithub } from "react-icons/tb";
import {
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiVite,
  SiPostman,
  SiNpm,
  SiGithubactions,
  SiCloudflare,
  SiRender,
  SiNginx,
  SiVercel,
  SiZod,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration, delay = 0) => ({
  animate: {
    y: [0, -20, 10, 0],
    rotate: [0, 10, -10, 0],
    scale: [1, 1.2, 1, 1.15],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      delay,
    },
  },
});

const Technologies = () => {
  const techStack = [
    // Frontend
    {
      name: "React",
      icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
    },
    {
      name: "TailwindCSS",
      icon: <RiTailwindCssFill className="text-7xl text-sky-400" />,
    },

    // Backend
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-7xl text-green-500" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-7xl text-gray-300" />,
    },
    {
      name: "MongoDB",
      icon: <TbBrandMongodb className="text-7xl text-green-600" />,
    },

    // Languages & Tools
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-7xl text-yellow-300" />,
    },
    {
      name: "Java",
      icon: <FaJava className="text-7xl text-red-500" />,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-7xl text-orange-500" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-7xl text-blue-500" />,
    },
    {
      name: "Vite",
      icon: <SiVite className="text-7xl text-purple-500" />,
    },
    {
      name: "NPM",
      icon: <SiNpm className="text-7xl text-red-600" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-7xl text-orange-600" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-7xl text-orange-400" />,
    },

    // DevOps & Cloud
    {
      name: "Docker",
      icon: <FaDocker className="text-7xl text-sky-500" />,
    },
    {
      name: "Linux",
      icon: <FaLinux className="text-7xl text-gray-200" />,
    },
    {
      name: "AWS",
      icon: <FaAws className="text-7xl text-orange-400" />,
    },
    {
      name: "GitHub",
      icon: <TbBrandGithub className="text-7xl text-white" />,
    },
    {
      name: "GitHub Actions",
      icon: <SiGithubactions className="text-7xl text-blue-400" />,
    },
    {
      name: "Vercel",
      icon: <SiVercel className="text-7xl text-white" />,
    },
    {
      name: "Zod",
      icon: <SiZod className="text-7xl text-blue-500" />,
    },
    {
      name: "Cloudflare",
      icon: <SiCloudflare className="text-7xl text-orange-500" />,
    },
    {
      name: "Render",
      icon: <SiRender className="text-7xl text-indigo-400" />,
    },
    {
      name: "Nginx",
      icon: <SiNginx className="text-7xl text-green-500" />,
    },
  ];

  return (
    <div id="technologies" className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        My Tech Stack
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

