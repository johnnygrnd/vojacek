import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import PageHero from "@/components/sections/PageHero";
import trainingImg from "@/assets/treninky-hero.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Users, Building2, User, Clock, MapPin } from "lucide-react";

const verejneTerminy = [
  { date: "23. května 2026", location: "Praha", status: "Vyprodáno" },
  { date: "5. června 2026", location: "Praha", status: "Vyprodáno" },
  { date: "18. června 2026", location: "Praha", status: "Vyprodáno" },
];

const trainingTypes = [
  {
    icon: Users,
    num: "01",
    title: "Veřejný trénink vyjednávání",
    desc: "Třídenní intenzivní trénink, který z vás udělá mistry za jednacím stolem. Komplexní trénink postavený na metodách Harvardu, FBI a Yale University. Strategie, psychologie a simulace reálných situací.",
    audience: "Pro jednotlivce i zástupce firem",
    targetId: "verejny-trenink",
  },
  {
    icon: Building2,
    num: "02",
    title: "Firemní tréninky vyjednávání",
    desc: "Trénink na míru přímo pro váš tým. Obsah, simulace i strategie jsou přizpůsobeny na míru vašemu oboru, pozici na trhu a situacím, které řešíte. Po tréninku nebudete zbytečně ustupovat a odnesete si víc z každého jednání.",
    audience: "Pro firemní týmy 5–10 osob",
    targetId: "firemni-treninky",
  },
  {
    icon: User,
    num: "03",
    title: "Individuální trénink vyjednávání",
    desc: "Systematický rozvoj vašich vyjednávacích dovedností nebo příprava na konkrétní jednání. Trénink je plně zaměřen na vaši specifickou situaci. Po tréninku budete usedat k jednacímu stolu s jistotou a jasnou strategií.",
    audience: "Podnikatelé, manažeři, soukromé osoby",
    targetId: "individualni-trenink",
  },
];

const corporateTrainings = [
  {
    title: "Strategie a psychologie vyjednávání",
    desc: "Komplexní trénink, který spojuje tvrdou praxi s metodami vyjednávání dle Harvardu, FBI a psychologií ovlivňování. Vyjednávání není o improvizaci, ale o systému. Naučíte se, jak číst protistranu, odhalit její skutečné zájmy a řídit proces jednání až k dosažení vašich cílů.",
    href: "/kurzy/firemni-trenink",
  },
  {
    title: "Cenová jednání a obrana proti tlaku",
    desc: "Trénink zaměřený na ochranu marže a vyjednávání o penězích. Váš tým nechává peníze na stole, protože neumí čelit tlaku na slevy nebo maximalizuje obrat na úkor marží? Trénink je zaměřen na to, jak obstát v napjatém cenovém vyjednávání, jak prosadit svou cenu, a přitom udržet dlouhodobé vztahy se zákazníky a dodavateli.",
    href: "/kurzy/vyjednavani-o-cenach",
  },
  {
    title: "Strategické a krizové vyjednávání pro management",
    desc: "Trénink zaměřený na vyjednávání pod tlakem, pokročilejší metody psychologie ovlivňování a deeskalaci konfliktů. Trénink vás provede od základních postupů psychologie ovlivňování po vyjednávání ve vyhrocených situacích. Je postaven na principech Harvardského a FBI vyjednávání a systemického psychoterapeutického výcviku, abyste si udrželi nadhled.",
    href: "/kurzy/firemni-trenink",
  },
];

const learnings = [
  "Efektivně jednat s obtížnými lidmi",
  "Čelit tlaku, manipulaci a námitkám",
  "Dosáhnout lepší ceny jako kupující i prodávající",
  "Jednat efektivně pod tlakem",
  "Zbytečně neustupovat a odnést si maximum",
  "Vyjednávat dle zásad Harvardu, FBI a Yale University",
];

const faqs = [
  { q: "Pro koho jsou tréninky určené?", a: "Pro každého, kdo vyjednává a chce lepší výsledky — obchodníky, nákupčí, manažery, právníky, podnikatele i jednotlivce." },
  { q: "Proč simulace místo přednášek?", a: "Vyjednávání je dovednost. Buduje se opakovanou praxí pod tlakem. Simulace jsou nejúčinnější cesta k reálnému posunu." },
  { q: "Lze firemní trénink přizpůsobit?", a: "Ano. Obsah, simulace i rozbory přizpůsobuji odvětví, rolím a typickým situacím klienta." },
  { q: "Kolik lidí může být na firemním tréninku?", a: "Optimální skupina je 5–10 účastníků. Simulace vyžadují aktivní zapojení každého." },
  { q: "Jaký je rozdíl oproti běžným kurzům?", a: "Učím vyjednávání jako disciplínu — s jasnou strukturou, důrazem na simulace a měřitelným posunem v dovednostech." },
];

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Courses() {
  return (
    <Layout>
      <PageHero
        image={trainingImg}
        imageAlt="Tréninky vyjednávání"
        imagePosition="center 65%"
        intensity="medium"
        title="Tréninky vyjednávání"
        description="Neučím obecnou teorii. Trénink stavím na simulacích, rozborech a postupech, které sám používám při vyjednáváních pro klienty."
      />

      {/* Approach stats */}
      <section className="py-14 md:py-18 border-b border-border/40">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { num: "70 %", label: "praxe a simulací", desc: "Účastníci vyjednávají od prvního dne. Pod tlakem, s omezenými informacemi." },
              { num: "100 %", label: "použitelnost", desc: "Každá technika je ověřená v reálných jednáních. Použijete ji ihned." },
              {
                num: "15+",
                label: "let zkušeností",
                desc: (
                  <>
                    Trénink vede člověk, který sám <span className="underline decoration-brass decoration-2 underline-offset-4">denně vyjednává</span> — ne lektor z učebnice.
                  </>
                ),
              },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <p className="font-serif text-3xl font-semibold text-foreground mb-1">{s.num}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-brass mb-2">{s.label}</p>
                <p className="body-sm text-muted-foreground">{s.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY LOGOS — placeholder */}
      <section className="py-14 md:py-16 bg-secondary/30 border-b border-border/40">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-8">
            <p className="micro-text text-brass mb-2">Školil jsem pro</p>
            <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">Vybrané firmy a instituce</h3>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <div className="aspect-[3/2] rounded-sm bg-background border border-border/60 flex items-center justify-center text-[11px] uppercase tracking-[0.15em] text-muted-foreground/60">
                  Logo {i + 1}
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <p className="text-xs text-muted-foreground/60 text-center mt-6 italic">Loga firem doplníme — toto je placeholder.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* SIGNPOST — 3 training types */}
      <section className="py-20 md:py-24 lg:py-28">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <p className="micro-text text-brass mb-3">Tři typy tréninků</p>
            <h2 className="heading-lg text-balance">Jakou formu vzdělávání hledáte?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-5">
            {trainingTypes.map((t, i) => {
              const Icon = t.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <button
                    onClick={() => scrollToId(t.targetId)}
                    className="group block h-full text-left w-full"
                  >
                    <div className="premium-card flex flex-col h-full border-t-2 border-brass/30 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                      <Icon size={28} className="text-brass mb-4" strokeWidth={1.5} />
                      <p className="text-xs font-semibold text-brass tracking-[0.2em] uppercase mb-3">{t.num}</p>
                      <h3 className="heading-sm mb-3">{t.title}</h3>
                      <p className="body-md text-muted-foreground mb-5 flex-1">{t.desc}</p>
                      <div className="border-t border-border/60 pt-4">
                        <p className="text-xs text-foreground/70 mb-3"><span className="font-semibold">Pro koho:</span> {t.audience}</p>
                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground group-hover:text-brass transition-colors">
                          Více informací <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </button>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* What you will learn */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="mb-8">
            <p className="micro-text text-brass mb-3">Naučíte se</p>
            <h2 className="heading-md">Co si z tréninku odnesete</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {learnings.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass mt-[10px] shrink-0" />
                  <p className="body-md text-foreground">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL: Veřejný trénink */}
      <section id="verejny-trenink" className="py-20 md:py-24 scroll-mt-20">
        <div className="container-wide">
          <AnimatedSection className="mb-8">
            <p className="micro-text text-brass mb-2">Otevřený trénink</p>
            <div className="w-10 h-px bg-brass mb-4" />
            <h2 className="heading-lg">Veřejný trénink vyjednávání</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="premium-card flex flex-col border-brass/30 border-t-2">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-brass tracking-[0.15em] uppercase mb-3">Nejoblíbenější</p>
                  <h3 className="heading-sm mb-3">Veřejný trénink vyjednávání</h3>
                  <p className="body-md text-muted-foreground mb-4 max-w-2xl">
                    Třídenní intenzivní výcvik. Strategie, psychologie, simulace reálných situací. Nejkomplexnější otevřený trénink vyjednávání v ČR.
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-1.5">
                    <p className="body-sm text-muted-foreground"><span className="font-medium text-foreground">Pro koho:</span> Pro jednotlivce i zástupce firem</p>
                    <p className="body-sm text-muted-foreground"><span className="font-medium text-foreground">Délka:</span> 3 dny</p>
                  </div>
                </div>
                <div className="flex md:flex-col items-end md:items-end justify-between md:justify-start gap-4 shrink-0">
                  <p className="font-serif text-2xl font-semibold text-foreground whitespace-nowrap">39{"\u00A0"}000{"\u00A0"}Kč</p>
                  <Button variant="premium" size="lg" asChild>
                    <Link to="/kurzy/verejny-trenink">
                      Detail <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="border-t border-border/60 pt-6">
                <p className="text-xs font-semibold text-brass tracking-[0.2em] uppercase mb-4">Nejbližší termíny</p>
                <ul className="divide-y divide-border/50">
                  {verejneTerminy.map((t, i) => (
                    <li
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6 py-4"
                    >
                      <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                        <span className="inline-flex items-center gap-2 text-foreground">
                          <Clock size={16} className="text-brass shrink-0" strokeWidth={1.75} />
                          <span className="body-md font-medium">{t.date}</span>
                        </span>
                        <span className="inline-flex items-center gap-2 text-muted-foreground">
                          <MapPin size={16} className="text-brass shrink-0" strokeWidth={1.75} />
                          <span className="body-md">{t.location}</span>
                        </span>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-destructive/80">
                        {t.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* DETAIL: Firemní tréninky — 3 boxes */}
      <section id="firemni-treninky" className="py-20 md:py-24 bg-secondary/30 scroll-mt-20">
        <div className="container-wide">
          <AnimatedSection className="mb-10">
            <p className="micro-text text-brass mb-2">Firemní tréninky</p>
            <div className="w-10 h-px bg-brass mb-4" />
            <h2 className="heading-lg mb-3">Tři zaměření firemních tréninků</h2>
            <p className="body-md text-muted-foreground max-w-2xl">
              Vyberte si konkrétní téma, které chcete s vaším týmem řešit. Obsah a simulace přizpůsobím vašemu oboru a situaci.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-5">
            {corporateTrainings.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="premium-card flex flex-col h-full bg-card">
                  <p className="text-xs font-semibold text-brass tracking-[0.2em] uppercase mb-3">Box {i + 1}</p>
                  <h3 className="heading-sm mb-3">{t.title}</h3>
                  <p className="body-sm text-muted-foreground mb-5 flex-1">{t.desc}</p>
                  <Button variant="premium-outline" size="default" asChild className="self-start">
                    <Link to={t.href}>
                      Detail kurzu <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL: Individuální trénink */}
      <section id="individualni-trenink" className="py-20 md:py-24 scroll-mt-20">
        <div className="container-wide">
          <AnimatedSection className="mb-8">
            <p className="micro-text text-brass mb-2">Individuální příprava</p>
            <div className="w-10 h-px bg-brass mb-4" />
            <h2 className="heading-lg">Individuální trénink vyjednávání</h2>
          </AnimatedSection>
          <div className="max-w-2xl">
            <AnimatedSection delay={0.1}>
              <div className="premium-card flex flex-col">
                <h3 className="heading-sm mb-2">Individuální trénink</h3>
                <p className="body-md text-muted-foreground mb-4">
                  Příprava na konkrétní jednání nebo systematický rozvoj vyjednávací dovednosti. Plně zaměřeno na vaši situaci.
                </p>
                <div className="space-y-1.5 mb-5 flex-1">
                  <p className="body-sm text-muted-foreground"><span className="font-medium text-foreground">Pro koho:</span> Pro manažery, jednatele a podnikatele</p>
                  <p className="body-sm text-muted-foreground"><span className="font-medium text-foreground">Délka:</span> Dle potřeby</p>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <p className="font-serif text-2xl font-semibold text-foreground">Cena na dotaz</p>
                  <Button variant="premium" size="lg" asChild>
                    <Link to="/kurzy/individualni-trenink">
                      Detail <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 lg:py-32 bg-foreground text-primary-foreground">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-12">
            <p className="micro-text text-brass mb-4">Otázky</p>
            <h2 className="heading-lg text-primary-foreground">Časté dotazy</h2>
          </AnimatedSection>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-primary-foreground/10 bg-foreground px-6">
                <AccordionTrigger className="text-left font-serif text-lg font-medium py-5 hover:no-underline text-primary-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-primary-foreground/50 pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-brass/90 to-brass">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-4">Chcete posunout svůj tým?</h2>
            <p className="body-lg text-foreground/70 mb-8">Ozvěte se. Navrhnu formát tréninku, který dává smysl pro vaši situaci.</p>
            <Button variant="premium" size="xl" asChild className="bg-foreground text-primary-foreground hover:bg-foreground/90">
              <Link to="/kontakt">Poptat trénink</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
