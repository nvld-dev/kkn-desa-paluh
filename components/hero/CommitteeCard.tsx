"use client";

import Image from "next/image";

import Card from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import type { Member } from "@/types/member";

interface CommitteeCardProps {
  member: Member;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function CommitteeCard({
  member,
  active = false,
  onClick,
  className,
}: CommitteeCardProps) {
  return (
    <Card
      variant="glass"
      padding="none"
      onClick={onClick}
      className={cn(
        "group relative w-44 cursor-pointer overflow-hidden rounded-3xl select-none",
        "border border-white/10",
        "bg-black/30 backdrop-blur-xl",
        "transition-all duration-500",
        "hover:-translate-y-2",
        "hover:border-white/20",
        "hover:shadow-2xl hover:shadow-black/40",
        active &&
          "border-emerald-400/40 shadow-xl ring-1 shadow-emerald-500/10 ring-emerald-400/30",
        className,
      )}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
      </div>

      {/* Photo */}
      <div
        data-card-photo
        className="relative aspect-[4/5] overflow-hidden bg-black"
      >
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Name Plate */}
      <div className="relative border-t border-white/10 bg-black/40 px-4 py-4 backdrop-blur-xl">
        <h3 className="truncate text-center text-[15px] font-semibold text-white">
          {member.name}
        </h3>
      </div>
    </Card>
  );
}
