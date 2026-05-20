import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import useReveal from "../hooks/useReveal";
import { useState } from "react";

const categories = [
  {
    title: "Frontend",
    icon: "⚡",
    highlights: ["React", "TypeScript", "Tailwind CSS", "Responsive UI"],
    details: [
      "Reusable component libraries for product-facing screens.",
      "High-fidelity UI with polished motion and accessible controls.",
      "Responsive layouts designed for desktop and mobile workflows.",
    ],
  },
  {
    title: "Backend",
    icon: "🧠",
    highlights: ["Node.js", "Express", "REST APIs", "Authentication"],
    details: [
      "API contracts that keep frontend and backend aligned.",
      "Secure session handling, form validation, and business logic.",
      "Server-side tooling for predictable deploys and scaling.",
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    highlights: ["Supabase", "Postgres", "Relational data", "Query design"],
    details: [
      "Data models built for real product flows and authorization.",
      "Optimized queries for performance and clear data ownership.",
      "Realtime sync, row-level security, and operational reporting.",
    ],
  },
  {
    title: "Deployment",
    icon: "🚀",
    highlights: ["Vercel", "Netlify", "CI/CD", "Monitoring"],
    details: [
      "Production deployments with build optimizations and caching.",
      "Environment-driven releases and automated preview flows.",
      "Monitoring and error tracking for reliable post-launch support.",
    ],
  },
  {
    title: "Tools",
    icon: "🔧",
    highlights: ["ESLint", "Prettier", "Vitest", "Playwright"],
    details: [
      "Code quality guardrails for consistent engineering work.",
      "Test coverage across components, APIs, and edge cases.",
      "Developer ergonomics that keep execution fast and dependable.",
    ],
  },
];

export default function Skills() {
  useReveal();
  const [open, setOpen] = useState("Frontend");

  return (
    <section id="skills" className="section reveal px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeader
        label="Technical Expertise"
        title="Cross-cutting skills that span frontend, backend, and product delivery"
        description="I build interfaces, APIs, database models, and deployable product systems with the same delivery mindset."
      />

      <motion.div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        {categories.map((category) => (
          <article
            key={category.title}
            className={`group flex min-h-[280px] flex-col justify-between rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glow transition duration-300 ${
              open === category.title ? "ring-1 ring-violet-500/20" : "hover:border-white/20"
            }`}
          >
            <button
              type="button"
              className="w-full text-left"
              onClick={() => setOpen(open === category.title ? null : category.title)}
              aria-expanded={open === category.title}
              aria-controls={`skills-${category.title}`}
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-3xl bg-violet-500/15 text-violet-200 text-lg">
                  {category.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                  <p className="text-sm text-zinc-400">Tap to expand details</p>
                </div>
              </div>
            </button>

            <div className="mt-6 space-y-4">
              <div className="grid gap-2 sm:grid-cols-2">
                {category.highlights.map((item) => (
                  <span key={item} className="rounded-3xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>

              <div
                id={`skills-${category.title}`}
                className={`overflow-hidden transition-all duration-500 ${
                  open === category.title ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-3 text-sm leading-7 text-zinc-300">
                  {category.details.map((detail) => (
                    <li key={detail} className="rounded-3xl border border-white/10 bg-zinc-950/70 px-4 py-3">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 text-sm text-zinc-500">
              {open === category.title ? "Selected and expanded." : "Click to review focus areas."}
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
}
