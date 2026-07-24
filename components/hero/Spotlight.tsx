"use client";

import Image from "next/image";
import { useTheme } from "@/components/theme/ThemeProvider";
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
  const { theme } = useTheme();

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
      <div
        className={cn(
          "absolute inset-0 backdrop-blur-xl transition-all duration-500",

          theme === "dark" ? "bg-black/55" : "bg-slate-950/60",
        )}
      />

      {/* Vignette */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-500",

          theme === "dark"
            ? "bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.75)_100%)]"
            : "bg-[radial-gradient(circle_at_center,transparent_20%,rgba(15,23,42,.80)_100%)]",
        )}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-center gap-24 px-8">
        {/* PHOTO */}
        <div data-spotlight-photo className="relative flex-shrink-0">
          {/* Glow */}
          <div
            className={cn(
              "absolute inset-0 scale-110 rounded-[36px] blur-3xl transition-all duration-500",

              theme === "dark" ? "bg-emerald-400/10" : "bg-emerald-400/15",
            )}
          />

          {/* Frame */}
          <div
            className={cn(
              "relative overflow-hidden rounded-[32px] shadow-2xl transition-all duration-500",

              theme === "dark"
                ? "border border-white/10 bg-black/40 backdrop-blur-xl"
                : "border border-white/20 bg-slate-900/60 backdrop-blur-xl",
            )}
          >
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

          <div className="mt-8 h-[2px] w-56 bg-gradient-to-r from-emerald-400 via-emerald-300 to-transparent" />

          <h3
            className={cn(
              "mt-8 text-4xl font-semibold transition-colors duration-300",

              theme === "dark" ? "text-slate-200" : "text-slate-100",
            )}
          >
            {member.role}
          </h3>
        </div>
      </div>
    </section>
  );
}
