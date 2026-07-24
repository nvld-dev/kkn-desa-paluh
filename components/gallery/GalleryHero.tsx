"use client";

import { Camera, FolderOpen, Images } from "lucide-react";

interface GalleryHeroProps {
  totalAlbums: number;
  totalPhotos: number;
  totalCategories: number;
  hasAlbums: boolean;
}

export default function GalleryHero({
  totalAlbums,
  totalPhotos,
  totalCategories,
  hasAlbums,
}: GalleryHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.45)_70%,rgba(2,6,23,.95)_100%)] py-16 lg:py-20">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-md">
            <Images className="h-4 w-4" />
            Gallery
          </div>

          {/* Title */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Capturing Every{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Moment
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Kumpulan kenangan, aktivitas, dan momen bermakna sepanjang
            perjalanan KKN 11 Desa Paluh
          </p>

          {hasAlbums && (
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <FolderOpen className="mx-auto h-6 w-6 text-emerald-400" />

                <div className="mt-3 text-3xl font-bold text-white">
                  {totalAlbums}
                </div>

                <p className="mt-1 text-sm text-slate-400">Albums</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <Camera className="mx-auto h-6 w-6 text-emerald-400" />

                <div className="mt-3 text-3xl font-bold text-white">
                  {totalPhotos}
                </div>

                <p className="mt-1 text-sm text-slate-400">Photos</p>
              </div>

              <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:col-span-1">
                <Images className="mx-auto h-6 w-6 text-emerald-400" />

                <div className="mt-3 text-3xl font-bold text-white">
                  {totalCategories}
                </div>

                <p className="mt-1 text-sm text-slate-400">Categories</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
