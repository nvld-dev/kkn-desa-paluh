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
        "group w-56 cursor-pointer overflow-hidden rounded-2xl select-none",
        "transition-all duration-300",
        "border border-white/10",
        "hover:-translate-y-1 hover:border-blue-400/40",
        active && "ring-2 ring-blue-500",
        className,
      )}
    >
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Name Plate */}
      <div className="border-t border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur">
        <h3 className="truncate text-center text-base font-semibold text-white">
          {member.name}
        </h3>
      </div>
    </Card>
  );
}
