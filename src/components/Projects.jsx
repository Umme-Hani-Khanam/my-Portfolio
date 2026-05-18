import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";
import homeTrackerScreenshot from "../assets/home-tracker-screenshot.png";
import enactusScreenshot from "../assets/enactus-screenshot.png";

const projects = [
  {
    name: "HomeTracker",
    label: "Renovation operations dashboard",
    platform: "Netlify",
    spotlight: "A dashboard built to keep renovation budgets, permits, and contractor work in sync.",
    summary:
      "HomeTracker brings project progress, permits, budgets, and AI-backed estimates into a single operations surface.",
    features: [
      "Dashboard-level renovation status and milestones",
      "Budget tracking with line items and cost categories",
      "Permit workflow and contractor coordination",
      "Gemini-assisted material and timeline framing",
    ],
    responsibilities: [
      "Shaped React dashboard architecture for multiple renovation workflows",
      "Built Node.js + Express APIs to connect budget, permit, and task state",
      "Modeled Supabase relational data for renovation and contractor tracking",
      "Kept AI features practical and focused on utility",
    ],
    metrics: [
      "Real SaaS dashboard feel",
      "Operational workflow UI",
      "Budgeting and permit tracking",
    ],
    stack: ["React", "Node.js", "Express", "Supabase", "Gemini AI"],
    liveUrl: "https://homerenovationtracker.netlify.app",
    githubUrl: "https://github.com/Umme-Hani-Khanam/home-renovation-frontend",
    screenshot: homeTrackerScreenshot,
    alt: "HomeTracker renovation dashboard preview",
    featured: true,
  },
  {
    name: "Enactus MLNC",
    label: "Organization website",
    platform: "Vercel",
    spotlight: "A real production site for chapter visibility, events, and sponsor messaging.",
    summary:
      "Built for Enactus MLNC with responsive content structure and stakeholder-facing page architecture.",
    features: [
      "Mobile-first homepage designed for student and sponsor audiences",
      "Event, team, and mission sections with clear hierarchy",
      "Fast load experience for production deployment",
      "Responsive website architecture across breakpoints",
    ],
    responsibilities: [
      "Defined content blocks for event promotion and chapter storytelling",
      "Created reusable sections for squad, mission, and sponsor content",
      "Optimized the site for Vercel production performance",
    ],
    metrics: ["Production website", "Responsive architecture", "Stakeholder UX"],
    stack: ["React", "Vercel", "Responsive CSS"],
    liveUrl: "https://enactus-mlnc-website.vercel.app",
    githubUrl: "",
    screenshot: enactusScreenshot,
    alt: "Enactus MLNC website preview",
    featured: false,
  },
];

export default function Projects() {
  useReveal();

  return (
    <section id="projects" className="section reveal px-4 py-12 sm:px-6 sm:py-16">
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
            Selected Product Work
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-4xl">
            Product work for dashboards, operational systems, and production websites.
          </h2>
          <p className="max-w-xl text-base leading-7 text-[var(--text-secondary)]">
            This section shows how I balance UI delivery with engineering structure, deploy real work, and keep product decisions grounded in actual user workflows.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="group overflow-hidden rounded-[32px] border border-surface bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
            >
              {project.featured ? (
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.95fr]">
                  <div className="relative overflow-hidden bg-[#f8f3fa]">
                    <img
                      src={project.screenshot}
                      alt={project.alt}
                      className="h-[340px] w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--accent)] shadow-sm">
                      {project.platform}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-6 lg:p-8">
                    <div className="space-y-5">
                      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-[var(--text-muted)]">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                        {project.spotlight}
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-3xl font-semibold text-[var(--text-primary)]">{project.name}</h3>
                        <p className="text-base leading-7 text-[var(--text-secondary)]">{project.summary}</p>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {project.metrics.map((metric) => (
                        <div key={metric} className="rounded-3xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm font-semibold text-[var(--text-secondary)]">
                          {metric}
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-sm text-[var(--text-muted)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="grid gap-3 sm:grid-cols-[1.15fr_auto]">
                      <div className="space-y-3">
                        <div className="rounded-[28px] bg-[var(--surface-soft)] p-5 text-sm leading-7 text-[var(--text-secondary)]">
                          Built as a renovation operations product: dashboard status, budget controls, permit flow, contractor coordination, and AI estimation.
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-w-[170px] items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                        >
                          View live product
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-w-[170px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-strong)]"
                        >
                          View source
                        </a>
                      </div>
                    </div>

                    <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-soft)] p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">Engineering details</p>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-sm font-semibold text-[var(--text-primary)]">What I built</p>
                          <ul className="mt-3 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                            {project.features.map((feature) => (
                              <li key={feature} className="rounded-3xl bg-[var(--surface)] p-3">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[var(--text-primary)]">How I delivered it</p>
                          <ul className="mt-3 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                            {project.responsibilities.map((item) => (
                              <li key={item} className="rounded-3xl bg-[var(--surface)] p-3">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid gap-6">
                  <div className="relative overflow-hidden rounded-[28px] bg-[#f8f3fa]">
                    <img
                      src={project.screenshot}
                      alt={project.alt}
                      className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--accent)] shadow-sm">
                      {project.platform}
                    </div>
                  </div>

                  <div className="space-y-5 p-6 lg:p-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-[var(--text-muted)]">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                        {project.spotlight}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{project.name}</h3>
                        <p className="text-base leading-7 text-[var(--text-secondary)]">{project.summary}</p>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {project.metrics.map((metric) => (
                        <div key={metric} className="rounded-3xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm font-medium text-[var(--text-secondary)]">
                          {metric}
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-sm text-[var(--text-muted)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[28px] bg-[var(--surface-soft)] p-4 text-sm leading-7 text-[var(--text-secondary)]">
                        Built for stakeholders who need a clean, responsive website and easy content updates.
                      </div>
                      <div className="rounded-[28px] bg-[var(--surface-soft)] p-4 text-sm leading-7 text-[var(--text-secondary)]">
                        Designed with flexible blocks for events, chapters, and sponsor messaging.
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                      >
                        View live site
                      </a>
                      <span className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)]">
                        Stakeholder site
                      </span>
                    </div>

                    <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-soft)] p-5 text-sm leading-7 text-[var(--text-secondary)]">
                      <p className="font-semibold text-[var(--text-primary)]">How it was built</p>
                      <ul className="mt-3 space-y-3">
                        {project.responsibilities.map((item) => (
                          <li key={item} className="rounded-3xl bg-[var(--surface)] p-3">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
