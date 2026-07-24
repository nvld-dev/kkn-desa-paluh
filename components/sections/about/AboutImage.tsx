// components/sections/about/AboutImage.tsx
import { useTheme } from "@/components/theme/useTheme";
import { cn } from "@/lib/cn";
import type { AboutData } from "@/data/about";
import Image from "next/image";

interface AboutImageProps {
  image: AboutData["image"];
}

export default function AboutImage({ image }: AboutImageProps) {
  const { theme } = useTheme();
  return (
    <div data-about-image className="group relative mx-auto w-[85%] lg:w-[80%]">
      {/* Glow */}
      {theme === "dark" && (
        <div className="absolute -inset-3 rounded-[28px] bg-emerald-500/10 opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
      )}

      {/* Glass Frame */}
      <div
        className={cn(
          "relative overflow-hidden rounded-[28px] p-2 transition-all duration-500",

          theme === "dark"
            ? "border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            : "border border-slate-200 bg-white shadow-xl shadow-slate-200/40",
        )}
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark Overlay */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-500",

              theme === "dark"
                ? "bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                : "bg-gradient-to-t from-black/15 via-transparent to-transparent",
            )}
          />

          {/* Light Reflection */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-500",

              theme === "dark"
                ? "bg-gradient-to-br from-white/10 via-transparent to-transparent"
                : "bg-gradient-to-br from-white/30 via-transparent to-transparent",
            )}
          />
        </div>
      </div>
    </div>
  );
}



// className = "group relative mx-auto w-full max-w-md lg:max-w-none";
// <div className="relative aspect-[5/4] overflow-hidden rounded-3xl"></div>