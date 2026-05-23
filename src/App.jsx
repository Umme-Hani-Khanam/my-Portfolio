import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import AmbientGlints from "./components/AmbientGlints";
import useCursorGlow from "./hooks/useCursorGlow";
import useSmoothScroll from "./hooks/useSmoothScroll";

export default function App() {
  useSmoothScroll();
  useCursorGlow();

  return (
    <div className="relative overflow-hidden bg-[#07070f] text-white">
      <div
        id="cursor-glow"
        className="pointer-events-none fixed left-0 top-0 z-50 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.22), transparent 48%)", mixBlendMode: "screen", willChange: "transform, opacity" }}
      />
      <AmbientGlints />
      <ScrollProgress />
      <Navbar />
      <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}
