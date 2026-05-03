"use client";

import { useLang } from "@/i18n/LangProvider";

export function Footer() {
  const { t, s } = useLang();
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-14 lg:py-16">
        <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-han text-[20px] text-[var(--accent)]">晋</span>
              <span className="font-display text-[14px]">{s(t.meta.siteName)}</span>
            </div>
            <p className="text-[13.5px] leading-[1.7] text-[var(--ink-soft)] max-w-[480px] font-serif">
              {s(t.footer.line1)}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.14em] uppercase">
              <a
                href="https://psyverse.fun"
                className="text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                {s(t.footer.portfolio)} →
              </a>
              <a
                href="mailto:gewenbo84@gmail.com"
                className="text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
              >
                {s(t.footer.contact)} →
              </a>
              <a
                href="https://github.com/gewenbo888/jin-atlas"
                className="text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                Github →
              </a>
            </div>
          </div>
          <div className="panel-soft p-5 lg:p-6">
            <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-[var(--ink-mute)] mb-2">
              {s(t.footer.method)}
            </div>
            <p className="text-[12.5px] leading-[1.65] text-[var(--ink-soft)] font-serif">
              {s(t.footer.methodText)}
            </p>
          </div>
        </div>
        <div className="divider my-10" />
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--ink-mute)]">
          <span>© 2026 Gewenbo</span>
          <span>Jin Language Atlas · 晋语图谱 · v0.1</span>
        </div>
      </div>
    </footer>
  );
}
