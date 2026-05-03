"use client";

import { useLang } from "@/i18n/LangProvider";

const NAV = [
  { href: "#overview", key: "overview" as const },
  { href: "#features", key: "features" as const },
  { href: "#map", key: "map" as const },
  { href: "#timeline", key: "timeline" as const },
  { href: "#zhao", key: "zhao" as const },
  { href: "#geography", key: "geography" as const },
  { href: "#culture", key: "culture" as const },
  { href: "#compare", key: "compare" as const },
];

export function Header() {
  const { lang, toggle, t, s } = useLang();
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] backdrop-blur-md bg-[rgba(20,17,11,0.78)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="font-han text-[22px] text-[var(--accent)]">晋</span>
          <span className="font-display text-[15px] tracking-tight font-medium">
            {s(t.meta.siteName)}
            <span className="text-[var(--ink-mute)] ml-2 hidden md:inline font-normal">
              · {s(t.meta.tagline)}
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((n) => (
            <a
              key={n.key}
              href={n.href}
              className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
            >
              {s(t.nav[n.key])}
            </a>
          ))}
        </nav>

        <button
          onClick={toggle}
          className="font-mono text-[11px] tracking-[0.14em] uppercase border border-[var(--line)] hover:border-[var(--accent)] rounded px-3 py-1.5 text-[var(--ink-soft)] hover:text-[var(--ink)] transition-all flex items-center gap-2"
          aria-label="Toggle language"
        >
          <span className={lang === "en" ? "text-[var(--accent)]" : ""}>EN</span>
          <span className="text-[var(--ink-mute)]">|</span>
          <span className={lang === "zh" ? "text-[var(--accent)]" : ""}>中文</span>
        </button>
      </div>
    </header>
  );
}
