"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/cn";
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
  const { theme } = useTheme();

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 transition-colors duration-500 lg:py-24",

        theme === "dark"
          ? "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.45)_70%,rgba(2,6,23,.95)_100%)]"
          : "bg-white",
      )}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",

              theme === "dark"
                ? "border border-emerald-400/20 bg-emerald-500/10 text-emerald-300 backdrop-blur-md"
                : "border border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm",
            )}
          >
            <Images className="h-4 w-4" />
            Gallery
          </div>

          {/* Title */}
          <h1
            className={cn(
              "mt-6 text-4xl font-bold tracking-tight transition-colors duration-300 md:text-6xl",

              theme === "dark" ? "text-white" : "text-slate-900",
            )}
          >
            Capturing Every{" "}
            <span
              className={cn(
                "bg-clip-text text-transparent",

                theme === "dark"
                  ? "bg-gradient-to-r from-emerald-400 to-cyan-400"
                  : "bg-gradient-to-r from-emerald-600 to-emerald-400",
              )}
            >
              Moment
            </span>
          </h1>

          {/* Description */}
          <p
            className={cn(
              "mx-auto mt-6 max-w-2xl text-lg leading-6 transition-colors duration-300",

              theme === "dark" ? "text-slate-400" : "text-slate-600",
            )}
          >
            Kumpulan kenangan, aktivitas, dan momen bermakna sepanjang
            perjalanan KKN 11 Desa Paluh
          </p>

          {hasAlbums && (
            <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
              <div
                className={cn(
                  "rounded-2xl p-6 transition-all duration-300",

                  theme === "dark"
                    ? "border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                    : "border border-slate-200 bg-white shadow-sm",
                )}
              >
                <FolderOpen
                  className={cn(
                    "mx-auto h-6 w-6",

                    theme === "dark" ? "text-emerald-400" : "text-emerald-600",
                  )}
                />

                <div
                  className={cn(
                    "mt-3 text-3xl font-bold transition-colors duration-300",

                    theme === "dark" ? "text-white" : "text-slate-900",
                  )}
                >
                  {totalAlbums}
                </div>

                <p
                  className={cn(
                    "mt-1 text-sm transition-colors duration-300",

                    theme === "dark" ? "text-slate-400" : "text-slate-500",
                  )}
                >
                  Albums
                </p>
              </div>

              <div
                className={cn(
                  "rounded-2xl p-6 transition-all duration-300",

                  theme === "dark"
                    ? "border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                    : "border border-slate-200 bg-white shadow-sm",
                )}
              >
                <Camera
                  className={cn(
                    "mx-auto h-6 w-6",

                    theme === "dark" ? "text-emerald-400" : "text-emerald-600",
                  )}
                />

                <div
                  className={cn(
                    "mt-3 text-3xl font-bold transition-colors duration-300",

                    theme === "dark" ? "text-white" : "text-slate-900",
                  )}
                >
                  {totalPhotos}
                </div>

                <p
                  className={cn(
                    "mt-1 text-sm transition-colors duration-300",

                    theme === "dark" ? "text-slate-400" : "text-slate-500",
                  )}
                >
                  Photos
                </p>
              </div>

              <div
                className={cn(
                  "rounded-2xl p-6 transition-all duration-300",

                  theme === "dark"
                    ? "border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                    : "border border-slate-200 bg-white shadow-sm",
                )}
              >
                <Images
                  className={cn(
                    "mx-auto h-6 w-6",

                    theme === "dark" ? "text-emerald-400" : "text-emerald-600",
                  )}
                />

                <div
                  className={cn(
                    "mt-3 text-3xl font-bold transition-colors duration-300",

                    theme === "dark" ? "text-white" : "text-slate-900",
                  )}
                >
                  {totalCategories}
                </div>

                <p
                  className={cn(
                    "mt-1 text-sm transition-colors duration-300",

                    theme === "dark" ? "text-slate-400" : "text-slate-500",
                  )}
                >
                  Categories
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
