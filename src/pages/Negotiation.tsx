import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import SectionHeading from "@/components/sections/SectionHeading";
import heroImg from "@/assets/hero-portrait.jpg";

const caseStudies = [
  { title: "Úspora 14 mld. Kč", desc: "Vyjednávání v české energetice. Detailní příprava scénářů a práce s regulačním prostředím." },
  { title: "Prodej podniku za 26,4 mil. Kč", desc: "Původní nabídka 12 mil. Kč. Strategie postavená na hodnotové argumentaci a alternativách." },
  { title: "Nákup nemovitosti za 104,5 mil. Kč", desc: "Místo původních 145 mil. Kč. Kombinace cenových analýz a vyjednávací taktiky." },
  { title: "Mzdové vyjednávání – 7,5 % místo 16 %", desc: "Řízené vyjednávání s odbory, kontrola eskalace, udržení vztahů." },
];

export default function Negotiation() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Vyjednávání" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
        </div>
        <div className="relative container-wide py-20">
          <AnimatedSection className="max-w-2xl">
            <p className="micro-text text-brass mb-6">Vyjednávání a zastupování</p>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Vyjednám vám, co potřebujete. Rychle a účinně.
            </h1>
            <p className="body-lg text-primary-foreground/70 mb-8">
              Ceny, smlouvy, spory, fúze, akvizice. V ČR i v zahraničí.
            </p>
            <div className="flex gap-4 mb-4">
              <Button variant="premium" size="xl" asChild>
                <Link to="/kontakt">Napsat</Link>
              </Button>
              <Button variant="premium-outline" size="xl" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                <a href="tel:+420731407976">Zavolat</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Co to znamená */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading label="Služba" title="Co vyjednávání a zastupování znamená" />
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <AnimatedSection>
              <p className="body-md text-muted-foreground">
                Převezmu za vás jednání s protistranou — připravím strategii, argumentaci a scénáře. 
                Řídím celý proces od analýzy situace po finální dohodu. Vy se soustředíte na rozhodování.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="body-md text-muted-foreground">
                Nebo vás na jednání připravím — dodám plán, rozbor protistrany a trénink klíčových momentů. 
                Jednáte vy, ale s kontrolou nad výsledkem.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pro koho */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <SectionHeading label="Pro koho" title="V jakých situacích pomáhám" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Obchodní smlouvy", d: "Kontrakty, podmínky, sankce, ceny. Od prvního návrhu po finální podpis." },
              { t: "Lepší ceny a nižší náklady", d: "Nákup, dodavatelé, nájmy, energie. Měřitelné úspory." },
              { t: "Komplikované spory", d: "Konflikty, kde je potřeba najít řešení bez soudu. Nebo s tím počítat." },
              { t: "Zásadní dohody", d: "Fúze, akvizice, prodej firmy, vstup investora. Vysoké sázky, nízká tolerance chyb." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="premium-card h-full">
                  <h3 className="heading-sm mb-3">{item.t}</h3>
                  <p className="body-sm text-muted-foreground">{item.d}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Jak probíhá spolupráce */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading label="Proces" title="Jak probíhá spolupráce" />
          <div className="relative grid md:grid-cols-4 gap-8 md:gap-10">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" />
            {[
              { step: "01", title: "Úvodní konzultace", desc: "Popíšete situaci, definujeme cíle a posoudíme, jaký přístup je pro vás vhodný." },
              { step: "02", title: "Analýza a strategie", desc: "Zmapuji protistranu, připravím scénáře, argumentaci a detailní plán jednání." },
              { step: "03", title: "Vyjednávání", desc: "Jednám za vás nebo vás vedu. S cílem dosáhnout nejlepšího možného výsledku." },
              { step: "04", title: "Výsledek a follow-up", desc: "Vyhodnocení dohody, doporučení dalších kroků a podpora při implementaci." },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-foreground text-primary-foreground flex items-center justify-center font-serif text-sm font-semibold mb-6 relative z-10">
                    {s.step}
                  </div>
                  <h3 className="heading-sm mb-3">{s.title}</h3>
                  <p className="body-md text-muted-foreground">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Co získáte */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="micro-text text-brass mb-4">Přínos</p>
            <h2 className="heading-lg text-primary-foreground">Co získáte</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { t: "Kontrola rizik", d: "Pracuji se scénáři a alternativami. Připravím vás na každý průběh jednání." },
              { t: "Strategický náhled", d: "Rozumím dynamice vyjednávání. Vidím prostor, kde je dohoda možná." },
              { t: "Odstup a jasný plán", d: "Oddělím emoce od rozhodování. Přinesu strukturu tam, kde chybí." },
              { t: "Silnější pozice", d: "Důkladná příprava znamená silnější argumenty a lepší výsledek." },
              { t: "Profesionální příprava", d: "BATNA, vyjednávací prostor, profil protistrany. Nic není ponecháno náhodě." },
              { t: "Zkušenost z praxe", d: "Stovky jednání od roku 2009. Výsledky v řádech miliard i milionů." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="border-l border-brass/40 pl-6">
                  <h3 className="font-serif text-xl font-medium text-primary-foreground mb-2">{item.t}</h3>
                  <p className="body-md text-primary-foreground/60">{item.d}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading label="Výsledky" title="Vybrané anonymizované zakázky" />
          <div className="grid sm:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="premium-card">
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-3">{cs.title}</h3>
                  <p className="body-md text-muted-foreground">{cs.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Proč vyjednavač */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow">
          <SectionHeading title="Proč se ozvat právě sem" />
          <div className="space-y-6">
            {[
              "Oddělíte emoce od procesu. Profesionální vyjednavač jedná racionálně i pod tlakem.",
              "Zachováte vztah s protistranou. „Tvrdé" požadavky vznáší někdo jiný.",
              "Získáte lepší podmínky. Zkušenost, techniky a příprava vedou k měřitelným výsledkům.",
              "Ušetříte čas. Vyjednavač řeší jednání, vy se věnujete svému byznysu.",
            ].map((text, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass mt-2.5 shrink-0" />
                  <p className="body-md text-muted-foreground">{text}</p>
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
            <h2 className="heading-lg text-primary-foreground mb-6">Potřebujete vyjednat lepší podmínky?</h2>
            <p className="body-lg text-primary-foreground/60 mb-8">
              Popište situaci. Navrhnu postup a odhadnu, co je realisticky dosažitelné.
            </p>
            <Button variant="premium" size="xl" asChild className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              <Link to="/kontakt">Domluvit úvodní hovor</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
