import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";

import Hero from "@/components/hero/Hero";
// import AboutSection from "@/components/sections/AboutSection";
// import ProgramSection from "@/components/sections/ProgramSection";
// import GallerySection from "@/components/sections/GallerySection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>

      {/* <main>
        <Hero />
        <AboutSection />
        <ProgramSection />
        <GallerySection />
      </main> */}

      <Footer />

      <ScrollToTop />
    </>
  );
}
