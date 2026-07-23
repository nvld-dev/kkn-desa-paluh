"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface Particle {
  width: number;
  height: number;
  left: number;
  top: number;
}

export default function HeroParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }).map(() => ({
      width: Math.random() * 3 + 2,
      height: Math.random() * 3 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));

    setParticles(generated);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const dots = gsap.utils.toArray<HTMLElement>(".hero-particle");

    dots.forEach((dot, i) => {
      gsap.set(dot, {
        x: gsap.utils.random(-20, 20),
        y: gsap.utils.random(-20, 20),
      });

      gsap.to(dot, {
        x: `+=${gsap.utils.random(-40, 40)}`,
        y: `+=${gsap.utils.random(-60, 60)}`,
        duration: gsap.utils.random(6, 12),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.05,
      });

      gsap.to(dot, {
        opacity: gsap.utils.random(0.15, 0.45),
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      gsap.killTweensOf(dots);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="hero-particle absolute rounded-full bg-blue-400"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: 0.2,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}
