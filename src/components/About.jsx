import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import useReveal from "../hooks/useReveal";

const pillars = [
  {
    title: "Start from the workflow",
    detail: "I let the user path inform the UI, not the other way around.",
  },
  {
    title: "Keep the contract honest",
    detail: "APIs need to support real state changes and predictable error handling.",
  },
  {
    title: "Ship the smallest useful system",
    detail: "I avoid extra features until the product problem is solved.",
  },
];

const signals = [
  {
    label: "Primary stack",
    value: "React, TypeScript, Node.js, Supabase",
  },
  {
    label: "Product role",
    value: "Product Engineer / UI Engineer",
  },
  {
    label: "Working style",
    value: "Owned delivery, cross-team implementation, systems with room to grow",
  },
];

export default function About() {
  useReveal();

  return (
    <section id="about" className="section reveal px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeader
        label="About"
        title="Product engineering that begins with the problem and ends with a working interface."
        description="I build front-end systems around real workflows, data contracts, and handoff-ready implementation."
      />

      <motion.div
        className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="rounded-[32px] border border-surface bg-surface p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-muted)]">What I build</p>
          <h3 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
            No design exercises. Real product surfaces with engineering discipline.
          </h3>
          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
            I translate business goals into UX, data shape, and frontend architecture so the product has a coherent foundation and a clear path to the next release.
          </p>
          <div className="mt-8 space-y-4">
            {pillars.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-[var(--accent)]" />
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">{item.title}</p>
                  <p className="text-sm leading-6 text-[var(--text-secondary)]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[32px] border border-surface bg-surface p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">How I move work forward</h3>
            <div className="mt-6 space-y-4 text-[var(--text-secondary)]">
              <p>
                I keep the first release lean enough to ship and strong enough to be built on. Every feature must serve the flow of the product.
              </p>
              <ul className="space-y-3 text-sm leading-7">
                <li className="rounded-3xl bg-[var(--surface-soft)] p-4">Design around the product workflow, not a generic layout stack.</li>
                <li className="rounded-3xl bg-[var(--surface-soft)] p-4">Keep API and UI contracts aligned so teams can extend the product without surprises.</li>
                <li className="rounded-3xl bg-[var(--surface-soft)] p-4">Use performance and accessibility checks as part of the build, not as an afterthought.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[32px] border border-surface bg-surface p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">Recruiter signals</h3>
            <div className="mt-6 grid gap-4 text-sm text-[var(--text-secondary)]">
              {signals.map((signal) => (
                <div key={signal.label} className="grid gap-1 rounded-[20px] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                  <span className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">{signal.label}</span>
                  <p className="font-semibold text-[var(--text-primary)]">{signal.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
