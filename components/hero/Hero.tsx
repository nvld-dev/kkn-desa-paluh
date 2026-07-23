"use client";

import { Dispatch, SetStateAction, useRef, useState } from "react";

import HeroBackground from "@/components/effects/HeroBackground";
import Spotlight from "@/components/hero/Spotlight";
import FormationCanvas from "@/components/hero/FormationCanvas";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import { members } from "@/data/members";
import { useFormationAnimation } from "@/hooks/useFormationAnimation";

interface HeroProps {
  isIntro: boolean;
  setIsIntro: Dispatch<SetStateAction<boolean>>;
}

export default function Hero({ isIntro, setIsIntro }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const [selectedId, setSelectedId] = useState<number>();

  const [spotlightMember, setSpotlightMember] = useState<
    (typeof members)[number] | null
  >(null);

  useFormationAnimation(heroRef, {
    badgeRef,
    titleRef,
    descriptionRef,
    buttonRef,
    members,
    setSpotlightMember,
    setIsIntro,
  });

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative isolate min-h-screen overflow-hidden bg-slate-950"
    >
      <HeroBackground />

      <Spotlight member={spotlightMember} visible={isIntro} />

      <Container className="relative z-10 flex min-h-screen flex-col justify-center py-24">
        <header className="relative z-10 mx-auto mt-20 mb-24 max-w-4xl px-4 text-center">
          {/* Logo */}
          <div
            ref={badgeRef}
            className="mb-5 flex items-center justify-center gap-6"
          >
            <img
              src="/images/logo/logo-umri.png"
              alt="Logo Universitas"
              className="h-26 w-26 object-contain drop-shadow-2xl"
            />

            <div className="h-16 w-px bg-white/15" />

            <img
              src="/images/logo/logo-kkn.png"
              alt="Logo KKN"
              className="h-24 w-24 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Badge */}
          <div className="flex justify-center">
            <Badge
              size="lg"
              className="border-white/10 bg-white/5 backdrop-blur-xl"
            >
              KKN 2026
            </Badge>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="mt-5 text-5xl font-black tracking-tight text-white lg:text-7xl"
          >
            DESA PALUH
          </h1>

          <div ref={buttonRef} className="mt-10 flex justify-center">
            <Button
              size="lg"
              className={
                isIntro
                  ? "pointer-events-none opacity-0"
                  : "opacity-100 transition-opacity duration-500"
              }
            >
              Lihat Dokumentasi
            </Button>
          </div>
        </header>
      </Container>

      <div className="relative left-1/2 z-10 w-screen -translate-x-1/2 overflow-x-auto">
        <FormationCanvas
          members={members}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </div>
    </section>
  );
}
