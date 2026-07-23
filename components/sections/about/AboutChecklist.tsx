// components/sections/about/AboutChecklist.tsx

import type { AboutHighlight } from "@/data/about";
import { CheckCircle2 } from "lucide-react";

interface AboutChecklistProps {
  items: AboutHighlight[];
}

export default function AboutChecklist({ items }: AboutChecklistProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.id}
          data-about-check
          className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.05]"
        >
          {/* Icon */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-colors duration-300 group-hover:bg-emerald-500/20">
            <CheckCircle2 className="h-4.5 w-4.5" />
          </div>

          {/* Text */}
          <p className="text-sm leading-6 text-slate-300 transition-colors duration-300 group-hover:text-white">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
