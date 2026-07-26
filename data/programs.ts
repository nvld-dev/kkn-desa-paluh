export type ProgramCategory =
  | "Pendidikan"
  | "Teknologi"
  | "UMKM"
  | "Lingkungan"
  | "Kesehatan"
  | "Sosial"
  | "Keagamaan";

export type ProgramStatus = "completed" | "ongoing" | "upcoming";

export interface ProgramStat {
  label: string;
  value: string;
}

export interface ProgramTimeline {
  title: string;
  description: string;
  date: string;
}

export interface ProgramResult {
  label: string;
  value: string;
  description: string;
}

export interface ProgramMember {
  name: string;
  role: string;
  avatar: string;
}

export interface ProgramGalleryItem {
  image: string;
  title: string;
  caption: string;
}

export interface Program {
  id: number;

  slug: string;

  title: string;

  shortDescription: string;

  description: string;

  category: ProgramCategory;

  division: string;

  status: ProgramStatus;

  cover: string;

  gallery: ProgramGalleryItem[];

  date: string;

  location: string;

  stats: ProgramStat[];

  participants: number;

  timeline: ProgramTimeline[];

  results: ProgramResult[];

  members: ProgramMember[];

  problem: string;
  solution: string;
  goal: string;
  target: string;
  duration: string;
}
// =============================================

export const programs: Program[] = [
  {
    id: 1,

    slug: "digitalisasi-umkm",

    title: "Digitalisasi UMKM Desa Paluh",

    shortDescription:
      "Membantu pelaku UMKM memiliki identitas digital dan katalog produk online.",

    description:
      "Program digitalisasi UMKM bertujuan membantu pelaku usaha di Desa Paluh memanfaatkan teknologi digital melalui katalog produk, Google Maps, media sosial, dan branding sederhana agar mampu menjangkau pasar yang lebih luas.",

    category: "Teknologi",

    division: "Kominfo",

    status: "upcoming",

    cover: "/images/programs/digitalisasi-umkm/cover.jpg",

    gallery: [
      {
        image: "/images/programs/digitalisasi-umkm/1.jpg",
        title: "Pendataan UMKM",
        caption:
          "Tim melakukan pendataan pelaku UMKM bersama perangkat desa sebagai tahap awal digitalisasi usaha.",
      },
      {
        image: "/images/programs/digitalisasi-umkm/2.jpg",
        title: "Pelatihan Google Maps",
        caption:
          "Peserta mempraktikkan cara mendaftarkan lokasi usaha ke Google Maps Business agar lebih mudah ditemukan pelanggan.",
      },
    ],

    date: "18 Juli 2026",

    location: "Balai Desa Paluh",

    stats: [
      {
        label: "UMKM",
        value: "15",
      },
      {
        label: "Peserta",
        value: "42",
      },
      {
        label: "Hari",
        value: "3",
      },
    ],

    participants: 12,

    timeline: [
      {
        title: "Persiapan",
        description: "Pendataan UMKM dan survei kebutuhan.",
        date: "10 Juli 2026",
      },
      {
        title: "Pelaksanaan",
        description: "Pelatihan dan pembuatan katalog digital.",
        date: "18 Juli 2026",
      },
      {
        title: "Evaluasi",
        description: "Pendampingan pasca pelatihan.",
        date: "25 Juli 2026",
      },
    ],

    results: [
      {
        label: "UMKM Terdata",
        value: "15",
        description: "Pelaku UMKM berhasil didata dan diverifikasi.",
      },
      {
        label: "Google Maps Dibuat",
        value: "12",
        description: "Lokasi usaha kini dapat ditemukan melalui Google Maps.",
      },
      {
        label: "Produk Difoto",
        value: "98",
        description: "Foto produk digunakan untuk katalog digital dan promosi.",
      },
    ],

    members: [
      {
        name: "Vijjay Novaldi",
        role: "Koordinator",
        avatar: "/images/team/vijjay.jpg",
      },
      {
        name: "Ahmad",
        role: "Kominfo",
        avatar: "/images/team/ahmad.jpg",
      },
    ],
    problem:
      "Sebagian besar pelaku UMKM di Desa Paluh belum memiliki identitas digital dan media promosi yang memadai sehingga jangkauan pemasaran masih terbatas.",

    solution:
      "Tim KKN melakukan pendataan, fotografi produk, pembuatan katalog digital, serta pendampingan penggunaan media sosial dan Google Maps Business.",

    goal: "Meningkatkan kemampuan promosi digital UMKM Desa Paluh.",

    target: "Pelaku UMKM Desa Paluh.",

    duration: "2 Minggu",
  },

  {
    id: 2,

    slug: "literasi-digital-pelajar",

    title: "Pelatihan Literasi Digital untuk Pelajar",

    shortDescription:
      "Meningkatkan kemampuan siswa dalam menggunakan internet secara cerdas, aman, dan produktif.",

    description:
      "Program literasi digital bertujuan memberikan edukasi kepada siswa mengenai penggunaan internet yang sehat, keamanan data pribadi, etika bermedia sosial, serta pemanfaatan teknologi sebagai sarana belajar agar mampu menghadapi perkembangan era digital secara bijak.",

    category: "Pendidikan",

    division: "Kominfo",

    status: "completed",

    cover: "/images/programs/literasi-digital/cover.jpg",

    gallery: [
      {
        image: "/images/programs/literasi-digital/1.jpg",
        title: "Penyampaian Materi",
        caption:
          "Tim KKN memberikan materi mengenai pentingnya literasi digital dan penggunaan internet secara bertanggung jawab.",
      },
      {
        image: "/images/programs/literasi-digital/2.jpg",
        title: "Sesi Praktik",
        caption:
          "Peserta mempraktikkan cara mencari informasi yang valid dan mengenali berita hoaks melalui pendampingan langsung.",
      },
      {
        image: "/images/programs/literasi-digital/3.jpg",
        title: "Diskusi Interaktif",
        caption:
          "Siswa aktif berdiskusi mengenai etika penggunaan media sosial dan perlindungan data pribadi.",
      },
      {
        image: "/images/programs/literasi-digital/4.jpg",
        title: "Foto Bersama",
        caption:
          "Dokumentasi bersama peserta setelah seluruh rangkaian pelatihan literasi digital selesai dilaksanakan.",
      },
    ],

    date: "22 Juli 2026",

    location: "SD Negeri Desa Paluh",

    stats: [
      {
        label: "Siswa",
        value: "65",
      },
      {
        label: "Kelas",
        value: "4",
      },
      {
        label: "Hari",
        value: "1",
      },
    ],

    participants: 10,

    timeline: [
      {
        title: "Koordinasi",
        description:
          "Melakukan koordinasi dengan pihak sekolah mengenai jadwal dan materi pelatihan.",
        date: "18 Juli 2026",
      },
      {
        title: "Pelaksanaan",
        description:
          "Pelatihan literasi digital melalui presentasi, video edukasi, kuis, dan praktik langsung.",
        date: "22 Juli 2026",
      },
      {
        title: "Evaluasi",
        description:
          "Melakukan evaluasi pemahaman peserta melalui kuis serta diskusi bersama guru.",
        date: "22 Juli 2026",
      },
    ],

    results: [
      {
        label: "Siswa Mengikuti",
        value: "65",
        description:
          "Sebanyak 65 siswa mengikuti pelatihan literasi digital hingga selesai.",
      },
      {
        label: "Materi Dibagikan",
        value: "4",
        description:
          "Empat materi edukasi diberikan sebagai bahan pembelajaran lanjutan di sekolah.",
      },
      {
        label: "Tingkat Partisipasi",
        value: "98%",
        description:
          "Hampir seluruh peserta aktif mengikuti diskusi dan sesi praktik selama kegiatan berlangsung.",
      },
    ],

    members: [
      {
        name: "Vijjay Novaldi",
        role: "Koordinator",
        avatar: "/images/team/vijjay.jpg",
      },
      {
        name: "Siti Aisyah",
        role: "Pemateri",
        avatar: "/images/team/siti.jpg",
      },
    ],

    problem:
      "Sebagian siswa masih belum memahami cara menggunakan internet secara aman dan bijak, serta belum mampu membedakan informasi yang valid dengan informasi palsu yang beredar di media sosial.",

    solution:
      "Tim KKN menyelenggarakan pelatihan literasi digital yang berisi materi keamanan digital, etika bermedia sosial, pengenalan hoaks, serta praktik mencari informasi dari sumber yang terpercaya.",

    goal: "Meningkatkan pemahaman siswa mengenai literasi digital sehingga mampu memanfaatkan teknologi secara positif dan bertanggung jawab.",

    target: "Siswa sekolah dasar di Desa Paluh.",

    duration: "1 Hari",
  },
];

// ===================================
export const programCategories: ProgramCategory[] = [
  "Pendidikan",
  "Teknologi",
  "UMKM",
  "Lingkungan",
  "Kesehatan",
  "Sosial",
  "Keagamaan",
];

export function getPrograms() {
  return programs;
}

export function getProgramBySlug(slug: string) {
  return programs.find((program) => program.slug === slug);
}
