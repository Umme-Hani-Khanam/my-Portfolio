import useReveal from "../hooks/useReveal";

export default function Projects() {
  useReveal();

  const container = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "60px 20px",
  };

  const cardStyle = {
    padding: "35px",
    marginBottom: "40px",
    border: "1px solid rgba(31,191,159,0.15)",
    borderRadius: "16px",
    background: "rgba(31,35,43,0.75)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
  };

  const divider = {
    height: "1px",
    background: "rgba(255,255,255,0.06)",
    margin: "25px 0",
  };

  return (
    <section id="Projects" className="reveal" style={container}>
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
        Featured Work
      </h2>

      {/* ================= TODO COMPANION ================= */}
      <div style={cardStyle}>
        <h3
          style={{
            fontSize: "1.6rem",
            color: "var(--accent)",
            marginBottom: "20px",
          }}
        >
          Todo Companion
        </h3>

        <p style={{ marginBottom: "12px", lineHeight: "1.8" }}>
          <span style={{ fontWeight: 600, color: "#fff" }}>Problem:</span>{" "}
          Users struggle with structured task tracking and maintaining
          productivity consistency.
        </p>

        <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          <span style={{ fontWeight: 600, color: "var(--accent)" }}>
            Solution:
          </span>{" "}
          Built a full-stack AI-powered task manager with authentication and
          cloud database integration.
        </p>

        <div style={divider} />

        <h4 style={{ marginBottom: "12px", color: "var(--accent)" }}>
          Core Features
        </h4>

        <ul style={{ marginBottom: "20px", lineHeight: "1.8", paddingLeft: "18px" }}>
          <li>Secure authentication</li>
          <li>Supabase PostgreSQL database</li>
          <li>Real-time CRUD operations</li>
          <li>Task status tracking</li>
        </ul>

        <h4 style={{ marginBottom: "12px", color: "var(--accent)" }}>
          My Responsibilities
        </h4>

        <ul style={{ marginBottom: "20px", lineHeight: "1.8", paddingLeft: "18px" }}>
          <li>Designed full-stack architecture</li>
          <li>Integrated Supabase Auth and database</li>
          <li>Built REST-based interactions</li>
          <li>Managed application state flow</li>
        </ul>

        <p style={{ color: "var(--accent)", marginBottom: "20px" }}>
          React · Supabase · REST APIs
        </p>

        <a
          href="https://todo-companion.vly.site/"
          target="_blank"
          className="btn-primary"
        >
          Live Demo
        </a>
      </div>

      {/* ================= Home Renovation Tracker ================= */}
      <div style={cardStyle}>
        <h3
          style={{
            fontSize: "1.6rem",
            color: "var(--accent)",
            marginBottom: "20px",
          }}
        >
          Home Renovation Tracker
        </h3>

        <p style={{ marginBottom: "12px", lineHeight: "1.8" }}>
          <span style={{ fontWeight: 600, color: "#fff" }}>Problem:</span>{" "}
          Renovation projects involve managing tasks, expenses, materials,
          shopping, and permits which often becomes disorganized.
        </p>

        <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          <span style={{ fontWeight: 600, color: "var(--accent)" }}>
            Solution:
          </span>{" "}
          Built a full-stack renovation management platform with task,
          expense, inventory, shopping, and permit tracking along with Gemini
          AI for inspiration and material estimation.
        </p>

        <div style={divider} />

        <h4 style={{ marginBottom: "12px", color: "var(--accent)" }}>
          Core Features
        </h4>

        <ul style={{ marginBottom: "20px", lineHeight: "1.8", paddingLeft: "18px" }}>
          <li>Task and renovation progress tracking</li>
          <li>Expense and budgeting management</li>
          <li>Inventory and shopping list system</li>
          <li>AI-powered inspiration and material estimation</li>
          <li>Permit tracking</li>
          <li>Project dashboard overview</li>
        </ul>

        <p style={{ color: "var(--accent)", marginBottom: "20px" }}>
          React · Node.js · Express.js · REST APIs · Gemini AI · MySQL/Supabase
        </p>

        <div style={{ display: "flex", gap: "15px" }}>
          <a
            href="https://home-renovation-tracker-ten.vercel.app/"
            target="_blank"
            className="btn-primary"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/Umme-Hani-Khanam/home-renovation-frontend"
            target="_blank"
            className="btn-outline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
