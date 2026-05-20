import { EXPERIENCE } from "@/data/portfolio";
import { SectionHeading } from "@/components/sections/about";
import { useT } from "@/lib/i18n";

export function Experience() {
  const t = useT();
  return (
    <section id="experience" className="py-16">
      <SectionHeading
        kicker={t({ pt: "06 · Experiência", en: "06 · Experience" })}
        title={t({ pt: "Experiência profissional", en: "Work Experience" })}
      />
      <ol className="relative space-y-3">
        {EXPERIENCE.map((e) => (
          <li
            key={e.company + t(e.period)}
            className="group rounded-xl border border-border bg-card/40 p-5 backdrop-blur transition hover:border-foreground/30 hover:bg-card"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-base font-semibold tracking-tight">
                    {e.company}
                  </h3>
                  {e.location ? (
                    <span className="text-xs text-muted-foreground">
                      · {t(e.location)}
                    </span>
                  ) : null}
                </div>
                <div className="mt-0.5 text-sm text-muted-foreground">
                  {t(e.role)}
                </div>
              </div>
              <time className="shrink-0 rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                {t(e.period)}
              </time>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {e.bullets.map((b, i) => (
                <li key={i} className="relative pl-4 leading-relaxed">
                  <span className="absolute left-0 top-2 inline-block size-1 rounded-full bg-muted-foreground/60" />
                  {t(b)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
