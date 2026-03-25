import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import SectionHeading from "@/components/sections/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const terms = [
  { date: "15.–17. května 2026", location: "Praha, Hotel Botanique", spots: 4 },
  { date: "18.–20. září 2026", location: "Praha, Hotel Botanique", spots: 8 },
  { date: "20.–22. listopadu 2026", location: "Praha, Hotel Botanique", spots: 12 },
];

const program = [
  { day: "Den 1", title: "Základy a psychologie", items: ["Principy vyjednávání", "Psychologie protistrany", "BATNA a vyjednávací prostor", "Příprava na jednání", "Simulace: úvodní vyjednávání"] },
  { day: "Den 2", title: "Techniky a strategie", items: ["Taktiky a protitaktiky", "Práce s ústupky", "Emoce a tlak", "Simulace: cenové vyjednávání", "Simulace: složitý spor"] },
  { day: "Den 3", title: "Pokročilé situace", items: ["Vícestranná vyjednávání", "Koaliční strategie", "Formulace klíčových vět", "Závěrečná simulace", "Individuální zpětná vazba"] },
];

const faqs = [
  { q: "Pro koho je trénink vhodný?", a: "Pro každého, kdo vyjednává – manažery, obchodníky, nákupčí, podnikatele, právníky i jednotlivce." },
  { q: "Jaký je maximální počet účastníků?", a: "12 účastníků. Menší skupina = více prostoru pro simulace a zpětnou vazbu." },
  { q: "Co mám s sebou?", a: "Nic speciálního. Veškeré materiály dostanete na místě." },
  { q: "Jak probíhá platba?", a: "Platba předem na základě faktury nebo online kartou. Po registraci obdržíte potvrzení s detaily." },
  { q: "Je možné stornovat?", a: "Ano, za podmínek uvedených v obchodních podmínkách. Přihlášku lze přenést na jinou osobu." },
];

export default function PublicTraining() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl">
            <p className="micro-text text-primary-foreground/40 mb-6">Veřejný trénink</p>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Třídenní trénink vyjednávání, který vám dá kontrolu u stolu
            </h1>
            <p className="body-lg text-primary-foreground/70 mb-8">
              Psychologie. Techniky. Simulace. Budujete dovednost – ne jen znalosti.
            </p>
            <Button variant="premium" size="xl" asChild className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              <a href="#terminy">Přejít na termíny</a>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* What you get */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading title="Co získáte" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Schopnost vyjednávat systematicky a s přípravou",
              "Techniky pro cenová, obchodní i osobní vyjednávání",
              "Praktické zkušenosti z realistických simulací",
              "Individuální zpětná vazba od lektora",
              "Materiály a návody k dalšímu rozvoji",
              "Kontakty na skupinu profesionálů",
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <p className="body-md text-muted-foreground">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <SectionHeading title="Program tréninku" />
          <div className="grid md:grid-cols-3 gap-8">
            {program.map((day, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="premium-card h-full">
                  <p className="micro-text text-primary mb-4">{day.day}</p>
                  <h3 className="heading-sm mb-4">{day.title}</h3>
                  <ul className="space-y-2">
                    {day.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 body-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/40 mt-2.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section id="terminy" className="section-padding">
        <div className="container-wide">
          <SectionHeading title="Termíny a registrace" subtitle="Cena: 39 000 Kč bez DPH / účastník" />
          <div className="grid md:grid-cols-3 gap-6">
            {terms.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="premium-card text-center">
                  <h3 className="font-serif text-xl font-semibold mb-2">{t.date}</h3>
                  <p className="body-sm text-muted-foreground mb-2">{t.location}</p>
                  <p className="text-xs text-accent font-medium mb-6">Zbývá {t.spots} míst</p>
                  <Button variant="premium" size="lg" asChild className="w-full">
                    <Link to="/kontakt">Registrovat se</Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-12">
            <p className="micro-text text-primary-foreground/40 mb-4">Reference účastníků</p>
            <h2 className="heading-lg text-primary-foreground">Co říkají absolventi</h2>
          </AnimatedSection>
          {[
            { q: "Nejlepší trénink vyjednávání, který jsem absolvoval. Praktický, tvrdý, bez zbytečného balastu.", a: "Obchodní manažer, farmaceutická firma" },
            { q: "Simulace jsou geniální. Teprve pod tlakem zjistíte, co děláte špatně.", a: "Nákupčí, automotive" },
          ].map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="mb-8">
              <div className="border border-primary-foreground/10 p-8">
                <p className="font-serif text-xl text-primary-foreground/80 mb-4 italic">„{t.q}"</p>
                <p className="text-sm text-primary-foreground/40">{t.a}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading title="Časté dotazy" />
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border/60 bg-card px-6">
                <AccordionTrigger className="text-left font-serif text-lg font-medium py-5 hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
}
