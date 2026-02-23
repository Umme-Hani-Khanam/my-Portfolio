export default function Contact() {
  return (
    <section
      id="Contact"
      style={{
        paddingBottom: "0",
      }}
    >
      <h2>Contact</h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          marginBottom: "80px",
        }}
      >
        <a
          href="mailto:khanamummehani100@gmail.com?subject=Portfolio Inquiry - Umme Hani Khanam&body=Hello Umme Hani,"
          target="_blank"
          className="btn-primary"
        >
          Email
        </a>

        <a
          href="https://github.com/Umme-Hani-Khanam"
          target="_blank"
          className="btn-outline"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          className="btn-outline"
        >
          LinkedIn
        </a>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "30px 0",
          textAlign: "center",
          color: "var(--text-muted)",
          fontSize: "0.9rem",
        }}
      >
        Designed & Built by Umme Hani Khanam · 2026
      </div>
    </section>
  );
}