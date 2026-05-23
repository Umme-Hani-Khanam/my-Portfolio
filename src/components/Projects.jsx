import { motion } from "framer-motion";
import { useState } from "react";
import useReveal from "../hooks/useReveal";
import CaseStudyModal from "./CaseStudyModal";

const projects = [
  {
    name: "HomeTracker",
    platform: "Netlify",
    summary:
      "HomeTracker centralizes project status, budget tracking, permit workflows, and AI-assisted estimates into one modern ops surface.",

    challenge:
      "Renovation teams needed a single source of truth for status, costs, and contractor coordination.",

    solution:
      "Built a React dashboard, Node.js API gateway, and Supabase data model to connect workflows and reduce delays.",

    impact:
      "Improved visibility, reduced coordination gaps, and shipped a deploy-ready product experience.",

    features: [
      "Renovation milestones and permit tracking",
      "Cross-team collaboration workflows",
      "Smart estimate suggestions",
      "Responsive dashboard UI",
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
        <div className="mt-14 grid gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-8 shadow-2xl backdrop-blur-md transition duration-300 hover:border-violet-500/30"
            >
              <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
                {/* Left Content */}
                <div className="space-y-8">
                  {/* Top */}
                  <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-violet-300">
                      <span className="h-2 w-2 rounded-full bg-violet-500" />
                      {project.platform}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl font-semibold text-white sm:text-4xl">
                        {project.name}
                      </h3>

                      <p className="max-w-3xl text-base leading-8 text-zinc-300">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="grid gap-5 md:grid-cols-3">
                    <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                        Challenge
                      </p>

                      <p className="mt-4 text-sm leading-7 text-zinc-300">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                        Solution
                      </p>

                      <p className="mt-4 text-sm leading-7 text-zinc-300">
                        {project.solution}
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                        Impact
                      </p>

                      <p className="mt-4 text-sm leading-7 text-zinc-300">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="rounded-[30px] border border-white/10 bg-black/20 p-6">
                    <p className="mb-5 text-sm uppercase tracking-[0.28em] text-zinc-500">
                      Key Features
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-sm leading-7 text-zinc-300"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="flex flex-col justify-between gap-6">
                  {/* Tech Stack */}
                  <div className="rounded-[30px] border border-white/10 bg-black/20 p-6">
                    <p className="mb-5 text-sm uppercase tracking-[0.28em] text-zinc-500">
                      Tech Stack
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="rounded-[30px] border border-white/10 bg-black/20 p-6">
                    <div className="grid gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-14 items-center justify-center rounded-full bg-violet-500 px-6 text-sm font-semibold text-white transition hover:opacity-90"
                      >
                        View Live Project
                      </a>

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                        >
                          View Source Code
                        </a>
                      ) : (
                        <div className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm text-zinc-500">
                          Private Repository
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => setOpenProject(project)}
                        className="inline-flex h-14 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-zinc-200"
                      >
                        View Case Study
                      </button>
                    </div>
                  </div>
                </div>
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