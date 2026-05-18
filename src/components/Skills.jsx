import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import useReveal from "../hooks/useReveal";

const capabilities = [
  {
    title: "Dashboard systems",
    description: "Operational interfaces that keep budgets, approvals, and progress visible in one place.",
    details: ["Progress panels", "budget reconciliation", "workflow state sync"],
  },
  {
    title: "Frontend architecture",
    description: "Component contracts and layout systems that make product screens easier to extend.",
    details: ["layout primitives", "design token systems", "framework-friendly patterns"],
  },
  {
    title: "API integration",
    description: "Interfaces designed around reliable data contracts, retries, and clear error handling.",
    details: ["request orchestration", "typed payload models", "network resilience"],
  },
  {
    title: "Authentication systems",
    description: "Session flows, authorization guards, and user state built for product guardrails.",
    details: ["auth guards", "secure sessions", "access surface design"],
  },
  {
    title: "State management",
    description: "Client state that stays predictable across pages, widgets, and active workflows.",
    details: ["shared state layers", "selector patterns", "lazy hydration"],
  },
  {
    title: "Accessibility",
    description: "Keyboard-first interactions and semantic structure that work for people and teams.",
    details: ["screen reader paths", "focus order", "contrast and motion checks"],
  },
  {
    title: "Reusable component architecture",
    description: "Shared UI pieces that reduce repetition and keep interfaces aligned.",
    details: ["variant-driven components", "clear props", "layout reuse"],
  },
  {
    title: "Performance optimization",
    description: "Load budgets, bundle structure, and runtime behavior that keep product experiences fast.",
    details: ["code splitting", "render budgets", "observability hooks"],
  },
];

export default function Skills() {
  useReveal();

  return (
    <section id="skills" className="section reveal px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeader
        label="Capabilities"
        title="Engineering work built to ship, scale, and stay useful."
        description="These are the capability areas I apply when building product interfaces, dashboard systems, and foundational technology for teams."
      />

      <motion.div
        className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.9fr]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <article className="group rounded-[32px] border border-surface bg-surface p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--surface-soft)]">
          <div className="space-y-5">
            <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Dashboard systems
            </div>
            <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Operational interfaces for product teams.</h3>
            <p className="text-base leading-7 text-[var(--text-secondary)]">
              I build dashboard systems that keep key project decisions visible, reduce unnecessary context switching, and make complex workflows feel manageable.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-[var(--surface-strong)] p-4 text-sm text-[var(--text-secondary)]">Summary cards that keep work moving.</div>
              <div className="rounded-3xl bg-[var(--surface-strong)] p-4 text-sm text-[var(--text-secondary)]">State sync across list, detail, and filter views.</div>
            </div>
          </div>
        </article>

        <div className="grid gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {capabilities.slice(1).map((capability, index) => (
              <article
                key={capability.title}
                className={`group rounded-[28px] border border-surface bg-surface p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--surface-soft)] ${index % 2 === 0 ? "sm:translate-y-2" : ""}`}
              >
                <div className="space-y-4">
                  <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                    {capability.title}
                  </div>
                  <p className="text-sm leading-7 text-[var(--text-secondary)]">{capability.description}</p>
                </div>
                <div className="mt-6 space-y-3">
                  {capability.details.map((detail) => (
                    <p key={detail} className="rounded-3xl bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--text-secondary)]">
                      {detail}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-[28px] border border-surface bg-[var(--surface-soft)] p-6 text-sm leading-7 text-[var(--text-secondary)] shadow-soft">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">What makes this different</p>
            <p className="mt-4">
              I treat architecture, API integration, and component reuse as a single product system rather than disconnected implementation details.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
