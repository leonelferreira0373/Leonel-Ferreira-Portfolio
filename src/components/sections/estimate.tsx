import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/sections/about";
import { WhatsAppIcon } from "@/components/brand-icons";
import { PROFILE } from "@/data/portfolio";
import {
  PROJECT_TYPES,
  PHASES,
  HOURLY_RATE,
  MIN_HOURS,
  MAX_HOURS,
  priceFor,
  weeksFor,
  formatKz,
  groupThousands,
} from "@/data/estimate";
import { useT, useLang } from "@/lib/i18n";

export function Estimate() {
  const t = useT();
  const { lang } = useLang();

  const [typeId, setTypeId] = useState("ecommerce");
  const [tierIndex, setTierIndex] = useState(0);
  const [customHours, setCustomHours] = useState(200);
  const [showIncluded, setShowIncluded] = useState(false);

  const type = useMemo(
    () => PROJECT_TYPES.find((p) => p.id === typeId) ?? PROJECT_TYPES[0],
    [typeId],
  );

  const isCustom = !!type.custom;
  const tiers = type.tiers ?? [];
  const activeTier = tiers[Math.min(tierIndex, tiers.length - 1)];

  const hours = isCustom ? customHours : activeTier?.hours ?? 0;
  const total = priceFor(hours);
  const weeks = weeksFor(hours);

  const includedPages = useMemo(
    () => tiers.slice(0, tierIndex + 1).flatMap((tr) => tr.adds),
    [tiers, tierIndex],
  );
  const includedPayments = useMemo(
    () => tiers.slice(0, tierIndex + 1).flatMap((tr) => tr.payments ?? []),
    [tiers, tierIndex],
  );

  function selectType(id: string) {
    setTypeId(id);
    setTierIndex(0);
    const next = PROJECT_TYPES.find((p) => p.id === id);
    if (next?.custom) setCustomHours(next.defaultHours ?? 200);
  }

  const weeksLabel = t({ pt: "semanas", en: "weeks" });
  const tierLabel = activeTier ? t(activeTier.label) : "";
  const typeLabel = t(type.label);

  const whatsappHref = useMemo(() => {
    const pagesStr = includedPages.map((p) => t(p)).join(", ");
    const payStr = includedPayments.map((p) => t(p)).join(", ");
    const tierBit = isCustom
      ? ""
      : lang === "pt"
        ? ` — nível ${tierLabel}`
        : ` — ${tierLabel} tier`;

    const msg =
      lang === "pt"
        ? [
            `Olá Leonel! 👋 Tive interesse num projeto de ${typeLabel}${tierBit}.`,
            ``,
            `Estimativa no site:`,
            `• Total: ${formatKz(total)}`,
            `• Tempo: ~${weeks} semanas (${hours}h)`,
            pagesStr ? `• Inclui: ${pagesStr}` : null,
            payStr ? `• Pagamentos: ${payStr}` : null,
            ``,
            `O meu nome é (preencher) e gostava de falar sobre isto. Podemos conversar?`,
          ]
        : [
            `Hi Leonel! 👋 I'm interested in a ${typeLabel}${tierBit} project.`,
            ``,
            `Estimate from your site:`,
            `• Total: ${formatKz(total)}`,
            `• Time: ~${weeks} weeks (${hours}h)`,
            pagesStr ? `• Includes: ${pagesStr}` : null,
            payStr ? `• Payments: ${payStr}` : null,
            ``,
            `My name is (preencher) and I'd love to talk about this. Can we chat?`,
          ];

    const text = msg.filter((l) => l !== null).join("\n");
    return `${PROFILE.whatsappLink}?text=${encodeURIComponent(text)}`;
  }, [
    includedPages,
    includedPayments,
    isCustom,
    tierLabel,
    typeLabel,
    hours,
    weeks,
    total,
    lang,
    t,
  ]);

  return (
    <section id="orcamento" className="py-16">
      <SectionHeading
        kicker={t({ pt: "06 · Orçamento", en: "06 · Estimate" })}
        title={t({ pt: "Calcula o teu projeto", en: "Estimate your project" })}
        description={t({
          pt: "Crio praticamente qualquer coisa — apps, lojas, sistemas, convites. Escolhe o tipo, ajusta a complexidade e vê uma estimativa instantânea.",
          en: "I build almost anything — apps, stores, systems, invites. Pick a type, set the complexity, and get an instant estimate.",
        })}
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        {/* ── Controls ── */}
        <div className="lg:col-span-3 rounded-xl border border-border bg-card/40 p-5 backdrop-blur sm:p-6">
          {/* Type buttons */}
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t({ pt: "Tipo de projeto", en: "Project type" })}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {PROJECT_TYPES.map((p) => {
              const active = p.id === typeId;
              return (
                <button
                  key={p.id}
                  onClick={() => selectType(p.id)}
                  className={
                    "rounded-full border px-3.5 py-1.5 text-sm transition " +
                    (active
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background/60 text-muted-foreground hover:border-foreground/30 hover:text-foreground")
                  }
                >
                  {t(p.label)}
                </button>
              );
            })}
          </div>

          {/* Complexity / hours slider */}
          <div className="mt-7">
            <div className="flex items-baseline justify-between">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {isCustom
                  ? t({ pt: "Horas de trabalho", en: "Work hours" })
                  : t({ pt: "Complexidade", en: "Complexity" })}
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                {hours}h · ~{weeks} {weeksLabel}
              </div>
            </div>

            {isCustom ? (
              <div className="mt-3">
                <input
                  type="range"
                  min={MIN_HOURS}
                  max={MAX_HOURS}
                  step={20}
                  value={customHours}
                  onChange={(e) => setCustomHours(Number(e.target.value))}
                  className="w-full accent-foreground"
                  aria-label={t({ pt: "Horas de trabalho", en: "Work hours" })}
                />
                <div className="mt-1 flex justify-between font-mono text-[11px] text-muted-foreground">
                  <span>{MIN_HOURS}h</span>
                  <span>{MAX_HOURS}h · 6 {t({ pt: "meses", en: "months" })}</span>
                </div>
              </div>
            ) : (
              <div className="mt-3">
                <input
                  type="range"
                  min={0}
                  max={tiers.length - 1}
                  step={1}
                  value={tierIndex}
                  onChange={(e) => setTierIndex(Number(e.target.value))}
                  className="w-full accent-foreground"
                  aria-label={t({ pt: "Complexidade", en: "Complexity" })}
                />
                <div className="mt-1 flex justify-between text-xs">
                  {tiers.map((tier, i) => (
                    <span
                      key={tier.id}
                      className={
                        i === tierIndex
                          ? "font-medium text-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {t(tier.label)}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Included accordion */}
          {!isCustom && (
            <div className="mt-6 rounded-lg border border-border">
              <button
                onClick={() => setShowIncluded((v) => !v)}
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium transition hover:bg-foreground/5"
                aria-expanded={showIncluded}
              >
                {t({ pt: "Ver o que está incluído", en: "See what's included" })}
                <ChevronDown
                  className={
                    "size-4 text-muted-foreground transition " +
                    (showIncluded ? "rotate-180" : "")
                  }
                />
              </button>
              {showIncluded && (
                <div className="space-y-4 border-t border-border px-4 py-4">
                  <div>
                    <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {t({ pt: "Páginas & funcionalidades", en: "Pages & features" })}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {includedPages.map((p, i) => (
                        <span
                          key={i}
                          className="rounded-md border border-border bg-background/60 px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {t(p)}
                        </span>
                      ))}
                    </div>
                  </div>
                  {includedPayments.length > 0 && (
                    <div>
                      <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                        {t({ pt: "Meios de pagamento", en: "Payment methods" })}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {includedPayments.map((p, i) => (
                          <span
                            key={i}
                            className="rounded-md border border-border bg-background/60 px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            {t(p)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Result card ── */}
        <div className="lg:col-span-2 flex flex-col rounded-xl border border-border bg-card/60 p-6 backdrop-blur">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t({ pt: "Estimativa", en: "Estimate" })}
          </div>
          <div className="mt-2 text-4xl font-semibold tracking-tight">
            {formatKz(total)}
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            ~{weeks} {weeksLabel}
          </div>
          <div className="mt-1 font-mono text-[11px] text-muted-foreground">
            {hours} {t({ pt: "horas", en: "hours" })} · {groupThousands(HOURLY_RATE)} Kz/{t({ pt: "hora", en: "hour" })}
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-foreground/90"
          >
            <WhatsAppIcon className="size-4" />
            {t({ pt: "Contactar Agora", en: "Contact Now" })}
          </a>

          <p className="mt-4 text-pretty text-[11px] leading-relaxed text-muted-foreground">
            {t({
              pt: "O orçamento cobre apenas o desenvolvimento (2.000 Kz/h). Custos mensais — hosting, domínio e subscrições — não estão incluídos.",
              en: "The estimate covers development only (2,000 Kz/h). Monthly costs — hosting, domain and subscriptions — are not included.",
            })}
          </p>
        </div>
      </div>

      {/* ── Process strip ── */}
      <div className="mt-8">
        <div className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {t({ pt: "O meu processo", en: "My process" })}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PHASES.map((phase) => (
            <div
              key={phase.n}
              className="rounded-xl border border-border bg-card/40 p-4 backdrop-blur"
            >
              <div className="font-mono text-2xl font-medium text-foreground/30">
                0{phase.n}
              </div>
              <div className="mt-1 text-sm font-semibold tracking-tight">
                {t(phase.title)}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {t(phase.body)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
