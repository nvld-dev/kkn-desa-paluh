// hooks/useAboutAnimation.ts

"use client";

import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useAboutAnimation(
  sectionRef: RefObject<HTMLElement | null>,
) {
  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      // Initial State
      gsap.set("[data-about-header]", {
        opacity: 0,
        y: 30,
      });

      gsap.set("[data-about-image]", {
        opacity: 0,
        x: -40,
        scale: 0.96,
      });

      gsap.set("[data-about-content]", {
        opacity: 0,
        x: 40,
      });

      gsap.set("[data-about-check]", {
        opacity: 0,
        y: 20,
      });

      gsap.set("[data-about-stat]", {
        opacity: 0,
        y: 30,
      });

      // Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      tl.to("[data-about-header]", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })

        .to(
          "[data-about-image]",
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4",
        )

        .to(
          "[data-about-content]",
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )

        .to(
          "[data-about-check]",
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.4",
        )

        .to(
          "[data-about-stat]",
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2",
        );
    }, section);

    return () => ctx.revert();
  }, [sectionRef]);
}
