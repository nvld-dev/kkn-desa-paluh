// components/sections/about/AboutStatCard.tsx

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
  const Icon = icons[icon];

  return (
    <div
      data-about-stat
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.05]"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-col gap-4">
        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-colors duration-300 group-hover:bg-emerald-500/20">
          <Icon className="h-6 w-6" />
        </div>

        {/* Number */}
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            {value}
            {suffix}
          </h3>

          <p className="mt-1 text-sm text-slate-400">{label}</p>
        </div>
      </div>
    </div>
  );
}
