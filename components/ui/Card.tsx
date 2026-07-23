import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

const cardVariants = cva(
  [
    "relative overflow-hidden",
    "rounded-3xl",
    "border border-white/10",
    "bg-white/[0.03]",
    "backdrop-blur-xl",
    "transition-all duration-500 ease-out",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "shadow-lg shadow-black/20",

        elevated: "shadow-2xl shadow-black/30",

        glass: "bg-white/[0.05] border-white/15 backdrop-blur-2xl",

        outline: "bg-transparent border-white/10 shadow-none",
      },

      hover: {
        true: [
          "hover:-translate-y-2",
          "hover:border-white/20",
          "hover:bg-white/[0.05]",
          "hover:shadow-2xl",
          "hover:shadow-black/40",
          "before:absolute",
          "before:inset-0",
          "before:rounded-3xl",
          "before:bg-gradient-to-br",
          "before:from-white/[0.05]",
          "before:to-transparent",
          "before:opacity-0",
          "hover:before:opacity-100",
          "before:transition-opacity",
          "before:duration-500",
        ].join(" "),

        false: "",
      },

      padding: {
        none: "p-0",

        sm: "p-5",

        md: "p-7",

        lg: "p-9",
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
