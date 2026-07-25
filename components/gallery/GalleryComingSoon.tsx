import { cn } from "@/lib/cn";
import { useTheme } from "@/components/theme/ThemeProvider";

import { Camera, Clock3 } from "lucide-react";

interface GalleryComingSoonProps {
  title?: string;
  description?: string;
}

export default function GalleryComingSoon({
  title = "Gallery Coming Soon",
  description = "Dokumentasi kegiatan KKN Kelompok 11 Desa Paluh akan mulai ditampilkan setelah program kerja dan aktivitas lapangan berlangsung.",
}: GalleryComingSoonProps) {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl px-6 py-12 text-center transition-all duration-300",

        theme === "dark"
          ? "border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          : "border border-slate-200 bg-white shadow-sm",
      )}
    >
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at top, rgba(16,185,129,.08), transparent 70%)",
          opacity: theme === "dark" ? 1 : 0.6,
        }}
      />

      <div className="relative mx-auto flex max-w-lg flex-col items-center">
        <div
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300",

            theme === "dark"
              ? "border border-emerald-400/20 bg-emerald-500/10"
              : "border border-emerald-200 bg-emerald-50",
          )}
        >
          <Camera
            className={cn(
              "h-8 w-8",

              theme === "dark" ? "text-emerald-400" : "text-emerald-600",
            )}
          />
        </div>

        <h2
          className={cn(
            "mt-6 text-2xl font-bold transition-colors duration-300",

            theme === "dark" ? "text-white" : "text-slate-900",
          )}
        >
          {title}
        </h2>

        <p
          className={cn(
            "mt-4 max-w-md text-sm leading-7 transition-colors duration-300",

            theme === "dark" ? "text-slate-400" : "text-slate-600",
          )}
        >
          {description}
        </p>

        <div
          className={cn(
            "mt-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",

            theme === "dark"
              ? "border border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
              : "border border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm",
          )}
        >
          <Clock3
            className={cn(
              "h-4 w-4",

              theme === "dark" ? "text-emerald-300" : "text-emerald-600",
            )}
          />
          Stay tuned for upcoming moments
        </div>
      </div>
    </div>
  );
}
