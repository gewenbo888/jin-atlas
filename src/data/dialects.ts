import type { DialectGroup } from "./types";

/* Eight Jin sub-groups per Li Rong (1985) classification.
 * The map coordinates target a roughly rectangular SVG (1000×600) where
 * x increases east, y increases south, normalized to 0..1.
 *
 * Geographic anchors (very approximate, used only for layout):
 *   x: ~0.18 = Yulin (Shaanxi north), ~0.30 = Lüliang/西山, ~0.42 = Taiyuan,
 *      ~0.55 = Taihang east edge, ~0.65 = Handan/Anyang, ~0.78 = Zhangjiakou
 *   y: ~0.20 = Hohhot/Baotou, ~0.35 = Datong, ~0.50 = Taiyuan, ~0.70 = Changzhi/Shangdang
 */

export const DIALECTS: DialectGroup[] = [
  {
    id: "bingzhou",
    name: { en: "Bingzhou (并州)", zh: "并州片" },
    pinyin: "Bīngzhōu",
    cities: { en: "Taiyuan, Yuci, Qingxu, Wenshui, Jiaocheng", zh: "太原、榆次、清徐、文水、交城" },
    speakersM: 12.5,
    traits: [
      { en: "Center of Jin; the Taiyuan dialect is treated as a representative variety.", zh: "晋语核心；太原话被视为代表方言。" },
      { en: "5 tones including a clearly distinct entering tone (~ʔ).", zh: "5 调，包括明确独立的入声（带 ʔ 喉塞尾）。" },
      { en: "Distinctive use of the 圪 [kəʔ] prefix on verbs and nouns.", zh: "动词与名词的‘圪 [kəʔ]’前缀使用突出。" },
    ],
    cx: 0.42,
    cy: 0.5,
    poly: [0.36, 0.42, 0.5, 0.42, 0.5, 0.6, 0.36, 0.6],
  },
  {
    id: "lvliang",
    name: { en: "Lüliang (吕梁)", zh: "吕梁片" },
    pinyin: "Lǚliáng",
    cities: { en: "Lishi, Fenyang, Zhongyang, Linxian (west of the Lüliang range)", zh: "离石、汾阳、中阳、临县（吕梁山西侧）" },
    speakersM: 5.4,
    traits: [
      { en: "Tonal system retains a more conservative entering-tone realization than Bingzhou.", zh: "调类系统中入声的实现比并州片更保守。" },
      { en: "Mountain isolation kept Middle-Chinese features that other regions lost.", zh: "山地隔绝使中古汉语特征比邻近区域多保留。" },
    ],
    cx: 0.3,
    cy: 0.5,
    poly: [0.22, 0.4, 0.36, 0.4, 0.36, 0.62, 0.22, 0.62],
  },
  {
    id: "shangdang",
    name: { en: "Shangdang (上党)", zh: "上党片" },
    pinyin: "Shàngdǎng",
    cities: { en: "Changzhi, Jincheng, Lucheng, Lingchuan", zh: "长治、晋城、潞城、陵川" },
    speakersM: 5.8,
    traits: [
      { en: "Southeastern Shanxi; transitional toward Central Plains Mandarin in the south.", zh: "晋东南；其南渐与中原官话过渡。" },
      { en: "Highly archaic vocabulary; well-known regional opera (上党梆子).", zh: "词汇存古明显；上党梆子戏曲在地方文化中分量重。" },
    ],
    cx: 0.52,
    cy: 0.7,
    poly: [0.46, 0.62, 0.6, 0.62, 0.6, 0.78, 0.46, 0.78],
  },
  {
    id: "wutai",
    name: { en: "Wutai (五台)", zh: "五台片" },
    pinyin: "Wǔtái",
    cities: { en: "Wutai, Xinzhou, Daixian, Yuanping", zh: "五台、忻州、代县、原平" },
    speakersM: 4.2,
    traits: [
      { en: "North-central Shanxi, around the Wutai mountain massif.", zh: "晋中偏北，五台山一带。" },
      { en: "Rich consonant inventory; preserves voiced obstruent reflexes in some lexemes.", zh: "声母系统丰富；部分词目保留中古浊塞反映。" },
    ],
    cx: 0.46,
    cy: 0.4,
    poly: [0.4, 0.32, 0.54, 0.32, 0.54, 0.42, 0.4, 0.42],
  },
  {
    id: "datong-baotou",
    name: { en: "Datong–Baotou (大同–包头)", zh: "大包片" },
    pinyin: "Dàbāo",
    cities: { en: "Datong, Hohhot, Baotou", zh: "大同、呼和浩特、包头" },
    speakersM: 5.0,
    traits: [
      { en: "Spans north Shanxi and central Inner Mongolia; long contact with northern Mandarin.", zh: "横跨晋北与内蒙中部；与北部官话长期接触。" },
      { en: "Entering tone partly weakened in some sub-areas due to contact.", zh: "部分次区域因接触原因，入声有所弱化。" },
    ],
    cx: 0.5,
    cy: 0.22,
    poly: [0.42, 0.14, 0.62, 0.14, 0.62, 0.32, 0.42, 0.32],
  },
  {
    id: "zhang-hu-xin",
    name: { en: "Zhang-Hu-Xin (张呼新)", zh: "张呼片" },
    pinyin: "Zhānghūxīn",
    cities: { en: "Zhangjiakou, Hohhot (alt. boundary), Xinzhou-area transition", zh: "张家口、呼和浩特（界缘）、忻州过渡带" },
    speakersM: 3.5,
    traits: [
      { en: "Northeastern boundary of Jin, in contact with Beijing/Hebei Mandarin.", zh: "晋语东北缘，与北京—河北官话接触。" },
      { en: "Tonal contour values shift relative to Bingzhou.", zh: "调值与并州片相比有所偏移。" },
    ],
    cx: 0.66,
    cy: 0.28,
    poly: [0.58, 0.18, 0.78, 0.18, 0.78, 0.38, 0.58, 0.38],
  },
  {
    id: "hanxin",
    name: { en: "Han-Xin (邯新)", zh: "邯新片" },
    pinyin: "Hánxīn",
    cities: { en: "Handan (NW), Xinxiang–Anyang corridor", zh: "邯郸（西北）、新乡—安阳走廊" },
    speakersM: 4.3,
    traits: [
      { en: "Hebei–Henan border belt; inheritance of the historical Zhao territorial core.", zh: "冀豫交界带；继承赵国历史核心地带的人文地理。" },
      { en: "Strongest contact transition with Central Plains Mandarin.", zh: "与中原官话过渡最为剧烈。" },
    ],
    cx: 0.66,
    cy: 0.62,
    poly: [0.6, 0.55, 0.76, 0.55, 0.76, 0.7, 0.6, 0.7],
  },
  {
    id: "zhi-yan",
    name: { en: "Zhi-Yan (志延)", zh: "志延片" },
    pinyin: "Zhìyán",
    cities: { en: "Yan'an, Yulin, Suide, Mizhi (northern Shaanxi)", zh: "延安、榆林、绥德、米脂（陕北）" },
    speakersM: 5.1,
    traits: [
      { en: "Northern Shaanxi; the loess plateau core west of the Yellow River.", zh: "陕北；黄河西岸的黄土高原核心。" },
      { en: "Strong distinct entering tone; vocabulary retains pre-modern strata.", zh: "入声鲜明；词汇保留前现代层。" },
    ],
    cx: 0.18,
    cy: 0.48,
    poly: [0.1, 0.3, 0.22, 0.3, 0.22, 0.65, 0.1, 0.65],
  },
];

/* Geographic features for the map background. */
export const GEO_FEATURES: { id: string; type: "river" | "mountain"; name: { en: string; zh: string }; path: string }[] = [
  // Yellow River — schematic (east bank along x≈0.22 then turning east at y≈0.78)
  {
    id: "yellow-river",
    type: "river",
    name: { en: "Yellow River 黄河", zh: "黄河" },
    path: "M 0.22 0.05 L 0.22 0.78 L 0.95 0.82",
  },
  // Taihang range — schematic NE-SW between Shanxi and Hebei
  {
    id: "taihang",
    type: "mountain",
    name: { en: "Taihang Mountains 太行山", zh: "太行山" },
    path: "M 0.55 0.18 L 0.6 0.4 L 0.62 0.62 L 0.66 0.78",
  },
  // Lüliang range — N-S in west Shanxi
  {
    id: "luliang",
    type: "mountain",
    name: { en: "Lüliang Mountains 吕梁山", zh: "吕梁山" },
    path: "M 0.34 0.2 L 0.34 0.68",
  },
  // Wutai (point-ish, but draw a small ridge)
  {
    id: "wutai",
    type: "mountain",
    name: { en: "Wutai 五台山", zh: "五台山" },
    path: "M 0.46 0.32 L 0.5 0.34",
  },
];
