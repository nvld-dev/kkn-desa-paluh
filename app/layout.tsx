import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KKN Desa Paluh",
    template: "%s | KKN Desa Paluh",
  },
  description:
    "Website resmi KKN Desa Paluh yang menampilkan profil anggota, program kerja, dokumentasi kegiatan, dan informasi desa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="text-white antialiased">{children}</body>
      
    </html>
  );
}
