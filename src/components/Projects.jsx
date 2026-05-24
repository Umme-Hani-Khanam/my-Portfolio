import { motion } from "framer-motion";
import { useState } from "react";
import useReveal from "../hooks/useReveal";
import CaseStudyModal from "./CaseStudyModal";

const projects = [
  {
    name: "Home Renovation Tracker",
    platform: "Netlify",
    summary:
      "A built-for-purpose renovation tracker that centralizes budgets, milestones, and contractor coordination into a clean operational dashboard.",
    challenge:
      "Teams needed one reliable surface to track renovation progress, budget changes, and permit handoffs.",
    solution:
      "Delivered a polished React UI with real-time status updates, cost tracking, and built-in estimate workflows.",
    impact:
      "Improved project visibility, reduced coordination friction, and helped renovation teams move faster.",
    features: [
      "Budget and milestone tracking",
      "Permit workflow visibility",
      "Team collaboration notes",
      "Responsive dashboard experience",
    ],
    stack: ["React", "Node.js", "Express", "Supabase"],
    liveUrl: "https://homerenovationtracker.netlify.app",
    githubUrl:
      "https://github.com/Umme-Hani-Khanam/home-renovation-frontend",
  },
  {
    name: "Enactus MLNC",
    platform: "Vercel",
    summary:
      "A modular React website optimized for clean content updates, strong visual hierarchy, and fast mobile performance.",
    challenge:
      "The chapter needed a modern web presence that loaded quickly and presented events clearly.",
    solution:
      "Built reusable page sections, optimized assets, and deployed a high-performance site with Vercel.",
    impact:
      "Raised event visibility, improved sponsor presentation, and reduced page load times.",
    features: [
      "Mobile-first responsive layout",
      "Reusable sponsor content blocks",
      "Fast-loading optimized pages",
      "Clean visual hierarchy",
    ],
    stack: ["React", "Vercel", "Tailwind CSS"],
    liveUrl: "https://enactus-mlnc-website.vercel.app",
    githubUrl: "",
  },
  {
    name: "Todo Companion – AI Powered Task Manager",
    platform: "Vercel",
    summary:
      "An AI-enhanced productivity assistant built to help users organize tasks, prioritize work, and stay focused with smart suggestions.",
    challenge:
      "Busy users needed a task manager that adapted to their workflow and surfaced the most important work.",
    solution:
      "Created a responsive task management experience with AI-powered suggestions, smart priorities, and clean task views.",
    impact:
      "Enabled faster task planning and made daily work feel more organized and efficient.",
    features: [
      "AI-generated task priorities",
      "Smart due-date recommendations",
      "Clean task organization",
      "Mobile-friendly task views",
    ],
    stack: ["React", "AI integrations", "Tailwind CSS"],
    liveUrl: "https://todo-companion.vercel.app",
    githubUrl: "",
  },
];

export default function Projects() {
  useReveal();

  const [openProject, setOpenProject] = useState(null);

  return (
    <section
      id="projects"
      className="section px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl space-y-5">
          <p className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-violet-300">
            Selected Product Work
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Full-stack products built for performance, usability, and scale.
          </h2>

          <p className="text-base leading-8 text-zinc-400">
            Production-focused projects combining frontend systems, backend
            architecture, and polished user experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 xl:grid-cols-2">
          {projects.length > 0 &&
            projects.map((project, index) => (
              <motion.article
                key={`${project.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex min-h-full flex-col justify-between rounded-[32px] border border-white/10 bg-slate-950/80 p-8 transition duration-300 hover:border-violet-400/30 hover:bg-slate-900/90"
              >
                <div className="space-y-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-violet-300">
                      <span className="h-2 w-2 rounded-full bg-violet-500" />
                      {project.platform}
                    </div>
                    <p className="text-sm text-zinc-500">Premium case study layout</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      {project.name}
                    </h3>
                    <p className="max-w-3xl text-base leading-8 text-zinc-300">
                      {project.summary}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Challenge</p>
                      <p className="mt-4 text-sm leading-7 text-zinc-300">{project.challenge}</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Solution</p>
                      <p className="mt-4 text-sm leading-7 text-zinc-300">{project.solution}</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Impact</p>
                      <p className="mt-4 text-sm leading-7 text-zinc-300">{project.impact}</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Key Features</p>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-300">
                        {project.features.map((feature, featureIndex) => (
                          <li key={`feature-${featureIndex}`} className="rounded-2xl bg-slate-950/50 p-3">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Tech Stack</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {project.stack.map((item, stackIndex) => (
                          <span
                            key={`stack-${stackIndex}`}
                            className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-zinc-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-violet-500 px-6 text-sm font-semibold text-white transition hover:bg-violet-500/90"
                  >
                    View Live Project
                  </a>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/10 bg-slate-950/80 px-6 text-sm font-semibold text-white transition hover:border-violet-400/30 hover:bg-slate-900/90"
                    >
                      View Source Code
                    </a>
                  ) : (
                    <div className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/10 bg-slate-950/80 px-6 text-sm text-zinc-400">
                      Private Repository
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
        </div>
      </div>

      {openProject && (
        <CaseStudyModal
          project={openProject}
          onClose={() => setOpenProject(null)}
        />
      )}
    </section>
  );
}