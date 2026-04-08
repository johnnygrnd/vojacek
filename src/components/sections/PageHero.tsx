import { ReactNode } from "react";
import AnimatedSection from "@/components/sections/AnimatedSection";

interface PageHeroProps {
  /** "service" = cinematic photo hero. "editorial" = calmer, content-led hero. */
  variant?: "service" | "editorial";
  /** Controls visual intensity. Affects height, overlay strength. */
  intensity?: "high" | "medium" | "low";
  image?: string;
  imageAlt?: string;
  /** CSS object-position value, e.g. "center 20%" or "right top" */
  imagePosition?: string;
  /** Custom background class when no image is used */
  bgClass?: string;
  label?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

const serviceConfig = {
  high:   { minH: "min-h-[55vh]", overlay: "from-foreground via-foreground/75 to-foreground/40" },
  medium: { minH: "min-h-[48vh]", overlay: "from-foreground via-foreground/70 to-foreground/35" },
  low:    { minH: "min-h-[42vh]", overlay: "from-foreground via-foreground/65 to-foreground/30" },
};

const editorialConfig = {
  high:   { minH: "min-h-[40vh]", overlay: "from-foreground via-foreground/85 to-foreground/60" },
  medium: { minH: "min-h-[35vh]", overlay: "from-foreground via-foreground/80 to-foreground/55" },
  low:    { minH: "min-h-[30vh]", overlay: "from-foreground via-foreground/75 to-foreground/50" },
};

export default function PageHero({
  variant = "service",
  intensity = "high",
  image,
  imageAlt = "",
  imagePosition = "center center",
  label,
  title,
  description,
  children,
}: PageHeroProps) {
  /* ── SERVICE HERO ── cinematic photo background with strong overlay */
  if (variant === "service" && image) {
    const cfg = serviceConfig[intensity];
    return (
      <section className={`relative ${cfg.minH} flex items-end overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{ objectPosition: imagePosition }}
            width={1920}
            height={1080}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${cfg.overlay}`} />
        </div>
        <div className="relative w-full container-wide pb-12 md:pb-16 pt-32">
          <AnimatedSection className="max-w-2xl">
            <div className="w-10 h-px bg-brass mb-6" />
            {label && <p className="micro-text text-brass mb-4">{label}</p>}
            <h1 className="heading-xl text-primary-foreground mb-5">{title}</h1>
            {description && (
              <p className="body-lg text-primary-foreground/60 max-w-xl mb-8">{description}</p>
            )}
            {children && <div className="flex flex-wrap gap-3">{children}</div>}
          </AnimatedSection>
        </div>
      </section>
    );
  }

  /* ── EDITORIAL HERO ── calmer, content-led hero with optional subtle photo */
  const cfg = editorialConfig[intensity];
  return (
    <section className={`relative ${cfg.minH} flex items-end overflow-hidden`}>
      {image ? (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{ objectPosition: imagePosition }}
            width={1920}
            height={1080}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${cfg.overlay}`} />
        </div>
      ) : (
        <div className="absolute inset-0 bg-foreground" />
      )}
      <div className="relative w-full container-wide pb-10 md:pb-14 pt-28">
        <AnimatedSection className="max-w-3xl">
          <div className="w-10 h-px bg-brass mb-6" />
          {label && <p className="micro-text text-brass mb-4">{label}</p>}
          <h1 className="heading-xl text-primary-foreground mb-4">{title}</h1>
          {description && (
            <p className="body-lg text-primary-foreground/55 max-w-xl">{description}</p>
          )}
          {children && <div className="flex flex-wrap gap-3 mt-6">{children}</div>}
        </AnimatedSection>
      </div>
    </section>
  );
}
