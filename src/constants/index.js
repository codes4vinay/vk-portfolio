export const HERO_CONTENT = `Full Stack Developer building secure APIs, realtime systems, with GenAI/RAG features that ship. I enjoy web development, scaling services, and deploying production-ready apps.`;

export const HERO_HIGHLIGHTS = [
 
];

// About section about you
export const ABOUT_TEXT = `I’m Vinay Kumar, a full stack developer with a strong interest in GenAI and cloud-native engineering. I build secure APIs, design scalable data models, and ship production-ready services with Docker and CI/CD. Lately I’ve been exploring RAG systems using vector databases and knowledge graphs (Pinecone + Neo4j), and agent workflows using LangChain/LangGraph with LangSmith for evaluation and observability.`;

export const HASHNODE_USERNAME = "vinayislive";

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
    image: "/mendly.png",
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
    image: "/thumblify.png",
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
    image: "/npm.png",
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
    image: "/filespire.png",
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
