import useReveal from "../hooks/useReveal";

export default function About() {
  useReveal();

  return (
    <section id="About" className="reveal">
      <h2>About</h2>

      <div
        style={{
          maxWidth: "820px",
          fontSize: "1.15rem",
          lineHeight: "1.9",
        }}
      >
        <p style={{ marginBottom: "22px" }}>
          I’m a{" "}
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>
            Full Stack Developer
          </span>{" "}
          focused on designing{" "}
          <span style={{ color: "#fff", fontWeight: 500 }}>
            scalable backend architectures
          </span>{" "}
          and clean, intentional interfaces.
        </p>

        <p style={{ marginBottom: "22px", color: "var(--text-secondary)" }}>
          I translate complex real-world problems into structured,
          production-ready digital systems with thoughtful architecture.
        </p>

        <p style={{ color: "var(--text-secondary)" }}>
          My approach blends engineering clarity, performance optimization,
          and user-centered design to deliver systems that are both{" "}
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>
            reliable
          </span>{" "}
          and{" "}
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>
            refined.
          </span>
        </p>
      </div>
    </section>
  );
}