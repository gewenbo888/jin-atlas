export type Lang = "en" | "zh";

export const STRINGS = {
  meta: {
    siteName: { en: "Jin Language Atlas", zh: "晋语图谱" },
    tagline: {
      en: "Jin Chinese, regional culture, and historical roots",
      zh: "晋语、地方文化与历史根源",
    },
  },
  nav: {
    overview: { en: "Overview", zh: "总览" },
    features: { en: "Features", zh: "语言特征" },
    map: { en: "Dialect Map", zh: "方言地图" },
    timeline: { en: "Evolution", zh: "历史演变" },
    zhao: { en: "Zhao State", zh: "赵国" },
    geography: { en: "Geography", zh: "地理" },
    culture: { en: "Culture", zh: "文化" },
    compare: { en: "Comparison", zh: "对比" },
    premise: { en: "Premise", zh: "前提" },
  },
  hero: {
    eyebrow: {
      en: "Jin Language Atlas · A Psyverse research surface",
      zh: "晋语图谱 · Psyverse 研究界面",
    },
    title1: { en: "A language with the", zh: "一种带着" },
    titleEm: { en: "weight of mountains", zh: "山的重量" },
    title2: { en: " behind every tone.", zh: "的语言。" },
    sub: {
      en:
        "Jin Chinese (晋语) is the language of the Loess Plateau — Shanxi, northern Shaanxi, central Inner Mongolia, western Hebei. It preserves the entering tone (入声) that surrounding Mandarin lost. The Atlas locates Jin in geography, sound change, and the political history of the Three Jins, especially the State of Zhao.",
      zh:
        "晋语是黄土高原的语言——山西、陕北、内蒙古中部、冀西。它保留了周边官话已丢失的入声。本图谱把晋语放回到地理、音变与‘三晋’政治史的位置上，尤其是赵国。",
    },
    cta1: { en: "Open the dialect map", zh: "打开方言地图" },
    cta2: { en: "Read the premise", zh: "阅读前提" },
    statSpeakers: { en: "speakers (millions)", zh: "使用者（百万）" },
    statDialects: { en: "dialect sub-groups", zh: "方言片" },
    statTones: { en: "tones (incl. 入声)", zh: "声调（含入声）" },
    statRegions: { en: "regions covered", zh: "覆盖区域" },
  },
  premise: {
    eyebrow: { en: "Premise · 前提", zh: "前提 · Premise" },
    title: {
      en: "A language is what mountains, migration, and sound change leave behind.",
      zh: "一种语言是山脉、迁徙与音变共同留下的痕迹。",
    },
    blocks: [
      {
        n: "01",
        h: { en: "Jin is not 'a Mandarin dialect'.", zh: "晋语不是‘一种官话方言’。" },
        p: {
          en:
            "Since Li Rong (1985), most Chinese-linguistics taxonomies treat Jin as an independent top-level Sinitic group, distinguished from Mandarin chiefly by retention of the entering tone (入声) and a distinctive set of historical sound changes. The Atlas adopts that framing.",
          zh:
            "自李荣（1985）以来，主流汉语方言分类将晋语视为汉语方言的一级独立片，与官话的主要分别在于保留入声以及一组特定的历史音变。本图谱采用这一框架。",
        },
      },
      {
        n: "02",
        h: { en: "Geography did most of the work.", zh: "地理做了大部分功夫。" },
        p: {
          en:
            "The Taihang range walls Jin off from the North China Plain to the east; the Lüliang range walls it off from the Loess Plateau interior to the west; the Yellow River cuts the southern flank. The result: a mountain bowl in which Middle Chinese features survived 1,000 years longer than they did in the open plains.",
          zh:
            "太行山把晋语区与东侧华北平原隔开；吕梁山把它与西侧黄土高原内陆隔开；黄河切其南侧。结果是一只‘山地碗’，使中古汉语的特征比在开阔平原上多保留了上千年。",
        },
      },
      {
        n: "03",
        h: { en: "The Zhao section is load-bearing.", zh: "赵国一节是承重的。" },
        p: {
          en:
            "We do not claim the State of Zhao spoke 'proto-Jin'. We do claim that the territorial bowl Zhao occupied — central/northern Shanxi, much of Hebei, parts of Inner Mongolia — became a population continuity zone whose later linguistic shape is what we call Jin. The state shaped the human geography that the language inherited.",
          zh:
            "我们不主张‘赵国说原始晋语’。我们主张：赵国所占的那只地形碗——晋中晋北、河北大部、内蒙古一部——成了一片人口连续区，它后来的语言形态就是我们今天所说的晋语。赵国塑造了语言所继承的人文地理。",
        },
      },
      {
        n: "04",
        h: { en: "Reconstruction over assertion.", zh: "重构胜过断言。" },
        p: {
          en:
            "Where the Atlas reconstructs older pronunciations, it does so with explicit reference to Middle Chinese rime tables and the Sino-Tibetan reconstruction tradition — and marks reconstructions as such. We avoid origin-myths and tourist linguistics.",
          zh:
            "本图谱在重构早期读音时，会显式参考中古汉语韵书与汉藏比较语言学传统，并明示其为重构。我们避免‘起源神话’与‘旅游语言学’。",
        },
      },
    ],
  },
  overview: {
    eyebrow: { en: "Module 01 · Jin Language Overview", zh: "模块 01 · 晋语总览" },
    title: { en: "What Jin is, where it is spoken, what its sub-groups are.", zh: "晋语是什么、在哪里被使用、有哪些方言片。" },
    sub: {
      en:
        "Jin Chinese has roughly 63 million speakers across a contiguous belt centered on Shanxi. Internally it splits into eight sub-groups, conventionally named after their geographic anchor.",
      zh:
        "晋语使用者约六千三百万，分布在以山西为中心的连续地带；内部按地理依据分为八个方言片。",
    },
    fields: {
      definition: { en: "Definition", zh: "定义" },
      distribution: { en: "Distribution", zh: "分布" },
      groups: { en: "Sub-groups", zh: "方言片" },
      diagnostic: { en: "Diagnostic feature", zh: "判定特征" },
      diagnosticText: {
        en:
          "Retention of a distinct entering tone (入声) — typically realized with a final glottal stop /ʔ/ — that surrounding Mandarin (Beijing, Central Plains) has merged into other tones.",
        zh: "保留独立的入声——通常以喉塞尾 /ʔ/ 实现——这一调类在周边官话（北京话、中原官话）中已并入其他调类。",
      },
    },
    region: {
      shanxi: { en: "Shanxi (山西) — core area", zh: "山西——核心区" },
      shaanxi: { en: "Northern Shaanxi (陕北) — Yulin, Yan'an", zh: "陕北——榆林、延安" },
      mongolia: { en: "Central Inner Mongolia — Hohhot, Baotou", zh: "内蒙中部——呼和浩特、包头" },
      hebei: { en: "Western Hebei — Zhangjiakou, Handan northwest", zh: "冀西——张家口，邯郸西北" },
      henan: { en: "Northern Henan — Anyang, Hebi (border)", zh: "豫北——安阳、鹤壁（边缘）" },
    },
  },
  features: {
    eyebrow: { en: "Module 02 · Linguistic Feature Engine", zh: "模块 02 · 语言特征引擎" },
    title: { en: "Tones, finals, the entering tone, and what Mandarin lost.", zh: "声调、韵尾、入声，以及官话失去了什么。" },
    sub: {
      en:
        "Switch the columns to compare a representative Jin variety (Taiyuan) with Standard Mandarin (Beijing) on the same set of historical reflexes.",
      zh:
        "切换栏目，把代表性晋语（太原话）与普通话（北京话）放在同一套历史反映上比较。",
    },
    sections: {
      tones: { en: "Tones", zh: "声调" },
      finals: { en: "Finals & entering tone", zh: "韵母与入声" },
      consonants: { en: "Consonants", zh: "声母" },
      morpho: { en: "Distinctive morphology", zh: "形态特征" },
    },
    cols: {
      jin: { en: "Jin (Taiyuan 太原)", zh: "晋语（太原）" },
      mandarin: { en: "Mandarin (Beijing 北京)", zh: "官话（北京）" },
      midchinese: { en: "Middle Chinese (reconstructed)", zh: "中古汉语（拟构）" },
      note: { en: "Note", zh: "说明" },
    },
    legend: {
      retain: { en: "Jin retains", zh: "晋语保留" },
      mandarinLost: { en: "Mandarin merged", zh: "官话合并" },
    },
  },
  map: {
    eyebrow: { en: "Module 03 · Dialect Map", zh: "模块 03 · 方言地图" },
    title: { en: "Eight sub-groups across the Loess Plateau.", zh: "黄土高原上的八个方言片。" },
    sub: {
      en:
        "Click a region to read its dialect traits, representative cities, and notable features. The Atlas follows the Li Rong (1985) classification that established Jin as an independent group.",
      zh:
        "点击区域查看该方言片的语音特征、代表城市与典型特点。本图谱采用李荣（1985）将晋语立为一级独立片的分类。",
    },
    fields: {
      cities: { en: "Cities", zh: "代表城市" },
      traits: { en: "Traits", zh: "特征" },
      speakers: { en: "Approx. speakers", zh: "使用人数（约）" },
    },
    legendNote: {
      en: "Boundaries are approximate; transitional zones with Central Plains Mandarin (中原官话) are common in the south.",
      zh: "边界为示意；南缘与中原官话存在多处过渡带。",
    },
  },
  timeline: {
    eyebrow: { en: "Module 04 · Historical Evolution", zh: "模块 04 · 历史演变" },
    title: { en: "Old → Middle → Jin.", zh: "上古 → 中古 → 晋语。" },
    sub: {
      en:
        "Each event is a sound change, a political reshuffling, or a migration that altered who lived where and how they spoke.",
      zh:
        "每一个事件都是一次音变、一次政治重组，或一次改写‘谁住在哪里、说什么话’的人口迁徙。",
    },
    eras: {
      old: { en: "Old Chinese · 1200 BCE–200 BCE", zh: "上古汉语 · 公元前 1200–前 200" },
      middle: { en: "Middle Chinese · 200 BCE–1000 CE", zh: "中古汉语 · 公元前 200–公元 1000" },
      jin: { en: "Jin emerges · 1000–1500 CE", zh: "晋语成型 · 公元 1000–1500" },
      modern: { en: "Modern · 1500–present", zh: "近现代 · 1500 至今" },
    },
  },
  zhao: {
    eyebrow: { en: "Module 05 · The Zhao State Connection", zh: "模块 05 · 赵国连接" },
    title: { en: "Why Zhao matters — and exactly how.", zh: "为何赵国重要——以及具体怎么重要。" },
    sub: {
      en:
        "The State of Zhao (赵, ~403–222 BCE) controlled the territorial core that became the Jin-speaking belt. Zhao was not 'where proto-Jin was spoken'. It was the political shell within which a population continuity took hold — one that the language we now call Jin inherited.",
      zh:
        "赵国（约公元前 403–前 222）控制的核心地带，正是后来形成晋语连续带的核心。赵国并非‘原始晋语的发源地’。它是一只政治外壳，在这只外壳内形成了一片人口连续区——而我们今天叫做晋语的那种语言，承继了这片连续区。",
    },
    sections: {
      territory: { en: "Territory", zh: "疆域" },
      population: { en: "Population continuity", zh: "人口连续性" },
      linguistic: { en: "Linguistic implication", zh: "语言学含义" },
      caveat: { en: "Caveat against over-claim", zh: "对过度归因的警示" },
    },
    caveatTitle: { en: "Read this carefully", zh: "请注意以下结论" },
  },
  geography: {
    eyebrow: { en: "Module 06 · Geography × Language", zh: "模块 06 · 地理与语言" },
    title: { en: "Mountains preserve. Plains erase.", zh: "山保存，平原抹去。" },
    sub: {
      en:
        "The Atlas treats geography as the load-bearing variable for Jin's distinctness. Where you live decides what your grandchildren can still hear.",
      zh:
        "本图谱把地理视为决定‘晋语之所以独特’的承重变量。你住在哪里，决定你孙辈还听得到什么。",
    },
    fields: {
      barrier: { en: "Barrier", zh: "屏障" },
      effect: { en: "Linguistic effect", zh: "语言效应" },
      example: { en: "Example", zh: "例" },
    },
  },
  culture: {
    eyebrow: { en: "Module 07 · Cultural System", zh: "模块 07 · 文化系统" },
    title: { en: "Opera, oral idiom, and the texture of regional life.", zh: "戏曲、口语熟语，以及地方生活的质地。" },
    sub: {
      en:
        "A language without its songs and idioms is a phonology table. The cultural system is what makes Jin sound like Jin to a Jin speaker.",
      zh:
        "脱离了歌与熟语的语言只剩一张音系表。文化系统才让晋语在晋语使用者耳中‘像晋语’。",
    },
    sections: {
      opera: { en: "Opera", zh: "戏曲" },
      idiom: { en: "Idioms", zh: "熟语" },
      foodculture: { en: "Food & life", zh: "饮食与生活" },
    },
    fields: {
      meaning: { en: "Meaning", zh: "含义" },
      mandarinEquivalent: { en: "Mandarin equivalent", zh: "对应官话表达" },
      origin: { en: "Origin / center", zh: "源流 / 中心" },
    },
  },
  compare: {
    eyebrow: { en: "Module 08 · Comparison Engine", zh: "模块 08 · 对比引擎" },
    title: { en: "Jin vs Mandarin. Jin vs other Sinitic groups.", zh: "晋语 vs 官话；晋语 vs 其他汉语方言片。" },
    sub: {
      en:
        "Three axes per pair: phonology, vocabulary, grammar. The table is small on purpose — these are the rows on which the boundaries of the language family are drawn.",
      zh:
        "每一对在三个维度上对比：音系、词汇、语法。表格刻意精简——这些行正是划定汉语方言族界的那几行。",
    },
    cols: {
      axis: { en: "Axis", zh: "维度" },
      jin: { en: "Jin", zh: "晋语" },
      mandarin: { en: "Mandarin", zh: "官话" },
      other: { en: "Other Sinitic", zh: "其他汉语" },
    },
    note: {
      en: "Other Sinitic varieties: Wu (吴), Yue (粤/Cantonese), Min (闽), Hakka (客家), Xiang (湘), Gan (赣).",
      zh: "其他汉语方言：吴语、粤语、闽语、客家话、湘语、赣语。",
    },
  },
  footer: {
    line1: {
      en: "Jin Language Atlas is part of the Psyverse — a portfolio of small, sharp, single-idea sites by Gewenbo.",
      zh: "晋语图谱是 Psyverse 的一部分——由 Gewenbo 制作的、聚焦单一想法的小而精的站点合集。",
    },
    portfolio: { en: "Psyverse portfolio", zh: "Psyverse 作品集" },
    contact: { en: "Contact", zh: "联系" },
    method: { en: "Method note", zh: "方法说明" },
    methodText: {
      en:
        "The Atlas follows mainstream Sinitic-linguistics conventions: Li Rong (1985) for the classification; Pulleyblank and Baxter–Sagart-style references for Middle Chinese reconstructions; speaker-count estimates from Ethnologue / 中国语言地图集. Reconstructions are explicitly marked as such; the Atlas avoids origin-myth narratives.",
      zh:
        "本图谱采用主流汉语方言学的处理：分类依李荣（1985）；中古汉语拟音参考蒲立本与白—沙体系；使用者数量参考《Ethnologue》与《中国语言地图集》。重构内容均明示为重构；图谱回避起源神话式叙事。",
    },
  },
} as const;
