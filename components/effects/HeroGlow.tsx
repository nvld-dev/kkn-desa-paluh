"use client";

export default function HeroGlow() {
  return (
    <>
      {/* Main Dark Glow */}
      <div className="absolute top-24 left-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-black/60 blur-[180px]" />

      {/* Left Shadow */}
      <div className="absolute top-1/3 left-[-100px] -z-10 h-[360px] w-[360px] rounded-full bg-black/40 blur-[150px]" />

      {/* Right Shadow */}
      <div className="absolute right-[-80px] bottom-20 -z-10 h-[320px] w-[320px] rounded-full bg-black/35 blur-[140px]" />

      {/* Center Soft Glow */}
      <div className="absolute top-[60%] left-1/2 -z-10 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-[90px]" />
    </>
  );
}
