import { useState, useEffect } from "react";
import { APPS, type AppDownload } from "@/data/portfolio";
import { SectionHeading } from "@/components/sections/about";
import { useT } from "@/lib/i18n";
import { Bike, Download, Eraser, Moon, Palette, Store } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getCounterValue, incrementCounter } from "@/lib/counter";

const ICONS: Record<AppDownload["icon"], LucideIcon> = {
  moon: Moon,
  store: Store,
  bike: Bike,
  eraser: Eraser,
  palette: Palette,
};

const ACCENTS: Record<AppDownload["accent"], { ring: string; bg: string; text: string; chip: string }> = {
  violet: {
    ring: "border-violet-500/30",
    bg: "from-violet-500/15 via-violet-500/5 to-transparent",
    text: "text-violet-600 dark:text-violet-300",
    chip: "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  },
  amber: {
    ring: "border-amber-500/30",
    bg: "from-amber-500/15 via-amber-500/5 to-transparent",
    text: "text-amber-600 dark:text-amber-300",
    chip: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  },
  emerald: {
    ring: "border-emerald-500/30",
    bg: "from-emerald-500/15 via-emerald-500/5 to-transparent",
    text: "text-emerald-600 dark:text-emerald-300",
    chip: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  },
  rose: {
    ring: "border-rose-500/30",
    bg: "from-rose-500/15 via-rose-500/5 to-transparent",
    text: "text-rose-600 dark:text-rose-300",
    chip: "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300",
  },
  sky: {
    ring: "border-sky-500/30",
    bg: "from-sky-500/15 via-sky-500/5 to-transparent",
    text: "text-sky-600 dark:text-sky-300",
    chip: "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  },
};

export function Apps() {
  const t = useT();
  return (
    <section id="apps" className="py-16">
      <SectionHeading
        kicker={t({ pt: "04 · Apps", en: "04 · Apps" })}
        title={t({
          pt: "Apps que construí",
          en: "Apps I've built",
        })}
        description={t({
          pt: "Faz download directo dos APKs Android e bundles para Windows. Para APKs, activa \"Fontes desconhecidas\" no Android antes de instalar.",
          en: "Direct download for Android APKs and Windows bundles. For APKs, enable \"Unknown sources\" on Android before installing.",
        })}
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {APPS.map((app) => (
          <AppCard key={app.name} app={app} />
        ))}
      </div>
    </section>
  );
}

function AppCover({ cover, name, accentBg }: { cover?: string | string[]; name: string; accentBg: string }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const covers = Array.isArray(cover) ? cover : cover ? [cover] : [];

  useEffect(() => {
    if (covers.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % covers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [covers.length]);

  if (covers.length === 0) {
    return <div className={`pointer-events-none absolute inset-x-0 top-0 -z-0 h-24 bg-gradient-to-b ${accentBg}`} />;
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-black/10">
      {covers.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`${name} cover ${idx + 1}`}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            idx === activeIdx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

function AppCard({ app }: { app: AppDownload }) {
  const t = useT();
  const Icon = ICONS[app.icon];
  const accent = ACCENTS[app.accent];
  const [downloads, setDownloads] = useState<number | null>(null);

  const counterSlug = `download-${app.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  useEffect(() => {
    getCounterValue(counterSlug).then((val) => {
      if (val > 0) {
        setDownloads(val);
      }
    });
  }, [counterSlug]);

  const handleDownload = () => {
    incrementCounter(counterSlug).then((val) => {
      if (val > 0) {
        setDownloads(val);
      }
    });
  };

  return (
    <article className="relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/40 backdrop-blur transition hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-card">
      <AppCover cover={app.cover} name={app.name} accentBg={accent.bg} />
      <div className="relative flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`grid size-12 place-items-center rounded-xl border ${accent.ring} bg-background/80 ${accent.text}`}>
              <Icon className="size-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">{app.name}</h3>
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {t(app.platform)}
              </div>
            </div>
          </div>
          <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${accent.chip}`}>
            {app.version}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {t(app.blurb)}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <a
            href={app.url}
            download
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-foreground/90"
          >
            <Download className="size-4" />
            {app.kind === "exe"
              ? t({ pt: "Baixar EXE", en: "Download EXE" })
              : t({ pt: "Baixar APK", en: "Download APK" })}
          </a>
          <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
            <span>{app.size}</span>
            {downloads !== null && downloads > 0 && (
              <span className="inline-flex items-center gap-0.5 text-muted-foreground/80">
                • <Download className="size-3" /> {downloads}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
