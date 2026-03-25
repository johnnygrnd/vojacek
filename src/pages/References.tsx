import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import SectionHeading from "@/components/sections/SectionHeading";

const results = [
  { number: "14 mld. Kč", desc: "Úspora v české energetice", cat: "Veřejná sféra" },
  { number: "10 mld. Kč", desc: "Udržení prostředků v ČR při vyjednávání o dotacích", cat: "Veřejná sféra" },
  { number: "7,5 %", desc: "místo 16 % při mzdovém vyjednávání", cat: "Firmy" },
  { number: "2,1 mil. Kč", desc: "místo 3,2 mil. Kč při nákupu technologie", cat: "Firmy" },
  { number: "104,5 mil. Kč", desc: "místo 145 mil. Kč při nákupu nemovitosti", cat: "Jednotlivci" },
  { number: "26,4 mil. Kč", desc: "místo 12 mil. Kč při prodeji podniku", cat: "Firmy" },
];

const testimonials = [
  { quote: "Ondřej nám pomohl vyjednat podmínky, které jsme považovali za nedosažitelné.", author: "CEO, výrobní společnost" },
  { quote: "Kurz vyjednávání změnil přístup celého obchodního týmu.", author: "Obchodní ředitel, IT firma" },
  { quote: "Profesionální zastoupení při prodeji firmy. Výsledek překonal naše očekávání.", author: "Majitel, strojírenský podnik" },
  { quote: "Ondřej přistupuje k věci systematicky a diskrétně.", author: "CFO, energetická společnost" },
  { quote: "Trénink na míru pro nákupní tým. Měřitelný posun v dohodách s dodavateli.", author: "Ředitel nákupu, FMCG" },
  { quote: "Pomohl nám udržet klíčového klienta. Bez emocí, s výsledkem.", author: "Country Manager, technologická firma" },
];

const credibility = [
  "Evropská komise a evropské regulační orgány",
  "Ministerstva a veřejné instituce v ČR",
  "Výrobní a průmyslové společnosti",
  "Technologické a IT firmy",
  "Energetický sektor",
  "Nemovitostní a developerské projekty",
  "Soukromí klienti s vysokou hodnotou sporu",
];

export default function References() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl">
            <p className="micro-text text-primary-foreground/40 mb-6">Reference a výsledky</p>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Výsledek je měřitelný. A přichází z přípravy.
            </h1>
            <p className="body-lg text-primary-foreground/70">
              Vybrané dopady z reálných zakázek. Detaily sdílím diskrétně a podle kontextu.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Results grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="premium-card text-center">
                  <p className="micro-text text-accent mb-4">{r.cat}</p>
                  <p className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-3">{r.number}</p>
                  <p className="body-sm text-muted-foreground">{r.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <SectionHeading title="Co říkají klienti" />
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="premium-card">
                  <p className="font-serif text-lg md:text-xl text-foreground/80 mb-4 italic leading-relaxed">„{t.quote}"</p>
                  <p className="body-sm text-muted-foreground">{t.author}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading title="Kde jsem působil" subtitle="Oblasti a typy klientů, se kterými pracuji." />
          <div className="space-y-4">
            {credibility.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-center gap-4 py-3 border-b border-border/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <p className="body-md text-foreground">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-primary-foreground mb-6">Chcete podobné výsledky?</h2>
            <p className="body-lg text-primary-foreground/60 mb-8">Řekněte mi, co řešíte.</p>
            <Button variant="premium" size="xl" asChild className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              <Link to="/kontakt">Domluvit úvodní hovor</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
