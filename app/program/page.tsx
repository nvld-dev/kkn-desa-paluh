"use client";

import { useMemo, useState } from "react";

import Background from "@/components/effects/Background";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";

import ProgramHero from "@/components/program/ProgramHero";
import ProgramFilter from "@/components/program/ProgramFilter";
import ProgramList from "@/components/program/ProgramList";
// import ProgramCTA from "@/components/program/ProgramCTA";

import {
  getPrograms,
  programCategories,
  type ProgramCategory,
} from "@/data/programs";

export default function ProgramPage() {
  const programs = getPrograms();

  const [active, setActive] = useState<ProgramCategory | "All">("All");

  const filteredPrograms = useMemo(() => {
    if (active === "All") return programs;

    return programs.filter((program) => program.category === active);
  }, [active, programs]);

  const totalPrograms = programs.length;

  const totalCategories = programCategories.length;

  // sementara dummy
  const totalParticipants = 100;

  // sementara dummy
  const totalDays = 30;

  return (
    <>
      <Navbar />

      <Background />

      <ProgramHero
        totalPrograms={totalPrograms}
        totalCategories={totalCategories}
        totalParticipants={totalParticipants}
        totalDays={totalDays}
      />

      <section className="relative py-16 lg:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:px-8">
          <ProgramFilter active={active} onChange={setActive} />

          <ProgramList programs={filteredPrograms} />
        </div>
      </section>

      {/* <ProgramCTA /> */}

      <Footer />

      <ScrollToTop />
    </>
  );
}
