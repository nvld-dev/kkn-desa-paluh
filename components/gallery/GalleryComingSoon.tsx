import { Camera, Clock3 } from "lucide-react";

interface GalleryComingSoonProps {
  title?: string;
  description?: string;
}

export default function GalleryComingSoon({
  title = "Gallery Coming Soon",
  description = "Dokumentasi kegiatan KKN Kelompok 11 Desa Paluh akan mulai ditampilkan setelah program kerja dan aktivitas lapangan berlangsung.",
}: GalleryComingSoonProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center backdrop-blur-xl">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(16,185,129,.08), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-lg flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10">
          <Camera className="h-8 w-8 text-emerald-400" />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-white">{title}</h2>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
          <Clock3 className="h-4 w-4" />
          Stay tuned for upcoming moments
        </div>
      </div>
    </div>
  );
}
