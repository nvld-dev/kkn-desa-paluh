import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const avatarVariants = cva(
  "relative overflow-hidden rounded-full border-2 border-slate-700 bg-slate-800",
  {
    variants: {
      size: {
        xs: "h-10 w-10",
        sm: "h-14 w-14",
        md: "h-20 w-20",
        lg: "h-28 w-28",
        xl: "h-40 w-40",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function Avatar({
  src,
  alt,
  size,
  className,
  priority = false,
}: AvatarProps) {
  return (
    <div className={cn(avatarVariants({ size }), className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width:768px) 80px, 160px"
      />
    </div>
  );
}
