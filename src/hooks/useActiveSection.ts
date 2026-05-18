import { useEffect, useState } from "react";

type SectionId = "top" | "about" | "skills" | "experience" | "projects" | "contact";

export default function useActiveSection(): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>("top");

  useEffect(() => {
    const sectionIds: SectionId[] = ["top", "about", "skills", "experience", "projects", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((best, entry) => {
            return entry.boundingClientRect.top < best.boundingClientRect.top ? entry : best;
          }, visible[0]);
          setActiveSection(topMost.target.id as SectionId);
        }
      },
      { threshold: [0.3, 0.55], rootMargin: "-10% 0px -40% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}
