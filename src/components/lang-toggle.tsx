import { useLang } from "@/lib/i18n";

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-full border border-border bg-card/60 p-0.5 font-mono text-[11px] backdrop-blur"
    >
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        className={
          "rounded-full px-2.5 py-1 uppercase tracking-wider transition " +
          (lang === "pt"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground")
        }
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={
          "rounded-full px-2.5 py-1 uppercase tracking-wider transition " +
          (lang === "en"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground")
        }
      >
        EN
      </button>
    </div>
  );
}
