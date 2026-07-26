"use client";

import { cn } from "@/lib/cn";
import { useTheme } from "@/components/theme/useTheme";

import type { AboutHighlight } from "@/data/about";
import { CheckCircle2 } from "lucide-react";

interface AboutChecklistProps {
  items: AboutHighlight[];
}

export default function AboutChecklist({ items }: AboutChecklistProps) {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
      {items.map((item) => (
        <div
          key={item.id}
          data-about-check
          className={cn(
            "group flex flex-col items-center gap-3 text-center rounded-2xl p-3 transition-all duration-300 hover:-translate-y-1",

            theme === "dark"
              ? "border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-emerald-400/40 hover:bg-white/[0.05]"
              : "border border-slate-200 bg-white shadow-sm shadow-slate-200/40 hover:border-emerald-300 hover:shadow-md",
          )}
        >
          {/* Icon */}
          <div
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300",

              theme === "dark"
                ? "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20"
                : "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
            )}
          >
            <CheckCircle2 className="h-4.5 w-4.5" />
          </div>

          {/* Text */}
          <p
            className={cn(
              "text-sm leading-6 transition-colors duration-300",

              theme === "dark"
                ? "text-slate-300 group-hover:text-white"
                : "text-slate-700 group-hover:text-slate-900",
            )}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
