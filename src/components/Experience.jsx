import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";

const roles = [
  {
    title: "AI Content Creation Department Manager Intern",
    period: "Jan 2026 - Feb 2026",
    company: "Hadi & Taimur",
    mode: "Remote",
    points: [
      "Built a React dashboard for prompt configuration, content staging, and approval workflows.",
      "Implemented a data pipeline to centralize model outputs, reducing manual handoff velocity by 60%.",
      "Added event-level logging and success metrics to improve editorial iteration around campaign performance.",
    ],
  },
  {
    title: "Graphic Designer",
    period: "Jan 2023 - Jan 2026",
    company: "Girls Islamic Organization",
    mode: "Remote",
    points: [
      "Designed a reusable visual system for campaigns, social media, and fundraising assets.",
      "Created templates and brand guidelines to speed up production with consistent typography and layout.",
      "Partnered with engineering and content teams to align delivery cadence, accessibility, and launch readiness.",
    ],
  },
];

export default function Experience() {
  useReveal();

  return (
    <section id="experience" className="section reveal px-4 py-16 sm:px-6 sm:py-20">
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="inline-flex rounded-full border border-(--border) bg-(--surface-soft) px-4 py-2 text-xs uppercase tracking-[0.28em] text-(--accent)">
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-(--text-primary) sm:text-4xl">
            Engineering experience that combines product delivery with team collaboration.
          </h2>
          <p className="max-w-xl text-base leading-7 text-(--text-secondary)">
            My roles focus on building systems, managing workstreams, and delivering product improvements with technical accountability.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {roles.map((role) => (
            <motion.article
              key={role.title}
              className="group flex min-h-80 flex-col justify-between overflow-hidden rounded-4xl border border-surface bg-surface p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-(--accent) hover:bg-(--surface-soft)"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-(--surface-soft) px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-(--accent)">
                    {role.mode}
                  </span>
                  <div className="text-right text-sm text-(--text-muted)">
                    <p className="font-semibold text-(--text-primary)">{role.company}</p>
                    <p>{role.period}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-(--text-primary)">{role.title}</h3>
                <ul className="grid gap-3 text-sm leading-7 text-(--text-secondary)">
                  {role.points.map((point) => (
                    <li key={point} className="rounded-3xl bg-(--surface-strong) p-4">
                      {point}
                    </li>
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
