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
    <div className={cn("mb-14 flex flex-col gap-4", alignment, className)}>
      {badge && (
        <span className="rounded-full bg-blue-500/10 px-4 py-1 text-sm font-semibold text-blue-400">
          {badge}
        </span>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
