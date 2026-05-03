"use client";

import { useState } from "react";
import { useLang } from "@/i18n/LangProvider";
import { CONSONANTS, FINALS, MORPHO, TONES } from "@/data/phonology";

type Tab = "tones" | "finals" | "consonants" | "morpho";

export function FeatureEngine() {
  const { t, s, lang } = useLang();
  const [tab, setTab] = useState<Tab>("tones");

  return (
    <section id="features" className="relative border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 mb-12">
          <div>
            <div className="eyebrow">{s(t.features.eyebrow)}</div>
            <h2 className="headline text-[34px] lg:text-[42px] mt-6 max-w-[300px]">
              {s(t.features.title)}
            </h2>
          </div>
          <p className="text-[16px] leading-[1.7] font-serif text-[var(--ink-soft)] max-w-[700px] self-end">
            {s(t.features.sub)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {(["tones", "finals", "consonants", "morpho"] as Tab[]).map((k) => {
            const active = tab === k;
            return (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`chip cursor-pointer ${active ? "" : "opacity-50"}`}
                style={active ? { color: "var(--accent)", borderColor: "var(--accent)" } : undefined}
              >
                {s(t.features.sections[k])}
              </button>
            );
          })}
        </div>

        <div className="panel overflow-x-auto">
          {tab === "tones" && <TonesTable lang={lang} t={t} />}
          {tab === "finals" && <FinalsTable lang={lang} t={t} />}
          {tab === "consonants" && <ConsonantsTable lang={lang} t={t} />}
          {tab === "morpho" && <MorphoTable lang={lang} t={t} />}
        </div>

        <div className="mt-4 flex items-center gap-x-5 gap-y-1 flex-wrap text-[11px] font-mono uppercase tracking-[0.14em]">
          <span className="text-[var(--vermilion)]">
            <span className="dot mr-1.5" style={{ background: "var(--vermilion)" }} />
            {s(t.features.legend.retain)}
          </span>
          <span className="text-[var(--ink-mute)]">
            <span className="dot mr-1.5" style={{ background: "var(--ink-mute)" }} />
            {s(t.features.legend.mandarinLost)}
          </span>
        </div>
      </div>
    </section>
  );
}

function ColHeader({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 font-mono text-[10px] tracking-[0.14em] uppercase text-left font-normal text-[var(--ink-mute)] border-b border-[var(--line)]">
      {children}
    </th>
  );
}

function TonesTable({ lang, t }: { lang: "en" | "zh"; t: ReturnType<typeof useLang>["t"] }) {
  return (
    <table className="w-full text-[13.5px]">
      <thead>
        <tr>
          <ColHeader>{lang === "zh" ? "调名" : "Tone"}</ColHeader>
          <ColHeader>{s2(t.features.cols.jin, lang)}</ColHeader>
          <ColHeader>{s2(t.features.cols.mandarin, lang)}</ColHeader>
          <ColHeader>{lang === "zh" ? "调值/特征" : "Contour"}</ColHeader>
          <ColHeader>{s2(t.features.cols.note, lang)}</ColHeader>
        </tr>
      </thead>
      <tbody>
        {TONES.map((row, i) => {
          const isRu = i === TONES.length - 1;
          return (
            <tr key={row.toneName.en} className={`border-t border-[var(--line)] ${isRu ? "bg-[rgba(200,74,58,0.05)]" : ""}`}>
              <td className="px-4 py-3">
                <span className={`font-display ${isRu ? "text-[var(--vermilion)]" : ""}`}>{lang === "zh" ? row.toneName.zh : row.toneName.en}</span>
              </td>
              <td className="px-4 py-3 font-mono tabular text-[var(--ink-soft)]">{row.jin}</td>
              <td className="px-4 py-3 font-mono tabular text-[var(--ink-soft)]">{row.mandarin}</td>
              <td className="px-4 py-3 italic-serif text-[var(--ink-soft)]">{lang === "zh" ? row.contour.zh : row.contour.en}</td>
              <td className="px-4 py-3 text-[var(--ink-soft)]">{lang === "zh" ? row.note.zh : row.note.en}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function FinalsTable({ lang, t }: { lang: "en" | "zh"; t: ReturnType<typeof useLang>["t"] }) {
  return (
    <table className="w-full text-[13.5px]">
      <thead>
        <tr>
          <ColHeader>{s2(t.features.cols.midchinese, lang)}</ColHeader>
          <ColHeader>{s2(t.features.cols.jin, lang)}</ColHeader>
          <ColHeader>{s2(t.features.cols.mandarin, lang)}</ColHeader>
          <ColHeader>{lang === "zh" ? "字例" : "Example"}</ColHeader>
          <ColHeader>{s2(t.features.cols.note, lang)}</ColHeader>
        </tr>
      </thead>
      <tbody>
        {FINALS.map((row) => (
          <tr key={row.midchinese} className="border-t border-[var(--line)]">
            <td className="px-4 py-3 font-mono text-[var(--ink-mute)]">{row.midchinese}</td>
            <td className="px-4 py-3 font-mono tabular text-[var(--vermilion)]">{row.jin}</td>
            <td className="px-4 py-3 font-mono tabular text-[var(--ink-mute)]">{row.mandarin}</td>
            <td className="px-4 py-3"><span className="han-large text-[18px]">{row.example}</span></td>
            <td className="px-4 py-3 text-[var(--ink-soft)]">{lang === "zh" ? row.note.zh : row.note.en}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ConsonantsTable({ lang, t }: { lang: "en" | "zh"; t: ReturnType<typeof useLang>["t"] }) {
  return (
    <table className="w-full text-[13.5px]">
      <thead>
        <tr>
          <ColHeader>{lang === "zh" ? "特征" : "Feature"}</ColHeader>
          <ColHeader>{s2(t.features.cols.jin, lang)}</ColHeader>
          <ColHeader>{s2(t.features.cols.mandarin, lang)}</ColHeader>
          <ColHeader>{s2(t.features.cols.note, lang)}</ColHeader>
        </tr>
      </thead>
      <tbody>
        {CONSONANTS.map((row) => (
          <tr key={row.feature.en} className="border-t border-[var(--line)]">
            <td className="px-4 py-3 font-display text-[var(--ink)]">{lang === "zh" ? row.feature.zh : row.feature.en}</td>
            <td className="px-4 py-3 font-mono text-[var(--ink-soft)]">{row.jin}</td>
            <td className="px-4 py-3 font-mono text-[var(--ink-mute)]">{row.mandarin}</td>
            <td className="px-4 py-3 text-[var(--ink-soft)]">{lang === "zh" ? row.note.zh : row.note.en}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function MorphoTable({ lang, t }: { lang: "en" | "zh"; t: ReturnType<typeof useLang>["t"] }) {
  return (
    <table className="w-full text-[13.5px]">
      <thead>
        <tr>
          <ColHeader>{lang === "zh" ? "形态特征" : "Feature"}</ColHeader>
          <ColHeader>{lang === "zh" ? "晋语用法" : "Jin form"}</ColHeader>
          <ColHeader>IPA</ColHeader>
          <ColHeader>{lang === "zh" ? "对应官话" : "Mandarin equivalent"}</ColHeader>
          <ColHeader>{s2(t.features.cols.note, lang)}</ColHeader>
        </tr>
      </thead>
      <tbody>
        {MORPHO.map((row) => (
          <tr key={row.feature.en} className="border-t border-[var(--line)]">
            <td className="px-4 py-3 font-display text-[var(--ink)]">{lang === "zh" ? row.feature.zh : row.feature.en}</td>
            <td className="px-4 py-3 han-large text-[16px] text-[var(--vermilion)]">{row.jinExample}</td>
            <td className="px-4 py-3 font-mono text-[var(--ink-soft)]">{row.jinIPA}</td>
            <td className="px-4 py-3 han-large text-[14px] text-[var(--ink-mute)]">{row.mandarinEquivalent}</td>
            <td className="px-4 py-3 text-[var(--ink-soft)]">{lang === "zh" ? row.note.zh : row.note.en}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function s2(b: { en: string; zh: string }, lang: "en" | "zh") {
  return lang === "zh" ? b.zh : b.en;
}
