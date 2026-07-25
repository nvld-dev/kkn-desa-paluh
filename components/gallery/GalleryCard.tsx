"use client";

import { cn } from "@/lib/cn";
import { useTheme } from "@/components/theme/ThemeProvider";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, Images, MapPin } from "lucide-react";

import type { GalleryAlbum } from "@/data/gallery";

interface GalleryCardProps {
  album: GalleryAlbum;
}

export default function GalleryCard({ album }: GalleryCardProps) {
  const { theme } = useTheme();

  return (
    <Link
      href={`/gallery/${album.slug}`}
      className={cn(
        "group block overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1",

        theme === "dark"
          ? "border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-emerald-400/30 hover:shadow-xl"
          : "border border-slate-200 bg-white shadow-sm hover:border-emerald-300 hover:shadow-lg",
      )}
    >
      {/* Cover */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={album.cover}
          alt={album.title}
          fill
          priority={false}
          sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />

        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-300 group-hover:opacity-90",

            theme === "dark"
              ? "bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"
              : "bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent",
          )}
        />

        {/* Glow */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-300",

            theme === "dark"
              ? "bg-gradient-to-tr from-emerald-500/0 via-transparent to-transparent group-hover:from-emerald-500/10"
              : "hidden",
          )}
        />

        {/* Category */}
        <div
          className={cn(
            "absolute top-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-medium transition-all",

            theme === "dark"
              ? "border border-emerald-400/20 bg-emerald-500/10 text-emerald-300 backdrop-blur-md"
              : "border border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm",
          )}
        >
          {album.category}
        </div>

        {/* Photos */}
        <div
          className={cn(
            "absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] transition-all",

            theme === "dark"
              ? "border border-white/10 bg-black/40 text-white backdrop-blur-md"
              : "border border-white bg-white/90 text-slate-700 shadow-sm",
          )}
        >
          <Images className="h-3.5 w-3.5" />
          <span>{album.images.length}</span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 px-5 py-2 ">
        <div>
          <h3
            className={cn(
              "text-lg font-semibold transition-colors duration-300",

              theme === "dark"
                ? "text-white group-hover:text-emerald-300"
                : "text-slate-900 group-hover:text-emerald-700",
            )}
          >
            {album.title}
          </h3>

          {/* <p
            className={cn(
              "mt-2 line-clamp-2 text-sm leading-6 transition-colors duration-300",

              theme === "dark" ? "text-slate-400" : "text-slate-600",
            )}
          >
            {album.description}
          </p> */}
        </div>

        {/* Meta */}
        {/* <div
          className={cn(
            "space-y-2 text-sm transition-colors duration-300",

            theme === "dark" ? "text-slate-400" : "text-slate-500",
          )}
        >
          <div className="flex items-center gap-2">
            <CalendarDays
              className={cn(
                "h-4 w-4",
                theme === "dark" ? "text-emerald-400" : "text-emerald-600",
              )}
            />
            <span>{album.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin
              className={cn(
                "h-4 w-4",
                theme === "dark" ? "text-emerald-400" : "text-emerald-600",
              )}
            />
            <span>{album.location}</span>
          </div>
        </div> */}

        {/* Footer */}
        <div
          className={cn(
            "flex items-center justify-between py-3 transition-colors duration-300",

            theme === "dark"
              ? "border-t border-white/10"
              : "border-t border-slate-200",
          )}
        >
          <span
            className={cn(
              "text-sm font-medium transition-all duration-300 group-hover:tracking-wide",

              theme === "dark" ? "text-emerald-400" : "text-emerald-600",
            )}
          >
            View Album
          </span>

          <ArrowUpRight
            className={cn(
              "h-4.5 w-4.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",

              theme === "dark"
                ? "text-slate-400 group-hover:text-emerald-400"
                : "text-slate-500 group-hover:text-emerald-600",
            )}
          />
        </div>
      </div>
    </Link>
  );
}


{/* <div
          className={cn(
            "flex items-center justify-between pt-3 transition-colors duration-300",

            theme === "dark"
              ? "border-t border-white/10"
              : "border-t border-slate-200",
          )}
        >
          <h3
            className={cn(
              "text-lg font-semibold transition-colors duration-300",

              theme === "dark"
                ? "text-white group-hover:text-emerald-300"
                : "text-slate-900 group-hover:text-emerald-700",
            )}
          >
            {album.title}
          </h3>

          <span
            className={cn(
              "text-sm font-medium transition-all duration-300 group-hover:tracking-wide",

              theme === "dark" ? "text-emerald-400" : "text-emerald-600",
            )}
          >
            View Album
          </span>

          <ArrowUpRight
            className={cn(
              "h-4.5 w-4.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",

              theme === "dark"
                ? "text-slate-400 group-hover:text-emerald-400"
                : "text-slate-500 group-hover:text-emerald-600",
            )}
          /> */}