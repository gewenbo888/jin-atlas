"use client";

import { useLang } from "@/i18n/LangProvider";
import { ZHAO_BLOCKS, ZHAO_TERRITORY } from "@/data/zhao";

export function ZhaoSection() {
  const { t, s, lang } = useLang();
  return (
    <section id="zhao" className="relative border-t border-[var(--line)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 mb-12">
          <div>
            <div className="eyebrow">{s(t.zhao.eyebrow)}</div>
            <h2 className="headline text-[34px] lg:text-[42px] mt-6 max-w-[320px]">
              {s(t.zhao.title)}
            </h2>
          </div>
          <p className="text-[16px] leading-[1.7] font-serif text-[var(--ink-soft)] max-w-[760px] self-end">
            {s(t.zhao.sub)}
          </p>
        </div>

        {/* Territory facts table + ornamental seal */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-px bg-[var(--line)] border border-[var(--line)] rounded-2xl overflow-hidden mb-10">
          <div className="bg-[var(--panel)] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-han text-[26px] text-[var(--vermilion)]">趙</span>
              <h3 className="font-display text-[22px] tracking-tight">
                {lang === "zh" ? "赵国概况" : "State of Zhao — fact panel"}
              </h3>
            </div>
            <div className="divide-y divide-[var(--line)]">
              {ZHAO_TERRITORY.map((row, i) => (
                <div key={i} className="grid sm:grid-cols-[180px_1fr] gap-3 py-3.5">
                  <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-mute)]">
                    {lang === "zh" ? row.axis.zh : row.axis.en}
                  </div>
                  <div className="text-[14px] text-[var(--ink-soft)] leading-[1.55]">
                    {lang === "zh" ? row.value.zh : row.value.en}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seal */}
          <div className="bg-[var(--panel-soft)] p-6 lg:p-8 flex items-center justify-center min-w-[260px]">
            <div className="flex flex-col items-center">
              <div
                className="w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center"
                style={{
                  background: "var(--vermilion)",
                  borderRadius: "8px",
                  boxShadow: "inset 0 0 0 4px var(--vermilion), inset 0 0 0 6px rgba(20,17,11,0.4)",
                }}
              >
                <span className="font-han text-[60px] lg:text-[72px] text-[var(--ink)]" style={{ fontWeight: 700 }}>
                  趙
                </span>
              </div>
              <div className="mt-4 font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--ink-mute)]">
                {lang === "zh" ? "赵 · 战国" : "Zhao · Warring States"}
              </div>
            </div>
          </div>
        </div>

        {/* Map: Zhao bowl outline + Jin overlay schematic */}
        <ZhaoMap lang={lang} />

        {/* Five reasoning blocks */}
        <div className="mt-10 grid lg:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)] rounded-2xl overflow-hidden">
          {ZHAO_BLOCKS.map((b, i) => {
            const isCaveat = b.id === "caveat";
            return (
              <div
                key={b.id}
                className={`bg-[var(--panel)] p-6 lg:p-8 ${isCaveat ? "border-l-2 border-[var(--vermilion)]" : ""}`}
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--vermilion)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[19px] tracking-tight">
                    {lang === "zh" ? b.title.zh : b.title.en}
                  </h3>
                </div>
                {isCaveat && (
                  <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--vermilion)] mb-2">
                    {s(t.zhao.caveatTitle)}
                  </div>
                )}
                <p className="text-[14.5px] leading-[1.75] text-[var(--ink-soft)] font-serif">
                  {lang === "zh" ? b.body.zh : b.body.en}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ZhaoMap({ lang }: { lang: "en" | "zh" }) {
  const W = 1000;
  const H = 360;

  return (
    <div className="panel p-5 lg:p-6 overflow-x-auto">
      <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-[var(--ink-mute)] mb-4">
        {lang === "zh" ? "赵国核心区与晋语带的地理叠加（示意）" : "Zhao core territory × Jin-language belt — schematic overlay"}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto min-w-[700px]">
        <defs>
          <pattern id="zhaoStripe" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="var(--vermilion)" strokeWidth="2" strokeOpacity="0.45" />
          </pattern>
          <pattern id="jinDots" patternUnits="userSpaceOnUse" width="10" height="10">
            <circle cx="2" cy="2" r="1.2" fill="var(--accent)" fillOpacity="0.6" />
          </pattern>
        </defs>

        {/* Title labels */}
        <text x="40" y="34" fontFamily="var(--font-mono)" fontSize="11" fill="var(--vermilion)" letterSpacing="2">
          {lang === "zh" ? "赵国核心" : "ZHAO CORE"}
        </text>
        <text x="40" y="52" fontFamily="var(--font-mono)" fontSize="11" fill="var(--accent)" letterSpacing="2">
          {lang === "zh" ? "晋语带" : "JIN BELT"}
        </text>

        {/* Map frame */}
        <rect x="120" y="40" width={W - 160} height={H - 80} fill="none" stroke="var(--line)" strokeWidth="0.8" />

        {/* Yellow river — schematic */}
        <path d="M 220 60 L 220 280 L 850 295" fill="none" stroke="var(--water)" strokeWidth="3" strokeOpacity="0.6" strokeLinecap="round" />
        <text x="200" y="180" fontFamily="var(--font-han)" fontSize="12" fill="var(--water)" textAnchor="end">
          {lang === "zh" ? "黄河" : "Yellow R."}
        </text>

        {/* Taihang */}
        <path d="M 540 70 L 580 160 L 600 250 L 640 295" fill="none" stroke="var(--mountain)" strokeWidth="2.5" strokeOpacity="0.7" strokeDasharray="6 4" strokeLinecap="round" />
        <text x="620" y="170" fontFamily="var(--font-han)" fontSize="12" fill="var(--mountain)">
          {lang === "zh" ? "太行" : "Taihang"}
        </text>

        {/* Lüliang */}
        <path d="M 320 80 L 320 280" fill="none" stroke="var(--mountain)" strokeWidth="2.5" strokeOpacity="0.7" strokeDasharray="6 4" strokeLinecap="round" />
        <text x="298" y="100" fontFamily="var(--font-han)" fontSize="12" fill="var(--mountain)" textAnchor="end">
          {lang === "zh" ? "吕梁" : "Lüliang"}
        </text>

        {/* Jin belt — broader shaded region */}
        <polygon
          points="200,80 750,80 780,180 780,290 220,290 200,260"
          fill="url(#jinDots)"
          stroke="var(--accent)"
          strokeWidth="1.4"
          strokeOpacity="0.65"
        />

        {/* Zhao core — narrower, NE-leaning */}
        <polygon
          points="380,90 720,90 770,180 750,270 350,270 320,170"
          fill="url(#zhaoStripe)"
          stroke="var(--vermilion)"
          strokeWidth="1.6"
        />

        {/* Capitals */}
        <Cap x={420} y={210} label={lang === "zh" ? "晋阳 (太原)" : "Jinyang (Taiyuan)"} />
        <Cap x={690} y={250} label={lang === "zh" ? "邯郸" : "Handan"} />

        {/* Dialect cores (tiny dots) */}
        <Marker x={420} y={210} label={lang === "zh" ? "并州" : "Bing"} />
        <Marker x={335} y={210} label={lang === "zh" ? "吕梁" : "Lüliang"} />
        <Marker x={465} y={290} label={lang === "zh" ? "上党" : "Shang."} />
        <Marker x={490} y={120} label={lang === "zh" ? "大包" : "Datong"} />
        <Marker x={250} y={240} label={lang === "zh" ? "志延" : "Zhi-Yan"} />
        <Marker x={650} y={130} label={lang === "zh" ? "张呼" : "Zhang-Hu"} />
        <Marker x={700} y={295} label={lang === "zh" ? "邯新" : "Han-Xin"} />

        {/* Note */}
        <text x={W / 2} y={H - 14} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--ink-mute)" letterSpacing="2">
          {lang === "zh"
            ? "示意图——并非历史地理学权威边界。重点在重叠形态。"
            : "SCHEMATIC — NOT AN AUTHORITATIVE BOUNDARY. THE OVERLAP IS THE POINT."}
        </text>
      </svg>
    </div>
  );
}

function Cap({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x - 4} y={y - 4} width="8" height="8" fill="var(--vermilion)" />
      <text x={x + 8} y={y + 4} fontFamily="var(--font-han)" fontSize="13" fill="var(--ink)">
        ✦ {label}
      </text>
    </g>
  );
}

function Marker({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="3" fill="var(--accent)" />
      <text x={x + 6} y={y - 6} fontFamily="var(--font-han)" fontSize="10" fill="var(--accent)">
        {label}
      </text>
    </g>
  );
}
