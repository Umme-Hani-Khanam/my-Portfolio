import { useEffect, useState } from "react";
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
    <header className="sticky top-0 z-50 border-b border-surface bg-surface/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-sm font-semibold text-[var(--accent)] ring-1 ring-[var(--border)]">
            UH
          </div>
          <div className="hidden min-w-[120px] flex-col leading-none md:grid">
            <span className="text-sm font-semibold text-[var(--text-primary)]">Umme Hani</span>
            <span className="text-xs text-[var(--text-muted)]">Product engineer for growth-stage teams</span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`text-sm font-medium transition ${
                  activeSection === id ? "text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
                aria-current={activeSection === id ? "page" : undefined}
              >
                {item}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
            className="rounded-full border border-surface bg-surface px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-surface-soft"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
          <a
            href="https://www.linkedin.com/in/umme-hani-khanam"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-surface bg-surface px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-surface-soft"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-95"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-surface bg-surface text-[var(--text-primary)] transition md:hidden"
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
        className={`overflow-hidden border-t border-surface bg-surface/95 transition-all duration-300 md:hidden ${menuOpen ? "max-h-[420px]" : "max-h-0"}`}
      >
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-4 py-5">
          <div className="grid gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setTheme((current) => (current === "light" ? "dark" : "light"));
                setMenuOpen(false);
              }}
              className="rounded-full border border-surface bg-surface px-4 py-3 text-sm font-semibold text-[var(--text-primary)]"
            >
              {theme === "light" ? "Switch dark" : "Switch light"}
            </button>
            <a
              href="#contact"
              className="rounded-full bg-[var(--accent)] px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-95"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
            <a
              href="https://www.linkedin.com/in/umme-hani-khanam"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-surface bg-surface px-4 py-3 text-center text-sm font-semibold text-[var(--text-primary)]"
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
