import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useSmoothScroll(): void {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smooth: true,
      gestureOrientation: "vertical",
      mouseMultiplier: 0.75,
      smoothTouch: true,
    });

    gsap.ticker.lagSmoothing(0);

    function raf(time: number) {
      lenis.raf(time);
    }

    const gsapRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(gsapRaf);
    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true });
          return null;
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.defaults({ scroller: document.body });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    const rafId = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(gsapRaf);
      cancelAnimationFrame(rafId);
      if (lenis) {
        lenis.destroy();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
