import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("section, article, footer")
    ).filter((el) => !el.classList.contains("no-reveal"));

    elements.forEach((el) => {
      el.classList.add("reveal");
      el.classList.remove("is-revealed");
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
};

export default ScrollReveal;
