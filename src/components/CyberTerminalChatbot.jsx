import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaTimes, FaPaperPlane, FaRobot, FaQuestionCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { EXPERIENCES, PROJECTS, ABOUT_TEXT } from "../constants";

const KNOWLEDGE_BASE = {
  greetings: {
    patterns: ["hi", "hello", "hey", "who are you", "bot", "help", "/start", "/help"],
    response:
      "Hello! I am Vinay's Cyber AI Terminal Assistant. I can tell you everything about Vinay's software engineering background, internships, projects, tech stack, and contact details.",
  },
  experience: {
    patterns: ["experience", "internship", "sahii", "phi launcher", "work", "job", "history", "/experience"],
    response:
      "Vinay's Professional Experience:\n\n1. Full Stack Developer Intern — Sahii (Remote | Present)\n• Shipped 15+ production REST APIs in Node.js/Express/MongoDB.\n• Built typo-tolerant search with Meilisearch & Fuse.js.\n• Optimized Core Web Vitals & SEO via SSR asset delivery.\n\n2. Web Developer — Phi Launcher (Freelance | Remote | Oct 2025 - Nov 2025)\n• Built responsive UI components in React.js & Tailwind CSS.\n• Integrated 10+ REST APIs & boosted Lighthouse performance score from 60 to 99 (67% bundle reduction).",
  },
  projects: {
    patterns: ["projects", "chaos proxy", "mendly", "docfusion", "work", "portfolio", "built", "/projects"],
    response:
      "Vinay's Key Engineering Projects:\n\n⚡ 1. Chaos Proxy — HTTP Fault-Injection Proxy (Node.js, TypeScript, Socket.IO, Recharts)\n• Built HTTP fault injection from raw Node.js streams.\n• Triangle-wave fault model with real-time p50/p95/p99 telemetry & auto-halt assertions.\n\n🛠️ 2. Mendly — Electronics Repair Platform (React, Node.js, Express, MongoDB, Socket.IO, Razorpay, Pinecone RAG)\n• RBAC marketplace connecting customers & repair centers with sub-150ms Azure response time.\n\n📄 3. DocFusion — AI Document Analysis (FastAPI, Python, FAISS, Redis/RQ, OCR, Supabase)\n• RAG pipeline for PDFs & scanned docs with vector retrieval & background queue workers.",
  },
  stack: {
    patterns: ["stack", "skills", "technologies", "languages", "java", "python", "node", "react", "tools", "/stack"],
    response:
      "Vinay's Technical Toolbox:\n\n• Languages: JavaScript, TypeScript, Python, Java\n• Backend & APIs: Node.js, Express.js, FastAPI, Zod, Postman\n• GenAI & Data: LangChain, Vector Search (Pinecone), MongoDB, Redis, SQL\n• Frontend: React, Tailwind CSS, Vite, HTML5, CSS3\n• DevOps & Cloud: Docker, AWS, Linux, GitHub Actions, Nginx, Cloudflare, Render",
  },
  contact: {
    patterns: ["contact", "email", "hire", "socials", "github", "linkedin", "reach", "/contact"],
    response:
      "How to reach Vinay Kumar:\n\n📧 Email: vinaykumar.2k04@gmail.com\n📍 Location: India (Open to Remote & Onsite roles)\n🌐 Website: sahii.in / vinaydev.in\n💼 Availability: Available for Full Stack, Backend & GenAI Engineering roles!",
  },
  bio: {
    patterns: ["about", "who is vinay", "bio", "background", "summary", "/about"],
    response: ABOUT_TEXT,
  },
};

const SUGGESTIONS = [
  { label: "⚡ Key Projects", query: "tell me about projects" },
  { label: "💼 Experience", query: "tell me about work experience" },
  { label: "🚀 Tech Stack", query: "what is your tech stack?" },
  { label: "📧 Contact Info", query: "how to contact vinay?" },
];

const CyberTerminalChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "vinay_ai_terminal v1.0.4 initialized.\nType or tap a command below to explore Vinay's background!",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const findResponse = (userQuery) => {
    const q = userQuery.toLowerCase().trim();

    for (const key in KNOWLEDGE_BASE) {
      const { patterns, response } = KNOWLEDGE_BASE[key];
      if (patterns.some((p) => q.includes(p))) {
        return response;
      }
    }

    return (
      "Command not recognized. Try asking about:\n" +
      "• Projects (Chaos Proxy, Mendly, DocFusion)\n" +
      "• Work Experience (Sahii, Phi Launcher)\n" +
      "• Tech Stack (Languages, Backend, GenAI, DevOps)\n" +
      "• Contact & Hiring Info"
    );
  };

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = findResponse(query);
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Trigger Widget (Bottom-Right Floating Chatbot Icon) */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-300/80 bg-white/90 text-violet-600 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-violet-500 hover:shadow-violet-500/20 dark:border-violet-500/40 dark:bg-slate-950/90 dark:text-cyan-400 dark:hover:border-cyan-400 dark:hover:shadow-cyan-500/20 cursor-pointer group"
          aria-label="Open Cyber Terminal Assistant"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 blur-md opacity-40 group-hover:opacity-90 transition-opacity" />
          {isOpen ? (
            <FaTimes className="relative text-xl text-slate-800 dark:text-white" />
          ) : (
            <div className="relative flex items-center justify-center">
              <FaTerminal className="text-xl text-violet-600 dark:text-cyan-400" />
              <span className="absolute -top-2 -right-2 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
            </div>
          )}
        </motion.button>
      </div>

      {/* Terminal Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-[9999] w-[92vw] max-w-[420px] rounded-3xl border border-slate-200/90 bg-white/95 shadow-2xl backdrop-blur-2xl font-code overflow-hidden text-slate-800 dark:border-violet-500/30 dark:bg-[#030712]/95 dark:text-slate-200"
          >
            {/* Terminal Top Window Bar */}
            <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-100/90 px-4 py-3 select-none dark:border-white/10 dark:bg-slate-900/80">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-bold text-slate-600 dark:text-slate-400">vinay_ai_cli ~ bash</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition cursor-pointer"
              >
                <FaTimes className="text-xs" />
              </button>
            </div>

            {/* Terminal Body Message Area */}
            <div className="h-[340px] overflow-y-auto p-4 space-y-4 text-xs leading-relaxed custom-scrollbar">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl p-3 whitespace-pre-wrap ${
                      msg.sender === "user"
                        ? "bg-violet-600 text-white rounded-br-xs shadow-md"
                        : "border border-slate-200/90 bg-slate-100/90 text-slate-800 rounded-bl-xs shadow-xs dark:border-white/10 dark:bg-slate-900/90 dark:text-cyan-200"
                    }`}
                  >
                    {msg.sender === "bot" && (
                      <div className="mb-1 flex items-center gap-1.5 text-[10px] font-bold text-violet-600 dark:text-cyan-400">
                        <FaRobot /> <span>AI_TERMINAL</span>
                      </div>
                    )}
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-violet-600 dark:text-cyan-400 text-xs font-mono">
                  <span className="h-2 w-2 animate-ping rounded-full bg-violet-600 dark:bg-cyan-400" />
                  <span>Processing query...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="flex gap-1.5 overflow-x-auto px-4 py-2 border-t border-slate-200/60 bg-slate-50/80 dark:border-white/5 dark:bg-slate-950/60 no-scrollbar">
              {SUGGESTIONS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(s.query)}
                  className="shrink-0 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[10px] font-bold text-violet-700 transition hover:bg-violet-100 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300 dark:hover:bg-violet-500/30 cursor-pointer"
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Command Input Area */}
            <div className="flex items-center gap-2 border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 dark:border-white/10 dark:bg-slate-950/90">
              <span className="text-violet-600 dark:text-cyan-400 font-bold">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything or type /help..."
                className="flex-1 bg-transparent text-xs text-slate-800 placeholder-slate-400 outline-none font-code dark:text-white dark:placeholder-slate-500"
              />
              <button
                onClick={() => handleSend()}
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-600 text-white transition hover:bg-violet-500 cursor-pointer"
              >
                <FaPaperPlane className="text-xs" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CyberTerminalChatbot;
