import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { PROFILE } from "@/data/portfolio";
import { GithubIcon, WhatsAppIcon } from "@/components/brand-icons";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full mask-radial">
        <FlickeringGrid
          squareSize={3}
          gridGap={6}
          color="rgb(255,255,255)"
          maxOpacity={0.16}
          flickerChance={0.1}
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          05 · Contact
        </div>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Get in touch
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
          Wanna chat? Drop a{" "}
          <a
            href={`mailto:${PROFILE.email}`}
            className="link"
          >
            mail
          </a>{" "}
          or message me directly on{" "}
          <a
            href={PROFILE.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            WhatsApp
          </a>
          . Open to freelance, contract, and full-time roles.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-foreground/90"
          >
            <Mail className="size-4" /> {PROFILE.email}
          </a>
          <a
            href={PROFILE.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-card"
          >
            <WhatsAppIcon className="size-4" /> {PROFILE.whatsapp}
          </a>
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-card"
          >
            <GithubIcon className="size-4" /> @{PROFILE.github}
          </a>
        </div>
      </div>
    </section>
  );
}
