export interface FormationPosition {
  memberId: number;
  x: number;
  y: number;
}

// Layout notes:
// - CommitteeCard is a fixed w-72 (288px) card, roughly ~330-350px tall
//   (photo + name + role + badge + padding).
// - Column gap (x) is 360px center-to-center: 288px card + ~72px breathing room.
// - Row gap (y) is 400px center-to-center: ~350px card + ~50px breathing room.
// Adjust these two numbers if you change CommitteeCard's size.

export const formation: FormationPosition[] = [
  // Row 0 — Ketua
  {
    memberId: 1,
    x: 0,
    y: 0,
  },

  // Row 1 — Sekretaris (2)
  {
    memberId: 2,
    x: -180,
    y: 400,
  },
  {
    memberId: 3,
    x: 180,
    y: 400,
  },

  // Row 2 — Bendahara, Humas x2, Kominfo 1
  {
    memberId: 4,
    x: -540,
    y: 800,
  },
  {
    memberId: 5,
    x: -180,
    y: 800,
  },
  {
    memberId: 6,
    x: 180,
    y: 800,
  },
  {
    memberId: 7,
    x: 540,
    y: 800,
  },

  // Row 3 — Kominfo 2-3, Acara x2
  {
    memberId: 8,
    x: -540,
    y: 1200,
  },
  {
    memberId: 9,
    x: -180,
    y: 1200,
  },
  {
    memberId: 10,
    x: 180,
    y: 1200,
  },
  {
    memberId: 11,
    x: 540,
    y: 1200,
  },
];
