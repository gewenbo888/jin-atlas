"use client";

import { useState } from "react";
import { useLang } from "@/i18n/LangProvider";
import { CULTURE } from "@/data/culture";

type Group = "opera" | "idiom" | "food";

export function Culture() {
  const { t, s, lang } = useLang();
  const [group, setGroup] = useState<Group>("opera");
  const items = CULTURE.filter((c) => c.group === group);

  return (
    <section id="culture" className="relative border-t border-[var(--line)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 mb-12">
          <div>
            <div className="eyebrow">{s(t.culture.eyebrow)}</div>
            <h2 className="headline text-[34px] lg:text-[42px] mt-6 max-w-[300px]">
              {s(t.culture.title)}
            </h2>
          </div>
          <p className="text-[16px] leading-[1.7] font-serif text-[var(--ink-soft)] max-w-[700px] self-end">
            {s(t.culture.sub)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {(["opera", "idiom", "food"] as Group[]).map((g) => {
            const active = group === g;
            return (
              <button
                key={g}
                onClick={() => setGroup(g)}
                className={`chip cursor-pointer ${active ? "" : "opacity-50"}`}
                style={active ? { color: "var(--accent)", borderColor: "var(--accent)" } : undefined}
              >
                {g === "opera" && s(t.culture.sections.opera)}
                {g === "idiom" && s(t.culture.sections.idiom)}
                {g === "food" && s(t.culture.sections.foodculture)}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)] rounded-2xl overflow-hidden">
          {items.map((c) => (
            <div key={c.id} className="bg-[var(--panel)] p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="dot" style={{ background: "var(--vermilion)" }} />
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--ink-mute)]">
                  {c.group === "opera" && s(t.culture.sections.opera)}
                  {c.group === "idiom" && s(t.culture.sections.idiom)}
                  {c.group === "food" && s(t.culture.sections.foodculture)}
                </span>
              </div>
              <h3 className="font-han text-[22px] mb-1">{c.name.zh}</h3>
              <div className="font-display text-[13px] text-[var(--ink-soft)] mb-4">{c.name.en}</div>

              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--ink-mute)] mb-1.5">
                {s(t.culture.fields.meaning)}
              </div>
              <p className="text-[13.5px] leading-[1.6] text-[var(--ink-soft)] mb-4">
                {lang === "zh" ? c.meaning.zh : c.meaning.en}
              </p>

              {(lang === "zh" ? c.mandarinEq.zh : c.mandarinEq.en) !== "—" && (
                <>
                  <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--ink-mute)] mb-1.5">
                    {s(t.culture.fields.mandarinEquivalent)}
                  </div>
                  <p className="text-[13px] leading-[1.55] text-[var(--ink-soft)] mb-4 italic-serif">
                    {lang === "zh" ? c.mandarinEq.zh : c.mandarinEq.en}
                  </p>
                </>
              )}

              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--accent)] mb-1.5">
                {s(t.culture.fields.origin)}
              </div>
              <p className="text-[13px] leading-[1.55] text-[var(--ink-soft)]">
                {lang === "zh" ? c.origin.zh : c.origin.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
