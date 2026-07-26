"use client";

import Image from "next/image";

import { Camera } from "lucide-react";

import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/cn";

interface ProgramGalleryProps {
  gallery: {
    image: string;
    caption: string;
    title: string;
  }[];

  title: string;
}

export default function ProgramGallery({ gallery, title }: ProgramGalleryProps) {
  const { theme } = useTheme();

  if (!gallery.length) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-emerald-500 uppercase">
            Dokumentasi
          </span>

          <h2
            className={cn(
              "mt-4 text-2xl font-black lg:text-3xl",
              theme === "dark" ? "text-white" : "text-slate-900",
            )}
          >
            Galeri Kegiatan
          </h2>

          <p
            className={cn(
              "mt-4 leading-7",
              theme === "dark" ? "text-slate-300" : "text-slate-600",
            )}
          >
            Dokumentasi kegiatan selama pelaksanaan{" "}
            <span className="font-semibold text-emerald-500">{title}</span>.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-[24px] border",

                theme === "dark" ? "border-white/10" : "border-slate-200",
              )}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={`${title} ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2 text-white">
                    <div className="rounded-full bg-white/20 p-1 backdrop-blur">
                      <Camera className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white/85">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
