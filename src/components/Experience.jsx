import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";

export default function Experience() {
  useReveal();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCount(i++);
      if (i > 70) clearInterval(interval);
    }, 25);
  }, []);

  return (
    <section className="reveal" id='Experience'>
      <h2>Professional Journey</h2>

      <div style={{ borderLeft: "3px solid var(--accent)", paddingLeft: "30px" }}>
        <div style={{ marginBottom: "50px" }}>
          <h3>AI Content Creation Intern</h3>
          <p style={{ color: "var(--text-muted)" }}>
            Jan 2026 – Present · Hadi & Taimur (Remote)
          </p>

          <ul style={{ marginTop: "15px" }}>
            <li>Developed AI-assisted campaign scripts for IPO Genie</li>
            <li>Collaborated with cross-functional teams</li>
            <li>Optimized content using trend analysis</li>
          </ul>
        </div>

        <div>
          <h3>Graphic Designer</h3>
          <p style={{ color: "var(--text-muted)" }}>
            Jan 2023 – Jan 2026 · Girls Islamic Organization (Remote)
          </p>

          <ul style={{ marginTop: "15px" }}>
            <li>Designed promotional assets</li>
            <li>
              Increased event participation by{" "}
              <span
                style={{
                  color: "var(--accent)",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                }}
              >
                {count}+
              </span>
            </li>
            <li>Maintained brand consistency</li>
          </ul>
        </div>
      </div>
    </section>
  );
}