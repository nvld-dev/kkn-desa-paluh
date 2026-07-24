// data/social.ts

import type { ComponentType } from "react";
import type { IconType } from "react-icons";
import { SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";



export interface SocialItem {
  name: string;
  username: string;
  description: string;
  href: string;
  cta: string;
  icon: IconType;
}

export const socialData = {
  badge: "Stay Connected",

  sectionTitle: "Follow Our Journey",

  sectionDescription:
    "Ikuti perjalanan KKN 11 Desa Paluh melalui media sosial resmi kami. Temukan dokumentasi kegiatan, video, serta momen terbaik selama pengabdian kepada masyarakat.",

  items: [
    {
      name: "Instagram",
      username: "@djourneyof.kkn11paluh",
      description:
        "Dokumentasi harian, kegiatan desa, serta berbagai momen menarik selama pelaksanaan KKN.",
      href: "https://instagram.com/djourneyof.kkn11paluh",
      cta: "Follow",
      icon: SiInstagram,
    },
    {
      name: "TikTok",
      username: "@kkn11_kecamatanpaluh26",
      description:
        "Video singkat, behind the scenes, dan highlight aktivitas KKN yang dikemas secara kreatif.",
      href: "https://tiktok.com/@kkn11_kecamatanpaluh26",
      cta: "Watch",
      icon: SiTiktok,
    },
    {
      name: "YouTube",
      username: "KKN 11 Desa Paluh",
      description:
        "Video dokumentasi lengkap, program kerja, serta rangkaian kegiatan KKN di Desa Paluh.",
      href: "",
      cta: "Subscribe",
      icon: SiYoutube,
    },
  ] satisfies SocialItem[],
};
