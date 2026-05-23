import { PROJECTS, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/sections/about";
import { useT } from "@/lib/i18n";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export function Projects() {
  const t = useT();
  return (
    <section id="projects" className="py-16">
      <SectionHeading
        kicker={t({ pt: "03 · Websites", en: "03 · Websites" })}
        title={t({
          pt: "Websites que desenvolvi",
          en: "Websites I've developed",
        })}
        description={t({
          pt: "Mistura de produtos lançados e trabalho de cliente — e-commerce, identidade e apps Android.",
          en: "A mix of shipped products and client work — from e-commerce to identity and Android apps.",
        })}
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
  const t = useT();
  const { name, blurb, href, image, tags, live } = project;
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noreferrer" }
    : {};
  return (
    <Wrapper
      {...wrapperProps}
      className={
        "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/40 backdrop-blur transition " +
        (href
          ? "hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-card"
          : "")
      }
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-gradient-to-br from-muted via-card to-background">
        {image ? (
          <img
            src={image}
            alt={`${name} preview`}
            className="size-full object-cover transition group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <ProjectPlaceholder name={name} />
        )}
        {live ? (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-700 backdrop-blur dark:text-emerald-300">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            {t({ pt: "Online", en: "Live" })}
            <ExternalLink className="size-3" />
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
          <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {t(blurb)}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
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
      <div className="absolute inset-0 opacity-[0.12]" aria-hidden>
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
      <div className="relative z-10 font-mono text-3xl font-medium tracking-widest text-foreground/40">
        {initials}
      </div>
    </div>
  );
}
