import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import SectionHeading from "@/components/sections/SectionHeading";

const courseData: Record<string, {
  title: string;
  subtitle: string;
  audience: string[];
  learns: string[];
  format: string[];
  benefits: string[];
  duration: string;
  price: string;
  ctaText: string;
  ctaHref: string;
}> = {
  "verejny-trenink": {
    title: "Veřejný trénink vyjednávání",
    subtitle: "Třídenní intenzivní výcvik. Psychologie, strategie, simulace reálných situací.",
    audience: [
      "Manažeři a jednatelé",
      "Obchodníci a nákupčí",
      "Podnikatelé a freelanceři",
      "Každý, kdo pravidelně vyjednává",
    ],
    learns: [
      "Systematická příprava na vyjednávání",
      "Práce s BATNA a vyjednávacím prostorem",
      "Psychologie protistrany a čtení signálů",
      "Techniky kontroly ústupků a eskalace",
      "Zvládání tlaku, emocí a manipulace",
      "Reálné simulace s rozborem",
    ],
    format: [
      "3 dny prezenčně",
      "Max. 16 účastníků",
      "70 % praxe, 30 % teorie",
      "Reálné simulace s video rozborem",
    ],
    benefits: [
      "Okamžitě použitelné dovednosti",
      "Certifikát o absolvování",
      "Materiály a checklisty pro praxi",
      "Follow-up konzultace po kurzu",
    ],
    duration: "3 dny",
    price: "39 000 Kč",
    ctaText: "Registrovat se",
    ctaHref: "/kontakt",
  },
  "firemni-trenink": {
    title: "Firemní trénink vyjednávání",
    subtitle: "Trénink na míru pro firemní týmy. Strategie, psychologie a simulace z vašeho prostředí.",
    audience: [
      "Obchodní týmy",
      "Nákupní oddělení",
      "Management a vedení",
      "Key account manažeři",
    ],
    learns: [
      "Vyjednávací strategie pro firemní kontext",
      "Práce s cenou, podmínkami a ústupky",
      "Psychologie a manipulace ve firemním prostředí",
      "Simulace postavené na reálných situacích klienta",
      "Týmové vyjednávání a rozdělení rolí",
    ],
    format: [
      "2–3 dny dle rozsahu",
      "U vás ve firmě nebo v externím prostředí",
      "Obsah přizpůsobený odvětví a rolím",
      "Simulace z vašeho byznysového prostředí",
    ],
    benefits: [
      "Tým vyjednává systematicky a jednotně",
      "Měřitelné zlepšení obchodních podmínek",
      "Materiály a nástroje pro denní praxi",
      "Možnost navazujícího follow-up tréninku",
    ],
    duration: "2–3 dny",
    price: "od 132 000 Kč",
    ctaText: "Poptat firemní trénink",
    ctaHref: "/kontakt",
  },
  "vyjednavani-o-cenach": {
    title: "Vyjednávání o cenách",
    subtitle: "Dvoudenní trénink zaměřený na cenová vyjednávání. Příprava, taktiky a kontrola ústupků.",
    audience: [
      "Nákupčí a procurement manažeři",
      "Obchodníci a sales manažeři",
      "Finanční ředitelé",
      "Každý, kdo vyjednává o ceně",
    ],
    learns: [
      "Příprava cenové argumentace",
      "Taktiky pro snižování i obhajování cen",
      "Řízení ústupků a protihodnot",
      "Práce s kotvením a framing efektem",
      "Zvládání cenového tlaku protistrany",
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
    duration: "2 dny",
    price: "od 126 000 Kč",
    ctaText: "Poptat kurz",
    ctaHref: "/kontakt",
  },
  "individualni-trenink": {
    title: "Individuální trénink",
    subtitle: "Příprava na konkrétní jednání nebo rozvoj vyjednávací dovednosti na míru.",
    audience: [
      "Jednatelé a CEO",
      "Manažeři před klíčovým jednáním",
      "Podnikatelé řešící důležitou dohodu",
      "Kdokoli, kdo chce osobní přípravu",
    ],
    learns: [
      "Rozbor konkrétní situace a protistrany",
      "Příprava strategie a scénářů",
      "Trénink klíčových momentů jednání",
      "Zvládání tlaku a emocí",
      "Osobní vyjednávací styl a jeho posílení",
    ],
    format: [
      "Rozsah dle potřeby (typicky 1–2 dny)",
      "Prezenčně nebo online",
      "100 % zaměřeno na vaši situaci",
      "Možnost podpory v reálném čase při jednání",
    ],
    benefits: [
      "Jdete do jednání s jasným plánem",
      "Kontrola nad průběhem i výsledkem",
      "Sebevědomí podložené přípravou",
      "Diskrétnost a maximální ochrana informací",
    ],
    duration: "Dle potřeby",
    price: "Cena na dotaz",
    ctaText: "Domluvit trénink",
    ctaHref: "/kontakt",
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
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl">
            <p className="micro-text text-brass mb-6">Trénink vyjednávání</p>
            <h1 className="heading-xl text-primary-foreground mb-6">{course.title}</h1>
            <p className="body-lg text-primary-foreground/70 mb-8">{course.subtitle}</p>
            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/50">
              <span>Délka: <strong className="text-primary-foreground/80">{course.duration}</strong></span>
              <span>Cena: <strong className="text-primary-foreground/80">{course.price}</strong></span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pro koho */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection>
              <p className="micro-text text-brass mb-4">Pro koho</p>
              <h2 className="heading-md mb-6">Komu je trénink určen</h2>
              <ul className="space-y-4">
                {course.audience.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brass mt-2.5 shrink-0" />
                    <span className="body-md text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="micro-text text-brass mb-4">Co se naučíte</p>
              <h2 className="heading-md mb-6">Obsah tréninku</h2>
              <ul className="space-y-4">
                {course.learns.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span className="body-md text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Forma a přínosy */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection>
              <p className="micro-text text-brass mb-4">Forma</p>
              <h2 className="heading-md mb-6">Jak trénink probíhá</h2>
              <ul className="space-y-4">
                {course.format.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brass mt-2.5 shrink-0" />
                    <span className="body-md text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="micro-text text-brass mb-4">Přínosy</p>
              <h2 className="heading-md mb-6">Co získáte</h2>
              <ul className="space-y-4">
                {course.benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span className="body-md text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-4">{course.price}</h2>
            <p className="body-lg text-muted-foreground mb-8">{course.subtitle}</p>
            <Button variant="premium" size="xl" asChild>
              <Link to={course.ctaHref}>{course.ctaText}</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
