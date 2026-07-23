"use client";

import { useState } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";

import Hero from "@/components/hero/Hero";

export default function HomePage() {
  const [isIntro, setIsIntro] = useState(true);

  return (
    <>
      <Navbar hidden={isIntro} />

      <main>
        <Hero isIntro={isIntro} setIsIntro={setIsIntro} />
      </main>

      <Footer />

      <ScrollToTop />
    </>
  );
}
