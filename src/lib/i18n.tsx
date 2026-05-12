import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type Lang = "pt" | "en";
export type Bilingual = { pt: string; en: string };

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
} | null>(null);

function readInitial(): Lang {
  if (typeof window === "undefined") return "pt";
  const saved = window.localStorage.getItem("lang");
  if (saved === "pt" || saved === "en") return saved;
  return "pt";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitial);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((l) => (l === "pt" ? "en" : "pt"));

  return (
    <I18nContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLang must be inside I18nProvider");
  return ctx;
}

export function useT() {
  const { lang } = useLang();
  return (value: Bilingual | string): string =>
    typeof value === "string" ? value : value[lang];
}

export function tr(pt: string, en: string): Bilingual {
  return { pt, en };
}
