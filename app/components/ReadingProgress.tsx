"use client";

import { useEffect, useRef } from "react";

export default function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = document.getElementById("article-body");
    if (!target) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = target.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollable = target.offsetHeight - viewportHeight;

      let progress;
      if (scrollable > 0) {
        progress = -rect.top / scrollable;
      } else if (target.offsetHeight > 0) {
        progress = Math.min(Math.max(-rect.top, 0), target.offsetHeight) / target.offsetHeight;
      } else {
        progress = 0;
      }
      progress = Math.min(Math.max(progress, 0), 1);

      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[10000] h-[2px]">
      <div
        ref={barRef}
        className="h-full origin-left bg-[var(--color-accent)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
