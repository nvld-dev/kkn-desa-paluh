"use client";

import Link from "next/link";
import { X } from "lucide-react";
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
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            className="fixed top-0 right-0 z-50 flex h-screen w-80 max-w-[85vw] flex-col border-l border-slate-800 bg-slate-950 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 p-6">
              <h2 className="text-xl font-bold text-white">KKN Paluh</h2>

              <button
                onClick={onClose}
                className="rounded-lg p-2 transition hover:bg-slate-800"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Menu */}
            <nav className="flex flex-1 flex-col p-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="rounded-lg px-4 py-3 text-lg text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div className="border-t border-slate-800 p-6">
              <Button className="w-full">Dokumentasi</Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
