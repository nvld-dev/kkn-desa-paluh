"use client";

export default function SocialGlow() {
  return (
    <>
      {/* Left Glow */}
      <div className="absolute top-1/2 left-0 h-72 w-72 -translate-y-1/2 rounded-full bg-emerald-400/5 blur-[110px]" />

      {/* Right Glow */}
      <div className="absolute top-1/3 right-0 h-64 w-64 rounded-full bg-cyan-400/5 blur-[100px]" />
    </>
  );
}
