import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/30 focus:ring-emerald-400",

        secondary:
          "bg-white/5 border border-white/10 backdrop-blur-xl text-white hover:bg-white/10 hover:-translate-y-1 hover:border-white/20",

        outline:
          "border border-white/15 bg-transparent text-white hover:bg-white/5 hover:border-white/25",

        ghost: "bg-transparent text-slate-200 hover:bg-white/5",

        danger:
          "bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg shadow-red-500/20 hover:-translate-y-1 hover:shadow-red-500/30",
      },

      size: {
        sm: "h-10 px-5 text-sm",

        md: "h-12 px-7",

        lg: "h-14 px-9 text-lg",

        icon: "h-12 w-12",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
