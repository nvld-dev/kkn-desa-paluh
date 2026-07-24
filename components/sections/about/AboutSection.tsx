// components/sections/about/AboutSection.tsx

"use client";

import { useRef } from "react";


import SectionTitle from "@/components/ui/SectionTitle";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

import { aboutData } from "@/data/about";
import useAboutAnimation from "@/hooks/useAboutAnimation";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useAboutAnimation(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.45)_70%,rgba(2,6,23,.95)_100%)] py-16 lg:py-20"
    >
      

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div data-about-header>
          <SectionTitle
            badge={aboutData.badge}
            title={aboutData.sectionTitle}
            description={aboutData.sectionDescription}
          />
        </div>

        {/* Main Content */}
        <div className="mt-12 grid items-center gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-12">
          {/* Image */}
          <div className="lg:col-span-5">
            <AboutImage image={aboutData.image} />
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <AboutContent
              heading={aboutData.heading}
              content={aboutData.content}
              highlights={aboutData.highlights}
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-14 lg:mt-16">
          <AboutStats stats={aboutData.stats} />
        </div>
      </div>
    </section>
  );
}
