"use client";

import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
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
      padding="md"
      className={cn(
        "group w-72 cursor-pointer select-none",
        "transition-all duration-300",
        active && "ring-2 ring-blue-500",
        className,
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center">
        <Avatar
          src={member.photo}
          alt={member.name}
          size="lg"
          className="transition-transform duration-300 group-hover:scale-105"
        />

        <h3 className="mt-5 text-xl font-bold text-white">{member.name}</h3>

        <p className="mt-1 text-sm text-slate-400">{member.role}</p>

        <div className="mt-4">
          <Badge variant="primary">{member.division}</Badge>
        </div>

        {member.motto && (
          <p className="mt-5 text-sm leading-6 text-slate-400 italic">
            "{member.motto}"
          </p>
        )}
      </div>
    </Card>
  );
}
