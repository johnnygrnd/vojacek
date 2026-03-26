import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import SectionHeading from "@/components/sections/SectionHeading";
import heroImg from "@/assets/hero-portrait.jpg";
import trainingImg from "@/assets/training-workshop.jpg";
import aboutImg from "@/assets/about-portrait.jpg";
import { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ─── DATA ─── */

const results = [
  {
    label: "Nákup nemovitosti",
    beforeAfter: "145 mil. Kč → 104,5 mil. Kč",
    main: "−40,5 mil. Kč",
    context: "úspora při nákupu",
  },
  {
    label: "Prodej podniku",
    beforeAfter: "12 mil. Kč → 26,4 mil. Kč",
    main: "+14,4 mil. Kč",
    context: "navýšení hodnoty při prodeji",
  },
  {
    label: "Mzdové vyjednávání",
    beforeAfter: "16 % → 7,5 %",
    main: "−8,5 p.b.",
    context: "snížení mzdových nákladů",
  },
  {
    label: "Nákup technologie",
    beforeAfter: "3,2 mil. Kč → 2,1 mil. Kč",
    main: "−1,1 mil. Kč",
    context: "úspora při nákupu",
  },
  {
    label: "Česká energetika",
    beforeAfter: "—",
    main: "14 mld. Kč",
    context: "celková dosažená úspora",
  },
  {
    label: "Dotace",
    beforeAfter: "—",
    main: "10 mld. Kč",
    context: "udrženo v ČR",
  },
  {
    label: "Strategické vyjednávání",
    beforeAfter: "0 Kč → 18 mil. Kč",
    main: "+18 mil. Kč",
    context: "nově vytvořená hodnota",
  },
];

const situations = [
  {
    title: "Když nemůžete riskovat výsledek",
    desc: "Zastoupení ve vyjednávání — převezmu jednání a dotáhnu dohodu k lepším podmínkám.",
    href: "/vyjednavani",
  },
  {
    title: "Když chcete jít do jednání s kontrolou",
    desc: "Strategie a příprava — dodám vám scénáře, argumentaci a plán, abyste jednali z pozice síly.",
    href: "/sluzby",
  },
  {
    title: "Když chcete, aby tým vyjednával systematicky",
    desc: "Trénink a kurzy — praktické výcviky postavené na simulacích, ne na teorii.",
    href: "/kurzy",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Zmapujeme prostor",
    desc: "Co je ve hře, kdo rozhoduje, kde je páka. Definujeme cíle a prostor pro dohodu.",
  },
  {
    step: "02",
    title: "Navrhneme postup",
    desc: "Scénáře, argumentace, načasování. Připravím detailní strategii pro různé průběhy jednání.",
  },
  {
    step: "03",
    title: "Dotáhneme výsledek",
    desc: "Vedení jednání nebo příprava na klíčové momenty. Vždy s cílem posunout podmínky.",
  },
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

const courses = [
  {
    title: "Veřejný trénink",
    sub: "Třídenní komplexní vyjednávání",
    forWho: "Pro jednotlivce i malé týmy",
    duration: "3 dny",
    outcome: "Dovednost vyjednávat systematicky",
    price: "39 000 Kč",
    badge: "Nejoblíbenější",
    cta: "Termíny a registrace",
    href: "/verejny-trenink",
  },
  {
    title: "Firemní trénink",
    sub: "Strategie a psychologie ve vyjednávání",
    forWho: "Pro obchodní a nákupní týmy",
    duration: "2–3 dny",
    outcome: "Tým vyjednává systematicky",
    price: "od 132 000 Kč",
    cta: "Poptat firemní školení",
    href: "/kontakt",
  },
  {
    title: "Vyjednávání o cenách",
    sub: "Dvoudenní intenzivní trénink",
    forWho: "Pro nákupčí a obchodníky",
    duration: "2 dny",
    outcome: "Lepší ceny a podmínky",
    price: "od 126 000 Kč",
    cta: "Poptat kurz",
    href: "/kontakt",
  },
  {
    title: "Individuální trénink",
    sub: "Na míru, individuální přístup",
    forWho: "Pro manažery a jednatele",
    duration: "Dle potřeby",
    outcome: "Příprava na konkrétní jednání",
    price: "Cena na dotaz",
    cta: "Domluvit trénink",
    href: "/kontakt",
  },
];

const faqs = [
  {
    q: "Je vhodné najmout vyjednavače jen kvůli ceně?",
    a: 'Ano. Cena je jedním z nejčastějších důvodů. Profesionální příprava a zastoupení přináší měřitelné výsledky i v případech, kde jde \u201Ejen\u201C o vyjednání lepší ceny.',
  },
  {
    q: "Co budete potřebovat na začátku?",
    a: "Stručný popis situace, vaše cíle a představu o ideálním výsledku. Vše ostatní řešíme společně na úvodním hovoru.",
  },
  {
    q: "Jak rychle se umíme posunout?",
    a: "Úvodní hovor lze domluvit do 24 hodin. Přípravu strategie obvykle zvládáme v řádu dní.",
  },
  {
    q: "Co když je protistrana tvrdá?",
    a: "Právě v těchto situacích vzniká největší rozdíl ve výsledku. Klíč je v přípravě scénářů, znalosti alternativ a kontrole emocí.",
  },
  {
    q: "Zastupujete i jednotlivce?",
    a: "Ano. Od nemovitostních transakcí po pojistné události a majetkové spory.",
  },
  {
    q: "Lze firemní kurz upravit na míru?",
    a: "Každý firemní kurz přizpůsobuji konkrétním potřebám, odvětví a situacím klienta.",
  },
];

/* ─── COUNT-UP HOOK ─── */

function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}

function CountUpNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, value } = useCountUp(target);
  return <span ref={ref}>{value}{suffix}</span>;
}

/* ─── PAGE ─── */

export default function Index() {
  const [audience, setAudience] = useState<"firmy" | "jednotlivci">("firmy");

  return (
    <Layout>
      {/* ═══════ HERO ═══════ */}
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
              <p className="micro-text text-primary-foreground/50 mb-5">
                Vyjednavač · Konzultant · Lektor
              </p>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] tracking-tight text-primary-foreground mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Lepší podmínky nejsou náhoda. Jsou&nbsp;vyjednané.
              </h1>
              <p className="body-md text-primary-foreground/55 mb-10 max-w-md">
                Pomáhám firmám i jednotlivcům vyjednat zásadní podmínky — v kontraktech, sporech i strategických rozhodnutích.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button variant="premium" size="xl" asChild>
                  <Link to="/kontakt">Získat návrh postupu</Link>
                </Button>
                <Button
                  variant="premium-outline"
                  size="xl"
                  asChild
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
                >
                  <Link to="/kurzy">Zobrazit kurzy</Link>
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/30">
                Ozvu se do 24 hodin. Diskrétnost je samozřejmost.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════ RESULTS ═══════ */}
      <section className="py-24 md:py-32 lg:py-36">
        <div className="container-wide">
          <SectionHeading
            label="Výsledky"
            title="Výsledek je měřitelný. A přichází z přípravy."
          />

          {/* 3×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {results.slice(0, 6).map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="premium-card text-center py-8 px-6 h-full flex flex-col items-center justify-center">
                  <p className="micro-text mb-3">{r.label}</p>
                  <p className="text-sm text-muted-foreground mb-1">{r.beforeAfter}</p>
                  <p className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-1">
                    {r.main}
                  </p>
                  <p className="body-sm text-muted-foreground">{r.context}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Featured card */}
          {results[6] && (
            <AnimatedSection delay={0.4} className="mt-5">
              <div className="premium-card flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 py-10 px-10 md:px-16 bg-foreground/[0.03]">
                <p className="micro-text shrink-0">{results[6].label}</p>
                <p className="text-sm text-muted-foreground">{results[6].beforeAfter}</p>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                  {results[6].main}
                </p>
                <p className="body-sm text-muted-foreground">{results[6].context}</p>
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection className="text-center mt-8">
            <p className="text-xs text-muted-foreground">
              Detaily sdílím diskrétně. Ne všechny zakázky lze publikovat.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════ SITUATIONS ═══════ */}
      <section className="py-24 md:py-32 lg:py-36 bg-secondary/50">
        <div className="container-wide">
          <SectionHeading
            label="Kdy se ozvat"
            title="Rozhodující chvíle vyžadují přípravu"
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {situations.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="premium-card flex flex-col h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <p className="micro-text mb-4">0{i + 1}</p>
                  <h3 className="heading-sm mb-4">{s.title}</h3>
                  <p className="body-md text-muted-foreground mb-8 flex-1">{s.desc}</p>
                  <Button variant="premium-outline" size="lg" asChild>
                    <Link to={s.href}>Probrat situaci</Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PROCESS ═══════ */}
      <section className="py-24 md:py-32 lg:py-36">
        <div className="container-wide">
          <SectionHeading label="Proces" title="Jak probíhá spolupráce" />
          <div className="relative grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Connecting line – desktop */}
            <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-border" />

            {processSteps.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
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

      {/* ═══════ FOR WHO (TOGGLE) ═══════ */}
      <section className="py-24 md:py-32 lg:py-36 bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-6">
            <p className="micro-text text-primary-foreground/40 mb-4">Pro koho</p>
            <h2 className="heading-lg text-primary-foreground mb-4">
              Řešíte firmu nebo osobní situaci?
            </h2>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex border border-primary-foreground/20">
              <button
                onClick={() => setAudience("firmy")}
                className={`px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-200 ${
                  audience === "firmy"
                    ? "bg-primary-foreground text-foreground"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
              >
                Pro firmy
              </button>
              <button
                onClick={() => setAudience("jednotlivci")}
                className={`px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-200 ${
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
                  ? "Když je ve hře cena, riziko nebo vztah, slabá příprava je drahá."
                  : "Pomohu vám, když se nechcete spoléhat na náhodu a emoce."}
              </p>
              <ul className="space-y-4 mb-10">
                {(audience === "firmy" ? firmy : jednotlivci).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                    <span className="text-primary-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="premium"
                size="xl"
                asChild
                className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
              >
                <Link to="/kontakt">Chci probrat situaci</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-24 md:py-32 lg:py-36 bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="micro-text text-primary-foreground/40 mb-4">Reference</p>
            <h2 className="heading-lg text-primary-foreground">Co říkají klienti</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="border border-primary-foreground/10 p-8 md:p-10">
                  <p className="font-serif text-xl md:text-2xl text-primary-foreground/85 mb-6 leading-relaxed">
                    „{t.quote}"
                  </p>
                  <p className="text-sm text-primary-foreground/40">{t.author}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ABOUT ═══════ */}
      <section className="py-24 md:py-32 lg:py-36">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimatedSection>
              <img
                src={aboutImg}
                alt="Ondřej Vojáček"
                className="w-full max-w-md mx-auto"
                loading="lazy"
                width={800}
                height={1000}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="micro-text mb-4">O mně</p>
              <h2 className="heading-lg mb-6">Ondřej Vojáček</h2>
              <p className="body-md text-muted-foreground mb-4">
                doc. Ing. Ondřej Vojáček, Ph.D. — vyjednavač, vysokoškolský pedagog a ekonom. Vyjednávám od roku 2009.
              </p>
              <p className="body-md text-muted-foreground mb-6">
                Zkušenosti z evropských jednání, transakcí v řádech miliard i z běžné byznysové praxe.
              </p>
              <p className="font-serif text-lg md:text-xl font-medium text-foreground mb-8 leading-snug">
                „Nejčastější problém: lidé jdou do jednání bez&nbsp;strategie."
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Od roku 2009 ve vyjednávání",
                  "Výsledky v řádech miliard i milionů",
                  "Kurzy postavené na simulacích, ne na teorii",
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

      {/* ═══════ COURSES ═══════ */}
      <section className="py-24 md:py-32 lg:py-36 bg-secondary/50">
        <div className="container-wide">
          <SectionHeading
            label="Kurzy"
            title="Kurzy a tréninky vyjednávání"
            subtitle="Praktické výcviky postavené na simulacích. Žádné povídání — dovednost."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="premium-card flex flex-col h-full relative">
                  {c.badge && (
                    <span className="absolute -top-3 right-6 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.15em] font-semibold px-3 py-1">
                      {c.badge}
                    </span>
                  )}
                  <h3 className="heading-sm mb-2">{c.title}</h3>
                  <p className="body-sm text-muted-foreground mb-4">{c.sub}</p>
                  <div className="space-y-1 mb-4">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">Pro koho:</span> {c.forWho}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">Délka:</span> {c.duration}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">Výsledek:</span> {c.outcome}
                    </p>
                  </div>
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

      {/* ═══════ FAQ ═══════ */}
      <section className="py-24 md:py-32 lg:py-36">
        <div className="container-narrow">
          <SectionHeading label="FAQ" title="Časté dotazy" />
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <AccordionItem
                  value={`faq-${i}`}
                  className="border border-border/60 bg-card px-6"
                >
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

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="py-24 md:py-32 lg:py-36 bg-foreground text-primary-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-primary-foreground mb-4">
              Řekněte mi, co řešíte. Navrhnu další&nbsp;krok.
            </h2>
            <p className="body-lg text-primary-foreground/60 mb-10">
              Stačí krátký popis situace. Ozvu se do 24 hodin.
            </p>
            <Button
              variant="premium"
              size="xl"
              asChild
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
            >
              <Link to="/kontakt">Získat návrh postupu</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
