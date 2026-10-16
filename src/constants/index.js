export const HERO_CONTENT = `Full Stack Developer building secure APIs, realtime systems, with GenAI/RAG features that ship. I enjoy web development, scaling services, and deploying production-ready apps.`;

export const HERO_HIGHLIGHTS = [

];

// About section about you
export const ABOUT_TEXT = `I’m Vinay Kumar, a full stack developer with a strong interest in GenAI and cloud-native engineering. I build secure APIs, design scalable data models, and ship production-ready services with Docker and CI/CD. Lately I’ve been exploring RAG systems using vector databases (Pinecone), and agent workflows using LangChain.`;


export const HASHNODE_USERNAME = "vinayislive";

// Your work experiences
export const EXPERIENCES = [
  {
    year: "July 2026 – Sept 2026",
    role: "Full Stack Developer Intern",
    company: "Sahii.in",
    location: "Remote",
    link: "https://sahii.in",
    description: [
      "Engineered a cross-order item-level PO engine in Node.js, Express, MongoDB that pools identical SKUs across customer orders and supports split-quantity multi-vendor awarding.",
      "Built a zero-login RFQ portal with tokenized URLs and QR codes, plus automated RFQ and PO alerts via the WhatsApp Cloud API.",
      "Designed a real-time webhook sync with the live e-commerce platform, auto-mapping orders across 10 categories and 22 subcategories and computing gross margin.",
      "Shipped 10+ REST APIs with JWT auth, Zod validation, and RBAC across 3 roles; automated deployments using GitHub Actions and PM2.",
    ],
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "WhatsApp Cloud API",
      "Webhooks",
      "Zod",
      "JWT",
      "RBAC",
      "GitHub Actions",
      "PM2",
    ],
  },

  {
    year: "Oct 2025 - Nov 2025",
    role: "Web Developer",
    company: "Phi Launcher",
    location: "Freelance | Remote",
    link: "https://philauncher.com",
    description: [
      "Engineered responsive, reusable UI components with React.js and Tailwind CSS to build scalable, mobile-first interfaces.",
      "Integrated 10+ REST APIs and collaborated with backend to deliver seamless, end-to-end application functionality.",
      "Optimized frontend performance: cut bundle size by 67% and boosted Lighthouse score from 60 to 99.",
      "Shipped production-ready features in a fast-paced startup environment, contributing to Phi Launcher’s product growth.",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "REST APIs",
      "Performance Optimization",
      "Lighthouse",
      "Core Web Vitals",
    ],
  },
];



// Your projects
export const PROJECTS = [
  {
    title: "Chaos Proxy — HTTP Fault-Injection Proxy",
    image: "/chaos-proxy.jpg",
    description: [
      "Built an HTTP fault-injection proxy from scratch on raw Node.js http streams, handling concurrent connection forwarding, piping, and error recovery without a framework.",
      "Designed a triangle-wave fault degradation model to simulate realistic network failure patterns, with a real-time pipeline computing p50/p95/p99 latency and failure-rate metrics.",
      "Built a threshold-based assertion engine that auto-halts fault injection on p99 latency or failure-rate breaches, configurable live via REST APIs.",
      "Shipped a live React + Socket.IO dashboard streaming telemetry and visualizing latency/fault trends with Recharts, including a configurable load generator.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Express",
      "React",
      "Socket.IO",
      "WebSockets",
      "Recharts",
    ],
    github: "https://github.com/codes4vinay/Chaos-Proxy",
  },
  {
    title: "Mendly — Electronics Repair Service Platform",
    image: "/mendly.png",
    description: [
      "Built a full-stack repair-service marketplace connecting customers with verified providers across 3 RBAC roles, with booking management, live chat, order tracking, and reviews.",
      "Implemented JWT access/refresh auth with httpOnly cookie sessions, Redux state, and rate limiting (100 req/15 min), plus Socket.IO for real-time messaging and Razorpay for secure payments.",
      "Designed a scalable MVC backend with MongoDB indexing and Zod validation; deployed on Azure Web App achieving sub-150ms average API response time.",
      "Integrated a RAG-powered support chatbot using the Groq API and Pinecone for context-aware, low-latency customer assistance.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Razorpay",
      "RAG",
      "Pinecone",
      "Azure",
    ],
    github: "https://github.com/codes4vinay/mendly",
    demo: "https://mendly.vinaydev.in/",
  },
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

