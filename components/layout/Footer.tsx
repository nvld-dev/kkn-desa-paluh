import Link from "next/link";

import Container from "@/components/ui/Container";

const navigation = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#about" },
  { label: "Program", href: "#program" },
  { label: "Galeri", href: "#gallery" },
  { label: "Artikel", href: "#article" },
  { label: "Tim", href: "#committee" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">KKN Desa Paluh</h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Website resmi Kelompok Kuliah Kerja Nyata Desa Paluh. Berisi
              dokumentasi kegiatan, program kerja, artikel, dan profil anggota
              KKN.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Navigasi</h3>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Kontak</h3>

            <div className="space-y-3 text-slate-400">
              <p>Desa Paluh</p>

              <p>Kabupaten Deli Serdang</p>

              <p>Sumatera Utara</p>

              <p>kkn@example.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} KKN Desa Paluh. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
