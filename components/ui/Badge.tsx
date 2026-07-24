"use client";

import { useTheme } from "@/components/theme/useTheme";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border font-semibold tracking-wide transition-all duration-300",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        danger: "",
        outline: "",
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
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export default function Badge({
  className,
  variant = "primary",
  size,
  ...props
}: BadgeProps) {
  const { theme } = useTheme();

  const variantStyles: Record<
    NonNullable<VariantProps<typeof badgeVariants>["variant"]>,
    string
  > = theme === "dark"
    ? {
        primary:
          "border-emerald-400/20 bg-emerald-400/10 text-emerald-200 shadow-lg shadow-emerald-500/10 backdrop-blur-xl",

        secondary:
          "border-white/10 bg-white/5 text-slate-200 shadow-lg shadow-black/10 backdrop-blur-xl",

        success:
          "border-green-400/20 bg-green-400/10 text-green-200 shadow-lg shadow-green-500/10 backdrop-blur-xl",

        warning:
          "border-yellow-400/20 bg-yellow-400/10 text-yellow-200 shadow-lg shadow-yellow-500/10 backdrop-blur-xl",

        danger:
          "border-red-400/20 bg-red-400/10 text-red-200 shadow-lg shadow-red-500/10 backdrop-blur-xl",

        outline:
          "border-white/15 bg-transparent text-slate-300 hover:bg-white/5",
      }
    : {
        primary:
          "border-emerald-300 bg-emerald-50 text-emerald-700 shadow-sm shadow-emerald-100",

        secondary: "border-slate-300 bg-slate-50 text-slate-700 shadow-sm",

        success: "border-green-300 bg-green-50 text-green-700 shadow-sm",

        warning: "border-yellow-300 bg-yellow-50 text-yellow-700 shadow-sm",

        danger: "border-red-300 bg-red-50 text-red-700 shadow-sm",

        outline: "border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
      };

  return (
    <span
      className={cn(
        badgeVariants({ variant, size }),
        variantStyles[variant ?? "primary"],
        className,
      )}
      {...props}
    />
  );
}
