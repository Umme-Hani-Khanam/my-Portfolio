import React, { useEffect, useRef } from "react";

export default function CaseStudyModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    const prev = document.activeElement;
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      prev?.focus();
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/40 p-6" role="dialog" aria-modal="true" aria-labelledby="case-study-title">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg">
        <header className="flex items-start justify-between gap-4">
          <div>
            <h3 id="case-study-title" className="text-xl font-semibold text-slate-900">{project.name} — Case Study</h3>
            <p className="mt-2 text-sm text-slate-600">{project.label} • {project.platform}</p>
          </div>
          <button ref={closeRef} onClick={onClose} aria-label="Close case study" className="rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100">Close</button>
        </header>

        <main className="mt-4 space-y-4 text-sm text-slate-700">
          <p className="font-semibold">Overview</p>
          <p>{project.spotlight}</p>

          <div>
            <p className="font-semibold">Problem</p>
            <p>{project.summary}</p>
          </div>

          <div>
            <p className="font-semibold">Technical highlights</p>
            <ul className="mt-2 list-disc pl-5">
              {project.stack && project.stack.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>

          <div>
            <p className="font-semibold">Architecture & delivery</p>
            <ul className="mt-2 list-disc pl-5">
              {(project.responsibilities || []).map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold">Features & considerations</p>
            <ul className="mt-2 list-disc pl-5">
              {(project.features || []).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold">Links</p>
            <div className="mt-2 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">Live demo</a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-900">Source</a>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
