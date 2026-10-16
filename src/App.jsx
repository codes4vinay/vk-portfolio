import React, { useEffect } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ActivitySection from "./components/ActivitySection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Sync visual viewport height with CSS variable --app-height matching target site
  useEffect(() => {
    const syncAppHeight = () => {
      const h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      document.documentElement.style.setProperty("--app-height", `${h}px`);
    };

    syncAppHeight();
    window.visualViewport?.addEventListener("resize", syncAppHeight);
    window.visualViewport?.addEventListener("scroll", syncAppHeight);
    window.addEventListener("orientationchange", syncAppHeight);

    return () => {
      window.visualViewport?.removeEventListener("resize", syncAppHeight);
      window.visualViewport?.removeEventListener("scroll", syncAppHeight);
      window.removeEventListener("orientationchange", syncAppHeight);
    };
  }, []);

  return (
    <div className="relative w-full min-h-[100svh] overflow-x-hidden selection:bg-indigo-500/20 selection:text-indigo-900">
      {/* Target Portfolio Canvas Background */}
      <Background />

      <div className="relative z-10 w-full">
        {/* Floating Goo Header Navigation */}
        <header>
          <Navbar />
        </header>

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <ActivitySection />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
