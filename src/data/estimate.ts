import { tr, type Bilingual } from "@/lib/i18n";

// ─── Pricing constants ───────────────────────────────────────────────
// Apenas o custo de mão-de-obra. Custos mensais (hosting, domínio, etc.)
// NÃO estão incluídos.
export const HOURLY_RATE = 2000; // Kz por hora
export const HOURS_PER_WEEK = 40; // 960h ≈ 6 meses
export const MIN_HOURS = 20;
export const MAX_HOURS = 960;

// ─── Types ───────────────────────────────────────────────────────────
export type EstimateTier = {
  id: string;
  label: Bilingual;
  hours: number;
  /** Páginas / funcionalidades acrescentadas neste nível (cumulativo na UI). */
  adds: Bilingual[];
  /** Meios de pagamento acrescentados neste nível (quando aplicável). */
  payments?: Bilingual[];
};

export type EstimateType = {
  id: string;
  label: Bilingual;
  /** Sem tiers — slider de horas livre. */
  custom?: boolean;
  defaultHours?: number;
  tiers?: EstimateTier[];
};

export type Phase = {
  n: number;
  title: Bilingual;
  body: Bilingual;
};

// ─── Helpers ─────────────────────────────────────────────────────────
export function priceFor(hours: number): number {
  return hours * HOURLY_RATE;
}

export function weeksFor(hours: number): number {
  return Math.max(1, Math.ceil(hours / HOURS_PER_WEEK));
}

/** Agrupa milhares com ponto, à moda angolana: 1.920.000 */
export function groupThousands(value: number): string {
  return Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function formatKz(value: number): string {
  return `${groupThousands(value)} Kz`;
}

// ─── Workflow phases ─────────────────────────────────────────────────
export const PHASES: Phase[] = [
  {
    n: 1,
    title: tr("Pré-visualização grátis", "Free preview"),
    body: tr(
      "Recebes uma landing page com as cores e fotos da tua marca — e publico-a no meu perfil.",
      "You get a landing page with your brand's colors and photos — and I post it on my profile.",
    ),
  },
  {
    n: 2,
    title: tr("Briefing", "Briefing"),
    body: tr(
      "Recebes um PDF completo com tudo o que o projeto vai precisar.",
      "You get a complete PDF brief covering everything the project will need.",
    ),
  },
  {
    n: 3,
    title: tr("Arranque (50%)", "Kick-off (50%)"),
    body: tr(
      "Pagas 50% e começa a construção do projeto.",
      "You pay 50% and the build starts.",
    ),
  },
  {
    n: 4,
    title: tr("Entrega", "Delivery"),
    body: tr(
      "Pagamento dos restantes 50% na última fase, com o projeto entregue.",
      "The remaining 50% is paid in the final phase, on delivery.",
    ),
  },
];

// ─── Project types ───────────────────────────────────────────────────
const T_SIMPLES = tr("Simples", "Simple");
const T_PADRAO = tr("Padrão", "Standard");
const T_COMPLEXO = tr("Complexo", "Complex");

export const PROJECT_TYPES: EstimateType[] = [
  {
    id: "landing",
    label: tr("Landing page", "Landing page"),
    tiers: [
      {
        id: "simples",
        label: T_SIMPLES,
        hours: 40,
        adds: [
          tr("Secção principal (hero)", "Hero section"),
          tr("Sobre", "About"),
          tr("Contacto + botão WhatsApp", "Contact + WhatsApp button"),
        ],
      },
      {
        id: "padrao",
        label: T_PADRAO,
        hours: 80,
        adds: [
          tr("Galeria / Portfólio", "Gallery / Portfolio"),
          tr("Testemunhos", "Testimonials"),
          tr("Formulário de contacto", "Contact form"),
          tr("SEO básico", "Basic SEO"),
        ],
      },
      {
        id: "completo",
        label: T_COMPLEXO,
        hours: 140,
        adds: [
          tr("Blog / Notícias", "Blog / News"),
          tr("Multi-idioma", "Multi-language"),
          tr("Animações e micro-interações", "Animations & micro-interactions"),
          tr("Integração com redes sociais", "Social media integration"),
        ],
      },
    ],
  },
  {
    id: "website",
    label: tr("Website institucional", "Business website"),
    tiers: [
      {
        id: "simples",
        label: T_SIMPLES,
        hours: 80,
        adds: [
          tr("Início", "Home"),
          tr("Sobre", "About"),
          tr("Serviços", "Services"),
          tr("Contacto", "Contact"),
        ],
      },
      {
        id: "padrao",
        label: T_PADRAO,
        hours: 160,
        adds: [
          tr("Portfólio / Projetos", "Portfolio / Projects"),
          tr("Equipa", "Team"),
          tr("Blog", "Blog"),
          tr("Formulários", "Forms"),
          tr("SEO", "SEO"),
        ],
      },
      {
        id: "completo",
        label: T_COMPLEXO,
        hours: 280,
        adds: [
          tr("Área de cliente", "Client area"),
          tr("Multi-idioma", "Multi-language"),
          tr("Painel de conteúdo (CMS)", "Content panel (CMS)"),
          tr("Integrações externas", "External integrations"),
        ],
      },
    ],
  },
  {
    id: "ecommerce",
    label: tr("E-commerce", "E-commerce"),
    tiers: [
      {
        id: "simples",
        label: T_SIMPLES,
        hours: 160,
        adds: [
          tr("Início", "Home"),
          tr("Catálogo", "Catalog"),
          tr("Página de produto", "Product page"),
          tr("Carrinho", "Cart"),
          tr("Checkout", "Checkout"),
        ],
        payments: [
          tr("Multicaixa Express", "Multicaixa Express"),
          tr("Transferência bancária", "Bank transfer"),
          tr("Dinheiro na entrega", "Cash on delivery"),
        ],
      },
      {
        id: "padrao",
        label: T_PADRAO,
        hours: 320,
        adds: [
          tr("Conta / Login", "Account / Login"),
          tr("Histórico de pedidos", "Order history"),
          tr("Favoritos", "Wishlist"),
          tr("Pesquisa & Filtros", "Search & Filters"),
          tr("Cupões", "Coupons"),
        ],
        payments: [tr("Referência Multicaixa", "Multicaixa Reference")],
      },
      {
        id: "completo",
        label: T_COMPLEXO,
        hours: 520,
        adds: [
          tr("Painel Admin", "Admin panel"),
          tr("Blog", "Blog"),
          tr("Multi-idioma", "Multi-language"),
          tr("Avaliações", "Reviews"),
          tr("Programa de fidelidade", "Loyalty program"),
        ],
        payments: [
          tr("Cartão Visa / Mastercard", "Visa / Mastercard"),
          tr("PayPal", "PayPal"),
        ],
      },
    ],
  },
  {
    id: "menu",
    label: tr("Cardápio digital / Menu QR", "Digital menu / QR menu"),
    tiers: [
      {
        id: "simples",
        label: T_SIMPLES,
        hours: 30,
        adds: [
          tr("Menu por categorias", "Menu by categories"),
          tr("Fotos dos pratos", "Dish photos"),
          tr("Preços", "Prices"),
          tr("Código QR", "QR code"),
        ],
      },
      {
        id: "padrao",
        label: T_PADRAO,
        hours: 60,
        adds: [
          tr("Multi-idioma", "Multi-language"),
          tr("Pesquisa", "Search"),
          tr("Destaques / Promoções", "Highlights / Promos"),
          tr("Painel para editar o menu", "Menu editing panel"),
        ],
      },
      {
        id: "completo",
        label: T_COMPLEXO,
        hours: 110,
        adds: [
          tr("Pedidos via WhatsApp", "Orders via WhatsApp"),
          tr("Vários menus / locais", "Multiple menus / locations"),
          tr("Estatísticas de visualizações", "View analytics"),
        ],
      },
    ],
  },
  {
    id: "webapp",
    label: tr("Web App / SaaS / Dashboard", "Web App / SaaS / Dashboard"),
    tiers: [
      {
        id: "simples",
        label: T_SIMPLES,
        hours: 240,
        adds: [
          tr("Autenticação", "Authentication"),
          tr("Dashboard", "Dashboard"),
          tr("Funcionalidade principal (CRUD)", "Core feature (CRUD)"),
          tr("Base de dados", "Database"),
        ],
      },
      {
        id: "padrao",
        label: T_PADRAO,
        hours: 480,
        adds: [
          tr("Múltiplos utilizadores e permissões", "Multiple users & roles"),
          tr("Relatórios", "Reports"),
          tr("Exportações", "Exports"),
          tr("Notificações", "Notifications"),
        ],
      },
      {
        id: "completo",
        label: T_COMPLEXO,
        hours: 720,
        adds: [
          tr("Pagamentos / Subscrições", "Payments / Subscriptions"),
          tr("API pública", "Public API"),
          tr("Painel de administração", "Admin panel"),
          tr("Integrações externas", "External integrations"),
        ],
      },
    ],
  },
  {
    id: "android",
    label: tr("App Android", "Android App"),
    tiers: [
      {
        id: "simples",
        label: T_SIMPLES,
        hours: 320,
        adds: [
          tr("Ecrãs principais", "Core screens"),
          tr("Autenticação", "Authentication"),
          tr("Backend / API", "Backend / API"),
          tr("Publicação na Play Store", "Play Store publishing"),
        ],
      },
      {
        id: "padrao",
        label: T_PADRAO,
        hours: 600,
        adds: [
          tr("Notificações push", "Push notifications"),
          tr("Perfil de utilizador", "User profile"),
          tr("Modo offline", "Offline mode"),
          tr("Painel de administração", "Admin panel"),
        ],
      },
      {
        id: "completo",
        label: T_COMPLEXO,
        hours: 900,
        adds: [
          tr("Pagamentos in-app", "In-app payments"),
          tr("Mapas / Localização", "Maps / Location"),
          tr("Chat", "Chat"),
          tr("Multi-idioma", "Multi-language"),
        ],
      },
    ],
  },
  {
    id: "booking",
    label: tr("Sistema de reservas / Booking", "Booking system"),
    tiers: [
      {
        id: "simples",
        label: T_SIMPLES,
        hours: 120,
        adds: [
          tr("Calendário de disponibilidade", "Availability calendar"),
          tr("Formulário de reserva", "Booking form"),
          tr("Confirmação por WhatsApp", "WhatsApp confirmation"),
        ],
      },
      {
        id: "padrao",
        label: T_PADRAO,
        hours: 240,
        adds: [
          tr("Contas de cliente", "Customer accounts"),
          tr("Gestão de horários", "Schedule management"),
          tr("Lembretes automáticos", "Automatic reminders"),
          tr("Painel de administração", "Admin panel"),
        ],
      },
      {
        id: "completo",
        label: T_COMPLEXO,
        hours: 400,
        adds: [
          tr("Pagamento de sinal online", "Online deposit payment"),
          tr("Múltiplos serviços / recursos", "Multiple services / resources"),
          tr("Relatórios", "Reports"),
        ],
      },
    ],
  },
  {
    id: "convite",
    label: tr("Convite digital (casamento & eventos)", "Digital invite (weddings & events)"),
    tiers: [
      {
        id: "simples",
        label: T_SIMPLES,
        hours: 20,
        adds: [
          tr("Página de convite", "Invite page"),
          tr("Contagem decrescente", "Countdown"),
          tr("Detalhes do evento", "Event details"),
          tr("Mapa / Localização", "Map / Location"),
        ],
      },
      {
        id: "padrao",
        label: T_PADRAO,
        hours: 40,
        adds: [
          tr("Confirmação de presença (RSVP)", "RSVP confirmation"),
          tr("Galeria de fotos", "Photo gallery"),
          tr("Música de fundo", "Background music"),
        ],
      },
      {
        id: "completo",
        label: T_COMPLEXO,
        hours: 70,
        adds: [
          tr("Lista de presentes", "Gift registry"),
          tr("Multi-idioma", "Multi-language"),
          tr("Mensagens dos convidados", "Guest messages"),
          tr("Domínio próprio", "Custom domain"),
        ],
      },
    ],
  },
  {
    id: "custom",
    label: tr("Outro / Personalizado", "Other / Custom"),
    custom: true,
    defaultHours: 200,
  },
];
