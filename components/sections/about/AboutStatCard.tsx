"use client";

import { cn } from "@/lib/cn";
import { useTheme } from "@/components/theme/useTheme";

import type { AboutStat } from "@/data/about";
import { CalendarDays, Layers3, MapPinned, Users } from "lucide-react";

interface AboutStatCardProps extends Omit<AboutStat, "id"> {}

const icons = {
  users: Users,
  layers: Layers3,
  calendar: CalendarDays,
  map: MapPinned,
};

export default function AboutStatCard({
  value,
  suffix,
  label,
  icon,
}: AboutStatCardProps) {
  const { theme } = useTheme();

  const Icon = icons[icon];

  return (
    <div
      data-about-stat
      className="flex relative overflow-hidden flex-col items-center rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"    >
      {/* Glow */}
      {theme === "dark" && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}

      <div className="relative flex flex-col items-center gap-2">
        {/* Icon */}
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300",

            theme === "dark"
              ? "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20"
              : "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
          )}
        >
          <Icon className="h-6 w-6" />
        </div>

        {/* Number */}
        <div className="text-center">
          <h3
            className={cn(
              "text-3xl font-bold tracking-tight transition-colors duration-300 lg:text-4xl",

              theme === "dark" ? "text-white" : "text-slate-900",
            )}
          >
            {value}
            {suffix}
          </h3>

          <p
            className={cn(
              "mt-1 text-sm transition-colors duration-300",

              theme === "dark" ? "text-slate-400" : "text-slate-600",
            )}
          >
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}



{/* <div
      data-about-stat
      className={cn(
        "flex relative overflow-hidden flex-col items-center rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1",

        theme === "dark"
          ? "border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-emerald-400/40 hover:bg-white/[0.05]"
          : "border border-slate-200 bg-white shadow-lg shadow-slate-200/40 hover:border-emerald-300 hover:shadow-xl",
      )}
    > */}