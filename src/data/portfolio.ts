export const PROFILE = {
  name: "Leonel Ferreira",
  firstName: "Leonel",
  title: "Programmer & Designer",
  location: "Luanda, Angola",
  email: "leonelferreira0373@gmail.com",
  whatsapp: "+244 945 321 186",
  whatsappLink: "https://wa.me/244945321186",
  github: "leonelferreira0373",
  githubUrl: "https://github.com/leonelferreira0373",
  bio: "Programmer & Designer building digital products end-to-end — apps, complex systems, websites, branding, and social media. Self-taught, comfortable with startup pace. Based in Luanda — remote-friendly.",
  aboutHtml:
    "Multidisciplinary builder shipping things that don't break — I've designed and built across <a class='underline-link' href='#experience'>3 companies</a>, ship a steady stream of <a class='underline-link' href='#projects'>personal projects</a>, and work with modern AI tooling daily. Comfortable with startup pace and complex problems.",
};

export type Skill = { name: string; group: "design" | "code" | "media" | "ops" };
export const SKILLS: Skill[] = [
  { name: "Graphic Design (CorelDRAW)", group: "design" },
  { name: "Branding & Identity", group: "design" },
  { name: "Photo Editing", group: "media" },
  { name: "Advanced Video Editing", group: "media" },
  { name: "Social Media Strategy", group: "media" },
  { name: "AI-Assisted Development", group: "code" },
  { name: "React / Next.js", group: "code" },
  { name: "TypeScript", group: "code" },
  { name: "NestJS / Node.js", group: "code" },
  { name: "Supabase / Postgres", group: "code" },
  { name: "Android (Kotlin)", group: "code" },
  { name: "Python / PySide6", group: "code" },
  { name: "Microsoft Excel", group: "ops" },
  { name: "Git / GitHub", group: "ops" },
  { name: "IDE Workflows", group: "ops" },
];

export type Project = {
  name: string;
  blurb: string;
  href?: string;
  image?: string;
  tags: string[];
  live?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "GEOSSTORE",
    blurb:
      "End-to-end sneaker e-commerce for Luanda — international sourcing from USA, UAE, Turkey & Namibia. Next.js storefront on Vercel, NestJS API on Render, Supabase for DB/Auth/Storage.",
    href: "https://geosstore.store",
    tags: ["Next.js", "NestJS", "Supabase", "Vercel", "Render"],
    live: true,
  },
  {
    name: "BAZA",
    blurb:
      "Moto-taxi service for Luanda. Landing page, Kotlin Android driver app, and planned Render + Neon backend. Built with a friend to ship a real local transport product.",
    href: "https://github.com/leonelferreira0373/bazza-taxi",
    tags: ["HTML", "Kotlin", "Android", "Render", "Neon"],
  },
  {
    name: "Vape Express",
    blurb:
      "Online vape store for Angola — product catalogue, branding, and storefront tuned for local mobile traffic.",
    href: "https://github.com/leonelferreira0373/Vape-Express",
    tags: ["E-commerce", "Branding", "Web"],
  },
  {
    name: "Roast and Donut",
    blurb:
      "Coffee & donut shop concept — identity, menu, and storefront expressing a Coffee Culture aesthetic.",
    href: "https://github.com/leonelferreira0373/Roast-and-Donut",
    image: "./projects/roast-and-donut.png",
    tags: ["Branding", "Identity", "Web"],
  },
  {
    name: "Orizonte Logística",
    blurb:
      "Global shipping solutions site — corporate identity and web presence for an Angolan logistics operator.",
    href: "https://github.com/leonelferreira0373/Orizonte-Logistica",
    image: "./projects/orizonte.png",
    tags: ["Logistics", "Branding", "Web"],
  },
  {
    name: "Leonel-Ferreira-Portfolio",
    blurb:
      "This site — a personal showcase. React + Vite + Tailwind, MagicUI animations, deployed to GitHub Pages.",
    href: "https://github.com/leonelferreira0373/Leonel-Ferreira-Portfolio",
    tags: ["React", "Vite", "Tailwind", "MagicUI"],
    live: true,
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: "RESDCEF",
    role: "Marketeer & Graphic Designer",
    period: "2024 — 2025",
    location: "Procurement company",
    bullets: [
      "Concept and production of graphic materials for campaigns and internal communication.",
      "Marketing strategy and digital presence support.",
      "Visual coordination of commercial proposals and technical documentation.",
    ],
  },
  {
    company: "Lugatech",
    role: "Document Manager",
    period: "2024",
    location: "Maritime transport — Luanda",
    bullets: [
      "Managed and organized operational documentation for shipments.",
      "Followed administrative and logistics processes end-to-end.",
      "Client and supplier communication in Portuguese and English.",
    ],
  },
  {
    company: "Vissel Solutions",
    role: "Commercial & Digital Designer",
    period: "2024",
    bullets: [
      "Client meetings and presentation of commercial proposals.",
      "Designed and produced professional sales decks.",
      "Social-media management and visual content production.",
    ],
  },
  {
    company: "Independent",
    role: "Designer & Programmer",
    period: "Ongoing",
    bullets: [
      "Building digital platforms with modern AI tooling.",
      "Visual identities, websites, and Android applications.",
      "Creative direction for advertising and audiovisual content.",
    ],
  },
];

export const LANGUAGES = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Fluent" },
];
