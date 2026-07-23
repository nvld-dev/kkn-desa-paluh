import { cn } from "@/lib/cn";

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={cn("mb-16 flex flex-col gap-5", alignment, className)}>
      {badge && (
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm font-semibold tracking-wide text-slate-200 shadow-lg shadow-black/20 backdrop-blur-xl">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}

      {/* Accent Line */}
      <div
        className={cn(
          "mt-2 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400",
          align === "left" ? "w-24" : "mx-auto w-24",
        )}
      />
    </div>
  );
}
