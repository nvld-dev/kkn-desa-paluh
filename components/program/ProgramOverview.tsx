"use client";

import { BadgeCheck, CalendarRange, Target, Users } from "lucide-react";

import { useTheme } from "@/components/theme/ThemeProvider";
import { Program } from "@/data/programs";
import { cn } from "@/lib/cn";

interface ProgramOverviewProps {
  program: Program;
}

export default function ProgramOverview({ program }: ProgramOverviewProps) {
  const { theme } = useTheme();

  const info = [
    {
      icon: Target,
      title: "Tujuan Program",
      value: program.goal,
    },
    {
      icon: Users,
      title: "Target Peserta",
      value: program.target,
    },
    {
      icon: CalendarRange,
      title: "Durasi",
      value: program.duration,
    },
    {
      icon: BadgeCheck,
      title: "Status",
      value:
        program.status === "completed"
          ? "Selesai"
          : program.status === "ongoing"
            ? "Sedang Berlangsung"
            : "Akan Datang",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left */}
          <div className="lg:col-span-2">
            <span className="text-sm font-semibold tracking-[0.25em] text-emerald-500 uppercase">
              Tentang Program
            </span>

            <h2
              className={cn(
                "mt-4 text-2xl font-black lg:text-3xl",
                theme === "dark" ? "text-white" : "text-slate-900",
              )}
            >
              Dari Permasalahan Menjadi Solusi Nyata
            </h2>

            <p
              className={cn(
                "mt-5 leading-8",
                theme === "dark" ? "text-slate-300" : "text-slate-600",
              )}
            >
              {program.description}
            </p>

            <div
              className={cn(
                "mt-8 rounded-[24px] border p-6",
                theme === "dark"
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-slate-200 bg-slate-50",
              )}
            >
              <h3
                className={cn(
                  "text-lg font-bold",
                  theme === "dark" ? "text-white" : "text-slate-900",
                )}
              >
                Permasalahan
              </h3>

              <p
                className={cn(
                  "mt-3 leading-7",
                  theme === "dark" ? "text-slate-300" : "text-slate-600",
                )}
              >
                {program.problem}
              </p>

              <div
                className={cn(
                  "my-6 h-px",
                  theme === "dark" ? "bg-white/10" : "bg-slate-200",
                )}
              />

              <h3
                className={cn(
                  "text-xl font-bold",
                  theme === "dark" ? "text-white" : "text-slate-900",
                )}
              >
                Solusi yang Diterapkan
              </h3>

              <p
                className={cn(
                  "mt-4 leading-8",
                  theme === "dark" ? "text-slate-300" : "text-slate-600",
                )}
              >
                {program.solution}
              </p>
            </div>
          </div>

          {/* Right */}
          <div>
            <div
              className={cn(
                "sticky top-28 rounded-[28px] border p-8",
                theme === "dark"
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-slate-200 bg-white shadow-sm",
              )}
            >
              <h3
                className={cn(
                  "text-xl font-bold",
                  theme === "dark" ? "text-white" : "text-slate-900",
                )}
              >
                Ringkasan Program
              </h3>

              <div className="mt-8 space-y-8">
                {info.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-2xl",
                          theme === "dark"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-emerald-100 text-emerald-600",
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p
                          className={cn(
                            "text-sm",
                            theme === "dark"
                              ? "text-slate-400"
                              : "text-slate-500",
                          )}
                        >
                          {item.title}
                        </p>

                        <p
                          className={cn(
                            "mt-1 leading-7 font-semibold",
                            theme === "dark" ? "text-white" : "text-slate-900",
                          )}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
