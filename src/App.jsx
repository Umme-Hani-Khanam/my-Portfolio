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

export default function App() {
  return (
    <div className="relative overflow-hidden bg-[#07070f] text-white">
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
