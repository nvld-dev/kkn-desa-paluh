import { cn } from "@/lib/cn";
import { useTheme } from "@/components/theme/useTheme";

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
  const { theme } = useTheme();
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={cn("mb-16 flex flex-col gap-5", alignment, className)}>
      {badge && (
        <span
          className={cn(
            "inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-300",

            theme === "dark"
              ? "border border-white/10 bg-white/[0.04] text-slate-200 shadow-lg shadow-black/20 backdrop-blur-xl"
              : "border border-slate-200 bg-white text-slate-700 shadow-sm",
          )}
        >
          {badge}
        </span>
      )}

      <h2
        className={cn(
          "text-4xl font-black tracking-tight transition-colors duration-300 md:text-6xl",

          theme === "dark" ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "max-w-2xl text-lg leading-8 transition-colors duration-300",

            theme === "dark" ? "text-slate-400" : "text-slate-600",
          )}
        >
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
