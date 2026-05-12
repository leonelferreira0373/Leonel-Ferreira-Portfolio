import { SKILLS, LANGUAGES } from "@/data/portfolio";
import { SectionHeading } from "@/components/sections/about";
import { Code2, Palette, Wrench, Video } from "lucide-react";

const ICONS = {
  code: Code2,
  design: Palette,
  ops: Wrench,
  media: Video,
} as const;

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <SectionHeading kicker="02 · Skills" title="What I work with" />
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {SKILLS.map((s) => {
          const Icon = ICONS[s.group];
          return (
            <div
              key={s.name}
              className="group flex items-center gap-2.5 rounded-lg border border-border bg-card/40 px-3.5 py-2.5 text-sm text-foreground/90 backdrop-blur transition hover:border-foreground/30 hover:bg-card"
            >
              <Icon className="size-4 text-muted-foreground transition group-hover:text-foreground" />
              <span className="truncate">{s.name}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Languages
        </div>
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map((l) => (
            <span
              key={l.name}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-sm"
            >
              <span className="font-medium">{l.name}</span>
              <span className="text-muted-foreground">· {l.level}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
