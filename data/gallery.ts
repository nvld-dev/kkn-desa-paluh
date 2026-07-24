export type GalleryCategory =
  "Kegiatan" | "Pendidikan" | "UMKM" | "Sosial" | "Lingkungan" | "Lainnya";

export interface GalleryAlbum {
  id: string;
  slug: string;

  title: string;
  description: string;

  category: GalleryCategory;

  date: string;
  location: string;

  cover: string;
  images: string[];
}

export const galleryCategories: GalleryCategory[] = [
  "Kegiatan",
  "Pendidikan",
  "UMKM",
  "Sosial",
  "Lingkungan",
  "Lainnya",
];

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "1",
    slug: "2026-07-04-pra-kkn",

    title: "Pra-KKN",
    description: "Rapat persiapan kkn",

    category: "Kegiatan",

    date: "04 Juli 2026",
    location: "GTC UMRI",

    cover: "/images/gallery/2026-07-04-pra-kkn/cover.webp",

    images: [
      "/images/gallery/2026-07-04-pra-kkn/01.webp",
      "/images/gallery/2026-07-04-pra-kkn/02.webp",
      "/images/gallery/2026-07-04-pra-kkn/03.webp",
      "/images/gallery/2026-07-04-pra-kkn/04.webp",
      "/images/gallery/2026-07-04-pra-kkn/05.webp",
    ],
  },

  // {
  //   id: "2",
  //   slug: "2026-07-24-umkm",

  //   title: "Pendampingan UMKM",
  //   description:
  //     "Pendampingan digitalisasi dan promosi produk UMKM Desa Paluh.",

  //   category: "UMKM",

  //   date: "24 Juli 2026",
  //   location: "Desa Paluh",

  //   cover: "/gallery/2026-07-24-umkm/cover.webp",

  //   images: [
  //     "/gallery/2026-07-24-umkm/01.webp",
  //     "/gallery/2026-07-24-umkm/02.webp",
  //     "/gallery/2026-07-24-umkm/03.webp",
  //   ],
  // },

  // {
  //   id: "3",
  //   slug: "2026-07-27-gotong-royong",

  //   title: "Gotong Royong",
  //   description:
  //     "Kegiatan gotong royong bersama masyarakat menjaga kebersihan lingkungan Desa Paluh.",

  //   category: "Lingkungan",

  //   date: "27 Juli 2026",
  //   location: "Desa Paluh",

  //   cover: "/gallery/2026-07-27-gotong-royong/cover.webp",

  //   images: [
  //     "/gallery/2026-07-27-gotong-royong/01.webp",
  //     "/gallery/2026-07-27-gotong-royong/02.webp",
  //     "/gallery/2026-07-27-gotong-royong/03.webp",
  //   ],
  // },
];

export function getGalleryAlbums(limit?: number): GalleryAlbum[] {
  return limit ? galleryAlbums.slice(0, limit) : galleryAlbums;
}

export function getGalleryAlbumBySlug(slug: string): GalleryAlbum | undefined {
  return galleryAlbums.find((album) => album.slug === slug);
}

export function getGalleryAlbumsByCategory(
  category: GalleryCategory,
): GalleryAlbum[] {
  return galleryAlbums.filter((album) => album.category === category);
}
