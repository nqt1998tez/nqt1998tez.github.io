import {useEffect} from "react";

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove("reveal-pending");
        observer.unobserve(entry.target);
      }
    }, {threshold: 0.08, rootMargin: "0px 0px -24px 0px"});
    items.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 16) return;
      el.classList.add("reveal-pending");
      observer.observe(el);
    });
    return () => {observer.disconnect();items.forEach(el => el.classList.remove("reveal-pending"));};
  }, []);
}
