"use client";

import { useMemo } from "react";

import CommitteeCard from "./CommitteeCard";

import { formation } from "@/data/formation";
import type { Member } from "@/types/member";

interface FormationCanvasProps {
  members: Member[];
  selectedId?: number;
  onSelect?: (id: number) => void;
}

export default function FormationCanvas({
  members,
  selectedId,
  onSelect,
}: FormationCanvasProps) {
  const memberMap = useMemo(() => {
    return new Map(members.map((member) => [member.id, member]));
  }, [members]);

  const items = useMemo(() => {
    return formation
      .map((position) => {
        const member = memberMap.get(position.memberId);

        if (!member) return null;

        return {
          member,
          position,
        };
      })
      .filter(
        (
          item,
        ): item is {
          member: Member;
          position: (typeof formation)[number];
        } => item !== null,
      );
  }, [memberMap]);

  return (
    <>
      {/* ===========================
          Desktop (tetap)
      ============================ */}
      <div className="relative mx-auto hidden h-[1400px] w-full overflow-visible lg:block">
        {items.map(({ member, position }) => (
          <div
            key={member.id}
            className="absolute"
            style={{
              left: `calc(50% + ${position.x - 144 + 60}px)`,
              top: `${position.y}px`,
            }}
            data-node
            data-member-id={member.id}
            data-division={member.division}
            data-x={position.x}
            data-y={position.y}
          >
            <div
              data-card
              className="origin-center will-change-[opacity,transform]"
              style={{ opacity: 0 }}
            >
              <CommitteeCard
                member={member}
                active={selectedId === member.id}
                onClick={() => onSelect?.(member.id)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ===========================
          Mobile
      ============================ */}
      <div className="space-y-5 lg:hidden">
        {/* Ketua */}
        <div className="flex justify-center">
          {items.slice(0, 1).map(({ member }) => (
            <CommitteeCard
              key={member.id}
              member={member}
              active={selectedId === member.id}
              onClick={() => onSelect?.(member.id)}
            />
          ))}
        </div>

        {/* Sekretaris */}
        <div className="grid grid-cols-2 justify-items-center gap-4">
          {items.slice(1, 3).map(({ member }) => (
            <CommitteeCard
              key={member.id}
              member={member}
              active={selectedId === member.id}
              onClick={() => onSelect?.(member.id)}
            />
          ))}
        </div>

        {/* Bendahara - Humas - Kominfo */}
        <div className="grid grid-cols-2 justify-items-center gap-4">
          {items.slice(3, 7).map(({ member }) => (
            <CommitteeCard
              key={member.id}
              member={member}
              active={selectedId === member.id}
              onClick={() => onSelect?.(member.id)}
            />
          ))}
        </div>

        {/* Kominfo - Acara */}
        <div className="grid grid-cols-2 justify-items-center gap-4">
          {items.slice(7).map(({ member }) => (
            <CommitteeCard
              key={member.id}
              member={member}
              active={selectedId === member.id}
              onClick={() => onSelect?.(member.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
