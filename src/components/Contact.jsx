import useReveal from "../hooks/useReveal";

function handleMailSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "a visitor"}`);
  const body = encodeURIComponent(
    `Hello Umme Hani,\n\nName: ${name}\nEmail: ${email}\n\n${message}`
  );

  window.location.href = `mailto:khanamummehani100@gmail.com?subject=${subject}&body=${body}`;
}

export default function Contact() {
  useReveal();

  return (
    <section id="contact" className="section reveal px-4 py-20 sm:px-6 sm:py-24">
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-violet-300">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Let’s build a high-quality experience that speaks clearly to product and engineering.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-zinc-400">
            If you're hiring, collaborating, or exploring a product idea, I’d love to learn where thoughtful engineering can help move it forward.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow">
            <span className="inline-flex rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">
              Direct Contact
            </span>
            <h3 className="mt-6 text-2xl font-semibold text-white">Open to meaningful opportunities and ambitious builds.</h3>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              The fastest way to reach me is email. I’m also happy to connect through LinkedIn or share a resume for your review.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                href="mailto:khanamummehani100@gmail.com?subject=Portfolio Inquiry - Umme Hani Khanam&body=Hello Umme Hani,"
                aria-label="Email Umme"
                className="inline-flex w-full items-center justify-center rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              >
                Email Me
              </a>
              <a
                href="https://drive.google.com/file/d/1B61_lTwKbuSd4SPQpkjiJdGOOioMx4aG/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                aria-label="Download resume PDF"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/umme-hani-khanam"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit LinkedIn profile"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-8 grid gap-4 rounded-[28px] border border-white/10 bg-zinc-950/75 p-6 text-sm text-zinc-300">
              <div>
                <span className="block text-xs uppercase tracking-[0.24em] text-zinc-500">Email</span>
                <strong className="mt-2 block text-white">khanamummehani100@gmail.com</strong>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.24em] text-zinc-500">Availability</span>
                <strong className="mt-2 block text-white">Open for hire — available for full-time or contract</strong>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.24em] text-zinc-500">Resume</span>
                <a href="https://drive.google.com/file/d/1B61_lTwKbuSd4SPQpkjiJdGOOioMx4aG/view?usp=sharing" target="_blank" rel="noreferrer" className="mt-2 block font-semibold text-white">
                  Download PDF
                </a>
              </div>
            </div>
          </article>

          <form className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow" onSubmit={handleMailSubmit}>
            <div className="grid gap-6">
              <label className="grid gap-2 text-sm text-zinc-300">
                <span className="font-semibold text-white">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="h-12 rounded-3xl border border-white/10 bg-zinc-950/80 px-4 text-white outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
                />
              </label>

              <label className="grid gap-2 text-sm text-zinc-300">
                <span className="font-semibold text-white">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="h-12 rounded-3xl border border-white/10 bg-zinc-950/80 px-4 text-white outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
                />
              </label>

              <label className="grid gap-2 text-sm text-zinc-300">
                <span className="font-semibold text-white">Project Details</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about the role, product, or collaboration."
                  required
                  className="min-h-[160px] rounded-3xl border border-white/10 bg-zinc-950/80 px-4 py-4 text-white outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              >
                Start the Conversation
              </button>
            </div>
          </form>
        </div>

        <footer className="text-sm text-zinc-500">Designed and built by Umme Hani Khanam / 2026</footer>
      </div>
    </section>
  );
}
