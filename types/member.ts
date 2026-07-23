export type Division =
  "Ketua" | "Sekretaris" | "Bendahara" | "Humas" | "Kominfo" | "Acara";

export interface SocialMedia {
  instagram?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface Member {
  id: number;

  name: string;

  role: string;

  division: Division;

  photo: string;

  motto?: string;

  bio?: string;

  social?: SocialMedia;
}
