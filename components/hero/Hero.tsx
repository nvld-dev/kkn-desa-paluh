"use client";

import { useRef, useState } from "react";

import HeroBackground from "@/components/effects/HeroBackground";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import FormationCanvas from "./FormationCanvas";

import { members } from "@/data/members";
import { useFormationAnimation } from "@/hooks/useFormationAnimation";

export default function Hero() {
  /* -------------------------------- */
  /* Refs                            */
  /* -------------------------------- */

  const heroRef = useRef<HTMLElement>(null);

  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  /* -------------------------------- */
  /* State                           */
  /* -------------------------------- */

  const [selectedId, setSelectedId] = useState<number>();

  /* -------------------------------- */
  /* Animation                       */
  /* -------------------------------- */

  useFormationAnimation(heroRef, {
    badgeRef,
    titleRef,
    descriptionRef,
    buttonRef,
  });

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative isolate min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background */}
      <HeroBackground />

      <Container className="relative z-10 flex min-h-screen flex-col justify-center py-28">
        {/* ============================ */}
        {/* Hero Header                  */}
        {/* ============================ */}

        <header className="mx-auto mb-24 max-w-4xl text-center">
          <div ref={badgeRef}>
            <Badge size="lg">KKN Desa Paluh</Badge>
          </div>

          <h1
            ref={titleRef}
            className="mt-6 text-5xl font-black tracking-tight text-white lg:text-7xl"
          >
            Dynamic Committee
            <br />
            Formation
          </h1>

          <p
            ref={descriptionRef}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400"
          >
            Mengenal struktur kepanitiaan KKN Desa Paluh melalui pengalaman
            interaktif dengan animasi pembentukan organisasi secara dinamis dan
            modern.
          </p>

          <div ref={buttonRef} className="mt-10 flex justify-center">
            <Button size="lg">Lihat Dokumentasi</Button>
          </div>
        </header>

        {/* ============================ */}
        {/* Committee Formation          */}
        {/* ============================ */}

        <FormationCanvas
          members={members}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </Container>
    </section>
  );
}
