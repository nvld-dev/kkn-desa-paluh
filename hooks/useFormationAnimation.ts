"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

import { ANIMATION } from "@/constants/animation";
import type { Member } from "@/types/member";

gsap.registerPlugin(Flip, useGSAP);

interface HeroRefs {
  badgeRef: RefObject<HTMLDivElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  descriptionRef: RefObject<HTMLParagraphElement | null>;
  buttonRef: RefObject<HTMLDivElement | null>;
}

interface FormationAnimationOptions extends HeroRefs {
  members: Member[];
  setSpotlightMember: (member: Member | null) => void;
  setIsIntro: (value: boolean) => void;
}

const tweenToPromise = (tween: gsap.core.Tween) =>
  new Promise<void>((resolve) => {
    tween.eventCallback("onComplete", resolve);
  });

/** Waits a frame so a React state update (new photo/name) is painted before we animate it. */
const nextFrame = () =>
  new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });

export function useFormationAnimation(
  containerRef: RefObject<HTMLElement | null>,
  {
    badgeRef,
    titleRef,
    descriptionRef,
    buttonRef,
    members,
    setSpotlightMember,
    setIsIntro,
  }: FormationAnimationOptions,
) {
  useGSAP(
    () => {
      if (!containerRef.current) return;

      let cancelled = false;
      let introFinished = false;

      const shouldStop = () => cancelled || introFinished;

      let masterTimeline: gsap.core.Timeline | null = null;

      const delayedCalls: gsap.core.Tween[] = [];
      let activeFlyingPhoto: HTMLElement | null = null;
      const wait = (seconds: number) =>
        new Promise<void>((resolve) => {
          const call = gsap.delayedCall(seconds, resolve);

          delayedCalls.push(call);

          call.eventCallback("onComplete", resolve);
        });

      /* -------------------------------- */
      /* Hero Elements                    */
      /* -------------------------------- */

      const heroElements = [
        badgeRef.current,
        titleRef.current,
        descriptionRef.current,
        buttonRef.current,
      ];

      const getGridCard = (memberId: number) =>
        containerRef.current!.querySelector<HTMLElement>(
          `[data-member-id="${memberId}"] [data-card]`,
        );

      const getSpotlightPhoto = () =>
        containerRef.current!.querySelector<HTMLElement>(
          "[data-spotlight-photo]",
        );

      const getSpotlightInfo = () =>
        containerRef.current!.querySelector<HTMLElement>(
          "[data-spotlight-info]",
        );

      const allCards = members
        .map((member) => getGridCard(member.id))
        .filter((el): el is HTMLElement => Boolean(el));

      // How many members share each division, so a division's total
      // spotlight duration (ANIMATION.duration.spotlight) can be split
      // evenly across the individuals in it.
      const divisionCounts = members.reduce<Record<string, number>>(
        (acc, member) => {
          acc[member.division] = (acc[member.division] ?? 0) + 1;
          return acc;
        },
        {},
      );

      const finishIntro = () => {
        if (introFinished) return;

        introFinished = true;

        delayedCalls.forEach((call) => call.kill());

        masterTimeline?.kill();

        // Hapus clone FLIP jika masih ada
        activeFlyingPhoto?.remove();
        activeFlyingPhoto = null;

        setSpotlightMember(null);

        setIsIntro(false);

        gsap.killTweensOf(allCards);

        // Reset semua transform hasil animasi
        gsap.set(allCards, {
          clearProps: "transform",
          opacity: 1,
          scale: 1,
        });

        gsap.to(allCards, {
          y: "+=8",
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            each: 0.08,
            from: "random",
          },
        });
      };

      const skipIntro = () => {
        gsap.set(allCards, {
          opacity: 1,
          scale: 1,
        });

        finishIntro();
      };
      /* -------------------------------- */
      /* Reduced Motion                   */
      /* -------------------------------- */

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set([...heroElements, ...allCards], {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          filter: "blur(0px)",
        });

        setSpotlightMember(null);

        return;
      }

      /* -------------------------------- */
      /* Initial State                    */
      /* -------------------------------- */

      gsap.set(heroElements, { opacity: 0, y: 40 });

      const skipEvents = () => {
        if (!introFinished) {
          skipIntro();
        }
      };

      window.addEventListener("wheel", skipEvents, {
        passive: true,
      });

      window.addEventListener("touchmove", skipEvents, {
        passive: true,
      });

      const handleKeyDown = (e: KeyboardEvent) => {
        if (
          e.code === "Space" ||
          e.code === "ArrowDown" ||
          e.code === "PageDown"
        ) {
          skipEvents();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      // Every grid card stays invisible at its slot until its turn in the spotlight.
      gsap.set(allCards, { opacity: 0 });

      setSpotlightMember(null);

      /* -------------------------------- */
      /* Hero Intro                       */
      /* -------------------------------- */

      masterTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      masterTimeline.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      });

      masterTimeline.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
        },
        "-=0.15",
      );

      masterTimeline.to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.35",
      );

      masterTimeline.to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.25",
      );

      // Hero tetap tampil sekitar 2 detik sebelum Spotlight dimulai
      masterTimeline.to({}, { duration: 1 });

      /* -------------------------------- */
      /* Spotlight → Grid, one member at a time */
      /* -------------------------------- */

      const spotlightThenSettle = async (member: Member) => {
        const gridCard = getGridCard(member.id);
        if (!gridCard) return;

        // 1. Swap the <Spotlight /> component to this member and wait a
        //    frame so the new photo/name/role are actually painted.
        setSpotlightMember(member);
        await nextFrame();
        if (shouldStop()) return;

        const photoEl = getSpotlightPhoto();
        const infoEl = getSpotlightInfo();
        if (!photoEl || !infoEl) return;

        // 2. Entrance: 3D Flip + info panel
        gsap.set(photoEl, {
          opacity: 0,
          rotateY: -90,
          transformPerspective: 1200,
          transformOrigin: "center center",
          force3D: true,
          backfaceVisibility: "hidden",
        });

        gsap.set(infoEl, {
          opacity: 0,
          x: 40,
        });

        await tweenToPromise(
          gsap
            .timeline()
            .to(photoEl, {
              opacity: 1,
              rotateY: 0,
              duration: 0.75,
              ease: "power3.out",
            })
            .to(
              infoEl,
              {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: "power3.out",
              },
              "-=0.35",
            ) as unknown as gsap.core.Tween,
        );
        if (shouldStop()) return;

        // 3. Hold — this member's share of their division's total spotlight time.
        const divisionKey =
          member.division.toLowerCase() as keyof typeof ANIMATION.duration.spotlight;
        const totalDivisionDuration =
          ANIMATION.duration.spotlight[divisionKey] ?? 1.8;
        const memberCount = divisionCounts[member.division] ?? 1;
        const holdDuration = totalDivisionDuration / memberCount;

        await wait(Math.max(holdDuration + 1));
        if (shouldStop()) return;

        // Fade out info
        await tweenToPromise(
          gsap.to(infoEl, {
            opacity: 0,
            x: 24,
            duration: 0.25,
            ease: "power2.out",
          }),
        );
        if (shouldStop()) return;
        // Clone spotlight photo
        const flyingPhoto = photoEl.cloneNode(true) as HTMLElement;

        activeFlyingPhoto = flyingPhoto;

        document.body.appendChild(flyingPhoto);

        if (shouldStop()) {
          flyingPhoto.remove();

          if (activeFlyingPhoto === flyingPhoto) {
            activeFlyingPhoto = null;
          }

          return;
        }
        const photoRect = photoEl.getBoundingClientRect();

        gsap.set(flyingPhoto, {
          position: "fixed",
          left: photoRect.left,
          top: photoRect.top,
          width: photoRect.width,
          height: photoRect.height,
          margin: 0,
          zIndex: 9999,
          pointerEvents: "none",
          transformOrigin: "center center",
        });

        // Sembunyikan spotlight asli
        gsap.set(photoEl, { opacity: 0 });

        // Ambil target foto pada CommitteeCard
        const photoTarget = gridCard.querySelector(
          "[data-card-photo]",
        ) as HTMLElement;

        if (!photoTarget) {
          flyingPhoto.remove();

          if (activeFlyingPhoto === flyingPhoto) {
            activeFlyingPhoto = null;
          }

          return;
        }

        // Simpan state clone
        const state = Flip.getState(flyingPhoto);

        // Paksa clone mengikuti ukuran & posisi target
        Flip.fit(flyingPhoto, photoTarget, {
          scale: true,
        });

        // Reveal card masih hidden
        gsap.set(gridCard, {
          opacity: 0,
        });

        // Animasi FLIP
        await tweenToPromise(
          Flip.from(state, {
            absolute: true,
            scale: true,
            duration: 0.9,
            ease: "power3.inOut",
            onComplete: () => {
              if (!shouldStop()) {
                gsap.set(gridCard, {
                  opacity: 1,
                });
              }

              flyingPhoto.remove();

              if (activeFlyingPhoto === flyingPhoto) {
                activeFlyingPhoto = null;
              }
            },
          }) as unknown as gsap.core.Tween,
        );
        if (shouldStop()) {
          activeFlyingPhoto?.remove();
          activeFlyingPhoto = null;
          return;
        }
      };

      const runSequence = async () => {
        await tweenToPromise(
          masterTimeline.play() as unknown as gsap.core.Tween,
        );
        if (shouldStop()) return;

        for (const member of members) {
          if (cancelled) return;
          // eslint-disable-next-line no-await-in-loop
          await spotlightThenSettle(member);
          if (shouldStop()) return;
        }

        if (cancelled) return;

        finishIntro();

        /* ---------- Formation Complete ---------- */

        gsap.to(allCards, {
          scale: 1,
          duration: 0.2,
        });

        gsap.to(allCards, {
          y: "+=8",
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            each: 0.08,
            from: "random",
          },
        });
      };

      runSequence();

      return () => {
        cancelled = true;

        masterTimeline?.kill();

        delayedCalls.forEach((call) => call.kill());

        gsap.killTweensOf(allCards);

        window.removeEventListener("wheel", skipEvents);
        window.removeEventListener("touchmove", skipEvents);
        window.removeEventListener("keydown", handleKeyDown);
      };
    },
    {
      scope: containerRef,
      revertOnUpdate: true,
    },
  );
}
