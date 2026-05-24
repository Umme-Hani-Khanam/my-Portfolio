import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";

const roles = [
  {
    title: "AI Web Developer Intern",
    period: "Internship",
    company: "InAmigous Foundation",
    mode: "Remote",
    points: [
      "Spearheaded the visual overhaul of the foundation’s web ecosystem to bridge AI integrations with intuitive product design.",
      "Architected high-performance UI features and streamlined asset delivery using modern frontend workflows.",
      "Elevated polish, responsiveness, and interaction clarity for a frictionless user experience.",
    ],
  },
  {
    title: "AI Content Creation Department Manager Intern",
    period: "Jan 2026 - Feb 2026",
    company: "Hadi & Taimur",
    mode: "Remote",
    points: [
      "Developed AI-powered content, viral short-form videos, and trend-driven creatives using tools like Higgsfield, Flow, v0, and other modern AI platforms. Researched emerging AI workflows and optimized engaging digital content for higher audience performance.",
    ],
  },
  {
    title: "Graphic Designer",
    period: "Jan 2023 - Jan 2026",
    company: "Girls Islamic Organization",
    mode: "Remote",
    points: [
      "Designed a reusable visual system for campaigns, social media, and fundraising assets.",
      "Created templates and brand guidelines to speed production with consistent typography.",
      "Partnered with engineering and content teams to align delivery cadence and launch readiness.",
    ],
  },
];

export default function Experience() {
  useReveal();

  return (
    <section id="experience" className="section reveal px-4 py-16 sm:px-6 sm:py-20">
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-violet-300">
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Engineering experience that combines product delivery with team collaboration.
          </h2>
          <p className="max-w-xl text-base leading-7 text-zinc-400">
            My roles focus on building systems, managing workstreams, and delivering product improvements with technical accountability.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {roles.map((role) => (
            <motion.article
              key={role.title}
              className="group flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
                    {role.mode}
                  </span>
                  <div className="text-right text-sm text-zinc-400">
                    <p className="font-semibold text-white">{role.company}</p>
                    <p>{role.period}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white">{role.title}</h3>
                <ul className="grid gap-3 text-sm leading-7 text-zinc-300">
                  {role.points.map((point) => (
                    <li key={point} className="rounded-3xl bg-white/10 p-4">{point}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
