"use client";

import { useState } from "react";

import HomeBackground from "@/components/effects/HomeBackground";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";

import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/sections/about/AboutSection";
import SocialSection from "@/components/sections/social/SocialSection";
import GalleryPreviewSection from "@/components/sections/GalleryPreviewSection";


export default function HomePage() {
  const [isIntro, setIsIntro] = useState(true);

  return (
    <>
      <Navbar hidden={isIntro} />

      <Hero isIntro={isIntro} setIsIntro={setIsIntro} />

      <main className="relative overflow-hidden">
        <HomeBackground />

        <div className="relative z-10">
          <AboutSection />
          <GalleryPreviewSection />
          <SocialSection />
        </div>
      </main>

      <Footer />

      <ScrollToTop />
    </>
  );
}
