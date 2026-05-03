"use client";

import { useLang } from "@/i18n/LangProvider";
import { DIALECTS } from "@/data/dialects";

export function Overview() {
  const { t, s, lang } = useLang();
  const regions = ["shanxi", "shaanxi", "mongolia", "hebei", "henan"] as const;

  return (
    <section id="overview" className="relative border-t border-[var(--line)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 mb-12">
          <div>
            <div className="eyebrow">{s(t.overview.eyebrow)}</div>
            <h2 className="headline text-[34px] lg:text-[42px] mt-6 max-w-[300px]">
              {s(t.overview.title)}
            </h2>
          </div>
          <p className="text-[16px] leading-[1.7] font-serif text-[var(--ink-soft)] max-w-[700px] self-end">
            {s(t.overview.sub)}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-px bg-[var(--line)] border border-[var(--line)] rounded-2xl overflow-hidden">
          {/* Definition + diagnostic */}
          <div className="bg-[var(--panel)] p-6 lg:p-8">
            <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-[var(--ink-mute)] mb-2">
              {s(t.overview.fields.definition)}
            </div>
            <p className="text-[15.5px] leading-[1.7] font-serif">
              {lang === "zh"
                ? "晋语（拼音 Jìnyǔ）是汉语方言中的一支，主要分布于中国华北的山西省及其相邻地区。多数现代分类（自李荣 1985 起）将其立为与官话并列的一级方言片。"
                : "Jin Chinese (Pinyin: Jìnyǔ) is a Sinitic variety primarily spoken in Shanxi Province and adjacent regions of northern China. Most modern classifications since Li Rong (1985) treat it as a top-level Sinitic group, parallel with Mandarin rather than subordinate to it."}
            </p>

            <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-[var(--vermilion)] mt-7 mb-2">
              {s(t.overview.fields.diagnostic)}
            </div>
            <p className="text-[14.5px] leading-[1.7] text-[var(--ink-soft)]">
              {s(t.overview.fields.diagnosticText)}
            </p>

            <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-[var(--ink-mute)] mt-7 mb-3">
              {s(t.overview.fields.distribution)}
            </div>
            <ul className="space-y-2 text-[14px] leading-[1.6]">
              {regions.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="dot mt-1.5" style={{ background: "var(--accent)" }} />
                  <span>{s(t.overview.region[r])}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sub-groups list */}
          <div className="bg-[var(--panel-soft)] p-6 lg:p-8">
            <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-[var(--ink-mute)] mb-3">
              {s(t.overview.fields.groups)}
            </div>
            <div className="space-y-3">
              {DIALECTS.map((d) => (
                <div key={d.id} className="border-l-2 border-[var(--accent)] pl-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="font-display text-[15px] tracking-tight">
                      {lang === "zh" ? d.name.zh : d.name.en}
                    </div>
                    <div className="font-mono text-[11px] tabular text-[var(--ink-mute)]">~{d.speakersM}M</div>
                  </div>
                  <div className="text-[12.5px] text-[var(--ink-soft)] mt-0.5">
                    {lang === "zh" ? d.cities.zh : d.cities.en}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
