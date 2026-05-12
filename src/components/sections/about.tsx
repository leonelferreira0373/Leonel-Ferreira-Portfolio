import { PROFILE } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-16">
      <SectionHeading kicker="01 · About" title="About" />
      <p className="max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        Multidisciplinary builder shipping things that don't break. I've designed
        and built across{" "}
        <a className="link" href="#experience">
          three companies
        </a>
        , maintain a steady stream of{" "}
        <a className="link" href="#projects">
          personal projects
        </a>
        , and work with modern AI tooling daily. Comfortable with startup pace
        and complex technical problems — from a Next.js storefront for{" "}
        <a className="link" href="https://geosstore.store" target="_blank" rel="noreferrer">
          GEOSSTORE
        </a>{" "}
        to a Kotlin moto-taxi app, branding for local shops, or fully-fledged
        e-commerce backends.
      </p>
      <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
        Based in {PROFILE.location} · remote-friendly · open to collaborations and
        contract work.
      </p>
    </section>
  );
}

export function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
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
