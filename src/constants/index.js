import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Hi, I'm Vinay Kumar, a MERN Stack Developer with a growing focus on DevOps practices. I build full-stack web applications using MongoDB, Express, React, and Node.js, and I'm actively learning how to deploy, automate, and manage them using Docker, Linux, CI/CD pipelines, and cloud platforms. I enjoy improving both code quality and system reliability.`;

// About section about you
export const ABOUT_TEXT = `I am Vinay Kumar, a MERN Stack Developer with a strong interest in DevOps and cloud-native technologies. I have built full-stack applications using MongoDB, Express, React, and Node.js, focusing on performance, security, and scalability. Alongside development, I work with Docker, Linux, CI/CD pipelines, and cloud platforms to deploy and manage applications. I enjoy learning new technologies and building systems that are reliable and production-ready.`;

// Your work experiences
export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "MERN Stack Developer",
    company: "Freelance / Personal Projects",
    description: `Developed full-stack MERN applications with features like authentication, role-based access, file uploads, and REST APIs. Designed scalable backend architectures using Node.js and Express, and built responsive UIs with React. Integrated MongoDB for efficient data handling and optimized application performance.`,
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JavaScript",
      "REST APIs",
    ],
  },
  {
    year: "2024 - Present",
    role: "DevOps & Cloud Learner",
    company: "Self-Driven Projects",
    description: `Worked on deploying and managing applications using Docker and Linux. Set up CI/CD pipelines, managed cloud servers, and handled basic Kubernetes and container orchestration concepts. Focused on application uptime, monitoring, and cost-efficient deployments.`,
    technologies: [
      "Docker",
      "Linux",
      "CI/CD",
      "AWS / Cloud",
      "Kubernetes (Basics)",
    ],
  },
];

// Your projects
export const PROJECTS = [
  {
    title: "Mendly - Electronics Repair & Marketplace",
    image: project1,
    description:
      "A full-stack MERN platform connecting customers with verified service centres for electronics repair. Features real-time chat with Socket.IO, Razorpay payment integration with HMAC verification, role-based access control (user, technician, admin), and MongoDB compound indexes for optimization. Includes secure JWT authentication with httpOnly cookies, Azure deployment, and comprehensive admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "Razorpay", "Express", "Redux Toolkit", "TailwindCSS", "Azure"],
    github: "https://github.com/codes4vinay/mendly",
    demo: "https://mendly.vinaydev.in/",
  },
  {
    title: "Filespire - File Sharing Platform",
    image: project2,
    description:
      "A platform for uploading and sharing files securely with features like link sharing, QR code generation, and email-based sharing.",
    technologies: ["React", "Node.js", "MongoDB", "Firebase", "Express"],
    github: "https://github.com/codes4vinay/filespire",
    demo: "https://filespire.in/",
  },
  {
    title: "AI Thumbnail Generator",
    image: project3,
    description:
      "An AI-powered tool that generates eye-catching thumbnails using Google Gemini API for intelligent design suggestions. Built for content creators and social media platforms with real-time preview and one-click download functionality.",
    technologies: ["React", "Node.js", "Gemini API", "JavaScript", "TailwindCSS", "Vercel"],
    github: "https://github.com/codes4vinay/Thumblify",
    demo: "https://thumblify-ai.vercel.app/",
  },
  {
    title: "Auth7 Kit - Authentication Library",
    image: project4,
    description:
      "Auth7 Kit is a plug-and-play authentication system for Node.js and Express. It provides secure cookie-based JWT authentication with access and refresh tokens, email verification, password reset, dynamic user schema support, and session invalidation. Designed to simplify authentication setup for modern web applications.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Authentication",
      "npm Package"
    ],
    github: "https://github.com/codes4vinay/auth7",
    demo: "https://www.npmjs.com/package/auth7-kit",
  },
];