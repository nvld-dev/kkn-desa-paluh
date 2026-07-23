"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ActiveStar = {
  id: number;
  top: string;
  left: string;
  dx: number;
  dy: number;
  angle: number;
  duration: number;
  length: number;
};

export default function HeroShootingStar() {
  const [star, setStar] = useState<ActiveStar | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    const spawn = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const topPct = 2 + Math.random() * 30;
      const leftPct = 15 + Math.random() * 80;

      const startX = (leftPct / 100) * vw;
      const startY = (topPct / 100) * vh;

      // bias ke diagonal kiri-bawah (klasik shooting star), tapi tetap ada variasi
      const angleDeg = 120 + Math.random() * 60; // 120°-180°: dominan kiri & kiri-bawah
      const rad = (angleDeg * Math.PI) / 180;
      const unitX = Math.cos(rad);
      const unitY = Math.sin(rad);

      const tX =
        unitX < 0
          ? -startX / unitX
          : unitX > 0
            ? (vw - startX) / unitX
            : Infinity;
      const tY =
        unitY < 0
          ? -startY / unitY
          : unitY > 0
            ? (vh - startY) / unitY
            : Infinity;

      const tExit = Math.min(tX, tY);
      const extraMargin = 300 + Math.random() * 200;
      const travel = tExit + extraMargin;

      const dx = unitX * travel;
      const dy = unitY * travel;
      const distance = travel;
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

      const speed = 1.0 + Math.random() * 0.35;
      const duration = distance / speed / 1000;

      setStar({
        id: Date.now(),
        top: `${topPct}%`,
        left: `${leftPct}%`,
        dx,
        dy,
        angle,
        duration,
        length: Math.max(140, distance * 0.32), // trail lebih panjang
      });

      timeout = setTimeout(
        () => {
          setStar(null);
          scheduleNext();
        },
        duration * 1000 + 200,
      );
    };

    const scheduleNext = () => {
      const delay = 6000 + Math.random() * 8000;
      timeout = setTimeout(spawn, delay);
    };

    scheduleNext();
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) return null;

  const content = star ? (
    <div
      key={star.id}
      className="animate-shooting-star fixed"
      style={
        {
          top: star.top,
          left: star.left,
          "--dx": `${star.dx}px`,
          "--dy": `${star.dy}px`,
          animationDuration: `${star.duration}s`,
        } as React.CSSProperties
      }
    >
      <div
        className="relative"
        style={{
          transform: `rotate(${star.angle}deg)`,
          transformOrigin: "right center",
        }}
      >
        <div className="animate-star-spark absolute top-1/2 right-0 h-3 w-3 translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[1px]" />
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-emerald-200/70 to-white blur-[3px]"
          style={{ height: 3, width: star.length }}
        />
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-white/80 to-white"
          style={{ height: 1.5, width: star.length * 0.75 }}
        />
        <div className="absolute top-1/2 right-0 h-[7px] w-[7px] translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_6px_rgba(167,243,208,.55)]" />
      </div>
    </div>
  ) : null;

  return createPortal(
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      aria-hidden="true"
    >
      {content}
    </div>,
    document.body,
  );
}
