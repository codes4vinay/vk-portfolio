import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Background from "./components/Background";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-transparent text-slate-800 antialiased selection:bg-violet-300/40 selection:text-slate-950 dark:text-slate-200 dark:selection:bg-fuchsia-400/20 dark:selection:text-slate-100">
      <Background />
      <Navbar />
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-24 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Technologies />
        <Blogs />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
