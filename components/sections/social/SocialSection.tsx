"use client";

import { useRef } from "react";

import { cn } from "@/lib/cn";
import { useTheme } from "@/components/theme/useTheme";
import SectionTitle from "@/components/ui/SectionTitle";
import SocialCard from "./SocialCard";

import { socialData } from "@/data/social";
import useSocialAnimation from "@/hooks/useSocialAnimation";

export default function SocialSection() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);

  useSocialAnimation(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="social"
      className={cn(
        "relative overflow-hidden py-16 transition-colors duration-500 lg:py-20",

        theme === "dark"
          ? "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.45)_70%,rgba(2,6,23,.95)_100%)]"
          : "bg-white",
      )}
    >
      
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div data-social-header>
          <SectionTitle
            badge={socialData.badge}
            title={socialData.sectionTitle}
            description={socialData.sectionDescription}
          />
        </div>

        {/* Social Cards */}
        <div
          className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2 lg:mt-12 xl:grid-cols-3"
          data-social-grid
        >
          {socialData.items.map((item) => (
            <SocialCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
