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

  const container = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 20px",
  };

  const timeline = {
    borderLeft: "3px solid var(--accent)",
    paddingLeft: "25px",
  };

  const card = {
    background: "rgba(255,255,255,0.03)",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "30px",
  };

  return (
    <section className="reveal" id="Experience" style={container}>
      <h2 style={{ marginBottom: "40px", textAlign: "center" }}>
        Professional Journey
      </h2>

      <div style={timeline}>
        <div style={card}>
          <h3>AI Content Creation Department Manager Intern</h3>

          <p style={{ color: "var(--text-muted)", marginBottom: "10px" }}>
            Jan 2026 – Feb 2026 · Hadi & Taimur (Remote)
          </p>

          <ul>
            <li>Developed AI-assisted campaign scripts for IPO Genie</li>
            <li>Collaborated with cross-functional teams</li>
            <li>Optimized content using trend analysis</li>
          </ul>
        </div>

        <div style={card}>
          <h3>Graphic Designer</h3>

          <p style={{ color: "var(--text-muted)", marginBottom: "10px" }}>
            Jan 2023 – Jan 2026 · Girls Islamic Organization (Remote)
          </p>

          <ul>
            <li>Designed posters, banners, social media creatives and event assets</li>

            <li>
              Led visual promotion that increased event participation by{" "}
              <span
                style={{
                  color: "var(--accent)",
                  fontWeight: 700,
                }}
              >
                {count}+
              </span>{" "}
              attendees
            </li>

            <li>Maintained brand consistency across campaigns</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
