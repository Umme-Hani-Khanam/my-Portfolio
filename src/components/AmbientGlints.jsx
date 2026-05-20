import { useEffect } from "react";

export default function AmbientGlints() {
  useEffect(() => {
    const el = document.getElementById("ambient-glints");
    if (!el) return;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    }

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      id="ambient-glints"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 opacity-70"
      style={{
        backgroundImage:
          "radial-gradient(circle at var(--mx,20%) var(--my,18%), rgba(59, 130, 246, 0.18) 0px, transparent 160px), radial-gradient(circle at calc(var(--mx,50%) + 220px) calc(var(--my,50%) - 120px), rgba(124, 58, 237, 0.14) 0px, transparent 200px), radial-gradient(circle at 85% 82%, rgba(96, 165, 250, 0.12) 0px, transparent 240px)",
        transition: "background-position 0.12s linear, opacity 0.6s ease",
      }}
    />
  );
}
