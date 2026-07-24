"use client";

import Link from "next/link";

import { cn } from "@/lib/cn";
import { useTheme } from "@/components/theme/useTheme";

import GalleryGrid from "@/components/gallery/GalleryGrid";
import SectionTitle from "@/components/ui/SectionTitle";

import { getGalleryAlbums } from "@/data/gallery";

export default function GalleryPreviewSection() {
  const { theme } = useTheme();
  const albums = getGalleryAlbums(6);

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 transition-colors duration-500 lg:py-20",

        theme === "dark"
          ? "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.45)_70%,rgba(2,6,23,.95)_100%)]"
          : "bg-white",
      )}
    >
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionTitle
          badge="Gallery"
          title="Captured Moments"
          // description="A glimpse of activities and memorable moments throughout KKN 11 Desa Paluh."
        />

        <div className="mt-14">
          <GalleryGrid albums={albums} />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className={cn(
              "inline-flex items-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",

              theme === "dark"
                ? "border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                : "border border-emerald-300 bg-emerald-50 text-emerald-700 shadow-sm hover:bg-emerald-100 hover:shadow-md",
            )}
          >
            View All Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
