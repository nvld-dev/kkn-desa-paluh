"use client";

import { useRef } from "react";

import SectionTitle from "@/components/ui/SectionTitle";
import SocialCard from "./SocialCard";
import SocialBackground from "@/components/effects/SocialBackground";

import { socialData } from "@/data/social";
import useSocialAnimation from "@/hooks/useSocialAnimation";

export default function SocialSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useSocialAnimation(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="social"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.45)_70%,rgba(2,6,23,.95)_100%)] py-16 lg:py-20"
    >
      <SocialBackground />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
