"use client";

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Users,
} from "lucide-react";

import { useTheme } from "@/components/theme/ThemeProvider";
import { Program } from "@/data/programs";
import { cn } from "@/lib/cn";

interface ProgramInfoProps {
  program: Program;
}

export default function ProgramInfo({ program }: ProgramInfoProps) {
  const { theme } = useTheme();

  const stats = [
    {
      icon: CalendarDays,
      label: "Durasi",
      value: program.duration,
    },
    {
      icon: Users,
      label: "Peserta",
      value: `${program.participants} Mahasiswa`,
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: program.location,
    },
    {
      icon: CheckCircle2,
      label: "Status",
      value:
        program.status === "completed"
          ? "Selesai"
          : program.status === "ongoing"
            ? "Berlangsung"
            : "Akan Datang",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-emerald-500 uppercase">
            Informasi Program
          </span>

          <h2
            className={cn(
              "mt-4 text-2xl font-black lg:text-3xl",
              theme === "dark" ? "text-white" : "text-slate-900",
            )}
          >
            Statistik & Timeline Pelaksanaan
          </h2>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={cn(
                  "rounded-[24px] border p-5 transition-all duration-300 hover:-translate-y-1",

                  theme === "dark"
                    ? "border-white/10 bg-white/[0.03] hover:border-emerald-500/30"
                    : "border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg",
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
                  <Icon className="h-5 w-5" />
                </div>

                <p
                  className={cn(
                    "mt-4 text-xs",

                    theme === "dark" ? "text-slate-400" : "text-slate-500",
                  )}
                >
                  {item.label}
                </p>

                <h3
                  className={cn(
                    "mt-2 text-lg leading-7 font-bold",

                    theme === "dark" ? "text-white" : "text-slate-900",
                  )}
                >
                  {item.value}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="mt-14">
          <h3
            className={cn(
              "text-xl font-bold",

              theme === "dark" ? "text-white" : "text-slate-900",
            )}
          >
            Timeline Pelaksanaan
          </h3>

          <div className="mt-7 space-y-6">
            {program.timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                {/* Line */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg">
                    <Clock3 className="h-4 w-4" />
                  </div>

                  {index !== program.timeline.length - 1 && (
                    <div
                      className={cn(
                        "mt-2 h-full w-px",

                        theme === "dark" ? "bg-white/10" : "bg-slate-300",
                      )}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className={cn(
                    "flex-1 rounded-[24px] border p-5",

                    theme === "dark"
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-slate-200 bg-white",
                  )}
                >
                  <p className="mb-1 text-xs font-semibold text-emerald-500">
                    {item.date}
                  </p>

                  <h4
                    className={cn(
                      "text-lg font-bold",
                      theme === "dark" ? "text-white" : "text-slate-900",
                    )}
                  >
                    {item.title}
                  </h4>

                  <p
                    className={cn(
                      "mt-2 leading-7 text-sm",
                      theme === "dark" ? "text-slate-300" : "text-slate-600",
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
