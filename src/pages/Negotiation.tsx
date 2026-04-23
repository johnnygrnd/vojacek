import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import PageHero from "@/components/sections/PageHero";
import heroImg from "@/assets/vyjednavani-hero.jpg";
import { Shield, Users, Handshake, Briefcase, TrendingDown, AlertTriangle, ArrowRight } from "lucide-react";

const cooperationModes = [
  {
    icon: Shield,
    num: "01",
    title: "Zastupování ve vyjednávání",
    desc: "Převezmu plnou zodpovědnost za proces a vyjednávám přímo za vás. Ideální volba, když potřebujete odclonit emoce, vytvořit taktický odstup od protistrany nebo naplno využít sílu profesionálního vyjednavače.",
  },
  {
    icon: Users,
    num: "02",
    title: "Připravím vás na vyjednávání",
    desc: "Zanalyzujeme vaši situaci, vytvoříme neprůstřelnou strategii (vč. BATNA) a natrénujeme argumentaci. K jednacímu stolu si sice sednete sami, ale s know-how a taktikou, kterou používají profesionálové.",
  },
  {
    icon: Handshake,
    num: "03",
    title: "Vyjednávám po vašem boku",
    desc: "Sedím u jednacího stolu s vámi jako podpora a taktický poradce. Kombinujeme vaši perfektní znalost produktu nebo oboru s mou vyjednávací strategií, a v klíčových momentech mohu převzít iniciativu.",
  },
];

const serviceTypes = [
  {
    icon: Briefcase,
    title: "Obchodní vyjednávání a kontrakty",
    desc: "Vedu a strategicky připravuji klíčová obchodní jednání s důrazem na maximální výsledek a nastavení dlouhodobě fungujících vztahů. Od klíčových kontraktů s dodavateli a zákazníky až po prodeje firem a vstup investorů.",
    situations: [
      "Vyjednání klíčových smluv s partnery, dodavateli a zákazníky",
      "Vstup investora, nastavování ceny a dalších podmínek",
      "Vyjednávání o prodeji nebo nákupu firmy",
      "Expanze na zahraniční trhy",
    ],
    forWhom: "CEO, majitelé firem, obchodní ředitelé, soukromé osoby",
  },
  {
    icon: TrendingDown,
    title: "Vyjednávání o ceně a ochrana marže",
    desc: "Když čelíte tlaku na snížení cen od protistrany nebo potřebujete zdražit vlastní služby, vyjednávám tak, abych ochránil vaše zájmy. Připravíme strategii a dosáhneme požadovaného výsledku. Ochráníme přitom i obchodní vztahy. Pomohu vám také dosáhnout lepší ceny při nákupu nebo prodeji nemovitosti.",
    situations: [
      "Zaměstnanci a management podléhají tlaku na slevy a přichází o část marže",
      "Potřeba prosadit vyšší ceny u stálých klientů",
      "Chcete ušetřit na klíčových kontraktech u svých hlavních dodavatelů",
      "Když potřebujete lepší cenu při nákupu nebo prodeji nemovitosti",
    ],
    forWhom: "Majitelé, obchodní týmy, CEO, CFO, management, soukromé osoby",
  },
  {
    icon: AlertTriangle,
    title: "Řešení sporů a krizové vyjednávání",
    desc: "Když komunikace uvízne na mrtvém bodě, hrozí eskalace k soudu nebo nemáte čas věc efektivně řešit. Vstoupím do vyjednávání, zklidním emoce, změním dynamiku sporu a najdu řešení, které ušetří čas i peníze.",
    situations: [
      "Spory se zákazníky a dodavateli",
      "Získání souhlasů a odblokování projektů",
      "Rozchod společníků ve firmě",
      "Udržení projektů při ohrožení financování",
      "Krizová jednání pod extrémním časovým tlakem",
    ],
    forWhom: "Firmy i jednotlivci v obtížné obchodní nebo životní situaci, management, právní oddělení",
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
  { label: "Pronájem průmyslových objektů", result: "−19,5 %", desc: "Úprava 10letých pronájmů průmyslových objektů." },
  { label: "Regulace v energetice", result: "14 mld. Kč", desc: "Úspory dosažené pro českou elektroenergetiku." },
];

export default function Negotiation() {
  return (
    <Layout>
      <PageHero
        image={heroImg}
        imageAlt="Vyjednávání"
        imagePosition="center 30%"
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

      {/* 1. Cooperation modes — 3 boxes */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <p className="micro-text text-brass mb-4">Formy spolupráce</p>
            <h2 className="heading-lg text-balance">Jak vám pomohu</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-5">
            {cooperationModes.map((mode, i) => {
              const Icon = mode.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="premium-card flex flex-col h-full border-t-2 border-brass/30">
                    <Icon size={28} className="text-brass mb-4" strokeWidth={1.5} />
                    <p className="text-xs font-semibold text-brass tracking-[0.2em] uppercase mb-3">{mode.num}</p>
                    <h3 className="heading-sm mb-3">{mode.title}</h3>
                    <p className="body-md text-muted-foreground">{mode.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Service types — Co pro vás řeším */}
      <section className="py-20 md:py-28 lg:py-32 bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <p className="micro-text text-brass mb-4">Typy služeb</p>
            <h2 className="heading-lg text-balance">Co pro vás řeším</h2>
            <p className="body-md text-muted-foreground mt-4 max-w-2xl mx-auto">
              Tři oblasti, ve kterých klienti nejčastěji potřebují profesionálního vyjednavače.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-5">
            {serviceTypes.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="premium-card flex flex-col h-full bg-card">
                    <Icon size={28} className="text-brass mb-4" strokeWidth={1.5} />
                    <h3 className="heading-sm mb-3">{s.title}</h3>
                    <p className="body-sm text-muted-foreground mb-5">{s.desc}</p>
                    <div className="border-t border-border/60 pt-5 mt-auto">
                      <p className="micro-text mb-3">Typické situace</p>
                      <ul className="space-y-2.5 mb-5">
                        {s.situations.map((sit, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <span className="w-1 h-1 rounded-full bg-brass mt-[9px] shrink-0" />
                            <span className="body-sm text-muted-foreground">{sit}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-foreground/70"><span className="font-semibold">Pro koho:</span> {s.forWhom}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 lg:py-32">
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
      <section className="py-20 md:py-28 lg:py-32 bg-secondary/30">
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
      <section className="py-20 md:py-28 lg:py-32">
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
