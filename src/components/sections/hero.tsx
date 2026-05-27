import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { PROFILE } from "@/data/portfolio";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { incrementCounter } from "@/lib/counter";
import { ArrowDownRight, Briefcase, Eye, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const t = useT();
  const { theme } = useTheme();
  const gridColor =
    theme === "dark" ? "rgb(255,255,255)" : "rgb(0,0,0)";

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] mask-fade-b">
        <FlickeringGrid
          squareSize={3}
          gridGap={6}
          color={gridColor}
          maxOpacity={theme === "dark" ? 0.18 : 0.1}
          flickerChance={0.12}
        />
      </div>

      <div className="flex flex-col items-start gap-8 md:grid md:items-center md:gap-10 md:grid-cols-[1fr_auto]">
        <Portrait className="md:order-2" />
        <div className="space-y-6 md:order-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-700 backdrop-blur dark:text-amber-300">
              <Briefcase className="size-3.5" />
              {t(PROFILE.currentRole)}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t({
                pt: "Aberto a freelance · remoto",
                en: "Open to freelance · remote",
              })}
            </span>
            <PageViewsBadge />
          </div>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            {t({
              pt: `Olá, sou o ${PROFILE.firstName}.`,
              en: `Hi, I'm ${PROFILE.firstName}.`,
            })}
          </h1>

          <p className="max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            {t(PROFILE.bio)}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#orcamento"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-foreground/90"
            >
              {t({ pt: "Pedir Orçamento", en: "Request a quote" })}
              <ArrowDownRight className="size-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground/90 backdrop-blur transition hover:bg-card"
            >
              {t({ pt: "Ver trabalhos", en: "View work" })}
            </a>
            <span className="inline-flex items-center gap-1.5 pl-1 text-xs text-muted-foreground">
              <MapPin className="size-3.5" /> {PROFILE.location}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

/** Fires a page-view hit on first render and shows the running total. */
function PageViewsBadge() {
  const t = useT();
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Increment first so the visitor counts themselves
    incrementCounter("page-views").then((val) => setViews(val));
  }, []);

  // Don't render until we have a value
  if (views === null) return null;

  return (
    <span
      title={t({ pt: `${views} visitas ao site`, en: `${views} site visits` })}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
    >
      <Eye className="size-3.5" />
      {views.toLocaleString()}
    </span>
  );
}

function Portrait({ className = "" }: { className?: string }) {
  return (
    <div className={"relative " + className}>
      <div className="relative size-28 sm:size-36 md:size-44 lg:size-52">
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-foreground/12 via-foreground/5 to-transparent blur-2xl" />
        <div className="relative size-full overflow-hidden rounded-full border border-border bg-card shadow-[0_0_40px_rgba(0,0,0,0.05)] dark:shadow-[0_0_40px_rgba(255,255,255,0.04)]">
          <img
            src="./me.png"
            alt="Leonel Ferreira"
            className="size-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        <span className="absolute -bottom-1 -right-1 rounded-full border border-border bg-card/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
          v2.0
        </span>
      </div>
    </div>
  );
}
