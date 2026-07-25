"use client";

import { cn } from "@/lib/cn";
import { useTheme } from "@/components/theme/ThemeProvider";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryLightboxProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GalleryLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  const { theme } = useTheme();

  useEffect(() => {
    if (currentIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[999] flex items-center justify-center backdrop-blur-md transition-all duration-300",

        theme === "dark" ? "bg-black/90" : "bg-slate-950/85",
      )}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className={cn(
          "absolute top-6 right-6 rounded-full p-3 transition-all duration-300",

          theme === "dark"
            ? "bg-white/10 text-white hover:bg-white/20"
            : "bg-white/90 text-slate-700 shadow-md hover:bg-white",
        )}
      >
        <X className="h-6 w-6" />
      </button>

      {/* Previous */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className={cn(
            "absolute left-6 rounded-full p-3 transition-all duration-300",

            theme === "dark"
              ? "bg-white/10 text-white hover:bg-white/20"
              : "bg-white/90 text-slate-700 shadow-md hover:bg-white",
          )}
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          width={1800}
          height={1200}
          className={cn(
            "max-h-[90vh] w-auto rounded-2xl object-contain transition-all duration-300",

            theme === "dark" ? "" : "shadow-2xl",
          )}
          priority
        />
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className={cn(
            "absolute right-6 rounded-full p-3 transition-all duration-300",

            theme === "dark"
              ? "bg-white/10 text-white hover:bg-white/20"
              : "bg-white/90 text-slate-700 shadow-md hover:bg-white",
          )}
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-6 rounded-full bg-white/10 px-4 py-2 text-sm text-black backdrop-blur">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
