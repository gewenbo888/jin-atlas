"use client";

import { useLang } from "@/i18n/LangProvider";
import { COMPARE } from "@/data/culture";

export function ComparisonEngine() {
  const { t, s, lang } = useLang();
  return (
    <section id="compare" className="relative border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 mb-12">
          <div>
            <div className="eyebrow">{s(t.compare.eyebrow)}</div>
            <h2 className="headline text-[34px] lg:text-[42px] mt-6 max-w-[300px]">
              {s(t.compare.title)}
            </h2>
          </div>
          <p className="text-[16px] leading-[1.7] font-serif text-[var(--ink-soft)] max-w-[700px] self-end">
            {s(t.compare.sub)}
          </p>
        </div>

        <div className="panel overflow-x-auto">
          <table className="w-full text-[13.5px]">
            <thead>
              <tr>
                <th className="px-5 py-4 text-left font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--ink-mute)] border-b border-[var(--line)] w-[200px]">
                  {s(t.compare.cols.axis)}
                </th>
                <th className="px-5 py-4 text-left font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--accent)] border-b border-[var(--accent)]">
                  {s(t.compare.cols.jin)}
                </th>
                <th className="px-5 py-4 text-left font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--ink-soft)] border-b border-[var(--line)]">
                  {s(t.compare.cols.mandarin)}
                </th>
                <th className="px-5 py-4 text-left font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--ink-mute)] border-b border-[var(--line)]">
                  {s(t.compare.cols.other)}
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr key={i} className="border-t border-[var(--line)] hover-row">
                  <td className="px-5 py-4 font-display text-[14px]">
                    {lang === "zh" ? row.axis.zh : row.axis.en}
                  </td>
                  <td className="px-5 py-4 text-[var(--ink)] leading-[1.55]">
                    {lang === "zh" ? row.jin.zh : row.jin.en}
                  </td>
                  <td className="px-5 py-4 text-[var(--ink-soft)] leading-[1.55]">
                    {lang === "zh" ? row.mandarin.zh : row.mandarin.en}
                  </td>
                  <td className="px-5 py-4 text-[var(--ink-mute)] leading-[1.55] italic-serif">
                    {lang === "zh" ? row.other.zh : row.other.en}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 text-[12px] italic-serif text-[var(--ink-mute)]">
          {s(t.compare.note)}
        </div>
      </div>
    </section>
  );
}
