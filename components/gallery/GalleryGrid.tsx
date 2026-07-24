"use client";

import GalleryCard from "./GalleryCard";

import type { GalleryAlbum } from "@/data/gallery";

interface GalleryGridProps {
  albums: GalleryAlbum[];
}

export default function GalleryGrid({ albums }: GalleryGridProps) {
  return (
    <div
      data-gallery-grid
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {albums.map((album) => (
        <GalleryCard key={album.id} album={album} />
      ))}
    </div>
  );
}
