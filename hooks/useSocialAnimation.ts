// hooks/useSocialAnimation.ts

"use client";

import { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function useSocialAnimation(
  sectionRef: RefObject<HTMLElement | null>,
) {
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const header = sectionRef.current.querySelector("[data-social-header]");
      const cards = gsap.utils.toArray<HTMLElement>("[data-social-card]");

      gsap.set(header, {
        opacity: 0,
        y: 30,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 40,
        scale: 0.95,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(header, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      }).to(
        cards,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.25",
      );
    },
    {
      scope: sectionRef,
      dependencies: [],
      revertOnUpdate: true,
    },
  );
}
