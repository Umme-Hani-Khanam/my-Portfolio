import { motion } from "framer-motion";

const heroHighlights = ["React", "Node.js", "Express.js", "Supabase", "PostgreSQL", "REST APIs", "Scalable systems"];
const heroStats = [
  { value: "Production-ready", label: "React and backend systems" },
  { value: "API-first", label: "Node.js, Express, Supabase" },
  { value: "Delivery-grade", label: "Component systems and data flows" },
];

export default function Hero() {
  return (
    <section id="top" className="section reveal relative overflow-hidden py-16 sm:py-20" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(59,130,246,0.16),transparent_16%),radial-gradient(circle_at_88%_14%,rgba(124,58,237,0.18),transparent_18%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.45fr_0.95fr] px-6 lg:px-8">
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-zinc-400">
            Frontend-focused Full Stack Developer
          </div>

          <div className="space-y-6">
            <motion.h1
              id="hero-heading"
              className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Full Stack Developer building production-grade web applications.
            </motion.h1>

            <motion.p
              className="max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              I build polished frontend experiences backed by solid backend architecture, scalable database models, and production deploy workflows.
            </motion.p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {heroHighlights.map((item) => (
              <span key={item} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300">
                {item}
              </span>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/15"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              aria-label="View projects"
            >
              View projects
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1B61_lTwKbuSd4SPQpkjiJdGOOioMx4aG/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400/40 hover:bg-white/10"
              whileHover={{ y: -2 }}
              aria-label="Download resume"
            >
              Resume
            </motion.a>
            <motion.a
              href="https://github.com/Umme-Hani-Khanam"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-400/40 hover:bg-white/10"
              whileHover={{ y: -2 }}
              aria-label="View GitHub"
            >
              GitHub
            </motion.a>
            <motion.a
              href="mailto:khanamummehani100@gmail.com?subject=Hiring Inquiry"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(99,102,241,0.18)] transition hover:shadow-[0_0_50px_rgba(99,102,241,0.24)]"
              whileHover={{ scale: 1.02 }}
              aria-label="Email me"
            >
              Email me
            </motion.a>
          </div>
        </div>

        <motion.div
          className="glass-card overflow-hidden rounded-[32px] border border-white/10 p-6 shadow-glow"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Delivery signals</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-1">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-zinc-950/80 p-4">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Why this feels different</p>
              <p className="mt-4 text-base leading-7 text-zinc-300">
                I build apps where frontend polish and backend reliability coexist: clean interfaces, strong contracts, and systems that scale.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
