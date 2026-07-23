"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

import { ANIMATION } from "@/constants/animation";

gsap.registerPlugin(Flip, useGSAP);

interface HeroRefs {
  badgeRef: RefObject<HTMLDivElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  descriptionRef: RefObject<HTMLParagraphElement | null>;
  buttonRef: RefObject<HTMLDivElement | null>;
}

/** Divisions in the order they get spotlighted, per the PRD timeline. */
const DIVISION_ORDER = [
  "Ketua",
  "Sekretaris",
  "Bendahara",
  "Humas",
  "Kominfo",
  "Acara",
] as const;

/** Horizontal spread (px) applied to each card when a division has more than one member. */
const GROUP_OFFSETS: Record<number, number[]> = {
  1: [0],
  2: [-190, 190],
  3: [-320, 0, 320],
};

/** How large a division's cards appear during their spotlight moment. */
const SPOTLIGHT_SCALE: Record<number, number> = {
  1: 1.4,
  2: 1.1,
  3: 0.9,
};

const wait = (seconds: number) =>
  new Promise<void>((resolve) => {
    gsap.delayedCall(seconds, resolve);
  });

const tweenToPromise = (tween: gsap.core.Tween) =>
  new Promise<void>((resolve) => {
    tween.eventCallback("onComplete", resolve);
  });

export function useFormationAnimation(
  containerRef: RefObject<HTMLElement | null>,
  { badgeRef, titleRef, descriptionRef, buttonRef }: HeroRefs,
) {
  useGSAP(
    () => {
      if (!containerRef.current) return;

      let cancelled = false;

      /* -------------------------------- */
      /* Hero Elements                    */
      /* -------------------------------- */

      const heroElements = [
        badgeRef.current,
        titleRef.current,
        descriptionRef.current,
        buttonRef.current,
      ];

      const getDivisionCards = (division: string) =>
        gsap.utils.toArray<HTMLElement>(
          `[data-division="${division}"] [data-card]`,
          containerRef.current,
        );

      const allCards = DIVISION_ORDER.flatMap((division) =>
        getDivisionCards(division),
      );

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

        return;
      }

      /* -------------------------------- */
      /* Initial State                    */
      /* -------------------------------- */

      gsap.set(heroElements, { opacity: 0, y: 40 });

      // Every card stays invisible at its grid slot until its division's turn.
      gsap.set(allCards, { opacity: 0 });

      /* -------------------------------- */
      /* Hero Intro                       */
      /* -------------------------------- */

      const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      introTl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.45 });
      introTl.to(
        titleRef.current,
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.15",
      );
      introTl.to(
        descriptionRef.current,
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.35",
      );
      introTl.to(
        buttonRef.current,
        { opacity: 1, y: 0, duration: 0.45 },
        "-=0.25",
      );

      /* -------------------------------- */
      /* Spotlight → Formation, per division */
      /* -------------------------------- */

      const spotlightDivision = async (division: string) => {
        const cards = getDivisionCards(division);

        if (!cards.length || cancelled) return;

        const spotlightScale =
          SPOTLIGHT_SCALE[cards.length] ??
          SPOTLIGHT_SCALE[Object.keys(SPOTLIGHT_SCALE).length];
        const offsets = GROUP_OFFSETS[cards.length] ?? cards.map(() => 0);

        // 1. Pull the cards out of the grid flow and stage them, centered
        //    and oversized, on top of everything else.
        gsap.set(cards, {
          position: "fixed",
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          x: (i: number) => offsets[i] ?? 0,
          y: 40,
          scale: 0,
          opacity: 0,
          rotation: -8,
          filter: "blur(10px)",
          zIndex: 50,
          transformOrigin: "center center",
        });

        // 2. Reveal: scale/blur/fade in as the spotlight moment.
        await tweenToPromise(
          gsap.to(cards, {
            opacity: 1,
            scale: spotlightScale,
            y: 0,
            rotation: 0,
            filter: "blur(0px)",
            duration: 0.7,
            stagger: 0.12,
            ease: "back.out(1.6)",
          }),
        );

        if (cancelled) return;

        // 3. Hold the spotlight for this division's duration.
        const holdDuration =
          ANIMATION.duration.spotlight[
            division.toLowerCase() as keyof typeof ANIMATION.duration.spotlight
          ] ?? 1.8;

        await wait(holdDuration - 0.7 > 0 ? holdDuration - 0.7 : holdDuration);

        if (cancelled) return;

        // 4. Capture the current (fixed, oversized, centered) rects...
        const flipState = Flip.getState(cards);

        // ...then drop the fixed/oversized overrides so the cards fall
        //    back to their natural resting spot: the grid slot.
        cards.forEach((el) => {
          gsap.set(el, {
            clearProps:
              "position,top,left,xPercent,yPercent,zIndex,x,y,scale,rotation,filter",
          });
        });

        // 5. Flip animates FROM the captured spotlight rect TO the grid
        //    slot — this is the "scale down, move, fill final position".
        await tweenToPromise(
          Flip.from(flipState, {
            duration: 0.9,
            ease: "power3.inOut",
            scale: true,
            absolute: true,
            stagger: 0.08,
          }) as unknown as gsap.core.Tween,
        );
      };

      const runSequence = async () => {
        await tweenToPromise(introTl.play() as unknown as gsap.core.Tween);

        for (const division of DIVISION_ORDER) {
          if (cancelled) return;
          // eslint-disable-next-line no-await-in-loop
          await spotlightDivision(division);
        }

        if (cancelled) return;

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
        introTl.kill();
        gsap.killTweensOf(allCards);
      };
    },
    {
      scope: containerRef,
      revertOnUpdate: true,
    },
  );
}
