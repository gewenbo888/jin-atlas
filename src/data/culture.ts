import type { CompareRow, CultureItem } from "./types";

export const CULTURE: CultureItem[] = [
  {
    id: "jinju",
    group: "opera",
    name: { en: "Jin Opera (晋剧 / 中路梆子)", zh: "晋剧（中路梆子）" },
    meaning: {
      en: "Bangzi-style opera centered on the Bingzhou region; the most widely-recognized stage form of Jin culture, with sharp percussion and a high-pitched register.",
      zh: "并州片地区为中心的梆子戏；晋文化最具识别度的舞台形式，打击节奏锋利、唱腔高亢。",
    },
    mandarinEq: { en: "—", zh: "—" },
    origin: { en: "Taiyuan area, codified late Qing.", zh: "太原一带，晚清成型。" },
  },
  {
    id: "puju",
    group: "opera",
    name: { en: "Pu Opera (蒲剧)", zh: "蒲剧（蒲州梆子）" },
    meaning: {
      en: "South-Shanxi bangzi tradition. Older than Jin Opera; the seed from which most Shanxi-area bangzi forms diverged.",
      zh: "晋南梆子。比晋剧更古老，山西多种梆子形式皆从其分化。",
    },
    mandarinEq: { en: "—", zh: "—" },
    origin: { en: "Puzhou (蒲州 — modern Yongji), Ming dynasty roots.", zh: "蒲州（今永济），明代起源。" },
  },
  {
    id: "shangdang-bangzi",
    group: "opera",
    name: { en: "Shangdang Bangzi (上党梆子)", zh: "上党梆子" },
    meaning: {
      en: "Bangzi opera of the Shangdang sub-group region. Rougher, lower-register vocal style than Jin Opera.",
      zh: "上党片地区的梆子戏；嗓音风格较晋剧粗厚。",
    },
    mandarinEq: { en: "—", zh: "—" },
    origin: { en: "Changzhi-Jincheng region, Qing-era refinement.", zh: "长治—晋城一带，清代成熟。" },
  },
  {
    id: "ge-prefix",
    group: "idiom",
    name: { en: "圪 [kəʔ-] verbs", zh: "‘圪’字动词" },
    meaning: {
      en: "Light-aspect / continuative verbal prefix: 圪转 'to potter / wander', 圪吵 'to grumble', 圪台 'a small step / ledge'. The most recognizable Jin morpheme outside the region.",
      zh: "轻态/持续态前缀：圪转、圪吵、圪台。区外最易识别的晋语形态成分。",
    },
    mandarinEq: { en: "(no general equivalent)", zh: "（一般无对应）" },
    origin: { en: "Pan-Jin; richest in Bingzhou and Lüliang.", zh: "全晋通用；并州、吕梁最丰富。" },
  },
  {
    id: "saoqi",
    group: "idiom",
    name: { en: "骚情 [sɑʊ tɕʰiŋ]", zh: "骚情" },
    meaning: {
      en: "Affectionate / showy / 'making a fuss in a warm way' — applied to children and close friends. Not pejorative.",
      zh: "亲昵的逞能、撒娇，常用于小孩与亲近者。不带贬义。",
    },
    mandarinEq: { en: "撒娇 / 显摆 (partial)", zh: "‘撒娇’/‘显摆’（部分对应）" },
    origin: { en: "Bingzhou region, Taiyuan vernacular.", zh: "并州片，太原口语。" },
  },
  {
    id: "hou",
    group: "idiom",
    name: { en: "猴 [xəu] used as 'sneaky / clever'", zh: "‘猴’作‘机灵/古怪精灵’" },
    meaning: {
      en: "A character — usually a child — who is too clever for their own good. Carries a fond tone in Jin that Mandarin's 调皮 lacks.",
      zh: "聪明过头之人——常指孩子。语气中的亲昵在官话‘调皮’中较少。",
    },
    mandarinEq: { en: "调皮 / 鬼精灵", zh: "调皮 / 鬼精灵" },
    origin: { en: "Pan-Jin oral.", zh: "晋语口语普遍。" },
  },
  {
    id: "noodles",
    group: "food",
    name: { en: "Daoxiao mian (刀削面) and noodle culture", zh: "刀削面与面食文化" },
    meaning: {
      en: "Shanxi runs on noodles. Knife-shaved noodles, cat's-ear pasta (猫耳朵), pulled noodles — a culinary register that is also a vocabulary register, full of Jin-internal terms not found elsewhere.",
      zh: "山西以面食为主。刀削面、猫耳朵、拉面——这是一套饮食体系，也是一套词汇体系，其内部术语在外地多不可解。",
    },
    mandarinEq: { en: "—", zh: "—" },
    origin: { en: "Loess plateau wheat agriculture; Tang-era origins for daoxiao mian.", zh: "黄土高原小麦农作；刀削面源于唐代说法流行。" },
  },
  {
    id: "vinegar",
    group: "food",
    name: { en: "Aged vinegar (老陈醋)", zh: "老陈醋" },
    meaning: {
      en: "Shanxi's defining condiment — fermented over years, with a recognized cultural role akin to wine in regions further south.",
      zh: "山西标志性调味——多年发酵；其文化地位近于南方某些地区之于酒。",
    },
    mandarinEq: { en: "—", zh: "—" },
    origin: { en: "Qingxu (清徐) and surrounding Bingzhou-area workshops.", zh: "清徐及并州片周边作坊。" },
  },
];

export const COMPARE: CompareRow[] = [
  {
    axis: { en: "Tonal inventory", zh: "调类系统" },
    jin: {
      en: "5 tones — incl. distinct ru-tone (entering tone) with /-ʔ/ coda.",
      zh: "5 调——含明确独立的入声，带 /-ʔ/ 韵尾。",
    },
    mandarin: {
      en: "4 tones — entering tone redistributed across the other four.",
      zh: "4 调——入声归并入其余四声。",
    },
    other: {
      en: "Cantonese 6–9 (incl. 3+ entering tones); Min 7–8; Wu 5–8.",
      zh: "粤语 6–9 个（含 3 类以上入声）；闽语 7–8；吴语 5–8。",
    },
  },
  {
    axis: { en: "Stop codas (-p -t -k)", zh: "塞音韵尾 -p -t -k" },
    jin: { en: "Merged into /-ʔ/ — preserved as a single class.", zh: "合并为 /-ʔ/——以单一类别保留。" },
    mandarin: { en: "Lost entirely — open syllables.", zh: "全部脱落——为开音节。" },
    other: {
      en: "Cantonese / Min Nan retain all three distinct codas; Hakka retains two.",
      zh: "粤语、闽南语保留三类；客家语保留两类。",
    },
  },
  {
    axis: { en: "Voiced obstruent reflex", zh: "中古浊音的反映" },
    jin: { en: "Devoiced; tonal split with extra entering-tone reflex.", zh: "清化；并产生与入声相关的额外调类分化。" },
    mandarin: { en: "Devoiced; entering tone redistributed.", zh: "清化；入声重新归派。" },
    other: {
      en: "Wu retains the voicing distinction; Cantonese does not.",
      zh: "吴语保留浊音对立；粤语不保留。",
    },
  },
  {
    axis: { en: "Diminutive / iterative morphology", zh: "小称/反复形态" },
    jin: { en: "圪 [kəʔ-] productive prefix; 子 with stop-coda root residue.", zh: "‘圪 [kəʔ-]’产生力强；‘子’尾词根仍保留塞音残迹。" },
    mandarin: { en: "儿 [-ɚ] suffix (rhotacization); 子 with leveled root.", zh: "‘儿’尾（卷舌化）；‘子’尾词根趋平。" },
    other: {
      en: "Cantonese 仔 [tsɐi̯]; Wu 头 [dɤ]; Min 仔 [a]/兒 [ɲĩ].",
      zh: "粤‘仔’；吴‘头’；闽‘仔/儿’。",
    },
  },
  {
    axis: { en: "Aspectual particle", zh: "体貌助词" },
    jin: { en: "哩 [li] for progressive + assertion.", zh: "‘哩 [li]’兼标进行体与判断。" },
    mandarin: { en: "了 [lə] perfective; 着 [ʈʂɤ] continuous; 在 [tsai] progressive.", zh: "‘了’完成；‘着’持续；‘在’进行。" },
    other: { en: "Cantonese 緊 / 咗 / 過; Wu 仔 / 哉.", zh: "粤‘紧/咗/过’；吴‘仔/哉’。" },
  },
  {
    axis: { en: "Negative auxiliary", zh: "否定词" },
    jin: { en: "不 [pa] (more conservative vowel) + 没 [muəʔ] (entering-tone)", zh: "‘不 [pa]’（保守元音）+‘没 [muəʔ]’（入声尾）" },
    mandarin: { en: "不 [pu], 没 [meɪ] (no coda)", zh: "‘不 [pu]’、‘没 [meɪ]’（无韵尾）" },
    other: {
      en: "Cantonese 唔 / 冇; Min 毋 / 無; reflecting older negation systems.",
      zh: "粤‘唔/冇’；闽‘毋/無’，反映更古老的否定系统。",
    },
  },
  {
    axis: { en: "Lexical preservation (older roots)", zh: "词汇存古（古老词根）" },
    jin: { en: "Retains 圐圙 ‘enclosed area’; 兀 as demonstrative; 兀的; 嗖.", zh: "保留‘圐圙’（围拢之地）、‘兀’作指示、‘兀的’、‘嗖’等。" },
    mandarin: { en: "Most replaced by 那 / 圈 / 那个 / 哪.", zh: "多被‘那/圈/那个/哪’替代。" },
    other: {
      en: "Cantonese 嗰 / 呢; Min 即 / 彼; Hakka 该 / 兜.",
      zh: "粤‘嗰/呢’；闽‘即/彼’；客‘该/兜’。",
    },
  },
];
