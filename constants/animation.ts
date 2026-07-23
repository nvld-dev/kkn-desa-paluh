export const ANIMATION = {
  // =========================
  // Duration (seconds)
  // =========================
  duration: {
    instant: 0.2,
    fast: 0.4,
    normal: 0.8,
    slow: 1.2,

    heroOpening: 1.5,

    spotlight: {
      ketua: 2.0,
      sekretaris: 1.8,
      bendahara: 1.5,
      humas: 1.8,
      kominfo: 2.0,
      acara: 1.8,
    },

    formation: 1.2,
  },

  // =========================
  // Delay
  // =========================
  delay: {
    none: 0,
    short: 0.2,
    normal: 0.5,
    long: 1,
  },

  // =========================
  // Easing
  // =========================
  ease: {
    default: "power2.out",
    smooth: "power3.out",
    bounce: "back.out(1.7)",
    elastic: "elastic.out(1,0.5)",
    fade: "sine.out",
  },

  // =========================
  // Scale
  // =========================
  scale: {
    spotlight: 1,
    formation: 0.45,
    hover: 1.05,
    modal: 1.1,
  },

  // =========================
  // Rotation
  // =========================
  rotation: {
    slight: 4,
    none: 0,
  },

  // =========================
  // Opacity
  // =========================
  opacity: {
    hidden: 0,
    visible: 1,
  },
} as const;
