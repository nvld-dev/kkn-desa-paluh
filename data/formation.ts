export interface FormationPosition {
  memberId: number;
  x: number;
  y: number;
}

export const formation: FormationPosition[] = [
  // Ketua
  { memberId: 1, x: 0, y: 0 },

  // Sekretaris
  { memberId: 2, x: -180, y: 300 },
  { memberId: 3, x: 180, y: 300 },

  // Bendahara - Humas - Kominfo
  { memberId: 4, x: -390, y: 650 },
  { memberId: 5, x: -130, y: 650 },
  { memberId: 6, x: 130, y: 650 },
  { memberId: 7, x: 390, y: 650 },

  // Kominfo & Acara
  { memberId: 8, x: -390, y: 1000 },
  { memberId: 9, x: -130, y: 1000 },
  { memberId: 10, x: 130, y: 1000 },
  { memberId: 11, x: 390, y: 1000 },
];
