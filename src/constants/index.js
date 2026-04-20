import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Hi, I'm Vinay Kumar, a MERN Stack Developer with a strong interest in GenAI and modern cloud-powered applications. I build full-stack web experiences using MongoDB, Express, React, and Node.js, and I also work with Docker and AWS to containerize, deploy, and manage scalable projects. I enjoy combining clean development practices with intelligent features to build applications that are practical, reliable, and future-ready.`;

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
    description: [
      "Built a full-stack MERN platform connecting customers with verified electronics repair service centres.",
      "Implemented real-time chat with Socket.IO and secure Razorpay payment integration with HMAC verification.",
      "Added role-based access control for users, technicians, and admins with secure JWT auth using httpOnly cookies.",
      "Integrated a company RAG chatbot to answer Mendly-related questions for users.",
      "Optimized performance with MongoDB compound indexes and deployed the platform on Azure with a comprehensive admin dashboard.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "Razorpay", "Express", "Redux Toolkit", "TailwindCSS", "Azure"],
    github: "https://github.com/codes4vinay/mendly",
    demo: "https://mendly.vinaydev.in/",
  },
  {
    title: "AI Thumbnail Generator",
    image: project3,
    description: [
      "Developed an AI-powered tool that generates eye-catching thumbnails for content creators and social media use cases.",
      "Integrated Google Gemini API to produce intelligent design suggestions and creative variations.",
      "Built a real-time preview workflow with a smooth interface for fast experimentation.",
      "Added one-click download support for quickly exporting generated thumbnails.",
    ],
    technologies: ["React", "Node.js", "Gemini API", "JavaScript", "TailwindCSS", "Vercel"],
    github: "https://github.com/codes4vinay/Thumblify",
    demo: "https://thumblify-ai.vercel.app/",
  },
  {
    title: "Auth7 Kit - Authentication Library",
    image: project4,
    description: [
      "Created a plug-and-play authentication library for Node.js and Express applications.",
      "Implemented secure cookie-based JWT authentication with access tokens and refresh tokens.",
      "Included features like email verification, password reset, session invalidation, and dynamic user schema support.",
      "Designed the package to simplify authentication setup for modern web applications.",
    ],
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
  {
    title: "Filespire - File Sharing Platform",
    image: project2,
    description: [
      "Built a file sharing platform for uploading and distributing files securely.",
      "Added shareable links for quick and simple file access across devices.",
      "Integrated QR code generation to make file sharing faster and more convenient.",
      "Included email-based sharing workflows for direct file distribution.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Firebase", "Express"],
    github: "https://github.com/codes4vinay/filespire",
    demo: "https://filespire.in/",
  },
];
