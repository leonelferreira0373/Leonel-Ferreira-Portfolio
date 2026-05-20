import type { Bilingual } from "@/lib/i18n";

export const PROFILE = {
  name: "Leonel Ferreira",
  firstName: "Leonel",
  title: {
    pt: "Programador & Designer",
    en: "Programmer & Designer",
  } satisfies Bilingual,
  currentRole: {
    pt: "Gerente @ Geosstore",
    en: "Manager @ Geosstore",
  } satisfies Bilingual,
  location: "Luanda, Angola",
  email: "leonelferreira0373@gmail.com",
  whatsapp: "+244 945 321 186",
  whatsappLink: "https://wa.me/244945321186",
  github: "leonelferreira0373",
  githubUrl: "https://github.com/leonelferreira0373",
  bio: {
    pt: "Programador & Designer a construir produtos digitais de ponta a ponta — apps, sistemas, websites, branding e gestão de redes sociais. Actualmente Gerente da Geosstore em Luanda, onde também opero a operação ponta-a-ponta. Auto-didacta, à vontade com o ritmo de startup.",
    en: "Programmer & Designer building digital products end-to-end — apps, complex systems, websites, branding, and social media. Currently Manager at Geosstore in Luanda, where I also run the end-to-end operation. Self-taught, comfortable with startup pace.",
  } satisfies Bilingual,
};

export type Skill = {
  name: Bilingual;
  group: "design" | "code" | "media" | "ops";
};

export const SKILLS: Skill[] = [
  { name: { pt: "Design Gráfico (CorelDRAW)", en: "Graphic Design (CorelDRAW)" }, group: "design" },
  { name: { pt: "Branding & Identidade", en: "Branding & Identity" }, group: "design" },
  { name: { pt: "Edição de Fotografia", en: "Photo Editing" }, group: "media" },
  { name: { pt: "Edição de Vídeo Avançada", en: "Advanced Video Editing" }, group: "media" },
  { name: { pt: "Estratégia de Redes Sociais", en: "Social Media Strategy" }, group: "media" },
  { name: { pt: "Programação Assistida por IA", en: "AI-Assisted Development" }, group: "code" },
  { name: { pt: "React / Next.js", en: "React / Next.js" }, group: "code" },
  { name: { pt: "TypeScript", en: "TypeScript" }, group: "code" },
  { name: { pt: "NestJS / Node.js", en: "NestJS / Node.js" }, group: "code" },
  { name: { pt: "Supabase / Postgres", en: "Supabase / Postgres" }, group: "code" },
  { name: { pt: "Android (Kotlin)", en: "Android (Kotlin)" }, group: "code" },
  { name: { pt: "Python / PySide6", en: "Python / PySide6" }, group: "code" },
  { name: { pt: "Microsoft Excel", en: "Microsoft Excel" }, group: "ops" },
  { name: { pt: "Git / GitHub", en: "Git / GitHub" }, group: "ops" },
  { name: { pt: "Workflows de IDE", en: "IDE Workflows" }, group: "ops" },
];

export type Project = {
  name: string;
  blurb: Bilingual;
  href?: string;
  image?: string;
  tags: string[];
  live?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "GEOSSTORE",
    blurb: {
      pt: "E-commerce de sapatilhas para Luanda — sourcing internacional entre EUA, Emirados, Turquia e Namíbia. Storefront Next.js na Vercel, API NestJS no Render, Supabase para DB/Auth/Storage.",
      en: "End-to-end sneaker e-commerce for Luanda — international sourcing from USA, UAE, Turkey & Namibia. Next.js storefront on Vercel, NestJS API on Render, Supabase for DB/Auth/Storage.",
    },
    href: "https://geosstore.store",
    image: "./projects/geosstore.png",
    tags: ["Next.js", "NestJS", "Supabase", "Vercel", "Render"],
    live: true,
  },
  {
    name: "BAZA",
    blurb: {
      pt: "Serviço de Moto-Táxi para Luanda. Landing page, app Android (Kotlin) para motoristas e backend planeado em Render + Neon. Construído com um amigo para resolver transporte local a sério.",
      en: "Moto-taxi service for Luanda. Landing page, Kotlin Android driver app, and planned Render + Neon backend. Built with a friend to ship a real local transport product.",
    },
    image: "./projects/baza.png",
    tags: ["HTML", "Kotlin", "Android", "Render", "Neon"],
  },
  {
    name: "Vape Express",
    blurb: {
      pt: "Loja online de vapes para Angola — catálogo, identidade e storefront pensados para tráfego mobile local.",
      en: "Online vape store for Angola — product catalogue, branding, and storefront tuned for local mobile traffic.",
    },
    href: "https://vape-express.github.io/Vape-Express/",
    image: "./projects/vape-express.png",
    tags: ["E-commerce", "Branding", "Web"],
    live: true,
  },
  {
    name: "Roast and Donut",
    blurb: {
      pt: "Conceito de café & donuts — identidade, menu e storefront com uma estética Coffee Culture.",
      en: "Coffee & donut shop concept — identity, menu, and storefront expressing a Coffee Culture aesthetic.",
    },
    href: "https://leonelferreira0373.github.io/Roast-and-Donut/",
    image: "./projects/roast-and-donut.png",
    tags: ["Branding", "Identity", "Web"],
    live: true,
  },
  {
    name: "Orizonte Logística",
    blurb: {
      pt: "Site de soluções globais de shipping — identidade corporativa e presença web para uma operadora logística angolana.",
      en: "Global shipping solutions site — corporate identity and web presence for an Angolan logistics operator.",
    },
    href: "https://leonelferreira0373.github.io/Orizonte-Logistica/",
    image: "./projects/orizonte.png",
    tags: ["Logistics", "Branding", "Web"],
    live: true,
  },
  {
    name: "Leonel-Ferreira-Portfolio",
    blurb: {
      pt: "Este site — showcase pessoal. React + Vite + Tailwind, animações MagicUI, deploy no GitHub Pages.",
      en: "This site — a personal showcase. React + Vite + Tailwind, MagicUI animations, deployed to GitHub Pages.",
    },
    href: "https://github.com/leonelferreira0373/Leonel-Ferreira-Portfolio",
    tags: ["React", "Vite", "Tailwind", "MagicUI"],
    live: true,
  },
];

export type AppDownload = {
  name: string;
  blurb: Bilingual;
  filename: string;
  size: string;
  version: string;
  platform: Bilingual;
  icon: "moon" | "store" | "bike";
  accent: "violet" | "amber" | "emerald";
};

export const APPS: AppDownload[] = [
  {
    name: "LUME",
    blurb: {
      pt: "App Android de tarefas + alarmes com estética calma para mesa de cabeceira. Construída em Kotlin + Jetpack Compose.",
      en: "Android to-do + alarm app with a calm nightstand aesthetic. Built in Kotlin + Jetpack Compose.",
    },
    filename: "lume.apk",
    size: "6.6 MB",
    version: "v1.0",
    platform: { pt: "Android · Kotlin", en: "Android · Kotlin" },
    icon: "moon",
    accent: "violet",
  },
  {
    name: "GEOSSTORE",
    blurb: {
      pt: "Wrapper Chromium da Geosstore — abre a loja em ecrã cheio, com notificações e cache offline.",
      en: "Chromium wrapper for Geosstore — opens the storefront full-screen, with notifications and offline cache.",
    },
    filename: "geosstore.apk",
    size: "1.2 MB",
    version: "v1.0",
    platform: { pt: "Android · Chromium", en: "Android · Chromium" },
    icon: "store",
    accent: "amber",
  },
  {
    name: "BAZA",
    blurb: {
      pt: "App Android para passageiros do serviço de Moto-Táxi BAZA em Luanda. Pedidos anónimos, mapa em tempo real, IBAN para pagamento.",
      en: "Passenger Android app for the BAZA moto-taxi service in Luanda. Anonymous orders, real-time map, IBAN payments.",
    },
    filename: "baza.apk",
    size: "24 MB",
    version: "beta",
    platform: { pt: "Android · Kotlin", en: "Android · Kotlin" },
    icon: "bike",
    accent: "emerald",
  },
];

export type Experience = {
  company: string;
  role: Bilingual;
  period: Bilingual;
  location?: Bilingual;
  bullets: Bilingual[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Geosstore",
    role: {
      pt: "Gerente",
      en: "Manager",
    },
    period: { pt: "2025 — Em curso", en: "2025 — Ongoing" },
    location: {
      pt: "Loja de sapatilhas — Luanda",
      en: "Sneaker store — Luanda",
    },
    bullets: [
      {
        pt: "Gestão diária da operação: loja física, equipa, fluxo de stock e atendimento ao cliente.",
        en: "Day-to-day operations: physical store, team, stock flow, and customer service.",
      },
      {
        pt: "Sourcing internacional entre EUA, Emirados, Turquia e Namíbia — selecção, importação e qualidade.",
        en: "International sourcing across USA, UAE, Turkey, and Namibia — selection, import, and quality.",
      },
      {
        pt: "Construção e manutenção do produto digital: storefront Next.js, API NestJS, app Android.",
        en: "Built and maintain the digital product: Next.js storefront, NestJS API, Android app.",
      },
    ],
  },
  {
    company: "RESDCEF",
    role: {
      pt: "Marketeer & Designer Gráfico",
      en: "Marketer & Graphic Designer",
    },
    period: { pt: "2024 — 2025", en: "2024 — 2025" },
    location: {
      pt: "Empresa de procurement",
      en: "Procurement company",
    },
    bullets: [
      {
        pt: "Concepção e produção de materiais gráficos para campanhas e comunicação interna.",
        en: "Concept and production of graphic materials for campaigns and internal communication.",
      },
      {
        pt: "Apoio à estratégia de marketing e à presença digital da empresa.",
        en: "Marketing strategy and digital-presence support.",
      },
      {
        pt: "Coordenação visual de propostas comerciais e documentação técnica.",
        en: "Visual coordination of commercial proposals and technical documentation.",
      },
    ],
  },
  {
    company: "Lugatech",
    role: { pt: "Gestor de Documentos", en: "Document Manager" },
    period: { pt: "2024", en: "2024" },
    location: {
      pt: "Transporte marítimo — Luanda",
      en: "Maritime transport — Luanda",
    },
    bullets: [
      {
        pt: "Gestão e organização da documentação operacional de embarques.",
        en: "Managed and organized operational documentation for shipments.",
      },
      {
        pt: "Acompanhamento de processos administrativos e logísticos ponta-a-ponta.",
        en: "Followed administrative and logistics processes end-to-end.",
      },
      {
        pt: "Comunicação com clientes e fornecedores em português e inglês.",
        en: "Client and supplier communication in Portuguese and English.",
      },
    ],
  },
  {
    company: "Vissel Solutions",
    role: {
      pt: "Comercial & Designer Digital",
      en: "Commercial & Digital Designer",
    },
    period: { pt: "2024", en: "2024" },
    bullets: [
      {
        pt: "Reuniões com clientes e apresentação de propostas comerciais.",
        en: "Client meetings and presentation of commercial proposals.",
      },
      {
        pt: "Concepção e produção de apresentações profissionais.",
        en: "Designed and produced professional sales decks.",
      },
      {
        pt: "Gestão das redes sociais e produção de conteúdo visual.",
        en: "Social-media management and visual content production.",
      },
    ],
  },
  {
    company: "Independente",
    role: { pt: "Designer & Programador", en: "Designer & Programmer" },
    period: { pt: "Em curso", en: "Ongoing" },
    bullets: [
      {
        pt: "Desenvolvimento de plataformas digitais com recurso a inteligência artificial.",
        en: "Building digital platforms with modern AI tooling.",
      },
      {
        pt: "Criação de identidades visuais, websites e aplicações Android.",
        en: "Visual identities, websites, and Android applications.",
      },
      {
        pt: "Direcção criativa de campanhas publicitárias e conteúdo audiovisual.",
        en: "Creative direction for advertising and audiovisual content.",
      },
    ],
  },
];

export const LANGUAGES: { name: Bilingual; level: Bilingual }[] = [
  {
    name: { pt: "Português", en: "Portuguese" },
    level: { pt: "Nativo", en: "Native" },
  },
  {
    name: { pt: "Inglês", en: "English" },
    level: { pt: "Fluente", en: "Fluent" },
  },
];
