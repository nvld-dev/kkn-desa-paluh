// components/sections/about/AboutImage.tsx

import type { AboutData } from "@/data/about";
import Image from "next/image";

interface AboutImageProps {
  image: AboutData["image"];
}

export default function AboutImage({ image }: AboutImageProps) {
  return (
    <div data-about-image className="group relative mx-auto w-[85%] lg:w-[80%]">
      {/* Glow */}
      <div className="absolute -inset-3 rounded-[28px] bg-emerald-500/10 opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

      {/* Glass Frame */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl">
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Light Reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}



// className = "group relative mx-auto w-full max-w-md lg:max-w-none";
// <div className="relative aspect-[5/4] overflow-hidden rounded-3xl"></div>