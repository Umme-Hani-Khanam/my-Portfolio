import { useState } from "react";
import { motion } from "framer-motion";

const heroHighlights = ["React", "Node.js", "Express.js", "Supabase", "PostgreSQL", "REST APIs", "Scalable systems"];
const heroStats = [
  { value: "Production-ready", label: "React and backend systems" },
  { value: "API-first", label: "Node.js, Express, Supabase" },
  { value: "Delivery-grade", label: "Component systems and data flows" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

function MagneticLink({ children, href, ...props }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handlePointerMove = useCallback((event) => {
    const trigger = event.currentTarget;
    const rect = trigger.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    setOffset({ x, y });
  }, []);

  const handlePointerLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <motion.a
      href={href}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  return (
    <section id="top" className="section reveal relative overflow-hidden py-16 sm:py-20" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_18%,rgba(59,130,246,0.14),transparent_16%),radial-gradient(circle_at_88%_14%,rgba(124,58,237,0.14),transparent_18%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_15%,rgba(124,58,237,0.12),transparent_20%),radial-gradient(circle_at_80%_24%,rgba(14,165,233,0.12),transparent_18%)]" />
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <motion.div
          className="absolute left-10 top-8 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
          animate={{ x: [0, 16, 0], y: [0, -12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-8 top-24 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl"
          animate={{ x: [0, -18, 0], y: [0, 10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.45fr_0.95fr] px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        animate="show"
      >
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-zinc-400">
            Frontend-focused Full Stack Developer
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              id="hero-heading"
              className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
              variants={itemVariants}
            >
              Full Stack Developer building production-grade web applications.
            </motion.h1>

            <motion.p className="max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg" variants={itemVariants}>
              I build polished frontend experiences backed by solid backend architecture, scalable database models, and production deploy workflows.
            </motion.p>
          </div>

          <motion.div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" variants={itemVariants}>
            {heroHighlights.map((item) => (
              <motion.span
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 160, damping: 22 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4" variants={itemVariants}>
            <MagneticLink
              href="#projects"
              aria-label="View projects"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400/40 hover:bg-white/15"
            >
              View projects
            </MagneticLink>
            <MagneticLink
              href="https://drive.google.com/file/d/1B61_lTwKbuSd4SPQpkjiJdGOOioMx4aG/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              aria-label="Download resume"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400/40 hover:bg-white/10"
            >
              Resume
            </MagneticLink>
            <MagneticLink
              href="https://github.com/Umme-Hani-Khanam"
              target="_blank"
              rel="noreferrer"
              aria-label="View GitHub"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-400/40 hover:bg-white/10"
            >
              GitHub
            </MagneticLink>
            <MagneticLink
              href="mailto:khanamummehani100@gmail.com?subject=Hiring Inquiry"
              aria-label="Email me"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-violet-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(99,102,241,0.18)] transition hover:shadow-[0_0_50px_rgba(99,102,241,0.24)]"
            >
              Email me
            </MagneticLink>
          </motion.div>
        </div>

        <motion.div
          className="glass-card overflow-hidden rounded-4xl border border-white/10 p-6 shadow-glow"
          variants={itemVariants}
          initial="hidden"
          animate="show"
          whileHover={{ rotateX: 4, rotateY: -6, y: -4 }}
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
          style={{ transformStyle: "preserve-3d", perspective: 1500 }}
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
      </motion.div>
    </section>
  );
}
