import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";

const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(storedTheme ?? (prefersDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white">
            UH
          </div>
          <div className="hidden flex-col leading-none md:grid">
            <span className="text-sm font-semibold text-white">Umme Hani</span>
            <span className="text-xs text-zinc-400">Frontend-focused Full Stack Developer</span>
          </div>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const active = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`relative text-sm font-medium transition ${
                  active ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item}
                {active ? (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-0 -bottom-1 mx-auto h-0.5 w-full rounded-full bg-violet-500"
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  />
                ) : null}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-violet-400/40 hover:bg-white/10"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
          <a
            href="https://www.linkedin.com/in/umme-hani-khanam"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-violet-400/40 hover:bg-white/10"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-linear-to-r from-violet-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.24)] transition hover:shadow-[0_0_40px_rgba(99,102,241,0.30)]"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block h-0.5 w-6 rounded-full bg-current transition duration-300 ${menuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1.5"}`} />
          <span className={`block h-0.5 w-6 rounded-full bg-current transition duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-6 rounded-full bg-current transition duration-300 ${menuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1.5"}`} />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-zinc-950/95 transition-all duration-300 md:hidden ${menuOpen ? "max-h-[calc(100vh-4.5rem)] overflow-y-auto" : "max-h-0"}`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5">
          <div className="grid gap-4">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`text-base font-medium transition w-full ${
                    activeSection === id ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setTheme((current) => (current === "light" ? "dark" : "light"));
                setMenuOpen(false);
              }}
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
            >
              {theme === "light" ? "Switch dark" : "Switch light"}
            </button>
            <a
              href="#contact"
              className="w-full rounded-full bg-linear-to-r from-violet-500 to-blue-500 px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
            <a
              href="https://www.linkedin.com/in/umme-hani-khanam"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
