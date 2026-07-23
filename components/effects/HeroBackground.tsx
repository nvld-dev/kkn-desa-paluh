"use client";

import HeroGlow from "./HeroGlow";

export default function HeroBackground() {
  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 -z-30 bg-slate-950" />

      {/* Radial */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,#2563eb22_0%,transparent_60%)]" />

      {/* Grid */}
      <div className="absolute inset-0 -z-20 [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05]" />

      <HeroGlow />
    </>
  );
}
