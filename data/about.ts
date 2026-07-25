
export interface AboutHighlight {
  id: number;
  text: string;
}

export interface AboutStat {
  id: number;
  value: number;
  suffix?: string;
  label: string;
  icon: "users" | "layers" | "calendar" | "map";
}

export interface AboutData {
  badge: string;
  sectionTitle: string;
  sectionDescription: string;

  heading: string;
  content: string;

  image: {
    src: string;
    alt: string;
  };

  highlights: AboutHighlight[];

  stats: AboutStat[];
}

export const aboutData: AboutData = {
  badge: "Tentang Kami",

  sectionTitle: "Mengabdi, Berkarya, dan Tumbuh Bersama Desa Paluh",

  sectionDescription:
    "Kelompok KKN 11 Universitas Muhammadiyah Riau hadir di Desa Paluh sebagai bentuk pengabdian kepada masyarakat melalui berbagai program yang berfokus pada pendidikan, digitalisasi, pemberdayaan UMKM, dan kolaborasi bersama masyarakat.",

  heading: "Kelompok KKN 11 Universitas Muhammadiyah Riau",

  content:
    "Kami merupakan mahasiswa Universitas Muhammadiyah Riau yang melaksanakan Kuliah Kerja Nyata (KKN) Tahun 2026 di Desa Paluh. Bersama pemerintah desa dan masyarakat, kami berkomitmen menghadirkan program yang memberikan manfaat nyata melalui inovasi, kolaborasi, serta pemberdayaan masyarakat secara berkelanjutan.",

  image: {
    src: "/images/about/about-kkn3.png",
    alt: "Kelompok KKN 11 Desa Paluh",
  },

  highlights: [
    {
      id: 1,
      text: "KKN Universitas Muhammadiyah Riau Tahun 2026",
    },
    {
      id: 2,
      text: "Berkolaborasi bersama Pemerintah Desa Paluh",
    },
    {
      id: 3,
      text: "Fokus pada Pendidikan, Digitalisasi, dan Pengembangan UMKM",
    },
    {
      id: 4,
      text: "Membangun dampak positif dan berkelanjutan bagi masyarakat",
    },
  ],

  stats: [
    {
      id: 1,
      value: 11,
      label: "Mahasiswa",
      icon: "users",
    },
    {
      id: 2,
      value: 6,
      label: "Divisi",
      icon: "layers",
    },
    {
      id: 3,
      value: 40,
      label: "Hari Pengabdian",
      icon: "calendar",
    },
  ],
};

export default aboutData;
