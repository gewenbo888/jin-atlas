"use client";

import { useLang } from "@/i18n/LangProvider";
import { DIALECTS } from "@/data/dialects";

export function Hero() {
  const { t, s } = useLang();
  const totalSpeakers = DIALECTS.reduce((a, d) => a + d.speakersM, 0);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 paper-bg pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 pt-20 lg:pt-32 pb-20 lg:pb-28">
        <div className="eyebrow mb-8">{s(t.hero.eyebrow)}</div>

        <div className="flex items-baseline gap-6 lg:gap-10 flex-wrap">
          <span className="font-han text-[88px] sm:text-[140px] lg:text-[180px] leading-none text-[var(--vermilion)]">
            晋
          </span>
          <h1 className="headline text-[40px] sm:text-[58px] lg:text-[78px] max-w-[1100px]">
            {s(t.hero.title1)}{" "}
            <span className="italic-serif text-[var(--accent)]">{s(t.hero.titleEm)}</span>
            {s(t.hero.title2)}
          </h1>
        </div>

        <p className="mt-10 max-w-[860px] text-[17px] leading-[1.75] text-[var(--ink-soft)] font-serif">
          {s(t.hero.sub)}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#map" className="btn btn-primary">
            {s(t.hero.cta1)}
            <span aria-hidden>→</span>
          </a>
          <a href="#premise" className="btn">
            {s(t.hero.cta2)}
          </a>
        </div>

        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)] rounded-xl overflow-hidden">
          <Stat n={`~${Math.round(totalSpeakers)}`} label={s(t.hero.statSpeakers)} />
          <Stat n={String(DIALECTS.length)} label={s(t.hero.statDialects)} />
          <Stat n="5" label={s(t.hero.statTones)} />
          <Stat n="4+" label={s(t.hero.statRegions)} />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="bg-[var(--bg)] px-6 py-7">
      <div className="font-display text-[34px] sm:text-[42px] tracking-tight tabular text-[var(--accent)]">
        {n}
      </div>
      <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--ink-mute)] mt-1">
        {label}
      </div>
    </div>
  );
}
