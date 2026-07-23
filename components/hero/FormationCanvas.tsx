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
    <div className="relative mx-auto h-[900px] w-full overflow-visible">
      {items.map(({ member, position }) => (
        <div
          key={member.id}
          className="absolute"
          style={{
            // 144px = half of CommitteeCard's fixed w-72 (288px) width,
            // baked in here since this wrapper can't use a centering
            // transform (see note on data-card's fixed-position spotlight).
            left: `calc(50% + ${position.x - 144}px)`,
            top: `${position.y}px`,
          }}
          data-node
          data-member-id={member.id}
          data-division={member.division}
          data-x={position.x}
          data-y={position.y}
        >
          {/* Animated Layer */}
          <div
            data-card
            className="origin-center will-change-[opacity,transform]"
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
  );
}
