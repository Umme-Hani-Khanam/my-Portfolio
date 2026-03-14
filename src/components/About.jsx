import useReveal from "../hooks/useReveal";

export default function About() {
  useReveal();

  return (
    <section id="About" className="reveal">
      <h2>About</h2>

      <div
        style={{
          maxWidth: "820px",
          margin: "0 auto",
          fontSize: "1.15rem",
          lineHeight: "1.9",
        }}
      >
        <p style={{ marginBottom: "22px" }}>
          I’m a{" "}
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>
            Full Stack Developer
          </span>{" "}
          who builds scalable web applications using{" "}
          <span style={{ color: "#fff", fontWeight: 500 }}>
            React, Node.js, and REST APIs
          </span>
          . I enjoy transforming complex ideas into structured,
          maintainable digital products.
        </p>

        <p style={{ marginBottom: "22px", color: "var(--text-secondary)" }}>
          My work focuses on building practical systems such as AI-integrated
          productivity tools and management platforms, combining clean backend
          architecture with intuitive user interfaces.
        </p>

        <p style={{ color: "var(--text-secondary)" }}>
          I prioritize{" "}
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>
            performance, scalability, and clear system design
          </span>{" "}
          while ensuring that the user experience remains simple and efficient.
        </p>
      </div>
    </section>
  );
}
