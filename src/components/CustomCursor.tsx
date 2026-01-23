import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(media.matches);
    updateEnabled();

    media.addEventListener("change", updateEnabled);
    return () => media.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    let raf = 0;

    const onMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", `${clientX}px`);
        root.style.setProperty("--cursor-y", `${clientY}px`);
      });
    };

    const onDown = () => root.classList.add("cursor-pressed");
    const onUp = () => root.classList.remove("cursor-pressed");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  return createPortal(
    <div className="custom-cursor" aria-hidden="true">
      <span className="custom-cursor__ring" />
      <span className="custom-cursor__dot" />
    </div>,
    document.body
  );
};

export default CustomCursor;
