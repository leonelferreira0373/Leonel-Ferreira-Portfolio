import { SKILLS, LANGUAGES } from "@/data/portfolio";
import { SectionHeading } from "@/components/sections/about";
import { useT } from "@/lib/i18n";
import { Code2, Palette, Wrench, Video } from "lucide-react";

const ICONS = {
  code: Code2,
  design: Palette,
  ops: Wrench,
  media: Video,
} as const;

export function Skills() {
  const t = useT();
  return (
    <section id="skills" className="py-16">
      <SectionHeading
        kicker={t({ pt: "02 · Competências", en: "02 · Skills" })}
        title={t({ pt: "Com o que trabalho", en: "What I work with" })}
      />
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {SKILLS.map((s) => {
          const Icon = ICONS[s.group];
          const label = t(s.name);
          return (
            <div
              key={label}
              className="group flex items-center gap-2.5 rounded-lg border border-border bg-card/40 px-3.5 py-2.5 text-sm text-foreground/90 backdrop-blur transition hover:border-foreground/30 hover:bg-card"
            >
              <Icon className="size-4 text-muted-foreground transition group-hover:text-foreground" />
              <span className="truncate">{label}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {t({ pt: "Idiomas", en: "Languages" })}
        </div>
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map((l) => {
            const name = t(l.name);
            return (
              <span
                key={name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-sm"
              >
                <span className="font-medium">{name}</span>
                <span className="text-muted-foreground">· {t(l.level)}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
