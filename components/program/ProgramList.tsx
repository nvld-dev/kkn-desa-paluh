"use client";

import ProgramCard from "@/components/program/ProgramCard";

import { type Program } from "@/data/programs";

interface ProgramListProps {
  programs: Program[];
}

export default function ProgramList({ programs }: ProgramListProps) {
  return (
    <div className="flex flex-col gap-8 lg:gap-12">
      {programs.map((program, index) => (
        <ProgramCard
          key={program.id}
          program={program}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}
