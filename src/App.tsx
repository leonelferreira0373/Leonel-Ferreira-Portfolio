import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { SocialDock } from "@/components/social-dock";
import { PROFILE } from "@/data/portfolio";

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
        <Experience />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function NavBar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
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
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition hover:bg-foreground/90 md:inline-flex"
        >
          Hire me
        </a>
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
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 text-xs text-muted-foreground sm:flex-row sm:px-8">
        <div className="font-mono">
          © {new Date().getFullYear()} {PROFILE.name}
        </div>
        <div className="flex items-center gap-1">
          <span className="font-mono">{PROFILE.location}</span>
          <span>·</span>
          <span>Built with React, Vite, Tailwind & MagicUI</span>
        </div>
      </div>
    </footer>
  );
}
