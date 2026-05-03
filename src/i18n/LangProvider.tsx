"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Lang } from "./strings";
import { STRINGS } from "./strings";

type Bilingual = { en: string; zh: string };
type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: typeof STRINGS;
  s: (b: Bilingual) => string;
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = (typeof window !== "undefined" && localStorage.getItem("jinatlas.lang")) as
        | Lang
        | null;
      if (saved === "en" || saved === "zh") setLangState(saved);
      else if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("zh"))
        setLangState("zh");
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("jinatlas.lang", lang);
      if (typeof document !== "undefined") {
        document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
      }
    } catch {}
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((l) => (l === "en" ? "zh" : "en")), []);
  const s = useCallback((b: Bilingual) => b[lang], [lang]);

  const value = useMemo<Ctx>(() => ({ lang, setLang, toggle, t: STRINGS, s }), [lang, setLang, toggle, s]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
