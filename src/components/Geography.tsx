"use client";

import { useLang } from "@/i18n/LangProvider";
import { BARRIERS } from "@/data/geography";

export function Geography() {
  const { t, s, lang } = useLang();
  return (
    <section id="geography" className="relative border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 mb-12">
          <div>
            <div className="eyebrow">{s(t.geography.eyebrow)}</div>
            <h2 className="headline text-[34px] lg:text-[42px] mt-6 max-w-[300px]">
              {s(t.geography.title)}
            </h2>
          </div>
          <p className="text-[16px] leading-[1.7] font-serif text-[var(--ink-soft)] max-w-[700px] self-end">
            {s(t.geography.sub)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)] rounded-2xl overflow-hidden">
          {BARRIERS.map((b) => (
            <div key={b.id} className="bg-[var(--panel)] p-6 lg:p-7">
              <div className="flex items-center gap-3 mb-3">
                <Glyph kind={b.id} />
                <h3 className="font-display text-[20px] tracking-tight">
                  {lang === "zh" ? b.name.zh : b.name.en}
                </h3>
              </div>

              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--ink-mute)] mb-1.5">
                {s(t.geography.fields.barrier)}
              </div>
              <p className="text-[13.5px] leading-[1.55] text-[var(--ink-soft)] mb-4">
                {lang === "zh" ? b.type.zh : b.type.en}
              </p>

              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--accent)] mb-1.5">
                {s(t.geography.fields.effect)}
              </div>
              <p className="text-[14px] leading-[1.65] mb-4">
                {lang === "zh" ? b.effect.zh : b.effect.en}
              </p>

              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--vermilion)] mb-1.5">
                {s(t.geography.fields.example)}
              </div>
              <p className="text-[13.5px] leading-[1.55] text-[var(--ink-soft)] italic-serif">
                {lang === "zh" ? b.example.zh : b.example.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Glyph({ kind }: { kind: string }) {
  if (kind === "yellow-river" || kind === "fen-valley") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
        <path d="M 4 6 Q 10 2 11 11 Q 12 20 18 16" fill="none" stroke="var(--water)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "loess") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
        <path d="M 2 18 L 6 8 L 9 14 L 13 4 L 17 12 L 20 18 Z" fill="var(--loess)" fillOpacity="0.4" stroke="var(--loess)" strokeWidth="1" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
      <path d="M 2 18 L 7 6 L 11 13 L 16 4 L 20 18 Z" fill="none" stroke="var(--mountain)" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
