import { useState, useEffect } from "react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { PROFILE } from "@/data/portfolio";
import { GithubIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/brand-icons";
import { useT, useLang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Mail, Download } from "lucide-react";

export function Contact() {
  const t = useT();
  const { lang } = useLang();
  const { theme } = useTheme();
  const gridColor =
    theme === "dark" ? "rgb(255,255,255)" : "rgb(0,0,0)";
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      alert(lang === "pt" ? "App já instalada ou navegador não suportado." : "App already installed or not supported by your browser.");
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
    }
  };

  const waMessage =
    lang === "pt"
      ? "Olá Leonel! 👋 O meu nome é (preencher) e gostava de falar sobre um projeto. Podemos conversar?"
      : "Hi Leonel! 👋 My name is (preencher) and I'd like to talk about a project. Can we chat?";
  const waHref = `${PROFILE.whatsappLink}?text=${encodeURIComponent(waMessage)}`;

  return (
    <section id="contact" className="relative isolate overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full mask-radial">
        <FlickeringGrid
          squareSize={3}
          gridGap={6}
          color={gridColor}
          maxOpacity={theme === "dark" ? 0.16 : 0.09}
          flickerChance={0.1}
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {t({ pt: "08 · Contacto", en: "08 · Contact" })}
        </div>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          {t({ pt: "Vamos falar", en: "Get in touch" })}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
          {lang === "pt" ? (
            <>
              Queres falar? Envia um{" "}
              <a href={`mailto:${PROFILE.email}`} className="link">
                email
              </a>{" "}
              ou manda mensagem directa no{" "}
              <a
                href={PROFILE.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                WhatsApp
              </a>
              . Aberto a freelance, contratos e funções full-time.
            </>
          ) : (
            <>
              Wanna chat? Drop a{" "}
              <a href={`mailto:${PROFILE.email}`} className="link">
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
            </>
          )}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-foreground/90"
          >
            <Mail className="size-4" /> {PROFILE.email}
          </a>
          <a
            href={waHref}
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
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-card"
          >
            <LinkedInIcon className="size-4" /> LinkedIn
          </a>
          <a
            href={PROFILE.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-card"
          >
            <InstagramIcon className="size-4" /> @{PROFILE.instagram}
          </a>
          <button
            onClick={handleInstallClick}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-card cursor-pointer"
          >
            <Download className="size-4" /> {t({ pt: "Baixar", en: "Download" })}
          </button>
        </div>
      </div>
    </section>
  );
}
