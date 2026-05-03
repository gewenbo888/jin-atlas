import type { TimelineEvent } from "./types";

export const TIMELINE: TimelineEvent[] = [
  {
    id: "shang-late",
    year: "ca. 1200 BCE",
    numericYear: -1200,
    era: "old",
    title: { en: "Late Shang oracle-bone language", zh: "商代晚期甲骨文语言" },
    what: {
      en: "Earliest extensively attested Sinitic stage. Bronze-age Yellow River basin, including the modern Shanxi region.",
      zh: "最早大量见诸文献的汉语阶段。青铜时代黄河流域，含今山西地区。",
    },
    why: {
      en: "First writing system records syllable-final consonant clusters and contrastive voicing — features the descendants will mostly lose.",
      zh: "第一套书写系统记下了音节末辅音群与浊音对立——这些后代多数会丢失。",
    },
    effect: {
      en: "Provides the upper bound for Sinitic reconstruction; sets the substrate that Jin's ancestors inherit.",
      zh: "为汉语重构提供上限；为晋语祖语奠定底层。",
    },
  },
  {
    id: "jin-state",
    year: "1042 BCE – 376 BCE",
    numericYear: -700,
    era: "old",
    title: { en: "State of Jin (晋) — political ancestor", zh: "晋国——政治先祖" },
    what: {
      en: "A major Eastern Zhou state centered on the Fen River valley (modern central/southern Shanxi). Capital at Quwo, then Jiang, then Xinjiang.",
      zh: "东周大国，以汾河谷地（今晋中—晋南）为中心。先后定都曲沃、绛、新绛。",
    },
    why: {
      en: "Jin assembled the political and demographic core that future linguistic continuity would inherit.",
      zh: "晋国奠定的政治与人口核心，构成后来语言连续性的依托。",
    },
    effect: {
      en: "The geographic name 'Jin' (晋) is what the modern dialect group is named after.",
      zh: "今日方言片之名‘晋语’的‘晋’即得名于此。",
    },
  },
  {
    id: "partition",
    year: "453 BCE",
    numericYear: -453,
    era: "old",
    title: { en: "Partition of Jin → Han, Zhao, Wei (三家分晋)", zh: "三家分晋（前 453）" },
    what: {
      en: "The Jin polity is split among three of its great families. The 'Three Jins' (三晋) become the regional unit of analysis.",
      zh: "晋国被三家分裂。‘三晋’成为后世的区域分析单位。",
    },
    why: {
      en: "End of Jin as a state, but the demographic continuity in the territory remains.",
      zh: "晋作为国家结束，但其领土上的人口连续未断。",
    },
    effect: {
      en: "Zhao inherits the central/northern bowl that becomes the Jin-language belt.",
      zh: "赵承继了那只‘晋中—晋北山地碗’——后来的晋语带。",
    },
  },
  {
    id: "warring",
    year: "475–221 BCE",
    numericYear: -300,
    era: "old",
    title: { en: "Warring States (战国) — territorial linguistic divergence", zh: "战国——区域语言分化" },
    what: {
      en: "Late Old Chinese; political fragmentation produces visible regional linguistic differences in the Records of the Grand Historian and other texts.",
      zh: "上古汉语晚期；《史记》等文本中已可见明显的区域语言差异。",
    },
    why: {
      en: "Without a unifying empire, each state's bureaucratic and military registers harden along regional lines.",
      zh: "在缺乏统一帝国时，各国官僚军事用语各自定型。",
    },
    effect: {
      en: "Sets up the regional differentiation that later survived (in attenuated form) into Middle Chinese.",
      zh: "为后来在中古汉语中以减弱形式存留的区域差异定型。",
    },
  },
  {
    id: "qin-han",
    year: "221 BCE – 220 CE",
    numericYear: -100,
    era: "old",
    title: { en: "Qin–Han unification", zh: "秦汉一统" },
    what: {
      en: "A single empire imposes a single script and a partially leveled prestige register; Old Chinese ends, Middle Chinese begins to emerge.",
      zh: "统一帝国推行同一文字与部分趋同的雅言；上古汉语终结，中古汉语开始萌芽。",
    },
    why: {
      en: "Imperial bureaucracy demands intelligibility across regions; political integration accelerates a literary koine.",
      zh: "帝国官僚要求跨区可懂；政治整合加速雅言化。",
    },
    effect: {
      en: "Jin's mountain-bowl geography insulates it from the most aggressive features of the prestige register.",
      zh: "晋语的山地碗地形使其免于最大程度的雅言化。",
    },
  },
  {
    id: "qieyun",
    year: "601 CE",
    numericYear: 601,
    era: "middle",
    title: { en: "Qieyun (切韵) — codified Middle Chinese", zh: "《切韵》——中古汉语定型" },
    what: {
      en: "The Qieyun rime book records a structured Middle-Chinese phonology with four tones (平上去入) and rich finals — the snapshot every later reconstruction is built on.",
      zh: "《切韵》记录了四声（平上去入）与丰富韵母的中古汉语音系，是后世重构的基准。",
    },
    why: {
      en: "Sui–Tang scholars sought a literary standard that captured both northern and southern reading traditions.",
      zh: "隋唐学者欲构一部统合南北读书音的标准。",
    },
    effect: {
      en: "Provides the reference point against which Jin's retentions and Mandarin's losses are measured today.",
      zh: "今日衡量晋语保留与官话失落的参照系。",
    },
  },
  {
    id: "tang-spread",
    year: "618–907 CE",
    numericYear: 800,
    era: "middle",
    title: { en: "Tang prestige register reaches the Loess Plateau", zh: "唐代雅言抵达黄土高原" },
    what: {
      en: "Tang-era literary Chinese is acquired in northern courts and prefecture seats; mountainous interiors retain older speech.",
      zh: "唐代雅言进入北方廷府治所；山区内部保留旧音。",
    },
    why: {
      en: "Bureaucratic exam culture rewards a learned register, but only where the schools reach.",
      zh: "科举培养雅言，但只在学校所及之处。",
    },
    effect: {
      en: "Plains lose features faster than mountains do; the gap widens.",
      zh: "平原失落特征比山区快；差距开始拉开。",
    },
  },
  {
    id: "ru-loss-mandarin",
    year: "1100–1400 CE",
    numericYear: 1250,
    era: "jin",
    title: { en: "Mandarin loses the entering tone", zh: "官话失去入声" },
    what: {
      en: "Across the North China Plain, Middle Chinese ru-tone (入声) syllables redistribute into the other four tones; final stops /-p -t -k/ disappear.",
      zh: "华北平原上，中古入声字按规律分派至其余四声；塞韵尾 /-p -t -k/ 脱落。",
    },
    why: {
      en: "Phonological simplification in a high-contact, high-mobility plains population.",
      zh: "在高接触、高流动的平原人群中发生的音系简化。",
    },
    effect: {
      en: "Jin, walled in by mountains, retains the tone as /-ʔ/. The diagnostic feature of Jin is born by what Mandarin lost, not by what Jin gained.",
      zh: "被山地封闭的晋语将该调类保留为 /-ʔ/。晋语的判定特征由‘官话失了什么’而非‘晋语得了什么’定义。",
    },
  },
  {
    id: "ming-migration",
    year: "1368–1644 CE",
    numericYear: 1500,
    era: "jin",
    title: { en: "Ming-era Hongdong relocations", zh: "明初洪洞大移民" },
    what: {
      en: "Mass relocations from southwestern Shanxi (Hongdong 洪洞) repopulate war-emptied regions of Hebei, Shandong, Henan and beyond.",
      zh: "明初自晋南洪洞向战后人口空旷的冀、鲁、豫等地大规模迁徙。",
    },
    why: {
      en: "Mongol-era and dynastic-transition warfare emptied much of the North China Plain; the imperial state organized the resettlement.",
      zh: "蒙元末与朝代更替的战乱使华北平原大量人口流失；帝国组织重新安置。",
    },
    effect: {
      en: "Lexical and phonological substrata from Jin embed in northern Mandarin varieties — but the destinations level toward Mandarin, not Jin.",
      zh: "晋语词汇与音系底层进入北方官话——但目的地总体趋同于官话，而非晋语。",
    },
  },
  {
    id: "li-rong",
    year: "1985 CE",
    numericYear: 1985,
    era: "modern",
    title: { en: "Li Rong establishes Jin as an independent group", zh: "李荣立晋语为一级独立片" },
    what: {
      en: "Li Rong (李荣), in 中国语言地图集 prefatory work, treats Jin as a top-level Sinitic group, separate from Mandarin.",
      zh: "李荣在《中国语言地图集》中将晋语处理为独立于官话的一级方言片。",
    },
    why: {
      en: "Retention of the entering tone and a distinct historical sound-change profile do not fit any Mandarin sub-group.",
      zh: "保留入声及独特的历史音变谱系，无法纳入任一官话次方言。",
    },
    effect: {
      en: "Modern reference works adopt the classification; institutional recognition follows.",
      zh: "现代参考文献采用此分类；机构层面的承认随之而来。",
    },
  },
];
