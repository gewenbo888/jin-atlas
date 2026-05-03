"use client";

import { useState } from "react";
import { useLang } from "@/i18n/LangProvider";
import { DIALECTS, GEO_FEATURES } from "@/data/dialects";

export function DialectMap() {
  const { t, s, lang } = useLang();
  const [active, setActive] = useState<string | null>("bingzhou");

  const W = 1000;
  const H = 600;
  const xy = (x: number, y: number) => [x * W, y * H];

  // Convert poly array to "x,y x,y ..." string
  const polyStr = (poly: number[]) =>
    poly
      .reduce<number[][]>((acc, v, i) => {
        if (i % 2 === 0) acc.push([v, 0]);
        else acc[acc.length - 1][1] = v;
        return acc;
      }, [])
      .map(([x, y]) => `${x * W},${y * H}`)
      .join(" ");

  // Convert path string with normalized coordinates to SVG path
  const geoPath = (p: string) =>
    p.replace(/([MLCQ])\s*([\d.]+)\s+([\d.]+)/g, (_m, cmd, x, y) => `${cmd} ${parseFloat(x) * W} ${parseFloat(y) * H}`);

  const activeDialect = active ? DIALECTS.find((d) => d.id === active) : null;

  return (
    <section id="map" className="relative border-t border-[var(--line)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 mb-12">
          <div>
            <div className="eyebrow">{s(t.map.eyebrow)}</div>
            <h2 className="headline text-[34px] lg:text-[42px] mt-6 max-w-[300px]">
              {s(t.map.title)}
            </h2>
          </div>
          <p className="text-[16px] leading-[1.7] font-serif text-[var(--ink-soft)] max-w-[700px] self-end">
            {s(t.map.sub)}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-px bg-[var(--line)] border border-[var(--line)] rounded-2xl overflow-hidden">
          {/* Map */}
          <div className="bg-[var(--panel)] p-4 lg:p-5 overflow-x-auto">
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto min-w-[700px]">
              {/* Background grid */}
              <defs>
                <pattern id="loessgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--line)" strokeWidth="0.4" />
                </pattern>
              </defs>
              <rect x="0" y="0" width={W} height={H} fill="url(#loessgrid)" />

              {/* Yellow river (filled stroke) */}
              {GEO_FEATURES.filter((f) => f.type === "river").map((f) => (
                <path
                  key={f.id}
                  d={geoPath(f.path)}
                  fill="none"
                  stroke="var(--water)"
                  strokeWidth="3"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                />
              ))}

              {/* Mountain ranges (dashed) */}
              {GEO_FEATURES.filter((f) => f.type === "mountain").map((f) => (
                <path
                  key={f.id}
                  d={geoPath(f.path)}
                  fill="none"
                  stroke="var(--mountain)"
                  strokeWidth="2.5"
                  strokeOpacity="0.7"
                  strokeDasharray="6 4"
                  strokeLinecap="round"
                />
              ))}

              {/* Dialect polygons */}
              {DIALECTS.map((d) => {
                const isActive = active === d.id;
                return (
                  <g
                    key={d.id}
                    onClick={() => setActive(isActive ? null : d.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <polygon
                      points={polyStr(d.poly)}
                      fill={isActive ? "var(--accent)" : "var(--loess)"}
                      fillOpacity={isActive ? 0.22 : 0.08}
                      stroke={isActive ? "var(--accent)" : "var(--loess)"}
                      strokeWidth={isActive ? 1.6 : 1}
                    />
                    <text
                      x={xy(d.cx, d.cy)[0]}
                      y={xy(d.cx, d.cy)[1] - 4}
                      textAnchor="middle"
                      fontFamily="var(--font-han)"
                      fontSize="16"
                      fill={isActive ? "var(--accent)" : "var(--ink)"}
                    >
                      {d.name.zh}
                    </text>
                    <text
                      x={xy(d.cx, d.cy)[0]}
                      y={xy(d.cx, d.cy)[1] + 12}
                      textAnchor="middle"
                      fontFamily="var(--font-mono)"
                      fontSize="10"
                      letterSpacing="2"
                      fill={isActive ? "var(--accent)" : "var(--ink-mute)"}
                    >
                      {d.pinyin.toUpperCase()}
                    </text>
                  </g>
                );
              })}

              {/* Geo labels */}
              {GEO_FEATURES.map((f) => {
                // Pick a midpoint roughly: use first coord
                const m = f.path.match(/M\s*([\d.]+)\s+([\d.]+)/);
                if (!m) return null;
                const x = parseFloat(m[1]) * W;
                const y = parseFloat(m[2]) * H;
                return (
                  <text
                    key={f.id}
                    x={x + 6}
                    y={y - 6}
                    fontFamily="var(--font-han)"
                    fontSize="11"
                    fill={f.type === "river" ? "var(--water)" : "var(--mountain)"}
                  >
                    {lang === "zh" ? f.name.zh : f.name.en}
                  </text>
                );
              })}
            </svg>
            <div className="mt-3 italic-serif text-[12px] text-[var(--ink-mute)] leading-snug">
              {s(t.map.legendNote)}
            </div>
          </div>

          {/* Side detail */}
          <div className="bg-[var(--panel-soft)] p-5 lg:p-6">
            {activeDialect ? (
              <div className="step-in">
                <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-[var(--accent)] mb-2">
                  {activeDialect.pinyin.toUpperCase()}
                </div>
                <div className="font-han text-[24px] mb-1">{activeDialect.name.zh}</div>
                <div className="font-display text-[14px] text-[var(--ink-soft)] mb-4">
                  {activeDialect.name.en}
                </div>

                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--ink-mute)] mt-5 mb-1.5">
                  {s(t.map.fields.cities)}
                </div>
                <p className="text-[13.5px] leading-[1.55] text-[var(--ink-soft)]">
                  {lang === "zh" ? activeDialect.cities.zh : activeDialect.cities.en}
                </p>

                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--ink-mute)] mt-5 mb-1.5">
                  {s(t.map.fields.speakers)}
                </div>
                <p className="font-display text-[20px] tabular text-[var(--accent)]">
                  ~{activeDialect.speakersM} M
                </p>

                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--ink-mute)] mt-5 mb-2">
                  {s(t.map.fields.traits)}
                </div>
                <ul className="space-y-2">
                  {activeDialect.traits.map((tr, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] leading-[1.55]">
                      <span className="dot mt-1.5 flex-shrink-0" style={{ background: "var(--vermilion)" }} />
                      <span>{lang === "zh" ? tr.zh : tr.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center">
                <p className="text-[14px] italic-serif text-[var(--ink-mute)]">
                  {lang === "zh" ? "点击地图上的方言片以查看其特征。" : "Click a region on the map to read its traits."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
