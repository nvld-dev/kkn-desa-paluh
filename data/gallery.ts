export type GalleryCategory =
  "pre-kkn" | "Kegiatan" | "Pendidikan" | "UMKM" | "Sosial" | "Lingkungan" | "Lainnya";

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
  "pre-kkn",
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

    title: "H-23",
    description: "Rapat persiapan kkn",

    category: "pre-kkn",

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
  {
    id: "2",
    slug: "2026-07-25-pra-kkn",

    title: "H-2",
    description: "hmmm... foto formal",

    category: "pre-kkn",

    date: "25 Juli 2026",
    location: "GR UMRI",

    cover: "/images/gallery/2026-07-25-pra-kkn/cover.webp",

    images: [
      "/images/gallery/2026-07-25-pra-kkn/1.webp",
      "/images/gallery/2026-07-25-pra-kkn/2.webp",
      "/images/gallery/2026-07-25-pra-kkn/3.webp",
      "/images/gallery/2026-07-25-pra-kkn/4.webp",
      "/images/gallery/2026-07-25-pra-kkn/5.webp",
      "/images/gallery/2026-07-25-pra-kkn/6.webp",
      "/images/gallery/2026-07-25-pra-kkn/7.webp",
      "/images/gallery/2026-07-25-pra-kkn/8.webp",
      "/images/gallery/2026-07-25-pra-kkn/9.webp",
      "/images/gallery/2026-07-25-pra-kkn/10.webp",
      "/images/gallery/2026-07-25-pra-kkn/11.webp",
      "/images/gallery/2026-07-25-pra-kkn/12.webp",
    ],
  },

  {
    id: "3",
    slug: "2026-07-27-pelepasan",

    title: "Pelepasan KKN",
    description:
      "Acara pelepasan secara resmi.",

    category: "Lainnya",

    date: "27 Juli 2026",
    location: "UMRI",

    cover: "/gallery/2026-07-27-pelepasan/cover.webp",

    images: [
      "/gallery/2026-07-27-pelepasan/1.webp",
      "/gallery/2026-07-27-pelepasan/2.webp",
      "/gallery/2026-07-27-pelepasan/3.webp",
      "/gallery/2026-07-27-pelepasan/4.webp",
      "/gallery/2026-07-27-pelepasan/5.webp",
      "/gallery/2026-07-27-pelepasan/6.webp",
    ],
  },

  // {
  //   id: "4",
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
