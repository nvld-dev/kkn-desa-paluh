"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

import { useTheme } from "@/components/theme/ThemeProvider";
import { Program } from "@/data/programs";
import { cn } from "@/lib/cn";

interface RelatedProgramsProps {
  programs: Program[];
}

export default function RelatedPrograms({ programs }: RelatedProgramsProps) {
  const { theme } = useTheme();

  if (!programs.length) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-emerald-500 uppercase">
              Program Lainnya
            </span>

            <h2
              className={cn(
                "mt-4 text-2xl font-black lg:text-3xl",
                theme === "dark" ? "text-white" : "text-slate-900",
              )}
            >
              Jelajahi Program KKN Lain
            </h2>

            <p
              className={cn(
                "mt-4 max-w-2xl leading-7",
                theme === "dark" ? "text-slate-300" : "text-slate-600",
              )}
            >
              Masih banyak program kerja yang telah dilaksanakan selama KKN Desa
              Paluh untuk mendukung pemberdayaan masyarakat.
            </p>
          </div>

          <Link
            href="/program"
            className="inline-flex items-center gap-1 font-semibold text-emerald-600 transition-all hover:gap-2"
          >
            Lihat Semua Program
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {programs.map((program) => (
            <Link
              key={program.id}
              href={`/program/${program.slug}`}
              className={cn(
                "group overflow-hidden rounded-[24px] border transition-all duration-300 hover:-translate-y-1",

                theme === "dark"
                  ? "border-white/10 bg-white/[0.03] hover:border-emerald-500/30 hover:shadow-[0_20px_60px_rgba(16,185,129,.15)]"
                  : "border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xl",
              )}
            >
              <div className="grid md:grid-cols-[190px_1fr]">
                {/* Image */}
                <div className="relative h-52 overflow-hidden md:h-full">
                  <Image
                    src={program.cover}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col p-5">
                  <span className="text-xs font-semibold tracking-wider text-emerald-500 uppercase">
                    {program.category}
                  </span>

                  <h3
                    className={cn(
                      "mt-2 text-xl leading-tight font-bold",

                      theme === "dark" ? "text-white" : "text-slate-900",
                    )}
                  >
                    {program.title}
                  </h3>

                  <p
                    className={cn(
                      "mt-3 line-clamp-3 text-sm leading-6",

                      theme === "dark" ? "text-slate-300" : "text-slate-600",
                    )}
                  >
                    {program.shortDescription}
                  </p>

                  <div
                    className={cn(
                      "mt-4 flex flex-wrap gap-4 text-sm",

                      theme === "dark" ? "text-slate-400" : "text-slate-500",
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-3 w-3 text-emerald-500" />
                      {program.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-emerald-500" />
                      {program.location}
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <span className="inline-flex items-center gap-2 font-semibold text-emerald-600 transition-all duration-300 group-hover:gap-3">
                      Lihat Detail
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
