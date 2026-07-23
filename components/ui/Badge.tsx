import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-blue-600/15 text-blue-400",

        secondary: "bg-slate-700 text-slate-200",

        success: "bg-green-600/15 text-green-400",

        warning: "bg-yellow-500/15 text-yellow-400",

        danger: "bg-red-600/15 text-red-400",

        outline: "border border-slate-600 bg-transparent text-slate-300",
      },

      size: {
        sm: "text-[10px] px-2 py-0.5",

        md: "text-xs px-3 py-1",

        lg: "text-sm px-4 py-1.5",
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
