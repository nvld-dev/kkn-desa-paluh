import { notFound } from "next/navigation";

import GalleryAlbum from "@/components/gallery/GalleryAlbum";
import { getGalleryAlbumBySlug } from "@/data/gallery";

interface GalleryAlbumPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: GalleryAlbumPageProps) {
  const { slug } = await params;

  const album = getGalleryAlbumBySlug(slug);

  if (!album) {
    return {
      title: "Gallery",
    };
  }

  return {
    title: album.title,
    description: album.description,
    openGraph: {
      images: [album.cover],
    },
  };
}

export default async function GalleryAlbumPage({
  params,
}: GalleryAlbumPageProps) {
  const { slug } = await params;

  const album = getGalleryAlbumBySlug(slug);

  if (!album) {
    notFound();
  }

  return <GalleryAlbum album={album} />;
}
