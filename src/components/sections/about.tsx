import { PROFILE } from "@/data/portfolio";
import { useLang, useT } from "@/lib/i18n";
import type { ReactNode } from "react";

export function About() {
  const t = useT();
  const { lang } = useLang();
  return (
    <section id="about" className="py-16">
      <SectionHeading
        kicker={t({ pt: "01 · Sobre", en: "01 · About" })}
        title={t({ pt: "Sobre", en: "About" })}
      />
      <p className="max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        {lang === "pt" ? (
          <>
            Builder multidisciplinar a construir coisas que não partem. Desenhei
            e construí em{" "}
            <a className="link" href="#experience">
              três empresas
            </a>
            , mantenho um fluxo constante de{" "}
            <a className="link" href="#projects">
              projectos pessoais
            </a>{" "}
            e trabalho com ferramentas modernas de IA todos os dias.
            Confortável com o ritmo de startup e problemas técnicos complexos —
            desde o storefront Next.js do{" "}
            <a
              className="link"
              href="https://geosstore.store"
              target="_blank"
              rel="noreferrer"
            >
              GEOSSTORE
            </a>{" "}
            a uma app de moto-táxi em Kotlin, branding para lojas locais, ou
            backends completos de e-commerce.
          </>
        ) : (
          <>
            Multidisciplinary builder shipping things that don't break. I've
            designed and built across{" "}
            <a className="link" href="#experience">
              three companies
            </a>
            , maintain a steady stream of{" "}
            <a className="link" href="#projects">
              personal projects
            </a>
            , and work with modern AI tooling daily. Comfortable with startup
            pace and complex technical problems — from a Next.js storefront for{" "}
            <a
              className="link"
              href="https://geosstore.store"
              target="_blank"
              rel="noreferrer"
            >
              GEOSSTORE
            </a>{" "}
            to a Kotlin moto-taxi app, branding for local shops, or fully-fledged
            e-commerce backends.
          </>
        )}
      </p>
      <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
        {t({
          pt: `Base em ${PROFILE.location} · trabalho remoto · aberto a colaborações e contratos.`,
          en: `Based in ${PROFILE.location} · remote-friendly · open to collaborations and contract work.`,
        })}
      </p>
    </section>
  );
}

export function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: ReactNode;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className="mb-8 space-y-2">
      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {kicker}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
