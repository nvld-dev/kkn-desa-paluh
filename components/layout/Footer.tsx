"use client";

import { useTheme } from "@/components/theme/useTheme";
import { cn } from "@/lib/cn";

import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

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
  const { theme } = useTheme();

  return (
    <footer
      className={cn(
        "relative transition-colors duration-500",

        theme === "dark"
          ? "border-t border-white/10 bg-black"
          : "border-t border-slate-200 bg-slate-950",
      )}
    >
      <Container>
        <div className="grid gap-14 py-20 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300",

                  theme === "dark"
                    ? "bg-white/5 ring-1 ring-white/10"
                    : "bg-white shadow-lg ring-1 ring-white/20",
                )}
              >
                <img
                  src="/images/logo/logo-kkn.png"
                  alt="Logo KKN"
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  KKN Desa Paluh
                </h2>

                <p className="text-sm text-slate-400">
                  Kuliah Kerja Nyata 2026
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Website resmi Kelompok KKN Desa Paluh yang menampilkan dokumentasi
              kegiatan, program kerja, artikel, dan profil seluruh anggota.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Navigasi</h3>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-slate-400 transition hover:text-white"
                  >
                    {item.label}

                    <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Kontak</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-emerald-400" />

                <div className="text-slate-400">
                  Desa Paluh, kec. Mempura
                  <br />
                  Kabupaten Siak
                  <br />
                  Riau
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="h-5 w-5 text-emerald-400" />
                kkn@example.com
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} KKN Desa Paluh. All Rights Reserved.
          </p>

          <p>Dibuat Oleh Tim KKN Desa Paluh.</p>
        </div>
      </Container>
    </footer>
  );
}
