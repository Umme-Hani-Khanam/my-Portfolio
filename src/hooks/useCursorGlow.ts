import { useEffect } from "react";

export default function useCursorGlow(): void {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const glow = document.getElementById("cursor-glow");
    if (!glow) return undefined;

    const handlePointerMove = (event: PointerEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      glow.style.opacity = "1";
    };

    const handlePointerLeave = () => {
      glow.style.opacity = "0";
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);
}
