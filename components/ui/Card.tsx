import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

const cardVariants = cva(
  [
    "rounded-2xl",
    "border",
    "border-slate-800",
    "bg-slate-900/70",
    "backdrop-blur-md",
    "transition-all",
    "duration-300",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "",

        elevated: "shadow-lg shadow-blue-950/20",

        glass: "border-white/10 bg-white/5 backdrop-blur-xl",

        outline: "bg-transparent",
      },

      hover: {
        true: [
          "hover:-translate-y-1",
          "hover:border-blue-500/40",
          "hover:shadow-xl",
          "hover:shadow-blue-500/10",
        ].join(" "),

        false: "",
      },

      padding: {
        none: "p-0",

        sm: "p-4",

        md: "p-6",

        lg: "p-8",
      },
    },

    defaultVariants: {
      variant: "default",
      hover: true,
      padding: "md",
    },
  },
);

interface CardProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

export default function Card({
  className,
  variant,
  hover,
  padding,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({
          variant,
          hover,
          padding,
        }),
        className,
      )}
      {...props}
    />
  );
}
