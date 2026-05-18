import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="app-shell relative min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text-primary)]">
      <ScrollProgress />
      <Navbar />
      <main className="relative mx-auto max-w-[1240px] px-4 pb-24 pt-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <BackToTop />
      <div className="pointer-events-none absolute left-[-6rem] top-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(233,166,216,0.24),_transparent_30%)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-20 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_bottom_right,_rgba(198,156,219,0.24),_transparent_30%)] blur-3xl" />
    </div>
  );
}
