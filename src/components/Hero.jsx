import { useEffect, useState } from "react";

export default function Hero() {
  const text = "Engineering Functional Systems";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i++));
      if (i > text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(31,191,159,0.25), transparent 60%)",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(80px)",
          zIndex: -1,
        }}
      />

      <p
        style={{
          color: "var(--accent)",
          letterSpacing: "2px",
          fontSize: "0.9rem",
          marginBottom: "20px",
          textTransform: "uppercase",
        }}
      >
        Available for Opportunities
      </p>

      <h1 style={{ lineHeight: "1.1" }}>
        <span style={{ fontWeight: 300 }}>Umme Hani</span>
        <br />
        <span
          style={{
            background: "var(--gradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 25px rgba(31,191,159,0.35)",
          }}
        >
          Khanam
        </span>
      </h1>

      <h2
        style={{
          marginTop: "25px",
          color: "var(--accent)",
          fontWeight: 500,
          minHeight: "40px",
        }}
      >
        {display}
      </h2>

      <p
        style={{
          marginTop: "20px",
          maxWidth: "600px",
          fontSize: "1.1rem",
        }}
      >
        I build <span style={{ color: "var(--accent)" }}>scalable systems</span>{" "}
        and craft clean interactive user experiences.
      </p>

      <div style={{ marginTop: "35px", display: "flex", gap: "20px" }}>
        <a href="#projects" className="btn-primary">
          View Projects
        </a>
        <a
          href="https://drive.google.com/file/d/1B61_lTwKbuSd4SPQpkjiJdGOOioMx4aG/view?usp=sharing"
          target="_blank"
          className="btn-outline"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}