import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { PROFILE } from "@/data/portfolio";
import { ArrowDownRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] mask-fade-b">
        <FlickeringGrid
          squareSize={3}
          gridGap={6}
          color="rgb(255,255,255)"
          maxOpacity={0.18}
          flickerChance={0.12}
        />
      </div>

      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for freelance · remote-friendly
          </div>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Hi, I'm {PROFILE.firstName}.
          </h1>

          <p className="max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            {PROFILE.bio}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-foreground/90"
            >
              View work
              <ArrowDownRight className="size-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground/90 backdrop-blur transition hover:bg-card"
            >
              Get in touch
            </a>
            <span className="inline-flex items-center gap-1.5 pl-1 text-xs text-muted-foreground">
              <MapPin className="size-3.5" /> {PROFILE.location}
            </span>
          </div>
        </div>

        <Portrait />
      </div>
    </section>
  );
}

function Portrait() {
  return (
    <div className="relative hidden md:block">
      <div className="relative size-44 lg:size-52">
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-white/12 via-white/5 to-transparent blur-2xl" />
        <div className="relative size-full overflow-hidden rounded-full border border-border bg-card shadow-[0_0_40px_rgba(255,255,255,0.04)]">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/40 via-zinc-900 to-black" />
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 size-full opacity-90"
            aria-hidden
          >
            <defs>
              <radialGradient id="g" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
            <rect width="100" height="100" fill="url(#g)" />
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-mono text-4xl font-medium tracking-[0.1em] text-white/90 lg:text-5xl">
              LF
            </span>
          </div>
        </div>
        <span className="absolute -bottom-1 -right-1 rounded-full border border-border bg-card/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
          v2.0
        </span>
      </div>
    </div>
  );
}
