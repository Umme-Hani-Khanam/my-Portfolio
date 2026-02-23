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

      {/* ================= MINI RESTAURANT ================= */}
      <div style={cardStyle}>
        <h3
          style={{
            fontSize: "1.6rem",
            color: "var(--accent)",
            marginBottom: "20px",
          }}
        >
          Mini Restaurant Management
        </h3>

        <p style={{ marginBottom: "12px" }}>
          <span style={{ fontWeight: 600, color: "#fff" }}>Problem:</span>{" "}
          Users need a simple way to browse restaurant listings, while admins
          require controlled access.
        </p>

        <p style={{ marginBottom: "25px" }}>
          <span style={{ fontWeight: 600, color: "var(--accent)" }}>
            Solution:
          </span>{" "}
          Built a role-based React application with LocalStorage persistence
          for restaurant management.
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
          <li>User browsing interface</li>
          <li>Admin add restaurant functionality</li>
          <li>Role-based access control</li>
          <li>LocalStorage persistence</li>
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
          <li>Designed role-based architecture</li>
          <li>Implemented LocalStorage persistence</li>
          <li>Built React Router navigation</li>
          <li>Created reusable component structure</li>
        </ul>

        <p
          style={{
            color: "var(--accent)",
            marginBottom: "25px",
            fontWeight: 500,
          }}
        >
          React · React Router · LocalStorage
        </p>

        <div style={{ display: "flex", gap: "15px" }}>
          <a
            href="https://minirestaurantmanagement.netlify.app/"
            target="_blank"
            className="btn-primary"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/Umme-Hani-Khanam/Mini_Restaurant_Management"
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