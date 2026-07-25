export const HERO_CONTENT = `Full Stack Developer building secure APIs, realtime systems, with GenAI/RAG features that ship. I enjoy web development, scaling services, and deploying production-ready apps.`;

export const HERO_HIGHLIGHTS = [

];

// About section about you
export const ABOUT_TEXT = `I’m Vinay Kumar, a full stack developer with a strong interest in GenAI and cloud-native engineering. I build secure APIs, design scalable data models, and ship production-ready services with Docker and CI/CD. Lately I’ve been exploring RAG systems using vector databases (Pinecone), and agent workflows using LangChain/LangGraph.`;

export const HASHNODE_USERNAME = "vinayislive";

// Your work experiences
export const EXPERIENCES = [
  {
    year: "Oct 2025 - Dec 2025",
    role: "Frontend Developer",
    company: "Phi Launcher",
    location: "Remote",
    link: "https://philauncher.com",
    description: [
      "Developed a responsive frontend with React.js and Tailwind CSS, delivering 8+ UI sections with reusable components following scalable architecture patterns.",
      "Reduced initial bundle size by 67% from 1200 KB to 400 KB using route-based code splitting and lazy loading across multiple routes.",
      "Improved Lighthouse performance score from 60 to 99 by auditing 10+ pages, optimizing render paths, and improving Core Web Vitals.",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Code Splitting",
      "Lazy Loading",
      "Lighthouse",
      "Core Web Vitals",
    ],
  },
];

// Your projects
export const PROJECTS = [
  {
    title: "DocFusion - AI Document Analysis Platform",
    image: "/project-5.png",
    description: [
      "Built an AI-powered document analysis platform using FastAPI, OCR, and RAG to analyze PDFs, scanned images, and text documents.",
      "Implemented a FAISS-based semantic retrieval pipeline with MiniLM embeddings and Redis/RQ background workers for scalable document processing.",
      "Enabled AI-generated summaries and contextual document Q&A using vector search and LLM-powered retrieval.",
      "Integrated Supabase authentication, document history, Dockerized deployment, and pipeline monitoring for OCR, retrieval, queue, and LLM latency.",
    ],
    technologies: [
      "FastAPI",
      "Python",
      "React",
      "Redis",
      "RQ",
      "FAISS",
      "MiniLM",
      "Supabase",
      "Docker",
      "OCR",
      "RAG",
      "TailwindCSS",
    ],
    github: "https://github.com/codes4vinay/DocFusion",
    demo: "https://docfusion.vinaydev.in/",
  },
  {
    title: "Mendly - Electronics Repair & Marketplace",
    image: "/mendly.png",
    description: [
      "Built a full-stack MERN platform connecting customers with verified electronics repair service centres.",
      "Implemented real-time chat with Socket.IO and secure Razorpay payment integration with HMAC verification.",
      "Added role-based access control for users, technicians, and admins with secure JWT authentication using httpOnly cookies.",
      "Integrated a RAG-powered AI chatbot to answer Mendly-related questions for users.",
      "Optimized performance with MongoDB compound indexes and deployed the platform on Azure with a comprehensive admin dashboard.",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "Razorpay",
      "Express",
      "Redux Toolkit",
      "TailwindCSS",
      "Azure",
    ],
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
    technologies: [
      "React",
      "Node.js",
      "Gemini API",
      "JavaScript",
      "TailwindCSS",
      "Vercel",
    ],
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
      "npm Package",
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
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Express",
    ],
    github: "https://github.com/codes4vinay/filespire",
    demo: "https://filespire.in/",
  },
];
