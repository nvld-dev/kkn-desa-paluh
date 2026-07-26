"use client";

import {
  Blocks,
  CalendarDays,
  FolderKanban,
  ShieldCheck,
  Users,
} from "lucide-react";

import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/cn";

interface ProgramHeroProps {
  totalPrograms: number;
  totalCategories: number;
  totalParticipants: number;
  totalDays: number;
}

export default function ProgramHero({
  totalPrograms,
  totalCategories,
  totalParticipants,
  totalDays,
}: ProgramHeroProps) {
  const { theme } = useTheme();

  const stats = [
    {
      icon: FolderKanban,
      value: totalPrograms,
      label: "Program",
    },
    {
      icon: Blocks,
      value: totalCategories,
      label: "Kategori",
    },
    {
      icon: Users,
      value: `${totalParticipants}+`,
      label: "Peserta",
    },
    {
      icon: CalendarDays,
      value: totalDays,
      label: "Hari",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center lg:px-8">
        {/* Badge */}
        <div
          className={cn(
            "mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            theme === "dark"
              ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
              : "border-emerald-200 bg-emerald-50 text-emerald-700",
          )}
        >
          <FolderKanban className="h-4 w-4" />
          Program Kerja
        </div>

        {/* Title */}
        <h1
          className={cn(
            "mt-6 text-4xl font-bold tracking-tight transition-colors duration-300 md:text-6xl",
            theme === "dark" ? "text-white" : "text-slate-900",
          )}
        >
          Membangun Desa Melalui
          <br />
          <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
            Program Nyata
          </span>
        </h1>

        {/* Description */}
        {/* <p
          className={cn(
            "mx-auto mt-6 max-w-2xl text-lg leading-8 transition-colors duration-300",
            theme === "dark" ? "text-slate-400" : "text-slate-600",
          )}
        >
          Seluruh kegiatan yang dirancang dan dilaksanakan oleh Tim KKN 11 Desa
          Paluh sebagai bentuk pengabdian kepada masyarakat melalui kolaborasi,
          inovasi, dan aksi nyata.
        </p> */}

        {/* Statistics */}
        <div className="mt-12 grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className=
                  "rounded-3xl  p-6 transition-all duration-300 hover:-translate-y-1"
              >
                {/* <div
                  className={cn(
                    "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl",
                    theme === "dark"
                      ? "bg-emerald-500/10 text-emerald-300"
                      : "bg-emerald-100 text-emerald-700",
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div> */}

                <div
                  className={cn(
                    "text-3xl font-black",
                    theme === "dark" ? "text-white" : "text-slate-900",
                  )}
                >
                  {item.value}
                </div>

                <div
                  className={cn(
                    "mt-2 text-sm",
                    theme === "dark" ? "text-slate-400" : "text-slate-500",
                  )}
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div
          className={cn(
            "mt-10 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm",
            theme === "dark" ? "text-slate-400" : "text-slate-500",
          )}
        >
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          Seluruh program didokumentasikan secara transparan dan dapat diakses
          oleh masyarakat.
        </div>
      </div>
    </section>
  );
}
