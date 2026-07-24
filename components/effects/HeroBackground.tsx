"use client";

import HeroGlow from "./HeroGlow";
import HeroParticles from "./HeroParticles";
import HeroShootingStar from "./HeroShootingStar";

export default function HeroBackground() {
  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 -z-50 bg-black" />

      {/* Aurora */}
      <div className="absolute inset-0 -z-40 overflow-hidden">
        {/* Main Glow */}
        <div className="absolute top-[-24rem] left-1/2 h-[52rem] w-[52rem] -translate-x-1/2 rounded-full bg-emerald-950/70 blur-[220px]" />

        {/* Left */}
        <div className="absolute top-[38%] left-[8%] h-[30rem] w-[30rem] rounded-full bg-emerald-900/40 blur-[180px]" />

        {/* Right */}
        <div className="absolute right-[8%] bottom-[8%] h-[26rem] w-[26rem] rounded-full bg-teal-950/40 blur-[170px]" />

        {/* Accent */}
        <div className="absolute top-[70%] left-1/2 h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-emerald-800/20 blur-[120px]" />

        <div className="absolute bottom-[-24rem] left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-emerald-950/55 blur-[200px]" />
      </div>
      {/* Vignette */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.45)_70%,rgba(2,6,23,.95)_100%)]" />
      <HeroGlow />
      <HeroParticles />
      <HeroShootingStar />
    </>
  );
}