import { PROJECTS, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/sections/about";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <SectionHeading
        kicker="03 · Projects"
        title="Check out my latest work"
        description="A mix of shipped products and client work — from e-commerce to identity and Android apps."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { name, blurb, href, image, tags, live } = project;
  return (
    <a
      href={href ?? "#"}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/40 backdrop-blur transition hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-card"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-gradient-to-br from-zinc-800/60 via-zinc-900 to-black">
        {image ? (
          <img
            src={image}
            alt={`${name} preview`}
            className="size-full object-cover opacity-80 transition group-hover:scale-[1.02] group-hover:opacity-100"
            loading="lazy"
          />
        ) : (
          <ProjectPlaceholder name={name} />
        )}
        {live ? (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 backdrop-blur">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Live
            <ExternalLink className="size-3" />
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
          <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{blurb}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function ProjectPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(/[\s&]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id={`grid-${initials}`}
              width="14"
              height="14"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 14 0 L 0 0 0 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${initials})`} />
        </svg>
      </div>
      <div className="relative z-10 font-mono text-3xl font-medium tracking-widest text-white/40">
        {initials}
      </div>
    </div>
  );
}
