"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/cn";

import { programCategories, type ProgramCategory } from "@/data/programs";

interface ProgramFilterProps {
  active: ProgramCategory | "All";
  onChange: (category: ProgramCategory | "All") => void;
}

export default function ProgramFilter({
  active,
  onChange,
}: ProgramFilterProps) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button
        onClick={() => onChange("All")}
        className={cn(
          "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 active:scale-95",

          active === "All"
            ? theme === "dark"
              ? "border-emerald-400 bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
              : "border-emerald-500 bg-emerald-500 text-white shadow-md"
            : theme === "dark"
              ? "border-white/10 bg-white/[0.03] text-slate-300 hover:border-emerald-400/30 hover:bg-white/[0.05]"
              : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-700",
        )}
      >
        Semua
      </button>

      {programCategories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 active:scale-95",

            active === category
              ? theme === "dark"
                ? "border-emerald-400 bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                : "border-emerald-500 bg-emerald-500 text-white shadow-md"
              : theme === "dark"
                ? "border-white/10 bg-white/[0.03] text-slate-300 hover:border-emerald-400/30 hover:bg-white/[0.05]"
                : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-700",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
