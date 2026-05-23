import { useMemo, useState, useEffect, useRef } from "react";
import { GALLERY, GALLERY_TABS, type GalleryTab } from "@/data/portfolio";
import { SectionHeading } from "@/components/sections/about";
import { useT } from "@/lib/i18n";

export function Gallery() {
  const t = useT();
  const [active, setActive] = useState<GalleryTab>("design");
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = useMemo(
    () => GALLERY.filter((g) => g.tab === active),
    [active],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If we are at the end, jump to start, otherwise scroll by a fraction of the width
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth * 0.8, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [items]);

  return (
    <section id="gallery" className="py-16">
      <SectionHeading
        kicker={t({ pt: "05 · Galeria", en: "05 · Gallery" })}
        title={t({
          pt: "Galeria",
          en: "Gallery",
        })}
        description={t({
          pt: "Fotografias, design gráfico e momentos. Arrasta para ver mais.",
          en: "Photography, graphic design, and moments. Swipe to see more.",
        })}
      />

      <div
        role="tablist"
        aria-label={t({ pt: "Categorias da galeria", en: "Gallery categories" })}
        className="-mx-1 mb-6 flex flex-wrap gap-1.5"
      >
        {GALLERY_TABS.map((tab) => {
          const selected = active === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={selected}
              onClick={() => setActive(tab.id)}
              className={
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition " +
                (selected
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card/40 text-muted-foreground hover:bg-card hover:text-foreground")
              }
            >
              {t(tab.label)}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        aria-label={t(GALLERY_TABS.find((x) => x.id === active)!.label)}
        className="-mx-5 sm:-mx-8"
      >
        <div ref={scrollRef} className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-[10%] py-2 items-center [scroll-padding-inline:10%] [scrollbar-width:none] md:px-[20%] md:[scroll-padding-inline:20%] [&::-webkit-scrollbar]:hidden">
          {items.map((g, i) => (
            <img
              key={g.src}
              src={g.src}
              alt={t(g.alt)}
              loading={i < 2 ? "eager" : "lazy"}
              decoding="async"
              className="h-auto w-[80%] flex-none snap-center rounded-2xl border border-border/60 bg-card shadow-lg shadow-black/5 md:w-[60%] dark:shadow-black/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
