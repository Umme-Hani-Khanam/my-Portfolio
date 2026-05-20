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
    detail: "APIs and UI need to share assumptions so product work stays predictable.",
  },
  {
    title: "Ship useful systems",
    detail: "I build the smallest valuable experience and make it extendable for the next phase.",
  },
];

const signals = [
  {
    label: "Primary stack",
    value: "React, TypeScript, Node.js, Supabase",
  },
  {
    label: "Product role",
    value: "Frontend-focused Full Stack Developer",
  },
  {
    label: "Working style",
    value: "Owned delivery, cross-team execution, systems with room to grow",
  },
];

export default function About() {
  useReveal();

  return (
    <section id="about" className="section reveal px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeader
        label="About"
        title="Product-minded engineer focused on reliable delivery and scalable front-end systems."
        description="I bridge UI, APIs, and data to ship production-grade features that teams can maintain and iterate on."
      />

      <motion.div
        className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">What I build</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            I ship features that solve user problems and keep engineering predictable.
          </h3>
          <p className="mt-5 text-base leading-7 text-zinc-300">
            I translate business goals into UX, data contracts, and reusable frontend patterns so releases are dependable and future work is easier to own.
          </p>
          <div className="mt-8 space-y-4">
            {pillars.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-violet-500" />
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-sm leading-6 text-zinc-300">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow">
            <h3 className="text-xl font-semibold text-white">How I move work forward</h3>
            <div className="mt-6 space-y-4 text-zinc-300">
              <p>
                I keep the first release lean enough to ship and strong enough to be built on. Every feature must serve the flow of the product.
              </p>
              <ul className="space-y-3 text-sm leading-7">
                <li className="rounded-3xl bg-white/5 p-4">Design around the product workflow, not a generic layout stack.</li>
                <li className="rounded-3xl bg-white/5 p-4">Keep API and UI contracts aligned so teams can extend the product without surprises.</li>
                <li className="rounded-3xl bg-white/5 p-4">Use performance and accessibility checks as part of the build, not as an afterthought.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow">
            <h3 className="text-xl font-semibold text-white">Recruiter signals</h3>
            <div className="mt-6 grid gap-4 text-sm text-zinc-300">
              {signals.map((signal) => (
                <div key={signal.label} className="grid gap-1 rounded-[20px] border border-white/10 bg-white/5 p-4">
                  <span className="text-xs uppercase tracking-[0.24em] text-zinc-400">{signal.label}</span>
                  <p className="font-semibold text-white">{signal.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
