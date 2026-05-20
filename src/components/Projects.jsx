import { motion } from "framer-motion";
import { useState } from "react";
import useReveal from "../hooks/useReveal";
import CaseStudyModal from "./CaseStudyModal";
import homeTrackerScreenshot from "../assets/home-tracker-screenshot.png";
import enactusScreenshot from "../assets/enactus-screenshot.png";

const projects = [
  {
    name: "HomeTracker",
    label: "Renovation operations dashboard",
    platform: "Netlify",
    spotlight: "Operational dashboard for renovation teams.",
    summary: "HomeTracker centralizes project status, budget tracking, permit workflows, and AI-assisted estimates into one modern ops surface.",
    challenge: "Renovation teams needed a single source of truth for status, costs, and contractor coordination.",
    solution: "Built a React dashboard, Node.js API gateway, and Supabase data model to connect workflows and reduce delays.",
    impact: "Improved visibility, reduced coordination gaps, and shipped a deploy-ready product experience.",
    features: [
      "Renovation milestones, budgets, and permit tracking in one dashboard",
      "Cross-team collaborator status and contractor updates",
      "Smart estimate suggestions driven by workflow data",
      "Responsive UI built for desktop and field review",
    ],
    responsibilities: [
      "Designed reusable UI components and data contracts",
      "Implemented Node.js + Express APIs for project workflows",
      "Built Supabase database models and secure auth rules",
    ],
    metrics: ["Ops dashboard UX", "API-driven workflows", "Deployment-ready"],
    stack: ["React", "Node.js", "Express", "Supabase"],
    liveUrl: "https://homerenovationtracker.netlify.app",
    githubUrl: "https://github.com/Umme-Hani-Khanam/home-renovation-frontend",
    screenshot: homeTrackerScreenshot,
    alt: "HomeTracker renovation dashboard preview",
    featured: true,
  },
  {
    name: "Enactus MLNC",
    label: "Stakeholder website",
    platform: "Vercel",
    spotlight: "Responsive chapter site for events and sponsorship.",
    summary: "A modular React website optimized for clean content updates, strong visual hierarchy, and fast mobile performance.",
    challenge: "The chapter needed a modern web presence that loaded quickly and presented events clearly.",
    solution: "Built reusable page sections, optimized assets, and deployed a high-performance site with Vercel.",
    impact: "Raised event visibility, improved sponsor presentation, and reduced page load times.",
    features: [
      "Mobile-first homepage and event pages",
      "Modular content blocks for sponsors and chapter stories",
      "Optimized imagery and responsive typography",
    ],
    responsibilities: [
      "Built reusable React content sections",
      "Optimized front-end performance for Vercel deployments",
      "Designed a consistent visual system for chapter messaging",
    ],
    metrics: ["Site performance", "Audience conversion", "Reusable layout"],
    stack: ["React", "Vercel", "Tailwind CSS"],
    liveUrl: "https://enactus-mlnc-website.vercel.app",
    githubUrl: "",
    screenshot: enactusScreenshot,
    alt: "Enactus MLNC website preview",
    featured: false,
  },
];

export default function Projects() {
  useReveal();
  const [openProject, setOpenProject] = useState(null);

  return (
    <section id="projects" className="section reveal px-4 py-12 sm:px-6 sm:py-16">
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-violet-300">
            Selected Product Work
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Product work that balances polished interfaces with backend reliability.
          </h2>
          <p className="max-w-xl text-base leading-7 text-zinc-400">
            These case studies show how I deliver full-stack systems, with frontend polish, API integrity, and deployment-ready product architecture.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="group grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 lg:grid-cols-[1.15fr_0.85fr]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
            >
              <div className="relative overflow-hidden rounded-[28px] bg-zinc-950/90">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-violet-500/15 to-transparent" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950">
                  <img
                    src={project.screenshot}
                    alt={project.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-violet-300 shadow-sm backdrop-blur">
                    {project.platform}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-5">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-zinc-400">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-violet-500" />
                    {project.spotlight}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-semibold text-white">{project.name}</h3>
                    <p className="text-base leading-7 text-zinc-300">{project.summary}</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
                      <span className="block text-xs uppercase tracking-[0.28em] text-zinc-500">Challenge</span>
                      <p className="mt-3 font-semibold text-white">{project.challenge}</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
                      <span className="block text-xs uppercase tracking-[0.28em] text-zinc-500">Solution</span>
                      <p className="mt-3 font-semibold text-white">{project.solution}</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
                      <span className="block text-xs uppercase tracking-[0.28em] text-zinc-500">Impact</span>
                      <p className="mt-3 font-semibold text-white">{project.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-300">
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {project.stack.map((item) => (
                    <span key={item} className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="grid gap-3 rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">Deliverables</p>
                  <div className="grid gap-3 text-sm leading-7 text-zinc-300">
                    {project.features.map((feature) => (
                      <div key={feature} className="rounded-3xl bg-zinc-950/80 p-4">{feature}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:sticky lg:top-24">
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">Responsibilities</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-300">
                    {project.responsibilities.map((item) => (
                      <li key={item} className="rounded-3xl bg-zinc-950/80 p-4">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                  <div className="grid gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                    >
                      View live product
                    </a>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        View source
                      </a>
                    ) : (
                      <div className="inline-flex min-w-[170px] items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 px-5 py-3 text-sm font-semibold text-zinc-500">
                        Source private
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => setOpenProject(project)}
                      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
                    >
                      Case study
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      {openProject && <CaseStudyModal project={openProject} onClose={() => setOpenProject(null)} />}
    </section>
  );
}
