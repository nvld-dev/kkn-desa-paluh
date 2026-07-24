"use client";

import { useMemo, useState } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";

import Background from "@/components/effects/Background";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryComingSoon from "@/components/gallery/GalleryComingSoon";
import GalleryFilter from "@/components/gallery/GalleryFilter";

import {
  getGalleryAlbums,
  galleryCategories,
  type GalleryCategory,
} from "@/data/gallery";

export default function GalleryPage() {
  const albums = getGalleryAlbums();

  const [active, setActive] = useState<GalleryCategory | "All">("All");

  const filteredAlbums = useMemo(() => {
    if (active === "All") return albums;

    return albums.filter((album) => album.category === active);
  }, [active, albums]);

  const totalAlbums = albums.length;

  const totalPhotos = albums.reduce(
    (total, album) => total + album.images.length,
    0,
  );

  const totalCategories = galleryCategories.length;

  const hasAlbums = filteredAlbums.length > 0;

  return (
    <>
      <Navbar />

      <Background />

      <GalleryHero
        hasAlbums={hasAlbums}
        totalAlbums={totalAlbums}
        totalPhotos={totalPhotos}
        totalCategories={totalCategories}
      />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.45)_70%,rgba(2,6,23,.95)_100%)] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <GalleryFilter active={active} onChange={setActive} />
          {hasAlbums ? (
            <GalleryGrid albums={filteredAlbums} />
          ) : (
            <GalleryComingSoon />
          )}
        </div>
      </section>

      <Footer />

      <ScrollToTop />
    </>
  );
}
