"use client";

import { useState } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";

import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/sections/about/AboutSection";
import SocialSection from "@/components/sections/social/SocialSection";

export default function HomePage() {
  const [isIntro, setIsIntro] = useState(true);

  return (
    <>
      <Navbar hidden={isIntro} />

      <main>
        <Hero isIntro={isIntro} setIsIntro={setIsIntro} />
        <AboutSection />
        <SocialSection />
      </main>

      <Footer />

      <ScrollToTop />
    </>
  );
}
