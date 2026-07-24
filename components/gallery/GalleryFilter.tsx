"use client";

import { galleryCategories, type GalleryCategory } from "@/data/gallery";

interface GalleryFilterProps {
  active: GalleryCategory | "All";
  onChange: (category: GalleryCategory | "All") => void;
}

export default function GalleryFilter({
  active,
  onChange,
}: GalleryFilterProps) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      <button
        onClick={() => onChange("All")}
        className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
          active === "All"
            ? "bg-emerald-500 text-white"
            : "border border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/40 hover:text-white"
        }`}
      >
        All
      </button>

      {galleryCategories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
            active === category
              ? "bg-emerald-500 text-white"
              : "border border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/40 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
