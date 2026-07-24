"use client";

import Link from "next/link";

import GalleryGrid from "@/components/gallery/GalleryGrid";
import SectionTitle from "@/components/ui/SectionTitle";

import { getGalleryAlbums } from "@/data/gallery";

export default function GalleryPreviewSection() {
  const albums = getGalleryAlbums(6);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.45)_70%,rgba(2,6,23,.95)_100%)] py-16 lg:py-20">
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
            className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-6 py-3 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/20"
          >
            View All Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
