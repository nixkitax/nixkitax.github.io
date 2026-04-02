import { useEffect, useRef } from "react";

const ScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = progressRef.current;
    if (!element) return;

    let raf = 0;

    const update = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const value = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      element.style.setProperty(
        "--scroll-progress",
        String(Math.min(1, Math.max(0, value))),
      );
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
};

export default ScrollProgress;
