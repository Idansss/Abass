"use client";

import * as React from "react";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function Cursor() {
  const dotRef = React.useRef<HTMLDivElement | null>(null);
  const ringRef = React.useRef<HTMLDivElement | null>(null);

  const rafRef = React.useRef<number | null>(null);
  const enabledRef = React.useRef(false);

  const target = React.useRef({ x: 0, y: 0 });
  const ring = React.useRef({ x: 0, y: 0 });
  const hovering = React.useRef(false);

  React.useEffect(() => {
    const enable = () => window.innerWidth > 1024;

    const setEnabled = () => {
      const shouldEnable = enable();
      enabledRef.current = shouldEnable;

      const dot = dotRef.current;
      const ringEl = ringRef.current;
      if (!dot || !ringEl) return;

      dot.style.display = shouldEnable ? "block" : "none";
      ringEl.style.display = shouldEnable ? "block" : "none";

      document.body.style.cursor = shouldEnable ? "none" : "";
    };

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      const dot = dotRef.current;
      if (!dot) return;
      dot.style.transform = `translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0)`;
    };

    const onOver = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const hit = t.closest("a,button");
      hovering.current = Boolean(hit);
    };

    const tick = () => {
      const ringEl = ringRef.current;
      if (enabledRef.current && ringEl) {
        ring.current.x = lerp(ring.current.x, target.current.x, 0.12);
        ring.current.y = lerp(ring.current.y, target.current.y, 0.12);

        const size = hovering.current ? 54 : 36;
        const offset = size / 2;
        ringEl.style.width = `${size}px`;
        ringEl.style.height = `${size}px`;
        ringEl.style.transform = `translate3d(${ring.current.x - offset}px, ${
          ring.current.y - offset
        }px, 0)`;

        const dot = dotRef.current;
        if (dot) {
          const dotSize = hovering.current ? 18 : 10;
          dot.style.width = `${dotSize}px`;
          dot.style.height = `${dotSize}px`;
        }
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    setEnabled();

    window.addEventListener("resize", setEnabled);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOver, { passive: true });

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", setEnabled);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOver);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full bg-accent"
        style={{
          width: 10,
          height: 10,
          mixBlendMode: "difference",
          willChange: "transform,width,height",
        }}
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full border border-accent/40"
        style={{
          width: 36,
          height: 36,
          willChange: "transform,width,height",
        }}
        aria-hidden
      />
    </>
  );
}

