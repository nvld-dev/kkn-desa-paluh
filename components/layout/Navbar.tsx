"use client";

import Link from "next/link";
import { Menu, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { useTheme } from "@/components/theme/useTheme";
import ThemeToggle from "@/components/theme/ThemeToggle";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Program", href: "/program" },
  { label: "Galeri", href: "/gallery" },
  { label: "Artikel", href: "/#article" },
  { label: "Tim", href: "/#committee" },
];

interface NavbarProps {
  hidden?: boolean;
}

export default function Navbar({ hidden = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  const { theme } = useTheme();

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
            "flex h-16 items-center justify-between rounded-2xl border px-6 transition-all duration-500 lg:px-8",

            scrolled &&
              (theme === "dark"
                ? "border-[var(--border)] bg-black/55 shadow-2xl shadow-black/30 backdrop-blur-2xl"
                : "border-slate-200 bg-white/80 shadow-lg shadow-slate-200/40 backdrop-blur-xl"),

            !scrolled && "border-transparent bg-transparent",
          )}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div
              className=
                "flex h-9 w-9 items-center justify-center rounded-xl transition"
            >
              <img
                src="/images/logo/logo-kkn.png"
                alt="Logo KKN"
                className="object-contain drop-shadow-2xl"
              />
            </div>

            <div>
              <h1
                className={cn(
                  "text-sm font-bold transition-colors",
                  theme === "dark" ? "text-white" : "text-slate-900",
                )}
              >
                KKN Desa Paluh
              </h1>

              <p
                className={cn(
                  "text-xs transition-colors",
                  theme === "dark" ? "text-slate-400" : "text-slate-500",
                )}
              >
                Kuliah Kerja Nyata 2026
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300",

                  theme === "dark"
                    ? "text-slate-300 hover:bg-white/5 hover:text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-emerald-600",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* <Button size="sm" className="hidden lg:inline-flex">
              Dokumentasi
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button> */}

            <ThemeToggle />

            <button
              className={cn(
                "rounded-xl border p-2 transition lg:hidden",

                theme === "dark"
                  ? "border-white/10 bg-white/5 hover:bg-white/10"
                  : "border-slate-200 bg-white hover:bg-slate-100",
              )}
            >
              <Menu
                className={cn(
                  "h-5 w-5",
                  theme === "dark" ? "text-white" : "text-slate-900",
                )}
              />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
