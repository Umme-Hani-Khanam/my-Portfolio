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
    <section id="contact" className="section reveal px-6 py-20 sm:py-24">
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="inline-flex rounded-full border border-[#ecd7ef] bg-[#f6ebf5] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#5f3e72]">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#2d1d3a] sm:text-4xl">
            Let's build something that feels unmistakably high quality.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-[#655175]">
            If you're hiring, collaborating, or exploring a product idea, I'd love to hear what you're building and where thoughtful engineering can help.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[32px] border border-[#e8d7ee] bg-[#faf5fb] p-8 shadow-soft">
            <span className="inline-flex rounded-full bg-[#f5e6f4] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#5f3e72]">
              Direct Contact
            </span>
            <h3 className="mt-6 text-2xl font-semibold text-[#2d1d3a]">Open to meaningful opportunities and ambitious builds.</h3>
            <p className="mt-4 text-base leading-7 text-[#655175]">
              The fastest way to reach me is by email. You can also explore my code and professional presence through the links below.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                href="mailto:khanamummehani100@gmail.com?subject=Portfolio Inquiry - Umme Hani Khanam&body=Hello Umme Hani,"
                className="inline-flex items-center justify-center rounded-full bg-[#e7c7dd] px-5 py-3 text-sm font-semibold text-[#4b2f57] transition duration-300 hover:bg-[#f3d7e5]"
              >
                Email Me
              </a>
              <a
                href="https://github.com/Umme-Hani-Khanam"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#ecd7ef] bg-white px-5 py-3 text-sm font-semibold text-[#4b2f57] transition duration-300 hover:bg-[#f7f1f7]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/umme-hani-khanam"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#ecd7ef] bg-white px-5 py-3 text-sm font-semibold text-[#4b2f57] transition duration-300 hover:bg-[#f7f1f7]"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-8 grid gap-4 rounded-[28px] border border-[#e8d7ee] bg-[#f7eff7] p-6 text-sm text-[#5f4b74]">
              <div>
                <span className="block text-xs uppercase tracking-[0.24em] text-[#8d7a9c]">Email</span>
                <strong className="mt-2 block text-[#2d1d3a]">khanamummehani100@gmail.com</strong>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.24em] text-[#8d7a9c]">Focus</span>
                <strong className="mt-2 block text-[#2d1d3a]">Full stack engineering / AI products / polished UX</strong>
              </div>
            </div>
          </article>

          <form className="rounded-[32px] border border-[#e8d7ee] bg-[#faf5fb] p-8 shadow-soft" onSubmit={handleMailSubmit}>
            <div className="grid gap-6">
              <label className="grid gap-2 text-sm text-[#5f4b74]">
                <span className="font-semibold text-[#2d1d3a]">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="h-12 rounded-3xl border border-[#e4d5e8] bg-[#f8f1f9] px-4 text-[#2d1d3a] outline-none transition focus:border-[#d9b2dc] focus:ring-2 focus:ring-[#eac7dd]/50"
                />
              </label>

              <label className="grid gap-2 text-sm text-[#5f4b74]">
                <span className="font-semibold text-[#2d1d3a]">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="h-12 rounded-3xl border border-[#e4d5e8] bg-[#f8f1f9] px-4 text-[#2d1d3a] outline-none transition focus:border-[#d9b2dc] focus:ring-2 focus:ring-[#eac7dd]/50"
                />
              </label>

              <label className="grid gap-2 text-sm text-[#5f4b74]">
                <span className="font-semibold text-[#2d1d3a]">Project Details</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about the role, product, or collaboration."
                  required
                  className="min-h-[160px] rounded-3xl border border-[#e4d5e8] bg-[#f8f1f9] px-4 py-4 text-[#2d1d3a] outline-none transition focus:border-[#d9b2dc] focus:ring-2 focus:ring-[#eac7dd]/50"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#e7c7dd] px-6 py-3 text-sm font-semibold text-[#4b2f57] transition duration-300 hover:bg-[#f3d7e5]"
              >
                Start the Conversation
              </button>
            </div>
          </form>
        </div>

        <footer className="text-sm text-[#7b6690]">Designed and built by Umme Hani Khanam / 2026</footer>
      </div>
    </section>
  );
}
