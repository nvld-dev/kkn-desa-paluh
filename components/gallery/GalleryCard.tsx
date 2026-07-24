"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, Images, MapPin } from "lucide-react";

import type { GalleryAlbum } from "@/data/gallery";

interface GalleryCardProps {
  album: GalleryAlbum;
}

export default function GalleryCard({ album }: GalleryCardProps) {
  return (
    <Link
      href={`/gallery/${album.slug}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-xl"
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={album.cover}
          alt={album.title}
          fill
          priority={false}
          sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-transparent to-transparent transition-all duration-300 group-hover:from-emerald-500/10" />

        {/* Category */}
        <div className="absolute top-3 left-3 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 backdrop-blur-md">
          {album.category}
        </div>

        {/* Photos */}
        <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[11px] text-white backdrop-blur-md">
          <Images className="h-3.5 w-3.5" />
          <span>{album.images.length}</span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-emerald-300">
            {album.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">
            {album.description}
          </p>
        </div>

        {/* Meta */}
        <div className="space-y-2 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-emerald-400" />
            <span>{album.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-emerald-400" />
            <span>{album.location}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 pt-3">
          <span className="text-sm font-medium text-emerald-400 transition-all duration-300 group-hover:tracking-wide">
            View Album
          </span>

          <ArrowUpRight className="h-4.5 w-4.5 text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-400" />
        </div>
      </div>
    </Link>
  );
}
