import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import "./index.css";
import Background from "./components/Background";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import ActivitySection from "./components/ActivitySection";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import CommandPalette from "./components/CommandPalette";

function App() {
  const [loading, setLoading] = useState(true);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-transparent text-slate-900 antialiased selection:bg-indigo-500/20 selection:text-indigo-900 dark:text-slate-100 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-200">
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Background />
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <ScrollToTop />
      <CommandPalette isOpen={commandPaletteOpen} setIsOpen={setCommandPaletteOpen} />

      <motion.main
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 w-full max-w-full min-w-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: loading ? 0 : 1,
          y: loading ? 10 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Technologies />
        <ActivitySection />
        <Blogs />
        <Contact />
        <Footer />
      </motion.main>
    </div>
  );
}

export default App;
