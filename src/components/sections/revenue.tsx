import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n";

// Contador público de receita da Ferreira Korp. Puxa SÓ o dinheiro de negócio
// do worker de licensing (o dinheiro pessoal do Leonel fica fora do site).
const REVENUE_ENDPOINT = "https://pay.ferreirakorp.com/revenue";
const POLL_MS = 30_000;

type RevenuePayload = { totalKz: number; count: number };

/** Divide o valor em número abreviado + unidade (K / M), à moda pt-AO. */
function abbreviate(v: number): { num: string; unit: string } {
  const a = Math.abs(v);
  if (a >= 1_000_000) {
    const num = (v / 1_000_000)
      .toFixed(a >= 10_000_000 ? 1 : 2)
      .replace(/\.0$/, "")
      .replace(".", ",");
    return { num, unit: "M" };
  }
  if (a >= 1_000) {
    const num = (v / 1_000)
      .toFixed(a >= 100_000 ? 0 : 1)
      .replace(/\.0$/, "")
      .replace(".", ",");
    return { num, unit: "K" };
  }
  return { num: String(Math.round(v)), unit: "" };
}

export function Revenue() {
  const t = useT();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [target, setTarget] = useState<number | null>(null);
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(0);

  const rafRef = useRef<number>(0);
  const fromRef = useRef<number>(0);

  // revela quando entra no ecrã (uma vez). Fallbacks garantem que nunca fica preso invisível.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    // já visível à chegada?
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) setVisible(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(node);
    // rede de segurança: se o IO não disparar (rAF/IO suspensos), revela na mesma
    const fallback = window.setTimeout(() => setVisible(true), 2000);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  // busca inicial + poll a cada 30s
  useEffect(() => {
    let alive = true;
    const load = async () => {
      try {
        const res = await fetch(REVENUE_ENDPOINT, { cache: "no-store" });
        const json = (await res.json()) as Partial<RevenuePayload>;
        if (!alive) return;
        setTarget(typeof json.totalKz === "number" ? json.totalKz : 0);
        setCount(typeof json.count === "number" ? json.count : 0);
      } catch {
        if (alive) setTarget((prev) => (prev === null ? 0 : prev));
      }
    };
    void load();
    const id = window.setInterval(() => void load(), POLL_MS);
    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, []);

  // count-up (só depois de visível e de conhecer o alvo)
  useEffect(() => {
    if (target === null || !visible) return;
    window.cancelAnimationFrame(rafRef.current);
    const from = fromRef.current;
    const to = target;
    const duration = 1600;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(from + (to - from) * eased);
      if (p < 1) {
        rafRef.current = window.requestAnimationFrame(step);
      } else {
        fromRef.current = to;
      }
    };
    rafRef.current = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(rafRef.current);
  }, [target, visible]);

  const { num, unit } = abbreviate(display);
  const full = new Intl.NumberFormat("pt-AO").format(Math.round(display));
  const loading = target === null;

  return (
    <section
      id="ferreirakorp"
      ref={sectionRef}
      className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-24 text-center"
    >
      <div
        className={
          "flex flex-col items-center gap-6 transition-all duration-1000 ease-out " +
          (visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")
        }
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Ferreira Korp
        </div>

        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground sm:text-sm">
          {t({ pt: "Receita gerada", en: "Revenue generated" })}
        </p>

        <div className="flex items-end justify-center font-mono font-semibold leading-none tracking-tighter tabular-nums text-foreground">
          <span className="text-[clamp(4rem,19vw,15rem)]">{loading ? "—" : num}</span>
          {unit && (
            <span className="ml-1 text-[clamp(2rem,8vw,6rem)] text-muted-foreground">
              {unit}
            </span>
          )}
          <span className="mb-[0.35em] ml-2 text-[clamp(1.1rem,4vw,2.6rem)] text-muted-foreground">
            Kz
          </span>
        </div>

        <p className="font-mono text-xs text-muted-foreground tabular-nums sm:text-sm">
          {loading
            ? t({ pt: "a carregar…", en: "loading…" })
            : `${full} Kz · ${count} ${t({ pt: "pagamentos", en: "payments" })}`}
        </p>

        <p className="max-w-md text-balance text-xs leading-relaxed text-muted-foreground/70">
          {t({
            pt: "Total gerado pelos sistemas, apps e serviços da Ferreira Korp — atualizado em tempo real.",
            en: "Total generated by Ferreira Korp's systems, apps and services — updated in real time.",
          })}
        </p>
      </div>
    </section>
  );
}
