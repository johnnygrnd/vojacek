import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import heroImg from "@/assets/hero-portrait.jpg";
import { Shield, Target, Zap, ArrowRight } from "lucide-react";

const serviceModes = [
  {
    icon: Shield,
    num: "01",
    title: "Vyjednám za vás",
    subtitle: "Zastoupení ve vyjednávání",
    desc: "Převezmu jednání s protistranou. Připravím strategii, argumentaci a scénáře. Řídím celý proces od analýzy po finální dohodu. Vy se soustředíte na rozhodování.",
    situations: ["Obchodní smlouvy a kontrakty", "Prodej nebo nákup firmy", "Spory, kde je potřeba výsledek bez soudu", "Vyjednávání s investory, partnery, dodavateli"],
  },
  {
    icon: Target,
    num: "02",
    title: "Připravím vás na jednání",
    subtitle: "Strategie a příprava",
    desc: "Dodám vám plán, rozbor protistrany, scénáře a argumentaci. Natrénujeme klíčové momenty. Jednáte vy — ale s kontrolou nad výsledkem.",
    situations: ["Důležité jednání, kde nechcete improvizovat", "Cenová vyjednávání s klíčovým partnerem", "Situace, kde potřebujete jasnou strategii", "Opakující se vyjednávání se špatným výsledkem"],
  },
  {
    icon: Zap,
    num: "03",
    title: "Pomohu v kritické situaci",
    subtitle: "Krizové a obtížné vyjednávání",
    desc: "Eskalace, patové situace, emocionální konflikty. Vstoupím rychle, stabilizuji situaci a hledám cestu k řešení i tam, kde se zdá, že žádná není.",
    situations: ["Vyjednávání, které se zaseklo", "Situace pod časovým tlakem", "Konflikt, který hrozí eskalací", "Případ, kde běžný přístup selhal"],
  },
];

const process = [
  { step: "01", title: "Úvodní konzultace", desc: "Zmapuji situaci, definujeme cíle a posoudíme nejlepší přístup. Zdarma a nezávazně." },
  { step: "02", title: "Analýza a strategie", desc: "Zmapuji protistranu, připravím scénáře, argumentaci a detailní plán jednání." },
  { step: "03", title: "Vyjednávání", desc: "Jednám za vás — nebo vás vedu. S cílem dosáhnout nejlepšího možného výsledku." },
  { step: "04", title: "Výsledek", desc: "Vyhodnocení dohody, doporučení dalších kroků, podpora při implementaci." },
];

const gains = [
  { title: "Lepší podmínky", desc: "Zkušenost, techniky a příprava vedou k měřitelně lepším dohodám — v cenách, termínech i podmínkách." },
  { title: "Kontrola nad průběhem", desc: "Pracuji se scénáři a alternativami. Vím, co dělat, když protistrana řekne ne." },
  { title: "Oddělení emocí", desc: "Profesionální vyjednavač jedná racionálně i pod tlakem. Zachováte vztah s protistranou." },
  { title: "Ušetřený čas", desc: "Vyjednavač řeší jednání, vy se věnujete svému byznysu. Bez zbytečných kol a zdržení." },
];

const caseStudies = [
  { label: "Prodej podniku", result: "+120 % oproti první nabídce", desc: "Strategie postavená na hodnotové argumentaci, trpělivosti a alternativách." },
  { label: "Nákup nemovitosti", result: "−40,5 mil. Kč", desc: "Kombinace cenové analýzy, timingu a vyjednávací taktiky." },
  { label: "Mzdové vyjednávání", result: "7,5 % místo 16 %", desc: "Řízené vyjednávání s odbory, kontrola eskalace, udržení vztahů." },
  { label: "Česká energetika", result: "14 mld. Kč úspora", desc: "Detailní příprava scénářů a práce s regulačním prostředím na evropské úrovni." },
];

export default function Negotiation() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Vyjednávání" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />
        </div>
        <div className="relative container-wide py-20">
          <AnimatedSection className="max-w-2xl">
            <div className="w-10 h-px bg-brass mb-6" />
            <h1 className="heading-xl text-primary-foreground mb-6">
              Vyjednám vám podmínky, na&nbsp;které sami nedosáhnete.
            </h1>
            <p className="body-lg text-primary-foreground/60 mb-8 max-w-lg">
              Smlouvy, ceny, spory, fúze, akvizice. V ČR i v zahraničí. Každé jednání má prostor na lepší výsledek — pomůžu ho najít.
            </p>
            <div className="flex gap-4">
              <Button variant="premium" size="xl" asChild>
                <Link to="/kontakt">Popsat situaci</Link>
              </Button>
              <Button variant="premium-outline" size="xl" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                <a href="tel:+420731407976">+420 731 407 976</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3 Service Modes */}
      <section className="py-24 md:py-32 lg:py-36">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-14 md:mb-20">
            <p className="micro-text text-brass mb-4">Tři způsoby spolupráce</p>
            <h2 className="heading-lg text-balance">Jak vám mohu pomoci</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {serviceModes.map((mode, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="premium-card grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-start border-l-2 border-brass/40">
                  <div>
                    <p className="text-xs font-semibold text-brass tracking-[0.2em] uppercase mb-3">{mode.num} — {mode.subtitle}</p>
                    <h3 className="heading-md mb-4">{mode.title}</h3>
                    <p className="body-md text-muted-foreground">{mode.desc}</p>
                  </div>
                  <div>
                    <p className="micro-text mb-4">Typické situace</p>
                    <ul className="space-y-3">
                      {mode.situations.map((s, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="w-1 h-1 rounded-full bg-brass mt-2.5 shrink-0" />
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
      <section className="py-24 md:py-32 lg:py-36 bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-14 md:mb-20">
            <p className="micro-text text-brass mb-4">Proces</p>
            <h2 className="heading-lg text-balance">Jak spolupráce probíhá</h2>
          </AnimatedSection>
          <div className="relative grid md:grid-cols-4 gap-8 md:gap-10">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" />
            {process.map((s, i) => (
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

      {/* What you gain */}
      <section className="py-24 md:py-32 lg:py-36 bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-14 md:mb-20">
            <p className="micro-text text-brass mb-4">Přínos</p>
            <h2 className="heading-lg text-primary-foreground text-balance">Co získáte spoluprací</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-px bg-primary-foreground/10 max-w-4xl mx-auto overflow-hidden rounded-sm">
            {gains.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-foreground p-8 md:p-10 h-full">
                  <h3 className="font-serif text-xl font-medium text-primary-foreground mb-3">{item.title}</h3>
                  <p className="body-md text-primary-foreground/50">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-24 md:py-32 lg:py-36">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-14 md:mb-20">
            <p className="micro-text text-brass mb-4">Výsledky</p>
            <h2 className="heading-lg text-balance">Vybrané anonymizované zakázky</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="premium-card border-t-2 border-brass/30">
                  <p className="micro-text text-brass mb-3">{cs.label}</p>
                  <p className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">{cs.result}</p>
                  <p className="body-md text-muted-foreground">{cs.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Button variant="premium-outline" size="lg" asChild>
              <Link to="/reference">Všechny reference</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why me */}
      <section className="py-24 md:py-32 lg:py-36 bg-secondary/30">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-14">
            <h2 className="heading-lg text-balance">Proč právě tento vyjednavač</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {[
              "Vyjednávám od roku 2009. Na evropské i byznysové úrovni. S výsledky v řádech miliard i milionů.",
              "Oddělím emoce od procesu. Profesionální vyjednavač jedná racionálně i pod tlakem.",
              "Zachovám vztah s protistranou. Tvrdé požadavky vznáší někdo jiný — vy zůstáváte v roli partnera.",
              "Pracuji diskrétně. Ne všechny zakázky lze publikovat. A přesně tak to má být.",
            ].map((text, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <span className="w-1 h-1 rounded-full bg-brass mt-2.5 shrink-0" />
                  <p className="body-md text-muted-foreground">{text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 lg:py-36 bg-gradient-to-br from-brass/90 to-brass">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-4">Máte jednání, kde záleží na výsledku?</h2>
            <p className="body-lg text-foreground/70 mb-10 max-w-xl mx-auto">
              Popište situaci. Navrhnu postup a odhadnu, co je realisticky dosažitelné.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
