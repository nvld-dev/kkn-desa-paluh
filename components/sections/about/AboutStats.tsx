// components/sections/about/AboutStats.tsx

import type { AboutStat } from "@/data/about";

import AboutStatCard from "./AboutStatCard";

interface AboutStatsProps {
  stats: AboutStat[];
}

export default function AboutStats({ stats }: AboutStatsProps) {
  return (
    <div className="grid grid-cols-2 mx-auto max-w-4x1 gap-4 lg:grid-cols-3 lg:gap-6">
      {stats.map(({ id, ...stat }) => (
        <AboutStatCard key={id} {...stat} />
      ))}
    </div>
  );
}

// <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
