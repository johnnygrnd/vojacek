import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import SectionHeading from "@/components/sections/SectionHeading";
import heroImg from "@/assets/hero-portrait.jpg";
import trainingImg from "@/assets/training-workshop.jpg";
import aboutImg from "@/assets/about-portrait.jpg";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const proofTiles = [
  { text: "Vyjednávám od roku 2009" },
  { text: "Výsledky v řádech miliard i milionů" },
  { text: "Kurzy postavené na simulacích" },
  { text: "Pro firmy i jednotlivce" },
];

const services = [
  {
    title: "Zastoupím vás",
    desc: "Převezmu jednání a dotáhnu dohodu k lepším podmínkám. Včetně přípravy argumentace, scénářů a práce s riziky.",
    cta: "Chci zastoupení",
    href: "/vyjednavani",
  },
  {
    title: "Připravím vás",
    desc: "Vy jednáte. Já vám dodám strategii, páky, strukturu a trénink tak, abyste šli ke stolu s kontrolou.",
    cta: "Chci strategii",
    href: "/sluzby",
  },
  {
    title: "Natrénuju váš tým",
    desc: "Praktické kurzy a firemní tréninky postavené na simulacích. Žádné povídání o vyjednávání – dovednost.",
    cta: "Vybrat kurz",
    href: "/kurzy",
  },
];

const results = [
  { number: "14 mld. Kč", desc: "Úspora v české energetice" },
  { number: "10 mld. Kč", desc: "Udržení prostředků v ČR při vyjednávání o dotacích" },
  { number: "7,5 %", desc: "místo 16 % při mzdovém vyjednávání" },
  { number: "2,1 mil. Kč", desc: "místo 3,2 mil. Kč při nákupu technologie" },
  { number: "104,5 mil. Kč", desc: "místo 145 mil. Kč při nákupu nemovitosti" },
  { number: "26,4 mil. Kč", desc: "místo 12 mil. Kč při prodeji podniku" },
];

const processSteps = [
  {
    step: "01",
    title: "Analýza situace",
    desc: "Definujeme cíle, zmapujeme protistranu, nastavíme BATNA a prostor pro dohodu.",
  },
  {
    step: "02",
    title: "Strategie a scénáře",
    desc: "Připravím detailní postup pro různé scénáře, argumentaci, ústupky, načasování i formulace klíčových vět.",
  },
  {
    step: "03",
    title: "Vyjednávání a dotažení dohody",
    desc: "Buď vyjednávám za vás, nebo vás vedu v reálném čase. Vždy s cílem posunout podmínky a udržet vztahy.",
  },
];

const courses = [
  {
    title: "Veřejný trénink",
    sub: "Třídenní komplexní vyjednávání",
    price: "39 000 Kč",
    cta: "Termíny a registrace",
    href: "/verejny-trenink",
  },
  {
    title: "Firemní trénink",
    sub: "Strategie a psychologie ve vyjednávání",
    price: "od 132 000 Kč",
    cta: "Poptat firemní školení",
    href: "/kontakt",
  },
  {
    title: "Vyjednávání o cenách",
    sub: "Dvoudenní trénink",
    price: "od 126 000 Kč",
    cta: "Poptat kurz",
    href: "/kontakt",
  },
  {
    title: "Individuální trénink",
    sub: "Na míru, individuální přístup",
    price: "Cena na dotaz",
    cta: "Domluvit trénink",
    href: "/kontakt",
  },
];

const testimonials = [
  {
    quote: "Ondřej nám pomohl vyjednat podmínky, které jsme považovali za nedosažitelné. Klid, příprava a přesnost.",
    author: "CEO, výrobní společnost",
  },
  {
    quote: "Kurz vyjednávání změnil přístup celého obchodního týmu. Praktické, tvrdé, použitelné hned.",
    author: "Obchodní ředitel, IT firma",
  },
  {
    quote: "Profesionální zastoupení při prodeji firmy. Výsledek překonal naše očekávání o desítky procent.",
    author: "Majitel, strojírenský podnik",
  },
  {
    quote: "Ondřej přistupuje k věci systematicky a diskrétně. Přesně to, co jsme potřebovali.",
    author: "CFO, energetická společnost",
  },
];

const faqs = [
  { q: "Je vhodné najmout vyjednavače jen kvůli ceně?", a: 'Ano. Cena je jedním z nejčastějších důvodů. Profesionální příprava a zastoupení přináší měřitelné výsledky i v případech, kde jde \u201Ejen\u201C o vyjednání lepší ceny.' },
  { q: "Co budete potřebovat na začátku?", a: "Stručný popis situace, vaše cíle a představu o ideálním výsledku. Vše ostatní řešíme společně na úvodním hovoru." },
  { q: "Jak rychle se umíme posunout?", a: "Úvodní hovor lze domluvit do 24 hodin. Přípravu strategie obvykle zvládáme v řádu dní." },
  { q: "Zastupujete i jednotlivce?", a: "Ano. Pracuji s firmami i jednotlivci. Od nemovitostních transakcí po pojistné události a majetkové spory." },
  { q: "Co když je protistrana tvrdá?", a: "Tvrdá protistrana je běžná. Klíč je v přípravě scénářů, znalosti alternativ a kontrole emocí." },
  { q: "Děláte i veřejné kurzy?", a: "Ano. Třídenní veřejný trénink vyjednávání probíhá několikrát ročně. Termíny najdete na stránce Veřejný trénink." },
  { q: "Lze firemní kurz upravit na míru?", a: "Každý firemní kurz přizpůsobuji konkrétním potřebám, odvětví a situacím klienta." },
  { q: "Jak probíhá platba za veřejný trénink?", a: "Platba probíhá předem na základě faktury nebo online platby kartou. Po registraci obdržíte potvrzení a podrobné informace." },
];

const firmy = [
  "Fúze, akvizice, vstup investora",
  "Nákup / prodej firmy za nejlepší možné podmínky",
  "Klíčové kontrakty, ceny, sankce, inflační doložky",
  "Spory s důležitým zákazníkem / dodavatelem",
  "Tlak na náklady, nájmy, energie, mzdy",
  "Trénink vyjednávání pro management i týmy",
];

const jednotlivci = [
  "Mimosoudní dohody ve sporech",
  "Koupě / prodej nemovitosti",
  "Jednání o pojistné události",
  "Vyjednání vyššího platu",
  "Jednání s dodavateli při stavbě",
];

export default function Index() {
  const [audience, setAudience] = useState<"firmy" | "jednotlivci">("firmy");

  return (
    <Layout>
      {/* HERO */}
      {/* HERO – cinematic blend */}
      <section className="relative bg-foreground min-h-[90vh] flex items-center overflow-hidden">
        {/* Image – edge to edge left */}
        <div className="absolute inset-0 md:right-[35%]">
          <img
            src={heroImg}
            alt="Ondřej Vojáček"
            className="w-full h-full object-cover object-[35%_15%]"
            width={1920}
            height={1080}
          />
        </div>

        {/* Gradient dissolve – desktop */}
        <div
          className="absolute inset-0 hidden md:block pointer-events-none"
          style={{
            background: `linear-gradient(to right, 
              hsl(var(--foreground) / 0) 0%, 
              hsl(var(--foreground) / 0.15) 30%, 
              hsl(var(--foreground) / 0.6) 50%, 
              hsl(var(--foreground) / 0.92) 65%, 
              hsl(var(--foreground)) 75%
            )`,
          }}
        />

        {/* Gradient – mobile (bottom fade) */}
        <div
          className="absolute inset-0 md:hidden pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, 
              hsl(var(--foreground) / 0) 30%, 
              hsl(var(--foreground) / 0.5) 60%, 
              hsl(var(--foreground)) 85%
            )`,
          }}
        />

        {/* Text – right side */}
        <div className="relative w-full container-wide">
          <div className="md:ml-auto md:max-w-[520px] mt-[55vh] md:mt-0 px-6 md:px-0 pb-16 md:pb-0">
            <AnimatedSection>
              <p className="micro-text text-primary-foreground/50 mb-5">Vyjednavač · Konzultant · Lektor</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-primary-foreground mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                Vyjednám vám lepší podmínky. Nebo vás naučím, jak je vyjednávat&nbsp;sami.
              </h1>
              <p className="body-md text-primary-foreground/55 mb-10 max-w-md">
                Pomáhám firmám i jednotlivcům ve chvílích, kdy na výsledku skutečně záleží – v kontraktech, sporech, cenách i strategických jednáních.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button variant="premium" size="xl" asChild>
                  <Link to="/kontakt">Domluvit úvodní hovor</Link>
                </Button>
                <Button variant="premium-outline" size="xl" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  <Link to="/kurzy">Zobrazit kurzy</Link>
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/30">
                Diskrétnost je samozřejmost. Stručně popíšete situaci, do 24 hodin navrhnu další krok.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PROOF TILES */}
      <section className="border-b border-border/40">
        <div className="container-wide py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {proofTiles.map((tile, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="divider mx-auto mb-4" />
                  <p className="body-sm text-muted-foreground font-medium">{tile.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* THREE WAYS */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading label="Způsoby spolupráce" title="Tři cesty k lepšímu výsledku" />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="premium-card flex flex-col h-full">
                  <p className="micro-text mb-4">0{i + 1}</p>
                  <h3 className="heading-sm mb-4">{s.title}</h3>
                  <p className="body-md text-muted-foreground mb-8 flex-1">{s.desc}</p>
                  <Button variant="premium-outline" size="lg" asChild>
                    <Link to={s.href}>{s.cta}</Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE TOGGLE */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex border border-primary-foreground/20 rounded-none">
              <button
                onClick={() => setAudience("firmy")}
                className={`px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all ${
                  audience === "firmy"
                    ? "bg-primary-foreground text-foreground"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
              >
                Pro firmy
              </button>
              <button
                onClick={() => setAudience("jednotlivci")}
                className={`px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all ${
                  audience === "jednotlivci"
                    ? "bg-primary-foreground text-foreground"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
              >
                Pro jednotlivce
              </button>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="body-lg text-primary-foreground/70 mb-8">
                {audience === "firmy"
                  ? "Když je ve hře cena, riziko nebo vztah, slabá příprava je drahá. Pomohu vám vyjednat i vybojovat prostor pro dohodu."
                  : 'Pomohu vám, když se nechcete spoléhat na náhodu, emoce a \u201Enějak to dopadne\u201C.'}
              </p>
              <ul className="space-y-4 mb-10">
                {(audience === "firmy" ? firmy : jednotlivci).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                    <span className="text-primary-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="premium" size="xl" asChild className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                <Link to="/kontakt">Chci probrat situaci</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            label="Výsledky"
            title="Výsledek je měřitelný. A přichází z přípravy."
            subtitle="Vybrané dopady z reálných zakázek."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="premium-card text-center">
                  <p className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-3">{r.number}</p>
                  <p className="body-sm text-muted-foreground">{r.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-8">
            <p className="text-xs text-muted-foreground">
              Detaily sdílím diskrétně a podle kontextu. Ne všechny zakázky lze publikovat.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <SectionHeading label="Proces" title="Jak probíhá spolupráce" />
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {processSteps.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div>
                  <p className="font-serif text-5xl font-semibold text-border mb-4">{s.step}</p>
                  <h3 className="heading-sm mb-3">{s.title}</h3>
                  <p className="body-md text-muted-foreground">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-16">
            <Button variant="premium" size="xl" asChild>
              <Link to="/kontakt">Domluvit úvodní hovor</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* COURSES */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading label="Kurzy" title="Kurzy a tréninky vyjednávání" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="premium-card flex flex-col h-full">
                  <h3 className="heading-sm mb-2">{c.title}</h3>
                  <p className="body-sm text-muted-foreground mb-4">{c.sub}</p>
                  <p className="font-serif text-xl font-semibold text-primary mb-6">{c.price}</p>
                  <div className="mt-auto">
                    <Button variant="premium-outline" size="lg" asChild className="w-full">
                      <Link to={c.href}>{c.cta}</Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <p className="micro-text text-primary-foreground/40 mb-4">Reference</p>
            <h2 className="heading-lg text-primary-foreground">Co říkají klienti</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="border border-primary-foreground/10 p-8 md:p-10">
                  <p className="font-serif text-xl md:text-2xl text-primary-foreground/80 mb-6 leading-relaxed italic">
                    „{t.quote}"
                  </p>
                  <p className="text-sm text-primary-foreground/40">{t.author}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT MINI */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection>
              <img src={aboutImg} alt="Ondřej Vojáček" className="w-full max-w-md mx-auto" loading="lazy" width={800} height={1000} />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="micro-text mb-4">O mně</p>
              <h2 className="heading-lg mb-6">Ondřej Vojáček</h2>
              <p className="body-md text-muted-foreground mb-4">
                doc. Ing. Ondřej Vojáček, Ph.D. – vyjednavač, vysokoškolský pedagog a ekonom. Vyjednávám od roku 2009. Zkušenosti z evropských jednání i z běžné byznysové praxe.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Zkušenosti z evropských jednání i konzultační praxe",
                  "Výsledky v řádech miliard i milionů",
                  "Firemní i individuální výcviky postavené na simulacích",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span className="body-sm text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
              <Button variant="premium-outline" size="lg" asChild>
                <Link to="/o-mne">Více o mně</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow">
          <SectionHeading label="FAQ" title="Časté dotazy" />
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <AccordionItem value={`faq-${i}`} className="border border-border/60 bg-card px-6">
                  <AccordionTrigger className="text-left font-serif text-lg font-medium py-5 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-4">Řekněte mi, co řešíte. Navrhnu další krok.</h2>
            <p className="body-lg text-muted-foreground mb-8">
              Stačí krátký popis situace. Ozvu se do 24 hodin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button variant="premium" size="xl" asChild>
                <Link to="/kontakt">Domluvit úvodní hovor</Link>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>+420 731 407 976</p>
              <p>ondrej.vojacek@gmail.com</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
