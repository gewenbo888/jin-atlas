"use client";

import { useState } from "react";
import { useLang } from "@/i18n/LangProvider";
import { TIMELINE } from "@/data/timeline";
import type { Era } from "@/data/types";

const ERA_ORDER: Era[] = ["old", "middle", "jin", "modern"];
const ERA_VAR: Record<Era, string> = {
  old: "var(--era-old)",
  middle: "var(--era-middle)",
  jin: "var(--era-jin)",
  modern: "var(--era-modern)",
};
const ERA_CLASS: Record<Era, string> = {
  old: "era-old",
  middle: "era-middle",
  jin: "era-jin",
  modern: "era-modern",
};

export function Timeline() {
  const { t, s, lang } = useLang();
  const [openId, setOpenId] = useState<string | null>("ru-loss-mandarin");
  const events = [...TIMELINE].sort((a, b) => a.numericYear - b.numericYear);

  return (
    <section id="timeline" className="relative border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 mb-12">
          <div>
            <div className="eyebrow">{s(t.timeline.eyebrow)}</div>
            <h2 className="headline text-[34px] lg:text-[42px] mt-6 max-w-[300px]">
              {s(t.timeline.title)}
            </h2>
          </div>
          <p className="text-[16px] leading-[1.7] font-serif text-[var(--ink-soft)] max-w-[700px] self-end">
            {s(t.timeline.sub)}
          </p>
        </div>

        {/* Era legend */}
        <div className="flex flex-wrap gap-2 mb-8">
          {ERA_ORDER.map((era) => (
            <span key={era} className={`chip ${ERA_CLASS[era]}`}>
              <span className="dot" style={{ background: ERA_VAR[era] }} />
              {s(t.timeline.eras[era])}
            </span>
          ))}
        </div>

        <div className="relative">
          <div
            className="absolute left-[18px] lg:left-[26px] top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(180deg, var(--era-old), var(--era-middle), var(--era-jin), var(--era-modern))",
              opacity: 0.5,
            }}
          />
          <div className="space-y-3">
            {events.map((e) => (
              <div key={e.id} className="relative pl-12 lg:pl-16">
                <div
                  className="absolute left-[14px] lg:left-[22px] top-5 w-2.5 h-2.5 rounded-full ring-4 ring-[var(--bg)]"
                  style={{ background: ERA_VAR[e.era] }}
                />
                <button
                  onClick={() => setOpenId(openId === e.id ? null : e.id)}
                  className="w-full text-left panel hover:border-[var(--accent)] transition-all p-5 lg:p-6"
                >
                  <div className="flex items-baseline gap-4 flex-wrap">
                    <div className="font-mono text-[12px] tabular text-[var(--ink-mute)]">{e.year}</div>
                    <span className={`chip ${ERA_CLASS[e.era]}`}>
                      <span className="dot" style={{ background: ERA_VAR[e.era] }} />
                      {s(t.timeline.eras[e.era]).split("·")[0].trim()}
                    </span>
                    <h3 className="font-display text-[18px] lg:text-[20px] tracking-tight">
                      {lang === "zh" ? e.title.zh : e.title.en}
                    </h3>
                    <span className="ml-auto font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--ink-mute)]">
                      {openId === e.id ? "−" : "+"}
                    </span>
                  </div>
                  {openId === e.id && (
                    <div className="grid md:grid-cols-3 gap-5 mt-5 step-in">
                      <Field label={lang === "zh" ? "事件 / 创新" : "What"} text={lang === "zh" ? e.what.zh : e.what.en} color={ERA_VAR[e.era]} />
                      <Field label={lang === "zh" ? "为什么发生" : "Why"} text={lang === "zh" ? e.why.zh : e.why.en} color="var(--ink-mute)" />
                      <Field label={lang === "zh" ? "影响" : "Effect"} text={lang === "zh" ? e.effect.zh : e.effect.en} color="var(--accent)" />
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, text, color }: { label: string; text: string; color: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] tracking-[0.16em] uppercase mb-2" style={{ color }}>
        {label}
      </div>
      <p className="text-[13.5px] leading-[1.65] text-[var(--ink-soft)]">{text}</p>
    </div>
  );
}
