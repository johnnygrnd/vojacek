import AnimatedSection from "./AnimatedSection";

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, subtitle, center = true }: Props) {
  return (
    <AnimatedSection className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
      {label && <p className="micro-text mb-4">{label}</p>}
      <h2 className="heading-lg text-balance">{title}</h2>
      {subtitle && (
        <p className="body-lg text-muted-foreground mt-4 max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
