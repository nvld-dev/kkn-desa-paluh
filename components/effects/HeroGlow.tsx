"use client";

export default function HeroGlow() {
  return (
    <>
      <div className="absolute top-24 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute top-1/3 right-0 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-20 left-0 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />
    </>
  );
}
