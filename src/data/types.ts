export type Bilingual = { en: string; zh: string };

export type DialectGroup = {
  id: string;
  name: Bilingual;
  pinyin: string;
  cities: { en: string; zh: string };
  speakersM: number; // millions
  traits: Bilingual[];
  /** Centroid in 0..1 normalized space within the map svg. */
  cx: number;
  cy: number;
  /** Polygon approximation in 0..1 normalized coordinates. */
  poly: number[]; // pairs of x,y
};

export type ToneRow = {
  toneName: Bilingual;
  jin: string;
  mandarin: string;
  contour: Bilingual;
  note: Bilingual;
};

export type FinalRow = {
  midchinese: string;
  jin: string;
  mandarin: string;
  example: string; // a Han character
  note: Bilingual;
};

export type ConsonantRow = {
  feature: Bilingual;
  jin: string;
  mandarin: string;
  note: Bilingual;
};

export type MorphoRow = {
  feature: Bilingual;
  jinExample: string;
  jinIPA: string;
  mandarinEquivalent: string;
  note: Bilingual;
};

export type Era = "old" | "middle" | "jin" | "modern";

export type TimelineEvent = {
  id: string;
  year: string; // human-readable
  numericYear: number;
  era: Era;
  title: Bilingual;
  what: Bilingual;
  why: Bilingual;
  effect: Bilingual;
};

export type Barrier = {
  id: string;
  name: Bilingual;
  type: Bilingual;
  effect: Bilingual;
  example: Bilingual;
};

export type CultureItem = {
  id: string;
  group: "opera" | "idiom" | "food";
  name: Bilingual;
  meaning: Bilingual;
  mandarinEq: Bilingual;
  origin: Bilingual;
};

export type CompareRow = {
  axis: Bilingual;
  jin: Bilingual;
  mandarin: Bilingual;
  other: Bilingual;
};
