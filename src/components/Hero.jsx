import { motion } from "framer-motion";

const navCopy = "Product Engineer / UI Engineer for real product teams";
const heroStats = [
  { value: "3 launches", label: "React product releases" },
  { value: "API-first", label: "Backend flows with strong contracts" },
  { value: "Team-ready", label: "Component systems built for handoff" },
];
const heroFocus = [
  "Operational dashboards, not landing page polish",
  "Interfaces shaped around real workflows",
  "Reusable UI for product teams and future work",
];

export default function Hero() {
  return (
    <section id="top" className="section reveal relative overflow-hidden rounded-[32px] border border-surface bg-surface px-6 py-12 sm:px-8 sm:py-14 shadow-soft">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(circle_at_top,_rgba(233,166,216,0.18),_transparent_30%)]" />
      <motion.div
        className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1.4fr_0.95fr]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            {navCopy}
          </span>

          <div className="space-y-5">
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
              I ship product interfaces and dashboards that teams can actually own.
            </h1>
            <p className="max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              I work on React UI, API flow, and system design together so the interface feels intentional and the product stays maintainable.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            >
              Review case studies
            </a>
            <a
              href="https://drive.google.com/file/d/1B61_lTwKbuSd4SPQpkjiJdGOOioMx4aG/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-surface px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
            >
              Download CV
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {heroFocus.map((item) => (
              <span
                key={item}
                className="rounded-3xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text-secondary)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-soft)] p-7 shadow-soft"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-muted)]">Delivery signals</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-[var(--surface)] p-4 sm:p-5">
                    <p className="text-2xl font-semibold text-[var(--text-primary)]">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="text-sm uppercase tracking-[0.32em] text-[var(--text-muted)]">Why this feels different</p>
              <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">
                I’m building with the next iteration in mind — screens that are actually useful, contracts that can be extended, and interactions that feel purposeful.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
