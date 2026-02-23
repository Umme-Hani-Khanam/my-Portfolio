export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "rgba(15,17,21,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "var(--accent)",
            fontWeight: 600,
            fontSize: "1.1rem",
          }}
        >
          UH
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
          }}
        >
          {["About", "Skills", "Experience", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                style={{
                  textDecoration: "none",
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  fontWeight:"bold",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--text-secondary)")
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}