"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Background from "@/components/effects/Background";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

import { ArrowLeft, CalendarDays, Images, MapPin } from "lucide-react";

import type { GalleryAlbum as GalleryAlbumType } from "@/data/gallery";

interface GalleryAlbumProps {
  album: GalleryAlbumType;
}

export default function GalleryAlbum({ album }: GalleryAlbumProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    if (currentIndex === null) return;

    setCurrentIndex((currentIndex + 1) % album.images.length);
  };

  const prevImage = () => {
    if (currentIndex === null) return;

    setCurrentIndex(
      (currentIndex - 1 + album.images.length) % album.images.length,
    );
  };

  return (
    <>
      <main>
        <Background />

        {/* Hero */}
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.45)_70%,rgba(2,6,23,.95)_100%)] py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-emerald-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Gallery
            </Link>

            <div className="mt-8">
              <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
                {album.title}
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
                {album.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-emerald-400" />
                  {album.date}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  {album.location}
                </div>

                <div className="flex items-center gap-2">
                  <Images className="h-4 w-4 text-emerald-400" />
                  {album.images.length} Photos
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photos */}
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.45)_70%,rgba(2,6,23,.95)_100%)] py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="columns-2 gap-5 md:columns-3 xl:columns-4">
              {album.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group mb-6 block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-3xl"
                >
                  <Image
                    src={image}
                    alt={`${album.title} ${index + 1}`}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <GalleryLightbox
        images={album.images}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}
