import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { Check, X } from "lucide-react";

const courseData: Record<string, {
  title: string;
  outcome: string;
  targetAudience: string;
  forWhom: string[];
  notFor: string[];
  whatChanges: string[];
  modules: { title: string; desc: string }[];
  format: string[];
  benefits: string[];
  trustIndicators: string[];
  duration: string;
  price: string;
  ctaText: string;
}> = {
  "verejny-trenink": {
    title: "Veřejný trénink vyjednávání",
    outcome: "Třídenní intenzivní výcvik, po kterém budete vyjednávat jinak — s přípravou, strategií a kontrolou nad výsledkem.",
    targetAudience: "Pro jednotlivce, manažery a profesionály, kteří chtějí zvládnout vyjednávání jako disciplínu.",
    forWhom: [
      "Manažeři a jednatelé, kteří pravidelně vyjednávají",
      "Obchodníci a nákupčí, kteří chtějí lepší výsledky",
      "Podnikatelé před důležitým jednáním",
      "Profesionálové, kteří chtějí systém místo improvizace",
    ],
    notFor: [
      "Hledáte motivační přednášku nebo team building",
      "Chcete inspirativní workshop bez tlaku",
      "Nechcete aktivně vyjednávat před ostatními",
    ],
    whatChanges: [
      "Půjdete do jednání s jasnou strategií místo improvizace",
      "Budete umět číst protistranu a reagovat na manipulaci",
      "Naučíte se řídit ústupky a kontrolovat průběh",
      "Získáte systematický přístup, který funguje opakovaně",
    ],
    modules: [
      { title: "Příprava a strategie", desc: "BATNA, vyjednávací prostor, profil protistrany, scénáře. Základ každého úspěšného jednání." },
      { title: "Psychologie vyjednávání", desc: "Čtení signálů, práce s emocemi, rozpoznání manipulace. Co se děje pod povrchem." },
      { title: "Techniky a taktiky", desc: "Kotvení, framing, řízení ústupků, práce s časem a tlakem." },
      { title: "Simulace a rozbory", desc: "Reálné vyjednávací situace pod tlakem. Video rozbor, zpětná vazba, iterace." },
    ],
    format: [
      "3 dny prezenčně (Praha)",
      "Max. 16 účastníků",
      "70 % praxe, 30 % teorie",
      "Reálné simulace s video rozborem",
      "Materiály a checklisty pro praxi",
    ],
    benefits: [
      "Okamžitě použitelné dovednosti",
      "Certifikát o absolvování",
      "Follow-up konzultace po kurzu",
      "Přístup k materiálům a nástrojům",
    ],
    trustIndicators: [
      "Nejkomplexnější otevřený trénink vyjednávání v ČR",
      "Vedený vyjednavačem s 15+ lety praxe",
      "100+ realizovaných tréninků",
      "Absolventi z firem jako…", // intentionally vague for privacy
    ],
    duration: "3 dny",
    price: "39 000 Kč",
    ctaText: "Rezervovat místo",
  },
  "firemni-trenink": {
    title: "Firemní trénink vyjednávání",
    outcome: "Trénink na míru pro váš tým. Simulace z vašeho prostředí, strategie pro vaše situace, měřitelný posun v dohodách.",
    targetAudience: "Pro firemní týmy, které potřebují vyjednávat systematicky a s lepšími výsledky.",
    forWhom: [
      "Obchodní týmy, které chtějí lepší podmínky",
      "Nákupní oddělení s opakujícími se vyjednáváními",
      "Management a vedení firmy",
      "Key account manažeři",
    ],
    notFor: [
      "Hledáte obecný kurz komunikace nebo soft skills",
      "Tým má méně než 6 lidí (zvažte individuální trénink)",
      "Potřebujete jednorázovou přednášku",
    ],
    whatChanges: [
      "Tým vyjednává systematicky a jednotně",
      "Obchodní podmínky se měřitelně zlepší",
      "Lidé přestanou dávat zbytečné ústupky",
      "Vyjednávání přestane být o improvizaci",
    ],
    modules: [
      { title: "Vyjednávací strategie", desc: "Přizpůsobená vašemu odvětví a typickým vyjednávacím situacím." },
      { title: "Práce s cenou a ústupky", desc: "Kotvení, protihodnoty, kontrola cenového prostoru." },
      { title: "Psychologie a manipulace", desc: "Rozpoznání taktik protistrany, práce s tlakem." },
      { title: "Týmové simulace", desc: "Reálné scénáře z vašeho byznysového prostředí." },
    ],
    format: [
      "2–3 dny dle rozsahu",
      "U vás ve firmě nebo v externím prostředí",
      "Obsah přizpůsobený odvětví a rolím",
      "Simulace z vašeho byznysového prostředí",
      "8–16 účastníků",
    ],
    benefits: [
      "Tým vyjednává systematicky a jednotně",
      "Měřitelné zlepšení obchodních podmínek",
      "Materiály a nástroje pro denní praxi",
      "Možnost navazujícího follow-up tréninku",
    ],
    trustIndicators: [
      "Realizováno pro firmy z energetiky, IT, výroby, FMCG",
      "Vedený vyjednavačem, ne lektorem z příručky",
      "Simulace přizpůsobené reálným situacím klienta",
    ],
    duration: "2–3 dny",
    price: "od 132 000 Kč",
    ctaText: "Poptat firemní trénink",
  },
  "vyjednavani-o-cenach": {
    title: "Vyjednávání o cenách",
    outcome: "Dvoudenní specializovaný trénink zaměřený na cenová vyjednávání. Kotvení, kontrola ústupků, práce s cenovým prostorem.",
    targetAudience: "Pro každého, kdo pravidelně vyjednává o ceně — na straně nákupu i prodeje.",
    forWhom: [
      "Nákupčí a procurement manažeři",
      "Obchodníci a sales manažeři",
      "Finanční ředitelé",
      "Každý, kdo vyjednává o ceně",
    ],
    notFor: [
      "Hledáte obecný kurz vyjednávání (zvažte veřejný trénink)",
      "Nevyjednáváte o cenách pravidelně",
    ],
    whatChanges: [
      "Budete umět kotvit a bránit svou cenu",
      "Přestanete dávat ústupky bez protihodnoty",
      "Získáte jistotu v cenových diskusích",
      "Naučíte se pracovat s cenou jako strategickým nástrojem",
    ],
    modules: [
      { title: "Cenová příprava", desc: "Analýza cenového prostoru, příprava argumentace, scénáře." },
      { title: "Kotvení a framing", desc: "Jak ovlivnit vnímání ceny dříve, než padne první číslo." },
      { title: "Řízení ústupků", desc: "Kdy ustoupit, kolik, za co. Kontrola nad každým ústupkem." },
      { title: "Cenové simulace", desc: "Reálné situace pod tlakem. Prodejní i nákupní strana." },
    ],
    format: [
      "2 dny intenzivně",
      "Důraz na praktické simulace",
      "Rozbory reálných cenových vyjednávání",
      "Max. 16 účastníků",
    ],
    benefits: [
      "Lepší ceny a podmínky od prvního jednání",
      "Kontrola nad cenovými ústupky",
      "Jistota v cenových diskusích",
      "Checklisty pro cenová vyjednávání",
    ],
    trustIndicators: [
      "Ověřeno v nákupu i prodeji",
      "Vedeno s reálnými čísly a příklady",
    ],
    duration: "2 dny",
    price: "od 126 000 Kč",
    ctaText: "Poptat kurz",
  },
  "individualni-trenink": {
    title: "Individuální trénink",
    outcome: "Příprava šitá na míru — na konkrétní jednání, nebo jako dlouhodobý rozvoj vyjednávací dovednosti.",
    targetAudience: "Pro jednatele, manažery a podnikatele, kteří řeší důležité jednání nebo chtějí osobní posun.",
    forWhom: [
      "CEO a jednatelé před klíčovým jednáním",
      "Manažeři, kteří chtějí silnější vyjednávací pozici",
      "Podnikatelé řešící důležitou dohodu",
      "Kdokoli, kdo chce maximální osobní přípravu",
    ],
    notFor: [
      "Hledáte skupinový kurz (zvažte veřejný trénink)",
      "Nepotřebujete přípravu na konkrétní situaci",
    ],
    whatChanges: [
      "Půjdete do jednání s jasným plánem a scénáři",
      "Budete mít kontrolu nad průběhem i výsledkem",
      "Sebevědomí podložené přípravou, ne improvizací",
      "Možnost podpory přímo v průběhu jednání",
    ],
    modules: [
      { title: "Rozbor situace", desc: "Analýza vaší pozice, protistrany, cílů a rizik." },
      { title: "Strategie a scénáře", desc: "Plán A, B, C. Co když řeknou ne. Co když eskalují." },
      { title: "Trénink klíčových momentů", desc: "Simulace kritických bodů jednání. Zpětná vazba." },
      { title: "Podpora při jednání", desc: "Volitelně: konzultace v reálném čase při samotném jednání." },
    ],
    format: [
      "Rozsah dle potřeby (typicky 1–2 dny)",
      "Prezenčně nebo online",
      "100 % zaměřeno na vaši situaci",
      "Maximální diskrétnost",
    ],
    benefits: [
      "Jdete do jednání s jasným plánem",
      "Kontrola nad průběhem i výsledkem",
      "Sebevědomí podložené přípravou",
      "Diskrétnost a ochrana informací",
    ],
    trustIndicators: [
      "Využíváno jednateli, CEO a vlastníky firem",
      "Diskrétní, osobní, zaměřené na výsledek",
    ],
    duration: "Dle potřeby",
    price: "Cena na dotaz",
    ctaText: "Domluvit trénink",
  },
};

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? courseData[slug] : null;

  if (!course) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-narrow text-center">
            <h1 className="heading-lg mb-6">Kurz nenalezen</h1>
            <Button variant="premium" asChild>
              <Link to="/kurzy">Zpět na kurzy</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 lg:py-32 bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl">
            <div className="w-10 h-px bg-brass mb-6" />
            <h1 className="heading-xl text-primary-foreground mb-6">{course.title}</h1>
            <p className="body-lg text-primary-foreground/60 mb-8">{course.outcome}</p>
            <p className="body-md text-primary-foreground/40 mb-8">{course.targetAudience}</p>
            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/40">
              <span>Délka: <strong className="text-primary-foreground/70">{course.duration}</strong></span>
              <span>Cena: <strong className="text-primary-foreground/70">{course.price}</strong></span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* For whom / Not for */}
      <section className="py-20 md:py-24">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <AnimatedSection>
              <p className="micro-text text-brass mb-4">Pro koho je trénink</p>
              <ul className="space-y-4">
                {course.forWhom.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-brass mt-1 shrink-0" />
                    <span className="body-md text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="micro-text text-muted-foreground mb-4">Pro koho naopak ne</p>
              <ul className="space-y-4">
                {course.notFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X size={16} className="text-muted-foreground/40 mt-1 shrink-0" />
                    <span className="body-md text-muted-foreground/60">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What changes */}
      <section className="py-20 md:py-24 bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="mb-12">
            <p className="micro-text text-brass mb-4">Po absolvování</p>
            <h2 className="heading-md">Co se změní</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {course.whatChanges.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <span className="w-6 h-px bg-brass mt-3 shrink-0" />
                  <p className="body-md text-foreground">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 md:py-24">
        <div className="container-wide">
          <AnimatedSection className="mb-12">
            <p className="micro-text text-brass mb-4">Obsah tréninku</p>
            <h2 className="heading-md">Hlavní moduly</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl">
            {course.modules.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="premium-card h-full border-l-2 border-brass/30">
                  <p className="text-xs font-semibold text-brass tracking-[0.15em] uppercase mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="heading-sm mb-3">{m.title}</h3>
                  <p className="body-sm text-muted-foreground">{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Format & Benefits */}
      <section className="py-20 md:py-24 bg-foreground text-primary-foreground">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <AnimatedSection>
              <p className="micro-text text-brass mb-4">Forma</p>
              <h2 className="heading-md text-primary-foreground mb-6">Praktické informace</h2>
              <ul className="space-y-4">
                {course.format.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-brass mt-2.5 shrink-0" />
                    <span className="body-md text-primary-foreground/60">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="micro-text text-brass mb-4">Přínosy</p>
              <h2 className="heading-md text-primary-foreground mb-6">Co získáte</h2>
              <ul className="space-y-4">
                {course.benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-brass mt-1 shrink-0" />
                    <span className="body-md text-primary-foreground/60">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-16 md:py-20 border-b border-border/40">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-center">
            {course.trustIndicators.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <p className="body-sm text-muted-foreground">{t}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 lg:py-36 bg-gradient-to-br from-brass/90 to-brass">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">{course.price}</p>
            <p className="body-lg text-foreground/70 mb-10">{course.outcome}</p>
            <Button variant="premium" size="xl" asChild className="bg-foreground text-primary-foreground hover:bg-foreground/90">
              <Link to="/kontakt">{course.ctaText}</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
