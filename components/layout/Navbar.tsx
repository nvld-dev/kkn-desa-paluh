"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const navItems = [
  {
    label: "Beranda",
    href: "#hero",
  },
  {
    label: "Tentang",
    href: "#about",
  },
  {
    label: "Program",
    href: "#program",
  },
  {
    label: "Galeri",
    href: "#gallery",
  },
  {
    label: "Artikel",
    href: "#article",
  },
  {
    label: "Tim",
    href: "#committee",
  },
  {
    label: "Kontak",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-bold tracking-wide text-white"
          >
            KKN Paluh
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right */}

          <div className="flex items-center gap-3">
            <Button size="sm" className="hidden lg:inline-flex">
              Dokumentasi
            </Button>

            <button className="rounded-lg p-2 transition hover:bg-slate-800 lg:hidden">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
