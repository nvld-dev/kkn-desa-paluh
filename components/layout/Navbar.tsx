"use client";

import Link from "next/link";
import { Menu, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#about" },
  { label: "Program", href: "#program" },
  { label: "Galeri", href: "#gallery" },
  { label: "Artikel", href: "#article" },
  { label: "Tim", href: "#committee" },
  { label: "Kontak", href: "#contact" },
];

interface NavbarProps {
  hidden?: boolean;
}

export default function Navbar({ hidden = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        hidden
          ? "pointer-events-none -translate-y-full opacity-0"
          : "translate-y-0 opacity-100",
      )}
    >
      <Container className="pt-5">
        <div
          className={cn(
            "flex h-16 items-center justify-between rounded-2xl border px-6 transition-all duration-500",
            scrolled
              ? "border-white/10 bg-black/55 shadow-2xl shadow-black/30 backdrop-blur-2xl"
              : "border-transparent bg-transparent",
          )}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition group-hover:bg-white/10">
              <img
                src="/images/logo/logo-kkn.png"
                alt="Logo KKN"
                className="object-contain drop-shadow-2xl"
              />
            </div>

            <div>
              <h1 className="text-sm font-bold text-white">KKN Desa Paluh</h1>

              <p className="text-xs text-slate-400">Kuliah Kerja Nyata 2026</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <Button size="sm" className="hidden lg:inline-flex">
              Dokumentasi
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>

            <button className="rounded-xl border border-white/10 bg-white/5 p-2 transition hover:bg-white/10 lg:hidden">
              <Menu className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
