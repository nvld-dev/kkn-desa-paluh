"use client";

import { cn } from "@/lib/cn";
import { useTheme } from "@/components/theme/useTheme";

import { aboutData, type AboutHighlight } from "@/data/about";
import AboutChecklist from "./AboutChecklist";
import AboutStats from "./AboutStats";

interface AboutContentProps {
  heading: string;
  content: string;
  highlights: AboutHighlight[];
}

export default function AboutContent({
  heading,
  content,
  highlights,
}: AboutContentProps) {
  const { theme } = useTheme();

  return (
    <div data-about-content className="flex h-full flex-col justify-center">
      {/* Heading */}
      <h3
        className={cn(
          "text-2xl font-bold tracking-tight transition-colors duration-300 lg:text-3xl",
          theme === "dark" ? "text-white" : "text-slate-900",
        )}
      >
        {heading}
      </h3>

      {/* Description */}
      <p
        className={cn(
          "mt-4 text-sm leading-7 transition-colors duration-300 lg:text-base",
          theme === "dark" ? "text-slate-300" : "text-slate-600",
        )}
      >
        {content}
      </p>

      {/* Statistics */}
      <div className="mt-6">
        <AboutStats stats={aboutData.stats} />
      </div>
    </div>
  );
}
