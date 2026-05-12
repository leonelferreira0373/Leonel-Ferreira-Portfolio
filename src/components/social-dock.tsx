import { PROFILE } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon, WhatsAppIcon } from "@/components/brand-icons";

export function SocialDock() {
  const items = [
    {
      href: PROFILE.githubUrl,
      label: "GitHub",
      Icon: GithubIcon,
      external: true,
    },
    {
      href: PROFILE.whatsappLink,
      label: "WhatsApp",
      Icon: WhatsAppIcon,
      external: true,
    },
    {
      href: `mailto:${PROFILE.email}`,
      label: "Email",
      Icon: Mail,
      external: false,
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1.5 rounded-full border border-border bg-card/60 p-1.5 backdrop-blur md:flex">
      {items.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          aria-label={label}
          className="group relative grid size-9 place-items-center rounded-full text-muted-foreground transition hover:bg-foreground/10 hover:text-foreground"
        >
          <Icon className="size-4" />
          <span className="pointer-events-none absolute right-12 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-xs opacity-0 transition group-hover:opacity-100">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}
