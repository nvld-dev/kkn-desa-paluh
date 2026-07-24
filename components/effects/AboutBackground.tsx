"use client";

import AboutGlow from "./AboutGlow";

export default function AboutBackground() {
  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 -z-50 bg-black" />

      {/* Aurora */}
      <div className="absolute inset-0 -z-40 overflow-hidden">
        {/* Main Glow */}
        <div className="absolute top-[-20rem] left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-emerald-950/55 blur-[200px]" />

        {/* Left */}
        <div className="absolute top-[35%] left-[8%] h-[24rem] w-[24rem] rounded-full bg-emerald-900/30 blur-[160px]" />

        {/* Right */}
        <div className="absolute right-[8%] bottom-[10%] h-[22rem] w-[22rem] rounded-full bg-teal-950/30 blur-[160px]" />

        {/* Accent */}
        <div className="absolute top-[72%] left-1/2 h-[14rem] w-[14rem] -translate-x-1/2 rounded-full bg-emerald-800/15 blur-[100px]" />
      
        <div className="absolute bottom-[-24rem] left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-emerald-950/55 blur-[200px]" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.35)_70%,rgba(2,6,23,.90)_100%)]" />

      <AboutGlow />
    </>
  );
}
