import type { Barrier } from "./types";

export const BARRIERS: Barrier[] = [
  {
    id: "taihang",
    name: { en: "Taihang Mountains 太行山", zh: "太行山" },
    type: { en: "North-east-running range; eastern wall", zh: "东北—西南向山脉；东侧屏障" },
    effect: {
      en:
        "Walls Jin off from the open North China Plain. When the plains lose features in 1100–1400 CE, those losses do not propagate west across the Taihang.",
      zh:
        "把晋语带与开阔华北平原隔开。1100–1400 年间平原一侧的语音简化，无法越过太行向西扩散。",
    },
    example: {
      en: "Beijing on the east of the Taihang loses the entering tone; Yangquan and Datong on the west keep it.",
      zh: "太行以东的北京失去入声；以西的阳泉、大同保留入声。",
    },
  },
  {
    id: "luliang",
    name: { en: "Lüliang Mountains 吕梁山", zh: "吕梁山" },
    type: { en: "North-south range; western wall", zh: "南—北向山脉；西侧屏障" },
    effect: {
      en:
        "Separates the Loess Plateau interior (Yulin, Yan'an) from the Fen valley (Taiyuan). Jin straddles the range; the two sides retain different conservative features.",
      zh:
        "把黄土高原内部（榆林、延安）与汾河谷地（太原）分开。晋语跨越此山脉，两侧保留的存古特征不同。",
    },
    example: {
      en: "Lüliang and Zhi-Yan dialect groups preserve voicing-related contrasts that Bingzhou (east of the range) has lost.",
      zh: "吕梁片与志延片保留若干浊音相关对立，太行以东的并州片已失。",
    },
  },
  {
    id: "yellow-river",
    name: { en: "Yellow River 黄河", zh: "黄河" },
    type: { en: "Southern boundary along the river's east turn", zh: "南界沿黄河东转处" },
    effect: {
      en:
        "Cuts off the southern flank from Central Plains Mandarin migration corridors; transitional zones develop where the river is fordable.",
      zh:
        "把南缘与中原官话迁徙廊道隔开；可徒涉之处发展出过渡带。",
    },
    example: {
      en: "Anyang and Hebi (北豫) sit in a transition zone where Han-Xin Jin meets Central Plains Mandarin.",
      zh: "豫北安阳、鹤壁处于过渡带，邯新片晋语与中原官话相接。",
    },
  },
  {
    id: "loess",
    name: { en: "Loess Plateau (黄土高原)", zh: "黄土高原" },
    type: { en: "Plateau substrate; demographic isolator", zh: "高原本底；人口隔绝器" },
    effect: {
      en:
        "Steep gully landscapes restrict both farming density and intra-region travel; villages 20 km apart could differ in tone contour.",
      zh:
        "深切沟壑限制了耕地密度与区域内交通；相隔 20 公里的村落即可呈现不同的调值。",
    },
    example: {
      en: "Within the Lüliang sub-group, dialect distance per kilometer is among the highest in northern Sinitic varieties.",
      zh: "吕梁片内部每公里方言差异度，在北方汉语方言中名列前茅。",
    },
  },
  {
    id: "fen-valley",
    name: { en: "Fen River valley 汾河谷地", zh: "汾河谷地" },
    type: { en: "North-south corridor through central Shanxi", zh: "贯穿晋中的南北走廊" },
    effect: {
      en:
        "The single major travel corridor inside the bowl. Bingzhou Jin develops along it as the prestige dialect of the region.",
      zh:
        "‘碗’内唯一的主要交通走廊。并州片晋语沿此走廊发展为该区域的威望方言。",
    },
    example: {
      en: "Taiyuan, anchor of the Bingzhou group, sits in the middle of this corridor.",
      zh: "并州片之锚——太原——位于该走廊中段。",
    },
  },
];
