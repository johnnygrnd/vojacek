import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import PageHero from "@/components/sections/PageHero";
import heroImg from "@/assets/vyjednavani-hero.jpg";
import { Shield, Target, Zap, ArrowRight } from "lucide-react";

const serviceModes = [
  {
    icon: Shield,
    num: "01",
    title: "Vyjednám za vás",
    subtitle: "Zastoupení ve vyjednávání",
    desc: "Převezmu jednání s protistranou. Připravím strategii, scénáře a argumentaci. Řídím proces od analýzy po uzavření dohody. Vy se soustředíte na rozhodování.",
    situations: ["Obchodní smlouvy a kontrakty", "Prodej nebo nákup firmy", "Spory, kde je potřeba výsledek mimo soud", "Jednání s investory, partnery nebo dodavateli"],
  },
  {
    icon: Target,
    num: "02",
    title: "Připravím vás na jednání",
    subtitle: "Strategie a příprava",
    desc: "Dodám rozbor situace, profil protistrany, scénáře a argumentaci. Natrénujeme klíčové momenty. Jednáte vy — ale s jasným plánem a kontrolou nad průběhem.",
    situations: ["Důležité jednání, kde nechcete improvizovat", "Cenové vyjednávání s klíčovým partnerem", "Situace, která vyžaduje jasnou strategii", "Opakující se jednání s nedostatečným výsledkem"],
  },
  {
    icon: Zap,
    num: "03",
    title: "Pomohu v obtížné situaci",
    subtitle: "Podpora v náročných jednáních",
    desc: "Patové situace, eskalace, časový tlak. Vstoupím rychle, stabilizuji situaci a najdu cestu k řešení i tam, kde se zdá být uzavřená.",
    situations: ["Jednání, které se zaseklo", "Situace pod časovým tlakem", "Konflikt s rizikem eskalace", "Případ, kde běžný postup nefunguje"],
  },
];

const processSteps = [
  { step: "01", title: "Pochopení situace", desc: "Zmapuji cíle, prostor pro dohodu a klíčové proměnné." },
  { step: "02", title: "Strategie a příprava", desc: "Připravím scénáře, argumentaci a doporučení pro klíčové momenty." },
  { step: "03", title: "Vyjednávání", desc: "Vstoupím do jednání po vašem boku, nebo vás v něm přímo zastoupím." },
  { step: "04", title: "Výsledek", desc: "Cílem je lepší výsledek bez zbytečných chyb, ztrát a ústupků." },
];

const gains = [
  { title: "Lepší podmínky", desc: "Příprava a struktura vedou k měřitelně lepším dohodám — v cenách, termínech i smluvních podmínkách." },
  { title: "Kontrola nad jednáním", desc: "Pracuji se scénáři a alternativami. Každý krok je promyšlený, ne reaktivní." },
  { title: "Oddělení emocí od procesu", desc: "Profesionální vyjednavač jedná racionálně i pod tlakem. Vy zůstáváte v roli partnera." },
  { title: "Úspora času", desc: "Vyjednavač řeší jednání, vy se věnujete svému byznysu." },
];

const caseStudies = [
  { label: "Prodej podniku", result: "+120 %", desc: "Navýšení ceny oproti první nabídce díky hodnotové argumentaci a trpělivosti." },
  { label: "Nákup nemovitosti", result: "−40,5 mil. Kč", desc: "Úspora při akvizici na základě cenové analýzy a vyjednávací strategie." },
  { label: "Mzdové vyjednávání", result: "7,5 % místo 16 %", desc: "Řízené jednání s odbory, kontrola eskalace, zachování vztahů." },
  { label: "Regulace v energetice", result: "14 mld. Kč", desc: "Dosažená úspora díky přípravě scénářů na evropské regulační úrovni." },
];

export default function Negotiation() {
  return (
    <Layout>
      <PageHero
        image={heroImg}
        imageAlt="Vyjednávání"
        title={"Když je jednání příliš důležité na\u00A0improvizaci."}
        intensity="high"
        description="Zastupuji klienty v obchodních, cenových a strategických jednáních. Připravuji strategii a vedu jednání tak, aby výsledek odpovídal skutečné síle vaší pozice."
      >
        <Button variant="premium" size="xl" asChild>
          <Link to="/kontakt">Popsat situaci</Link>
        </Button>
        <Button variant="premium-outline" size="xl" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
          <a href="tel:+420731407976">+420 731 407 976</a>
        </Button>
      </PageHero>

      {/* 3 Service Modes */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <p className="micro-text text-brass mb-4">Formy spolupráce</p>
            <h2 className="heading-lg text-balance">Tři způsoby, jak vám mohu pomoci</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {serviceModes.map((mode, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="premium-card grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-start border-l-2 border-brass/40">
                  <div>
                    <p className="text-xs font-semibold text-brass tracking-[0.2em] uppercase mb-3">{mode.num} — {mode.subtitle}</p>
                    <h3 className="heading-md mb-3">{mode.title}</h3>
                    <p className="body-md text-muted-foreground">{mode.desc}</p>
                  </div>
                  <div>
                    <p className="micro-text mb-4">Typické situace</p>
                    <ul className="space-y-3">
                      {mode.situations.map((s, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-brass mt-2 shrink-0" />
                          <span className="body-sm text-muted-foreground">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 lg:py-32 bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <p className="micro-text text-brass mb-4">Jak pracuji</p>
            <h2 className="heading-lg text-balance">Průběh spolupráce</h2>
          </AnimatedSection>
          <div className="relative grid md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" />
            {processSteps.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-foreground text-primary-foreground flex items-center justify-center font-serif text-sm font-semibold mb-5 relative z-10">
                    {s.step}
                  </div>
                  <h3 className="heading-sm mb-2">{s.title}</h3>
                  <p className="body-md text-muted-foreground">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What you gain */}
      <section className="py-20 md:py-28 lg:py-32 bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <p className="micro-text text-brass mb-4">Přínos</p>
            <h2 className="heading-lg text-primary-foreground text-balance">Co přináší profesionální vyjednávání</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-px bg-primary-foreground/10 max-w-4xl mx-auto overflow-hidden rounded-sm">
            {gains.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-foreground p-8 md:p-10 h-full">
                  <h3 className="font-serif text-xl font-medium text-primary-foreground mb-2">{item.title}</h3>
                  <p className="body-md text-primary-foreground/50">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <p className="micro-text text-brass mb-4">Z praxe</p>
            <h2 className="heading-lg text-balance">Vybrané zakázky</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="h-full">
                <div className="premium-card border-t-2 border-brass/30 h-full flex flex-col">
                  <p className="micro-text text-brass mb-3">{cs.label}</p>
                  <p className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">{cs.result}</p>
                  <p className="body-md text-muted-foreground mt-auto">{cs.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-8">
            <Button variant="premium-outline" size="lg" asChild>
              <Link to="/reference">Všechny reference <ArrowRight size={14} className="ml-1" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why me */}
      <section className="py-20 md:py-28 lg:py-32 bg-secondary/30">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-12">
            <h2 className="heading-lg text-balance">Proč spolupracovat se mnou</h2>
          </AnimatedSection>
          <div className="space-y-5">
            {[
              "Vyjednávám od roku 2009. Na evropské i byznysové úrovni, s výsledky v řádech miliard i milionů.",
              "Oddělím emoce od procesu. Profesionální vyjednavač jedná racionálně i tam, kde je osobní tlak.",
              "Zachovám vztah s protistranou. Tvrdé požadavky vznáší vyjednavač — vy zůstáváte v roli partnera.",
              "Pracuji diskrétně. Ne každou zakázku lze zveřejnit. A přesně tak to má být.",
            ].map((text, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass mt-2 shrink-0" />
                  <p className="body-md text-muted-foreground">{text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-brass/90 to-brass">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-4">Řešíte důležité jednání?</h2>
            <p className="body-lg text-foreground/70 mb-8 max-w-xl mx-auto">
              Popište situaci. Navrhnu, zda je vhodnější zastoupení, příprava, nebo kombinace obojího.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="premium" size="xl" asChild className="bg-foreground text-primary-foreground hover:bg-foreground/90">
                <Link to="/kontakt">Popsat situaci</Link>
              </Button>
              <Button variant="premium-outline" size="xl" asChild className="border-foreground/30 text-foreground hover:bg-foreground hover:text-primary-foreground">
                <a href="tel:+420731407976">Zavolat přímo</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
