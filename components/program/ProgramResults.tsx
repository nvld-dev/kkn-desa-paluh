"use client";

import { TrendingUp } from "lucide-react";

import { useTheme } from "@/components/theme/ThemeProvider";
import { ProgramResult } from "@/data/programs";
import { cn } from "@/lib/cn";

interface ProgramResultsProps {
  results: ProgramResult[];
}

export default function ProgramResults({ results }: ProgramResultsProps) {
  const { theme } = useTheme();

  if (!results.length) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-emerald-500 uppercase">
            Dampak Program
          </span>

          <h2
            className={cn(
              "mt-4 text-2xl font-black lg:text-3xl",
              theme === "dark" ? "text-white" : "text-slate-900",
            )}
          >
            Hasil yang Berhasil Dicapai
          </h2>

          <p
            className={cn(
              "mt-4 leading-7",
              theme === "dark" ? "text-slate-300" : "text-slate-600",
            )}
          >
            Pencapaian yang diperoleh selama pelaksanaan program kerja di Desa
            Paluh.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item, index) => (
            <div
              key={index}
              className={cn(
                "group rounded-[24px] border p-6 transition-all duration-300 hover:-translate-y-1",

                theme === "dark"
                  ? "border-white/10 bg-white/[0.03] hover:border-emerald-500/30 hover:shadow-[0_20px_60px_rgba(16,185,129,.15)]"
                  : "border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xl",
              )}
            >
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-xl",

                  theme === "dark"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-emerald-100 text-emerald-600",
                )}
              >
                <TrendingUp className="h-5 w-5" />
              </div>

              <h3
                className={cn(
                  "mt-5 text-4xl font-black lg:text-5xl",

                  theme === "dark" ? "text-white" : "text-slate-900",
                )}
              >
                {item.value}
              </h3>

              <p
                className={cn(
                  "mt-2 text-base font-semibold",

                  theme === "dark" ? "text-slate-200" : "text-slate-800",
                )}
              >
                {item.label}
              </p>

              <div
                className={cn(
                  "mt-5 h-px",

                  theme === "dark" ? "bg-white/10" : "bg-slate-200",
                )}
              />

              <p
                className={cn(
                  "mt-4 text-sm leading-6",

                  theme === "dark" ? "text-slate-400" : "text-slate-500",
                )}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
