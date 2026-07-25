"use client";

import { cn } from "@/lib/cn";
import { useTheme } from "@/components/theme/ThemeProvider";

import { galleryCategories, type GalleryCategory } from "@/data/gallery";

interface GalleryFilterProps {
  active: GalleryCategory | "All";
  onChange: (category: GalleryCategory | "All") => void;
}

export default function GalleryFilter({
  active,
  onChange,
}: GalleryFilterProps) {
  const { theme } = useTheme();
  
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      <button
        onClick={() => onChange("All")}
        className={cn(
          "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",

          active === "All"
            ? theme === "dark"
              ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
              : "bg-emerald-600 text-white shadow-sm"
            : theme === "dark"
              ? "border border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/40 hover:text-white"
              : "border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700",
        )}
      >
        All
      </button>

      {galleryCategories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",

            active === category
              ? theme === "dark"
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                : "bg-emerald-600 text-white shadow-sm"
              : theme === "dark"
                ? "border border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/40 hover:text-white"
                : "border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
