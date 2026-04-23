import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import PageHero from "@/components/sections/PageHero";
import aboutImg from "@/assets/about-portrait.jpg";
import aboutHero from "@/assets/o-mne-hero.jpg";
import { BookOpen, ExternalLink } from "lucide-react";

const approach = [
  {
    title: "Trénink dovedností místo teorie",
    desc: "Učím vyjednávání jako disciplínu — s jasnou strukturou a měřitelnými výsledky.",
  },
  {
    title: "Odstup a nadhled místo emocí",
    desc: "Dosáhnu úspěchu s chladnou hlavou, přípravou a jasnou strategií.",
  },
  {
    title: "Zkušenosti a know-how místo improvizace",
    desc: "Když zastupuji klienta, jdu ke stolu s detailní přípravou, scénáři a jasným cílem.",
  },
];

const forWhom = [
  "Desítky českých firem s mezinárodní působností",
  "Ministerstva a veřejné instituce v ČR",
  "Podnikatelé a soukromé osoby v obtížné situaci",
];

const whatIveNegotiated = [
  "Kontrakt s odběratelem v hodnotě 150 milionů Kč p. a.",
  "Výjimky pro českou energetiku z evropských regulací",
  "Cenová vyjednávání v řádech miliard i milionů",
  "Udržení dotačních prostředků v ČR s Evropskou komisí",
  "Klíčový kontrakt s dodavatelem v hodnotě 230 mil. Kč p. a.",
  "Spor o navýšení kupní ceny za úspěšný patent",
];

const facts = [
  "Pracoval jsem pro Czech Coal a. s., PricewaterhouseCoopers ČR, CERGE-EI, IREAS, ČEZ, Teplárenské sdružení ČR, NCEU a další.",
  "21 let se pohybuji v businessu a na vysokoškolské půdě.",
  "Vyjednávání se věnuji od roku 2009 (kognitivní a behaviorální psychologie, harvardské a FBI vyjednávání, dynamika skupinového vyjednávání).",
  "Jsem autorem tréninku vyjednávání pro firmy i jednotlivce.",
];

const whyMe = [
  "Mám skutečný zájem na vašem úspěchu.",
  "Chápu, že mi svěřujete zásadní vyjednávání a potřebujete 100% profesionála.",
  "Mám praxi a výsledky. Dlouhodobě úspěšně řeším přes 90 % případů.",
];

const publications = [
  {
    badge: "Hlavní autor",
    citation:
      "VOJÁČEK, O., BRABEC, J., MACHÁČ, J. (2022): Costs of achieving emission limits in coal-burning power plants under the recent best available techniques regulation amendment: Evidence from national microeconomic data.",
    journal: "Journal of Cleaner Production 352, 131600.",
  },
  {
    badge: "Hlavní autor · IF 9,8",
    citation:
      "VOJÁČEK, O., SOBOTKA, L., MACHÁČ, J., ŽILKA, M. (2018): Impact assessment of Proposal for a Directive on the limitation of emissions from medium combustion plants — National impact assessment compared to the European impact estimate.",
    journal: "Renewable and Sustainable Energy Reviews, 82, str. 1854–1862.",
  },
  {
    badge: "IF 2,2",
    citation:
      "LOUDA, J.; VOJÁČEK, O.; SLAVÍKOVÁ, L. (2021): Achieving Robust and Socially Acceptable Environmental Policy Recommendations: Lessons from Combining the Choice Experiment Method and Institutional Analysis Focused on Cultural Ecosystem Services.",
    journal: "Forests, 12, 484.",
  },
];

export default function About() {
  return (
    <Layout>
      <PageHero
        variant="editorial"
        intensity="medium"
        image={aboutHero}
        imageAlt="Ondřej Vojáček"
        imagePosition="center 20%"
        label="O mně"
        title="Ondřej Vojáček"
        description="Profesionální vyjednavač, vysokoškolský pedagog a ekonom. Spojuji tvrdou praxi s porozuměním psychologii jednání."
      />

      {/* Bio */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection>
              <img src={aboutImg} alt="Ondřej Vojáček" className="w-full max-w-lg mx-auto" width={800} height={1000} />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="w-10 h-px bg-brass mb-6" />
              <p className="body-lg text-foreground font-medium mb-4">
                doc. Ing. Ondřej Vojáček, Ph.D.
              </p>
              <p className="body-md text-muted-foreground leading-[1.75]">
                Jsem najímán pro důležitá obchodní vyjednávání, cenová jednání i řešení sporů. Vedle zastupování klientů vedu tréninky vyjednávání pro firmy i veřejnost a individuální přípravu na vyjednávání. Učím jen to, co sám denně používám při vyjednáváních.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What makes me different */}
      <section className="py-20 md:py-28 lg:py-32 bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <p className="micro-text text-brass mb-4">Přístup</p>
            <h2 className="heading-lg text-primary-foreground">Proč ne běžný školitel nebo konzultant</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10 max-w-5xl mx-auto overflow-hidden rounded-sm">
            {approach.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-foreground p-8 md:p-10 h-full">
                  <h3 className="font-serif text-xl font-medium text-primary-foreground mb-3 leading-snug">{item.title}</h3>
                  <p className="body-md text-primary-foreground/55">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pro koho jsem vyjednával + Co jsem vyjednával */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14">
            {/* Pro koho */}
            <AnimatedSection>
              <p className="micro-text text-brass mb-4">Reference</p>
              <h2 className="heading-md mb-8">Pro koho jsem vyjednával</h2>
              <div className="space-y-4">
                {forWhom.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-brass mt-[10px] shrink-0" />
                    <p className="body-md text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Co */}
            <AnimatedSection delay={0.1}>
              <p className="micro-text text-brass mb-4">Vybrané zakázky</p>
              <h2 className="heading-md mb-8">Co jsem vyjednával</h2>
              <div className="space-y-4">
                {whatIveNegotiated.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-brass mt-[10px] shrink-0" />
                    <p className="body-md text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pár faktů o mně */}
      <section className="py-20 md:py-28 lg:py-32 bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="mb-12 max-w-3xl">
            <p className="micro-text text-brass mb-4">Pár faktů o mně</p>
            <h2 className="heading-lg">Stručně o profesní cestě</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
            {facts.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="premium-card h-full">
                  <p className="text-xs font-semibold text-brass tracking-[0.2em] uppercase mb-3">0{i + 1}</p>
                  <p className="body-md text-foreground leading-[1.7]">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Proč spolupracovat se mnou */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-12">
            <p className="micro-text text-brass mb-4">Spolupráce</p>
            <h2 className="heading-lg">Proč spolupracovat právě se mnou</h2>
          </AnimatedSection>
          <div className="space-y-5">
            {whyMe.map((text, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <span className="font-serif text-2xl text-brass leading-none shrink-0">0{i + 1}</span>
                  <p className="body-lg text-foreground leading-relaxed">{text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Publikační činnost */}
      <section className="py-20 md:py-28 lg:py-32 bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <p className="micro-text text-brass mb-4">Publikační činnost</p>
            <h2 className="heading-lg text-primary-foreground">Akademické publikace v top světových žurnálech</h2>
          </AnimatedSection>
          <div className="space-y-4 max-w-5xl mx-auto">
            {publications.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-8 p-6 md:p-8 border border-primary-foreground/10 rounded-sm bg-foreground hover:border-brass/30 transition-colors">
                  {/* Journal cover placeholder */}
                  <div className="aspect-[3/4] md:aspect-auto md:h-full max-w-[140px] md:max-w-none bg-primary-foreground/5 border border-primary-foreground/10 rounded-sm flex flex-col items-center justify-center p-4 text-center">
                    <BookOpen size={28} className="text-brass/60 mb-2" strokeWidth={1.5} />
                    <p className="text-[10px] uppercase tracking-[0.15em] text-primary-foreground/40">Náhled<br />titulky</p>
                  </div>
                  {/* Citation */}
                  <div className="flex flex-col">
                    <span className="inline-flex self-start text-[10px] font-semibold uppercase tracking-[0.18em] text-brass border border-brass/30 rounded-sm px-2.5 py-1 mb-4">
                      {p.badge}
                    </span>
                    <p className="body-sm text-primary-foreground/85 leading-[1.7] mb-3">{p.citation}</p>
                    <p className="text-xs text-primary-foreground/45 italic mb-4">{p.journal}</p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-brass/80 mt-auto">
                      DOI <ExternalLink size={11} />
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <span className="block font-serif text-5xl text-brass/30 leading-none mb-4 select-none">„</span>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-5 italic">
              Většina lidí nepřichází o peníze kvůli slabé pozici, ale proto, že podcenili přípravu a neznají hru, kterou protistrana hraje.
            </p>
            <p className="text-sm text-muted-foreground">— Ondřej Vojáček</p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-brass/90 to-brass">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-4">Řešíte důležité jednání, nebo chcete posunout svůj tým?</h2>
            <p className="body-lg text-foreground/70 mb-8">
              Ozvěte se. Navrhnu, zda je pro vás vhodnější zastoupení, strategická příprava, nebo trénink na míru.
            </p>
            <Button variant="premium" size="xl" asChild className="bg-foreground text-primary-foreground hover:bg-foreground/90">
              <Link to="/kontakt">Domluvit úvodní rozhovor</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
