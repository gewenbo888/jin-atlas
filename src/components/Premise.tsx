"use client";

import { useLang } from "@/i18n/LangProvider";

export function Premise() {
  const { t, s } = useLang();
  return (
    <section id="premise" className="relative border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16">
          <div>
            <div className="eyebrow">{s(t.premise.eyebrow)}</div>
            <h2 className="headline text-[34px] lg:text-[42px] mt-6 max-w-[300px]">
              {s(t.premise.title)}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {t.premise.blocks.map((b) => (
              <div
                key={b.n}
                className="panel p-7 lg:p-8 hover:border-[var(--accent)] transition-colors"
              >
                <div className="font-mono text-[11px] tracking-[0.16em] text-[var(--ink-mute)]">{b.n}</div>
                <h3 className="font-serif text-[22px] leading-[1.25] mt-3 max-w-[340px]">
                  {s(b.h)}
                </h3>
                <p className="text-[14.5px] leading-[1.7] text-[var(--ink-soft)] mt-4 font-serif">
                  {s(b.p)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
