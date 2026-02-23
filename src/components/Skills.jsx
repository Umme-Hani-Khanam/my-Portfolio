import useReveal from "../hooks/useReveal";

export default function Skills() {
  useReveal();

  const categories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express"],
    },
    {
      title: "Database",
      skills: ["Supabase", "PostgreSQL", "LocalStorage"],
    },
    {
      title: "Tools & Languages",
      skills: ["C", "C++", "Java", "Python", "Git", "GitHub"],
    },
  ];

  return (
    <section id="Skills" className="reveal">
      <h2>Technical Skills</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "30px",
        }}
      >
        {categories.map((cat) => (
         <div
  key={cat.title}
  className="card"
  style={{
    padding: "32px",
    border: "1px solid rgba(31,191,159,0.15)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
  }}
>
            <h3
              style={{
                marginBottom: "20px",
                color: "var(--accent)",
                fontWeight: 600,
              }}
            >
              {cat.title}
            </h3>

            {cat.skills.map((skill) => (
              <p
  key={skill}
  style={{
    marginBottom: "10px",
    color: "var(--text-secondary)",
    fontSize: "0.95rem",
    letterSpacing: "0.3px",
  }}
>
  • {skill}
</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}