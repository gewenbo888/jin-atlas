import type { ConsonantRow, FinalRow, MorphoRow, ToneRow } from "./types";

/* All representative-Jin data is for Taiyuan (太原话) unless otherwise noted.
 * Mandarin is Beijing standard.
 * Middle Chinese reconstructions are schematic, in the broad
 * Pulleyblank / Baxter–Sagart tradition. They are pedagogical, not authoritative. */

export const TONES: ToneRow[] = [
  {
    toneName: { en: "Yin Ping (yīn-píng)", zh: "阴平" },
    jin: "11",
    mandarin: "55",
    contour: { en: "low level (Jin) vs high level (Mandarin)", zh: "低平（晋语）对高平（官话）" },
    note: {
      en: "Ping-tone realizations diverged; Jin's yin-ping sits low, Mandarin's high.",
      zh: "平声调值分化：晋语阴平偏低，官话偏高。",
    },
  },
  {
    toneName: { en: "Yang Ping (yáng-píng)", zh: "阳平" },
    jin: "11",
    mandarin: "35",
    contour: { en: "low level (Jin) vs rising (Mandarin)", zh: "低平（晋语）对上升（官话）" },
    note: {
      en: "Many Jin varieties have merged yin-ping and yang-ping in citation form.",
      zh: "许多晋语方言在单字读法上把阴平、阳平合并。",
    },
  },
  {
    toneName: { en: "Shang (shǎng)", zh: "上声" },
    jin: "53",
    mandarin: "214",
    contour: { en: "high-falling (Jin) vs low-dipping (Mandarin)", zh: "高降（晋语）对降升（官话）" },
    note: {
      en: "Jin's shang sits high and falls; Mandarin's dips and rises.",
      zh: "晋语上声高起降；官话降后回升。",
    },
  },
  {
    toneName: { en: "Qu (qù)", zh: "去声" },
    jin: "45",
    mandarin: "51",
    contour: { en: "low-rising (Jin) vs high-falling (Mandarin)", zh: "低升（晋语）对高降（官话）" },
    note: {
      en: "Contour direction inverted between the two systems.",
      zh: "两套系统间该调的走向恰好相反。",
    },
  },
  {
    toneName: { en: "Ru — entering tone (rù-shēng) 入声", zh: "入声" },
    jin: "ʔ-final, ~2",
    mandarin: "—",
    contour: {
      en: "Short syllable closed by /ʔ/ — RETAINED in Jin",
      zh: "短促音节，喉塞 /ʔ/ 收尾——晋语保留",
    },
    note: {
      en: "The diagnostic feature. Mandarin redistributed Middle-Chinese ru-tone syllables across the other four tones; Jin keeps them as a distinct tonal class.",
      zh: "晋语的判定特征。中古入声字在官话中按规律分派至其余四声；晋语保留入声为独立调类。",
    },
  },
];

export const FINALS: FinalRow[] = [
  {
    midchinese: "*-k / *-t / *-p",
    jin: "-ʔ",
    mandarin: "(merged into other tones; no consonant final)",
    example: "白",
    note: {
      en: "Middle Chinese ru-tone codas /-k -t -p/ collapsed into a glottal stop /ʔ/ in Jin; Mandarin lost the coda entirely.",
      zh: "中古入声韵尾 /-k -t -p/ 在晋语中合并为喉塞 /ʔ/；官话则完全丢失韵尾。",
    },
  },
  {
    midchinese: "*-ŋ",
    jin: "-ŋ (often retained)",
    mandarin: "-ŋ",
    example: "东",
    note: {
      en: "Velar nasal coda preserved in both systems but with allophonic differences.",
      zh: "舌根鼻韵尾在两套系统中均有保留，但条件音变略异。",
    },
  },
  {
    midchinese: "*-n",
    jin: "-n / -̃",
    mandarin: "-n",
    example: "三",
    note: {
      en: "Some Jin varieties have nasalized vowels in place of -n in fast speech.",
      zh: "部分晋语在快速语流中以鼻化元音替代 -n。",
    },
  },
  {
    midchinese: "*ɣ-, *ɦ- (voiced fricatives)",
    jin: "x- / Ø",
    mandarin: "x- / Ø",
    example: "黄",
    note: {
      en: "Devoicing of Middle Chinese voiced obstruents — both systems devoiced, but with different tonal reflexes that interact with the Jin entering tone.",
      zh: "中古浊塞擦音清化——两套系统都清化，但与调类的相互作用使晋语在入声项上呈现独特反映。",
    },
  },
];

export const CONSONANTS: ConsonantRow[] = [
  {
    feature: { en: "Voiced obstruent series (*b- *d- *g- *dz-)", zh: "浊塞/塞擦系列（*b- *d- *g- *dz-）" },
    jin: "all devoiced",
    mandarin: "all devoiced",
    note: {
      en: "Both systems lost the Middle-Chinese voicing distinction; they differ in the tonal split that resulted.",
      zh: "两套系统都丢失了中古浊音对立；差别在于其后产生的调类分化。",
    },
  },
  {
    feature: { en: "Retroflex initials (zh ch sh r)", zh: "卷舌声母 zh ch sh r" },
    jin: "merged with dental in many varieties",
    mandarin: "fully retained (zh ch sh r)",
    note: {
      en: "Many Jin varieties merge ʈʂ-/ts-, sh-/s-, r-/z-; Mandarin keeps both series.",
      zh: "许多晋语方言把 ʈʂ-/ts-、sh-/s-、r-/z- 合并；官话两套并存。",
    },
  },
  {
    feature: { en: "Palatalization of velars before /i, y/", zh: "舌根音在 /i, y/ 前的腭化" },
    jin: "completed (k- > tɕ-)",
    mandarin: "completed (k- > tɕ-)",
    note: {
      en: "Both systems underwent the same palatalization; Jin completed it earlier in the south, later in the north.",
      zh: "两套系统都发生了相同的腭化；晋语南部完成得更早，北部更晚。",
    },
  },
  {
    feature: { en: "Velar nasal initial /ŋ/-", zh: "舌根鼻音声母 /ŋ/-" },
    jin: "preserved in many words",
    mandarin: "lost",
    note: {
      en: "Jin preserves /ŋ-/ on words where Mandarin has zero initial (e.g. 我).",
      zh: "晋语在部分词上保留 /ŋ-/，而官话已脱落（如‘我’）。",
    },
  },
];

export const MORPHO: MorphoRow[] = [
  {
    feature: { en: "Diminutive / verbal prefix 圪", zh: "‘圪’前缀（小称/动词前缀）" },
    jinExample: "圪转 ~ 圪走 ~ 圪台",
    jinIPA: "[kəʔ-ʈʂwã / -tsoʊ / -tʰai]",
    mandarinEquivalent: "(no general equivalent)",
    note: {
      en: "Highly productive Jin prefix /kəʔ-/, used to form diminutives and continuous-action verbs.",
      zh: "晋语中产生力极强的前缀 /kəʔ-/，构成小称与持续—轻态动词。",
    },
  },
  {
    feature: { en: "Suffix 子 retains a fuller realization", zh: "‘子’尾保留较完整读音" },
    jinExample: "桌子",
    jinIPA: "[tsuəʔ tsɪ]",
    mandarinEquivalent: "桌子 [tʂwo tsɨ]",
    note: {
      en: "Jin's stop-coda on the root remains audible — Mandarin's has merged into the open syllable.",
      zh: "晋语词根的塞音尾仍可听见——官话已合并入开口音节。",
    },
  },
  {
    feature: { en: "Aspectual particle 哩 (continuous/affirmative)", zh: "助词 ‘哩’（持续/肯定）" },
    jinExample: "做哩 ~ 走哩",
    jinIPA: "[tsuo li / tsoʊ li]",
    mandarinEquivalent: "在做 / 走着",
    note: {
      en: "A post-verbal particle 哩 tracks both progressive aspect and assertion in many Jin varieties.",
      zh: "句末助词‘哩’在多数晋语方言中兼标进行体与判断。",
    },
  },
  {
    feature: { en: "Negative particle 不 with retention of /pa/", zh: "否定词‘不’的 /pa/ 形式" },
    jinExample: "不去 [pa tɕʰyəʔ]",
    jinIPA: "[pa tɕʰyəʔ]",
    mandarinEquivalent: "不去 [pu tɕʰy]",
    note: {
      en: "Jin commonly preserves a more conservative vowel in 不 and the entering-tone coda on 去.",
      zh: "晋语常保留‘不’的较保守元音，且‘去’的入声塞尾仍在。",
    },
  },
];
