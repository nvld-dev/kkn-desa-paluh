"use client";

import Image from "next/image";

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Users,
} from "lucide-react";

import { useTheme } from "@/components/theme/ThemeProvider";
import { Program } from "@/data/programs";
import { cn } from "@/lib/cn";

interface ProgramDetailHeroProps {
  program: Program;
}

export default function ProgramDetailHero({ program }: ProgramDetailHeroProps) {
  const { theme } = useTheme();

  const status = {
    completed: {
      label: "Selesai",
      icon: CheckCircle2,
      className:
        theme === "dark"
          ? "border border-emerald-500/20 bg-emerald-500/15 text-emerald-300"
          : "border border-emerald-200 bg-emerald-50 text-emerald-700",
    },

    ongoing: {
      label: "Berlangsung",
      icon: Clock3,
      className:
        theme === "dark"
          ? "border border-amber-500/20 bg-amber-500/15 text-amber-300"
          : "border border-amber-200 bg-amber-50 text-amber-700",
    },

    upcoming: {
      label: "Akan Datang",
      icon: Clock3,
      className:
        theme === "dark"
          ? "border border-white/10 bg-slate-500/15 text-slate-300"
          : "border border-slate-200 bg-slate-100 text-slate-700",
    },
  }[program.status];

  const StatusIcon = status.icon;

  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <span
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold",

                theme === "dark"
                  ? "border border-white/10 bg-white/5 text-slate-200"
                  : "border border-slate-200 bg-white text-slate-700",
              )}
            >
              {program.category}
            </span>

            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold",
                status.className,
              )}
            >
              <StatusIcon className="h-4 w-4" />
              {status.label}
            </span>
          </div>

          <h1
            className={cn(
              "mt-6 text-4xl leading-tight font-black md:text-6xl",

              theme === "dark" ? "text-white" : "text-slate-900",
            )}
          >
            {program.title}
          </h1>

          {/* <p
            className={cn(
              "mx-auto mt-6 max-w-5xl text-lg leading-6",

              theme === "dark" ? "text-slate-300" : "text-slate-600",
            )}
          >
            {program.description}
          </p> */}

          {/* Metadata */}
          <div
            className={cn(
              "mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm",

              theme === "dark" ? "text-slate-400" : "text-slate-600",
            )}
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-emerald-500" />
              <span>{program.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-emerald-500" />
              <span>{program.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-emerald-500" />
              <span>{program.division}</span>
            </div>
          </div>
        </div>

        {/* Cover */}
        <div
          className={cn(
            "relative mt-10 overflow-hidden rounded-[24px] border",

            theme === "dark" ? "border-white/10" : "border-slate-200",
          )}
        >
          <div className="relative aspect-[16/7]">
            <Image
              src={program.cover}
              alt={program.title}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

            <div className="absolute right-6 bottom-6 left-6 lg:right-8 lg:bottom-8 lg:left-8">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase">
                  KKN Desa Paluh 2026
                </p>

                <h2 className="mt-3 text-xl font-bold text-white md:text-3xl">
                  {program.title}
                </h2>

                <p className="mt-3 max-w-xl leading-7 text-white/80">
                  {program.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
