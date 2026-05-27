# Estimate / Orçamento Section — Spec

A client-facing project estimate calculator added to the portfolio. Lets a
prospect pick a project type, slide a complexity tier, see exactly what's
included (pages + payment methods), and get a live price in Kwanzas + a build
duration — then jump straight to WhatsApp with a pre-filled, fully-spec'd lead.

## Pricing model

- **Single input that matters: hours.** `total = hours × HOURLY_RATE`.
- `HOURLY_RATE = 2000` Kz/hora (labour only — nothing else baked in).
- `duration_weeks = ceil(hours / 40)` (40h/week → 960h = 6 months ceiling).
- The estimate covers **development only**. Recurring monthly costs (hosting,
  domain, third-party subscriptions) are **not** included — shown as a fixed
  disclaimer on the card.

## Interaction

1. **Project-type buttons** (single-select). Picking one sets the active type.
2. **Complexity slider** (stepped: Simples · Padrão · Completo). It is the hero
   control — moving it changes hours, included pages, payment methods, duration
   and price all at once. Replaces a raw hours slider (one control, simpler).
   - `Outro / Personalizado` has no tiers: a free 20h→960h hours slider.
3. **"Ver o que está incluído" accordion** (clickable, no popup) — lists the
   exact pages/features + payment methods for the current tier.
4. **Result card** — big total in Kz, `~N semanas`, small print
   `N horas · 2.000 Kz/hora`, + monthly-cost disclaimer.
5. **"Contactar Agora"** → opens `PROFILE.whatsappLink` with a pre-filled
   message containing type + tier + hours + duration + total.

## Project types (drafts — owner edits numbers/content)

`Landing page` · `Website institucional` · `E-commerce` (tiers) ·
`Cardápio digital / Menu QR` · `Web App / SaaS / Dashboard` · `App Android` ·
`Sistema de reservas / Booking` · `Convite digital (casamento & eventos)` ·
`Outro / Personalizado` (free hours).

### E-commerce tier example (rate 2.000 Kz/h)

| Tier | Horas | Tempo | Preço |
|---|---|---|---|
| Simples | 160h | ~4 sem | 320.000 Kz |
| Padrão | 320h | ~8 sem | 640.000 Kz |
| Completo | 520h | ~13 sem | 1.040.000 Kz |

- **Simples** — Páginas: Início, Catálogo, Produto, Carrinho, Checkout.
  Pagamentos: Multicaixa Express, Transferência bancária, Dinheiro na entrega.
- **Padrão** — + Conta/Login, Histórico de pedidos, Favoritos, Pesquisa &
  Filtros, Cupões. + Referência Multicaixa.
- **Completo** — + Painel Admin, Blog, Multi-idioma, Avaliações, Fidelidade.
  + Cartão Visa/Mastercard, PayPal.

## Workflow phases (shown as a process strip)

1. **Fase 1 · Pré-visualização grátis** — cliente recebe uma landing page com
   as cores e fotos da marca; publicada no perfil do Leonel.
2. **Fase 2 · Briefing** — PDF completo com tudo o que o projeto precisa.
3. **Fase 3 · Arranque (50%)** — pagamento de 50% e início da construção.
4. **Fase 4 · Entrega** — pagamento dos restantes 50% na última fase.

## Implementation

- `src/data/estimate.ts` — config + types (`HOURLY_RATE`, project types, tiers,
  phases). All copy bilingual via `Bilingual`.
- `src/components/sections/estimate.tsx` — section component, reuses
  `SectionHeading`, monochrome tokens, native styled range slider, lucide icons.
  No new dependencies.
- `App.tsx` — insert `<Estimate />` + `<Divider />` before `<Contact />`,
  kicker `07 · Orçamento`, bump Contact to `08`. Add nav link `#orcamento`.
- Bilingual PT/EN; Kz via `Intl.NumberFormat('pt-AO')` (fallback manual grouping).
