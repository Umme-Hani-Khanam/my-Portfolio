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
    <>
      <style>{`
        :root {
          --bg: #121418;
          --surface: #181c22;
          --card: #1f232b;

          --text-primary: #f2f2f3;
          --text-secondary: #b6b8be;
          --text-muted: #8c8f96;

          --accent: #1fbf9f;
          --accent-hover: #27d3b0;
          --accent-soft: rgba(31,191,159,0.12);

          --gradient: linear-gradient(135deg,#1fbf9f,#27d3b0);
        }
          
  body {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, system-ui, sans-serif;
    background: var(--bg);
    color: var(--text-primary);
    letter-spacing: -0.2px;
  }

  p {
    font-family: "Inter", system-ui, sans-serif;
    font-size: 1rem;
    line-height: 1.9;
    color: var(--text-secondary);
    font-weight: 400;
  }

  li {
    font-family: "Inter", system-ui, sans-serif;
    font-size: 0.98rem;
    line-height: 1.8;
    color: var(--text-secondary);
    font-weight: 400;
    margin-bottom: 6px;
  }

  h3 {
    font-weight: 600;
    letter-spacing: -0.5px;
  }

  h4 {
    font-weight: 600;
    letter-spacing: -0.3px;
  }
,

        * {
          margin:0;
          padding:0;
          box-sizing:border-box;
          scroll-behavior:smooth;
        }

        body {
          font-family: Inter, system-ui, sans-serif;
          background:
            radial-gradient(circle at 20% 10%, rgba(31,191,159,0.07), transparent 40%),
            var(--bg);
          color:var(--text-primary);
          line-height:1.6;
        }

        section {
    padding: 110px 10%;
  }

  section:first-of-type {
    padding-top: 140px;
  }

  section:last-of-type {
    padding-bottom: 60px;
  }

        h1 {
          font-size:clamp(2.8rem,5vw,3.8rem);
          letter-spacing:-1px;
        }

        h2 {
          font-size:2.2rem;
          margin-bottom:50px;
        }

        p { color:var(--text-secondary); }

        .card {
          background:rgba(31,35,43,0.75);
          backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,0.04);
          border-radius:18px;
          transition:all .35s ease;
        }

        .card:hover {
          transform:translateY(-3px);
          box-shadow:0 10px 35px rgba(31,191,159,0.15);
          border:1px solid rgba(31,191,159,0.25);
        }

        .btn-primary {
          background:var(--gradient);
          color:#fff;
          padding:12px 22px;
          border-radius:8px;
          text-decoration:none;
          transition:.3s ease;
        }

        .btn-primary:hover {
          transform:translateY(-2px);
          box-shadow:0 8px 25px rgba(31,191,159,0.25);
        }

        .btn-outline {
          border:1px solid var(--accent);
          color:var(--accent);
          padding:12px 22px;
          border-radius:8px;
          text-decoration:none;
          transition:.3s ease;
        }

        .btn-outline:hover {
          background:var(--accent-soft);
          transform:translateY(-2px);
        }

        .reveal {
          opacity:0;
          transform:translateY(40px);
          transition:all .6s ease-out;
        }

        .reveal.active {
          opacity:1;
          transform:translateY(0);
        }

        @media(max-width:768px){
          section{ padding:90px 6%; }
        }
      `}</style>

      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <BackToTop />
    </>
  );
}