import { ReactNode } from "react";
import AnimatedSection from "@/components/sections/AnimatedSection";

interface PageHeroProps {
  /** "service" = cinematic photo hero with strong overlay. "editorial" = calmer, content-led hero. */
  variant?: "service" | "editorial";
  image?: string;
  imageAlt?: string;
  label?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function PageHero({
  variant = "service",
  image,
  imageAlt = "",
  label,
  title,
  description,
  children,
}: PageHeroProps) {
  /* ── SERVICE HERO ── cinematic photo background with strong overlay */
  if (variant === "service" && image) {
    return (
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/75 to-foreground/40" />
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
  return (
    <section className="relative min-h-[40vh] flex items-end overflow-hidden">
      {image ? (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/85 to-foreground/60" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-foreground" />
      )}
      <div className="relative w-full container-wide pb-12 md:pb-16 pt-28">
        <AnimatedSection className="max-w-3xl">
          <div className="w-10 h-px bg-brass mb-6" />
          {label && <p className="micro-text text-brass mb-4">{label}</p>}
          <h1 className="heading-xl text-primary-foreground mb-5">{title}</h1>
          {description && (
            <p className="body-lg text-primary-foreground/55 max-w-xl">{description}</p>
          )}
          {children && <div className="flex flex-wrap gap-3 mt-8">{children}</div>}
        </AnimatedSection>
      </div>
    </section>
  );
}
