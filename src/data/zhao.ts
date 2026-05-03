import type { Bilingual } from "./types";

export const ZHAO_TERRITORY: { axis: Bilingual; value: Bilingual }[] = [
  {
    axis: { en: "Period", zh: "时期" },
    value: { en: "ca. 403 BCE – 222 BCE (Warring States)", zh: "约公元前 403 — 前 222（战国时期）" },
  },
  {
    axis: { en: "First capital", zh: "初期都城" },
    value: { en: "Jinyang (晋阳) — modern Taiyuan, central Shanxi", zh: "晋阳（今太原），晋中" },
  },
  {
    axis: { en: "Later capital", zh: "后期都城" },
    value: { en: "Handan (邯郸) — southern Hebei (relocated 386 BCE)", zh: "邯郸（今邯郸，前 386 年迁都）" },
  },
  {
    axis: { en: "Core territory", zh: "核心疆域" },
    value: {
      en: "Central and northern Shanxi · most of Hebei · parts of central Inner Mongolia · western Shandong frontier",
      zh: "晋中、晋北 · 河北大部 · 内蒙古中部一部 · 鲁西边缘",
    },
  },
  {
    axis: { en: "Estimated population (Warring States peak)", zh: "战国盛时人口估" },
    value: { en: "~3.5–4 million", zh: "约 350–400 万" },
  },
  {
    axis: { en: "Frontier", zh: "边疆" },
    value: {
      en: "Northern frontier with the Xiongnu and Linhu/Loufan tribes — the Great-Wall ancestor segments built by Zhao",
      zh: "北部与匈奴及林胡、楼烦等部接壤——赵国修筑的‘长城前身’段",
    },
  },
];

export const ZHAO_BLOCKS: { id: string; title: Bilingual; body: Bilingual }[] = [
  {
    id: "territory",
    title: { en: "Territory: the bowl Zhao occupied", zh: "疆域：赵国所占的‘碗’" },
    body: {
      en:
        "Zhao's territorial core was a U-shaped basin defined on the west by the Lüliang range, on the east by the Taihang range, and capped on the south by the Yellow River's eastern turn. Its capital migration — from Jinyang in central Shanxi to Handan in southern Hebei — extended the polity across both sides of the Taihang. The 'bowl' is the same geographical container that, two millennia later, defines the Jin-language belt.",
      zh:
        "赵国的核心疆域是一只 U 形盆地：西以吕梁山为界，东以太行山为界，南以黄河东转为顶。其都城从晋中的晋阳迁到冀南的邯郸，使政体横跨太行两侧。这只‘碗’和两千年后形成的晋语带，几乎是同一只地理容器。",
    },
  },
  {
    id: "population",
    title: { en: "Population continuity, not linguistic identity", zh: "人口连续，而非语言同一" },
    body: {
      en:
        "We make a careful claim. Zhao's people did not speak 'proto-Jin' in any reconstructible sense — Old Chinese in 300 BCE was structurally very different from anything we would call Jin. What Zhao did do is establish a population continuity zone: a region whose inhabitants, generation after generation, remained substantially in place through Qin–Han, Sui–Tang, and the dynastic transitions thereafter. That continuity is the precondition for Jin's later distinctness.",
      zh:
        "这里要做一个谨慎的主张。赵国人并不说‘原始晋语’——公元前 300 年的上古汉语，与今天意义上的晋语在结构上差异巨大。赵国的真正贡献，是建立了一片‘人口连续区’：在秦汉、隋唐与之后的朝代更替中，世代居民总体留在原地。正是这份连续，构成了晋语后来‘与众不同’的前提。",
    },
  },
  {
    id: "linguistic",
    title: { en: "Linguistic implication: walls inside walls", zh: "语言学含义：‘墙里有墙’" },
    body: {
      en:
        "When Mandarin's ancestor lost the entering tone in the open North China Plain (1100–1400 CE), the Jin-language belt — protected by Taihang on the east and Lüliang on the west — kept it. The Zhao bowl did not 'cause' the entering tone to survive. It made the survival possible by maintaining a population that kept speaking through the centuries of plains-area sound change.",
      zh:
        "当官话祖语在开阔的华北平原失去入声时（约公元 1100–1400），被太行（东）与吕梁（西）所护的晋语带保住了它。赵国所留下的‘碗’并不‘使’入声存活；它通过保持一片世代说话的人群，让存活成为可能。",
    },
  },
  {
    id: "caveat",
    title: { en: "Caveat: state ≠ language identity", zh: "警示：国家 ≠ 语言同一性" },
    body: {
      en:
        "Maps that color modern Jin onto the Zhao polity make for striking visuals and bad linguistics. Zhao's eastern reach included territory now firmly Mandarin-speaking; Zhao's brief northern campaigns crossed peoples whose descendants speak nothing close to Jin. Conversely, parts of today's Jin belt (Wutai, Lüliang) lay outside Zhao's military reach. The clean correspondence is between Zhao's central bowl and the Jin core; not between every kilometer of Zhao and every kilometer of Jin.",
      zh:
        "把现代晋语区直接套色在赵国版图上，画面好看，语言学不严谨。赵国东部一些地区今天属铁打的官话区；赵国北征所及之地，其后人语言与晋语无关。反过来，今日晋语带的部分区域（五台、吕梁）也不在赵国军事覆盖之内。真正的对应关系，是‘赵国核心盆地’与‘晋语核心’之间的对应——而不是赵国每一公里与晋语每一公里的对应。",
    },
  },
  {
    id: "position",
    title: { en: "Where this leaves the Atlas's claim", zh: "据此本图谱的立场" },
    body: {
      en:
        "Geography did the conserving. The State of Zhao did the structuring. Sound change, in the surrounding plains, did the differentiating. Jin Chinese is what survived in the bowl while the plains around it changed — and the bowl was a political artifact long before it was a linguistic one.",
      zh:
        "地理负责保存。赵国负责结构。周边平原的音变负责使其‘与众不同’。晋语是‘四周的平原变了，而碗里没变’的产物——而这只碗，先是一只政治意义上的器物，后来才成为语言意义上的器物。",
    },
  },
];
