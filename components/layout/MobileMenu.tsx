"use client";

import Link from "next/link";
import { ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Button from "@/components/ui/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#about" },
  { label: "Program", href: "#program" },
  { label: "Galeri", href: "#gallery" },
  { label: "Artikel", href: "#article" },
  { label: "Tim", href: "#committee" },
  { label: "Kontak", href: "#contact" },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 30,
            }}
            className="fixed top-0 right-0 z-50 flex h-screen w-80 max-w-[90vw] flex-col border-l border-white/10 bg-black/70 shadow-2xl shadow-black/40 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <span className="text-lg font-black text-white">K</span>
                </div>

                <div>
                  <h2 className="font-bold text-white">KKN Desa Paluh</h2>

                  <p className="text-xs text-slate-400">
                    Kuliah Kerja Nyata 2026
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/5 p-2 transition-all duration-300 hover:bg-white/10"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col gap-2 p-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between rounded-2xl border border-transparent px-5 py-4 text-base font-medium text-slate-300 transition-all duration-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                  >
                    <span>{item.label}</span>

                    <ChevronRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer */}
            <div className="space-y-4 border-t border-white/10 p-6">
              <Button className="w-full">Lihat Dokumentasi</Button>

              <p className="text-center text-xs leading-6 text-slate-500">
                © {new Date().getFullYear()} KKN Desa Paluh
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
