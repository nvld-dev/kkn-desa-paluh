"use client";

import { cn } from "@/lib/cn";
import { useTheme } from "@/components/theme/ThemeProvider";

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
  const { theme } = useTheme();

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
        <section
          className={cn(
            "relative overflow-hidden py-16 transition-colors duration-500 lg:py-10",

            theme === "dark"
              ? "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.45)_70%,rgba(2,6,23,.95)_100%)]"
              : "bg-white",
          )}
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <Link
              href="/gallery"
              className={cn(
                "inline-flex items-center gap-2 text-sm transition-colors duration-300",

                theme === "dark"
                  ? "text-slate-400 hover:text-emerald-400"
                  : "text-slate-500 hover:text-emerald-600",
              )}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Gallery
            </Link>

            <div className="mt-8">
              <h1
                className={cn(
                  "text-4xl font-bold tracking-tight transition-colors duration-300 lg:text-5xl",

                  theme === "dark" ? "text-white" : "text-slate-900",
                )}
              >
                {album.title}
              </h1>

              <p
                className={cn(
                  "mt-4 max-w-3xl text-lg leading-8 transition-colors duration-300",

                  theme === "dark" ? "text-slate-400" : "text-slate-600",
                )}
              >
                {album.description}
              </p>

              <div
                className={cn(
                  "mt-8 flex flex-wrap gap-6 text-sm transition-colors duration-300",

                  theme === "dark" ? "text-slate-400" : "text-slate-500",
                )}
              >
                <div className="flex items-center gap-2">
                  <CalendarDays
                    className={cn(
                      "h-4 w-4",

                      theme === "dark"
                        ? "text-emerald-400"
                        : "text-emerald-600",
                    )}
                  />
                  {album.date}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin
                    className={cn(
                      "h-4 w-4",

                      theme === "dark"
                        ? "text-emerald-400"
                        : "text-emerald-600",
                    )}
                  />
                  {album.location}
                </div>

                <div className="flex items-center gap-2">
                  <Images
                    className={cn(
                      "h-4 w-4",

                      theme === "dark"
                        ? "text-emerald-400"
                        : "text-emerald-600",
                    )}
                  />
                  {album.images.length} Photos
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photos */}
        <section
          className={cn(
            "relative overflow-hidden py-16 transition-colors duration-500 lg:pb-20",

            theme === "dark"
              ? "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.45)_70%,rgba(2,6,23,.95)_100%)]"
              : "bg-white",
          )}
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="columns-2 gap-2 md:columns-3 xl:columns-6">
              {album.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className={cn(
                    "group mb-2 block w-full cursor-pointer break-inside-avoid overflow-hidden  transition-all duration-300",

                    theme === "dark"
                      ? ""
                      : "border border-slate-200 bg-white shadow-sm hover:shadow-lg",
                  )}
                >
                  <Image
                    src={image}
                    alt={`${album.title} ${index + 1}`}
                    width={1200}
                    height={800}
                    className={cn(
                      "h-auto w-full object-contain transition duration-500 group-hover:scale-[1.03]",

                      theme === "dark" ? "" : "rounded-3xl",
                    )}
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
