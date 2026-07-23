import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border font-semibold tracking-wide backdrop-blur-xl transition-all duration-300",
  {
    variants: {
      variant: {
        primary:
          "border-emerald-400/20 bg-emerald-400/10 text-emerald-200 shadow-lg shadow-emerald-500/10",

        secondary:
          "border-white/10 bg-white/5 text-slate-200 shadow-lg shadow-black/10",

        success:
          "border-green-400/20 bg-green-400/10 text-green-200 shadow-lg shadow-green-500/10",

        warning:
          "border-yellow-400/20 bg-yellow-400/10 text-yellow-200 shadow-lg shadow-yellow-500/10",

        danger:
          "border-red-400/20 bg-red-400/10 text-red-200 shadow-lg shadow-red-500/10",

        outline:
          "border-white/15 bg-transparent text-slate-300 hover:bg-white/5",
      },

      size: {
        sm: "px-3 py-1 text-[11px]",

        md: "px-4 py-1.5 text-xs",

        lg: "px-5 py-2 text-sm",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export default function Badge({
  className,
  variant,
  size,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}