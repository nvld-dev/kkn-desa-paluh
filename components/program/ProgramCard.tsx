"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Users,
} from "lucide-react";

import { useTheme } from "@/components/theme/ThemeProvider";
import { Program } from "@/data/programs";
import { cn } from "@/lib/cn";

interface ProgramCardProps {
  program: Program;
  reverse?: boolean;
}

export default function ProgramCard({
  program,
  reverse = false,
}: ProgramCardProps) {
  const { theme } = useTheme();

  const status = {
    completed: {
      label: "Selesai",
      icon: CheckCircle2,
      className:
        theme === "dark"
          ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20"
          : "bg-emerald-50 text-emerald-700 border border-emerald-200",
    },

    ongoing: {
      label: "Berlangsung",
      icon: Clock3,
      className:
        theme === "dark"
          ? "bg-amber-500/15 text-amber-300 border border-amber-500/20"
          : "bg-amber-50 text-amber-700 border border-amber-200",
    },

    upcoming: {
      label: "Akan Datang",
      icon: Clock3,
      className:
        theme === "dark"
          ? "bg-slate-500/15 text-slate-300 border border-white/10"
          : "bg-slate-100 text-slate-700 border border-slate-200",
    },
  }[program.status];

  const StatusIcon = status.icon;

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[24px] border transition-all duration-500 hover:-translate-y-2",

        theme === "dark"
          ? "border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-emerald-400/30 hover:shadow-[0_30px_80px_rgba(16,185,129,.15)]"
          : "border-slate-200 bg-white hover:border-emerald-300 hover:shadow-2xl",
      )}
    >
      <div
        className={cn(
          "grid items-stretch lg:grid-cols-5",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        {/* IMAGE */}
        <div className="relative lg:col-span-2">
          <div className="relative h-72 min-h-[300px] overflow-hidden lg:h-full">
            <Image
              src={program.cover}
              alt={program.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
              <span
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-semibold backdrop-blur-md",

                  theme === "dark"
                    ? "bg-black/40 text-white"
                    : "bg-white/90 text-slate-800",
                )}
              >
                {program.category}
              </span>

              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-xs font-semibold backdrop-blur-md",
                  status.className,
                )}
              >
                <StatusIcon className="h-3.5 w-3.5" />
                {status.label}
              </span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-6 lg:col-span-3 lg:p-8">
          <span className="text-sm font-semibold tracking-widest text-emerald-500 uppercase">
            {program.division}
          </span>

          <h2
            className={cn(
              "mt-3 text-2xl leading-tight font-black lg:text-3xl",

              theme === "dark" ? "text-white" : "text-slate-900",
            )}
          >
            {program.title}
          </h2>

          <p
            className={cn(
              "mt-4 max-w-2xl leading-7",

              theme === "dark" ? "text-slate-300" : "text-slate-600",
            )}
          >
            {program.shortDescription}
          </p>

          {/* Divider */}
          <div
            className={cn(
              "my-6 h-px",

              theme === "dark" ? "bg-white/10" : "bg-slate-200",
            )}
          />

          {/* Metadata */}
          <div
            className={cn(
              "space-y-3 text-sm",

              theme === "dark" ? "text-slate-400" : "text-slate-600",
            )}
          >
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-emerald-500" />
              <span>{program.location}</span>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays className="h-4 w-4 text-emerald-500" />
              <span>{program.date}</span>
            </div>

            <div className="flex items-center gap-3">
              <Users className="h-4 w-4 text-emerald-500" />
              <span>{program.division}</span>
            </div>
          </div>

          <div className="mt-7">
            <Link
              href={`/program/${program.slug}`}
              className="inline-flex items-center gap-2 text-base font-semibold text-emerald-600 transition-all duration-300 hover:gap-4"
            >
              Lihat Detail Program
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
