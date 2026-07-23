"use client";

import Image from "next/image";

import { cn } from "@/lib/cn";
import type { Member } from "@/types/member";

interface SpotlightProps {
  member: Member | null;
  visible?: boolean;
  className?: string;
}

export default function Spotlight({
  member,
  visible = true,
  className,
}: SpotlightProps) {
  if (!member) return null;

  return (
    <section
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity duration-500",
        visible
          ? "pointer-events-none opacity-100"
          : "pointer-events-none opacity-0",
        className,
      )}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-xl" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.75)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-center gap-24 px-8">
        {/* PHOTO */}
        <div data-spotlight-photo className="relative flex-shrink-0">
          {/* Glow */}
          <div className="absolute inset-0 scale-110 rounded-[36px] bg-emerald-400/10 blur-3xl" />

          {/* Frame */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl">
            <div className="relative h-[420px] w-[230px]">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* INFO */}
        <div data-spotlight-info className="max-w-xl">
          <p className="text-sm font-semibold tracking-[0.45em] text-emerald-300 uppercase">
            Anggota KKN
          </p>

          <h2 className="mt-6 text-6xl leading-tight font-black text-white uppercase">
            {member.name}
          </h2>

          <div className="mt-8 h-px w-56 bg-gradient-to-r from-emerald-400/70 via-white/20 to-transparent" />

          <h3 className="mt-8 text-4xl font-semibold text-slate-200">
            {member.role}
          </h3>
        </div>
      </div>
    </section>
  );
}
