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
            <p className="micro-text text-primary-foreground/60 mb-6">Vyjednávání a zastupování</p>
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
            <p className="text-xs text-primary-foreground/40">
              Čím citlivější situace, tím víc dává smysl chladná hlava a detailní příprava.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What I solve */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading label="Oblasti" title="Co typicky řeším" />
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

      {/* How I work */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="micro-text text-primary-foreground/40 mb-4">Přístup</p>
            <h2 className="heading-lg text-primary-foreground">Jak pracuji</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { t: "Příprava", d: "Každé vyjednávání začíná důkladnou analýzou. Cíle, alternativy, prostor pro dohodu, profil protistrany." },
              { t: "Kontrola", d: "Pracuji se scénáři. Vím, co říct, kdy ustoupit a kdy neustupovat. Nic není ponecháno náhodě." },
              { t: "Diskrétnost", d: "Mnoho zakázek je citlivých. Pracuji pod NDA a s maximální ochranou informací klienta." },
              { t: "Výsledek", d: "Měřitelný dopad. Lepší cena, nižší riziko, silnější pozice. To je to, co klienti ode mě očekávají." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="border-l border-primary-foreground/20 pl-6">
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

      {/* Why negotiator */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow">
          <SectionHeading title="Proč dává smysl zapojit vyjednavače" />
          <div className="space-y-6">
            {[
              "Oddělíte emoce od procesu. Profesionální vyjednavač jedná racionálně i pod tlakem.",
              "Zachováte vztah s protistranou. „Tvrdé" požadavky vznáší někdo jiný.",
              "Získáte lepší podmínky. Zkušenost, techniky a příprava vedou k měřitelným výsledkům.",
              "Ušetříte čas. Vyjednavač řeší jednání, vy se věnujete svému byznysu.",
            ].map((text, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <p className="body-md text-muted-foreground">{text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-6">Potřebujete vyjednat lepší podmínky?</h2>
            <p className="body-lg text-muted-foreground mb-8">
              Popište situaci. Navrhnu postup a odhadnu, co je realisticky dosažitelné.
            </p>
            <Button variant="premium" size="xl" asChild>
              <Link to="/kontakt">Domluvit úvodní hovor</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
