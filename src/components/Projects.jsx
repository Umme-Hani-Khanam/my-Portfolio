import useReveal from "../hooks/useReveal";

export default function Projects() {
  useReveal();

  const cardStyle = {
    padding: "50px",
    marginBottom: "60px",
    border: "1px solid rgba(31,191,159,0.15)",
    borderRadius: "18px",
    background: "rgba(31,35,43,0.75)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
  };

  const divider = {
    height: "1px",
    background: "rgba(255,255,255,0.06)",
    margin: "30px 0",
  };
<style>
  {
    `li{
position: "relative",
  paddingLeft: "6px",
    }
`  }
</style>
  return (
    <section id="Projects" className="reveal">
      <h2>Featured Work</h2>

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

       <p style={{
  marginBottom: "14px",
  fontSize: "1.05rem",
  lineHeight: "1.85",
}}>
  <span style={{
    fontWeight: 600,
    color: "#ffffff",
    letterSpacing: "0.3px"
  }}>
    Problem:
  </span>{" "}
  Users struggle with structured task tracking and productivity consistency.
</p>

<p style={{
  marginBottom: "28px",
  fontSize: "1.05rem",
  lineHeight: "1.85",
}}>
  <span style={{
    fontWeight: 600,
    color: "var(--accent)",
    letterSpacing: "0.3px"
  }}>
    Solution:
  </span>{" "}
  Built a full-stack AI-powered task manager with authentication and cloud database integration.
</p>
        <div style={divider} />

        <h4
          style={{
            marginBottom: "15px",
            color: "var(--accent)",
            fontWeight: 600,
          }}
        >
          Core Features
        </h4>

       <ul style={{
  marginBottom: "30px",
  paddingLeft: "18px",
}}>
          <li>Secure authentication</li>
          <li>Supabase PostgreSQL database</li>
          <li>Real-time CRUD operations</li>
          <li>Task status tracking</li>
        </ul>

        <h4
          style={{
            marginBottom: "15px",
            color: "var(--accent)",
            fontWeight: 600,
          }}
        >
          My Responsibilities
        </h4>

        <ul style={{ marginBottom: "25px", lineHeight: "1.9" }}>
          <li>Designed full-stack architecture</li>
          <li>Integrated Supabase Auth + DB</li>
          <li>Built REST interactions</li>
          <li>Managed application state flow</li>
        </ul>

        <p
          style={{
            color: "var(--accent)",
            marginBottom: "25px",
            fontWeight: 500,
          }}
        >
          React.js · Supabase · REST APIs
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

  <p style={{ marginBottom: "12px" }}>
    <span style={{ fontWeight: 600, color: "#fff" }}>Problem:</span>{" "}
    Home renovation projects involve managing tasks, expenses, materials,
    shopping, and permits. Without a centralized system, projects become
    disorganized, budgets are difficult to control, and important activities
    may be missed.
  </p>

  <p style={{ marginBottom: "25px" }}>
    <span style={{ fontWeight: 600, color: "var(--accent)" }}>
      Solution:
    </span>{" "}
    Developed a full-stack Home Renovation Tracker that centralizes project
    management with task, expense, inventory, shopping, and permit tracking.
    Integrated Gemini AI to generate renovation inspiration and estimate
    required materials, supported by a dashboard for monitoring project
    progress and resources.
  </p>

  <div style={divider} />

  <h4
    style={{
      marginBottom: "15px",
      color: "var(--accent)",
      fontWeight: 600,
    }}
  >
    Core Features
  </h4>

  <ul style={{ marginBottom: "25px", lineHeight: "1.9" }}>
    <li>Task and renovation progress tracking</li>
    <li>Expense management and budgeting</li>
    <li>Inventory and shopping list management</li>
    <li>AI-powered renovation inspiration</li>
    <li>AI-based material estimation</li>
    <li>Permit tracking for approvals</li>
    <li>Project dashboard overview</li>
  </ul>

  <h4
    style={{
      marginBottom: "15px",
      color: "var(--accent)",
      fontWeight: 600,
    }}
  >
    My Responsibilities
  </h4>

  <ul style={{ marginBottom: "25px", lineHeight: "1.9" }}>
    <li>Designed full-stack architecture and REST APIs</li>
    <li>Integrated Gemini AI for inspiration and material estimation</li>
    <li>Built responsive React UI and dashboard</li>
    <li>Implemented backend logic for project, task, and expense management</li>
  </ul>

  <p
    style={{
      color: "var(--accent)",
      marginBottom: "25px",
      fontWeight: 500,
    }}
  >
    React · Node.js · Express.js · REST APIs · Gemini AI · MySQL/Supabase
  </p>

  <div style={{ display: "flex", gap: "15px" }}>
    <a
      href="https://homerenovationtracker.netlify.app/"
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