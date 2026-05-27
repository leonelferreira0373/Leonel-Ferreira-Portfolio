import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Apps } from "@/components/sections/apps";
import { Gallery } from "@/components/sections/gallery";
import { Experience } from "@/components/sections/experience";
import { Estimate } from "@/components/sections/estimate";
import { Contact } from "@/components/sections/contact";
import { SocialDock } from "@/components/social-dock";
import { ThemeToggle } from "@/components/theme-toggle";
import { LangToggle } from "@/components/lang-toggle";
import { PROFILE } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background font-sans text-foreground antialiased">
      <NavBar />
      <SocialDock />
      <main className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Apps />
        <Divider />
        <Gallery />
        <Divider />
        <Experience />
        <Divider />
        <Estimate />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function NavBar() {
  const t = useT();
  const links = [
    { href: "#about", label: { pt: "Sobre", en: "About" } },
    { href: "#skills", label: { pt: "Competências", en: "Skills" } },
    { href: "#projects", label: { pt: "Websites", en: "Websites" } },
    { href: "#apps", label: { pt: "Apps", en: "Apps" } },
    { href: "#gallery", label: { pt: "Galeria", en: "Gallery" } },
    { href: "#experience", label: { pt: "Experiência", en: "Experience" } },
    { href: "#orcamento", label: { pt: "Orçamento", en: "Estimate" } },
    { href: "#contact", label: { pt: "Contacto", en: "Contact" } },
  ];
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          leonel<span className="text-muted-foreground">.dev</span>
        </a>
        <ul className="hidden items-center gap-1 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-muted-foreground transition hover:bg-foreground/5 hover:text-foreground"
              >
                {t(l.label)}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition hover:bg-foreground/90 sm:inline-flex"
          >
            {t({ pt: "Contratar", en: "Hire me" })}
          </a>
        </div>
      </nav>
    </header>
  );
}

function Divider() {
  return (
    <div className="relative h-px w-full">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 text-xs text-muted-foreground sm:flex-row sm:px-8">
        <div className="font-mono">
          © {new Date().getFullYear()} {PROFILE.name}
        </div>
        <div className="flex items-center gap-1 text-center">
          <span className="font-mono">{PROFILE.location}</span>
          <span>·</span>
          <span>
            {t({
              pt: "Feito com React, Vite, Tailwind & MagicUI",
              en: "Built with React, Vite, Tailwind & MagicUI",
            })}
          </span>
        </div>
      </div>
    </footer>
  );
}
