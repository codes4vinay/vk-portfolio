import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import "./index.css";
import Background from "./components/Background";
import Hero from "./components/Hero";
import LeetCodeHeatmap from "./components/LeetCodeHeatmap";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import CyberTerminalChatbot from "./components/CyberTerminalChatbot";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-transparent text-slate-800 antialiased selection:bg-violet-300/40 selection:text-slate-950 dark:text-slate-200 dark:selection:bg-fuchsia-400/20 dark:selection:text-slate-100">
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Background />
      <Navbar />
      <ScrollToTop />
      <CyberTerminalChatbot />



      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-4 pt-24 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{
          opacity: loading ? 0 : 1,
          y: loading ? 15 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: "opacity, transform" }}
      >
        <Hero />
        <LeetCodeHeatmap />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Blogs />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;

