// components/sections/about/AboutContent.tsx

import type { AboutHighlight } from "@/data/about";

import AboutChecklist from "./AboutChecklist";

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
  return (
    <div data-about-content className="flex h-full flex-col justify-center">
      {/* Heading */}
      <h3 className="text-2xl font-bold tracking-tight text-white lg:text-3xl">
        {heading}
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-7 text-slate-300 lg:text-base">
        {content}
      </p>

      {/* Highlights */}
      <div className="mt-6">
        <AboutChecklist items={highlights} />
      </div>
    </div>
  );
}
