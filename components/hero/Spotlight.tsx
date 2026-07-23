"use client";

import Image from "next/image";

import { cn } from "@/lib/cn";
import type { Member } from "@/types/member";

interface SpotlightProps {
  member: Member | null;
  className?: string;
}

export default function Spotlight({ member, className }: SpotlightProps) {
  if (!member) return null;

  return (
    <section
      className={cn(
        "pointer-events-none fixed inset-0 z-50 flex items-center justify-center",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-12">
        {/* PHOTO */}
        <div data-spotlight-photo className="relative flex-shrink-0">
          {/* Glow */}
          <div className="absolute inset-0 scale-110 rounded-[36px] bg-blue-500/15 blur-3xl" />

          {/* Frame */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900 shadow-2xl">
            <div className="relative h-[620px] w-[430px]">
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
          <p className="text-sm font-semibold tracking-[0.45em] text-blue-400 uppercase">
            Anggota KKN
          </p>

          <h2 className="mt-6 text-6xl leading-tight font-black text-white uppercase">
            {member.name}
          </h2>

          <div className="mt-8 h-px w-56 bg-white/20" />

          <h3 className="mt-8 text-4xl font-semibold text-slate-300">
            {member.role}
          </h3>
        </div>
      </div>
    </section>
  );
}
