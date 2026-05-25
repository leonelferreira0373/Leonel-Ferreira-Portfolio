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
  linkedinUrl: "https://www.linkedin.com/in/leonel-ferreira-b14742229/",
  instagram: "leonel_ferreira_001",
  instagramUrl: "https://www.instagram.com/leonel_ferreira_001",
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
    image: "./projects/geosstore.jpg",
    tags: ["Next.js", "NestJS", "Supabase", "Vercel", "Render"],
    live: true,
  },
  {
    name: "Miragem",
    blurb: {
      pt: "Website-vitrine para um resort de luxo em Huambo, Angola — demo Fase 0. PWA instalável, 8 idiomas (incl. línguas nacionais angolanas), conversão de moeda AOA/EUR/USD, pesquisa e fluxo de reserva. Estética editorial: Nike no desktop, Farfetch no mobile.",
      en: "Showcase site for a luxury resort in Huambo, Angola — a Phase 0 demo. Installable PWA, 8 languages (incl. Angolan national languages), AOA/EUR/USD currency conversion, search, and a booking flow. Editorial aesthetic: Nike on desktop, Farfetch on mobile.",
    },
    href: "https://miragem-resort.vercel.app",
    image: "./projects/miragem.jpg",
    tags: ["Hospitality", "PWA", "i18n", "Branding"],
    live: true,
  },
  {
    name: "Stravages",
    blurb: {
      pt: "Marca de streetwear premium — beanies, balaclavas e conjuntos com bordados a ouro sobre preto. Storefront Next.js com catálogo, página de produto, checkout via WhatsApp e envio para todo o país. Identidade «mais que roupa — uma presença».",
      en: "Premium streetwear brand — beanies, balaclavas, and sets with gold embroidery on black. Next.js storefront with catalogue, product pages, WhatsApp checkout, and nationwide shipping. Identity built around 'more than clothing — a presence.'",
    },
    href: "https://plug-empire.vercel.app/",
    image: "./projects/stravages.jpg",
    tags: ["Next.js", "Streetwear", "E-commerce", "Branding"],
    live: true,
  },
  {
    name: "BAZA",
    blurb: {
      pt: "Serviço de Moto-Táxi para Luanda. Landing page, app Android (Kotlin) para motoristas e backend planeado em Render + Neon. Construído com um amigo para resolver transporte local a sério.",
      en: "Moto-taxi service for Luanda. Landing page, Kotlin Android driver app, and planned Render + Neon backend. Built with a friend to ship a real local transport product.",
    },
    image: "./projects/baza.jpg",
    href: "https://bazza-taxi.github.io/bazza-taxi/",
    tags: ["HTML", "Kotlin", "Android", "Render", "Neon"],
    live: true,
  },
  {
    name: "SnapShare",
    blurb: {
      pt: "Transferência de ficheiros peer-to-peer entre dois dispositivos via QR code. WebRTC puro — os ficheiros nunca passam por servidores, só um handshake de poucos KB. Sem contas, sem perda de qualidade.",
      en: "Peer-to-peer file transfer between any two devices via QR code. Pure WebRTC — files never touch a server, only a brief signaling handshake. No accounts, no quality loss.",
    },
    href: "https://snapshare-share.vercel.app/",
    image: "./projects/snapshare.jpg",
    tags: ["WebRTC", "PeerJS", "QR", "Privacy"],
    live: true,
  },
  {
    name: "RLT",
    blurb: {
      pt: "Marca de streetwear de Luanda — \"Crown the Streets\". Drops limitados (hoodies, joggers, beanies, t-shirts) com fotografia urbana de Luanda. Storefront com integração WhatsApp e newsletter de drops.",
      en: "Luanda-based streetwear brand — \"Crown the Streets\". Limited drops (hoodies, joggers, beanies, t-shirts) shot against Luanda's urban landscape. Storefront with WhatsApp integration and drop newsletter.",
    },
    href: "https://rlt-ao.vercel.app/",
    image: "./projects/rlt.png",
    tags: ["Streetwear", "E-commerce", "Branding", "Web"],
    live: true,
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
    image: "./projects/portfolio.jpg",
    tags: ["React", "Vite", "Tailwind", "MagicUI"],
    live: true,
  },
];

export type AppDownload = {
  name: string;
  blurb: Bilingual;
  url: string;
  size: string;
  version: string;
  platform: Bilingual;
  kind: "apk" | "exe";
  icon: "moon" | "store" | "bike" | "eraser" | "palette";
  accent: "violet" | "amber" | "emerald" | "rose" | "sky";
  cover?: string | string[];
};

export const APPS: AppDownload[] = [
  {
    name: "LUME",
    blurb: {
      pt: "App Android de tarefas + alarmes com estética calma para mesa de cabeceira. Construída em Kotlin + Jetpack Compose.",
      en: "Android to-do + alarm app with a calm nightstand aesthetic. Built in Kotlin + Jetpack Compose.",
    },
    url: "./downloads/lume.apk",
    size: "8.3 MB",
    version: "v2.1.0",
    platform: { pt: "Android · Kotlin", en: "Android · Kotlin" },
    kind: "apk",
    icon: "moon",
    accent: "violet",
    cover: "./apps/lume.jpg",
  },
  {
    name: "GEOSSTORE",
    blurb: {
      pt: "Wrapper Chromium da Geosstore — abre a loja em ecrã cheio, com notificações e cache offline.",
      en: "Chromium wrapper for Geosstore — opens the storefront full-screen, with notifications and offline cache.",
    },
    url: "./downloads/geosstore.apk",
    size: "1.2 MB",
    version: "v1.0",
    platform: { pt: "Android · Chromium", en: "Android · Chromium" },
    kind: "apk",
    icon: "store",
    accent: "amber",
    cover: "./projects/geosstore.jpg",
  },
  {
    name: "BAZA",
    blurb: {
      pt: "App Android para passageiros do serviço de Moto-Táxi BAZA em Luanda. Pedidos anónimos, mapa em tempo real, IBAN para pagamento.",
      en: "Passenger Android app for the BAZA moto-taxi service in Luanda. Anonymous orders, real-time map, IBAN payments.",
    },
    url: "./downloads/baza.apk",
    size: "24 MB",
    version: "beta",
    platform: { pt: "Android · Kotlin", en: "Android · Kotlin" },
    kind: "apk",
    icon: "bike",
    accent: "emerald",
    cover: "./apps/baza.jpg",
  },
  {
    name: "BG Remover",
    blurb: {
      pt: "Remoção de fundo em fotos directamente no telemóvel — modelos ONNX integrados, processamento offline e sem servidores.",
      en: "On-device background removal for photos — bundled ONNX models, fully offline, no server required.",
    },
    url: "https://github.com/leonelferreira0373/Leonel-Ferreira-Portfolio/releases/download/apks-v1/bg-remover.apk",
    size: "193.2 MB",
    version: "v1.2.1",
    platform: { pt: "Android · ONNX", en: "Android · ONNX" },
    kind: "apk",
    icon: "eraser",
    accent: "rose",
    cover: ["./apps/bgremover-1.jpg", "./apps/bgremover-2.jpg"],
  },
  {
    name: "BG Remover PC",
    blurb: {
      pt: "Versão desktop do BG Remover para Windows. Modelos AI descarregam-se separadamente após instalar. Construído em PySide6 + ONNX.",
      en: "Desktop version of BG Remover for Windows. AI models download separately after install. Built in PySide6 + ONNX.",
    },
    url: "https://github.com/leonelferreira0373/Leonel-Ferreira-Portfolio/releases/download/pc-v1/bgremover-pc.zip",
    size: "161 MB",
    version: "v1.0",
    platform: { pt: "Windows · PySide6", en: "Windows · PySide6" },
    kind: "exe",
    icon: "eraser",
    accent: "rose",
    cover: ["./apps/bgremover-pc-1.jpg", "./apps/bgremover-pc-2.jpg"],
  },
  {
    name: "Klip",
    blurb: {
      pt: "Editor de imagens para PC ao estilo Canva/CorelDRAW — beta em construção activa. Modelos AI descarregam-se separadamente. PySide6 + ONNX.",
      en: "PC image editor in the style of Canva/CorelDRAW — beta under active development. AI models download separately. PySide6 + ONNX.",
    },
    url: "https://github.com/leonelferreira0373/Leonel-Ferreira-Portfolio/releases/download/pc-v1/klip-beta.zip",
    size: "69 MB",
    version: "v0.1 beta",
    platform: { pt: "Windows · PySide6", en: "Windows · PySide6" },
    kind: "exe",
    icon: "palette",
    accent: "sky",
    cover: "./apps/klip.jpg",
  },
];

export type GalleryTab = "photo" | "design" | "work" | "me";

export type GalleryItem = {
  src: string;
  alt: Bilingual;
  tab: GalleryTab;
};

export const GALLERY_TABS: { id: GalleryTab; label: Bilingual }[] = [
  { id: "design", label: { pt: "Design Gráfico", en: "Graphic Design" } },
  { id: "photo", label: { pt: "Trabalhos de Fotografia", en: "Photography Work" } },
  { id: "work", label: { pt: "Eu no Trabalho", en: "Me at Work" } },
  { id: "me", label: { pt: "Fotos Minhas", en: "Photos of Me" } },
];

export const GALLERY: GalleryItem[] = [
  // Photography work — his subjects, editorial style
  {
    src: "./gallery/photo-01-fur.jpg",
    alt: { pt: "Editorial — casaco de pele", en: "Editorial — fur coat" },
    tab: "photo",
  },
  {
    src: "./gallery/photo-02-sunglasses.jpg",
    alt: { pt: "Editorial — óculos de sol", en: "Editorial — sunglasses" },
    tab: "photo",
  },
  // Graphic design — reusing the branding/project images
  {
    src: "./projects/snapshare.jpg",
    alt: { pt: "SnapShare — brand identity (Onyx, Bone, Emerald, Graphite)", en: "SnapShare — brand identity (Onyx, Bone, Emerald, Graphite)" },
    tab: "design",
  },
  {
    src: "./gallery/gd-geosstore-character.jpg",
    alt: { pt: "GEOSSTORE - Mascote Cartoon", en: "GEOSSTORE - Cartoon Mascot" },
    tab: "design",
  },
  {
    src: "./projects/geosstore.png",
    alt: { pt: "GEOSSTORE — identidade e storefront", en: "GEOSSTORE — branding and storefront" },
    tab: "design",
  },
  {
    src: "./projects/baza.jpg",
    alt: { pt: "BAZA — identidade do serviço de moto-táxi", en: "BAZA — moto-taxi service identity" },
    tab: "design",
  },
  {
    src: "./projects/vape-express.png",
    alt: { pt: "Vape Express — branding e storefront", en: "Vape Express — branding and storefront" },
    tab: "design",
  },
  {
    src: "./projects/roast-and-donut.png",
    alt: { pt: "Roast and Donut — identidade do café", en: "Roast and Donut — coffee shop identity" },
    tab: "design",
  },
  {
    src: "./projects/orizonte.png",
    alt: { pt: "Orizonte Logística — identidade corporativa", en: "Orizonte Logística — corporate identity" },
    tab: "design",
  },
  // Me at work
  {
    src: "./gallery/work-01-badge.jpg",
    alt: { pt: "No escritório com o crachá", en: "At the office with the ID badge" },
    tab: "work",
  },
  {
    src: "./gallery/work-02-laptop.jpg",
    alt: { pt: "A configurar o Android Studio", en: "Setting up Android Studio" },
    tab: "work",
  },
  // Photos of me
  {
    src: "./gallery/me-01-navy.jpg",
    alt: { pt: "Fato azul-escuro", en: "Navy suit" },
    tab: "me",
  },
  {
    src: "./gallery/me-02-bw.jpg",
    alt: { pt: "Retrato a preto e branco", en: "Black and white portrait" },
    tab: "me",
  },
  {
    src: "./gallery/me-03-suit.jpg",
    alt: { pt: "Fato — close-up", en: "Suit — close-up" },
    tab: "me",
  },
  {
    src: "./gallery/me-04-white.jpg",
    alt: { pt: "Camisa branca", en: "White shirt" },
    tab: "me",
  },
  {
    src: "./gallery/me-05-pattern.jpg",
    alt: { pt: "Estampado tradicional", en: "Traditional pattern" },
    tab: "me",
  },
  // Novas adições de design
  {
    src: "./gallery/gd-anime.png",
    alt: { pt: "ANIME", en: "ANIME" },
    tab: "design",
  },
  {
    src: "./gallery/gd-ctt.png",
    alt: { pt: "CTT", en: "CTT" },
    tab: "design",
  },
  {
    src: "./gallery/gd-c-pia-de-anime-1.png",
    alt: { pt: "Cópia de ANIME (1)", en: "Copy of ANIME (1)" },
    tab: "design",
  },
  {
    src: "./gallery/gd-c-pia-de-anime.png",
    alt: { pt: "Cópia de ANIME", en: "Copy of ANIME" },
    tab: "design",
  },
  {
    src: "./gallery/gd-c-pia-de-zara.png",
    alt: { pt: "Cópia de ZARA", en: "Copy of ZARA" },
    tab: "design",
  },
  {
    src: "./gallery/gd-daytona.png",
    alt: { pt: "DAYTONA", en: "DAYTONA" },
    tab: "design",
  },
  {
    src: "./gallery/gd-demon-1080-x-1350-px.png",
    alt: { pt: "DEMON", en: "DEMON" },
    tab: "design",
  },
  {
    src: "./gallery/gd-dinheiro-resolve-problemas.png",
    alt: { pt: "Dinheiro resolve problemas", en: "Money solves problems" },
    tab: "design",
  },
  {
    src: "./gallery/gd-drones-djene-design.png",
    alt: { pt: "Drones Djene Design", en: "Drones Djene Design" },
    tab: "design",
  },
  {
    src: "./gallery/gd-fernando-mec-nico-feliz-natal-design.png",
    alt: { pt: "Fernando Mecânico Feliz Natal", en: "Fernando Mechanic Merry Christmas" },
    tab: "design",
  },
  {
    src: "./gallery/gd-jeep.png",
    alt: { pt: "JEEP", en: "JEEP" },
    tab: "design",
  },
  {
    src: "./gallery/gd-l-witti-rudpher.png",
    alt: { pt: "L'Witti Rudpher", en: "L'Witti Rudpher" },
    tab: "design",
  },
  {
    src: "./gallery/gd-leo-f.png",
    alt: { pt: "Leo F.", en: "Leo F." },
    tab: "design",
  },
  {
    src: "./gallery/gd-marketing-digital-floriano.png",
    alt: { pt: "Marketing Digital Floriano", en: "Digital Marketing Floriano" },
    tab: "design",
  },
  {
    src: "./gallery/gd-mopar.png",
    alt: { pt: "MOPAR", en: "MOPAR" },
    tab: "design",
  },
  {
    src: "./gallery/gd-personal-growth.png",
    alt: { pt: "Personal Growth", en: "Personal Growth" },
    tab: "design",
  },
  {
    src: "./gallery/gd-porsche-911-x-ti-nuno-original.png",
    alt: { pt: "Porsche 911 x Ti Nuno", en: "Porsche 911 x Ti Nuno" },
    tab: "design",
  },
  {
    src: "./gallery/gd-ref-ant-etmba.png",
    alt: { pt: "REF ANT-ETMBA", en: "REF ANT-ETMBA" },
    tab: "design",
  },
  {
    src: "./gallery/gd-resdcef-procurement.png",
    alt: { pt: "RESDCEF PROCUREMENT", en: "RESDCEF PROCUREMENT" },
    tab: "design",
  },
  {
    src: "./gallery/gd-uns-disseram-cai.png",
    alt: { pt: "Uns disseram Cai", en: "Some said Fall" },
    tab: "design",
  },
  {
    src: "./gallery/gd-you-dont-want-no.png",
    alt: { pt: "YOU DONT WANT NO", en: "YOU DONT WANT NO" },
    tab: "design",
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
