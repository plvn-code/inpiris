"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";

/** Draggable before/after comparison. `hint` plays a short sweep once it scrolls into view. */
export function BeforeAfter({ before, after, alt, hint, eager, sizes }: { before: string; after: string; alt: string; hint?: boolean; eager?: boolean; sizes?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [drag, setDrag] = useState(false);
  const touched = useRef(false);

  useEffect(() => {
    if (!hint || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = box.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          if (touched.current) return;
          const k = Math.min(1, (t - t0) / 2600);
          // 50 → 18 → 82 → 50, eased
          const s = Math.sin(k * Math.PI * 2);
          setPos(50 - 32 * s * (1 - k * 0.15));
          if (k < 1) raf = requestAnimationFrame(tick);
          else setPos(50);
        };
        setTimeout(() => (raf = requestAnimationFrame(tick)), 500);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [hint]);

  const move = (x: number) => {
    const r = box.current!.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={box}
      className={`ba ${drag ? "drag" : ""}`}
      style={{ "--p": `${pos}%` } as React.CSSProperties}
      onPointerDown={(e) => {
        touched.current = true;
        setDrag(true);
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => drag && move(e.clientX)}
      onPointerUp={() => setDrag(false)}
      onPointerCancel={() => setDrag(false)}
    >
      <img src={after} alt={`${alt} — после`} width={1100} height={1375} loading={eager ? "eager" : "lazy"} sizes={sizes} draggable={false} />
      <div className="ba-before">
        <img src={before} alt={`${alt} — до`} width={1100} height={1375} loading={eager ? "eager" : "lazy"} draggable={false} />
      </div>
      <span className="ba-tag ba-tag-b">До</span>
      <span className="ba-tag ba-tag-a">После</span>
      <div className="ba-line" aria-hidden="true">
        <span className="ba-knob">
          <Icon name="drag" size={18} />
        </span>
      </div>
      <input
        className="ba-range"
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => {
          touched.current = true;
          setPos(Number(e.target.value));
        }}
        aria-label={`Сравнить до и после: ${alt}`}
      />
    </div>
  );
}
